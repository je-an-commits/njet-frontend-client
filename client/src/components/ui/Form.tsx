import React from "react";
import type { ComponentPropsWithoutRef } from "react";

// Form Wrapper
export function CustomForm({ children, className = "", ...props }: ComponentPropsWithoutRef<"form">) {
  return (
    <form className={`w-full flex flex-col gap-4 ${className}`} {...props}>
      {children}
    </form>
  );
}

// Form Grid for multiple inputs side-by-side (e.g., First Name & Last Name)
export function FormRow({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Form Footer for alignment of primary action buttons
export function FormActions({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`flex items-center justify-end gap-3 mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
