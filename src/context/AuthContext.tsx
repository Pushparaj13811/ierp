import { createContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { User, AuthContextType } from '../types/auth';
import { authenticateUser } from '../services/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider() {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname === '/') {
      navigate(`/${user.role}`);
    }
  }, [user, location.pathname, navigate]);

  const login = async (email: string, password: string) => {
    try {
      const user = await authenticateUser(email, password);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate(`/${user.role}`);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
}