import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  let events: any[] = [];
  let studios: any[] = [];

  try {
    const mod = await import('$lib/data/events.json');
    events = (mod && (mod.default ?? mod)) as any[];
  } catch {
    const fb = await import('$lib/data/fallback/events.json');
    events = (fb && (fb.default ?? fb)) as any[];
  }

  try {
    const mod = await import('$lib/data/studios.json');
    studios = (mod && (mod.default ?? mod)) as any[];
  } catch {
    const fb = await import('$lib/data/fallback/studios.json');
    studios = (fb && (fb.default ?? fb)) as any[];
  }

  return { events, studios };
};
