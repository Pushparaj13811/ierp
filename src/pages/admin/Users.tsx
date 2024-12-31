import { Card } from '../../components/ui/Card';
import { User, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export function Users() {
  const users: UserData[] = [
    {
      id: '1',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@schoolierp.com',
      role: 'Teacher',
      phone: '+1 (555) 234-5678',
      status: 'active',
      joinDate: '2024-01-15',
    },
    {
      id: '2',
      name: 'Michael Brown',
      email: 'michael.brown@schoolierp.com',
      role: 'Student',
      phone: '+1 (555) 345-6789',
      status: 'active',
      joinDate: '2024-02-01',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <Link
          to="/admin/users/add"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add User
        </Link>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <User className="h-10 w-10 text-gray-400 p-2 bg-gray-100 rounded-full" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{user.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 space-y-1">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1 text-gray-400" />
                        {user.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1 text-gray-400" />
                        {user.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default Users;