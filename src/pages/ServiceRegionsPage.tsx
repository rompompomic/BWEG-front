import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG Icons
const icons = {
  chevronRight: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
  plus: "M6.1875 0C6.49816 0 6.75 0.25184 6.75 0.5625V5.625H11.8125C12.1232 5.625 12.375 5.87684 12.375 6.1875C12.375 6.49816 12.1232 6.75 11.8125 6.75H6.75V11.8125C6.75 12.1232 6.49816 12.375 6.1875 12.375C5.87684 12.375 5.625 12.1232 5.625 11.8125V6.75H0.5625C0.25184 6.75 0 6.49816 0 6.1875C0 5.87684 0.25184 5.625 0.5625 5.625H5.625V0.5625C5.625 0.25184 5.87684 0 6.1875 0Z",
  viewColumns: "M10.625 0H5.625V13.75H10.625V0ZM11.875 13.75H14.6875C15.55 13.75 16.25 13.05 16.25 12.1875V1.5625C16.25 0.699167 15.55 0 14.6875 0H11.875V13.75ZM1.5625 0H4.375V13.75H1.5625C1.1481 13.75 0.750671 13.5854 0.457646 13.2924C0.16462 12.9993 0 12.6019 0 12.1875V1.5625C0 0.699167 0.7 0 1.5625 0Z",
  chevronDown: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
  checkCircle: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L9.75 8.68934L11.4697 6.96967C11.7626 6.67678 12.2374 6.67678 12.5303 6.96967C12.8232 7.26256 12.8232 7.73744 12.5303 8.03033L10.8107 9.75L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9.75 10.8107L8.03033 12.5303C7.73744 12.8232 7.26256 12.8232 6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L8.68934 9.75L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z",
  duplicate: "M8.75 10.75V13C8.75 13.4142 8.41421 13.75 8 13.75H1.5C1.08579 13.75 0.75 13.4142 0.75 13V4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H2.75C3.09071 3.75 3.42479 3.7784 3.75 3.83296M8.75 10.75H11C11.4142 10.75 11.75 10.4142 11.75 10V6.75C11.75 3.777 9.58771 1.30904 6.75 0.832958C6.42479 0.778399 6.09071 0.75 5.75 0.75H4.5C4.08579 0.75 3.75 1.08579 3.75 1.5V3.83296M8.75 10.75H4.5C4.08579 10.75 3.75 10.4142 3.75 10V3.83296M11.75 8.25V7C11.75 5.75736 10.7426 4.75 9.5 4.75H8.5C8.08579 4.75 7.75 4.41421 7.75 4V3C7.75 1.75736 6.74264 0.75 5.5 0.75H4.75",
  edit: "M13.2188 1.125C12.9949 1.125 12.7803 1.21391 12.622 1.37218L11.7544 2.24032L12.9476 3.43357L13.8155 2.56569C13.9738 2.40742 14.0627 2.19276 14.0627 1.96894C14.0627 1.74511 13.9738 1.53045 13.8155 1.37218C13.6572 1.21391 13.4426 1.125 13.2188 1.125ZM12.1521 4.22906L10.959 3.03591L4.65786 9.33632C4.65782 9.33636 4.65791 9.33627 4.65786 9.33632C4.32771 9.66671 4.08489 10.0743 3.95161 10.5219L3.64854 11.5391L4.66563 11.2361C5.11331 11.1028 5.52085 10.8601 5.85125 10.5299C5.85129 10.5299 5.85121 10.53 5.85125 10.5299L12.1521 4.22906ZM11.8264 0.576806C12.1956 0.207559 12.6966 0 13.2188 0C13.7409 0 14.2418 0.207441 14.611 0.576688C14.9802 0.945935 15.1877 1.44674 15.1877 1.96894C15.1877 2.49113 14.9802 2.99194 14.611 3.36118L6.64675 11.3254C6.18418 11.7877 5.61365 12.1276 4.98687 12.3143C4.98683 12.3143 4.98691 12.3143 4.98687 12.3143L2.97312 12.9143C2.77517 12.9732 2.56081 12.919 2.41475 12.7729C2.2687 12.6269 2.21444 12.4125 2.27342 12.2146L2.87339 10.2009C2.8734 10.2009 2.87337 10.201 2.87339 10.2009C3.06001 9.57415 3.39984 9.00362 3.86214 8.54105L11.8264 0.576806ZM2.25 3.93769C1.95163 3.93769 1.66548 4.05621 1.4545 4.26719C1.24353 4.47817 1.125 4.76432 1.125 5.06269V12.9377C1.125 13.2361 1.24353 13.5222 1.4545 13.7332C1.66548 13.9442 1.95163 14.0627 2.25 14.0627H10.125C10.4234 14.0627 10.7095 13.9442 10.9205 13.7332C11.1315 13.5222 11.25 13.2361 11.25 12.9377V9.37519C11.25 9.06453 11.5018 8.81269 11.8125 8.81269C12.1232 8.81269 12.375 9.06453 12.375 9.37519V12.9377C12.375 13.5344 12.1379 14.1067 11.716 14.5287C11.294 14.9506 10.7217 15.1877 10.125 15.1877H2.25C1.65326 15.1877 1.08097 14.9506 0.65901 14.5287C0.237053 14.1067 0 13.5344 0 12.9377V5.06269C0 4.46595 0.237053 3.89365 0.65901 3.4717C1.08097 3.04974 1.65326 2.81269 2.25 2.81269H5.8125C6.12316 2.81269 6.375 3.06453 6.375 3.37519C6.375 3.68585 6.12316 3.93769 5.8125 3.93769H2.25Z",
  close: "M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L6.75 5.68934L12.2197 0.21967C12.5126 -0.0732233 12.9874 -0.0732233 13.2803 0.21967C13.5732 0.512563 13.5732 0.987437 13.2803 1.28033L7.81066 6.75L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L6.75 7.81066L1.28033 13.2803C0.987437 13.5732 0.512563 13.5732 0.21967 13.2803C-0.0732233 12.9874 -0.0732233 12.5126 0.21967 12.2197L5.68934 6.75L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z",
  mapIcon: "M1065.81 22.8218L1038.51 20.0831L1027.99 23.9463L995.562 20.6926L966.809 65.3554L991.135 123.542L975.879 216.872L1005.98 243.315L1011.89 259.6L1027.15 257.852L1029.12 238.141L1050.54 224.362L1073.64 238.391L1104.94 142.455L1118.64 64.6613L1102.16 45.6756L1104.07 26.6606L1081.04 14.2783L1065.81 22.8218Z"
};

