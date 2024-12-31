import { GraduationCap, FileText, TrendingUp, CreditCard } from 'lucide-react';
import { DashboardCard } from '../../components/DashboardCard';
import { Card } from '../../components/ui/Card';

export function ParentDashboard() {
  const stats = [
    {
      title: 'Overall Grade',
      value: 'A-',
      icon: GraduationCap,
      trend: { value: 3, label: 'from last semester', type: 'positive' },
    },
    {
      title: 'Attendance',
      value: '92%',
      icon: TrendingUp,
      description: 'Current semester',
    },
    {
      title: 'Due Assignments',
      value: '5',
      icon: FileText,
      description: 'This week',
    },
    {
      title: 'Next Payment',
      value: '$1,200',
      icon: CreditCard,
      description: 'Due in 15 days',
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
            Academic Progress
          </h2>
          {/* Progress chart will go here */}
        </Card>

        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activities
          </h2>
          {/* Activities list will go here */}
        </Card>
      </div>
    </div>
  );
}

export default ParentDashboard;
