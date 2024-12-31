import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationConfig } from './NavigationConfig';
import { NavigationItem } from '../../types';

interface MainNavProps {
  role: 'admin' | 'teacher' | 'student' | 'parent';
}

export function MainNav({ role }: MainNavProps) {
  const navItems: NavigationItem[] = navigationConfig[role] || [];

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}