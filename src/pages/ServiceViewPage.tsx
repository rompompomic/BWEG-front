import { useNavigate, useParams } from 'react-router-dom';

const svgPaths = {
p2ae3a500: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
p79f0400: "M13.2188 1.125C12.9949 1.125 12.7803 1.21391 12.622 1.37218L11.7544 2.24032L12.9476 3.43357L13.8155 2.56569C13.9738 2.40742 14.0627 2.19276 14.0627 1.96894C14.0627 1.74511 13.9738 1.53045 13.8155 1.37218C13.6572 1.21391 13.4426 1.125 13.2188 1.125ZM12.1521 4.22906L10.959 3.03591L4.65786 9.33632C4.65782 9.33636 4.65791 9.33627 4.65786 9.33632C4.32771 9.66671 4.08489 10.0743 3.95161 10.5219L3.64854 11.5391L4.66563 11.2361C5.11331 11.1028 5.52085 10.8601 5.85125 10.5299C5.85129 10.5299 5.85121 10.53 5.85125 10.5299L12.1521 4.22906ZM11.8264 0.576806C12.1956 0.207559 12.6966 0 13.2188 0C13.7409 0 14.2418 0.207441 14.611 0.576688C14.9802 0.945935 15.1877 1.44674 15.1877 1.96894C15.1877 2.49113 14.9802 2.99194 14.611 3.36118L6.64675 11.3254C6.18418 11.7877 5.61365 12.1276 4.98687 12.3143C4.98683 12.3143 4.98691 12.3143 4.98687 12.3143L2.97312 12.9143C2.77517 12.9732 2.56081 12.919 2.41475 12.7729C2.2687 12.6269 2.21444 12.4125 2.27342 12.2146L2.87339 10.2009C2.8734 10.2009 2.87337 10.201 2.87339 10.2009C3.06001 9.57415 3.39984 9.00362 3.86214 8.54105L11.8264 0.576806ZM2.25 3.93769C1.95163 3.93769 1.66548 4.05621 1.4545 4.26719C1.24353 4.47817 1.125 4.76432 1.125 5.06269V12.9377C1.125 13.2361 1.24353 13.5222 1.4545 13.7332C1.66548 13.9442 1.95163 14.0627 2.25 14.0627H10.125C10.4234 14.0627 10.7095 13.9442 10.9205 13.7332C11.1315 13.5222 11.25 13.2361 11.25 12.9377V9.37519C11.25 9.06453 11.5018 8.81269 11.8125 8.81269C12.1232 8.81269 12.375 9.06453 12.375 9.37519V12.9377C12.375 13.5344 12.1379 14.1067 11.716 14.5287C11.294 14.9506 10.7217 15.1877 10.125 15.1877H2.25C1.65326 15.1877 1.08097 14.9506 0.65901 14.5287C0.237053 14.1067 0 13.5344 0 12.9377V5.06269C0 4.46595 0.237053 3.89365 0.65901 3.4717C1.08097 3.04974 1.65326 2.81269 2.25 2.81269H5.8125C6.12316 2.81269 6.375 3.06453 6.375 3.37519C6.375 3.68585 6.12316 3.93769 5.8125 3.93769H2.25Z",
p83e8e00: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L9.75 8.68934L11.4697 6.96967C11.7626 6.67678 12.2374 6.67678 12.5303 6.96967C12.8232 7.26256 12.8232 7.73744 12.5303 8.03033L10.8107 9.75L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9.75 10.8107L8.03033 12.5303C7.73744 12.8232 7.26256 12.8232 6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697L8.68934 9.75L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z",
} as const;

