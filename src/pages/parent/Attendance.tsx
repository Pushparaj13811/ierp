import { Card } from '../../components/ui/Card';
import { Calendar, Clock } from 'lucide-react';

interface AttendanceRecord {
  id: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  subject: string;
  time: string;
}

export function Attendance() {
  const records: AttendanceRecord[] = [
    {
      id: '1',
      date: '2024-03-20',
      status: 'present',
      subject: 'Mathematics',
      time: '9:00 AM',
    },
    {
      id: '2',
      date: '2024-03-20',
      status: 'late',
      subject: 'Physics',
      time: '10:30 AM',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Attendance Record</h1>

      <Card>
        <div className="p-6">
          <div className="space-y-4">
            {records.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {record.subject}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {record.time}
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    record.status === 'present'
                      ? 'bg-green-100 text-green-800'
                      : record.status === 'late'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {record.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Attendance;
