import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from './navigation/MainNav';
import { TopNav } from './navigation/TopNav';
import { Footer } from './footer/Footer';
import { useAuth } from '../hooks/useAuth';

interface LayoutProps {
  role: 'admin' | 'teacher' | 'student' | 'parent';
}

export function Layout({ role }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNav
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        userName={user.name}
        userRole={role}
      />

      <div className="flex flex-1">
        <aside
          className={`${
            sidebarOpen ? 'block' : 'hidden'
          } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:block lg:relative lg:inset-auto`}
        >
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <MainNav role={role} />
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}