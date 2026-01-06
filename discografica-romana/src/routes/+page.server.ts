import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  try {
    const now = new Date().toISOString();

    const { data: upcoming, error: errUp } = await locals.supabase
      .from('events')
      .select('*')
      .gte('start_at', now)
      .order('start_at', { ascending: true })
      .limit(500);

    const { data: past, error: errPast } = await locals.supabase
      .from('events')
      .select('*')
      .lt('start_at', now)
      .order('start_at', { ascending: false })
      .limit(500);

    // fetch studios
    const { data: studiosData, error: errStudios } = await locals.supabase
      .from('studios')
      .select('id,name,description,services,image_url,slug,created_at')
      .order('created_at', { ascending: false })
      .limit(50);

    if (errUp || errPast) {
      console.error('Supabase load events error', errUp ?? errPast);
      return { events: [], studios: studiosData ?? [] };
    }

    if (errStudios) {
      console.error('Supabase load studios error', errStudios);
    }

    const mappedUpcoming = (upcoming ?? []).map(e => ({ ...e, is_past: false }));
    const mappedPast = (past ?? []).map(e => ({ ...e, is_past: true }));

    return { events: [...mappedUpcoming, ...mappedPast], studios: studiosData ?? [] };
  } catch (e) {
    console.error('Load events failed', e);
    return { events: [], studios: [] };
  }
};