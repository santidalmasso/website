import React from "react";
import cn from "classnames";

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary'
}

const rootClass = "px-4 py-3 border-1 border-gray-600 font-medium text-sm rounded-xl bg-black text-white transform duration-200 hover:scale-105";

export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', children }) => {
  const rootClassName = cn(rootClass, className, {
      ['bg-white text-gray-700 border-gray-400']: variant === 'secondary'
    });
  return <button className={rootClassName}>{children}</button>;
};
