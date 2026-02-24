const svgPaths = {
p1a21b380: "M3.375 0C3.52418 0 3.66726 0.0592632 3.77275 0.164752C3.87824 0.270242 3.9375 0.413316 3.9375 0.5625V1.6875H10.6875V0.5625C10.6875 0.413316 10.7468 0.270242 10.8523 0.164752C10.9577 0.0592632 11.1008 0 11.25 0C11.3992 0 11.5423 0.0592632 11.6477 0.164752C11.7532 0.270242 11.8125 0.413316 11.8125 0.5625V1.6875H12.375C12.9717 1.6875 13.544 1.92455 13.966 2.34651C14.3879 2.76847 14.625 3.34076 14.625 3.9375V12.375C14.625 12.9717 14.3879 13.544 13.966 13.966C13.544 14.3879 12.9717 14.625 12.375 14.625H2.25C1.65326 14.625 1.08097 14.3879 0.65901 13.966C0.237053 13.544 0 12.9717 0 12.375V3.9375C0 3.34076 0.237053 2.76847 0.65901 2.34651C1.08097 1.92455 1.65326 1.6875 2.25 1.6875H2.8125V0.5625C2.8125 0.413316 2.87176 0.270242 2.97725 0.164752C3.08274 0.0592632 3.22582 0 3.375 0ZM13.5 6.75C13.5 6.45163 13.3815 6.16548 13.1705 5.9545C12.9595 5.74353 12.6734 5.625 12.375 5.625H2.25C1.95163 5.625 1.66548 5.74353 1.4545 5.9545C1.24353 6.16548 1.125 6.45163 1.125 6.75V12.375C1.125 12.6734 1.24353 12.9595 1.4545 13.1705C1.66548 13.3815 1.95163 13.5 2.25 13.5H12.375C12.6734 13.5 12.9595 13.3815 13.1705 13.1705C13.3815 12.9595 13.5 12.6734 13.5 12.375V6.75Z",
p2bfe6500: "M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L6.75 5.68934L12.2197 0.21967C12.5126 -0.0732233 12.9874 -0.0732233 13.2803 0.21967C13.5732 0.512563 13.5732 0.987437 13.2803 1.28033L7.81066 6.75L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L6.75 7.81066L1.28033 13.2803C0.987437 13.5732 0.512563 13.5732 0.21967 13.2803C-0.0732233 12.9874 -0.0732233 12.5126 0.21967 12.2197L5.68934 6.75L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z",
} as const;


interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  date: string;
  setDate: (date: string) => void;
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pl-[24px] pr-[16px] pt-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">Choose date new conditions come into force</p>
        </div>
      </div>
    </div>
  );
}

function SectionModalHeadA({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section modal / Head A">
      <Container />
      <div 
        className="-translate-y-1/2 absolute overflow-clip right-[24px] size-[24px] top-[calc(50%+9px)] cursor-pointer" 
        data-name="x-mark"
        onClick={onClose}
      >
        <div className="absolute inset-[21.88%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <path clipRule="evenodd" d={svgPaths.p2bfe6500} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px]">Date new conditions come into force</p>
    </div>
  );
}

function Input({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="bg-white h-[38px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[14px] py-[7px] relative size-full">
          <input 
            type="date"
            className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] outline-none bg-transparent"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {/* Calendar icon - usually date inputs have their own, but if we want custom styling we might need to overlay or use a library. 
              For now keeping the SVG but making it absolute pointer-events-none if needed, or just relying on browser date picker */}
          <div className="overflow-clip relative shrink-0 size-[18px] pointer-events-none" data-name="calendar">
            <div className="absolute inset-[9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.625 14.625">
                <path clipRule="evenodd" d={svgPaths.p1a21b380} fill="var(--fill-0, #262626)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1({ date, setDate }: { date: string; setDate: (d: string) => void }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[414px]" data-name="fields">
        <Label />
        <Input value={date} onChange={setDate} />
      </div>
    </div>
  );
}

function Row({ date, setDate }: { date: string; setDate: (d: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row1 date={date} setDate={setDate} />
    </div>
  );
}

function Body({ date, setDate }: { date: string; setDate: (d: string) => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <Row date={date} setDate={setDate} />
      </div>
    </div>
  );
}

function Button({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="Button">
      <div 
        className="bg-[#05376d] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 cursor-pointer hover:bg-[#042d5a]" 
        data-name="Button"
        onClick={onConfirm}
      >
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Сonfirm Changes</p>
      </div>
      <div 
        className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50" 
        data-name="Button"
        onClick={onCancel}
      >
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] text-center">Cancel</p>
      </div>
    </div>
  );
}

function Container1({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[24px] pt-[12px] px-[24px] relative w-full">
          <Button onConfirm={onConfirm} onCancel={onCancel} />
        </div>
      </div>
    </div>
  );
}

function SectionModalActionA({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section modal / Action A">
      <Container1 onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

function Frame({ onClose, onConfirm, date, setDate }: { onClose: () => void; onConfirm: () => void; date: string; setDate: (d: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.14)] shrink-0 w-[500px] bg-white">
      <SectionModalHeadA onClose={onClose} />
      <Body date={date} setDate={setDate} />
      <SectionModalActionA onConfirm={onConfirm} onCancel={onClose} />
    </div>
  );
}

export default function ConfirmationModal({ isOpen, onClose, onConfirm, date, setDate }: ConfirmationModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <Frame onClose={onClose} onConfirm={onConfirm} date={date} setDate={setDate} />
    </div>
  );
}