// Mock data
const regionsData = [
  { id: 1, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 2, priority: 2, name: 'Carnikava', type: 'Range', status: 'Active', platform: 'Nika MI' },
  { id: 3, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 4, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 5, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 6, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 7, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 8, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 9, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
  { id: 10, priority: 2, name: 'Carnikava', type: 'Area', status: 'Active', platform: 'ZOLT' },
];

function Breadcrumbs() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center">
      <div 
        className="flex items-center gap-[14px] pr-[14px] rounded-[8px] cursor-pointer" 
        onClick={() => navigate('/services')}
      >
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">Services</p>
      </div>
      <div className="flex items-center gap-[14px] pr-[14px] rounded-[8px]">
        <div className="size-[20px] relative -rotate-90">
           <svg className="size-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 10 6">
              <path clipRule="evenodd" d={icons.chevronRight} fill="#A3A3A3" fillRule="evenodd" />
           </svg>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">Regions</p>
      </div>
    </div>
  );
}

function PageHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
      <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#171717] text-[30px] leading-[32px]">Service regions</h1>
      <button 
        onClick={() => navigate('/services/regions/new')}
        className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#042d5a] transition-colors w-full sm:w-auto"
      >
        <div className="size-[18px] relative">
           <svg className="absolute block size-full" fill="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={icons.plus} fill="white" fillRule="evenodd" />
           </svg>
        </div>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px]">New region</span>
      </button>
    </div>
  );
}

