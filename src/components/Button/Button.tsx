import { type ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
    >
      {children}
    </button>
  );
};
