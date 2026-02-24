import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p113e6700: "M0.5312 8.472C0.413684 8.16665 0.413684 7.82855 0.5312 7.5232C1.11298 6.01479 2.13796 4.71795 3.47117 3.80345C4.80437 2.88894 6.38329 2.39965 8 2.4C11.4056 2.4 14.3144 4.528 15.4688 7.528C15.5864 7.8328 15.5856 8.1712 15.4688 8.4768C14.887 9.98521 13.862 11.282 12.5288 12.1966C11.1956 13.1111 9.61671 13.6004 8 13.6C4.5944 13.6 1.6856 11.472 0.5312 8.472ZM11.2 8C11.2 8.84869 10.8629 9.66263 10.2627 10.2627C9.66263 10.8629 8.84869 11.2 8 11.2C7.15131 11.2 6.33737 10.8629 5.73726 10.2627C5.13714 9.66263 4.8 8.84869 4.8 8C4.8 7.15131 5.13714 6.33737 5.73726 5.73726C6.33737 5.13714 7.15131 4.8 8 4.8C8.84869 4.8 9.66263 5.13714 10.2627 5.73726C10.8629 6.33737 11.2 7.15131 11.2 8Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p30009f80: "M2.5 2.5V3.75M2.5 17.5V12.5M2.5 12.5L4.80841 11.9229C6.54529 11.4887 8.3802 11.6901 9.98153 12.4908L10.0713 12.5356C11.6406 13.3203 13.4353 13.5299 15.1432 13.1281L17.7384 12.5174C17.5809 11.075 17.5 9.60942 17.5 8.125C17.5 6.65285 17.5795 5.19928 17.7345 3.76835L15.1432 4.37807C13.4353 4.77993 11.6406 4.5703 10.0713 3.78565L9.98153 3.74076C8.3802 2.9401 6.54529 2.73868 4.80841 3.1729L2.5 3.75M2.5 12.5V3.75",
p32867e00: "M8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10Z",
p32f0f880: "M3.125 17.5H16.875M3.75 2.5H16.25M4.375 2.5V17.5M15.625 2.5V17.5M7.5 5.625H8.75M7.5 8.125H8.75M7.5 10.625H8.75M11.25 5.625H12.5M11.25 8.125H12.5M11.25 10.625H12.5M7.5 17.5V14.6875C7.5 14.1697 7.91973 13.75 8.4375 13.75H11.5625C12.0803 13.75 12.5 14.1697 12.5 14.6875V17.5",
p3d7a2b00: "M12.5 3.125H7.5V16.875H12.5V3.125ZM13.75 16.875H16.5625C17.425 16.875 18.125 16.175 18.125 15.3125V4.6875C18.125 3.82417 17.425 3.125 16.5625 3.125H13.75V16.875ZM3.4375 3.125H6.25V16.875H3.4375C3.0231 16.875 2.62567 16.7104 2.33265 16.4174C2.03962 16.1243 1.875 15.7269 1.875 15.3125V4.6875C1.875 3.82417 2.575 3.125 3.4375 3.125Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
p45fa600: "M14.9846 15.604C13.8434 14.0979 12.0353 13.125 10 13.125C7.96467 13.125 6.15658 14.0979 5.01539 15.604M14.9846 15.604C16.5279 14.2303 17.5 12.2287 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 12.2287 3.47208 14.2303 5.01539 15.604M14.9846 15.604C13.6596 16.7834 11.9135 17.5 10 17.5C8.08653 17.5 6.34042 16.7834 5.01539 15.604M12.5 8.125C12.5 9.50571 11.3807 10.625 10 10.625C8.61929 10.625 7.5 9.50571 7.5 8.125C7.5 6.74429 8.61929 5.625 10 5.625C11.3807 5.625 12.5 6.74429 12.5 8.125Z",
} as const;

