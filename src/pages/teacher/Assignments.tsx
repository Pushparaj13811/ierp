import { AssignmentCard } from '../../components/assignments/AssignmentCard';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  duration: number;
}

export function Assignments() {
  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Quadratic Equations Problem Set',
      subject: 'Mathematics',
      dueDate: '2024-03-25',
      status: 'submitted',
      duration: 60,
    },
    {
      id: '2',
      title: "Newton's Laws Lab Report",
      subject: 'Physics',
      dueDate: '2024-03-28',
      status: 'pending',
      duration: 90,
    },
    // Add more assignments as needed
  ];

  const handleGrade = (id: string) => {
    console.log('Grading assignment:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onGrade={handleGrade}
          />
        ))}
      </div>
    </div>
  );
}

export default Assignments;
