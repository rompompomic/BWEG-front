import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function DestinationEditPage() {
  const { providerId, destinationId } = useParams();
  const navigate = useNavigate();
  const [isDefault, setIsDefault] = useState(false);

  const handleSave = () => {
    // Save logic here
    navigate(`/companies/${providerId}/destinations/${destinationId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}/destinations/${destinationId}`);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        <div className="content-stretch flex flex-col gap-[14px] sm:gap-[32px] items-start pt-4 sm:pt-6 md:pt-[32px] pb-8 sm:pb-12 md:pb-[48px] w-full max-w-[1220px]">
          {/* Breadcrumbs */}
          <div className="content-stretch flex items-start w-full overflow-x-auto">
            <div className="flex gap-0 items-center shrink-0">
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <button 
                  onClick={() => navigate('/companies')}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717] transition-colors"
                >
                  Companies
                </button>
              </div>
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button 
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717] transition-colors"
                >
                  SIA "NIKA MI"
                </button>
              </div>
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button 
                  onClick={() => navigate(`/companies/${providerId}?tab=destinations`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717] transition-colors"
                >
                  Destinations
                </button>
              </div>
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                  NIKA MI Bāze
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="content-stretch flex items-start w-full">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[24px] sm:text-[30px]">
              NIKA MI Bāze
            </h1>
          </div>

          {/* Form Card */}
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-hidden rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <div className="content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start p-4 sm:p-5 md:p-[24px] w-full">
              {/* First Row */}
              <div className="content-stretch flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-[24px] items-start w-full">
                {/* Name Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full lg:max-w-[574px]">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Name
                  </label>
                  <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <input 
                      type="text"
                      placeholder="NIKA MI Bāze"
                      className="flex items-center px-[14px] py-[7px] size-full rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] outline-none"
                    />
                  </div>
                </div>

                {/* Type and Default Toggle */}
                <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-[24px] items-end flex-1 w-full lg:w-auto">
                  {/* Type Field */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start flex-1 w-full sm:w-auto">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                      Type
                    </label>
                    <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                      <div className="flex items-center justify-between px-[14px] py-[7px] size-full">
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                          Select type
                        </span>
                        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Default Toggle */}
                  <div className="content-stretch flex items-center gap-[12px] shrink-0 pb-[7px]">
                    <div 
                      onClick={() => setIsDefault(!isDefault)}
                      className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] transition-all duration-300 cursor-pointer ${isDefault ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}
                    >
                      <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all duration-300 ${isDefault ? 'left-[23px]' : 'left-[2px]'}`} />
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Default
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="content-stretch flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-[24px] items-start w-full">
                {/* Address Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start flex-1 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Address
                  </label>
                  <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex items-center justify-between px-[14px] py-[7px] size-full">
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                        Select address
                      </span>
                      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Location Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start flex-1 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Location (coordinates)
                  </label>
                  <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <input 
                      type="text"
                      placeholder="56.9496, 24.1052"
                      className="flex items-center px-[14px] py-[7px] size-full rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[12px] items-center w-full">
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
              className="bg-white flex items-center justify-center px-[16px] py-[8px] rounded-[8px] border border-[#e5e5e5] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-colors"
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
