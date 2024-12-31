import { School } from 'lucide-react';

export function AuthHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <School className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">SchoolIERP</span>
          </div>
        </div>
      </div>
    </header>
  );
}