export default function ServiceViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const serviceData = {
    fullName: 'Containers for wood waste',
    uniqueCode: '01',
    description: 'Only wood waste can be placed in these containers',
    postpaymentOnly: false,
    paymentMethods: [
      'Internet banking SEB',
      'Internet banking Swedbank',
      'Internet banking Luminor',
      'Internet banking Revolut',
      'Apple Pay',
      'Google Pay',
      'By card Visa',
      'By card Mastercard',
      'Invoice by email',
      'Strict accounting receipt',
      'Installment with Esto',
      'Installment with InBank',
      'Installment with Klix',
    ],
    inventoryCategories: ['6 m³', '9 m³', '10 m³'],
    vatCategory: 'Group name',
    promoCategories: ['MKT', 'Sales'],
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      <div className="content-stretch flex flex-col items-center pb-[48px] px-[32px] relative w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] relative shrink-0 w-full">
          {/* Page Header */}
          <div className="content-stretch flex flex-col gap-[14px] items-start pt-[32px] relative shrink-0 w-full">
            {/* Breadcrumbs */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0">
                <button
                  onClick={() => navigate('/services')}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] hover:text-[#171717]"
                >
                  Services
                </button>
              </div>
              <div className="content-stretch flex gap-[14px] items-center justify-center pr-[14px] relative rounded-[8px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute bottom-1/4 flex items-center justify-center left-[35%] right-[35%] top-1/4">
                    <div className="-rotate-90 flex-none h-[6px] w-[10px]">
                      <div className="relative size-full">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                          <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="#A3A3A3" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px]">
                  {serviceData.fullName}
                </p>
              </div>
            </div>

            {/* Page Title and Edit Button */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[30px] whitespace-nowrap">
                <p className="leading-[32px]">{serviceData.fullName}</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <button
                  onClick={() => navigate(`/services/${id}/edit`)}
                  className="bg-[#05376d] content-stretch flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0 hover:bg-[#043159] transition-colors"
                >
                  <div className="overflow-clip relative shrink-0 size-[18px]">
                    <div className="absolute inset-[6.25%_6.25%_9.37%_9.38%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1877 15.1877">
                        <path clipRule="evenodd" d={svgPaths.p79f0400} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">
                    Edit
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Main Info Card */}
          <div className="bg-white content-stretch flex gap-[22px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full">
            <div className="flex-[1_0_0] min-h-px min-w-px relative">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
                {/* Full Name and Unique Code Row */}
                <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-full flex-col md:flex-row">
                  {/* Left Column */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                    {/* Full name */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                          Full name
                        </p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">
                        {serviceData.fullName}
                      </p>
                    </div>
                    {/* Description */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                        <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                          Description
                        </p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">
                        {serviceData.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full md:flex-[1_0_0] md:min-h-px md:min-w-px">
                    {/* Unique code */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full md:flex-[1_0_0] md:min-h-px md:min-w-px">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                            Unique code
                          </p>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#171717] text-[14px] w-full whitespace-pre-wrap">
                          {serviceData.uniqueCode}
                        </p>
                      </div>
                      {/* Postpayment only */}
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                            <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                              Postpayment only
                            </p>
                          </div>
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div className="absolute inset-[9.38%_9.38%_9.37%_9.38%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                                <path clipRule="evenodd" d={svgPaths.p83e8e00} fill="#A3A3A3" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                      Payment methodes
                    </p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
                    {serviceData.paymentMethods.map((method) => (
                      <div
                        key={method}
                        className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0"
                      >
                        <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[6px]" />
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] text-center">
                          {method}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-[#d9d9d9] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 size-[180px] hidden lg:block" />
          </div>

          {/* Configurations Card */}
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] shrink-0 w-full">
            {/* Header */}
            <div className="bg-white relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[20px] items-center px-[24px] py-[16px] relative w-full">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[18px] whitespace-pre-wrap">
                        Configurations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="bg-[#e5e5e5] h-px shrink-0 w-full" />
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full flex-col md:flex-row">
                  {/* Inventory categories */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                        Inventory categories
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
                      {serviceData.inventoryCategories.map((category) => (
                        <div key={category} className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0">
                            <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] text-center">
                              {category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* VAT category */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                        VAT category
                      </p>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[6px]" />
                          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] text-center">
                            {serviceData.vatCategory}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Promo categories */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[14px] whitespace-pre-wrap">
                        Promo categories
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
                      {serviceData.promoCategories.map((category) => (
                        <div key={category} className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0">
                            <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] text-center">
                              {category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
