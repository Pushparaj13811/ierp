import React from 'react';
import { DashboardCard as DashboardCardType } from '../types';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function DashboardCard({ title, value, icon: Icon, description, trend }: DashboardCardType) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-full">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
      </div>
      {(description || trend) && (
        <div className="mt-4">
          {description && <p className="text-sm text-gray-600">{description}</p>}
          {trend && (
            <div className="flex items-center mt-2">
              {trend.type === 'positive' ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend.type === 'positive' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {trend.value}% {trend.label}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}