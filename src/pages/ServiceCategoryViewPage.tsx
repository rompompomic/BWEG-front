import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Reusing the SVG paths from the imported file provided in the prompt context (svg-aixku167vu)
// But since I cannot import from a file that might not exist in the exact path or might be different, 
// I will define the paths locally based on the prompt's provided file content to be safe,
// or I can try to import if I am sure. The prompt showed 'src/imports/svg-aixku167vu.ts'.
// Let's use the paths directly to ensure it works without file dependency issues if the file name changes.
const icons = {
  chevronRight: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
  edit: "M13.2188 1.125C12.9949 1.125 12.7803 1.21391 12.622 1.37218L11.7544 2.24032L12.9476 3.43357L13.8155 2.56569C13.9738 2.40742 14.0627 2.19276 14.0627 1.96894C14.0627 1.74511 13.9738 1.53045 13.8155 1.37218C13.6572 1.21391 13.4426 1.125 13.2188 1.125ZM12.1521 4.22906L10.959 3.03591L4.65786 9.33632C4.65782 9.33636 4.65791 9.33627 4.65786 9.33632C4.32771 9.66671 4.08489 10.0743 3.9161 10.5219L3.64854 11.5391L4.66563 11.2361C5.11331 11.1028 5.52085 10.8601 5.85125 10.5299C5.85129 10.5299 5.85121 10.53 5.85125 10.5299L12.1521 4.22906ZM11.8264 0.576806C12.1956 0.207559 12.6966 0 13.2188 0C13.7409 0 14.2418 0.207441 14.611 0.576688C14.9802 0.945935 15.1877 1.44674 15.1877 1.96894C15.1877 2.49113 14.9802 2.99194 14.611 3.36118L6.64675 11.3254C6.18418 11.7877 5.61365 12.1276 4.98687 12.3143C4.98683 12.3143 4.98691 12.3143 4.98687 12.3143L2.97312 12.9143C2.77517 12.9732 2.56081 12.919 2.41475 12.7729C2.2687 12.6269 2.21444 12.4125 2.27342 12.2146L2.87339 10.2009C2.8734 10.2009 2.87337 10.201 2.87339 10.2009C3.06001 9.57415 3.39984 9.00362 3.86214 8.54105L11.8264 0.576806ZM2.25 3.93769C1.95163 3.93769 1.66548 4.05621 1.4545 4.26719C1.24353 4.47817 1.125 4.76432 1.125 5.06269V12.9377C1.125 13.2361 1.24353 13.5222 1.4545 13.7332C1.66548 13.9442 1.95163 14.0627 2.25 14.0627H10.125C10.4234 14.0627 10.7095 13.9442 10.9205 13.7332C11.1315 13.5222 11.25 13.2361 11.25 12.9377V9.37519C11.25 9.06453 11.5018 8.81269 11.8125 8.81269C12.1232 8.81269 12.375 9.06453 12.375 9.37519V12.9377C12.375 13.5344 12.1379 14.1067 11.716 14.5287C11.294 14.9506 10.7217 15.1877 10.125 15.1877H2.25C1.65326 15.1877 1.08097 14.9506 0.65901 14.5287C0.237053 14.1067 0 13.5344 0 12.9377V5.06269C0 4.46595 0.237053 3.89365 0.65901 3.4717C1.08097 3.04974 1.65326 2.81269 2.25 2.81269H5.8125C6.12316 2.81269 6.375 3.06453 6.375 3.37519C6.375 3.68585 6.12316 3.93769 5.8125 3.93769H2.25Z",
  xCircle: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L9.75 8.68934L11.4697 6.96967C11.7626 6.67678 12.2374 6.67678 12.5303 6.96967C12.8232 7.26256 12.8232 7.73744 12.5303 8.03033L10.8107 9.75L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9.75 10.8107L8.03033 12.5303C7.73744 12.8232 7.26256 12.8232 6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L8.68934 9.75L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z",
  chevronDown: "M0.197406 0.214838C0.323969 0.0884321 0.49553 0.0174313 0.674406 0.0174313C0.853282 0.0174313 1.02484 0.0884321 1.15141 0.214838L4.49941 3.56284L7.84741 0.214838C7.9092 0.148519 7.98372 0.0953271 8.06652 0.0584343C8.14932 0.0215415 8.2387 0.00170416 8.32934 0.00010505C8.41997 -0.00149406 8.50999 0.0151779 8.59404 0.0491268C8.67809 0.0830757 8.75444 0.133606 8.81854 0.197703C8.88264 0.2618 8.93317 0.33815 8.96712 0.422199C9.00107 0.506249 9.01774 0.596275 9.01614 0.686907C9.01454 0.77754 8.9947 0.866922 8.95781 0.949722C8.92092 1.03252 8.86772 1.10704 8.80141 1.16884L4.97641 4.99384C4.84984 5.12024 4.67828 5.19124 4.49941 5.19124C4.32053 5.19124 4.14897 5.12024 4.02241 4.99384L0.197406 1.16884C0.0710004 1.04227 0 0.870713 0 0.691837C0 0.512962 0.0710004 0.3414 0.197406 0.214838Z"
};

