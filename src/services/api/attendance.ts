import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Attendance = Database['public']['Tables']['attendance']['Row'];

export async function getAttendance(studentId?: string, classId?: string) {
  const query = supabase
    .from('attendance')
    .select(`
      *,
      profiles!attendance_student_id_fkey (
        first_name,
        last_name
      ),
      classes (
        name,
        subject
      )
    `);

  if (studentId) query.eq('student_id', studentId);
  if (classId) query.eq('class_id', classId);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function recordAttendance(attendance: Database['public']['Tables']['attendance']['Insert']) {
  const { data, error } = await supabase
    .from('attendance')
    .insert(attendance)
    .select()
    .single();

  if (error) throw error;
  return data;
}