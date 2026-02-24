import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p28ffe520: "M4.3464 11.1336L5.356 8.6096C5.51692 8.20751 5.75778 7.84227 6.064 7.536L11.6 2.0016C11.9183 1.68334 12.3499 1.50454 12.8 1.50454C13.2501 1.50454 13.6817 1.68334 14 2.0016C14.3183 2.31986 14.4971 2.75151 14.4971 3.2016C14.4971 3.65169 14.3183 4.08334 14 4.4016L8.464 9.936C8.1576 10.2424 7.792 10.484 7.3896 10.6448L4.8664 11.6544C4.79371 11.6835 4.71408 11.6906 4.63738 11.6749C4.56067 11.6592 4.49028 11.6213 4.43491 11.5659C4.37955 11.5105 4.34165 11.4401 4.32591 11.3634C4.31018 11.2867 4.3173 11.2071 4.3464 11.1344V11.1336Z",
p2b4a67f0: "M2.8 4.6C2.8 4.048 3.248 3.6 3.8 3.6H8C8.15913 3.6 8.31174 3.53679 8.42426 3.42426C8.53679 3.31174 8.6 3.15913 8.6 3C8.6 2.84087 8.53679 2.68826 8.42426 2.57574C8.31174 2.46321 8.15913 2.4 8 2.4H3.8C3.21652 2.4 2.65695 2.63179 2.24437 3.04437C1.83179 3.45695 1.6 4.01652 1.6 4.6V12.2C1.6 12.7835 1.83179 13.3431 2.24437 13.7556C2.65695 14.1682 3.21652 14.4 3.8 14.4H11.4C11.9835 14.4 12.5431 14.1682 12.9556 13.7556C13.3682 13.3431 13.6 12.7835 13.6 12.2V8C13.6 7.84087 13.5368 7.68826 13.4243 7.57574C13.3117 7.46321 13.1591 7.4 13 7.4C12.8409 7.4 12.6883 7.46321 12.5757 7.57574C12.4632 7.68826 12.4 7.84087 12.4 8V12.2C12.4 12.752 11.952 13.2 11.4 13.2H3.8C3.248 13.2 2.8 12.752 2.8 12.2V4.6Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p865e080: "M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z",
} as const;

// Mock data for companies
const companiesData = [
  {
    id: 1,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 2,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 3,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 4,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 5,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 6,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 7,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 8,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 9,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  },
  {
    id: 10,
    name: 'SIA "NIKA MI"',
    country: 'Latvia',
    email: 'email@email.lv',
    state: 'verified',
    regNumber: '40003278804',
    legalAddress: 'Kaudzīšu iela 76, Rumbula',
    dispatcher: '+37127080202',
    contactPerson: 'Krists Lācis',
    bank: 'Bank name'
  }
];

export default function CompaniesPage() {
  const [statusFilter, setStatusFilter] = useState('Active');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const totalResults = 400;
  const perPage = 10;

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Companies</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/companies/new/edit')}
              className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
            >
              {/* Plus Icon */}
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                New company
              </span>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[32px]">
          {/* Filters Section */}
          <div className="bg-white w-full border-b border-[#e5e5e5]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-[11px] pt-[10px] px-4 md:px-[24px] gap-4 md:gap-0 w-full">
              {/* Left: Status Filter */}
              <div className="w-full md:w-auto">
                <div className="w-full md:w-[120px]">
                  <div className="relative">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] w-full appearance-none"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
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

              {/* Right: Search */}
              <div className="w-full md:w-auto">
                <div className="w-full md:w-[210px]">
                  <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[10px] items-center px-[10px] py-[7px] w-full">
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p865e080} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                        <input
                          type="text"
                          placeholder="Company name"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="flex-1 font-['Inter:Regular',sans-serif] leading-[24px] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
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
                          Country
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
                          E-mail
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
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Reg. number
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
                          Legal adress
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
                          Dispatcher
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
                          Contact person
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
                          Bank
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
                {companiesData.map((company) => (
                  <tr key={company.id} className="bg-white hover:bg-[#fafafa]">
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
                            {company.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.country}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          {company.state === 'verified' && (
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#737373" strokeWidth="1" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.regNumber}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.legalAddress}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.dispatcher}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#2563eb] text-[14px]">
                            {company.contactPerson}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {company.bank}
                          </p>
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
              {companiesData.map((company) => (
                <div key={company.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1" />
                    <div className="flex-1 space-y-2">
                      {/* Company Name */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                          {company.name}
                        </p>
                      </div>

                      {/* Country & Email */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Country
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {company.country}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            E-mail
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {company.email}
                          </p>
                        </div>
                      </div>

                      {/* Reg Number & State */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Reg. number
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {company.regNumber}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            State
                          </p>
                          {company.state === 'verified' && (
                            <svg className="size-[20px] shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#737373" strokeWidth="1" fill="none" />
                              <path d="M7 10l2 2 4-4" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Legal Address */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Legal adress
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {company.legalAddress}
                        </p>
                      </div>

                      {/* Dispatcher & Contact Person */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Dispatcher
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {company.dispatcher}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Contact person
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">
                            {company.contactPerson}
                          </p>
                        </div>
                      </div>

                      {/* Bank */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Bank
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {company.bank}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-4 md:px-[24px] py-[16px] border-t border-[#e5e5e5]">
            <div className="text-[14px] font-['Inter:Regular',sans-serif] text-[#737373]">
              Showing {(currentPage - 1) * perPage + 1} to {Math.min(currentPage * perPage, totalResults)} of {totalResults} results
            </div>
            <div className="flex items-center gap-2">
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