// Mock data for invoices
const invoicesData = [
  {
    id: 1,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Advance',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 2,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'company', name: 'Company' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Partially',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 3,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Additional',
    provider: 'SIA "NIKA MI"',
    client: { type: 'company', name: 'Company' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Unpaid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 4,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Consolidate',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: { id: '12345', count: 3 },
    created: '12.03.2025',
    paymentStatus: 'Overdue',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 5,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 6,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 7,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 8,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 9,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
  {
    id: 10,
    invoiceNumber: 'LV25-12/12126',
    orderNumber: 'LV25-12/12126',
    type: 'Final',
    provider: 'SIA "NIKA MI"',
    client: { type: 'person', name: 'Name' },
    groupId: null,
    created: '12.03.2025',
    paymentStatus: 'Paid',
    withoutVAT: '600 €',
    vat: '74,71 €'
  },
];

export default function InvoicesPage() {
  const [discountsEnabled, setDiscountsEnabled] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
          <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between w-full">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px] whitespace-nowrap">
              <p className="leading-[28px] md:leading-[32px]">Invoices</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/invoices/new')}
              className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
            >
              {/* Plus Icon */}
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="white" fillRule="evenodd" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                New invoice
              </span>
            </button>
          </div>
        </div>

        {/* Table Container with Filters */}
        <div className="bg-white w-full max-w-[1220px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] mt-6 md:mt-[32px]">
          {/* Filters Section */}
          <div className="bg-white w-full">
            <div className="flex flex-col size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-end pb-[11px] pt-[10px] px-4 md:px-[24px] w-full">
                {/* Filters Header */}
                <div className="w-full">
                  <div className="flex items-start justify-between w-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#0a0a0a] text-[14px]">
                      Filters
                    </p>
                    <button className="bg-white relative rounded-[100px] size-[24px]">
                      {/* View Columns Icon */}
                      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[20px]" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p3d7a2b00} fill="#A3A3A3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Filter Inputs - Responsive Grid/Flex */}
                <div className="w-full">
                  {/* Desktop: Flex Wrap как в Figma */}
                  <div className="hidden lg:flex flex-wrap gap-[14px] items-center w-full">
                    {/* Invoice number */}
                    <div className="content-stretch flex gap-[14px] items-start shrink-0">
                      <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                        <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                              <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                                Invoice number
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Client */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] w-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
                              Client
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Type
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Created */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
                              Created
                            </p>
                            <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                              <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Status */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Payment Status
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order number */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Order number
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Group ID */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Group ID
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Provider */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Provider
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discounts Toggle */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center shrink-0">
                      <div className="content-stretch flex gap-[12px] items-center shrink-0">
                        <button
                          onClick={() => setDiscountsEnabled(!discountsEnabled)}
                          className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                            discountsEnabled ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                          }`}
                        >
                          <div
                            className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                              discountsEnabled ? 'translate-x-[21px]' : 'translate-x-0'
                            }`}
                          />
                        </button>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
                          Discounts
                        </p>
                      </div>
                    </div>

                    {/* Export status */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Export status
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Total amount */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0">
                      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] size-full">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] overflow-hidden shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis whitespace-nowrap">
                              Total amount
                            </p>
                            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                              <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clear Button */}
                    <div className="content-stretch flex gap-[14px] items-center shrink-0">
                      <button className="bg-[#dbeafe] content-stretch flex items-center justify-center opacity-50 px-[16px] py-[8px] rounded-[8px] shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#1e3a8a] text-[14px] text-center">
                          Clear
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Mobile/Tablet: Grid Layout */}
                  <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Invoice number */}
                    <input
                      type="text"
                      placeholder="Invoice number"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />

                    {/* Client */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Client</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Type */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Type</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Created */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Created"
                        className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                      />
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="#262626" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Payment Status */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Payment Status</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Order number */}
                    <input
                      type="text"
                      placeholder="Order number"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />

                    {/* Group ID */}
                    <input
                      type="text"
                      placeholder="Group ID"
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] placeholder:text-[#a3a3a3] w-full"
                    />

                    {/* Provider */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Provider</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Discounts Toggle */}
                    <div className="flex gap-[12px] items-center col-span-1 sm:col-span-2 md:col-span-1">
                      <button
                        onClick={() => setDiscountsEnabled(!discountsEnabled)}
                        className={`h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px] ${
                          discountsEnabled ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div
                          className={`absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                            discountsEnabled ? 'translate-x-[21px]' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px] whitespace-nowrap">
                        Discounts
                      </p>
                    </div>

                    {/* Export status */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Export status</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Total amount */}
                    <div className="relative w-full">
                      <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#a3a3a3] w-full appearance-none">
                        <option>Total amount</option>
                      </select>
                      <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Clear Button */}
                    <button className="bg-[#dbeafe] opacity-50 px-[16px] py-[8px] rounded-[8px] h-[38px] w-full sm:w-auto col-span-1">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1e3a8a] text-[14px]">
                        Clear
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Border line after filters */}
          <div className="border-b border-[#e5e5e5]" />

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
                    <div className="bg-[#fafafa] content-stretch flex gap-[6px] h-[48px] items-center px-[16px]">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                        Invoice number
                      </p>
                      <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                      </svg>
                    </div>
                  </th>
                  <th className="border-b border-[#e5e5e5]">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] h-[48px] size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] shrink-0 text-[#0a0a0a] text-[14px]">
                          Order number
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
                          Type
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
                          Provider
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
                          Client
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
                          Group ID
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
                          Created
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
                          Payment Sta...
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
                          Without VAT
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
                          VAT
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
                {invoicesData.map((invoice) => (
                  <tr key={invoice.id} className="bg-white">
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
                            {invoice.invoiceNumber}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.orderNumber}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.provider}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <div className="flex items-center gap-[6px]">
                            {invoice.client.type === 'person' ? (
                              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path d={svgPaths.p45fa600} stroke="#171717" strokeWidth="1.25" fill="none" strokeLinecap="round" />
                              </svg>
                            ) : (
                              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path d={svgPaths.p32f0f880} stroke="#171717" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                              {invoice.client.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          {invoice.groupId ? (
                            <div className="flex items-center gap-[6px]">
                              <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                                {invoice.groupId.id}
                              </span>
                              <div className="bg-[#e5e5e5] rounded-[4px] px-[6px] py-[2px]">
                                <span className="font-['Inter:Medium',sans-serif] font-medium text-[#525252] text-[12px] leading-[16px]">
                                  {invoice.groupId.count}
                                </span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.created}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <span
                            className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] ${
                              invoice.paymentStatus === 'Paid'
                                ? 'text-[#16a34a]'
                                : invoice.paymentStatus === 'Partially'
                                ? 'text-[#2563eb]'
                                : invoice.paymentStatus === 'Unpaid'
                                ? 'text-[#ea580c]'
                                : 'text-[#dc2626]'
                            }`}
                          >
                            {invoice.paymentStatus}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.withoutVAT}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#e5e5e5]">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] h-[56px] size-full">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] shrink-0 text-[#171717] text-[14px]">
                            {invoice.vat}
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
          <div className="lg:hidden px-4 md:px-6 pb-4">
            <div className="space-y-3">
              {invoicesData.map((invoice) => (
                <div key={invoice.id} className="border-b border-[#e5e5e5] pb-3 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="bg-white rounded-[4px] size-[16px] border border-[#d4d4d4] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 mt-1" />
                    <div className="flex-1 space-y-2">
                      {/* Invoice Number */}
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                          Invoice number
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                          {invoice.invoiceNumber}
                        </p>
                      </div>

                      {/* Order Number & Type */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Order number
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {invoice.orderNumber}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Type
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {invoice.type}
                          </p>
                        </div>
                      </div>

                      {/* Provider & Client */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Provider
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {invoice.provider}
                          </p>
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Client
                          </p>
                          <div className="flex items-center gap-[6px]">
                            {invoice.client.type === 'person' ? (
                              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path d={svgPaths.p45fa600} stroke="#171717" strokeWidth="1.25" fill="none" strokeLinecap="round" />
                              </svg>
                            ) : (
                              <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                                <path d={svgPaths.p32f0f880} stroke="#171717" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                              {invoice.client.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Group ID and Created */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          {invoice.groupId ? (
                            <>
                              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                                Group ID
                              </p>
                              <div className="flex items-center gap-[6px]">
                                <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px]">
                                  {invoice.groupId.id}
                                </span>
                                <div className="bg-[#e5e5e5] rounded-[4px] px-[6px] py-[2px]">
                                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[#525252] text-[12px]">
                                    {invoice.groupId.count}
                                  </span>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#737373] mb-0.5">
                            Created
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {invoice.created}
                          </p>
                        </div>
                      </div>

                      {/* Payment Status and Amounts */}
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span
                            className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] ${
                              invoice.paymentStatus === 'Paid'
                                ? 'text-[#16a34a]'
                                : invoice.paymentStatus === 'Partially'
                                ? 'text-[#2563eb]'
                                : invoice.paymentStatus === 'Unpaid'
                                ? 'text-[#ea580c]'
                                : 'text-[#dc2626]'
                            }`}
                          >
                            {invoice.paymentStatus}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#171717]">
                            {invoice.withoutVAT}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#737373]">
                            VAT: {invoice.vat}
                          </p>
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
                <select className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[38px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none">
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
