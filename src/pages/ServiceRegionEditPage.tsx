import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller, type UseFormRegisterReturn } from 'react-hook-form';

// SVG Icons
const icons = {
  chevronRight: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
  plus: "M6.1875 0C6.49816 0 6.75 0.25184 6.75 0.5625V5.625H11.8125C12.1232 5.625 12.375 5.87684 12.375 6.1875C12.375 6.49816 12.1232 6.75 11.8125 6.75H6.75V11.8125C6.75 12.1232 6.49816 12.375 6.1875 12.375C5.87684 12.375 5.625 12.1232 5.625 11.8125V6.75H0.5625C0.25184 6.75 0 6.49816 0 6.1875C0 5.87684 0.25184 5.625 0.5625 5.625H5.625V0.5625C5.625 0.25184 5.87684 0 6.1875 0Z",
  chevronDown: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
  close: "M1.29871 0.201292C1.15653 0.0688116 0.968487 -0.00331137 0.774186 0.000116847C0.579884 0.00354506 0.394499 0.0822568 0.257086 0.21967C0.119673 0.357083 0.0409614 0.542468 0.0375332 0.736769C0.034105 0.93107 0.106228 1.11912 0.238708 1.26129L3.95871 4.98129L0.238708 8.70129C0.165021 8.76995 0.105919 8.85275 0.064927 8.94475C0.023935 9.03675 0.00189351 9.13607 0.000116722 9.23677C-0.00166006 9.33747 0.0168643 9.4375 0.0545854 9.53089C0.0923064 9.62428 0.148451 9.70911 0.21967 9.78033C0.290888 9.85155 0.375722 9.90769 0.46911 9.94541C0.562499 9.98314 0.662528 10.0017 0.763231 9.99988C0.863934 9.99811 0.963247 9.97606 1.05525 9.93507C1.14725 9.89408 1.23005 9.83498 1.29871 9.76129L5.01871 6.04129L8.73871 9.76129C8.80737 9.83498 8.89017 9.89408 8.98217 9.93507C9.07417 9.97606 9.17348 9.99811 9.27419 9.99988C9.37489 10.0017 9.47492 9.98314 9.56831 9.94541C9.66169 9.90769 9.74653 9.85155 9.81775 9.78033C9.88896 9.70911 9.94511 9.62428 9.98283 9.53089C10.0206 9.4375 10.0391 9.33747 10.0373 9.23677C10.0355 9.13607 10.0135 9.03675 9.97249 8.94475C9.9315 8.85275 9.87239 8.76995 9.79871 8.70129L6.07871 4.98129L9.79871 1.26129C9.93119 1.11912 10.0033 0.93107 9.99988 0.736769C9.99646 0.542468 9.91774 0.357083 9.78033 0.21967C9.64292 0.0822568 9.45753 0.00354506 9.26323 0.000116847C9.06893 -0.00331137 8.88088 0.0688116 8.73871 0.201292L5.01871 3.92129L1.29871 0.201292Z"
};

// Components
function Toggle({ value, onChange, label }: { value: boolean; onChange: (val: boolean) => void; label?: string }) {
  return (
    <div className="flex gap-[12px] items-center cursor-pointer" onClick={() => onChange(!value)}>
      <div className={`${value ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'} h-[24px] w-[45px] rounded-[100px] relative transition-colors`}>
        <div className={`absolute top-[2px] bg-white w-[20px] h-[20px] rounded-full shadow-sm transition-all ${value ? 'left-[23px]' : 'left-[2px]'}`} />
      </div>
      {label && <p className="text-[#0a0a0a] text-[14px] font-['Inter:Medium',sans-serif] font-medium">{label}</p>}
    </div>
  );
}

