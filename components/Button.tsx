import React from "react";
import cn from "classnames";

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary'
}

const rootClass = "px-4 py-3 border-1 border-gray-600 font-semibold text-sm rounded-2xl bg-primary text-secondary transform duration-200 hover:scale-105";

export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', children }) => {
  const rootClassName = cn(rootClass, className, {
      ['dark:text-light-green dark:bg-dark-green dark:border-dark-green']: variant === 'primary',
      ['bg-secondary text-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-800']: variant === 'secondary'
    });
  return <button className={rootClassName}>{children}</button>;
};
