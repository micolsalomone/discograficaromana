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

    if (errUp || errPast) {
      console.error('Supabase load events error', errUp ?? errPast);
      return { events: [] };
    }

    const mappedUpcoming = (upcoming ?? []).map(e => ({ ...e, is_past: false }));
    const mappedPast = (past ?? []).map(e => ({ ...e, is_past: true }));

    return { events: [...mappedUpcoming, ...mappedPast] };
  } catch (e) {
    console.error('Load events failed', e);
    return { events: [] };
  }
};