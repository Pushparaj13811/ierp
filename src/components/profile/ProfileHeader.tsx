import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { User } from '../../types';

interface ProfileHeaderProps {
  user: User;
  coverImage?: string;
}

export function ProfileHeader({ user, coverImage }: ProfileHeaderProps) {
  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="relative group">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
              alt={user.name}
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {user.name}
              </h1>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}