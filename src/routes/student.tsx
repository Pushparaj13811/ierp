import { RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import Dashboard from '../pages/student/Dashboard';
import Classes from '../pages/student/Classes';
import StudentAssignments from '../pages/student/StudentAssignments';
import Grades from '../pages/student/Grades';
import StudentProfile from '../pages/student/Profile';
import Notifications from '../pages/notifications/Notifications';

export const studentRoutes: RouteObject[] = [
  {
    path: '/student',
    element: (
      <ProtectedRoute allowedRoles={['student']}>
        <Layout role="student" userName="Michael Brown" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <StudentProfile /> },
      { path: 'classes', element: <Classes /> },
      { path: 'assignments', element: <StudentAssignments /> },
      { path: 'grades', element: <Grades /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
];