const svgPaths = {
p24ad8380: "M5.0625 1.6875C5.21168 1.6875 5.35476 1.74676 5.46025 1.85225C5.56574 1.95774 5.625 2.10082 5.625 2.25V3.375H12.375V2.25C12.375 2.10082 12.4343 1.95774 12.5398 1.85225C12.6452 1.74676 12.7883 1.6875 12.9375 1.6875C13.0867 1.6875 13.2298 1.74676 13.3352 1.85225C13.4407 1.95774 13.5 2.10082 13.5 2.25V3.375H14.0625C14.6592 3.375 15.2315 3.61205 15.6535 4.03401C16.0754 4.45597 16.3125 5.02826 16.3125 5.625V14.0625C16.3125 14.6592 16.0754 15.2315 15.6535 15.6535C15.2315 16.0754 14.6592 16.3125 14.0625 16.3125H3.9375C3.34076 16.3125 2.76847 16.0754 2.34651 15.6535C1.92455 15.2315 1.6875 14.6592 1.6875 14.0625V5.625C1.6875 5.02826 1.92455 4.45597 2.34651 4.03401C2.76847 3.61205 3.34076 3.375 3.9375 3.375H4.5V2.25C4.5 2.10082 4.55926 1.95774 4.66475 1.85225C4.77024 1.74676 4.91332 1.6875 5.0625 1.6875ZM15.1875 8.4375C15.1875 8.13913 15.069 7.85298 14.858 7.642C14.647 7.43103 14.3609 7.3125 14.0625 7.3125H3.9375C3.63913 7.3125 3.35298 7.43103 3.142 7.642C2.93103 7.85298 2.8125 8.13913 2.8125 8.4375V14.0625C2.8125 14.3609 2.93103 14.647 3.142 14.858C3.35298 15.069 3.63913 15.1875 3.9375 15.1875H14.0625C14.3609 15.1875 14.647 15.069 14.858 14.858C15.069 14.647 15.1875 14.3609 15.1875 14.0625V8.4375Z",
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p2da5df80: "M2.96274 2.96274C3.12139 2.80409 3.37861 2.80409 3.53726 2.96274L6.5 5.92548L9.46274 2.96274C9.62139 2.80409 9.87861 2.80409 10.0373 2.96274C10.1959 3.12139 10.1959 3.37861 10.0373 3.53726L7.07452 6.5L10.0373 9.46274C10.1959 9.62139 10.1959 9.87861 10.0373 10.0373C9.87861 10.1959 9.62139 10.1959 9.46274 10.0373L6.5 7.07452L3.53726 10.0373C3.37861 10.1959 3.12139 10.1959 2.96274 10.0373C2.80409 9.87861 2.80409 9.62139 2.96274 9.46274L5.92548 6.5L2.96274 3.53726C2.80409 3.37861 2.80409 3.12139 2.96274 2.96274Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;


function Breadcrumbs1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Companies</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumbs2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <ChevronRight />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">{`SIA "NIKA MI"`}</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumbs3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <ChevronRight1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Working Hours</p>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumbs4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <ChevronRight2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Edit</p>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <Breadcrumbs1 />
      <Breadcrumbs2 />
      <Breadcrumbs3 />
      <Breadcrumbs4 />
    </div>
  );
}

function HeadingPageHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Heading_page / Heading">
      <Breadcrumbs />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Closed Days</p>
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
        <Container2 />
        <Separator />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Choose days</p>
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label />
      <Input />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-[358.67px]" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Fields />
      </div>
    </div>
  );
}

function XMark() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #C47E09)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c47e09] text-[14px] text-center">Dec 29, 2025</p>
      <XMark />
    </div>
  );
}

function XMark1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #C47E09)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag1() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c47e09] text-[14px] text-center">Dec 31, 2025</p>
      <XMark1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative">
        <InputTag />
        <InputTag1 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Row />
      <Frame8 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1220px]" data-name="Card">
      <HeadingCardDefault />
      <Body />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Business Hours</p>
        </div>
      </div>
    </div>
  );
}

function Line1() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Separator1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
      <Line1 />
    </div>
  );
}

function HeadingCardDefault1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container3 />
        <Separator1 />
      </div>
    </div>
  );
}

function Frame() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Monday</p>
        <FieldToggle />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
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
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Fields1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Fields2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label3 />
      <Input3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] w-full whitespace-pre-wrap">{`To allow make order till previous day's 15:00, specify 9 (hours)`}</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields1 />
        <Fields2 />
        <Fields3 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame16 />
      <Row1 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame9 />
      </div>
    </div>
  );
}

