import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as assignmentsApi from '../services/api/assignments';

export function useAssignments(classId?: string) {
  return useQuery({
    queryKey: ['assignments', classId],
    queryFn: () => assignmentsApi.getAssignments(classId),
  });
}

export function useCreateAssignment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: assignmentsApi.createAssignment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
    },
  });
}

export function useUpdateAssignment() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      assignmentsApi.updateAssignment(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
    },
  });
}