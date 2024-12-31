import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Message = Database['public']['Tables']['messages']['Row'];

export async function getMessages(userId: string) {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      sender:profiles!messages_sender_id_fkey (
        first_name,
        last_name
      ),
      recipient:profiles!messages_recipient_id_fkey (
        first_name,
        last_name
      )
    `)
    .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function sendMessage(message: Database['public']['Tables']['messages']['Insert']) {
  const { data, error } = await supabase
    .from('messages')
    .insert(message)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function markMessageAsRead(id: string) {
  const { error } = await supabase
    .from('messages')
    .update({ read: true })
    .eq('id', id);

  if (error) throw error;
}