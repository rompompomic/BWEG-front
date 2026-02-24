import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p14670c00: "M12 9.75001C11.4033 9.75001 10.831 9.98706 10.409 10.409C9.98705 10.831 9.75 11.4033 9.75 12C9.75 12.5967 9.98705 13.169 10.409 13.591C10.831 14.013 11.4033 14.25 12 14.25C12.5967 14.25 13.169 14.013 13.591 13.591C14.0129 13.169 14.25 12.5967 14.25 12C14.25 11.4033 14.0129 10.831 13.591 10.409C13.169 9.98706 12.5967 9.75001 12 9.75001ZM9.34835 9.34836C10.0516 8.6451 11.0054 8.25001 12 8.25001C12.9946 8.25001 13.9484 8.6451 14.6517 9.34836C15.3549 10.0516 15.75 11.0054 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34836Z",
p1a688700: "M12 5.25001C7.69256 5.25001 4.03585 8.04402 2.74772 11.9196C2.72985 11.9733 2.72977 12.0315 2.74764 12.0852C4.03873 15.9589 7.69453 18.75 12 18.75C16.3075 18.75 19.9641 15.956 21.2512 12.0806L21.2522 12.0778C21.2701 12.0246 21.2697 11.9691 21.2525 11.9183L21.2515 11.9151C19.9605 8.04116 16.3055 5.25001 12 5.25001ZM1.32436 11.4462C2.81029 6.97588 7.02753 3.75001 12 3.75001C16.9705 3.75001 21.1855 6.97286 22.6745 11.4409C22.7961 11.8028 22.7956 12.1934 22.6743 12.5548C21.189 17.0247 16.972 20.25 12 20.25C7.02959 20.25 2.81348 17.0272 1.32447 12.5591C1.20434 12.1981 1.20428 11.8073 1.32436 11.4462Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p2504cd00: "M4.21875 2.25C4.06342 2.25 3.9375 2.37592 3.9375 2.53125V15.4688C3.9375 15.6241 4.06342 15.75 4.21875 15.75H13.7812C13.9366 15.75 14.0625 15.6241 14.0625 15.4688V8.71875C14.0625 7.63144 13.1811 6.75 12.0938 6.75H10.9688C10.1921 6.75 9.5625 6.1204 9.5625 5.34375V4.21875C9.5625 3.13144 8.68106 2.25 7.59375 2.25H4.21875ZM4.21875 1.125C3.4421 1.125 2.8125 1.7546 2.8125 2.53125V15.4688C2.8125 16.2454 3.4421 16.875 4.21875 16.875H13.7812C14.5579 16.875 15.1875 16.2454 15.1875 15.4688V8.4375C15.1875 4.39892 11.9136 1.125 7.875 1.125H4.21875ZM10.3178 2.75089C10.5536 3.18764 10.6875 3.68756 10.6875 4.21875V5.34375C10.6875 5.49908 10.8134 5.625 10.9688 5.625H12.0938C12.6249 5.625 13.1249 5.75887 13.5616 5.99472C12.9366 4.54162 11.7709 3.37592 10.3178 2.75089ZM5.625 11.25C5.625 10.9393 5.87684 10.6875 6.1875 10.6875H11.8125C12.1232 10.6875 12.375 10.9393 12.375 11.25C12.375 11.5607 12.1232 11.8125 11.8125 11.8125H6.1875C5.87684 11.8125 5.625 11.5607 5.625 11.25ZM5.625 13.5C5.625 13.1893 5.87684 12.9375 6.1875 12.9375H9C9.31066 12.9375 9.5625 13.1893 9.5625 13.5C9.5625 13.8107 9.31066 14.0625 9 14.0625H6.1875C5.87684 14.0625 5.625 13.8107 5.625 13.5Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p3d7a2b00: "M12.5 3.125H7.5V16.875H12.5V3.125ZM13.75 16.875H16.5625C17.425 16.875 18.125 16.175 18.125 15.3125V4.6875C18.125 3.82417 17.425 3.125 16.5625 3.125H13.75V16.875ZM3.4375 3.125H6.25V16.875H3.4375C3.0231 16.875 2.62567 16.7104 2.33265 16.4174C2.03962 16.1243 1.875 15.7269 1.875 15.3125V4.6875C1.875 3.82417 2.575 3.125 3.4375 3.125Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
} as const;

// Mock data for promos
const promosData = [
  {
    id: 1,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 2,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 3,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 4,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 5,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 6,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 7,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 8,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 9,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  },
  {
    id: 10,
    name: 'Promo',
    description: '-10% for Holidays',
    scope: 'With client',
    applications: ['App', 'Web', 'Sales', 'Accountants'],
    startDate: '20/12/25',
    endDate: '01/01/26',
    lastUsed: '31/12/25'
  }
];

