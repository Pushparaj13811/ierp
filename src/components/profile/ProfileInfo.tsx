import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';

interface ProfileInfoProps {
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  department?: string;
  additionalInfo?: Record<string, string>;
}

export function ProfileInfo({ 
  email, 
  phone, 
  address, 
  joinDate, 
  department,
  additionalInfo 
}: ProfileInfoProps) {
  return (
    <Card>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
      <div className="space-y-3">
        <div className="flex items-center text-gray-500">
          <Mail className="h-5 w-5 mr-2" />
          <span>{email}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Phone className="h-5 w-5 mr-2" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{address}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Calendar className="h-5 w-5 mr-2" />
          <span>Joined {joinDate}</span>
        </div>
        {department && (
          <div className="pt-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">Department</h3>
            <p className="mt-1 text-sm text-gray-500">{department}</p>
          </div>
        )}
        {additionalInfo && Object.entries(additionalInfo).map(([key, value]) => (
          <div key={key} className="pt-3 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">{key}</h3>
            <p className="mt-1 text-sm text-gray-500">{value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}