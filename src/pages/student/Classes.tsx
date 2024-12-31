import { Card } from '../../components/ui/Card';
import { BookOpen, Clock, Users } from 'lucide-react';

interface ClassDetails {
  id: string;
  name: string;
  teacher: string;
  schedule: string;
  room: string;
}

export function Classes() {
  const classes: ClassDetails[] = [
    {
      id: '1',
      name: 'Advanced Mathematics',
      teacher: 'Mrs. Sarah Wilson',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      room: 'Room 201',
    },
    {
      id: '2',
      name: 'Physics',
      teacher: 'Mr. Robert Johnson',
      schedule: 'Tue, Thu - 10:30 AM',
      room: 'Room 305',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
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
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {classItem.name}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {classItem.teacher}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  {classItem.schedule}
                </div>
                <p className="text-sm text-gray-500">{classItem.room}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Classes;
