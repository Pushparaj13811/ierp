import { Card } from '../../components/ui/Card';
import { Settings as SettingsIcon, Bell, Lock, Users } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                General Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    School Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="School IERP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="contact@schoolierp.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="2024-2025"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Quick Settings
              </h2>
              <div className="space-y-4">
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Bell className="h-5 w-5 mr-3 text-gray-400" />
                  Notifications
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Lock className="h-5 w-5 mr-3 text-gray-400" />
                  Security
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Users className="h-5 w-5 mr-3 text-gray-400" />
                  User Roles
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <SettingsIcon className="h-5 w-5 mr-3 text-gray-400" />
                  System
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Settings;
