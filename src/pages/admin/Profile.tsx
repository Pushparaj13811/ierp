import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { Card } from '../../components/ui/Card';

export function AdminProfile() {
  const admin = {
    id: '1',
    name: 'John Anderson',
    email: 'john.anderson@schoolierp.com',
    role: 'admin',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  return (
    <div className="space-y-6">
      <ProfileHeader user={admin} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProfileInfo
              email={admin.email}
              phone="+1 (555) 123-4567"
              address="123 School Street, City, State"
              joinDate="January 2020"
              department="School Administration"
              additionalInfo={{
                Role: 'System Administrator',
                'Access Level': 'Full Access',
              }}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Administrative Overview
              </h2>
              <div className="space-y-4">
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Recent Activities
                  </h3>
                  {/* Add recent activities list */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
