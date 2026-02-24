const svgPaths = {
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
    </div>
  );
}

function Button() {
  return <div className="content-stretch flex gap-[14px] items-center shrink-0" data-name="Button" />;
}

function Frame6() {
  return <div className="absolute bg-white left-[23px] rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px]" />;
}

function SwitchOn() {
  return (
    <div className="bg-[#05376d] h-[24px] overflow-clip relative rounded-[100px] shrink-0 w-[45px]" data-name="Switch on">
      <Frame6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <SwitchOn />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Active</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
        <p className="leading-[32px]">{`SIA "NIKA MI"`}</p>
      </div>
      <Button />
      <Container3 />
    </div>
  );
}

function HeadingPageHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-full" data-name="Heading_page / Heading">
      <Breadcrumbs />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Legal details</p>
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
        <Container4 />
        <Separator />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Company name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#171717] text-[14px] text-ellipsis whitespace-nowrap">{`SIA "NIKA MI"`}</p>
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

function Label1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Reg. number</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
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

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Fields />
      <Fields1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Legal adress</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Fields2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Contact number</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Fields3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label3 />
      <Input3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Contact e-mail</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Fields4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label4 />
      <Input4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative">
      <Fields3 />
      <Fields4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Fields2 />
      <Frame7 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Bank</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Bank account</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Fields6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label6 />
      <Input6 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Fields5 />
      <Fields6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Service cateories</p>
    </div>
  );
}

function XMark() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #D97706)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag() {
  return (
    <div className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px] text-center">Containers service</p>
      <XMark />
    </div>
  );
}

function XMark1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #D97706)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag1() {
  return (
    <div className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px] text-center">Skip Hire</p>
      <XMark1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px_8px] items-start relative shrink-0 w-full">
      <InputTag />
      <InputTag1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px pt-[6px] relative">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full whitespace-pre-wrap">Select option</p>
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

function Input7() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <Frame />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Fields7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="fields">
      <Label7 />
      <Input7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Service regions</p>
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

function Input8() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#a3a3a3] text-[14px] whitespace-pre-wrap">Select option</p>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Fields8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="fields">
      <Label8 />
      <Input8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Fields7 />
      <Fields8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Logo</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip py-[29px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] text-center whitespace-pre-wrap">
        <span className="leading-[20px]">{`Drag & Drop your files or `}</span>
        <span className="leading-[20px] text-[#05376d]">Browse</span>
      </p>
    </div>
  );
}

function Fields9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[574px]" data-name="fields">
      <Label9 />
      <Input9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] w-full whitespace-pre-wrap">Optimal image dimensions: 180x180px</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Frame8 />
      <Fields9 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <HeadingCardDefault />
      <Body />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Сontact person</p>
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
        <Container5 />
        <Separator1 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Full name</p>
    </div>
  );
}

function Input10() {
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

function Fields10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[574px]" data-name="fields">
      <Label10 />
      <Input10 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Fields10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Phone</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Email</p>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

function Fields12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[66px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label12 />
      <Input12 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Fields11 />
      <Fields12 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Telegram integration link</p>
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">WhatsApp integration link</p>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 overflow-hidden relative text-[#262626] text-[14px] text-ellipsis whitespace-nowrap">Lorem Ipsum</p>
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

function Row6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Fields13 />
      <Fields14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Photo</p>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip py-[29px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#737373] text-[14px] text-center whitespace-pre-wrap">
        <span className="leading-[20px]">{`Drag & Drop your files or `}</span>
        <span className="leading-[20px] text-[#05376d]">Browse</span>
      </p>
    </div>
  );
}

function Fields15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[600px]" data-name="fields">
      <Label15 />
      <Input15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] w-full whitespace-pre-wrap">Optimal image dimensions: 180x180px</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Row4 />
        <Row5 />
        <Row6 />
        <Fields15 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Card">
      <HeadingCardDefault1 />
      <Body1 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">{`Order Configuration and Integration Parameters `}</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Vehicles</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border border-[#05376d] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Service Area and Inventory Categories</p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Drivers</p>
    </div>
  );
}

function Tab5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Destionations</p>
    </div>
  );
}

function Tab6() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Working Hours</p>
    </div>
  );
}

function Tab7() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Capacity Templates</p>
    </div>
  );
}

function Tab8() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Terms and conditions</p>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center overflow-clip relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Tab">
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
      <Tab5 />
      <Tab6 />
      <Tab7 />
      <Tab8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Service Area and Inventory Categories</p>
        </div>
      </div>
    </div>
  );
}

function Line2() {
  return <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Line" />;
}

function Separator2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Separator">
      <Line2 />
    </div>
  );
}

function HeadingCardDefault2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading_card / Default">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container6 />
        <Separator2 />
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Service area</p>
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

function Input16() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <ChevronDown2 />
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Company’s inventory</p>
    </div>
  );
}

function XMark2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #D97706)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag2() {
  return (
    <div className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px] text-center">NM(Y4R</p>
      <XMark2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-start flex flex-wrap gap-[6px_8px] items-start relative shrink-0 w-full">
      <InputTag2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px pt-[6px] relative">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full whitespace-pre-wrap">Select option</p>
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

function Input17() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <Frame2 />
          <ChevronDown3 />
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

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start relative w-full">
        <Fields16 />
        <Fields17 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px] w-full whitespace-pre-wrap">Containers service</p>
      <Frame11 />
    </div>
  );
}

function Body3() {
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
      <Body3 />
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Service area</p>
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

function Input18() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic opacity-0 relative text-[#737373] text-[14px] whitespace-pre-wrap">Select option</p>
          <ChevronDown4 />
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

function Label19() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Company’s inventory</p>
    </div>
  );
}

function XMark3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x-mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="x-mark">
          <path clipRule="evenodd" d={svgPaths.p2da5df80} fill="var(--fill-0, #D97706)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputTag3() {
  return (
    <div className="bg-[#fffbf3] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Input tag">
      <div aria-hidden="true" className="absolute border border-[#fdecce] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px] text-center">NM(Y4R</p>
      <XMark3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-start flex flex-wrap gap-[6px_8px] items-start relative shrink-0 w-full">
      <InputTag3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px pt-[6px] relative">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full whitespace-pre-wrap">Select option</p>
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

function Input19() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative w-full">
          <Frame4 />
          <ChevronDown5 />
        </div>
      </div>
    </div>
  );
}

function Fields19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="fields">
      <Label19 />
      <Input19 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-start relative w-full">
        <Fields18 />
        <Fields19 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#171717] text-[18px] w-full whitespace-pre-wrap">Skip Hire</p>
      <Frame12 />
    </div>
  );
}

function Body4() {
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
      <Body4 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TableCard />
        <TableCard1 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-[1220px]" data-name="Card">
      <HeadingCardDefault2 />
      <Body2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#05376d] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Save changes</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Button">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[900px]" data-name="Container">
      <Button1 />
    </div>
  );
}

function HeadingPageAction() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading_page / Action">
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Card />
      <Card1 />
      <Tab />
      <Card2 />
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