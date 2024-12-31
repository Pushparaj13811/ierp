import { RouteObject, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Login from '../pages/Login';
import Landing from '../pages/Landing';

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <Navigate to={`/${user.role}`} replace /> : <>{children}</>;
}

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <Landing />
      </PublicRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  }
];