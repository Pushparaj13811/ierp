import React from 'react';
import { Grade } from '../../types';

interface GradeChartProps {
  grades: Grade[];
}

export function GradeChart({ grades }: GradeChartProps) {
  const maxGrade = Math.max(...grades.map(g => g.score));

  return (
    <div className="space-y-4">
      {grades.map((grade) => (
        <div key={grade.id} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">{grade.subject}</span>
            <span className="text-gray-500">{grade.score}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${(grade.score / maxGrade) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}