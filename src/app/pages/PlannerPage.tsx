import svgPaths from "../../imports/svg-wxf6nlahdp";

export default function PlannerPage() {
  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen relative w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-[110px] py-[32px] relative w-full">
        {/* Page Header */}
        <div className="h-[38px] relative shrink-0 w-full">
          {/* Title */}
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[32px] left-0 not-italic text-[#171717] text-[30px] top-0">
            <p>Planner</p>
          </div>

          {/* Date Picker - Centered */}
          <div className="absolute content-stretch flex gap-[16px] items-center left-1/2 top-0 -translate-x-1/2">
            {/* Left Arrow */}
            <div className="bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p331c8d00} fill="black" fillRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Date Display */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">25/01/2026</p>
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="bg-white content-stretch flex gap-[10px] h-[38px] items-center px-[14px] py-[7px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_0px_#e5e5e5] shrink-0 w-[48px]">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p20c28a80} fill="black" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Assign Task Button - Right */}
          <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center right-0 pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] top-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Assign Task</p>
          </div>
        </div>

        {/* Tabs and Filters */}
        <div className="content-stretch flex items-center justify-between mt-[32px] relative shrink-0 w-full">
          {/* Tabs */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            {/* Drivers/Inventory/Tasks Tab Group */}
            <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0">
              <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Drivers</p>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Inventory</p>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Tasks</p>
              </div>
            </div>

            {/* Timeline/Map Tab Group */}
            <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0">
              <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Timeline</p>
              </div>
              <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Map</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            {/* Region */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Region</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Status</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* SIA NIKA MI */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis whitespace-nowrap">SIA NIKA MI</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Aldis Freimanis */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis whitespace-nowrap">Aldis Freimanis</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-[32px] relative w-full">
          {/* Timeline Container */}
          <div className="relative w-full">
            {timeSlots.map((time, index) => {
              const topPosition = 24 + index * 72;
              return (
                <div key={time}>
                  {/* Time Label */}
                  <p
                    className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#171717] text-[14px]"
                    style={{ top: `${topPosition}px` }}
                  >
                    {time}
                  </p>

                  {/* Horizontal Line */}
                  <div
                    className="absolute h-0 w-[calc(100%-59px)] left-[59px]"
                    style={{ top: `${topPosition + 12}px` }}
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                      <line stroke="#D4D4D4" x2="1161" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              );
            })}

            {/* Task Cards */}
            {/* 8:00 Task - Green */}
            <div className="absolute left-[68px]" style={{ top: '155px' }}>
              <div className="bg-[#f2fdf5] relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[14px] py-[7px] relative">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[314px]">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px]">8:00</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#171717] text-[12px]">
                          <span className="leading-[16px]">Pickup (</span>
                          <span className="decoration-solid leading-[16px] underline">LV25-12/12126</span>
                          <span className="leading-[16px]">)</span>
                        </p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px] w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#22c55e] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
              </div>
            </div>

            {/* 11:00 Task - Orange */}
            <div className="absolute left-[68px]" style={{ top: '371px' }}>
              <div className="bg-[#fffbeb] relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[14px] py-[7px] relative">
                    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#171717] text-[12px] w-[314px]">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] relative shrink-0">11:00</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal">
                          <span className="leading-[16px]">Pickup (</span>
                          <span className="decoration-solid leading-[16px] underline">LV25-12/12127</span>
                          <span className="leading-[16px]">)</span>
                        </p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#f59e0b] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
              </div>
            </div>

            {/* 14:00 Task - Red with Lightning */}
            <div className="absolute left-[68px]" style={{ top: '587px' }}>
              <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center px-[14px] py-[7px] relative">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[314px]">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p1fc3d400} fill="#0F172A" />
                            </svg>
                          </div>
                          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px]">14:00</p>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#171717] text-[12px]">
                          <span className="leading-[16px]">Pickup (</span>
                          <span className="decoration-solid leading-[16px] underline">LV25-12/12126</span>
                          <span className="leading-[16px]">)</span>
                        </p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px] w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#ef4444] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
