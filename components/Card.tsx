import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'dark' | 'gradient';
  hover?: 'scale' | 'border' | 'background' | 'none';
}

export default function Card({ 
  children, 
  className = "", 
  variant = 'default',
  hover = 'scale'
}: CardProps) {
  const baseClasses = "rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl";
  
  const variants = {
    default: "bg-[var(--background-light)] border-2 border-[var(--color-primary-600)] text-[var(--foreground)] shadow-[var(--color-primary-600)]/20 texture-subtle",
    primary: "bg-[var(--color-primary)] text-white shadow-[var(--color-primary)]/30 texture-card-primary",
    secondary: "bg-[var(--color-secondary)] text-white shadow-[var(--color-secondary)]/30 texture-card-secondary", 
    dark: "bg-[var(--background-dark)] border border-[var(--color-primary-300)] text-white shadow-[var(--color-primary-300)]/20 texture-dark-glass",
    gradient: "bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-[var(--color-primary)]/40 texture-gradient-card"
  };

  const hoverEffects = {
    scale: "hover:scale-105",
    border: "hover:border-[var(--color-primary)]",
    background: "hover:bg-[var(--color-primary-300)]",
    none: ""
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${hoverEffects[hover]} ${className}`}>
      {children}
    </div>
  );
}
