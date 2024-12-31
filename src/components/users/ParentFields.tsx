import { Input } from '../ui/Input';

interface ParentFieldsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  values: {
    occupation: string;
    relationship: string;
    alternatePhone: string;
    emergencyContact: string;
    preferredContactTime: string;
  };
}

export function ParentFields({ onChange, values }: ParentFieldsProps) {
  return (
    <div className="space-y-4">
      <Input
        label="Occupation"
        name="occupation"
        value={values.occupation}
        onChange={onChange}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Relationship to Student
        </label>
        <select
          name="relationship"
          value={values.relationship}
          onChange={onChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select Relationship</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="guardian">Guardian</option>
        </select>
      </div>

      <Input
        label="Alternate Phone Number"
        type="tel"
        name="alternatePhone"
        value={values.alternatePhone}
        onChange={onChange}
      />

      <Input
        label="Emergency Contact"
        type="tel"
        name="emergencyContact"
        value={values.emergencyContact}
        onChange={onChange}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Contact Time
        </label>
        <select
          name="preferredContactTime"
          value={values.preferredContactTime}
          onChange={onChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select Time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
          <option value="evening">Evening (4 PM - 7 PM)</option>
        </select>
      </div>
    </div>
  );
}