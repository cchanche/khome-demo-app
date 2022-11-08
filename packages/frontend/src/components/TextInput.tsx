import React from 'react';

interface P {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  value: string | null;
}

const TextInput = ({ label, onChange, className, value }: P) => {
  return (
    <div className={className}>
      <label
        htmlFor="fName"
        className="mb-3 block text-base font-bold text-indigo-100"
      >
        {label}
      </label>
      <input
        type="text"
        name="fName"
        id="fName"
        placeholder={label}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        onChange={onChange}
        value={value || ''}
      />
    </div>
  );
};

export default TextInput;
