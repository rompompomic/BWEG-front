import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
pa4516c0: "M9.675 4.275C9.675 4.09598 9.60388 3.92429 9.4773 3.7977C9.35071 3.67112 9.17902 3.6 9 3.6C8.82098 3.6 8.64929 3.67112 8.5227 3.7977C8.39612 3.92429 8.325 4.09598 8.325 4.275V8.325H4.275C4.09598 8.325 3.92429 8.39612 3.7977 8.5227C3.67112 8.64929 3.6 8.82098 3.6 9C3.6 9.17902 3.67112 9.35071 3.7977 9.4773C3.92429 9.60388 4.09598 9.675 4.275 9.675H8.325V13.725C8.325 13.904 8.39612 14.0757 8.5227 14.2023C8.64929 14.3289 8.82098 14.4 9 14.4C9.17902 14.4 9.35071 14.3289 9.4773 14.2023C9.60388 14.0757 9.675 13.904 9.675 13.725V9.675H13.725C13.904 9.675 14.0757 9.60388 14.2023 9.4773C14.3289 9.35071 14.4 9.17902 14.4 9C14.4 8.82098 14.3289 8.64929 14.2023 8.5227C14.0757 8.39612 13.904 8.325 13.725 8.325H9.675V4.275Z",
} as const;

export default function CapacityAddPage() {
  const params = useParams();
  const providerId = params.providerId;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: '',
    timeFrom: '',
    timeUntil: '',
    maxOrdersCount: '',
    inventoryCategories: ''
  });

  const [templates, setTemplates] = useState<Array<{
    id: string;
    day: string;
    timeFrom: string;
    timeUntil: string;
    maxOrdersCount: string;
    inventoryCategories: string;
  }>>([]);

  const handleAddTemplate = () => {
    if (formData.day && formData.timeFrom && formData.timeUntil && formData.maxOrdersCount) {
      setTemplates([...templates, { ...formData, id: Date.now().toString() }]);
      // Reset form
      setFormData({
        day: '',
        timeFrom: '',
        timeUntil: '',
        maxOrdersCount: '',
        inventoryCategories: ''
      });
    }
  };

  const handleRemoveTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  const handleSave = () => {
    // Save logic would go here
    navigate(`/companies/${providerId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}`);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      <div className="content-stretch flex flex-col items-center pb-12 px-4 sm:px-6 md:px-8 w-full">
        <div className="content-stretch flex flex-col gap-8 items-start max-w-[1220px] w-full">
          {/* Breadcrumbs and Header */}
          <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-8 w-full">
            {/* Breadcrumbs */}
            <div className="content-stretch flex items-start w-full overflow-x-auto">
              <button
                onClick={() => navigate('/companies')}
                className="flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717] whitespace-nowrap">
                  Companies
                </p>
              </button>
              <div className="flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  SIA "NIKA MI"
                </button>
              </div>
              <div className="flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] whitespace-nowrap">
                  Capacity templates
                </p>
              </div>
              <div className="flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] whitespace-nowrap">
                  Add
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="content-stretch flex items-center justify-between w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[24px] md:text-[30px]">
                <p className="leading-[28px] md:leading-[32px]">Capacity template</p>
              </div>
            </div>
          </div>

          {/* Form Cards */}
          <div className="content-stretch flex flex-col gap-8 items-start w-full">
            {/* Template Form Card */}
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden"
              >
                <div className="p-4 md:p-6">
                  <div className="flex flex-col gap-[14px]">
                    {/* Day Field */}
                    <div className="w-full md:w-[424px]">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Day
                        </label>
                        <div className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] py-[7px]">
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                            {template.day}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Row Fields */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                      {/* Time From */}
                      <div className="flex-1 max-w-full lg:max-w-[200px]">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                            Time From
                          </label>
                          <div className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] py-[7px]">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                              {template.timeFrom}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Time Until */}
                      <div className="flex-1 max-w-full lg:max-w-[200px]">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                            Time until
                          </label>
                          <div className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] py-[7px]">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                              {template.timeUntil}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Max Orders Count */}
                      <div className="flex-1 max-w-full lg:max-w-[200px]">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                            Max orders count
                          </label>
                          <div className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] py-[7px]">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                              {template.maxOrdersCount}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Inventory Categories */}
                      <div className="flex-1">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                            Inventory categories
                          </label>
                          <div className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] flex items-center px-[14px] py-[7px]">
                            <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                              {template.inventoryCategories || '-'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="flex items-end">
                        <button
                          onClick={() => handleRemoveTemplate(template.id)}
                          className="h-[38px] px-4 bg-[#fee2e2] hover:bg-[#fecaca] rounded-[8px] transition-colors"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.334 1.334 0 0 1-1.334 1.334H4.667a1.334 1.334 0 0 1-1.334-1.334V4h9.334Z" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* New Template Input Card */}
            <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="flex flex-col gap-[14px]">
                  {/* Day Field */}
                  <div className="w-full md:w-[424px]">
                    <div className="flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                        Day
                      </label>
                      <div className="relative">
                        <select
                          value={formData.day}
                          onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                          className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none cursor-pointer"
                        >
                          <option value="">Select day</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                        <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row Fields */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Time From */}
                    <div className="flex-1 max-w-full lg:max-w-[200px]">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Time From
                        </label>
                        <input
                          type="time"
                          value={formData.timeFrom}
                          onChange={(e) => setFormData({ ...formData, timeFrom: e.target.value })}
                          className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]"
                        />
                      </div>
                    </div>

                    {/* Time Until */}
                    <div className="flex-1 max-w-full lg:max-w-[200px]">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Time until
                        </label>
                        <input
                          type="time"
                          value={formData.timeUntil}
                          onChange={(e) => setFormData({ ...formData, timeUntil: e.target.value })}
                          className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]"
                        />
                      </div>
                    </div>

                    {/* Max Orders Count */}
                    <div className="flex-1 max-w-full lg:max-w-[200px]">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Max orders count
                        </label>
                        <input
                          type="number"
                          value={formData.maxOrdersCount}
                          onChange={(e) => setFormData({ ...formData, maxOrdersCount: e.target.value })}
                          className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]"
                          placeholder="Enter number"
                        />
                      </div>
                    </div>

                    {/* Inventory Categories */}
                    <div className="flex-1">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Inventory categories
                        </label>
                        <div className="relative">
                          <select
                            value={formData.inventoryCategories}
                            onChange={(e) => setFormData({ ...formData, inventoryCategories: e.target.value })}
                            className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] appearance-none cursor-pointer"
                          >
                            <option value="">Select categories</option>
                            <option value="6 m³, 8 m³">6 m³, 8 m³</option>
                            <option value="10 m³">10 m³</option>
                            <option value="6 m³">6 m³</option>
                          </select>
                          <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Template Button */}
            <button
              onClick={handleAddTemplate}
              className="bg-[#dbeafe] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#bfdbfe] transition-colors"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.pa4516c0} fill="#1E3A8A" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#1e3a8a]">
                Add template
              </span>
            </button>

            {/* Action Buttons */}
            <div className="bg-[#fafafa] w-full">
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors"
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                    Save changes
                  </span>
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-white border border-[#e5e5e5] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-colors"
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                    Cancel
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
