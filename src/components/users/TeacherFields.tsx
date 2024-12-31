import { Input } from '../ui/Input';

interface TeacherFieldsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: {
    department: string;
    subjects: string;
    qualification: string;
    experience: string;
    employmentType: string;
  };
}

export function TeacherFields({ onChange, values }: TeacherFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Department
        </label>
        <select
          name="department"
          value={values.department}
          onChange={onChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select Department</option>
          <option value="mathematics">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
        </select>
      </div>

      <Input
        label="Subjects"
        name="subjects"
        value={values.subjects}
        onChange={onChange}
        placeholder="e.g., Mathematics, Physics"
        required
      />

      <Input
        label="Qualification"
        name="qualification"
        value={values.qualification}
        onChange={onChange}
        placeholder="e.g., M.Sc. Mathematics"
        required
      />

      <Input
        label="Years of Experience"
        type="number"
        name="experience"
        value={values.experience}
        onChange={onChange}
        min="0"
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Employment Type
        </label>
        <select
          name="employmentType"
          value={values.employmentType}
          onChange={onChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
    </div>
  );
}