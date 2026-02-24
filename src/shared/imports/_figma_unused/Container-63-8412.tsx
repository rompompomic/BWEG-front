
import imgCard from "figma:asset/488d463f295b5e2b497c32837e6f69a165668654.png";

const svgPaths = {
p22053000: "M36.3399 495.224L38.9506 467.916L44.782 458.345L47.8837 425.901L97.2774 406.362L149.637 441.517L244.153 444.665L264.251 479.326L279.081 488.281L274.405 502.909L254.685 501.024L237.013 519.355L246.292 544.738L146.104 556.83L67.1314 555.169L51.7041 535.322L32.6804 533.503L25.0029 508.508L36.3399 495.224Z",
p23cea900: "M1065.81 22.8218L1038.51 20.0831L1027.99 23.9463L995.562 20.6926L966.809 65.3554L991.135 123.542L975.879 216.872L1005.98 243.315L1011.89 259.6L1027.15 257.852L1029.12 238.141L1050.54 224.362L1073.64 238.391L1104.94 142.455L1118.64 64.6613L1102.16 45.6756L1104.07 26.6606L1081.04 14.2783L1065.81 22.8218Z",
p2ae3a500: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
p2bfe6500: "M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L6.75 5.68934L12.2197 0.21967C12.5126 -0.0732233 12.9874 -0.0732233 13.2803 0.21967C13.5732 0.512563 13.5732 0.987437 13.2803 1.28033L7.81066 6.75L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L6.75 7.81066L1.28033 13.2803C0.987437 13.5732 0.512563 13.5732 0.21967 13.2803C-0.0732233 12.9874 -0.0732233 12.5126 0.21967 12.2197L5.68934 6.75L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z",
p3493a700: "M405.964 286.441V344.941L416.464 366.441V435.941L517.964 487.441L636.964 423.441L839.464 435.941L889.464 366.441L922.964 350.441L915.964 318.441H873.464L839.464 275.941L864.464 223.941L652.964 177.941L483.964 165.441L446.964 204.441H405.964L384.464 255.941L405.964 286.441Z",
p37073b80: "M6.1875 0C6.49816 0 6.75 0.25184 6.75 0.5625V5.625H11.8125C12.1232 5.625 12.375 5.87684 12.375 6.1875C12.375 6.49816 12.1232 6.75 11.8125 6.75H6.75V11.8125C6.75 12.1232 6.49816 12.375 6.1875 12.375C5.87684 12.375 5.625 12.1232 5.625 11.8125V6.75H0.5625C0.25184 6.75 0 6.49816 0 6.1875C0 5.87684 0.25184 5.625 0.5625 5.625H5.625V0.5625C5.625 0.25184 5.87684 0 6.1875 0Z",
p3ff29e00: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
p74be300: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM13.1859 6.8897C13.523 7.13046 13.6011 7.59887 13.3603 7.93593L9.6103 13.1859C9.48216 13.3653 9.28157 13.4793 9.06186 13.4974C8.84215 13.5156 8.62556 13.4362 8.46967 13.2803L6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967C6.51256 9.67678 6.98744 9.67678 7.28033 9.96967L8.9043 11.5936L12.1397 7.06407C12.3805 6.72701 12.8489 6.64894 13.1859 6.8897Z",
p79f0400: "M13.2188 1.125C12.9949 1.125 12.7803 1.21391 12.622 1.37218L11.7544 2.24032L12.9476 3.43357L13.8155 2.56569C13.9738 2.40742 14.0627 2.19276 14.0627 1.96894C14.0627 1.74511 13.9738 1.53045 13.8155 1.37218C13.6572 1.21391 13.4426 1.125 13.2188 1.125ZM12.1521 4.22906L10.959 3.03591L4.65786 9.33632C4.65782 9.33636 4.65791 9.33627 4.65786 9.33632C4.32771 9.66671 4.08489 10.0743 3.95161 10.5219L3.64854 11.5391L4.66563 11.2361C5.11331 11.1028 5.52085 10.8601 5.85125 10.5299C5.85129 10.5299 5.85121 10.53 5.85125 10.5299L12.1521 4.22906ZM11.8264 0.576806C12.1956 0.207559 12.6966 0 13.2188 0C13.7409 0 14.2418 0.207441 14.611 0.576688C14.9802 0.945935 15.1877 1.44674 15.1877 1.96894C15.1877 2.49113 14.9802 2.99194 14.611 3.36118L6.64675 11.3254C6.18418 11.7877 5.61365 12.1276 4.98687 12.3143C4.98683 12.3143 4.98691 12.3143 4.98687 12.3143L2.97312 12.9143C2.77517 12.9732 2.56081 12.919 2.41475 12.7729C2.2687 12.6269 2.21444 12.4125 2.27342 12.2146L2.87339 10.2009C2.8734 10.2009 2.87337 10.201 2.87339 10.2009C3.06001 9.57415 3.39984 9.00362 3.86214 8.54105L11.8264 0.576806ZM2.25 3.93769C1.95163 3.93769 1.66548 4.05621 1.4545 4.26719C1.24353 4.47817 1.125 4.76432 1.125 5.06269V12.9377C1.125 13.2361 1.24353 13.5222 1.4545 13.7332C1.66548 13.9442 1.95163 14.0627 2.25 14.0627H10.125C10.4234 14.0627 10.7095 13.9442 10.9205 13.7332C11.1315 13.5222 11.25 13.2361 11.25 12.9377V9.37519C11.25 9.06453 11.5018 8.81269 11.8125 8.81269C12.1232 8.81269 12.375 9.06453 12.375 9.37519V12.9377C12.375 13.5344 12.1379 14.1067 11.716 14.5287C11.294 14.9506 10.7217 15.1877 10.125 15.1877H2.25C1.65326 15.1877 1.08097 14.9506 0.65901 14.5287C0.237053 14.1067 0 13.5344 0 12.9377V5.06269C0 4.46595 0.237053 3.89365 0.65901 3.4717C1.08097 3.04974 1.65326 2.81269 2.25 2.81269H5.8125C6.12316 2.81269 6.375 3.06453 6.375 3.37519C6.375 3.68585 6.12316 3.93769 5.8125 3.93769H2.25Z",
p7b9bb80: "M246.85 162.767L255.153 136.62L253.539 125.53L263.403 94.4665L225.62 57.1305L163.671 68.949L75.4846 34.7968L43.4085 58.8069L26.2554 61.2326L24.8236 76.5225L43.7043 82.5177L52.7772 106.309L34.2911 126.024L121.722 176.419L195.026 205.846L216.999 193.634L235.213 199.417L252.073 179.432L246.85 162.767Z",
} as const;

