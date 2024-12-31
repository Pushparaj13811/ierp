import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm, UserFormData } from '../../components/users/UserForm';
import { Card } from '../../components/ui/Card';

export function AddUser() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data: UserFormData) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to create the user
      console.log('Creating user:', data);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/admin/users');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Add New User</h1>
      </div>

      <Card>
        <div className="max-w-2xl mx-auto p-6">
          <UserForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </Card>
    </div>
  );
}

export default AddUser;