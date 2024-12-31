import { Card } from '../../components/ui/Card';
import { Clock, Users, BookOpen } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: 'class' | 'meeting' | 'deadline';
  time: string;
  location?: string;
  description?: string;
}

export function Calendar() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Advanced Mathematics',
      type: 'class',
      time: '9:00 AM - 10:30 AM',
      location: 'Room 201',
    },
    {
      id: '2',
      title: 'Department Meeting',
      type: 'meeting',
      time: '2:00 PM - 3:00 PM',
      location: 'Conference Room',
    },
    // Add more events as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add Event
        </button>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Today's Schedule
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  {event.type === 'class' ? (
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  ) : (
                    <Users className="h-6 w-6 text-indigo-600" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {event.title}
                  </h3>
                  <div className="mt-1 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                    {event.location && (
                      <div className="mt-1">{event.location}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Calendar;