function Filters() {
  return (
    <div className="flex flex-col gap-[24px] w-full bg-white p-[24px] border-b border-[#e5e5e5]">
      <div className="flex items-center justify-between w-full">
         <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Filters</p>
         <div className="size-[24px] rounded-full bg-white flex items-center justify-center relative cursor-pointer hover:bg-gray-50">
            <svg className="size-[16px]" fill="none" viewBox="0 0 17 14">
               <path d={icons.viewColumns} fill="#A3A3A3" />
            </svg>
         </div>
      </div>
      <div className="flex flex-wrap gap-[14px] items-center w-full">
         {/* Status Filter */}
         <div className="w-full sm:w-[200px] h-[38px] bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] relative cursor-pointer">
            <p className="text-[#a3a3a3] text-[14px] font-['Inter:Regular',sans-serif] flex-1">Status</p>
            <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
                <path clipRule="evenodd" d={icons.chevronDown} fill="#737373" fillRule="evenodd" />
            </svg>
         </div>
         {/* Platform Filter */}
         <div className="w-full sm:w-[200px] h-[38px] bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] relative cursor-pointer">
            <p className="text-[#a3a3a3] text-[14px] font-['Inter:Regular',sans-serif] flex-1">Platform</p>
             <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
                <path clipRule="evenodd" d={icons.chevronDown} fill="#737373" fillRule="evenodd" />
            </svg>
         </div>
         {/* Priority Filter */}
         <div className="w-full sm:w-[200px] h-[38px] bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] relative cursor-pointer">
            <p className="text-[#a3a3a3] text-[14px] font-['Inter:Regular',sans-serif] flex-1">Priority</p>
             <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
                <path clipRule="evenodd" d={icons.chevronDown} fill="#737373" fillRule="evenodd" />
            </svg>
         </div>
      </div>
    </div>
  );
}

function ListView({ data, onEdit }: { data: any[], onEdit: (id: number) => void }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#fafafa] border-b border-[#e5e5e5]">
             <th className="w-[60px] h-[48px] pl-[24px] pr-[16px]">
                <div className="size-[16px] bg-white border border-[#d4d4d4] rounded-[4px] shadow-sm cursor-pointer" />
             </th>
             <th className="h-[48px] px-[16px] text-left">
                <div className="flex items-center gap-[6px]">
                   <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Priority</span>
                   <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
                      <path clipRule="evenodd" d={icons.chevronDown} fill="#A3A3A3" fillRule="evenodd" />
                   </svg>
                </div>
             </th>
             <th className="h-[48px] px-[16px] text-left">
                <div className="flex items-center gap-[6px]">
                   <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Name</span>
                   <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
                      <path clipRule="evenodd" d={icons.chevronDown} fill="#A3A3A3" fillRule="evenodd" />
                   </svg>
                </div>
             </th>
             <th className="h-[48px] px-[16px] text-left">
                <div className="flex items-center gap-[6px]">
                   <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Type</span>
                </div>
             </th>
             <th className="h-[48px] px-[16px] text-left">
                <div className="flex items-center gap-[6px]">
                   <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Status</span>
                </div>
             </th>
             <th className="h-[48px] px-[16px] text-left">
                <div className="flex items-center gap-[6px]">
                   <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0a0a0a] text-[14px]">Platform</span>
                </div>
             </th>
             <th className="h-[48px] px-[16px] text-left"></th>
          </tr>
        </thead>
        <tbody>
           {data.map((item) => (
             <tr key={item.id} className="border-b border-[#e5e5e5] hover:bg-gray-50 bg-white">
                <td className="w-[60px] h-[56px] pl-[24px] pr-[16px]">
                   <div className="size-[16px] bg-white border border-[#d4d4d4] rounded-[4px] shadow-sm cursor-pointer" />
                </td>
                <td className="px-[16px] h-[56px]">
                   <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px]">{item.priority}</span>
                </td>
                <td className="px-[16px] h-[56px]">
                   <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px]">{item.name}</span>
                </td>
                <td className="px-[16px] h-[56px]">
                   <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px]">{item.type}</span>
                </td>
                <td className="px-[16px] h-[56px]">
                   <div className="size-[24px]">
                      {item.status === 'Active' && (
                         <svg className="size-full" fill="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={icons.checkCircle} fill="#22C55E" fillRule="evenodd" />
                         </svg>
                      )}
                   </div>
                </td>
                <td className="px-[16px] h-[56px]">
                   <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px]">{item.platform}</span>
                </td>
                <td className="px-[16px] h-[56px]">
                   <div className="flex items-center justify-end gap-[16px]">
                      <button className="flex items-center gap-[6px] text-[#d97706] hover:opacity-80">
                         <div className="size-[16px]">
                            <svg className="size-full" fill="none" viewBox="0 0 16 16">
                               <path d={icons.duplicate} stroke="#d97706" strokeWidth="1.5" />
                            </svg>
                         </div>
                         <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">Duplicate</span>
                      </button>
                      <button 
                         className="flex items-center gap-[6px] text-[#05376d] hover:opacity-80"
                         onClick={() => onEdit(item.id)}
                      >
                         <div className="size-[16px]">
                             <svg className="size-full" fill="none" viewBox="0 0 16 16">
                                <path clipRule="evenodd" d={icons.edit} fill="#05376d" fillRule="evenodd" />
                             </svg>
                         </div>
                         <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">Edit</span>
                      </button>
                   </div>
                </td>
             </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
}

