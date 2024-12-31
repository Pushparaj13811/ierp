import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { Card } from '../../components/ui/Card';
import { GradeChart } from '../../components/grades/GradeChart';

export function StudentProfile() {
  const student = {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@schoolierp.com',
    role: 'student',
    avatar:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const grades = [
    { id: '1', subject: 'Mathematics', score: 92 },
    { id: '2', subject: 'Science', score: 88 },
    { id: '3', subject: 'English', score: 95 },
    { id: '4', subject: 'History', score: 90 },
  ];

  return (
    <div className="space-y-6">
      <ProfileHeader user={student} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProfileInfo
              email={student.email}
              phone="+1 (555) 345-6789"
              address="789 Student Lane, City, State"
              joinDate="August 2021"
              additionalInfo={{
                Grade: '11th Grade',
                'Student ID': 'STU2021001',
                'Class Section': '11-A',
              }}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Academic Performance
              </h2>
              <GradeChart grades={grades} />
            </Card>

            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Attendance Record
              </h2>
              {/* Add attendance record */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
