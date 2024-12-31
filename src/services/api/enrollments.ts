import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Enrollment = Database['public']['Tables']['class_enrollments']['Row'];

export async function getEnrollments(classId?: string, studentId?: string) {
  const query = supabase
    .from('class_enrollments')
    .select(`
      *,
      classes (
        name,
        subject
      ),
      profiles!class_enrollments_student_id_fkey (
        first_name,
        last_name
      )
    `);

  if (classId) query.eq('class_id', classId);
  if (studentId) query.eq('student_id', studentId);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function enrollStudent(enrollment: Database['public']['Tables']['class_enrollments']['Insert']) {
  const { data, error } = await supabase
    .from('class_enrollments')
    .insert(enrollment)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateEnrollment(
  id: string,
  updates: Database['public']['Tables']['class_enrollments']['Update']
) {
  const { data, error } = await supabase
    .from('class_enrollments')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}