type InputFieldProps = {
  label: string;
  labelClassName?: string;
  registration?: UseFormRegisterReturn;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof UseFormRegisterReturn>;

function InputField({ label, labelClassName, registration, ...props }: InputFieldProps) {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <label className={`text-[#171717] text-[14px] font-['Inter:Medium',sans-serif] font-medium ${labelClassName || ''}`}>{label}</label>
      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] flex items-center">
        <input {...registration} {...props} className="w-full text-[#171717] text-[14px] font-['Inter:Regular',sans-serif] outline-none bg-transparent" />
      </div>
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  options: string[];
  registration?: UseFormRegisterReturn;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof UseFormRegisterReturn>;

function SelectField({ label, options, registration, ...props }: SelectFieldProps) {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <label className="text-[#171717] text-[14px] font-['Inter:Medium',sans-serif] font-medium">{label}</label>
      <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] flex items-center relative">
        <select {...registration} {...props} className="w-full h-full text-[#171717] text-[14px] font-['Inter:Regular',sans-serif] outline-none bg-transparent appearance-none z-10 cursor-pointer">
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="absolute right-[14px] pointer-events-none z-0">
           <svg className="size-[10px]" fill="none" viewBox="0 0 10 6">
              <path clipRule="evenodd" d={icons.chevronDown} fill="#737373" fillRule="evenodd" />
           </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (val: boolean) => void }) {
  return (
    <div className="flex gap-[12px] items-center cursor-pointer" onClick={() => onChange(!checked)}>
      <div className={`size-[16px] rounded-[4px] border flex items-center justify-center ${checked ? 'bg-[#05376d] border-[#05376d]' : 'bg-white border-[#d4d4d4]'}`}>
         {checked && (
            <svg className="w-[10px] h-[8px]" fill="none" viewBox="0 0 10 8">
               <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         )}
      </div>
      <span className="text-[#171717] text-[14px] font-['Inter:Medium',sans-serif] font-medium">{label}</span>
    </div>
  );
}

function CategoryPriceRow({ title, control, prefix }: { title: string; control: any; prefix: string }) {
  const labelClass = "h-[40px] flex items-end pb-[2px] leading-[1.2]"; 

  return (
    <div className="bg-white rounded-[12px] p-[24px] border border-[#f0f0f0] shadow-sm flex flex-col gap-[24px]">
      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px]">{title}</h3>
      <div className="flex gap-[24px] items-start overflow-x-auto pb-2">
         <div className="min-w-[160px] flex-1">
            <InputField label="Base price" placeholder="0.00" labelClassName={labelClass} />
         </div>
         <div className="min-w-[160px] flex-1">
            <InputField label="Fix delivery price in cents" placeholder="0" labelClassName={labelClass} />
         </div>
         <div className="min-w-[160px] flex-1">
            <InputField label="Price per km" placeholder="0.00" labelClassName={labelClass} />
         </div>
         <div className="min-w-[160px] flex-1">
            <InputField label="Minimal order price" placeholder="0.00" labelClassName={labelClass} />
         </div>
         <div className="min-w-[160px] flex-1">
            <InputField label="Price coefficient" placeholder="1.0" labelClassName={labelClass} />
         </div>
         <div className="flex flex-col gap-[8px] pt-[48px] shrink-0">
            <Checkbox label="Fix delivery price" checked={false} onChange={() => {}} />
            <Checkbox label="Free of charge" checked={false} onChange={() => {}} />
         </div>
      </div>
    </div>
  );
}

