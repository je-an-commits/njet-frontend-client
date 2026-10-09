import React from "react";
import type { ComponentPropsWithoutRef } from "react";

// Main Card Container
export function Card({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div 
      className={` border border-gray-200 bg-white shadow-sm overflow-hidden text-gray-900 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

// Card Header (Wraps Title and Description)
export function CardHeader({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`p-6 flex flex-col gap-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Card Title
export function CardTitle({ children, className = "", ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}

// Card Description
export function CardDescription({ children, className = "", ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  );
}

// Card Body Content
export function CardContent({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Card Footer (Usually for action items/buttons)
export function CardFooter({ children, className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`p-6 pt-0 flex items-center border-t border-gray-50 bg-gray-50/50 ${className}`} {...props}>
      {children}
    </div>
  );
}
