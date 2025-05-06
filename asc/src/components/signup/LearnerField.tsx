// LearnerField.tsx
import React from 'react';

interface LearnerFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LearnerField: React.FC<LearnerFieldProps> = ({ value, onChange }) => {
  return (
    <div className="mb-2">
      <label htmlFor="learn" className="block text-sm font-semibold">
        What do you want to learn?
      </label>
      <input
        id="learn"
        type="text"
        placeholder="I want to learn"
        value={value} // Bind value to state
        onChange={onChange} // Handle state update
        autoComplete="off"
        maxLength={200}
        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-2"
      />
    </div>
  );
};

export default LearnerField;
