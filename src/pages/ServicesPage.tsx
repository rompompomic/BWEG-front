import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p18552ac0: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM9.21967 9.21967C9.51256 8.92678 9.98744 8.92678 10.2803 9.21967L12 10.9393L13.7197 9.21967C14.0126 8.92678 14.4874 8.92678 14.7803 9.21967C15.0732 9.51256 15.0732 9.98744 14.7803 10.2803L13.0607 12L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L12 13.0607L10.2803 14.7803C9.98744 15.0732 9.51256 15.0732 9.21967 14.7803C8.92678 14.4874 8.92678 14.0126 9.21967 13.7197L10.9393 12L9.21967 10.2803C8.92678 9.98744 8.92678 9.51256 9.21967 9.21967Z",
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p3050980: "M6.75 5.0625V11.25M11.25 6.75V12.9375M11.6273 15.5613L15.2836 13.7332C15.5694 13.5903 15.75 13.2981 15.75 12.9785V3.61522C15.75 2.98799 15.0899 2.58004 14.5289 2.86054L11.6273 4.31133C11.3898 4.4301 11.1102 4.4301 10.8727 4.31133L7.12734 2.43867C6.8898 2.3199 6.6102 2.3199 6.37266 2.43867L2.71641 4.26679C2.43056 4.40972 2.25 4.70188 2.25 5.02147V14.3848C2.25 15.012 2.91008 15.42 3.47109 15.1395L6.37266 13.6887C6.6102 13.5699 6.8898 13.5699 7.12734 13.6887L10.8727 15.5613C11.1102 15.6801 11.3898 15.6801 11.6273 15.5613Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
} as const;

