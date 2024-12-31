import { Card } from '../../components/ui/Card';
import { GradeChart } from '../../components/grades/GradeChart';
import { Grade } from '../../types';

export function Progress() {
  const grades: Grade[] = [
    { id: '1', subject: 'Mathematics', score: 92 },
    { id: '2', subject: 'Physics', score: 88 },
    { id: '3', subject: 'English', score: 95 },
    { id: '4', subject: 'History', score: 90 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Academic Progress</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Current Grades
            </h2>
            <GradeChart grades={grades} />
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Progress Report
            </h2>
            <div className="space-y-4">{/* Add progress report content */}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Progress;