interface InfoFieldProps {
  label: string;
  value: string;
}

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="flex flex-col gap-[4px] w-full items-start">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">{label}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#171717] text-[14px] leading-[24px] whitespace-pre-wrap w-full">{value}</p>
    </div>
  );
}

function Tag({ children, type = 'default' }: { children: React.ReactNode; type?: 'default' | 'orange' }) {
  if (type === 'orange') {
    return (
      <div className="bg-[#fffbf3] border border-[#fdecce] rounded-[6px] px-[6px] py-[2px] flex items-center justify-center">
        <span className="font-['Inter:Medium',sans-serif] font-medium text-[#d97706] text-[14px] leading-[20px] text-center">{children}</span>
      </div>
    );
  }
  return (
    <div className="bg-[#fffbf3] border border-[#fdecce] rounded-[6px] px-[6px] py-[2px] flex items-center justify-center">
        <span className="font-['Inter:Medium',sans-serif] font-medium text-[#d97706] text-[14px] leading-[20px] text-center">{children}</span>
    </div>
  );
}

// Reuse the toggle logic but for language selection which acts like a dropdown in the UI
function LanguageSelector({ current, onChange }: { current: string; onChange: (lang: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['English', 'Latvian', 'Russian'];
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-[#e5e5e5] rounded-[8px] px-[16px] py-[8px] flex items-center gap-[6px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]"
      >
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#262626] text-[14px] leading-[20px]">{current}</span>
        <div className="size-[18px] relative flex items-center justify-center">
           <svg className="size-[9px]" fill="none" viewBox="0 0 9 6">
             <path clipRule="evenodd" d={icons.chevronDown} fill="#A3A3A3" fillRule="evenodd" />
           </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-[#e5e5e5] rounded-[8px] shadow-lg z-10 w-[120px] overflow-hidden">
          {languages.map((lang) => (
            <div 
              key={lang}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${current === lang ? 'bg-gray-50 font-medium' : ''}`}
              onClick={() => {
                onChange(lang);
                setIsOpen(false);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServiceCategoryViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [language, setLanguage] = useState('English');

  // Mock data to match the screenshot
  const data = {
    fullName: "Containers for wood waste",
    mobileName: "Containers for wood waste",
    description: "Only wood waste can be placed in these containers",
    htmlDescription: "Only wood waste can be placed in these containers. Only wood waste can be placed in these containers Only wood waste can be placed in these containers Only wood waste can be placed in these containers",
    serviceType: "Containers service",
    postPaymentOnly: true,
    
    configurations: {
      inventoryCategories: ["6 m³", "9 m³", "10 m³"],
      vatCategory: "Group name",
      freeRentalDays: "4",
      promoCategories: ["GOV", "Contract"]
    },
    
    terms: {
      English: {
        title: "Only wood waste can be placed in these containers.",
        subtitle: "Only wood waste can be placed in these containers. Only wood waste can be placed in these containers",
        confirmText: "Only wood waste can be placed in these containers. Only wood waste can be placed in these containers Only wood waste can be placed in these containers Only wood waste can be placed in these containers",
        priceInfo: "Only wood waste can be placed in these containers. Only wood waste can be placed in these containers Only wood waste can be placed in these containers Only wood waste can be placed in these containers",
        body: "Only wood waste can be placed in these containers. Only wood waste can be placed in these containers Only wood waste can be placed in these containers Only wood waste can be placed in these containers"
      },
      Latvian: {
        title: "Tikai koksnes atkritumus var ievietot šajos konteineros.",
        subtitle: "Tikai koksnes atkritumus var ievietot šajos konteineros.",
        confirmText: "Tikai koksnes atkritumus var ievietot šajos konteineros.",
        priceInfo: "Cenas informācija...",
        body: "HTML teksts..."
      },
      Russian: {
        title: "Только древесные отходы могут быть размещены в этих контейнерах.",
        subtitle: "Только древесные отходы могут быть размещены в этих контейнерах.",
        confirmText: "Только древесные отходы могут быть размещены в этих контейнерах.",
        priceInfo: "Информация о цене...",
        body: "HTML текст..."
      }
    }
  };

  const currentTerms = data.terms[language as keyof typeof data.terms];

  return (
    <div className="bg-[#fafafa] min-h-screen w-full flex flex-col items-center pb-[48px] px-4 md:px-[32px]">
      <div className="w-full max-w-[1220px] flex flex-col gap-[32px] pt-[32px]">
        {/* Header & Breadcrumbs */}
        <div className="flex flex-col gap-[14px] w-full items-start">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-[14px] flex-wrap">
              <div className="flex items-center justify-center rounded-[8px] relative pr-[14px] cursor-pointer" onClick={() => navigate('/services')}>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">Services</p>
              </div>
              <div className="flex items-center justify-center gap-[14px] pr-[14px]">
                 <div className="size-[20px] flex items-center justify-center relative -rotate-90">
                    <svg className="h-[6px] w-[10px]" fill="none" viewBox="0 0 10 6">
                       <path clipRule="evenodd" d={icons.chevronRight} fill="#A3A3A3" fillRule="evenodd" />
                    </svg>
                 </div>
                 <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">{data.serviceType}</p>
              </div>
              <div className="flex items-center justify-center gap-[14px] pr-[14px]">
                 <div className="size-[20px] flex items-center justify-center relative -rotate-90">
                    <svg className="h-[6px] w-[10px]" fill="none" viewBox="0 0 10 6">
                       <path clipRule="evenodd" d={icons.chevronRight} fill="#A3A3A3" fillRule="evenodd" />
                    </svg>
                 </div>
                 <p className="font-['Inter:Medium',sans-serif] font-medium text-[#737373] text-[14px] leading-[20px]">{data.fullName}</p>
              </div>
           </div>

           {/* Title and Edit Button */}
           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-0">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#171717] text-[24px] sm:text-[30px] leading-[32px]">{data.fullName}</h1>
              <button 
                onClick={() => navigate(`/services/${id}/edit`)}
                className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#042d5a] transition-colors w-full sm:w-auto"
              >
                 <div className="size-[18px] relative">
                    <svg className="size-full" fill="none" viewBox="0 0 15 15">
                       <path clipRule="evenodd" d={icons.edit} fill="white" fillRule="evenodd" />
                    </svg>
                 </div>
                 <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px] leading-[20px]">Edit</span>
              </button>
           </div>
        </div>

        {/* Card 1: General Info */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] p-[24px] flex flex-col lg:flex-row gap-[22px] items-start w-full overflow-hidden">
           <div className="flex flex-col gap-[12px] flex-1 w-full">
              <InfoField label="Full name" value={data.fullName} />
              <InfoField label="Description" value={data.description} />
              <InfoField label="Service type" value={data.serviceType} />
           </div>
           
           <div className="flex flex-col gap-[12px] flex-1 w-full">
              <InfoField label="Mobile name" value={data.mobileName} />
              <InfoField label="HTML-Description" value={data.htmlDescription} />
              <div className="flex flex-col gap-[4px] items-start">
                 <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Postpayment only</p>
                 <div className="size-[24px] relative">
                     {data.postPaymentOnly ? (
                        <div className="size-[24px] rounded-full border border-[#D4D4D4] flex items-center justify-center">
                            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d={icons.xCircle} fill="#A3A3A3" fillRule="evenodd" />
                            </svg>
                        </div>
                     ) : (
                        <div className="font-medium text-sm">No</div>
                     )}
                 </div>
              </div>
           </div>
           
           <div className="shrink-0 bg-[#d9d9d9] size-[180px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] self-center lg:self-start" />
        </div>

        {/* Card 2: Configurations */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] flex flex-col items-start w-full overflow-hidden">
            <div className="w-full px-[24px] py-[16px] border-b border-[#e5e5e5]">
               <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px] leading-[24px]">Configurations</h2>
            </div>
            <div className="p-[24px] flex flex-col md:flex-row gap-[24px] items-start w-full flex-wrap">
               <div className="flex flex-col gap-[4px] flex-1 min-w-[200px] w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Inventory categories</p>
                  <div className="flex gap-[6px] flex-wrap">
                     {data.configurations.inventoryCategories.map(cat => <Tag key={cat} type="orange">{cat}</Tag>)}
                  </div>
               </div>
               
               <div className="flex flex-col gap-[4px] flex-1 min-w-[200px] w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">VAT category</p>
                  <div className="flex gap-[6px]">
                     <Tag type="orange">{data.configurations.vatCategory}</Tag>
                  </div>
               </div>
               
               <div className="flex flex-col gap-[4px] flex-1 min-w-[200px] w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Free rental days</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#171717] text-[14px] leading-[24px]">{data.configurations.freeRentalDays}</p>
               </div>
               
               <div className="flex flex-col gap-[4px] flex-1 min-w-[200px] w-full">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#171717] text-[14px] leading-[24px]">Promo categories</p>
                  <div className="flex gap-[6px] flex-wrap">
                     {data.configurations.promoCategories.map(cat => <Tag key={cat} type="orange">{cat}</Tag>)}
                  </div>
               </div>
            </div>
        </div>

        {/* Card 3: Service Terms */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] flex flex-col items-start w-full overflow-hidden">
            <div className="w-full px-[24px] py-[16px] border-b border-[#e5e5e5] flex items-center justify-between">
               <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#171717] text-[18px] leading-[24px]">Service terms</h2>
               <LanguageSelector current={language} onChange={setLanguage} />
            </div>
            <div className="p-[24px] flex flex-col gap-[24px] w-full">
               <InfoField label={`Title (${language === 'English' ? 'EN' : language === 'Latvian' ? 'LV' : 'RU'})`} value={currentTerms.title} />
               <InfoField label={`Subtitle (${language === 'English' ? 'EN' : language === 'Latvian' ? 'LV' : 'RU'})`} value={currentTerms.subtitle} />
               <InfoField label={`Confirmation text (${language === 'English' ? 'EN' : language === 'Latvian' ? 'LV' : 'RU'})`} value={currentTerms.confirmText} />
               <InfoField label={`Price information (${language === 'English' ? 'EN' : language === 'Latvian' ? 'LV' : 'RU'})`} value={currentTerms.priceInfo} />
               <InfoField label={`HTML-Text (Body) (${language === 'English' ? 'EN' : language === 'Latvian' ? 'LV' : 'RU'})`} value={currentTerms.body} />
            </div>
        </div>
      </div>
    </div>
  );
}
