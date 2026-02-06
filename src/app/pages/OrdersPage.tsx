import svgPaths from "../../imports/svg-l86qjfzrj5";

export default function OrdersPage() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-full">
      <div className="content-stretch flex flex-col gap-[32px] items-center pb-[48px] px-[32px] relative shrink-0 w-[1440px]">
        {/* Page Heading */}
        <div className="content-stretch flex flex-col items-start max-w-[1220px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
                <p className="leading-[32px]">Orders</p>
              </div>
              <div className="content-stretch flex gap-[14px] items-center shrink-0" />
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                  <div className="bg-[#dbeafe] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.pdb30e00} fill="var(--fill-0, #05376D)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e3a8a] text-[14px] text-center">Excel Export</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                  <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="var(--fill-0, white)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full">
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full">
            {/* Filters Section */}
            <div className="content-stretch flex flex-col items-start pl-[24px] pr-[26px] pt-[24px] relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Filters</p>
                  <div className="bg-white relative rounded-[100px] shrink-0 size-[24px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p3d7a2b00} fill="var(--fill-0, #A3A3A3)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[14px] items-center relative w-full">
                  {/* Order number */}
                  <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                      <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Order number</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Group ID */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Group ID</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Type */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Type</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Provider */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Provider</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Inventory */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Inventory</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Adress */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[96px]">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Adress</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Price</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Promo code input */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Promo code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Promo code Toggle */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]">
                        <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />
                      </div>
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Promo code</p>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Status</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment status */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Payment status</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment method */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Payment method</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Source */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Source</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pickup at */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Pickup at</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ordered at */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Ordered at</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Deliver at */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Deliver at</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sales Manager */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Sales Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Risk */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
                    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Risk</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clear Button */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
                    <div className="bg-[#dbeafe] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e3a8a] text-[14px] text-center">Clear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto relative w-full">
              <div className="flex flex-row min-w-max relative w-full">
                {/* Checkbox Column */}
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                    {/* Header */}
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] relative size-full">
                          <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
                            <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Rows */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px pl-[24px] pr-[16px] relative size-full">
                            <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
                              <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Number Column */}
                <div className="relative shrink-0 w-[140px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Order number</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">LV25-12/12126</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ID Column */}
                <div className="relative shrink-0 w-[50px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">ID</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">ID</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Column */}
                <div className="relative shrink-0 w-[106px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Customer</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {[
                      { text: 'Name', type: 0 },
                      { text: 'Company', type: 1 },
                      { text: 'Company', type: 1 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 },
                      { text: 'Name', type: 0 }
                    ].map((item, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center pb-px px-[16px] relative size-full">
                            <div className="relative shrink-0 size-[20px]">
                              {item.type === 0 ? (
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewBox="0 0 20 20">
                                  <path d={svgPaths.p45fa600} />
                                </svg>
                              ) : (
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewBox="0 0 20 20">
                                  <path d={svgPaths.p32f0f880} />
                                </svg>
                              )}
                            </div>
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inventory Column */}
                <div className="relative shrink-0 w-[96px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Inventory</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {['6 m3', '10 m3', '10 m3', '6 m3', '6 m3', '6 m3', '6 m3', '6 m3', '6 m3', '6 m3'].map((text, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address Column */}
                <div className="relative shrink-0 w-[140px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Adress</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Raina bulvāris 5</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Column */}
                <div className="relative shrink-0 w-[96px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Total</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">674,71 €</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Status Column */}
                <div className="relative shrink-0 w-[165px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Payment Status</p>
                        </div>
                      </div>
                    </div>
                    {[
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Accepted', color: '#16a34a' },
                      { label: 'Awaiting payment', color: '#f59e0b' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' },
                      { label: 'Assigned', color: '#3b82f6' }
                    ].map((status, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <div className="inline-flex items-center px-[8px] py-[4px] relative rounded-[4px]" style={{ backgroundColor: `${status.color}20` }}>
                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[12px]" style={{ color: status.color }}>{status.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment method Column */}
                <div className="relative shrink-0 w-[160px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Payment method</p>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Postpaid invoice</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Source Column */}
                <div className="relative shrink-0 w-[80px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Source</p>
                        </div>
                      </div>
                    </div>
                    {['Web', 'Mobile', 'Web', 'Web', 'Web', 'Web', 'Web', 'Web', 'Web', 'Web'].map((text, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Column */}
                <div className="relative shrink-0 w-[106px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Status</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {['Received', 'Scheduled', 'En route', 'Completed', 'Finished', 'Cancelled', 'Scheduled', 'Scheduled', 'Scheduled', 'Scheduled'].map((text, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliver at Column */}
                <div className="relative shrink-0 w-[136px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Deliver at</p>
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">12.03.24 16:00</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pickup at Column */}
                <div className="relative shrink-0 w-[96px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                    <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Pickup at</p>
                        </div>
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">12</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white h-[60px] relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[24px] py-[12px] shrink-0 top-1/2 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Per page</p>
                    <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">10</p>
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-end left-1/2 px-[24px] py-[12px] shrink-0 top-1/2 w-full">
                  <div className="bg-white content-stretch flex gap-[6px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#05376d] text-[14px] text-center">Next</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
