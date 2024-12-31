import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as classesApi from '../services/api/classes';

export function useClasses(teacherId?: string) {
  return useQuery({
    queryKey: ['classes', teacherId],
    queryFn: () => classesApi.getClasses(teacherId),
  });
}

export function useCreateClass() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: classesApi.createClass,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['classes'] });
    },
  });
}

export function useUpdateClass() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      classesApi.updateClass(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['classes'] });
    },
  });
}