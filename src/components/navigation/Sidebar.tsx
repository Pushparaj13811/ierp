import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BookOpen, Calendar, FileText, MessageSquare, CreditCard } from 'lucide-react';
import { NavigationItem } from '../../types';

interface SidebarProps {
  role: 'admin' | 'teacher' | 'student' | 'parent';
}

const navigationItems: Record<string, NavigationItem[]> = {
  admin: [
    { title: 'Users', href: '/admin/users', icon: Users },
    { title: 'Classes', href: '/admin/classes', icon: BookOpen },
    { title: 'Calendar', href: '/admin/calendar', icon: Calendar },
    { title: 'Reports', href: '/admin/reports', icon: FileText },
    { title: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { title: 'Payments', href: '/admin/payments', icon: CreditCard },
  ],
  teacher: [
    { title: 'Classes', href: '/teacher/classes', icon: BookOpen },
    { title: 'Assignments', href: '/teacher/assignments', icon: FileText },
    { title: 'Calendar', href: '/teacher/calendar', icon: Calendar },
    { title: 'Messages', href: '/teacher/messages', icon: MessageSquare },
  ],
  student: [
    { title: 'Dashboard', href: '/student/dashboard', icon: BookOpen },
    { title: 'Assignments', href: '/student/assignments', icon: FileText },
    { title: 'Calendar', href: '/student/calendar', icon: Calendar },
    { title: 'Messages', href: '/student/messages', icon: MessageSquare },
  ],
  parent: [
    { title: 'Dashboard', href: '/parent/dashboard', icon: BookOpen },
    { title: 'Progress', href: '/parent/progress', icon: FileText },
    { title: 'Messages', href: '/parent/messages', icon: MessageSquare },
    { title: 'Payments', href: '/parent/payments', icon: CreditCard },
  ],
};

export function Sidebar({ role }: SidebarProps) {
  const items = navigationItems[role] || [];

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}