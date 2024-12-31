import { ReactNode } from 'react';
import { AuthHeader } from './AuthHeader';
import { AuthFooter } from './AuthFooter';
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AuthHeader />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <AuthFooter />
    </div>
  );
}