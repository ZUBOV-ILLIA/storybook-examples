'use client';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal' | 'big';
  variant?: 'normal' | 'rounded' | 'circle';
  color?: 'green' | 'blue' | 'red';
}

const Button = ({
  children,
  className,
  size = 'normal',
  variant = 'normal',
  color = 'blue',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-medium transition-colors cursor-pointer',
        {
          'px-2 py-1 text-sm': size === 'small',
          'px-4 py-2 text-base': size === 'normal',
          'px-6 py-3 text-lg': size === 'big',
        },
        {
          'rounded-md': variant === 'normal',
          'rounded-full': variant === 'rounded',
          'rounded-full w-10 h-10 flex items-center justify-center': variant === 'circle',
        },
        {
          'bg-green-500 hover:bg-green-600 text-white': color === 'green',
          'bg-blue-500 hover:bg-blue-600 text-white': color === 'blue',
          'bg-red-500 hover:bg-red-600 text-white': color === 'red',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 