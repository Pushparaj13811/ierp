import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as messagesApi from '../services/api/messages';

export function useMessages(userId: string) {
  return useQuery({
    queryKey: ['messages', userId],
    queryFn: () => messagesApi.getMessages(userId),
  });
}

export function useSendMessage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: messagesApi.sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}

export function useMarkMessageAsRead() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: messagesApi.markMessageAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}