import { RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import AddUser from '../pages/admin/AddUser';
import AdminClasses from '../pages/admin/AdminClasses';
import AdminCalendar from '../pages/admin/AdminCalendar';
import AdminReports from '../pages/admin/AdminReports';
import AdminMessages from '../pages/admin/AdminMessages';
import AdminPayments from '../pages/admin/AdminPayments';
import Settings from '../pages/admin/Settings';
import Notifications from '../pages/notifications/Notifications';
import AdminProfile from '../pages/admin/Profile';

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Layout role="admin" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <AdminProfile /> },
      { path: 'users', element: <Users /> },
      { path: 'users/add', element: <AddUser /> },
      { path: 'classes', element: <AdminClasses /> },
      { path: 'calendar', element: <AdminCalendar /> },
      { path: 'reports', element: <AdminReports /> },
      { path: 'messages', element: <AdminMessages /> },
      { path: 'payments', element: <AdminPayments /> },
      { path: 'settings', element: <Settings /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
];