import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const svgPaths = {
  p2ae3a500:
    'M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z',
  p3ff29e00:
    'M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z',
  p621a400:
    'M0.118988 0.118988C0.277638 -0.0396626 0.534862 -0.0396626 0.693512 0.118988L3.65625 3.08173L6.61899 0.118988C6.77764 -0.0396626 7.03486 -0.0396626 7.19351 0.118988C7.35216 0.277638 7.35216 0.534862 7.19351 0.693512L4.23077 3.65625L7.19351 6.61899C7.35216 6.77764 7.35216 7.03486 7.19351 7.19351C7.03486 7.35216 6.77764 7.35216 6.61899 7.19351L3.65625 4.23077L0.693512 7.19351C0.534862 7.35216 0.277638 7.35216 0.118988 7.19351C-0.0396626 7.03486 -0.0396626 6.77764 0.118988 6.61899L3.08173 3.65625L0.118988 0.693512C-0.0396626 0.534862 -0.0396626 0.277638 0.118988 0.118988Z',
} as const;

const roles = ['Super Admin', 'Admin', 'Dispatcher', 'Accountant', 'Sales', 'Marketing'];

const allModules = ['Planner', 'Orders', 'Invoices', 'Clients', 'Providers', 'Companies', 'Services', 'Promo'];