function MapView({ data, onEdit }: { data: any[], onEdit: (id: number) => void }) {
  // A simplified Map View Mock
  const [selectedRegion, setSelectedRegion] = useState<any | null>(null);

  return (
    <div className="w-full h-[600px] bg-[#e5e5e5] relative overflow-hidden rounded-b-[12px]">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 select-none">
          Map View Placeholder
      </div>
      
      {/* Mocking some regions on the map */}
      <div className="absolute top-[20%] left-[20%] w-[150px] h-[100px] border-2 border-gray-500 bg-gray-500/20 cursor-pointer" onClick={() => setSelectedRegion(data[0])} />
      <div className="absolute top-[50%] left-[40%] w-[200px] h-[150px] border-2 border-gray-500 bg-gray-500/20 cursor-pointer" onClick={() => setSelectedRegion(data[0])} />
      <div className="absolute top-[60%] left-[10%] w-[120px] h-[100px] border-2 border-[#FF4141] bg-[#FF4141]/20 cursor-pointer" onClick={() => setSelectedRegion(data[0])} />

      {selectedRegion && (
        <div className="absolute right-[24px] top-[24px] w-[345px] bg-white rounded-[12px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.14)] overflow-hidden">
           <div className="flex items-center justify-between p-[24px] bg-white">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px]">{selectedRegion.name}</h3>
              <div className="cursor-pointer" onClick={() => setSelectedRegion(null)}>
                 <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                    <path clipRule="evenodd" d={icons.close} fill="#A3A3A3" fillRule="evenodd" />
                 </svg>
              </div>
           </div>
           
           <div className="px-[24px] pb-[24px] flex flex-col gap-[22px]">
              <div className="flex gap-[22px]">
                 <div className="flex-1 flex flex-col">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Type</span>
                    <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px] leading-[24px]">{selectedRegion.type}</span>
                 </div>
                 <div className="flex-1 flex flex-col">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Status</span>
                    <div className="size-[24px]">
                       <svg className="size-full" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={icons.checkCircle} fill="#22C55E" fillRule="evenodd" />
                       </svg>
                    </div>
                 </div>
              </div>
              <div className="flex gap-[22px]">
                 <div className="flex-1 flex flex-col">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Priority</span>
                    <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px] leading-[24px]">{selectedRegion.priority}</span>
                 </div>
                 <div className="flex-1 flex flex-col">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Platform</span>
                    <span className="font-['Inter:Regular',sans-serif] text-[#171717] text-[14px] leading-[24px]">{selectedRegion.platform}</span>
                 </div>
              </div>
           </div>
           
           <div className="p-[24px] border-t border-[#e5e5e5] flex gap-[16px]">
              <button 
                 className="flex-1 flex items-center justify-center gap-[6px] bg-[#05376d] text-white py-[8px] rounded-[8px] shadow-sm hover:bg-[#042d5a]"
                 onClick={() => onEdit(selectedRegion.id)}
              >
                  <div className="size-[16px]">
                     <svg className="size-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d={icons.edit} fill="white" fillRule="evenodd" />
                     </svg>
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">Edit</span>
              </button>
              <button className="flex-1 flex items-center justify-center bg-white border border-[#e5e5e5] text-[#262626] py-[8px] rounded-[8px] shadow-sm hover:bg-gray-50 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">
                  Duplicate
              </button>
              <button className="flex-1 flex items-center justify-center bg-white border border-[#e5e5e5] text-[#262626] py-[8px] rounded-[8px] shadow-sm hover:bg-gray-50 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]" onClick={() => setSelectedRegion(null)}>
                  Cancel
              </button>
           </div>
        </div>
      )}
    </div>
  );
}

