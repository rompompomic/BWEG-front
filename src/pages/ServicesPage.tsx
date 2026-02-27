import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
p1f129a80: "M1.8 2.8C1.64087 2.8 1.48826 2.86321 1.37574 2.97574C1.26321 3.08826 1.2 3.24087 1.2 3.4V10.2C1.2 10.5312 1.4688 10.8 1.8 10.8H8.6C8.75913 10.8 8.91174 10.7368 9.02426 10.6243C9.13679 10.5117 9.2 10.3591 9.2 10.2V7C9.2 6.84087 9.26321 6.68826 9.37574 6.57574C9.48826 6.46321 9.64087 6.4 9.8 6.4C9.95913 6.4 10.1117 6.46321 10.2243 6.57574C10.3368 6.68826 10.4 6.84087 10.4 7V10.2C10.4 10.6774 10.2104 11.1352 9.87279 11.4728C9.53523 11.8104 9.07739 12 8.6 12H1.8C1.32261 12 0.864773 11.8104 0.527208 11.4728C0.189642 11.1352 0 10.6774 0 10.2V3.4C0 2.92261 0.189642 2.46477 0.527208 2.12721C0.864773 1.78964 1.32261 1.6 1.8 1.6H5.8C5.95913 1.6 6.11174 1.66321 6.22426 1.77574C6.33679 1.88826 6.4 2.04087 6.4 2.2C6.4 2.35913 6.33679 2.51174 6.22426 2.62426C6.11174 2.73679 5.95913 2.8 5.8 2.8H1.8Z",
p20715940: "M3.3552 8.6024C3.40807 8.66091 3.47195 8.70842 3.5432 8.74222C3.61444 8.77602 3.69165 8.79544 3.77041 8.79938C3.84917 8.80332 3.92793 8.79169 4.00219 8.76517C4.07645 8.73865 4.14476 8.69774 4.2032 8.6448L11.6 1.952V4.2C11.6 4.35913 11.6632 4.51174 11.7757 4.62426C11.8883 4.73679 12.0409 4.8 12.2 4.8C12.3591 4.8 12.5117 4.73679 12.6243 4.62426C12.7368 4.51174 12.8 4.35913 12.8 4.2V0.6C12.8 0.44087 12.7368 0.288258 12.6243 0.175736C12.5117 0.063214 12.3591 0 12.2 0H8.6C8.44087 3.35341e-09 8.28826 0.063214 8.17574 0.175736C8.06321 0.288258 8 0.44087 8 0.6C8 0.75913 8.06321 0.911742 8.17574 1.02426C8.28826 1.13679 8.44087 1.2 8.6 1.2H10.6424L3.3976 7.7552C3.33909 7.80807 3.29158 7.87195 3.25778 7.9432C3.22398 8.01444 3.20456 8.09165 3.20062 8.17041C3.19668 8.24917 3.20831 8.32793 3.23483 8.40219C3.26136 8.47645 3.30226 8.54396 3.3552 8.6024Z",
p348ae170: "M1.2 3.09546C1.2 2.54346 1.648 2.09546 2.2 2.09546H6.4C6.55913 2.09546 6.71174 2.03224 6.82426 1.91972C6.93679 1.8072 7 1.65459 7 1.49546C7 1.33633 6.93679 1.18371 6.82426 1.07119C6.71174 0.95867 6.55913 0.895456 6.4 0.895456H2.2C1.61652 0.895456 1.05695 1.12724 0.644365 1.53982C0.231785 1.9524 0 2.51198 0 3.09546V10.6955C0 11.2789 0.231785 11.8385 0.644365 12.2511C1.05695 12.6637 1.61652 12.8955 2.2 12.8955H9.8C10.3835 12.8955 10.9431 12.6637 11.3556 12.2511C11.7682 11.8385 12 11.2789 12 10.6955V6.49546C12 6.33633 11.9368 6.18371 11.8243 6.07119C11.7117 5.95867 11.5591 5.89546 11.4 5.89546C11.2409 5.89546 11.0883 5.95867 10.9757 6.07119C10.8632 6.18371 10.8 6.33633 10.8 6.49546V10.6955C10.8 11.2475 10.352 11.6955 9.8 11.6955H2.2C1.648 11.6955 1.2 11.2475 1.2 10.6955V3.09546Z",
p366b0dc0: "M2.7464 9.62906L3.756 7.10506C3.91692 6.70297 4.15778 6.33772 4.464 6.03146L10 0.497056C10.3183 0.178797 10.7499 0 11.2 0C11.6501 0 12.0817 0.178797 12.4 0.497056C12.7183 0.815316 12.8971 1.24697 12.8971 1.69706C12.8971 2.14714 12.7183 2.5788 12.4 2.89706L6.864 8.43146C6.5576 8.73786 6.192 8.97946 5.7896 9.14026L3.2664 10.1499C3.19371 10.179 3.11408 10.1861 3.03738 10.1703C2.96067 10.1546 2.89028 10.1167 2.83491 10.0613C2.77955 10.006 2.74165 9.93558 2.72591 9.85888C2.71018 9.78218 2.7173 9.70255 2.7464 9.62986V9.62906Z",
p37073b80: "M6.1875 0C6.49816 0 6.75 0.25184 6.75 0.5625V5.625H11.8125C12.1232 5.625 12.375 5.87684 12.375 6.1875C12.375 6.49816 12.1232 6.75 11.8125 6.75H6.75V11.8125C6.75 12.1232 6.49816 12.375 6.1875 12.375C5.87684 12.375 5.625 12.1232 5.625 11.8125V6.75H0.5625C0.25184 6.75 0 6.49816 0 6.1875C0 5.87684 0.25184 5.625 0.5625 5.625H5.625V0.5625C5.625 0.25184 5.87684 0 6.1875 0Z",
p3ff29e00: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
p74be300: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM13.1859 6.8897C13.523 7.13046 13.6011 7.59887 13.3603 7.93593L9.6103 13.1859C9.48216 13.3653 9.28157 13.4793 9.06186 13.4974C8.84215 13.5156 8.62556 13.4362 8.46967 13.2803L6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967C6.51256 9.67678 6.98744 9.67678 7.28033 9.96967L8.9043 11.5936L12.1397 7.06407C12.3805 6.72701 12.8489 6.64894 13.1859 6.8897Z",
} as const;

