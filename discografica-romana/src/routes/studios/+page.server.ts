import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  try {
    const { data: studiosData, error } = await locals.supabase
      .from('studios')
      .select('id,name,description,services,image_url,slug,created_at')
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) {
      console.error('Supabase load studios error', error);
      return { studios: [] };
    }

    return { studios: studiosData ?? [] };
  } catch (e) {
    console.error('Load studios failed', e);
    return { studios: [] };
  }
};