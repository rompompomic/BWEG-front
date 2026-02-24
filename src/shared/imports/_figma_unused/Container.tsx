const svgPaths = {
p20c28a80: "M5.78975 2.97725C6.00942 2.75758 6.36558 2.75758 6.58525 2.97725L12.2102 8.60225C12.4299 8.82192 12.4299 9.17808 12.2102 9.39775L6.58525 15.0227C6.36558 15.2424 6.00942 15.2424 5.78975 15.0227C5.57008 14.8031 5.57008 14.4469 5.78975 14.2273L11.017 9L5.78975 3.77275C5.57008 3.55308 5.57008 3.19692 5.78975 2.97725Z",
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p331c8d00: "M12.2102 2.97725C12.4299 3.19692 12.4299 3.55308 12.2102 3.77275L6.983 9L12.2102 14.2273C12.4299 14.4469 12.4299 14.8031 12.2102 15.0227C11.9906 15.2424 11.6344 15.2424 11.4148 15.0227L5.78975 9.39775C5.57008 9.17808 5.57008 8.82192 5.78975 8.60225L11.4148 2.97725C11.6344 2.75758 11.9906 2.75758 12.2102 2.97725Z",
p3ebf6d00: "M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z",
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

function Button2() {
  return (
    <div className="absolute bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center left-[1103px] pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] top-px" data-name="Button">
      <Plus />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New task</p>
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
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Drivers</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Inventory</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[487.5px]">
      <Tab />
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
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#171717] text-[14px] text-ellipsis">SIA NIKA MI</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Fields1 />
      <Fields2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[110px] top-[102px] w-[1220px]">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Total number of units</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">998</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of available units</p>
    </div>
  );
}

function ListA() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label1 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">194</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of occupied units</p>
    </div>
  );
}

function ListA1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label2 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">804</p>
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA1 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[110px] top-[263px] w-[1220px]" data-name="Section">
      <Status />
      <Status1 />
      <Status2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Total number of units</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label3 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">998</p>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of available units</p>
    </div>
  );
}

function ListA2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label4 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">194</p>
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA2 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of occupied units</p>
    </div>
  );
}

function ListA3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label5 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">804</p>
      </div>
    </div>
  );
}

function Status5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA3 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[110px] top-[457px] w-[1220px]" data-name="Section">
      <Status3 />
      <Status4 />
      <Status5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Total number of units</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label6 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">998</p>
      </div>
    </div>
  );
}

function Status6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of available units</p>
    </div>
  );
}

function ListA4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label7 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">194</p>
      </div>
    </div>
  );
}

function Status7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA4 />
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] whitespace-pre-wrap">Number of occupied units</p>
    </div>
  );
}

function ListA5() {
  return (
    <div className="relative shrink-0 w-full" data-name="List A">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <Label8 />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#171717] text-[30px] tracking-[-0.75px] w-full whitespace-pre-wrap">804</p>
      </div>
    </div>
  );
}

function Status8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]" data-name="Status">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <ListA5 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[110px] top-[651px] w-[1220px]" data-name="Section">
      <Status6 />
      <Status7 />
      <Status8 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <HeadingPageHeading />
      <Frame1 />
      <Section />
      <Section1 />
      <Section2 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[24px] left-[110px] not-italic text-[#171717] text-[18px] top-[215px] w-[1220px] whitespace-pre-wrap">6 м³ conteiners</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[24px] left-[110px] not-italic text-[#171717] text-[18px] top-[409px] w-[1220px] whitespace-pre-wrap">8 м³ conteiners</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] leading-[24px] left-[110px] not-italic text-[#171717] text-[18px] top-[603px] w-[1220px] whitespace-pre-wrap">10 м³ conteiners</p>
    </div>
  );
}