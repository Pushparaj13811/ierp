export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface DashboardCard {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  trend?: {
    value: number;
    label: string;
    type: 'positive' | 'negative';
  };
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  duration: number;
}

export interface Grade {
  id: string;
  subject: string;
  score: number;
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  isSender: boolean;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  description: string;
  status: 'pending' | 'paid' | 'overdue';
}