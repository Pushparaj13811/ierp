import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as enrollmentsApi from '../services/api/enrollments';

export function useEnrollments(classId?: string, studentId?: string) {
  return useQuery({
    queryKey: ['enrollments', classId, studentId],
    queryFn: () => enrollmentsApi.getEnrollments(classId, studentId),
  });
}

export function useEnrollStudent() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: enrollmentsApi.enrollStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
    },
  });
}

export function useUpdateEnrollment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      enrollmentsApi.updateEnrollment(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollments'] });
    },
  });
}