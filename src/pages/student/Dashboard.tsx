import { BookOpen, FileText, TrendingUp, Clock } from 'lucide-react';
import { DashboardCard } from '../../components/DashboardCard';
import { Card } from '../../components/ui/Card';

export function StudentDashboard() {
  const stats = [
    {
      title: 'Current GPA',
      value: '3.8',
      icon: TrendingUp,
      trend: { value: 5, label: 'from last semester', type: 'positive' },
    },
    {
      title: 'Courses',
      value: '6',
      icon: BookOpen,
      description: 'Current semester',
    },
    {
      title: 'Assignments',
      value: '8',
      icon: FileText,
      description: 'Due this week',
    },
    {
      title: 'Attendance',
      value: '95%',
      icon: Clock,
      trend: { value: 2, label: 'from last month', type: 'positive' },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Upcoming Assignments
          </h2>
          {/* Assignments list will go here */}
        </Card>

        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Grades
          </h2>
          {/* Grades list will go here */}
        </Card>
      </div>
    </div>
  );
}

export default StudentDashboard;
