import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  external?: boolean;
}

export default function Button({ 
  children, 
  className = "", 
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  ...props 
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transform";

  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-200)] focus:ring-[var(--color-primary-300)] shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:scale-105 texture-button",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-200)] focus:ring-[var(--color-secondary-300)] shadow-lg shadow-[var(--color-secondary)]/30 hover:shadow-xl hover:scale-105 texture-button",
    outline: "border-2 border-[var(--color-primary-300)] text-[var(--foreground)] hover:bg-[var(--color-primary-300)] hover:text-white focus:ring-[var(--color-primary-300)] shadow-md shadow-[var(--color-primary-300)]/20 hover:shadow-lg hover:scale-105",
    dark: "bg-[var(--background-dark)] text-white hover:bg-[var(--color-primary-100)] focus:ring-[var(--color-primary-300)] shadow-lg shadow-[var(--background-dark)]/40 hover:shadow-xl hover:scale-105 texture-button",
    light: "bg-[var(--background-light)] text-[var(--foreground)] border border-[var(--color-primary-600)] hover:bg-[var(--color-primary-600)] hover:text-[var(--foreground)] focus:ring-[var(--color-primary-300)] shadow-md shadow-[var(--color-primary-600)]/20 hover:shadow-lg hover:scale-105"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl"
  };

  const buttonElement = (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonElement}
        </a>
      );
    }
    return (
      <Link href={href}>
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
}
