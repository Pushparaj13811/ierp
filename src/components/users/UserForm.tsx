import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { TeacherFields } from './TeacherFields';
import { StudentFields } from './StudentFields';
import { ParentFields } from './ParentFields';

interface UserFormData {
  // Common fields
  name: string;
  email: string;
  role: 'teacher' | 'student' | 'parent';
  phone: string;
  address: string;
  gender: string;
  // Role-specific fields
  [key: string]: any;
}

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
  isLoading?: boolean;
  role?: 'teacher' | 'student' | 'parent';
}

export function UserForm({ onSubmit, isLoading, role }: UserFormProps) {
  const [formData, setFormData] = useState<UserFormData>({
    // Common fields
    name: '',
    email: '',
    role: role || 'student',
    phone: '',
    address: '',
    gender: '',
    // Teacher fields
    department: '',
    subjects: '',
    qualification: '',
    experience: '',
    employmentType: '',
    // Student fields
    grade: '',
    section: '',
    rollNumber: '',
    dateOfBirth: '',
    bloodGroup: '',
    parentEmail: '',
    // Parent fields
    occupation: '',
    relationship: '',
    alternatePhone: '',
    emergencyContact: '',
    preferredContactTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Common Fields Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <Input
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          {!role && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Role-specific Fields Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          {formData.role === 'teacher' 
            ? 'Teacher Information' 
            : formData.role === 'student' 
            ? 'Student Information' 
            : 'Parent Information'}
        </h2>
        
        {formData.role === 'teacher' && (
          <TeacherFields onChange={handleChange} values={formData} />
        )}
        
        {formData.role === 'student' && (
          <StudentFields onChange={handleChange} values={formData} />
        )}
        
        {formData.role === 'parent' && (
          <ParentFields onChange={handleChange} values={formData} />
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit" isLoading={isLoading}>
          Add {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
        </Button>
      </div>
    </form>
  );
}