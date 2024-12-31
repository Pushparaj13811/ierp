import { RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import Dashboard from '../pages/parent/Dashboard';
import Progress from '../pages/parent/Progress';
import Attendance from '../pages/parent/Attendance';
import ParentPayments from '../pages/parent/ParentPayments';
import ParentProfile from '../pages/parent/Profile';
import Notifications from '../pages/notifications/Notifications';

export const parentRoutes: RouteObject[] = [
  {
    path: '/parent',
    element: (
      <ProtectedRoute allowedRoles={['parent']}>
        <Layout role="parent" userName="Emily Davis" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <ParentProfile /> },
      { path: 'progress', element: <Progress /> },
      { path: 'attendance', element: <Attendance /> },
      { path: 'payments', element: <ParentPayments /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
];