import React from 'react';

export default function SimplePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#fafafa] flex flex-col min-h-screen relative w-full">
      {/* Main Container */}
      <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] relative w-full">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between pt-4 sm:pt-6 md:pt-8 lg:pt-[32px] pb-4 sm:pb-6 md:pb-8 relative shrink-0 w-full max-w-[1220px]">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center not-italic relative shrink-0 text-[#171717] text-[20px] sm:text-[24px] md:text-[30px]">
            <p className="leading-[24px] sm:leading-[28px] md:leading-[32px]">{title}</p>
          </div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-[1220px] pb-6 sm:pb-8 md:pb-[32px]">
          {children}
        </div>
      </div>
    </div>
  );
}