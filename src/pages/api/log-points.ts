import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { targetUserId, actionId } = body;

  if (!targetUserId || !actionId) {
    return new Response(JSON.stringify({ error: 'Faltan datos' }), { status: 400 });
  }

  const { error } = await supabase
    .from('activity_log')
    .insert([{ 
      user_id: targetUserId, 
      action_id: actionId 
    }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};