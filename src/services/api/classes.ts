import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Class = Database['public']['Tables']['classes']['Row'];

export async function getClasses(teacherId?: string) {
  const query = supabase
    .from('classes')
    .select(`
      *,
      profiles!classes_teacher_id_fkey (
        first_name,
        last_name
      )
    `);

  if (teacherId) {
    query.eq('teacher_id', teacherId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createClass(classData: Database['public']['Tables']['classes']['Insert']) {
  const { data, error } = await supabase
    .from('classes')
    .insert(classData)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateClass(
  id: string,
  updates: Database['public']['Tables']['classes']['Update']
) {
  const { data, error } = await supabase
    .from('classes')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}