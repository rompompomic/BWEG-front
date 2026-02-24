import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p23a8e180: "M6.28 5.22C6.13783 5.08752 5.94978 5.0154 5.75548 5.01883C5.56118 5.02225 5.37579 5.10097 5.23838 5.23838C5.10096 5.37579 5.02225 5.56118 5.01882 5.75548C5.0154 5.94978 5.08752 6.13783 5.22 6.28L8.94 10L5.22 13.72C5.14631 13.7887 5.08721 13.8715 5.04622 13.9635C5.00523 14.0555 4.98319 14.1548 4.98141 14.2555C4.97963 14.3562 4.99816 14.4562 5.03588 14.5496C5.0736 14.643 5.12974 14.7278 5.20096 14.799C5.27218 14.8703 5.35701 14.9264 5.4504 14.9641C5.54379 15.0018 5.64382 15.0204 5.74452 15.0186C5.84523 15.0168 5.94454 14.9948 6.03654 14.9538C6.12854 14.9128 6.21134 14.8537 6.28 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13783 14.9846 5.94978 14.9812 5.75548C14.9777 5.56118 14.899 5.37579 14.7616 5.23838C14.6242 5.10097 14.4388 5.02225 14.2445 5.01883C14.0502 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28 5.22Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p2da5df80: "M2.96274 2.96274C3.12139 2.80409 3.37861 2.80409 3.53726 2.96274L6.5 5.92548L9.46274 2.96274C9.62139 2.80409 9.87861 2.80409 10.0373 2.96274C10.1959 3.12139 10.1959 3.37861 10.0373 3.53726L7.07452 6.5L10.0373 9.46274C10.1959 9.62139 10.1959 9.87861 10.0373 10.0373C9.87861 10.1959 9.62139 10.1959 9.46274 10.0373L6.5 7.07452L3.53726 10.0373C3.37861 10.1959 3.12139 10.1959 2.96274 10.0373C2.80409 9.87861 2.80409 9.62139 2.96274 9.46274L5.92548 6.5L2.96274 3.53726C2.80409 3.37861 2.80409 3.12139 2.96274 2.96274Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function ServiceAreaEditPage() {
  const { providerId, areaId } = useParams();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: 'Carnikava',
    priority: '2',
    platform: 'ZOLT',
    geoJSON: '',
    services: ['Skip hire', 'Containers for wood waste'],
    skipHireCategories: ['6 m³', '9 m³'],
    containersCategories: [] as string[],
    isActive: true,
    
    // Skip hire 6m³ prices
    skipHire6m3: {
      basePrice: '',
      fixDeliveryPrice: '',
      pricePerKm: '',
      minimalOrderPrice: '',
      priceCoefficient: '',
      fixDeliveryPriceToggle: false,
      freeOfCharge: false
    },
    
    // Skip hire 9m³ prices
    skipHire9m3: {
      basePrice: '',
      fixDeliveryPrice: '',
      pricePerKm: '',
      minimalOrderPrice: '',
      priceCoefficient: '',
      fixDeliveryPriceToggle: false,
      freeOfCharge: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving service area data:', formData);
    navigate(`/companies/${providerId}/service-area/${areaId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}/service-area/${areaId}`);
  };

  const removeService = (index: number) => {
    setFormData({
      ...formData,
      services: formData.services.filter((_, i) => i !== index)
    });
  };

  const removeCategory = (type: 'skip' | 'containers', index: number) => {
    if (type === 'skip') {
      setFormData({
        ...formData,
        skipHireCategories: formData.skipHireCategories.filter((_, i) => i !== index)
      });
    } else {
      setFormData({
        ...formData,
        containersCategories: formData.containersCategories.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
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
                    // TODO: set active tab to 'service-area'
                  }}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  Service area
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] whitespace-nowrap">
                  Carnikava
                </p>
              </div>
            </div>

            {/* Title and Toggle */}
            <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[20px] sm:text-[24px] md:text-[30px]">
                <p className="leading-[24px] sm:leading-[28px] md:leading-[32px]">Carnikava</p>
              </div>
              
              {/* Active Toggle */}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                className="flex gap-[12px] items-center"
              >
                <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${formData.isActive ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                  <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${formData.isActive ? 'left-[23px]' : 'left-[2px]'}`} />
                </div>
                <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                  Active
                </span>
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start p-4 sm:p-5 md:p-[24px] w-full">
              {/* Row 1: Name, Priority, Platform */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Name */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>

                {/* Priority */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Priority
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] pl-[14px] pr-[38px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                    {formData.priority && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, priority: '' })}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[13px]"
                      >
                        <svg className="size-full" fill="none" viewBox="0 0 13 13">
                          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Platform */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Platform
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] pl-[14px] pr-[38px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                    {formData.platform && (
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, platform: '' })}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[13px]"
                      >
                        <svg className="size-full" fill="none" viewBox="0 0 13 13">
                          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 2: GeoJSON */}
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                  GeoJSON
                </label>
                <textarea
                  value={formData.geoJSON}
                  onChange={(e) => setFormData({ ...formData, geoJSON: e.target.value })}
                  rows={4}
                  className="bg-white w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] resize-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                />
              </div>

              {/* Row 3: Services, Categories */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Services */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Services
                  </label>
                  <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full min-h-[38px]">
                        <div className="content-stretch flex flex-1 flex-col gap-[10px] items-start min-w-0 pt-[6px]">
                          {formData.services.length > 0 && (
                            <div className="content-start flex flex-wrap gap-[6px_8px] items-start w-full">
                              {formData.services.map((service, index) => (
                                <div key={index} className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#fdecce]">
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d97706] text-[14px] text-center">
                                    {service}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => removeService(index)}
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
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px] w-full">
                            Select option
                          </p>
                        </div>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skip hire categories */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Skip hire categories
                  </label>
                  <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full min-h-[38px]">
                        <div className="content-stretch flex flex-1 flex-col gap-[10px] items-start min-w-0 pt-[6px]">
                          {formData.skipHireCategories.length > 0 && (
                            <div className="content-start flex flex-wrap gap-[6px_8px] items-start w-full">
                              {formData.skipHireCategories.map((category, index) => (
                                <div key={index} className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#fdecce]">
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#d97706] text-[14px] text-center">
                                    {category}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => removeCategory('skip', index)}
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
                          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px] w-full">
                            Select option
                          </p>
                        </div>
                        <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Containers for wood waste categories */}
              <div className="content-stretch flex items-end w-full lg:w-1/2">
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Containers for wood waste categories
                  </label>
                  <div className="relative w-full">
                    <select
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    >
                      <option value=""></option>
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                    <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Category Prices Section */}
          <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-4 sm:p-5 md:p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
              Category prices
            </p>

            {/* Skip hire */}
            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                Skip hire
              </p>

              {/* 6 m³ */}
              <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start p-4 sm:p-5 md:p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_0px_#ececee] w-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                  6 m³
                </p>
                <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-[24px] items-start w-full">
                  {/* Base price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Base price
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire6m3.basePrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, basePrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Fix delivery price in cents */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Fix delivery price in cents
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire6m3.fixDeliveryPrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, fixDeliveryPrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Price per km */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Price per km
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire6m3.pricePerKm}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, pricePerKm: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Minimal order price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Minimal order price
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire6m3.minimalOrderPrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, minimalOrderPrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Price coefficient */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Price coefficient
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire6m3.priceCoefficient}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, priceCoefficient: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-start w-full">
                  <label className="flex gap-[8px] items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.skipHire6m3.fixDeliveryPriceToggle}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, fixDeliveryPriceToggle: e.target.checked }
                      })}
                      className="size-[16px]"
                    />
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Fix delivery price
                    </span>
                  </label>
                  <label className="flex gap-[8px] items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.skipHire6m3.freeOfCharge}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire6m3: { ...formData.skipHire6m3, freeOfCharge: e.target.checked }
                      })}
                      className="size-[16px]"
                    />
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Free of charge
                    </span>
                  </label>
                </div>
              </div>

              {/* 9 m³ */}
              <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start p-4 sm:p-5 md:p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_0px_#ececee] w-full">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                  9 m³
                </p>
                <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-[24px] items-start w-full">
                  {/* Base price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Base price
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire9m3.basePrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, basePrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Fix delivery price in cents */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Fix delivery price in cents
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire9m3.fixDeliveryPrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, fixDeliveryPrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Price per km */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Price per km
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire9m3.pricePerKm}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, pricePerKm: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Minimal order price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Minimal order price
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire9m3.minimalOrderPrice}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, minimalOrderPrice: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Price coefficient */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Price coefficient
                    </label>
                    <input
                      type="text"
                      value={formData.skipHire9m3.priceCoefficient}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, priceCoefficient: e.target.value }
                      })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-start w-full">
                  <label className="flex gap-[8px] items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.skipHire9m3.fixDeliveryPriceToggle}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, fixDeliveryPriceToggle: e.target.checked }
                      })}
                      className="size-[16px]"
                    />
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Fix delivery price
                    </span>
                  </label>
                  <label className="flex gap-[8px] items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.skipHire9m3.freeOfCharge}
                      onChange={(e) => setFormData({
                        ...formData,
                        skipHire9m3: { ...formData.skipHire9m3, freeOfCharge: e.target.checked }
                      })}
                      className="size-[16px]"
                    />
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Free of charge
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Containers for wood waste categories */}
            <div className="content-stretch flex flex-col gap-[14px] items-start w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[16px] sm:text-[18px] w-full">
                Containers for wood waste categories
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex items-start w-full">
            <div className="content-stretch flex flex-col xs:flex-row gap-[12px] items-center w-full xs:w-auto">
              <button
                onClick={handleSubmit}
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
        </div>
      </div>
    </div>
  );
}
