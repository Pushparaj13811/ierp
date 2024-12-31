import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as submissionsApi from '../services/api/submissions';

export function useSubmissions(assignmentId?: string, studentId?: string) {
  return useQuery({
    queryKey: ['submissions', assignmentId, studentId],
    queryFn: () => submissionsApi.getSubmissions(assignmentId, studentId),
  });
}

export function useSubmitAssignment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: submissionsApi.submitAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}

export function useGradeSubmission() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      submissionsApi.gradeSubmission(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}