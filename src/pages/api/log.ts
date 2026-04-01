import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const user_id = data.get('user_id')?.toString();
    const action_id = data.get('action_id')?.toString();

    if (!user_id || !action_id) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const { error } = await supabase
      .from('logs')
      .insert([{ user_id, action_id }]);

    if (error) throw error;

    return Response.redirect(new URL('/', request.url), 303);
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};