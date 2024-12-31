import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Message } from '../../types';
import { Button } from '../ui/Button';
import { formatTime } from '../../utils/dateUtils';

interface MessageThreadProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function MessageThread({ messages, onSendMessage }: MessageThreadProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isSender
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.isSender ? 'text-indigo-200' : 'text-gray-500'
              }`}>
                {formatTime(new Date(message.timestamp))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Button type="submit" variant="primary">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}