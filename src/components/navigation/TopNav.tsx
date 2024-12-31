import { Bell, Search, Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types/auth';

interface TopNavProps {
  onMenuClick: () => void;
  userName: string;
  userRole: UserRole;
}

export function TopNav({ onMenuClick, userName, userRole }: TopNavProps) {
  const { logout } = useAuth();
  const profileLink = `/${userRole}/profile`;

  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Button variant="secondary" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">
              SchoolIERP
            </span>
          </div>
        </Link>
      </div>

      <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full bg-white p-2 hover:bg-gray-50">
          <Bell className="h-5 w-5 text-gray-400" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </button>
        
        <Link to={profileLink}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              {userName}
            </span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt={userName}
            />
          </div>
        </Link>

        <Button
          variant="secondary"
          className="flex items-center gap-2"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </div>
  );
}