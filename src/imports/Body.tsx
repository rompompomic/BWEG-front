import svgPaths from "./svg-wxf6nlahdp";

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