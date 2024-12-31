import { Card } from '../../components/ui/Card';
import { Clock, Users, BookOpen, Calendar as CalendarIcon } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  type: 'class' | 'exam' | 'meeting' | 'holiday';
  date: string;
  time: string;
  location?: string;
  description?: string;
}

export function AdminCalendar() {
  const events: Event[] = [
    {
      id: '1',
      title: 'Final Exams',
      type: 'exam',
      date: '2024-03-25',
      time: '9:00 AM - 12:00 PM',
      location: 'Multiple Rooms',
    },
    {
      id: '2',
      title: 'Staff Meeting',
      type: 'meeting',
      date: '2024-03-26',
      time: '2:00 PM - 3:00 PM',
      location: 'Conference Room',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Calendar View
              </h2>
              {/* Calendar component will go here */}
              <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                Calendar Component Placeholder
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      {event.type === 'exam' ? (
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
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center mt-1">
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
      </div>
    </div>
  );
}

export default AdminCalendar;
