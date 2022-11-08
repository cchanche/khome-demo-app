import React from 'react';

interface P {
  label: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ label, onClick, className }: P) => {
  return (
    <button
      onClick={onClick}
      className={
        'flex h-fit items-center justify-center rounded-lg bg-blue-300 px-4 py-3 text-center hover:bg-blue-400 hover:shadow-lg' +
        ' ' +
        className
      }
    >
      {label}
    </button>
  );
};

export default Button;
