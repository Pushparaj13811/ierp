import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { NotificationItem } from '../../components/notifications/NotificationItem';

interface Notification {
  id: string;
  type: 'alert' | 'calendar' | 'assignment' | 'user';
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'assignment',
      title: 'New Assignment Posted',
      message: 'Mathematics homework due next week',
      date: '2024-03-20T10:00:00',
      isRead: false,
    },
    {
      id: '2',
      type: 'calendar',
      title: 'Upcoming Event',
      message: 'Parent-Teacher Meeting scheduled',
      date: '2024-03-19T15:30:00',
      isRead: true,
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {unreadCount} unread
        </span>
      </div>

      <Card>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              {...notification}
              onRead={handleMarkAsRead}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