export default function ServiceRegionsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'List' | 'Map'>('List');

  const handleEdit = (id: number) => {
    navigate(`/services/regions/${id}/edit`);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full flex flex-col items-center pb-[48px] px-4 md:px-[32px]">
      <div className="w-full max-w-[1220px] flex flex-col gap-[32px] pt-[32px]">
        {/* Header Section */}
        <div className="flex flex-col gap-[14px] w-full">
           <Breadcrumbs />
           <PageHeader />
        </div>

        {/* Content Section */}
        <div className="w-full bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] relative flex flex-col">
           {/* Tab Switcher */}
           <div className="relative mb-4 mx-auto order-first sm:mb-0 sm:mx-0 sm:absolute sm:-top-[72px] sm:left-1/2 sm:-translate-x-1/2 bg-white rounded-[12px] p-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] flex gap-[4px] z-10 w-fit">
              <div 
                 onClick={() => setActiveTab('List')}
                 className={`px-[12px] h-[36px] flex items-center justify-center rounded-[8px] cursor-pointer ${activeTab === 'List' ? 'bg-[#fafafa]' : 'bg-white hover:bg-gray-50'}`}
              >
                 <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${activeTab === 'List' ? 'text-[#d97706]' : 'text-[#737373]'}`}>List</span>
              </div>
              <div 
                 onClick={() => setActiveTab('Map')}
                 className={`px-[12px] h-[36px] flex items-center justify-center rounded-[8px] cursor-pointer ${activeTab === 'Map' ? 'bg-[#fafafa]' : 'bg-white hover:bg-gray-50'}`}
              >
                 <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${activeTab === 'Map' ? 'text-[#d97706]' : 'text-[#737373]'}`}>Map</span>
              </div>
           </div>

           {/* Filters */}
           {activeTab === 'List' && <Filters />}
           
           {/* Table or Map */}
           {activeTab === 'List' ? (
              <ListView data={regionsData} onEdit={handleEdit} />
           ) : (
              <MapView data={regionsData} onEdit={handleEdit} />
           )}

           {/* Pagination (Only for List view) */}
           {activeTab === 'List' && (
             <div className="flex items-center justify-end p-[16px] border-t border-[#e5e5e5]">
                <button className="bg-white border border-[#e5e5e5] rounded-[6px] px-[12px] py-[6px] text-[14px] text-[#171717] hover:bg-gray-50">Next</button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
