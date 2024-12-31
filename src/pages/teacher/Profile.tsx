import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { Card } from '../../components/ui/Card';

export function TeacherProfile() {
  const teacher = {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@schoolierp.com',
    role: 'teacher',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  return (
    <div className="space-y-6">
      <ProfileHeader user={teacher} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProfileInfo
              email={teacher.email}
              phone="+1 (555) 234-5678"
              address="456 Education Ave, City, State"
              joinDate="September 2019"
              department="Mathematics"
              additionalInfo={{
                Subjects: 'Advanced Mathematics, Physics',
                Classes: 'Grade 9-12',
                'Office Hours': 'Mon-Fri, 3-4 PM',
              }}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Teaching Schedule
              </h2>
              {/* Add teaching schedule */}
            </Card>

            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Class Performance
              </h2>
              {/* Add class performance metrics */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
