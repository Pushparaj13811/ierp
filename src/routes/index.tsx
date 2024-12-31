import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { AuthProvider } from '../context/AuthContext';

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    errorElement: <ErrorBoundary><div>Something went wrong</div></ErrorBoundary>,
    children: [
      ...publicRoutes,
      ...protectedRoutes,
    ],
  },
]);