function TableCard() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body2 />
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn1() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Tuesday</p>
        <FieldToggle1 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
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

function Input4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Fields4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label4 />
      <Input4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
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

function Input5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Fields5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label5 />
      <Input5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label6 />
      <Input6 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields4 />
        <Fields5 />
        <Fields6 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame17 />
      <Row2 />
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function TableCard1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body3 />
    </div>
  );
}

function Frame2() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn2() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container6 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Wednesday</p>
        <FieldToggle2 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
    </div>
  );
}

function ChevronDown4() {
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

function Input7() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function Fields7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label7 />
      <Input7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
    </div>
  );
}

function ChevronDown5() {
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

function Input8() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown5 />
        </div>
      </div>
    </div>
  );
}

function Fields8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label8 />
      <Input8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label9 />
      <Input9 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields7 />
        <Fields8 />
        <Fields9 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame18 />
      <Row3 />
    </div>
  );
}

function Body4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame11 />
      </div>
    </div>
  );
}

function TableCard2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body4 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn3() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container7 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Thursday</p>
        <FieldToggle3 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
    </div>
  );
}

function ChevronDown6() {
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

function Input10() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown6 />
        </div>
      </div>
    </div>
  );
}

function Fields10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label10 />
      <Input10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
    </div>
  );
}

function ChevronDown7() {
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

function Input11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown7 />
        </div>
      </div>
    </div>
  );
}

function Fields11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label11 />
      <Input11 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label12 />
      <Input12 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields10 />
        <Fields11 />
        <Fields12 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame19 />
      <Row4 />
    </div>
  );
}

function Body5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame12 />
      </div>
    </div>
  );
}

function TableCard3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body5 />
    </div>
  );
}

function Frame4() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn4() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container8 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Friday</p>
        <FieldToggle4 />
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
    </div>
  );
}

function ChevronDown8() {
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

function Input13() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown8 />
        </div>
      </div>
    </div>
  );
}

function Fields13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label13 />
      <Input13 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
    </div>
  );
}

function ChevronDown9() {
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

function Input14() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown9 />
        </div>
      </div>
    </div>
  );
}

function Fields14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label14 />
      <Input14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label15 />
      <Input15 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields13 />
        <Fields14 />
        <Fields15 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame20 />
      <Row5 />
    </div>
  );
}

function Body6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame13 />
      </div>
    </div>
  );
}

function TableCard4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body6 />
    </div>
  );
}

function Frame5() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn5() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container9 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Saturday</p>
        <FieldToggle5 />
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">From</p>
    </div>
  );
}

function ChevronDown10() {
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

function Input16() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown10 />
        </div>
      </div>
    </div>
  );
}

function Fields16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label16 />
      <Input16 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">To</p>
    </div>
  );
}

function ChevronDown11() {
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

function Input17() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">{`SIA "NIKA MI"`}</p>
          <ChevronDown11 />
        </div>
      </div>
    </div>
  );
}

function Fields17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label17 />
      <Input17 />
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Hours before days offers are closed</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
        </div>
      </div>
    </div>
  );
}

function Fields18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label18 />
      <Input18 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative w-full">
        <Fields16 />
        <Fields17 />
        <Fields18 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame21 />
      <Row6 />
    </div>
  );
}

function Body7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame14 />
      </div>
    </div>
  );
}

function TableCard5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body7 />
    </div>
  );
}

function Frame6() {
  return <div className="absolute bg-white left-[2px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOff() {
  return (
    <div className="bg-[#e5e5e5] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch off">
      <Frame6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOff />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working</p>
    </div>
  );
}

function FieldToggle6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="field-toggle">
      <Container10 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px]">Sunday</p>
        <FieldToggle6 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Body8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame15 />
      </div>
    </div>
  );
}

function TableCard6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[14px] items-start justify-center min-w-[272px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1172px]" data-name="Table card">
      <Body8 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <TableCard />
      <TableCard1 />
      <TableCard2 />
      <TableCard3 />
      <TableCard4 />
      <TableCard5 />
      <TableCard6 />
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame23 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1220px]" data-name="Card">
      <HeadingCardDefault1 />
      <Body1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#05376d] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Save changes</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Button">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[900px]" data-name="Container">
      <Button />
    </div>
  );
}

function HeadingPageAction() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading_page / Action">
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Card />
      <Card1 />
      <HeadingPageAction />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] px-[32px] relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}