import { AssignmentCard } from '../../components/assignments/AssignmentCard';
import { Assignment } from '../../types';

export function StudentAssignments() {
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Quadratic Equations Problem Set',
      subject: 'Mathematics',
      dueDate: '2024-03-25',
      status: 'pending',
      duration: 60,
    },
    {
      id: '2',
      title: 'Physics Lab Report',
      subject: 'Physics',
      dueDate: '2024-03-28',
      status: 'submitted',
      duration: 90,
    },
  ];

  const handleSubmit = (id: string) => {
    console.log('Submitting assignment:', id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentAssignments;
