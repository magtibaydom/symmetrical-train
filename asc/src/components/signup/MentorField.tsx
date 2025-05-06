// MentorField.tsx
import React from 'react';

interface MentorFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MentorField: React.FC<MentorFieldProps> = ({ value, onChange }) => {
  return (
    <div className="mb-2">
      <label htmlFor="teach" className="block text-sm font-semibold">
        What do you want to teach?
      </label>
      <input
        id="teach"
        type="text"
        placeholder="I want to teach"
        value={value} // Bind value to state
        onChange={onChange} // Handle state update
        autoComplete="off"
        maxLength={200}
        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-2"
      />
    </div>
  );
};

export default MentorField;
