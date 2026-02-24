import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p2da5df80: "M2.96274 2.96274C3.12139 2.80409 3.37861 2.80409 3.53726 2.96274L6.5 5.92548L9.46274 2.96274C9.62139 2.80409 9.87861 2.80409 10.0373 2.96274C10.1959 3.12139 10.1959 3.37861 10.0373 3.53726L7.07452 6.5L10.0373 9.46274C10.1959 9.62139 10.1959 9.87861 10.0373 10.0373C9.87861 10.1959 9.62139 10.1959 9.46274 10.0373L6.5 7.07452L3.53726 10.0373C3.37861 10.1959 3.12139 10.1959 2.96274 10.0373C2.80409 9.87861 2.80409 9.62139 2.96274 9.46274L5.92548 6.5L2.96274 3.53726C2.80409 3.37861 2.80409 3.12139 2.96274 2.96274Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

interface DayHours {
  working: boolean;
  from: string;
  to: string;
  hoursBeforeClose: string;
}

export default function WorkingHoursEditPage() {
  const { providerId } = useParams();
  const navigate = useNavigate();

  const [closedDays, setClosedDays] = useState<string[]>(['Dec 29, 2025', 'Dec 31, 2025']);
  const [specialPricesEnabled, setSpecialPricesEnabled] = useState(false);
  const [pricesPeriod, setPricesPeriod] = useState('');
  const [chooseDays, setChooseDays] = useState<string[]>(['Dec 29, 2025', 'Dec 31, 2025']);
  
  const [weekSchedule, setWeekSchedule] = useState<Record<string, DayHours>>({
    monday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    tuesday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    wednesday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    thursday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    friday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    saturday: { working: true, from: '', to: '', hoursBeforeClose: '' },
    sunday: { working: false, from: '', to: '', hoursBeforeClose: '' }
  });

  const [containerService, setContainerService] = useState({
    basePrice6m3: '100',
    fixDeliveryPrice6m3: '100',
    pricePerKm6m3: '100',
    minimalOrderPrice6m3: '100',
    priceCoefficient6m3: '1',
    basePrice9m3: '100',
    fixDeliveryPrice9m3: '100',
    pricePerKm9m3: '100',
    minimalOrderPrice9m3: '100',
    priceCoefficient9m3: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving working hours');
    navigate(`/companies/${providerId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}`);
  };

  const removeClosedDay = (index: number) => {
    setClosedDays(closedDays.filter((_, i) => i !== index));
  };

  const removeChooseDay = (index: number) => {
    setChooseDays(chooseDays.filter((_, i) => i !== index));
  };

  const toggleDayWorking = (day: string) => {
    setWeekSchedule({
      ...weekSchedule,
      [day]: { ...weekSchedule[day], working: !weekSchedule[day].working }
    });
  };

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      <div className="content-stretch flex flex-col items-center pb-[32px] sm:pb-[48px] px-4 sm:px-6 md:px-8 lg:px-[32px] w-full">
        <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-start max-w-[1220px] w-full">
          {/* Breadcrumbs and Header */}
          <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] items-start pt-4 sm:pt-6 md:pt-[32px] w-full">
            {/* Breadcrumbs */}
            <div className="content-stretch flex items-start w-full overflow-x-auto scrollbar-hide">
              <button
                onClick={() => navigate('/companies')}
                className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap">
                  Companies
                </p>
              </button>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  SIA "NIKA MI"
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => {
                    navigate(`/companies/${providerId}`);
                    // TODO: set active tab to 'working-hours'
                  }}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  Working Hours
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] whitespace-nowrap">
                  Edit
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-start w-full">
            {/* Closed Days Section */}
            <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
              <div className="content-stretch flex flex-col gap-[20px] items-start p-4 sm:p-5 md:p-[24px] w-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                  Closed Days
                </p>
                
                {/* Choose days field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Choose days
                  </label>
                  <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <input
                      type="date"
                      className="h-[38px] w-full rounded-[8px] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>
                  
                  {/* Selected dates tags */}
                  {closedDays.length > 0 && (
                    <div className="content-start flex flex-wrap gap-[6px_8px] items-start w-full mt-2">
                      {closedDays.map((date, index) => (
                        <div key={index} className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#fdecce]">
                          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d97706] text-[14px] text-center">
                            {date}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeClosedDay(index)}
                            className="shrink-0 size-[13px]"
                          >
                            <svg className="size-full" fill="none" viewBox="0 0 13 13">
                              <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="#D97706" fillRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Business Hours Section */}
            <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
              <div className="content-stretch flex flex-col gap-[20px] items-start p-4 sm:p-5 md:p-[24px] w-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                  Business Hours
                </p>

                {/* Days list */}
                <div className="content-stretch flex flex-col gap-[20px] items-start w-full">
                  {days.map(({ key, label }) => (
                    <div key={key} className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-start p-4 sm:p-5 md:p-[24px] relative rounded-[12px] w-full">
                      {/* Day header with toggle */}
                      <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px]">
                          {label}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleDayWorking(key)}
                          className="flex gap-[12px] items-center"
                        >
                          <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${weekSchedule[key].working ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                            <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${weekSchedule[key].working ? 'left-[23px]' : 'left-[2px]'}`} />
                          </div>
                          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                            Working
                          </span>
                        </button>
                      </div>

                      {/* Time fields - only show if working */}
                      {weekSchedule[key].working && (
                        <>
                          <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start w-full">
                            {/* From */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                              <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                                From
                              </label>
                              <div className="relative w-full">
                                <select
                                  value={weekSchedule[key].from}
                                  onChange={(e) => setWeekSchedule({
                                    ...weekSchedule,
                                    [key]: { ...weekSchedule[key], from: e.target.value }
                                  })}
                                  className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                                >
                                  <option value=""></option>
                                  <option value="08:00">08:00</option>
                                  <option value="09:00">09:00</option>
                                  <option value="10:00">10:00</option>
                                </select>
                                <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                                  <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>

                            {/* To */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                              <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                                To
                              </label>
                              <div className="relative w-full">
                                <select
                                  value={weekSchedule[key].to}
                                  onChange={(e) => setWeekSchedule({
                                    ...weekSchedule,
                                    [key]: { ...weekSchedule[key], to: e.target.value }
                                  })}
                                  className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                                >
                                  <option value=""></option>
                                  <option value="18:00">18:00</option>
                                  <option value="19:00">19:00</option>
                                  <option value="20:00">20:00</option>
                                </select>
                                <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                                  <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>

                            {/* Hours before close */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                              <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                                Hours before days offers are closed
                              </label>
                              <input
                                type="text"
                                value={weekSchedule[key].hoursBeforeClose}
                                onChange={(e) => setWeekSchedule({
                                  ...weekSchedule,
                                  [key]: { ...weekSchedule[key], hoursBeforeClose: e.target.value }
                                })}
                                placeholder="To allow make order till previous day's 15:00, specify 9 (hours)"
                                className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Prices Section */}
            <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
              <div className="content-stretch flex flex-col gap-[20px] items-start p-4 sm:p-5 md:p-[24px] w-full">
                {/* Special prices toggle */}
                <div className="content-stretch flex items-center justify-between w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px]">
                    Special prices
                  </p>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Toggle clicked, current state:', specialPricesEnabled);
                      setSpecialPricesEnabled(!specialPricesEnabled);
                    }}
                    className="flex gap-[12px] items-center cursor-pointer hover:opacity-80 transition-opacity"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSpecialPricesEnabled(!specialPricesEnabled);
                      }
                    }}
                  >
                    <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] transition-all duration-300 ${specialPricesEnabled ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                      <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all duration-300 ${specialPricesEnabled ? 'left-[23px]' : 'left-[2px]'}`} />
                    </div>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      {specialPricesEnabled ? 'On' : 'Off'}
                    </span>
                  </div>
                </div>

                {/* Special prices content - only show if enabled */}
                {specialPricesEnabled && (
                  <div className="content-stretch flex flex-col gap-[20px] items-start w-full">
                    {/* Price period and Choose days */}
                    <div className="content-stretch grid grid-cols-1 lg:grid-cols-2 gap-4 items-start w-full">
                      {/* Price period name */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Price period name
                        </label>
                        <div className="relative w-full">
                          <select
                            value={pricesPeriod}
                            onChange={(e) => setPricesPeriod(e.target.value)}
                            className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                          >
                            <option value="">Price period</option>
                            <option value="holiday">Holiday period</option>
                            <option value="summer">Summer period</option>
                            <option value="winter">Winter period</option>
                          </select>
                          <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Choose days */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Choose days
                        </label>
                        <input
                          type="date"
                          className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                        />
                      </div>
                    </div>

                    {/* Selected dates tags */}
                    {chooseDays.length > 0 && (
                      <div className="content-start flex flex-wrap gap-[6px_8px] items-start w-full">
                        {chooseDays.map((date, index) => (
                          <div key={index} className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#fdecce]">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d97706] text-[14px] text-center">
                              {date}
                            </p>
                            <button
                              type="button"
                              onClick={() => removeChooseDay(index)}
                              className="shrink-0 size-[13px]"
                            >
                              <svg className="size-full" fill="none" viewBox="0 0 13 13">
                                <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="#D97706" fillRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Container service section */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start w-full border-t border-[#e5e5e5] pt-[20px]">
                      <button
                        type="button"
                        className="content-stretch flex items-center justify-between w-full"
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px]">
                          Container service
                        </p>
                        <svg className="size-[24px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M6.22 15.28C6.36063 15.4205 6.55125 15.4993 6.75 15.4993C6.94875 15.4993 7.13937 15.4205 7.28 15.28L12 10.56L16.72 15.28C16.7887 15.3537 16.8715 15.4128 16.9635 15.4538C17.0555 15.4948 17.1548 15.5168 17.2555 15.5186C17.3562 15.5204 17.4562 15.5018 17.5496 15.4641C17.643 15.4264 17.7278 15.3703 17.799 15.299C17.8703 15.2278 17.9264 15.143 17.9641 15.0496C18.0018 14.9562 18.0204 14.8562 18.0186 14.7555C18.0168 14.6548 17.9948 14.5555 17.9538 14.4635C17.9128 14.3715 17.8537 14.2887 17.78 14.22L12.53 8.97C12.3894 8.82955 12.1988 8.75066 12 8.75066C11.8012 8.75066 11.6106 8.82955 11.47 8.97L6.22 14.22C6.07955 14.3606 6.00066 14.5512 6.00066 14.75C6.00066 14.9488 6.07955 15.1394 6.22 15.28Z" fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </button>

                      {/* 6 m³ */}
                      <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start p-4 sm:p-5 md:p-[18px] relative rounded-[12px] w-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#171717] text-[14px] w-full">
                          6 m³
                        </p>
                        <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Base price
                            </label>
                            <input
                              type="text"
                              value={containerService.basePrice6m3}
                              onChange={(e) => setContainerService({ ...containerService, basePrice6m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Fix delivery price in cents
                            </label>
                            <input
                              type="text"
                              value={containerService.fixDeliveryPrice6m3}
                              onChange={(e) => setContainerService({ ...containerService, fixDeliveryPrice6m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Price per km
                            </label>
                            <input
                              type="text"
                              value={containerService.pricePerKm6m3}
                              onChange={(e) => setContainerService({ ...containerService, pricePerKm6m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Minimal order price
                            </label>
                            <input
                              type="text"
                              value={containerService.minimalOrderPrice6m3}
                              onChange={(e) => setContainerService({ ...containerService, minimalOrderPrice6m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Price coefficient
                            </label>
                            <input
                              type="text"
                              value={containerService.priceCoefficient6m3}
                              onChange={(e) => setContainerService({ ...containerService, priceCoefficient6m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-start w-full">
                          <label className="flex gap-[8px] items-center cursor-pointer">
                            <input type="checkbox" className="size-[16px]" />
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Fix delivery price
                            </span>
                          </label>
                          <label className="flex gap-[8px] items-center cursor-pointer">
                            <input type="checkbox" className="size-[16px]" />
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Free of charge
                            </span>
                          </label>
                        </div>
                      </div>

                      {/* 9 m³ */}
                      <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start p-4 sm:p-5 md:p-[18px] relative rounded-[12px] w-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#171717] text-[14px] w-full">
                          9 m³
                        </p>
                        <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Base price
                            </label>
                            <input
                              type="text"
                              value={containerService.basePrice9m3}
                              onChange={(e) => setContainerService({ ...containerService, basePrice9m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Fix delivery price in cents
                            </label>
                            <input
                              type="text"
                              value={containerService.fixDeliveryPrice9m3}
                              onChange={(e) => setContainerService({ ...containerService, fixDeliveryPrice9m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Price per km
                            </label>
                            <input
                              type="text"
                              value={containerService.pricePerKm9m3}
                              onChange={(e) => setContainerService({ ...containerService, pricePerKm9m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Minimal order price
                            </label>
                            <input
                              type="text"
                              value={containerService.minimalOrderPrice9m3}
                              onChange={(e) => setContainerService({ ...containerService, minimalOrderPrice9m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                            <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Price coefficient
                            </label>
                            <input
                              type="text"
                              value={containerService.priceCoefficient9m3}
                              onChange={(e) => setContainerService({ ...containerService, priceCoefficient9m3: e.target.value })}
                              className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                            />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-start w-full">
                          <label className="flex gap-[8px] items-center cursor-pointer">
                            <input type="checkbox" className="size-[16px]" />
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Fix delivery price
                            </span>
                          </label>
                          <label className="flex gap-[8px] items-center cursor-pointer">
                            <input type="checkbox" className="size-[16px]" />
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                              Free of charge
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Additional service section */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start w-full border-t border-[#e5e5e5] pt-[20px]">
                      <button
                        type="button"
                        className="content-stretch flex items-center justify-between w-full"
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px]">
                          Additional service
                        </p>
                        <svg className="size-[24px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M6.22 15.28C6.36063 15.4205 6.55125 15.4993 6.75 15.4993C6.94875 15.4993 7.13937 15.4205 7.28 15.28L12 10.56L16.72 15.28C16.7887 15.3537 16.8715 15.4128 16.9635 15.4538C17.0555 15.4948 17.1548 15.5168 17.2555 15.5186C17.3562 15.5204 17.4562 15.5018 17.5496 15.4641C17.643 15.4264 17.7278 15.3703 17.799 15.299C17.8703 15.2278 17.9264 15.143 17.9641 15.0496C18.0018 14.9562 18.0204 14.8562 18.0186 14.7555C18.0168 14.6548 17.9948 14.5555 17.9538 14.4635C17.9128 14.3715 17.8537 14.2887 17.78 14.22L12.53 8.97C12.3894 8.82955 12.1988 8.75066 12 8.75066C11.8012 8.75066 11.6106 8.82955 11.47 8.97L6.22 14.22C6.07955 14.3606 6.00066 14.5512 6.00066 14.75C6.00066 14.9488 6.07955 15.1394 6.22 15.28Z" fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="content-stretch flex items-start w-full">
              <div className="content-stretch flex flex-col xs:flex-row gap-[12px] items-center w-full xs:w-auto">
                <button
                  type="submit"
                  className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors w-full xs:w-auto"
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                    Save changes
                  </span>
                </button>
                <button
                  onClick={handleCancel}
                  type="button"
                  className="bg-white flex items-center justify-center px-[16px] py-[8px] rounded-[8px] border border-[#e5e5e5] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-colors w-full xs:w-auto"
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                    Cancel
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
