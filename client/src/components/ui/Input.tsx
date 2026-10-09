import React, { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef, ReactNode, MouseEvent } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  rightIconAriaLabel?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helpText,
      leftIcon,
      rightIcon,
      onRightIconClick,
      rightIconAriaLabel,
      className = '',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const errorId = `${inputId}-error`;
    const helpTextId = `${inputId}-help`;

    const leftPadding = leftIcon ? 'pl-10' : 'pl-3';
    const rightPadding = rightIcon ? 'pr-10' : 'pr-3';

    const baseInputStyles = `w-full ${leftPadding} ${rightPadding} py-2 border rounded-md shadow-sm outline-none transition-all text-sm bg-white placeholder-gray-400 focus:ring-2 focus:ring-offset-1`;
    const stateStyles = error
      ? 'border-red-500 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500';
    const disabledStyles = 'disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed';

    const combinedStyles = [baseInputStyles, stateStyles, disabledStyles, className].filter(Boolean).join(' ');

    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {/* Optional Top Label */}
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        {/* Input Wrapper */}
        <div className="relative rounded-md shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 [&>svg]:w-5 [&>svg]:h-5">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={combinedStyles}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helpText ? helpTextId : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center">
              {onRightIconClick ? (
                <button
                  type="button"
                  onClick={onRightIconClick}
                  disabled={disabled}
                  aria-label={rightIconAriaLabel || 'Right icon action'}
                  className="p-1.5 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 rounded-md disabled:pointer-events-none disabled:opacity-50 [&>svg]:w-5 [&>svg]:h-5 transition-colors"
                >
                  {rightIcon}
                </button>
              ) : (
                <div className="p-1.5 text-gray-400 pointer-events-none [&>svg]:w-5 [&>svg]:h-5">
                  {rightIcon}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Helper text or Validation Error handling */}
        {error ? (
          <p id={errorId} className="text-xs text-red-600 font-medium">
            {error}
          </p>
        ) : helpText ? (
          <p id={helpTextId} className="text-xs text-gray-500">
            {helpText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'CustomInput';