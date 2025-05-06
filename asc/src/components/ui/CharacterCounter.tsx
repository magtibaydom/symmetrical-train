import React, { useState, useEffect } from 'react';

interface CharacterCounterProps {
  value: string;
  maxLength: number;
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({ value, maxLength }) => {
  const [isLimitReached, setIsLimitReached] = useState(false);

  useEffect(() => {
    if (value.length >= maxLength) {
      setIsLimitReached(true);
    } else {
      setIsLimitReached(false);
    }
  }, [value, maxLength]);

  // Only show the counter if there is any input (value.length > 0)
  if (value.length === 0) return null;

  return (
    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
      <div className="text-left">
        {value.length}/{maxLength}
      </div>
      {isLimitReached && (
        <div className="text-red-500 text-xs">
          Character limit reached!
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;