export default function RightsMatrixPage() {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('Admin');
  const [modulesSeen, setModulesSeen] = useState<string[]>(['Planner', 'Orders', 'Invoices', 'Clients', 'Providers', 'Companies', 'Services', 'Promo']);
  const [allowedCategories, setAllowedCategories] = useState<string[]>(['Planner', 'Orders', 'Invoices', 'Clients', 'Providers', 'Companies', 'Services', 'Promo']);
  const [isModulesDropdownOpen, setIsModulesDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [searchModules, setSearchModules] = useState('');
  const [searchCategories, setSearchCategories] = useState('');
  const [exportLimited, setExportLimited] = useState(true);

  const modulesDropdownRef = useRef<HTMLDivElement>(null);
  const categoriesDropdownRef = useRef<HTMLDivElement>(null);

  const [permissions, setPermissions] = useState({
    addingProviders: true,
    editingProviders: true,
    addingInvoices: true,
    editingInvoices: true,
    addingPromos: true,
    editingPromos: true,
    addingServices: true,
    editingServices: true,
  });

  const [specificPermissions, setSpecificPermissions] = useState({
    editingInvoicesAfterAccepted: true,
    editingInvoicesAfter20thDay: true,
    blockingClients: true,
    approvalOfDiscounts: true,
    editingInvoicesAfterSpecificDay: false,
    editingInvoicesAfterSpecificStatus: false,
    manualDiscounts: false,
  });

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modulesDropdownRef.current && !modulesDropdownRef.current.contains(event.target as Node)) {
        setIsModulesDropdownOpen(false);
      }
      if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target as Node)) {
        setIsCategoriesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleModule = (module: string) => {
    if (module === 'All') {
      if (modulesSeen.length === allModules.length) {
        setModulesSeen([]);
      } else {
        setModulesSeen([...allModules]);
      }
      return;
    }

    if (modulesSeen.includes(module)) {
      setModulesSeen(modulesSeen.filter(m => m !== module));
    } else {
      setModulesSeen([...modulesSeen, module]);
    }
  };

  const toggleCategory = (category: string) => {
    if (category === 'All') {
      if (allowedCategories.length === allModules.length) {
        setAllowedCategories([]);
      } else {
        setAllowedCategories([...allModules]);
      }
      return;
    }

    if (allowedCategories.includes(category)) {
      setAllowedCategories(allowedCategories.filter(c => c !== category));
    } else {
      setAllowedCategories([...allowedCategories, category]);
    }
  };

  const removeModule = (module: string) => {
    setModulesSeen(modulesSeen.filter(m => m !== module));
  };

  const removeCategory = (category: string) => {
    setAllowedCategories(allowedCategories.filter(c => c !== category));
  };

  const filteredModules = allModules.filter(module =>
    module.toLowerCase().includes(searchModules.toLowerCase())
  );

  const filteredCategories = allModules.filter(category =>
    category.toLowerCase().includes(searchCategories.toLowerCase())
  );

  return (
    <div className="bg-[#fafafa] min-h-screen w-full pb-8">
      <div className="content-stretch flex flex-col items-center px-4 md:px-8 w-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1220px] w-full">
          {/* Page Header */}
          <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-[14px]">
              <button
                onClick={() => navigate('/employers')}
                className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px] hover:text-[#171717]"
              >
                Employers
              </button>
              <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                <g transform="translate(7, 7)">
                  <path clipRule="evenodd" d={svgPaths.p2ae3a500} fill="#A3A3A3" fillRule="evenodd" className="-rotate-90" />
                </g>
              </svg>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                Rights Matrix
              </p>
            </div>

            {/* Title and Tabs Row */}
            <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px] items-start lg:items-center justify-between w-full">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[30px]">
                Rights Matrix
              </h1>

              {/* Role Tabs */}
              <div className="flex gap-[4px] items-start overflow-x-auto pb-2 bg-white p-[8px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee]">
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`px-[12px] h-[36px] rounded-[8px] shrink-0 transition-colors ${
                      activeRole === role
                        ? 'bg-[#fafafa]'
                        : 'bg-white hover:bg-[#fafafa]'
                    }`}
                  >
                    <span
                      className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] ${
                        activeRole === role ? 'text-[#d97706]' : 'text-[#737373]'
                      }`}
                    >
                      {role}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modules Seen Card */}
          <div className="bg-white flex flex-col items-start overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <div className="flex flex-col gap-[8px] items-start p-[24px] w-full">
              <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                Modules seen
              </label>
              <div className="relative w-full" ref={modulesDropdownRef}>
                <div
                  onClick={() => setIsModulesDropdownOpen(!isModulesDropdownOpen)}
                  className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full cursor-pointer"
                >
                  <div className="flex items-center px-[14px] py-[7px] gap-[10px]">
                    <div className="flex flex-col gap-[10px] flex-1">
                      <div className="flex flex-wrap gap-[6px_8px] items-start w-full">
                        {modulesSeen.length === 0 ? (
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                            Select modules
                          </span>
                        ) : (
                          modulesSeen.map((module, index) => (
                            <div
                              key={index}
                              className="bg-[#eff6ff] border border-[#dbeafe] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#2563eb] text-[14px]">
                                {module}
                              </span>
                              <button onClick={() => removeModule(module)} className="size-[13px]">
                                <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
                                  <g transform="translate(2.84, 2.84)">
                                    <path clipRule="evenodd" d={svgPaths.p621a400} fill="#2563EB" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#a3a3a3] text-[14px]">
                        LV25-12/12126
                      </p>
                    </div>
                    <svg
                      className={`size-[20px] shrink-0 transition-transform ${isModulesDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <g transform="translate(5, 7.2)">
                        <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Dropdown */}
                {isModulesDropdownOpen && (
                  <div className="absolute z-50 mt-[4px] w-full bg-white rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_#e5e5e5] overflow-hidden">
                    {/* Search */}
                    <div className="p-[12px] border-b border-[#e5e5e5]">
                      <input
                        type="text"
                        value={searchModules}
                        onChange={(e) => setSearchModules(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-[12px] py-[6px] rounded-[6px] bg-[#fafafa] border border-[#e5e5e5] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] outline-none focus:border-[#2563eb]"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Options */}
                    <div className="max-h-[240px] overflow-y-auto">
                      {filteredModules.map((module) => (
                        <button
                          key={module}
                          onClick={() => toggleModule(module)}
                          className="w-full flex items-center justify-between px-[16px] py-[10px] hover:bg-[#fafafa] transition-colors"
                        >
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {module}
                          </span>
                          {modulesSeen.includes(module) && (
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path
                                d="M13.3346 4L6.0013 11.3333L2.66797 8"
                                stroke="#2563EB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                      <div className="h-px bg-[#e5e5e5] mx-[12px]" />
                      <button
                        onClick={() => toggleModule('All')}
                        className="w-full flex items-center justify-between px-[16px] py-[10px] hover:bg-[#fafafa] transition-colors"
                      >
                        <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#171717]">
                          All
                        </span>
                        {modulesSeen.length === allModules.length && (
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path
                              d="M13.3346 4L6.0013 11.3333L2.66797 8"
                              stroke="#2563EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Export & Allowed Categories Card */}
          <div className="bg-white flex flex-col items-start overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            {/* Export Section */}
            <div className="w-full">
              <div className="flex items-center px-[24px] py-[16px]">
                <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
                  Export
                </p>
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setExportLimited(!exportLimited)}
                    className={`h-[24px] rounded-[100px] w-[45px] relative ${
                      exportLimited ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        exportLimited ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Limited
                  </span>
                </div>
              </div>
              <div className="h-px bg-[#e5e5e5] w-full" />
            </div>

            {/* Allowed Categories */}
            <div className="flex flex-col gap-[8px] items-start p-[24px] w-full">
              <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                Allowed ctegories
              </label>
              <div className="relative w-full" ref={categoriesDropdownRef}>
                <div
                  onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                  className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full cursor-pointer"
                >
                  <div className="flex items-center px-[14px] py-[7px] gap-[10px]">
                    <div className="flex flex-col gap-[10px] flex-1 pt-[6px]">
                      <div className="flex flex-wrap gap-[6px_8px] items-start w-full">
                        {allowedCategories.length === 0 ? (
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                            Select categories
                          </span>
                        ) : (
                          allowedCategories.map((category, index) => (
                            <div
                              key={index}
                              className="bg-[#eff6ff] border border-[#dbeafe] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px]"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#2563eb] text-[14px]">
                                {category}
                              </span>
                              <button onClick={() => removeCategory(category)} className="size-[13px]">
                                <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
                                  <g transform="translate(2.84, 2.84)">
                                    <path clipRule="evenodd" d={svgPaths.p621a400} fill="#2563EB" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <svg
                      className={`size-[20px] shrink-0 transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <g transform="translate(5, 7.2)">
                        <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Dropdown */}
                {isCategoriesDropdownOpen && (
                  <div className="absolute z-50 mt-[4px] w-full bg-white rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12),0px_0px_0px_1px_#e5e5e5] overflow-hidden">
                    {/* Search */}
                    <div className="p-[12px] border-b border-[#e5e5e5]">
                      <input
                        type="text"
                        value={searchCategories}
                        onChange={(e) => setSearchCategories(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-[12px] py-[6px] rounded-[6px] bg-[#fafafa] border border-[#e5e5e5] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] outline-none focus:border-[#2563eb]"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Options */}
                    <div className="max-h-[240px] overflow-y-auto">
                      {filteredCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => toggleCategory(category)}
                          className="w-full flex items-center justify-between px-[16px] py-[10px] hover:bg-[#fafafa] transition-colors"
                        >
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            {category}
                          </span>
                          {allowedCategories.includes(category) && (
                            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                              <path
                                d="M13.3346 4L6.0013 11.3333L2.66797 8"
                                stroke="#2563EB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                      <div className="h-px bg-[#e5e5e5] mx-[12px]" />
                      <button
                        onClick={() => toggleCategory('All')}
                        className="w-full flex items-center justify-between px-[16px] py-[10px] hover:bg-[#fafafa] transition-colors"
                      >
                        <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#171717]">
                          All
                        </span>
                        {allowedCategories.length === allModules.length && (
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path
                              d="M13.3346 4L6.0013 11.3333L2.66797 8"
                              stroke="#2563EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Permissions Card */}
          <div className="bg-white flex flex-col items-start overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <div className="flex items-center px-[24px] py-[16px] w-full">
              <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
                Permissions
              </p>
            </div>
            <div className="h-px bg-[#e5e5e5] w-full" />
            
            <div className="flex flex-col gap-[24px] p-[24px] w-full">
              {/* First Row - Adding */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, addingProviders: !permissions.addingProviders })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.addingProviders ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.addingProviders ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Adding providers
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, addingInvoices: !permissions.addingInvoices })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.addingInvoices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.addingInvoices ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Adding Invoices
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, addingPromos: !permissions.addingPromos })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.addingPromos ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.addingPromos ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Adding promos
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, addingServices: !permissions.addingServices })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.addingServices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.addingServices ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Adding Services
                  </span>
                </div>
              </div>

              {/* Second Row - Editing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, editingProviders: !permissions.editingProviders })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.editingProviders ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.editingProviders ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing providers
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, editingInvoices: !permissions.editingInvoices })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.editingInvoices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.editingInvoices ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing Invoices
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, editingPromos: !permissions.editingPromos })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.editingPromos ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.editingPromos ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing promos
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setPermissions({ ...permissions, editingServices: !permissions.editingServices })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      permissions.editingServices ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        permissions.editingServices ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing Services
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Permissions Card */}
          <div className="bg-white flex flex-col items-start overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <div className="flex items-center px-[24px] py-[16px] w-full">
              <p className="flex-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
                Specific Permissions
              </p>
            </div>
            <div className="h-px bg-[#e5e5e5] w-full" />
            
            <div className="flex flex-col gap-[24px] p-[24px] w-full">
              {/* First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={() => setSpecificPermissions({ ...specificPermissions, editingInvoicesAfterAccepted: !specificPermissions.editingInvoicesAfterAccepted })}
                      className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                        specificPermissions.editingInvoicesAfterAccepted ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                      }`}
                    >
                      <div
                        className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          specificPermissions.editingInvoicesAfterAccepted ? 'left-[23px]' : 'left-[2px]'
                        }`}
                      />
                    </button>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Editing invoices after Accepted status
                    </span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#737373] text-[14px]">
                    10 days after invoicing
                  </p>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={() => setSpecificPermissions({ ...specificPermissions, editingInvoicesAfter20thDay: !specificPermissions.editingInvoicesAfter20thDay })}
                      className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                        specificPermissions.editingInvoicesAfter20thDay ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                      }`}
                    >
                      <div
                        className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          specificPermissions.editingInvoicesAfter20thDay ? 'left-[23px]' : 'left-[2px]'
                        }`}
                      />
                    </button>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Editing invoices after 20th day
                    </span>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                    Editing invoices after 20th day of the month
                  </p>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={() => setSpecificPermissions({ ...specificPermissions, blockingClients: !specificPermissions.blockingClients })}
                      className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                        specificPermissions.blockingClients ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                      }`}
                    >
                      <div
                        className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          specificPermissions.blockingClients ? 'left-[23px]' : 'left-[2px]'
                        }`}
                      />
                    </button>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Blocking and unblocking clients
                    </span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#737373] text-[14px]">
                    Changing client's status
                  </p>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[12px]">
                    <button
                      onClick={() => setSpecificPermissions({ ...specificPermissions, approvalOfDiscounts: !specificPermissions.approvalOfDiscounts })}
                      className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                        specificPermissions.approvalOfDiscounts ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                      }`}
                    >
                      <div
                        className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          specificPermissions.approvalOfDiscounts ? 'left-[23px]' : 'left-[2px]'
                        }`}
                      />
                    </button>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Approval of discounts
                    </span>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#737373] text-[14px]">
                    Large discounts or special promotional conditions
                  </p>
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setSpecificPermissions({ ...specificPermissions, editingInvoicesAfterSpecificDay: !specificPermissions.editingInvoicesAfterSpecificDay })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      specificPermissions.editingInvoicesAfterSpecificDay ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        specificPermissions.editingInvoicesAfterSpecificDay ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing invoices after specific day
                  </span>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setSpecificPermissions({ ...specificPermissions, editingInvoicesAfterSpecificStatus: !specificPermissions.editingInvoicesAfterSpecificStatus })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      specificPermissions.editingInvoicesAfterSpecificStatus ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        specificPermissions.editingInvoicesAfterSpecificStatus ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Editing invoices after specific status
                  </span>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() => setSpecificPermissions({ ...specificPermissions, manualDiscounts: !specificPermissions.manualDiscounts })}
                    className={`h-[24px] rounded-[100px] w-[45px] relative shrink-0 ${
                      specificPermissions.manualDiscounts ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                    }`}
                  >
                    <div
                      className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                        specificPermissions.manualDiscounts ? 'left-[23px]' : 'left-[2px]'
                      }`}
                    />
                  </button>
                  <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Manual Discounts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[12px] items-center pb-[12px]">
            <button className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#042c5a] transition-colors">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px]">
                Save changes
              </span>
            </button>
            <button
              onClick={() => navigate('/employers')}
              className="bg-white border border-[#e5e5e5] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:border-[#737373] transition-colors"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