function Breadcrumbs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Services</p>
      </div>
      <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 flex items-center justify-center left-[35%] right-[35%] top-1/4">
            <div className="-rotate-90 flex-none h-[6px] w-[10px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                  <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">Regions</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Button">
      <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="plus">
          <div className="absolute inset-[15.63%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.375 12.375">
              <path clipRule="evenodd" d={svgPaths.p37073b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">New region</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
        <p className="leading-[32px]">Service regions</p>
      </div>
      <Frame8 />
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

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Filters</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Status</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Platform</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic overflow-hidden relative shrink-0 text-[#a3a3a3] text-[14px] text-ellipsis">Priority</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[31.25%] left-1/4 right-[24.91%] top-[39.91%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.018 5.76805">
                <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="var(--fill-0, #737373)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContinerLeft() {
  return (
    <div className="relative shrink-0 w-full" data-name="Continer Left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[14px] items-center relative w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
          <Input />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
          <Input1 />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="fields">
          <Input2 />
        </div>
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
          <Frame4 />
          <ContinerLeft />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[574.642px] left-[24px] top-[13px] w-[1123.267px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1123.27 574.642">
        <g id="Group 27">
          <path d={svgPaths.p23cea900} fill="var(--fill-0, #8D8D8D)" fillOpacity="0.2" id="Vector 3" stroke="var(--stroke-0, #8D8D8D)" strokeWidth="3" />
          <path d={svgPaths.p7b9bb80} fill="var(--fill-0, #8D8D8D)" fillOpacity="0.2" id="Vector 2" stroke="var(--stroke-0, #8D8D8D)" strokeWidth="3" />
          <path d={svgPaths.p3493a700} fill="var(--fill-0, #8D8D8D)" fillOpacity="0.2" id="Vector 1" stroke="var(--stroke-0, #8D8D8D)" strokeWidth="3" />
          <path d={svgPaths.p22053000} fill="var(--fill-0, #FF4141)" fillOpacity="0.2" id="Vector 4" stroke="var(--stroke-0, #FF4141)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pl-[24px] pr-[16px] pt-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Carnikava</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Type</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">Area</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Status</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="check-circle">
          <div className="absolute inset-[9.38%_9.38%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path clipRule="evenodd" d={svgPaths.p74be300} fill="var(--fill-0, #22C55E)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Priority</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-full">
      <Frame1 />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="List">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Label">
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">Platform</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">ZOLT</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Button">
      <div className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="pencil-square">
          <div className="absolute inset-[6.25%_6.25%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1877 15.1877">
              <path clipRule="evenodd" d={svgPaths.p79f0400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Edit</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="Button">
      <Frame6 />
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Dublicate</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[24px] pt-[12px] px-[24px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function SectionModalActionA() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section modal / Action A">
      <Container5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[12px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.14)] shrink-0 w-[345px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section modal / Head A">
          <Container4 />
          <div className="-translate-y-1/2 absolute overflow-clip right-[24px] size-[24px] top-[calc(50%+9px)]" data-name="x-mark">
            <div className="absolute inset-[21.88%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                <path clipRule="evenodd" d={svgPaths.p2bfe6500} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <Body />
        <SectionModalActionA />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="Card">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCard} />
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[22px] items-start justify-end p-[24px] relative size-full">
          <Group />
          <Frame />
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

function Container3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[1220px] overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">List</p>
      </div>
      <div className="bg-[#fafafa] content-stretch flex gap-[10px] h-[36px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d97706] text-[14px]">Map</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[544.5px] overflow-clip p-[8px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] top-[43px]" data-name="Tab">
      <Frame7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1220px] relative shrink-0 w-full" data-name="Container">
      <HeadingPageHeading />
      <Container3 />
      <Tab />
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