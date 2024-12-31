import { Card } from '../../components/ui/Card';
import { BookOpen, Users, Clock } from 'lucide-react';

interface Class {
  id: string;
  name: string;
  subject: string;
  grade: string;
  students: number;
  schedule: string;
}

export function Classes() {
  const classes: Class[] = [
    {
      id: '1',
      name: 'Advanced Mathematics',
      subject: 'Mathematics',
      grade: '11th Grade',
      students: 28,
      schedule: 'Mon, Wed, Fri - 9:00 AM',
    },
    {
      id: '2',
      name: 'Physics 101',
      subject: 'Physics',
      grade: '10th Grade',
      students: 24,
      schedule: 'Tue, Thu - 10:30 AM',
    },
    // Add more classes as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add New Class
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card
            key={classItem.id}
            className="hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {classItem.grade}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {classItem.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{classItem.subject}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {classItem.students} Students
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  {classItem.schedule}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Classes;
