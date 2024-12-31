import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { Assignment } from '../../types';
import { Button } from '../ui/Button';

interface AssignmentCardProps {
  assignment: Assignment;
  onSubmit?: (id: string) => void;
  onGrade?: (id: string) => void;
}

export function AssignmentCard({ assignment, onSubmit, onGrade }: AssignmentCardProps) {
  const isOverdue = new Date(assignment.dueDate) < new Date();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{assignment.title}</h3>
          <p className="text-sm text-gray-500">{assignment.subject}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          assignment.status === 'submitted' ? 'bg-green-100 text-green-800' :
          isOverdue ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {assignment.status}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          Due: {formatDate(new Date(assignment.dueDate))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          {assignment.duration} minutes
        </div>
      </div>

      {onSubmit && (
        <Button
          className="mt-4 w-full"
          variant={isOverdue ? "danger" : "primary"}
          onClick={() => onSubmit(assignment.id)}
        >
          {isOverdue ? "Submit Late" : "Submit Assignment"}
        </Button>
      )}

      {onGrade && (
        <Button
          className="mt-4 w-full"
          variant="secondary"
          onClick={() => onGrade(assignment.id)}
        >
          Grade Assignment
        </Button>
      )}
    </div>
  );
}