import { Input } from '../ui/Input';

interface StudentFieldsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: {
    grade: string;
    section: string;
    rollNumber: string;
    dateOfBirth: string;
    bloodGroup: string;
    parentEmail: string;
  };
}

export function StudentFields({ onChange, values }: StudentFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Grade
          </label>
          <select
            name="grade"
            value={values.grade}
            onChange={onChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">Select Grade</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Grade {i + 1}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Section"
          name="section"
          value={values.section}
          onChange={onChange}
          placeholder="e.g., A, B, C"
          required
        />
      </div>

      <Input
        label="Roll Number"
        name="rollNumber"
        value={values.rollNumber}
        onChange={onChange}
        required
      />

      <Input
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={values.dateOfBirth}
        onChange={onChange}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Blood Group
        </label>
        <select
          name="bloodGroup"
          value={values.bloodGroup}
          onChange={onChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select Blood Group</option>
          {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="Parent's Email"
        type="email"
        name="parentEmail"
        value={values.parentEmail}
        onChange={onChange}
        required
      />
    </div>
  );
}