// Mock data for services
const servicesData = [
  { id: 1, code: '19', name: 'Scrap Metal', visible: true },
  { id: 2, code: '19', name: 'Wood Waste', visible: true },
  { id: 3, code: '19', name: 'Electrical Goods Disposal', visible: true },
  { id: 4, code: '19', name: 'Hazardous waste', visible: true },
  { id: 5, code: '19', name: 'Container Rental for Construction...', visible: true },
  { id: 6, code: '19', name: 'Waste Processing', visible: true },
  { id: 7, code: '19', name: 'Asbestos Waste', visible: true },
  { id: 8, code: '19', name: 'Bio Toilets', visible: true },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [visibilityFilter, setVisibilityFilter] = useState('Visible');

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-center pb-[48px] px-[32px] relative w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1220px] relative shrink-0 w-full">
          {/* Page Header */}
          <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
                <p className="leading-[32px]">Services</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <button
                  onClick={() => navigate('/services/new')}
                  className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 hover:bg-[#043159] transition-colors"
                >
                  <div className="overflow-clip relative shrink-0 size-[18px]">
                    <div className="absolute inset-[15.63%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.375 12.375">
                        <path clipRule="evenodd" d={svgPaths.p37073b80} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">
                    New service
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full">
            {/* Filters Section */}
            <div className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[11px] pt-[10px] px-[24px] relative w-full">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start relative w-full">
                      <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[120px]">
                          <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                                <select
                                  value={visibilityFilter}
                                  onChange={(e) => setVisibilityFilter(e.target.value)}
                                  className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#171717] text-[14px] text-ellipsis whitespace-nowrap bg-transparent border-none outline-none appearance-none w-full cursor-pointer"
                                >
                                  <option>Visible</option>
                                  <option>Hidden</option>
                                  <option>All</option>
                                </select>
                                <div className="overflow-clip relative shrink-0 size-[20px] pointer-events-none">
                                  <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                                      <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[16px] items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white min-w-[272px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[281px]"
                  >
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center min-w-[inherit] overflow-clip p-[14px] relative rounded-[inherit] w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full">
                          {/* Service Info */}
                          <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#171717] text-ellipsis w-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[12px]">
                              Code {service.code}
                            </p>
                            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[14px] w-[min-content] whitespace-nowrap">
                              {service.name}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[16px] items-center pl-[6px] relative w-full">
                                {/* View Button */}
                                <button
                                  onClick={() => navigate(`/services/${service.id}`)}
                                  className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-70 transition-opacity"
                                >
                                  <div className="relative shrink-0 size-[16px]">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                                      <div className="absolute inset-[10%_10%_15%_10%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12">
                                          <g>
                                            <path clipRule="evenodd" d={svgPaths.p1f129a80} fill="#A3A3A3" fillRule="evenodd" />
                                            <path clipRule="evenodd" d={svgPaths.p20715940} fill="#A3A3A3" fillRule="evenodd" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px]">
                                    View
                                  </p>
                                </button>

                                {/* Edit Button */}
                                <button
                                  onClick={() => navigate(`/services/${service.id}/edit`)}
                                  className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-70 transition-opacity"
                                >
                                  <div className="relative shrink-0 size-[16px]">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                                      <div className="absolute inset-[9.4%_9.39%_10%_10%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8971 12.8955">
                                          <g>
                                            <path d={svgPaths.p366b0dc0} fill="#05376D" />
                                            <path d={svgPaths.p348ae170} fill="#05376D" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#05376d] text-[14px]">
                                    Edit
                                  </p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Status Icon */}
                      {service.visible && (
                        <div className="absolute left-[245px] size-[24px] top-[12px]">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute inset-[9.38%_9.38%_9.37%_9.38%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                                <path clipRule="evenodd" d={svgPaths.p74be300} fill="#A3A3A3" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white h-[60px] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[1090px] not-italic right-[34px] text-[#262626] text-[14px] text-center top-[calc(50%-10px)]">
                  Total {servicesData.length} results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
