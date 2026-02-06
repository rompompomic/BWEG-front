import svgPaths from "../../imports/svg-fxygez5iea";

export default function ClientsPage() {
  return (
    <div className="bg-[#fafafa] flex flex-col min-h-screen relative w-full">

      {/* Main Content */}
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[78px] py-[24px] relative w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[36px]">Clients</h1>

          {/* Tabs and Button */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Tabs */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <div className="bg-[#fff4ed] content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#ea580c] text-[14px]">All</p>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Personal</p>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Legal</p>
              </div>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Governmental</p>
              </div>
            </div>

            {/* New Client Button */}
            <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
              <div className="relative shrink-0 size-[18px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3ebf6d00} fill="#ffffff" />
                </svg>
              </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New client</p>
            </div>
          </div>
        </div>

        {/* Filters Card */}
        <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Filters</p>

          {/* Filter Row */}
          <div className="content-stretch flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
            {/* Number */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Number</p>
                </div>
              </div>
            </div>

            {/* Segment */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Segment</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk status */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Risk status</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Status</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo category */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[150px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Promo category</p>
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Manager</p>
                </div>
              </div>
            </div>

            {/* Lats order */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Lats order</p>
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p24ad8380} fill="#a3a3a3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Last invoice */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[140px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Last invoice</p>
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p24ad8380} fill="#a3a3a3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer to push search and icon to right */}
            <div className="flex-1 min-w-[12px]" />

            {/* Search */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[240px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[7px] relative size-full">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p865e080} fill="#a3a3a3" />
                    </svg>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Search</p>
                </div>
              </div>
            </div>

            {/* Table View Icon */}
            <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-[38px]">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3d7a2b00} fill="#737373" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle and Clear */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[#e5e5e5] h-[24px] relative rounded-[99px] shrink-0 w-[44px]">
                <div className="bg-white h-[20px] left-[2px] relative rounded-[99px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[2px] w-[20px]" />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Unpaid invoices</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#3b82f6] text-[14px] underline">Clear</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white overflow-hidden relative rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
          <div className="overflow-x-auto relative w-full">
            <div className="flex flex-row min-w-max relative w-full">
              {/* Checkbox Column */}
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
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

              {/* Client Column */}
              <div className="relative shrink-0 w-[180px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Client</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {[
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'SIA "Former"', type: 1 },
                    { text: 'Ministry', type: 2 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 },
                    { text: 'Jānis Andreev', type: 0 }
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
                            ) : item.type === 1 ? (
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewBox="0 0 20 20">
                                <path d={svgPaths.p32f0f880} />
                              </svg>
                            ) : (
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewBox="0 0 20 20">
                                <path d={svgPaths.p30009f80} />
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

              {/* Number Column */}
              <div className="relative shrink-0 w-[140px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Number</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {['437857 - 84356', '40002202', '40002188', '437857 - 84356', '437857 - 84356', '437857 - 84356', '437857 - 84356', '437857 - 84356', '437857 - 84356', '437857 - 84356'].map((text, i) => (
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

              {/* Segment Column */}
              <div className="relative shrink-0 w-[100px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Segment</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {['B2C', 'B2B', 'GOV', 'B2C', 'B2C', 'B2C', 'B2C', 'B2C', 'B2C', 'B2C'].map((text, i) => (
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
              <div className="relative shrink-0 w-[140px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Status</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {[
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Blocked', color: '#737373' },
                    { label: 'Active', color: '#16a34a' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' },
                    { label: 'Prepayment', color: '#ea580c' }
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

              {/* Risk Column */}
              <div className="relative shrink-0 w-[80px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Risk</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {[0, 1, 2, 0, 0, 0, 0, 0, 0, 0].map((type, i) => (
                    <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] relative size-full">
                          <div className="relative shrink-0 size-[20px]">
                            {type === 0 ? (
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p17841600} fill="#f59e0b" />
                              </svg>
                            ) : type === 1 ? (
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p2ea5fa80} fill="#737373" />
                              </svg>
                            ) : (
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p1817e800} fill="#16a34a" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo category Column */}
              <div className="relative shrink-0 w-[140px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Promo category</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {['Standart', 'Contract', 'Standart', 'Standart', 'Standart', 'Standart', 'Standart', 'Standart', 'Standart', 'Standart'].map((text, i) => (
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

              {/* Manager Column */}
              <div className="relative shrink-0 w-[120px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Manager</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
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
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Krists Lācis</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unpaid Column */}
              <div className="relative shrink-0 w-[120px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Unpaid</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {['-', '2 (1000 €)', '-', '-', '-', '-', '-', '-', '-', '-'].map((text, i) => (
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

              {/* Lats order Column */}
              <div className="relative shrink-0 w-[120px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Lats order</p>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#A3A3A3" fillRule="evenodd" />
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
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">18/07/2024</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Last invoice Column */}
              <div className="relative shrink-0 w-[140px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                  <div className="bg-[#fafafa] h-[48px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[16px] pr-[24px] relative size-full">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Last invoice</p>
                      </div>
                    </div>
                  </div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="bg-white h-[56px] relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center pb-px px-[16px] pr-[24px] relative size-full">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">18/07/2024</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-white border-[#e5e5e5] border-solid border-t content-stretch flex h-[56px] items-center justify-between px-[24px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#737373] text-[14px]">Per page</p>
              <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">10</p>
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}