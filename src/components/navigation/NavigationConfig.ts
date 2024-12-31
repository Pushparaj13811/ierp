import {
  Users,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  TrendingUp,
  Bell,
  Home,
} from 'lucide-react';
import { NavigationItem } from '../../types';

export const navigationConfig: Record<string, NavigationItem[]> = {
  admin: [
    { title: 'Dashboard', href: '/admin', icon: Home },
    { title: 'Users', href: '/admin/users', icon: Users },
    { title: 'Classes', href: '/admin/classes', icon: BookOpen },
    { title: 'Calendar', href: '/admin/calendar', icon: Calendar },
    { title: 'Reports', href: '/admin/reports', icon: TrendingUp },
    { title: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { title: 'Payments', href: '/admin/payments', icon: CreditCard },
    { title: 'Notifications', href: '/admin/notifications', icon: Bell },
    { title: 'Settings', href: '/admin/settings', icon: Settings },
  ],
  teacher: [
    { title: 'Dashboard', href: '/teacher', icon: Home },
    { title: 'Classes', href: '/teacher/classes', icon: BookOpen },
    { title: 'Assignments', href: '/teacher/assignments', icon: FileText },
    { title: 'Calendar', href: '/teacher/calendar', icon: Calendar },
    { title: 'Messages', href: '/teacher/messages', icon: MessageSquare },
    { title: 'Reports', href: '/teacher/reports', icon: TrendingUp },
    { title: 'Notifications', href: '/teacher/notifications', icon: Bell },
  ],
  student: [
    { title: 'Dashboard', href: '/student', icon: Home },
    { title: 'Classes', href: '/student/classes', icon: BookOpen },
    { title: 'Assignments', href: '/student/assignments', icon: FileText },
    { title: 'Grades', href: '/student/grades', icon: TrendingUp },
    { title: 'Calendar', href: '/student/calendar', icon: Calendar },
    { title: 'Messages', href: '/student/messages', icon: MessageSquare },
    { title: 'Notifications', href: '/student/notifications', icon: Bell },
  ],
  parent: [
    { title: 'Dashboard', href: '/parent', icon: Home },
    { title: 'Progress', href: '/parent/progress', icon: TrendingUp },
    { title: 'Attendance', href: '/parent/attendance', icon: Calendar },
    { title: 'Messages', href: '/parent/messages', icon: MessageSquare },
    { title: 'Payments', href: '/parent/payments', icon: CreditCard },
    { title: 'Notifications', href: '/parent/notifications', icon: Bell },
  ],
};
