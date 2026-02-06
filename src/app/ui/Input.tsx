import React from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'search';
  icon?: React.ReactNode;
  className?: string;
}

export function Input({ 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  icon,
  className = ''
}: InputProps) {
  return (
    <div className={`bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full ${className}`}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[7px] relative w-full">
          {icon && <div className="shrink-0">{icon}</div>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic text-[#171717] text-[14px] bg-transparent border-none outline-none placeholder:text-[#a3a3a3]"
          />
        </div>
      </div>
    </div>
  );
}
