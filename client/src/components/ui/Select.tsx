import React, { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ChevronDown } from "lucide-react"; 

export interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, leftIcon, options, placeholder, className = "", id, ...props }, ref) => {
    
    const selectId = id || `select-${label?.toLowerCase().replace(/\s+/g, "-")}`;

    const baseSelectStyles = "w-full px-3 py-2 border rounded-md shadow-sm outline-none transition-all text-sm bg-white appearance-none cursor-pointer focus:ring-2 focus:ring-offset-1";
    
    const stateStyles = error
      ? "border-red-500 text-red-950 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500";

    const disabledStyles = "disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed";

    const iconPaddingStyles = leftIcon ? "pl-10" : "";

    const combinedSelectClasses = [
      baseSelectStyles,
      stateStyles,
      disabledStyles,
      iconPaddingStyles,
      className
    ].filter(Boolean).join(" ");

    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <div className="relative rounded-md shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <select
            id={selectId}
            ref={ref}
            className={combinedSelectClasses}
            defaultValue=""
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Right Chevron Indicator Icon */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            <ChevronDown size={16} />
          </div>
        </div>

        {error ? (
          <p className="text-xs text-red-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
