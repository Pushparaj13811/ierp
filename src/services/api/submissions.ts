import { supabase } from '../../lib/supabase';
import type { Database } from '../../types/supabase';

type Submission = Database['public']['Tables']['assignment_submissions']['Row'];

export async function getSubmissions(assignmentId?: string, studentId?: string) {
  const query = supabase
    .from('assignment_submissions')
    .select(`
      *,
      assignments (
        title,
        due_date
      ),
      profiles!assignment_submissions_student_id_fkey (
        first_name,
        last_name
      )
    `);

  if (assignmentId) query.eq('assignment_id', assignmentId);
  if (studentId) query.eq('student_id', studentId);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function submitAssignment(submission: Database['public']['Tables']['assignment_submissions']['Insert']) {
  const { data, error } = await supabase
    .from('assignment_submissions')
    .insert(submission)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function gradeSubmission(
  id: string,
  updates: Database['public']['Tables']['assignment_submissions']['Update']
) {
  const { data, error } = await supabase
    .from('assignment_submissions')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}