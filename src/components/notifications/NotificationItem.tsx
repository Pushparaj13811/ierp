import React from 'react';
import { Bell, Calendar, FileText, Users } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';

interface NotificationItemProps {
  id: string;
  type: 'alert' | 'calendar' | 'assignment' | 'user';
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  onRead: (id: string) => void;
}

export function NotificationItem({ 
  id, 
  type, 
  title, 
  message, 
  date, 
  isRead, 
  onRead 
}: NotificationItemProps) {
  const getIcon = () => {
    switch (type) {
      case 'calendar': return <Calendar className="h-5 w-5" />;
      case 'assignment': return <FileText className="h-5 w-5" />;
      case 'user': return <Users className="h-5 w-5" />;
      default: return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div 
      className={`p-4 ${isRead ? 'bg-white' : 'bg-blue-50'} hover:bg-gray-50 cursor-pointer`}
      onClick={() => onRead(id)}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 ${isRead ? 'text-gray-400' : 'text-blue-500'}`}>
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{message}</p>
          <p className="mt-1 text-xs text-gray-400">{formatDate(new Date(date))}</p>
        </div>
      </div>
    </div>
  );
}