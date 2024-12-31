export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}