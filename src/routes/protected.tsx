import { RouteObject } from 'react-router-dom';
import { adminRoutes } from './admin';
import { teacherRoutes } from './teacher';
import { studentRoutes } from './student';
import { parentRoutes } from './parent';

export const protectedRoutes: RouteObject[] = [
  ...adminRoutes,
  ...teacherRoutes,
  ...studentRoutes,
  ...parentRoutes,
];