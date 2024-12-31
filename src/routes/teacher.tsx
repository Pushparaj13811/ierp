import { RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import Dashboard from '../pages/teacher/Dashboard';
import Classes from '../pages/teacher/Classes';
import Assignments from '../pages/teacher/Assignments';
import Calendar from '../pages/teacher/Calendar';
import Messages from '../pages/teacher/Messages';
import Reports from '../pages/teacher/Reports';
import Notifications from '../pages/notifications/Notifications';
import TeacherProfile from '../pages/teacher/Profile';

export const teacherRoutes: RouteObject[] = [
  {
    path: '/teacher',
    element: (
      <ProtectedRoute allowedRoles={['teacher']}>
        <Layout role="teacher" userName="Sarah Wilson" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <TeacherProfile /> },
      { path: 'classes', element: <Classes /> },
      { path: 'assignments', element: <Assignments /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'messages', element: <Messages /> },
      { path: 'reports', element: <Reports /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
];