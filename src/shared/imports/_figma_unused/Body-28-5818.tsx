
import imgCard from "figma:asset/488d463f295b5e2b497c32837e6f69a165668654.png";

const svgPaths = {
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
} as const;

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="plus">
          <path clipRule="evenodd" d={svgPaths.p3ebf6d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center left-[1103px] pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] top-px" data-name="Button">
      <Plus />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New task</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#171717] text-[30px] top-[19px] whitespace-nowrap">
        <p className="leading-[32px]">Planner</p>
      </div>
      <Button />
    </div>
  );
}

function HeadingPageHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-[1220px]" data-name="Heading_page / Heading">
      <Container3 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Drivers</p>
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
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Tasks</p>
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
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">List</p>
    </div>
  );
}

function Tab6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Map</p>
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[487.5px]">
      <Tab />
      <Tab4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1220px]">
      <Frame10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Filters</p>
      </div>
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Today</p>
    </div>
  );
}

function FieldToggle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container5 />
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

function Input() {
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

function Fields() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input />
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

function Input1() {
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

function Fields1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input1 />
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

function Input2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Provider</p>
          <ChevronDown2 />
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

function Input3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Driver</p>
          <ChevronDown3 />
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

function Input4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Date from</p>
          <Calendar />
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

function Calendar1() {
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

function Input5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px]">Date to</p>
          <Calendar1 />
        </div>
      </div>
    </div>
  );
}

function Fields5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
      <Input5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Fields />
      <Fields1 />
      <Fields2 />
      <Fields3 />
      <Fields4 />
      <Fields5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center opacity-50 px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1e3a8a] text-[14px] text-center">Clear</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Button">
      <Frame9 />
      <Button2 />
    </div>
  );
}

function ContinerLeft() {
  return (
    <div className="relative shrink-0 w-full" data-name="Continer Left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[14px] items-center relative w-full">
        <FieldToggle />
        <Button1 />
      </div>
    </div>
  );
}

function SectionTableAction() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section table / Action">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-end pb-[11px] pt-[10px] px-[24px] relative w-full">
          <Frame7 />
          <ContinerLeft />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Card">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCard} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute left-[379.5px] size-[20px] top-[190px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #F59E0B)" id="Ellipse 1" r="10" />
          </svg>
        </div>
        <div className="absolute left-[379.5px] size-[20px] top-[163px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #22C55E)" id="Ellipse 2" r="10" />
          </svg>
        </div>
        <div className="absolute left-[427.5px] size-[20px] top-[178px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #22C55E)" id="Ellipse 2" r="10" />
          </svg>
        </div>
        <div className="absolute left-[552.5px] size-[20px] top-[312px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #737373)" id="Ellipse 12" r="10" />
          </svg>
        </div>
        <div className="absolute left-[568.5px] size-[20px] top-[292px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #737373)" id="Ellipse 12" r="10" />
          </svg>
        </div>
        <div className="absolute left-[367.5px] size-[20px] top-[287px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #EF4444)" id="Ellipse 4" r="10" />
          </svg>
        </div>
        <div className="absolute left-[367.5px] size-[20px] top-[311px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #EF4444)" id="Ellipse 8" r="10" />
          </svg>
        </div>
        <div className="absolute left-[283.5px] size-[20px] top-[61px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #F59E0B)" id="Ellipse 1" r="10" />
          </svg>
        </div>
        <div className="absolute left-[602.5px] size-[20px] top-[163px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #22C55E)" id="Ellipse 2" r="10" />
          </svg>
        </div>
        <div className="absolute left-[562.5px] size-[20px] top-[163px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #22C55E)" id="Ellipse 2" r="10" />
          </svg>
        </div>
        <div className="absolute left-[562.5px] size-[20px] top-[195px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #F59E0B)" id="Ellipse 1" r="10" />
          </svg>
        </div>
        <div className="absolute left-[358.5px] size-[20px] top-[263px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #22C55E)" id="Ellipse 2" r="10" />
          </svg>
        </div>
        <div className="absolute left-[334.5px] size-[20px] top-[300px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #EF4444)" id="Ellipse 8" r="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative shrink-0 w-[1220px]" data-name="Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Card1 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <SectionTableAction />
        <Card />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[1220px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Indicators</p>
        </div>
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Separator() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
      <Line />
    </div>
  );
}

function HeadingCardDefault() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container6 />
        <Separator />
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="bg-[#ef4444] rounded-[100px] shrink-0 size-[20px]" />;
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Not started</p>
    </div>
  );
}

function FieldToggle1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container7 />
    </div>
  );
}

function Frame2() {
  return <div className="bg-[#f59e0b] rounded-[100px] shrink-0 size-[20px]" />;
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">In progress</p>
    </div>
  );
}

function FieldToggle2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container8 />
    </div>
  );
}

function Frame3() {
  return <div className="bg-[#22c55e] rounded-[100px] shrink-0 size-[20px]" />;
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Completed</p>
    </div>
  );
}

function FieldToggle3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container9 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#737373] rounded-[100px] shrink-0 size-[20px]" />;
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Not assigned</p>
    </div>
  );
}

function FieldToggle4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0">
      <FieldToggle1 />
      <FieldToggle2 />
      <FieldToggle3 />
      <FieldToggle4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-full whitespace-pre-wrap">Tasks</p>
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#05376d] left-[calc(50%+0.5px)] size-[18px] top-1/2" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Company base</p>
    </div>
  );
}

function FieldToggle5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_20_111740)" id="Frame 28">
          <path d="M10.5 1L20.5 19H0.5L10.5 1Z" fill="var(--fill-0, #05376D)" id="Polygon 1" />
        </g>
        <defs>
          <clipPath id="clip0_20_111740">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Polygon</p>
    </div>
  );
}

function FieldToggle6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container12 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0">
      <FieldToggle5 />
      <FieldToggle6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-full whitespace-pre-wrap">Destinations</p>
      <Frame12 />
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame13 />
        <Frame14 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1220px]" data-name="Card">
      <HeadingCardDefault />
      <Body1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
      <Card2 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[48px] px-[32px] relative w-full">
          <Container1 />
        </div>
      </div>
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