// Mock data for services
const servicesData = [
  {
    id: 1,
    mobileName: 'Containers for wood waste',
    description: 'Only wood waste can be placed in these containers',
    code: '19',
    postpayment: false,
    visible: true
  },
  {
    id: 2,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 3,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 4,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 5,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 6,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 7,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 8,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 9,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 10,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 11,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  },
  {
    id: 12,
    mobileName: 'Containers for clean construction debris',
    description: 'Containers for clean construction debris',
    code: '24',
    postpayment: false,
    visible: true
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'containers' | 'additional'>('containers');
  const [visibilityFilter, setVisibilityFilter] = useState('Visible');
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 400;
  const perPage = 12;

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Services</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[16px] items-stretch sm:items-center w-full sm:w-auto">
              <button 
                onClick={() => navigate('/services/regions')}
                className="bg-[#dbeafe] flex flex-1 sm:flex-initial gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* Map Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3050980} stroke="#05376D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#1e3a8a]">
                  Regions
                </span>
              </button>
              <button 
                onClick={() => navigate('/services/new')}
                className="bg-[#05376d] flex flex-1 sm:flex-initial gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
              >
                {/* Plus Icon */}
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  New service
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Container */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[24px] p-[8px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full">
            {/* Tabs */}
            <div className="flex gap-[12px] items-center overflow-x-auto w-full sm:w-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('containers')}
                className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                  activeTab === 'containers' ? 'bg-[#fafafa]' : 'bg-white'
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                  activeTab === 'containers' ? 'text-[#d97706]' : 'text-[#737373]'
                }`}>
                  Containers service
                </p>
              </button>
              <button
                onClick={() => setActiveTab('additional')}
                className={`flex gap-[10px] h-[36px] items-center justify-center px-[12px] rounded-[8px] shrink-0 whitespace-nowrap ${
                  activeTab === 'additional' ? 'bg-[#fafafa]' : 'bg-white'
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] ${
                  activeTab === 'additional' ? 'text-[#d97706]' : 'text-[#737373]'
                }`}>
                  Additional service
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[24px]">
          {/* Filters Section */}
          <div className="bg-white w-full border-b border-[#e5e5e5]">
            <div className="flex items-center pb-[11px] pt-[10px] px-4 md:px-[24px] w-full">
              <div className="w-full md:w-[120px]">
                <div className="relative">
                  <select
                    value={visibilityFilter}
                    onChange={(e) => setVisibilityFilter(e.target.value)}
                    className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] w-full appearance-none outline-none"
                  >
                    <option>Visible</option>
                    <option>Hidden</option>
                    <option>All</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
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
                          Mobile name
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
                          Code
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Postpayment
                        </p>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Visible
                        </p>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Action
                        </p>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service) => (
                  <tr key={service.id} className="bg-white hover:bg-[#fafafa]">
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] h-[56px] size-full">
                          <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer" />
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p 
                            onClick={() => navigate(`/services/${service.id}`)}
                            className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px] cursor-pointer hover:text-[#05376d] hover:underline"
                          >
                            {service.mobileName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                            {service.code}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          {service.postpayment ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#737373" strokeWidth="1.5" fill="none" />
                              <path d="M7 13l6-6M13 13L7 7" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          {service.visible && (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <button 
                            onClick={() => navigate(`/services/${service.id}/edit`)}
                            className="flex items-center gap-[6px] text-[#2563eb] hover:text-[#1e40af]"
                          >
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path d="M11.3 3.3l1.4 1.4M2 14h1.4l8.2-8.2-1.4-1.4L2 12.6V14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                              Edit
                            </span>
                          </button>
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
              {servicesData.map((service) => (
                <div key={service.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1 cursor-pointer" />
                    <div className="flex-1 space-y-2">
                      {/* Service Name */}
                      <div onClick={() => navigate(`/services/${service.id}`)} className="cursor-pointer">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717] hover:text-[#05376d] hover:underline">
                          {service.mobileName}
                        </p>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Description
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {service.description}
                        </p>
                      </div>

                      {/* Code */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Code
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {service.code}
                        </p>
                      </div>

                      {/* Postpayment & Visible */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            Postpayment
                          </p>
                          {service.postpayment ? (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#737373" strokeWidth="1.5" fill="none" />
                              <path d="M7 13l6-6M13 13L7 7" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-1">
                            Visible
                          </p>
                          {service.visible && (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#16a34a" strokeWidth="1.5" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Edit Button */}
                      <div>
                        <button 
                          onClick={() => navigate(`/services/${service.id}/edit`)}
                          className="flex items-center gap-[6px] text-[#2563eb] hover:text-[#1e40af]"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M11.3 3.3l1.4 1.4M2 14h1.4l8.2-8.2-1.4-1.4L2 12.6V14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                            Edit
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-4 md:px-[24px] py-[16px] border-t border-[#e5e5e5]">
            <div className="text-[14px] font-['Inter:Regular',sans-serif] text-[#737373] text-center sm:text-left">
              Showing {(currentPage - 1) * perPage + 1} to {Math.min(currentPage * perPage, totalResults)} of {totalResults} results
            </div>
            <div className="flex items-center gap-2 overflow-x-auto max-w-full">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-[6px] border border-[#e5e5e5] bg-white text-[14px] font-['Inter:Regular',sans-serif] text-[#171717] disabled:opacity-50 hover:bg-[#fafafa]"
              >
                ‹
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-[6px] text-[14px] font-['Inter:Regular',sans-serif] ${
                    currentPage === page
                      ? 'bg-[#05376d] text-white'
                      : 'border border-[#e5e5e5] bg-white text-[#171717] hover:bg-[#fafafa]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-[#737373]">...</span>
              <button
                onClick={() => setCurrentPage(19)}
                className={`px-3 py-1 rounded-[6px] border border-[#e5e5e5] bg-white text-[14px] font-['Inter:Regular',sans-serif] text-[#171717] hover:bg-[#fafafa]`}
              >
                19
              </button>
              <button
                onClick={() => setCurrentPage(20)}
                className={`px-3 py-1 rounded-[6px] border border-[#e5e5e5] bg-white text-[14px] font-['Inter:Regular',sans-serif] text-[#171717] hover:bg-[#fafafa]`}
              >
                20
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(20, currentPage + 1))}
                disabled={currentPage === 20}
                className="px-3 py-1 rounded-[6px] border border-[#e5e5e5] bg-white text-[14px] font-['Inter:Regular',sans-serif] text-[#171717] disabled:opacity-50 hover:bg-[#fafafa]"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
