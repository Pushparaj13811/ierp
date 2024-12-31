import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as attendanceApi from '../services/api/attendance';

export function useAttendance(studentId?: string, classId?: string) {
  return useQuery({
    queryKey: ['attendance', studentId, classId],
    queryFn: () => attendanceApi.getAttendance(studentId, classId),
  });
}

export function useRecordAttendance() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: attendanceApi.recordAttendance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance'] });
    },
  });
}