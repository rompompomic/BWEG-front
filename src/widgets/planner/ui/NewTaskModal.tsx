import { useState } from "react";

const taskModalSvgPaths = {
p23a8e180: "M6.28 5.22C6.13783 5.08752 5.94978 5.0154 5.75548 5.01883C5.56118 5.02225 5.37579 5.10097 5.23838 5.23838C5.10096 5.37579 5.02225 5.56118 5.01882 5.75548C5.0154 5.94978 5.08752 6.13783 5.22 6.28L8.94 10L5.22 13.72C5.14631 13.7887 5.08721 13.8715 5.04622 13.9635C5.00523 14.0555 4.98319 14.1548 4.98141 14.2555C4.97963 14.3562 4.99816 14.4562 5.03588 14.5496C5.0736 14.643 5.12974 14.7278 5.20096 14.799C5.27218 14.8703 5.35701 14.9264 5.4504 14.9641C5.54379 15.0018 5.64382 15.0204 5.74452 15.0186C5.84523 15.0168 5.94454 14.9948 6.03654 14.9538C6.12854 14.9128 6.21134 14.8537 6.28 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13783 14.9846 5.94978 14.9812 5.75548C14.9777 5.56118 14.899 5.37579 14.7616 5.23838C14.6242 5.10097 14.4388 5.02225 14.2445 5.01883C14.0502 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28 5.22Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTaskModal({ isOpen, onClose }: NewTaskModalProps) {
  const [timeType, setTimeType] = useState<"estimated" | "interval" | "day">("estimated");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-[#fafafa] max-h-[90vh] overflow-y-auto rounded-[12px] sm:rounded-[16px] w-full max-w-[1220px]">
        <div className="flex flex-col items-center pb-6 sm:pb-8 md:pb-[48px] px-4 sm:px-6 md:px-[32px] relative w-full">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-[32px] items-start relative shrink-0 w-full">
            {/* Header */}
            <div className="flex flex-col items-start relative shrink-0 w-full">
              {/* Breadcrumbs */}
              <div className="flex flex-col gap-3 sm:gap-[14px] items-start pt-4 sm:pt-6 md:pt-[32px] relative shrink-0 w-full">
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Planner</p>
                  </div>
                  <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={taskModalSvgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[#737373] text-[14px]">New task</p>
                  </div>
                </div>

                {/* Title */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
                    <p className="leading-[32px]">New task</p>
                  </div>
                  <button onClick={onClose} className="text-[#737373] hover:text-[#171717] transition-colors">
                    <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={taskModalSvgPaths.p23a8e180} fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
                  {/* Row 1: Order number & Type */}
                  <div className="content-stretch flex flex-col sm:flex-row gap-[24px] items-start relative shrink-0 w-full">
                    {/* Order number */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Order number</p>
                      </div>
                      <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                            <input 
                              type="text" 
                              placeholder="Enter order number"
                              className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic min-h-px min-w-px bg-transparent border-none outline-none text-[#171717] text-[14px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Type</p>
                      </div>
                      <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic text-[#a3a3a3] text-[14px]">Select type</p>
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={taskModalSvgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Inventory category & Driver */}
                  <div className="content-stretch flex flex-col sm:flex-row gap-[24px] items-start relative shrink-0 w-full">
                    {/* Inventory category */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Inventory category</p>
                      </div>
                      <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic text-[#a3a3a3] text-[14px]">Select inventory</p>
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={taskModalSvgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driver */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Driver</p>
                      </div>
                      <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
                            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic text-[#a3a3a3] text-[14px]">Select driver</p>
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={taskModalSvgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Time & ETA */}
                  <div className="content-stretch flex flex-col sm:flex-row gap-[24px] items-start relative shrink-0 w-full">
                    {/* Time */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Time</p>
                      </div>
                      <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
                        <button
                          onClick={() => setTimeType("estimated")}
                          className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 ${timeType === "estimated" ? "bg-white" : "bg-white"}`}
                        >
                          <div className={`absolute border ${timeType === "estimated" ? "border-[#0a0a0a]" : "border-[#e5e5e5]"} border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]`} />
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Estimated time</p>
                        </button>
                        <button
                          onClick={() => setTimeType("interval")}
                          className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 ${timeType === "interval" ? "bg-white" : "bg-white"}`}
                        >
                          <div className={`absolute border ${timeType === "interval" ? "border-[#0a0a0a]" : "border-[#e5e5e5]"} border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]`} />
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Time interval</p>
                        </button>
                        <button
                          onClick={() => setTimeType("day")}
                          className={`content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 ${timeType === "day" ? "bg-white" : "bg-white"}`}
                        >
                          <div className={`absolute border ${timeType === "day" ? "border-[#0a0a0a]" : "border-[#e5e5e5]"} border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]`} />
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">During the day</p>
                        </button>
                      </div>
                    </div>

                    {/* Estimated time (ETA) */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Estimated time (ETA)</p>
                      </div>
                      <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                            <input
                              type="text"
                              placeholder="Select date and time"
                              className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px bg-transparent border-none outline-none text-[#171717] text-[14px]"
                            />
                            <div className="relative shrink-0 size-[18px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                <path clipRule="evenodd" d={taskModalSvgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Status */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full sm:w-[574px]">
                    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Status</p>
                    </div>
                    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
                          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic text-[#a3a3a3] text-[14px]">Select status</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={taskModalSvgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <button className="bg-[#05376d] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Create task</p>
                </button>
                <button onClick={onClose} className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
                  <div className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
