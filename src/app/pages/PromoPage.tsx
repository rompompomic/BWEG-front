export default function PromoPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      <div className="mx-auto max-w-[1440px] px-[24px]">
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
            <p className="leading-[32px]">Promo</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#737373] text-[14px]">
            Promo page content will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
