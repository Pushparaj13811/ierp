import { Users, BookOpen, CreditCard, TrendingUp } from 'lucide-react';
import { DashboardCard } from '../../components/DashboardCard';
import { Card } from '../../components/ui/Card';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Students',
      value: '2,345',
      icon: Users,
      trend: { value: 12, label: 'from last month', type: 'positive' },
    },
    {
      title: 'Active Classes',
      value: '48',
      icon: BookOpen,
      trend: { value: 8, label: 'from last semester', type: 'positive' },
    },
    {
      title: 'Revenue',
      value: '$234,567',
      icon: CreditCard,
      trend: { value: 15, label: 'from last quarter', type: 'positive' },
    },
    {
      title: 'Performance',
      value: '89%',
      icon: TrendingUp,
      trend: { value: 5, label: 'from last year', type: 'positive' },
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
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activities
            </h2>
            {/* Activity list will go here */}
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Upcoming Events
            </h2>
            {/* Events list will go here */}
          </div>
        </Card>
      </div>
    </div>
  );
}