export default function ServiceRegionEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const { control, register } = useForm({
    defaultValues: {
      active: true,
      name: 'New region',
      type: '2',
      platform: 'ZOLT',
      priority: '2',
      minKm: 'ZOLT',
      relatedBase: 'ZOLT',
      geoJson: ''
    }
  });

  return (
    <div className="bg-[#fafafa] min-h-screen w-full flex flex-col items-center pb-[48px] px-4 md:px-[32px]">
      <div className="w-full max-w-[1220px] flex flex-col gap-[32px] pt-[32px]">
        {/* Breadcrumbs */}
        <div className="flex items-center">
          <div 
            className="flex items-center gap-[14px] pr-[14px] rounded-[8px] cursor-pointer" 
            onClick={() => navigate('/services')}
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">Services</p>
          </div>
          <div 
            className="flex items-center gap-[14px] pr-[14px] rounded-[8px] cursor-pointer"
            onClick={() => navigate('/services/regions')}
          >
            <div className="size-[20px] relative -rotate-90">
               <svg className="size-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={icons.chevronRight} fill="#A3A3A3" fillRule="evenodd" />
               </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">Regions</p>
          </div>
          <div className="flex items-center gap-[14px] pr-[14px] rounded-[8px]">
            <div className="size-[20px] relative -rotate-90">
               <svg className="size-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={icons.chevronRight} fill="#A3A3A3" fillRule="evenodd" />
               </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">{isEditMode ? 'Edit region' : 'New region'}</p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#171717] text-[30px] leading-[32px]">{isEditMode ? 'Edit region' : 'New region'}</h1>
          <div className="flex items-center gap-[12px]">
             <Controller
                name="active"
                control={control}
                render={({ field }) => (
                   <Toggle value={field.value} onChange={field.onChange} label="Active" />
                )}
             />
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-[12px] p-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] flex flex-col gap-[24px]">
           <div className="flex gap-[24px]">
              <InputField label="Name" registration={register('name')} />
              <SelectField label="Type" options={['Area', 'Range']} registration={register('type')} />
              <SelectField label="Platform" options={['ZOLT', 'Nika MI']} registration={register('platform')} />
           </div>
           <div className="flex gap-[24px]">
              <SelectField label="Priority" options={['1', '2', '3']} registration={register('priority')} />
              <SelectField label="Min km to client" options={['ZOLT']} registration={register('minKm')} />
              <SelectField label="Related Baze" options={['ZOLT']} registration={register('relatedBase')} />
           </div>
           <div className="w-full">
              <InputField label="GeoJSON" registration={register('geoJson')} />
           </div>
        </div>

        {/* Category Prices Section */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
           <div className="px-[24px] py-[16px] border-b border-[#e5e5e5]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px]">Category prices</h2>
           </div>
           
           <div className="p-[24px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                 <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[16px]">Skip hire</h3>
                 <div className="flex flex-col gap-[16px]">
                    <CategoryPriceRow title="6 m³" control={control} prefix="skip_6m3" />
                    <CategoryPriceRow title="9 m³" control={control} prefix="skip_9m3" />
                 </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                 <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[16px]">Containers for wood waste categories</h3>
                 <div className="flex flex-col gap-[16px]">
                    <CategoryPriceRow title="6 m³" control={control} prefix="wood_6m3" />
                    <CategoryPriceRow title="9 m³" control={control} prefix="wood_9m3" />
                 </div>
              </div>
           </div>
        </div>

        {/* Special Prices Section */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
           <div className="px-[24px] py-[16px] border-b border-[#e5e5e5] flex justify-between items-center">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px]">Special prices</h2>
              <button className="bg-[#dbeafe] text-[#1e3a8a] px-[12px] py-[6px] rounded-[6px] text-[14px] font-medium flex items-center gap-[6px]">
                 <svg className="size-[12px]" fill="none" viewBox="0 0 13 13">
                    <path clipRule="evenodd" d={icons.plus} fill="currentColor" fillRule="evenodd" />
                 </svg>
                 New price period
              </button>
           </div>
           
           <div className="p-[24px]">
              <div className="bg-[#fafafa] rounded-[12px] border border-[#e5e5e5] p-[24px] flex flex-col gap-[24px]">
                 <InputField label="Price period name" placeholder="Price period" />
                 
                 <div className="flex flex-col gap-[16px]">
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[16px]">Skip hire</h3>
                    <CategoryPriceRow title="6 m³" control={control} prefix="special_skip_6m3" />
                    <CategoryPriceRow title="9 m³" control={control} prefix="special_skip_9m3" />
                 </div>

                 <button className="w-fit bg-[#fee2e2] text-[#991b1b] px-[12px] py-[6px] rounded-[6px] text-[14px] font-medium flex items-center gap-[6px]">
                    <svg className="size-[12px]" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="2">
                       <path d="M1 3.5H13M2.5 3.5L3.5 12.5H10.5L11.5 3.5" />
                    </svg>
                    Remove
                 </button>
              </div>
           </div>
        </div>

        {/* Actions */}
        <div className="w-full flex gap-[12px] pb-[12px] sticky bottom-0 bg-[#fafafa] pt-[12px] border-t border-[#e5e5e5]">
           <button 
              className="bg-[#05376d] text-white px-[16px] py-[8px] rounded-[8px] font-semibold text-[14px] shadow-sm hover:bg-[#042d5a]"
              onClick={() => navigate('/services/regions')}
           >
              Save changes
           </button>
           <button 
              className="bg-white border border-[#e5e5e5] text-[#262626] px-[16px] py-[8px] rounded-[8px] font-semibold text-[14px] shadow-sm hover:bg-gray-50"
              onClick={() => navigate('/services/regions')}
           >
              Cancel
           </button>
        </div>
      </div>
    </div>
  );
}
