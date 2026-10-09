
import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  leftIcon?: ReactNode;  
  rightIcon?: ReactNode;
}

export function Button({ 
    children,
    variant = 'primary',
    className = '',
    disabled = false,
    leftIcon,
    rightIcon,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = {
        primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] focus:ring-[var(--primary-ring)]',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    };
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    const combinedStyles = [
        baseStyles,
        variantStyles[variant],
        disabled ? disabledStyles : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={combinedStyles}
            disabled={disabled}
            {...props}
        >
            {leftIcon && <span className="flex-items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-items-center">{rightIcon}</span>}
        </button>
    );
}