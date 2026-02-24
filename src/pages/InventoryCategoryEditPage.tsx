import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function InventoryCategoryEditPage() {
  const params = useParams();
  const navigate = useNavigate();
  const companyId = params.companyId;
  const categoryId = params.categoryId;

  // Mock data - in real app would fetch from API
  const [formData, setFormData] = useState({
    category: 'SIA "NIKA MI"',
    maxAmount: '1',
    minRentDays: '1'
  });

  const handleSave = () => {
    // Save logic here
    navigate(`/companies/${companyId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${companyId}`);
  };

  // Mock category name based on ID
  const getCategoryName = () => {
    if (categoryId === '6m3') return '6 m³';
    if (categoryId === '9m3') return '9 m³';
    return categoryId;
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="flex flex-col items-center px-4 sm:px-8 pb-12 pt-8 sm:pt-12">
        <div className="w-full max-w-[1220px] flex flex-col gap-6 sm:gap-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-[14px] pt-4 sm:pt-8">
            <button
              onClick={() => navigate('/companies')}
              className="flex gap-[14px] items-center rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors px-2 py-1"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                Companies
              </p>
            </button>
            
            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
            </svg>
            
            <button
              onClick={() => navigate(`/companies/${companyId}`)}
              className="flex gap-[14px] items-center rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors px-2 py-1"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                {`SIA "NIKA MI"`}
              </p>
            </button>

            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
            </svg>

            <button
              onClick={() => navigate(`/companies/${companyId}?tab=inventory-categories`)}
              className="flex gap-[14px] items-center rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors px-2 py-1"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                Inventory categories
              </p>
            </button>

            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
            </svg>

            <div className="flex gap-[14px] items-center rounded-[8px] shrink-0 px-2 py-1">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                {getCategoryName()}
              </p>
            </div>
          </div>

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[24px] sm:text-[30px]">
              {getCategoryName()}
            </h1>
          </div>

          {/* Form Card */}
          <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            <div className="p-4 sm:p-6 md:p-[24px]">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] items-start">
                {/* Category Dropdown - Full width on mobile, flex-1 on larger screens */}
                <div className="flex flex-col gap-[8px] w-full lg:flex-1">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] appearance-none cursor-pointer"
                    >
                      <option value='SIA "NIKA MI"'>{`SIA "NIKA MI"`}</option>
                      <option value="Other Category">Other Category</option>
                    </select>
                    <svg 
                      className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none"
                      fill="none" 
                      viewBox="0 0 20 20"
                    >
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Max Amount Field */}
                <div className="flex flex-col gap-[8px] w-full sm:w-[200px]">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Max. amount in full cargo
                  </label>
                  <input
                    type="text"
                    value={formData.maxAmount}
                    onChange={(e) => setFormData({ ...formData, maxAmount: e.target.value })}
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#05376d]"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Min Rent Days Field */}
                <div className="flex flex-col gap-[8px] w-full sm:w-[200px]">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Min. rent days
                  </label>
                  <input
                    type="text"
                    value={formData.minRentDays}
                    onChange={(e) => setFormData({ ...formData, minRentDays: e.target.value })}
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#05376d]"
                    placeholder="Enter days"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-[12px]">
            <button
              onClick={handleSave}
              className="bg-[#05376d] px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                Save changes
              </span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border border-[#e5e5e5] px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#f5f5f5] transition-colors"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
