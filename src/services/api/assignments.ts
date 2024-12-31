import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Assignment = Database['public']['Tables']['assignments']['Row'];

export async function getAssignments(classId?: string) {
  const query = supabase
    .from('assignments')
    .select(`
      *,
      classes (
        name,
        subject
      )
    `);

  if (classId) {
    query.eq('class_id', classId);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createAssignment(assignment: Database['public']['Tables']['assignments']['Insert']) {
  const { data, error } = await supabase
    .from('assignments')
    .insert(assignment)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateAssignment(
  id: string,
  updates: Database['public']['Tables']['assignments']['Update']
) {
  const { data, error } = await supabase
    .from('assignments')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}