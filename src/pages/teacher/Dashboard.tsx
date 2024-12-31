import { Users, BookOpen, FileText, Clock } from 'lucide-react';
import { DashboardCard } from '../../components/DashboardCard';
import { Card } from '../../components/ui/Card';

export function TeacherDashboard() {
  const stats = [
    {
      title: 'Total Students',
      value: '156',
      icon: Users,
      description: 'Across all classes',
    },
    {
      title: 'Active Classes',
      value: '5',
      icon: BookOpen,
      description: 'Current semester',
    },
    {
      title: 'Assignments',
      value: '23',
      icon: FileText,
      description: 'Pending review',
    },
    {
      title: 'Hours Taught',
      value: '128',
      icon: Clock,
      description: 'This month',
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
            Today's Schedule
          </h2>
          {/* Schedule list will go here */}
        </Card>

        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Submissions
          </h2>
          {/* Submissions list will go here */}
        </Card>
      </div>
    </div>
  );
}

export default TeacherDashboard;
