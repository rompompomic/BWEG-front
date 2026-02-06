import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'content-stretch flex gap-[6px] items-center justify-center relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 cursor-pointer transition-colors';
  
  const variantStyles = {
    primary: 'bg-[#05376d] text-white hover:bg-[#04305a]',
    secondary: 'bg-white text-[#05376d] border border-[#05376d] hover:bg-[#f5f5f5]',
    ghost: 'bg-transparent text-[#404040] hover:bg-[#f5f5f5]'
  };
  
  const sizeStyles = {
    sm: 'pl-[12px] pr-[14px] py-[6px] text-[12px]',
    md: 'pl-[14px] pr-[16px] py-[8px] text-[14px]',
    lg: 'pl-[16px] pr-[18px] py-[10px] text-[16px]'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic`}
    >
      {children}
    </button>
  );
}
