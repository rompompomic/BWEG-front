import { useParams, useNavigate } from 'react-router-dom';

import imgCard from "@/shared/assets/f2b4fd0148f6eecc53e5ba9a84c8b88aedb5e596.png";

const svgPaths = {
p26824a80: "M14.9062 2.24981C14.6824 2.24981 14.4678 2.33873 14.3095 2.497L13.4419 3.36513L14.6351 4.55838L15.503 3.6905C15.6613 3.53223 15.7502 3.31758 15.7502 3.09375C15.7502 2.86992 15.6613 2.65527 15.503 2.497C15.3447 2.33873 15.1301 2.24981 14.9062 2.24981ZM13.8396 5.35387L12.6465 4.16072L6.34536 10.4611C6.34532 10.4612 6.34541 10.4611 6.34536 10.4611C6.01521 10.7915 5.77239 11.1991 5.63911 11.6468L5.33604 12.664L6.35313 12.3609C6.80081 12.2276 7.20835 11.9849 7.53875 11.6548C7.53879 11.6547 7.53871 11.6548 7.53875 11.6548L13.8396 5.35387ZM13.5139 1.70162C13.8831 1.33237 14.3841 1.12481 14.9062 1.12481C15.4284 1.12481 15.9293 1.33226 16.2985 1.7015C16.6677 2.07075 16.8752 2.57156 16.8752 3.09375C16.8752 3.61594 16.6677 4.11675 16.2985 4.486L8.33425 12.4502C7.87168 12.9125 7.30115 13.2525 6.67437 13.4391C6.67433 13.4391 6.67441 13.4391 6.67437 13.4391L4.66062 14.0391C4.46267 14.0981 4.24831 14.0438 4.10225 13.8977C3.9562 13.7517 3.90194 13.5373 3.96092 13.3394L4.56089 11.3257C4.5609 11.3257 4.56087 11.3258 4.56089 11.3257C4.74751 10.699 5.08734 10.1284 5.54964 9.66587L13.5139 1.70162ZM3.9375 5.0625C3.63913 5.0625 3.35298 5.18103 3.142 5.392C2.93103 5.60298 2.8125 5.88913 2.8125 6.1875V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H11.8125C12.1109 15.1875 12.397 15.069 12.608 14.858C12.819 14.647 12.9375 14.3609 12.9375 14.0625V10.5C12.9375 10.1893 13.1893 9.9375 13.5 9.9375C13.8107 9.9375 14.0625 10.1893 14.0625 10.5V14.0625C14.0625 14.6592 13.8254 15.2315 13.4035 15.6535C12.9815 16.0754 12.4092 16.3125 11.8125 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V6.1875C1.6875 5.59076 1.92455 5.01847 2.34651 4.59651C2.76847 4.17455 3.34076 3.9375 3.9375 3.9375H7.5C7.81066 3.9375 8.0625 4.18934 8.0625 4.5C8.0625 4.81066 7.81066 5.0625 7.5 5.0625H3.9375Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function DestinationViewPage() {
  const { providerId, destinationId } = useParams();
  const navigate = useNavigate();

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
          <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[24px] sm:text-[30px]">
              NIKA MI Bāze
            </h1>
            <button 
              onClick={() => navigate(`/companies/${providerId}/destinations/${destinationId}/edit`)}
              className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path clipRule="evenodd" d={svgPaths.p26824a80} fill="white" fillRule="evenodd" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                Edit
              </span>
            </button>
          </div>

          {/* Card */}
          <div className="bg-white content-stretch flex flex-col gap-[18px] sm:gap-[22px] items-start overflow-hidden p-4 sm:p-5 md:p-[24px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            {/* Map */}
            <div className="h-[200px] sm:h-[280px] md:h-[348px] relative w-full rounded-[8px] overflow-hidden">
              <img 
                alt="Map location" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                src={imgCard} 
              />
            </div>

            {/* Info Section */}
            <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-[22px] items-start w-full">
              {/* Address */}
              <div className="content-stretch flex flex-col items-start flex-1 min-w-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px] mb-1">
                  Address
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#171717] text-[14px] break-words">
                  Kaudzīšu iela 76, Rumbula, Stopiņu pagasts, Ropažu novads, LV-2121
                </p>
              </div>

              {/* Type */}
              <div className="content-stretch flex flex-col items-start shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px] mb-1">
                  Type
                </p>
                <div className="bg-[#fafafa] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] border border-[#e5e5e5]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px]">
                    Default company base
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
