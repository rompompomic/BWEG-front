const svgPaths = {
p1fc3d400: "M9.58669 1.52574C9.6437 1.25969 9.51454 0.98857 9.27201 0.86522C9.02948 0.74187 8.7343 0.79717 8.55287 0.999949L1.75287 8.59995C1.59508 8.77629 1.55568 9.02891 1.65227 9.24493C1.74885 9.46095 1.96338 9.60003 2.20001 9.60003H7.45782L6.41333 14.4743C6.35632 14.7404 6.48548 15.0115 6.72801 15.1348C6.97055 15.2582 7.26572 15.2029 7.44716 15.0001L14.2472 7.4001C14.4049 7.22376 14.4443 6.97114 14.3478 6.75512C14.2512 6.5391 14.0366 6.40003 13.8 6.40003H8.5422L9.58669 1.52574Z",
p20c28a80: "M5.78975 2.97725C6.00942 2.75758 6.36558 2.75758 6.58525 2.97725L12.2102 8.60225C12.4299 8.82192 12.4299 9.17808 12.2102 9.39775L6.58525 15.0227C6.36558 15.2424 6.00942 15.2424 5.78975 15.0227C5.57008 14.8031 5.57008 14.4469 5.78975 14.2273L11.017 9L5.78975 3.77275C5.57008 3.55308 5.57008 3.19692 5.78975 2.97725Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p331c8d00: "M12.2102 2.97725C12.4299 3.19692 12.4299 3.55308 12.2102 3.77275L6.983 9L12.2102 14.2273C12.4299 14.4469 12.4299 14.8031 12.2102 15.0227C11.9906 15.2424 11.6344 15.2424 11.4148 15.0227L5.78975 9.39775C5.57008 9.17808 5.57008 8.82192 5.78975 8.60225L11.4148 2.97725C11.6344 2.75758 11.9906 2.75758 12.2102 2.97725Z",
} as const;


function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-left">
          <path clipRule="evenodd" d={svgPaths.p331c8d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <ChevronLeft />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="calendar">
          <path clipRule="evenodd" d={svgPaths.p24ad8380} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">25/01/2026</p>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p20c28a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[38px] items-center px-[14px] py-[7px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_0px_#e5e5e5] shrink-0 w-[48px]" data-name="Button">
      <ChevronRight />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] items-center left-[calc(50%+0.5px)] top-0">
      <Button />
      <Fields />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center left-[1108px] pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] top-px" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Assign Task</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#171717] text-[30px] top-[19px] whitespace-nowrap">
        <p className="leading-[32px]">Planner</p>
      </div>
      <Frame />
      <Button2 />
    </div>
  );
}

function HeadingPageHeading() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[110px] pt-[32px] top-0 w-[1220px]" data-name="Heading_page / Heading">
      <Container1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Drivers</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Inventory</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Tasks</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0" data-name="Tab">
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Timeline</p>
    </div>
  );
}

function Tab6() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Map</p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0" data-name="Tab">
      <Tab5 />
      <Tab6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[487.5px]">
      <Tab />
      <Tab4 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Region</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Fields1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input1 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Status</p>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Fields2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input2 />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis">SIA NIKA MI</p>
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Fields3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input3 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis">Aldis Freimanis</p>
          <ChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Fields4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Fields1 />
      <Fields2 />
      <Fields3 />
      <Fields4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[110px] top-[102px] w-[1220px]">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px]">8:00</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px]">
        <span className="leading-[16px]">Pickup (</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">LV25-12/12126</span>
        <span className="leading-[16px]">)</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[314px]">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px] w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#f2fdf5] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[7px] relative w-full">
          <Frame2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#22c55e] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
    </div>
  );
}

function Fields5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[178px] top-[341px]" data-name="fields">
      <Input5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] relative shrink-0">11:00</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0">
        <span className="leading-[16px]">Pickup (</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">LV25-12/12127</span>
        <span className="leading-[16px]">)</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#171717] text-[12px] w-[314px]">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[#fffbeb] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[7px] relative w-full">
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
    </div>
  );
}

function Fields6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[178px] top-[557px]" data-name="fields">
      <Input6 />
    </div>
  );
}

function HeroiconsMiniBolt() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="heroicons-mini/bolt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="heroicons-mini/bolt">
          <path d={svgPaths.p1fc3d400} fill="var(--fill-0, #0F172A)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <HeroiconsMiniBolt />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px]">14:00</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px]">
        <span className="leading-[16px]">Pickup (</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">LV25-12/12126</span>
        <span className="leading-[16px]">)</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[314px]">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#171717] text-[12px] w-full whitespace-pre-wrap">Raiņa bulvāris 5/6, Centra rajons, Rīga, LV-1050</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[7px] relative w-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ef4444] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]" />
    </div>
  );
}

function Fields7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[178px] top-[773px]" data-name="fields">
      <Input7 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[1798px] min-h-px min-w-px relative" data-name="Container">
      <HeadingPageHeading />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[210px]">06:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[282px]">07:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[354px]">08:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[426px]">09:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[498px]">10:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[570px]">11:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[642px]">12:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[714px]">13:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[786px]">14:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[858px]">15:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[930px]">16:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1002px]">17:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1074px]">18:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1146px]">19:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1218px]">20:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1290px]">21:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1362px]">22:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1434px]">23:00</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[110px] not-italic text-[#171717] text-[14px] top-[1506px]">00:00</p>
      <Frame1 />
      <div className="absolute flex h-[1368px] items-center justify-center left-[169px] top-[186px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1368px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1368 1">
                <line id="Line 1" stroke="var(--stroke-0, #D4D4D4)" x2="1368" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1368px] items-center justify-center left-[1330px] top-[186px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[1368px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1368 1">
                <line id="Line 1" stroke="var(--stroke-0, #D4D4D4)" x2="1368" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[258px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[186px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[330px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[402px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[474px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[546px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[618px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[690px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[762px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[834px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[906px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[978px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1050px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1122px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1194px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1266px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1338px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1410px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1482px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[169px] top-[1554px] w-[1161px]">
        <div className="flex-none rotate-180">
          <div className="h-0 relative w-[1161px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161 1">
                <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" x2="1161" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Fields5 />
      <Fields6 />
      <Fields7 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Body">
      <Container />
    </div>
  );
}