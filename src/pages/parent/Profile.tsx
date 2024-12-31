import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { Card } from '../../components/ui/Card';

export function ParentProfile() {
  const parent = {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@schoolierp.com',
    role: 'parent',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  return (
    <div className="space-y-6">
      <ProfileHeader user={parent} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProfileInfo
              email={parent.email}
              phone="+1 (555) 456-7890"
              address="321 Family Road, City, State"
              joinDate="August 2021"
              additionalInfo={{
                Children: '2 Students',
                'Primary Contact': 'Yes',
                'Preferred Contact Time': 'After 5 PM',
              }}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Children's Information
              </h2>
              {/* Add children's information */}
            </Card>

            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Payment History
              </h2>
              {/* Add payment history */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentProfile;