export default function PromoPage() {
  const [applied, setApplied] = useState(false);
  const [publicView, setPublicView] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Promo</p>
            </div>
            <div className="flex gap-[16px] items-center">
              <button className="bg-[#dbeafe] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                {/* Document Text Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p2504cd00} fill="#05376D" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#1e3a8a]">
                  Reports and audit
                </span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/promo/new')}
                className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* Plus Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  New Promo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Table Container with Filters */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[32px]">
          {/* Filters Section */}
          <div className="bg-white w-full border-b border-[#e5e5e5]">
            <div className="flex flex-col size-full">
              <div className="content-stretch flex flex-col gap-[14px] items-end pb-[11px] pt-[10px] px-4 md:px-[24px] w-full">
                {/* Filters Header */}
                <div className="w-full">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-start justify-between w-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#0a0a0a] text-[14px]">
                      Filters
                    </p>
                    <div className="flex gap-[12px] items-center justify-end w-full md:w-auto">
                      {/* Search */}
                      <div className="flex-1 md:flex-initial w-full md:w-[210px]">
                        <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[7px] w-full">
                              <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={svgPaths.p865e080} fill="#A3A3A3" fillRule="evenodd" />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px] bg-transparent border-none outline-none placeholder:text-[#a3a3a3]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-white rounded-[100px] size-[24px] flex-shrink-0 flex items-center justify-center">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p3d7a2b00} fill="#A3A3A3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter Inputs - Desktop: Flex Wrap */}
                <div className="w-full">
                  <div className="hidden lg:flex flex-wrap gap-[14px] items-center w-full">
                    {/* Segment */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Segment
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scope with */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Scope with
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Application */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Application
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lats used */}
                    <div className="shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px] whitespace-nowrap">
                              Lats used
                            </p>
                            <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                              <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Applied Toggle */}
                    <div className="flex gap-[12px] items-center shrink-0">
                      <button
                        onClick={() => setApplied(!applied)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          applied ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            applied ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Applied
                      </p>
                    </div>

                    {/* Public view Toggle */}
                    <div className="flex gap-[12px] items-center shrink-0">
                      <button
                        onClick={() => setPublicView(!publicView)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          publicView ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            publicView ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Public view
                      </p>
                    </div>

                    {/* Clear Button */}
                    <button className="bg-[#dbeafe] flex items-center justify-center opacity-50 px-[16px] py-[8px] rounded-[8px] shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#1e3a8a] text-[14px] text-center">
                        Clear
                      </p>
                    </button>
                  </div>

                  {/* Mobile/Tablet: Grid Layout */}
                  <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Segment */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Segment</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Scope with */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Scope with</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Application */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Application</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Lats used */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Lats used"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Applied Toggle */}
                    <div className="flex gap-[12px] items-center col-span-1 sm:col-span-2">
                      <button
                        onClick={() => setApplied(!applied)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          applied ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            applied ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Applied
                      </p>
                    </div>

                    {/* Public view Toggle */}
                    <div className="flex gap-[12px] items-center col-span-1 sm:col-span-2">
                      <button
                        onClick={() => setPublicView(!publicView)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          publicView ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            publicView ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Public view
                      </p>
                    </div>

                    {/* Clear Button */}
                    <button className="bg-[#dbeafe] opacity-50 px-[16px] py-[8px] rounded-[8px] h-[38px] w-full col-span-1 sm:col-span-2">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1e3a8a] text-[14px]">
                        Clear
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section - Desktop only */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center pl-[24px] pr-[16px] h-[48px] size-full">
                        <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Name
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Description
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Scope
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Application
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Start Date
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          End Date
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Lats used
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          State
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {promosData.map((promo) => (
                  <tr key={promo.id} className="bg-white hover:bg-[#fafafa]">
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] h-[56px] size-full">
                          <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.scope}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <div className="flex gap-[6px] flex-wrap">
                            {promo.applications.map((app, index) => (
                              <span
                                key={index}
                                className="bg-[#f5f5f5] px-[8px] py-[2px] rounded-[4px] font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#525252]"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.startDate}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.endDate}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {promo.lastUsed}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <svg className="size-[20px] shrink-0 text-[#737373]" fill="none" viewBox="0 0 20 20">
                            <path d="M2.5 10C2.5 10 5.5 4 10 4C14.5 4 17.5 10 17.5 10C17.5 10 14.5 16 10 16C5.5 16 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards View - Mobile & Tablet */}
          <div className="lg:hidden px-4 md:px-6 pb-4 pt-4">
            <div className="space-y-3">
              {promosData.map((promo) => (
                <div key={promo.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1" />
                    <div className="flex-1 space-y-2">
                      {/* Name & Description */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                          {promo.name}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                          {promo.description}
                        </p>
                      </div>

                      {/* Scope */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Scope
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {promo.scope}
                        </p>
                      </div>

                      {/* Applications */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                          Application
                        </p>
                        <div className="flex gap-[6px] flex-wrap">
                          {promo.applications.map((app, index) => (
                            <span
                              key={index}
                              className="bg-[#f5f5f5] px-[8px] py-[2px] rounded-[4px] font-['Inter:Regular',sans-serif] text-[12px] leading-[16px] text-[#525252]"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Start Date
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {promo.startDate}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            End Date
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {promo.endDate}
                          </p>
                        </div>
                      </div>

                      {/* Last Used & State */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Lats used
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {promo.lastUsed}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            State
                          </p>
                          <svg className="size-[20px] shrink-0 text-[#737373]" fill="none" viewBox="0 0 20 20">
                            <path d="M2.5 10C2.5 10 5.5 4 10 4C14.5 4 17.5 10 17.5 10C17.5 10 14.5 16 10 16C5.5 16 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-4 md:px-[24px] py-[16px] border-t border-[#e5e5e5]">
            <div className="flex items-center gap-[8px]">
              <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">Per page</span>
              <div className="relative">
                <select 
                  value={perPage}
                  onChange={(e) => setPerPage(Number(e.target.value))}
                  className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none"
                >
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="bg-white border border-[#e5e5e5] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
