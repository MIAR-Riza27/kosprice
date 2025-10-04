import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  texture?: 'default' | 'primary' | 'secondary' | 'light' | 'white' | 'muted' | 'gradient-primary' | 'gradient-secondary';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
}

export default function Typography({ 
  children, 
  className = "", 
  variant = 'p',
  texture = 'default',
  size,
  weight,
  align = 'left'
}: TypographyProps) {
  
  const textureStyles = {
    default: "text-[var(--foreground)]",
    primary: "text-[var(--color-primary)]", 
    secondary: "text-[var(--color-secondary)]",
    light: "text-[var(--color-primary-600)]",
    white: "text-white drop-shadow-sm",
    muted: "text-[var(--color-primary-400)]",
    'gradient-primary': "text-texture",
    'gradient-secondary': "text-texture-light"
  };

  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm", 
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    '2xl': "text-2xl",
    '3xl': "text-3xl", 
    '4xl': "text-4xl",
    '5xl': "text-5xl",
    '6xl': "text-6xl",
    '7xl': "text-7xl"
  };

  const weightStyles = {
    normal: "font-normal",
    medium: "font-medium", 
    semibold: "font-semibold",
    bold: "font-bold"
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center", 
    right: "text-right"
  };

  // Default sizes and weights for variants
  const variantDefaults = {
    h1: { size: '7xl' as const, weight: 'bold' as const },
    h2: { size: '4xl' as const, weight: 'bold' as const },
    h3: { size: 'xl' as const, weight: 'bold' as const },
    h4: { size: 'lg' as const, weight: 'bold' as const },
    h5: { size: 'base' as const, weight: 'semibold' as const },
    h6: { size: 'sm' as const, weight: 'semibold' as const },
    p: { size: 'base' as const, weight: 'normal' as const },
    span: { size: 'base' as const, weight: 'normal' as const },
    small: { size: 'sm' as const, weight: 'normal' as const }
  };

  const finalSize = size || variantDefaults[variant].size;
  const finalWeight = weight || variantDefaults[variant].weight;

  const classes = `
    ${textureStyles[texture]} 
    ${sizeStyles[finalSize]} 
    ${weightStyles[finalWeight]} 
    ${alignStyles[align]} 
    ${className}
  `.trim();

  const Component = variant;

  return React.createElement(Component, { className: classes }, children);
}