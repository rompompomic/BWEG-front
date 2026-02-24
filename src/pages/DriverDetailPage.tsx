import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p12f2ab40: "M89.9077 93.624C83.0605 84.5873 72.212 78.75 60 78.75C47.788 78.75 36.9395 84.5873 30.0923 93.624M89.9077 93.624C99.1675 85.3817 105 73.372 105 60C105 35.1472 84.8528 15 60 15C35.1472 15 15 35.1472 15 60C15 73.372 20.8325 85.3817 30.0923 93.624M89.9077 93.624C81.9575 100.701 71.4808 105 60 105C48.5192 105 38.0425 100.701 30.0923 93.624M75 48.75C75 57.0343 68.2843 63.75 60 63.75C51.7157 63.75 45 57.0343 45 48.75C45 40.4657 51.7157 33.75 60 33.75C68.2843 33.75 75 40.4657 75 48.75Z",
p1a72f800: "M12 3.75C9.81196 3.75 7.71354 4.61919 6.16637 6.16637C4.61919 7.71354 3.75 9.81196 3.75 12C3.75 13.0834 3.96339 14.1562 4.37799 15.1571C4.79259 16.1581 5.40029 17.0675 6.16637 17.8336C6.93245 18.5997 7.84193 19.2074 8.84286 19.622C9.8438 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.1581 19.2074 17.0675 18.5997 17.8336 17.8336C18.5997 17.0675 19.2074 16.1581 19.622 15.1571C20.0366 14.1562 20.25 13.0834 20.25 12C20.25 9.81196 19.3808 7.71354 17.8336 6.16637C16.2865 4.61919 14.188 3.75 12 3.75ZM5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12C21.75 13.2804 21.4978 14.5482 21.0078 15.7312C20.5178 16.9141 19.7997 17.9889 18.8943 18.8943C17.9889 19.7997 16.9141 20.5178 15.7312 21.0078C14.5482 21.4978 13.2804 21.75 12 21.75C10.7196 21.75 9.45176 21.4978 8.26884 21.0078C7.08591 20.5178 6.01108 19.7997 5.10571 18.8943C4.20034 17.9889 3.48216 16.9141 2.99217 15.7312C2.50219 14.5482 2.25 13.2804 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571ZM15.4359 9.1397C15.773 9.38046 15.8511 9.84887 15.6103 10.1859L11.8603 15.4359C11.7322 15.6153 11.5316 15.7293 11.3119 15.7474C11.0921 15.7656 10.8756 15.6862 10.7197 15.5303L8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197C8.76256 11.9268 9.23744 11.9268 9.53033 12.2197L11.1543 13.8436L14.3897 9.31407C14.6305 8.97701 15.0989 8.89894 15.4359 9.1397Z",
p26824a80: "M14.9062 2.24981C14.6824 2.24981 14.4678 2.33873 14.3095 2.497L13.4419 3.36513L14.6351 4.55838L15.503 3.6905C15.6613 3.53223 15.7502 3.31758 15.7502 3.09375C15.7502 2.86992 15.6613 2.65527 15.503 2.497C15.3447 2.33873 15.1301 2.24981 14.9062 2.24981ZM13.8396 5.35387L12.6465 4.16072L6.34536 10.4611C6.34532 10.4612 6.34541 10.4611 6.34536 10.4611C6.01521 10.7915 5.77239 11.1991 5.63911 11.6468L5.33604 12.664L6.35313 12.3609C6.80081 12.2276 7.20835 11.9849 7.53875 11.6548C7.53879 11.6547 7.53871 11.6548 7.53875 11.6548L13.8396 5.35387ZM13.5139 1.70162C13.8831 1.33237 14.3841 1.12481 14.9062 1.12481C15.4284 1.12481 15.9293 1.33226 16.2985 1.7015C16.6677 2.07075 16.8752 2.57156 16.8752 3.09375C16.8752 3.61594 16.6677 4.11675 16.2985 4.486L8.33425 12.4502C7.87168 12.9125 7.30115 13.2525 6.67437 13.4391C6.67433 13.4391 6.67441 13.4391 6.67437 13.4391L4.66062 14.0391C4.46267 14.0981 4.24831 14.0438 4.10225 13.8977C3.9562 13.7517 3.90194 13.5373 3.96092 13.3394L4.56089 11.3257C4.5609 11.3257 4.56087 11.3258 4.56089 11.3257C4.74751 10.699 5.08734 10.1284 5.54964 9.66587L13.5139 1.70162ZM3.9375 5.0625C3.63913 5.0625 3.35298 5.18103 3.142 5.392C2.93103 5.60298 2.8125 5.88913 2.8125 6.1875V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H11.8125C12.1109 15.1875 12.397 15.069 12.608 14.858C12.819 14.647 12.9375 14.3609 12.9375 14.0625V10.5C12.9375 10.1893 13.1893 9.9375 13.5 9.9375C13.8107 9.9375 14.0625 10.1893 14.0625 10.5V14.0625C14.0625 14.6592 13.8254 15.2315 13.4035 15.6535C12.9815 16.0754 12.4092 16.3125 11.8125 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V6.1875C1.6875 5.59076 1.92455 5.01847 2.34651 4.59651C2.76847 4.17455 3.34076 3.9375 3.9375 3.9375H7.5C7.81066 3.9375 8.0625 4.18934 8.0625 4.5C8.0625 4.81066 7.81066 5.0625 7.5 5.0625H3.9375Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function DriverDetailPage() {
  const { providerId, driverId } = useParams();
  const navigate = useNavigate();

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
                    // TODO: set active tab to 'drivers'
                  }}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  Drivers
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] whitespace-nowrap">
                  Aleksandrs Medvedevs
                </p>
              </div>
            </div>

            {/* Title and Edit Button */}
            <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[20px] sm:text-[24px] md:text-[30px]">
                <p className="leading-[24px] sm:leading-[28px] md:leading-[32px]">Aleksandrs Medvedevs</p>
              </div>
              <button 
                onClick={() => navigate(`/companies/${providerId}/drivers/${driverId}/edit`)}
                className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors shrink-0"
              >
                <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                  <path clipRule="evenodd" d={svgPaths.p26824a80} fill="white" fillRule="evenodd" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  Edit
                </span>
              </button>
            </div>
          </div>

          {/* Driver Info Card */}
          <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            <div className="content-stretch flex flex-col gap-[22px] items-start p-4 sm:p-5 md:p-[24px] w-full">
              {/* Avatar */}
              <div className="bg-white relative rounded-[12px] shrink-0 size-[100px] sm:size-[120px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center">
                  <svg className="size-full" fill="none" viewBox="0 0 120 120">
                    <path d={svgPaths.p12f2ab40} stroke="#A3A3A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Info Grid */}
              <div className="content-stretch flex flex-col lg:flex-row gap-[16px] sm:gap-[22px] items-start w-full">
                {/* Left Column */}
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-0 w-full">
                  {/* Full name */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Full name
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px] w-full">
                      Aleksandrs Medvedevs
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Phone
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px] w-full">
                      +37127080202
                    </p>
                  </div>

                  {/* Status */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Status
                    </p>
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.p1a72f800} fill="#22C55E" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Right Column */}
                <div className="content-stretch flex flex-1 flex-col gap-[12px] items-start min-w-0 w-full">
                  {/* Default vehicle */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Default vehicle
                    </p>
                    <div className="bg-[#fafafa] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] shrink-0 border border-[#e5e5e5]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px] text-center">
                        NM3Y4R
                      </p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      E-mail
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px] w-full">
                      email@email.lv
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="content-stretch flex flex-col items-start w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                      Availability
                    </p>
                    <div className="bg-[#f2fdf5] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px] shrink-0 border border-[#d3f3df]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#16a34a] text-[14px] text-center">
                        On duty
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="content-stretch flex flex-col items-start w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                  Password
                </p>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px] w-full">
                  12012jij93jxjxks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
