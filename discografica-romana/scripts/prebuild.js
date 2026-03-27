import fs from 'fs';
import path from 'path';

const root = process.cwd();
const fallbackDir = path.join(root, 'src', 'lib', 'data', 'fallback');
const outDir = path.join(root, 'src', 'lib', 'data');

function copyFallback() {
  if (!fs.existsSync(fallbackDir)) {
    console.warn('No fallback data found at', fallbackDir);
    return;
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(fallbackDir);
  for (const f of files) {
    const src = path.join(fallbackDir, f);
    const dest = path.join(outDir, f);
    fs.copyFileSync(src, dest);
    console.log('Copied fallback', f);
  }
}

async function fetchTable(table) {
  const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) throw new Error('Supabase env vars missing');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  const url = `${SUPABASE_URL.replace(/\/+$/,'')}/rest/v1/${table}?select=*`;

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    signal: controller.signal,
  });
  clearTimeout(timeout);
  if (!res.ok) throw new Error(`Fetch ${table} failed: ${res.status}`);
  return res.json();
}

async function main() {
  try {
    if (process.env.USE_FALLBACK === 'true') {
      console.log('USE_FALLBACK=true, copying fallback data');
      copyFallback();
      return;
    }

    console.log('Attempting to fetch data from Supabase REST API...');
    const tables = ['events', 'studios'];
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    for (const t of tables) {
      try {
        const data = await fetchTable(t);
        fs.writeFileSync(path.join(outDir, `${t}.json`), JSON.stringify(data, null, 2));
        console.log(`Wrote ${t}.json (${(data || []).length} items)`);
      } catch (err) {
        console.warn(`Failed to fetch ${t}:`, err.message);
        console.log('Using fallback for', t);
        copyFallback();
        break;
      }
    }
  } catch (err) {
    console.warn('Prebuild encountered an error:', err.message);
    copyFallback();
  }
}

main();
