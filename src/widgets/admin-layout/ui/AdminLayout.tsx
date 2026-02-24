import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const navItems = [
  { name: 'Planner', path: '/planner' },
  { name: 'Orders', path: '/orders' },
  { name: 'Invoices', path: '/invoices' },
  { name: 'Clients', path: '/clients' },
  { name: 'Providers', path: '/providers' },
  { name: 'Companies', path: '/companies' },
  { name: 'Services', path: '/services' },
  { name: 'Promo', path: '/promo' },
  { name: 'Employers', path: '/employers' },
];

function Logo() {
  return (
    <div className="h-[18px] sm:h-[20px] w-[46px] sm:w-[51px] relative shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.0056 20">
        <g id="Frame 35">
          <path d="M38.9971 4.51965H29.7905V6.72824H38.9971V4.51965Z" fill="#05376D" />
          <path d="M38.9971 14.0237H29.7905V16.2338H38.9971V14.0237Z" fill="#05376D" />
          <path d="M36.2191 9.27148H29.7905V11.4801H36.2191V9.27148Z" fill="#05376D" />
          <path d="M9.5453 10.9429C9.26696 10.589 8.9151 10.3063 8.49666 10.0995C8.74317 9.89936 8.95541 9.66075 9.12951 9.38704C9.43094 8.91426 9.58377 8.34965 9.58377 7.70883C9.58377 6.70703 9.19054 5.91066 8.41465 5.34179C7.67009 4.79628 6.61876 4.51941 5.28965 4.51941H0.000976562V16.2398H5.60618C7.04944 16.2398 8.17426 15.9587 8.94933 15.4041C9.75836 14.8249 10.1686 13.9906 10.1686 12.924C10.1686 12.1356 9.95868 11.469 9.5453 10.9429ZM6.83398 8.94692C6.45454 9.20732 5.88721 9.33953 5.14796 9.33953H2.23813V6.45696H5.14796C5.88746 6.45696 6.45454 6.58916 6.83369 6.84957C7.18371 7.09006 7.34663 7.4232 7.34663 7.8981C7.34663 8.373 7.184 8.70643 6.83398 8.94692ZM2.23786 11.2774H5.54278C7.66956 11.2774 7.91554 12.1449 7.91554 12.7976C7.91554 13.323 7.74704 13.6773 7.38563 13.9128C6.98918 14.1711 6.36935 14.3019 5.54278 14.3019H2.23813L2.23786 11.2774Z" fill="#05376D" />
          <path d="M48.607 13.6492C47.9591 14.016 47.1985 14.2018 46.3446 14.2018C45.5714 14.2018 44.8664 14.0333 44.2491 13.7007C43.6363 13.3705 43.15 12.9099 42.8036 12.3309C42.4572 11.7525 42.2817 11.095 42.2817 10.3767C42.2817 9.65833 42.4572 8.98515 42.8036 8.4067C43.15 7.82854 43.6355 7.37066 44.2475 7.04572C44.8652 6.71762 45.5763 6.55145 46.3601 6.55145C47.5209 6.55145 48.5241 6.9422 49.3418 7.71282L49.5711 7.92943L51.0056 6.52729L50.7877 6.29263C50.2512 5.7134 49.5911 5.26744 48.8265 4.96695C48.0696 4.67017 47.2185 4.51965 46.2973 4.51965C45.1218 4.51965 44.0472 4.77131 43.103 5.26771C42.1532 5.76729 41.398 6.47314 40.8578 7.36507C40.318 8.25727 40.0444 9.27049 40.0444 10.3769C40.0444 11.4833 40.3183 12.4947 40.8586 13.3816C41.3976 14.2674 42.1496 14.9725 43.0933 15.4774C44.0325 15.9796 45.0998 16.2342 46.2655 16.2342C47.0859 16.2342 47.8856 16.1091 48.6425 15.8628C49.4038 15.6146 50.0823 15.2525 50.6584 14.7867L50.7804 14.6879V9.98617H48.6066L48.607 13.6492Z" fill="#05376D" />
          <path d="M26.133 4.51965L24.3185 7.73327L20.1873 15.0404L19.5146 16.2339H21.9999L28.6179 4.51965H26.133Z" fill="#05376D" />
          <path d="M23.399 4.51965H20.9273L16.787 11.8555L12.6335 4.53346L12.6256 4.51965H10.1719L16.7637 16.192L16.7873 16.2339L18.0299 14.0288L23.3759 4.56027L23.399 4.51965Z" fill="#05376D" />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path clipRule="evenodd" d="M9 3.5C7.54131 3.5 6.14236 4.07946 5.11091 5.11091C4.07946 6.14236 3.5 7.54131 3.5 9C3.5 10.4587 4.07946 11.8576 5.11091 12.8891C6.14236 13.9205 7.54131 14.5 9 14.5C10.4587 14.5 11.8576 13.9205 12.8891 12.8891C13.9205 11.8576 14.5 10.4587 14.5 9C14.5 7.54131 13.9205 6.14236 12.8891 5.11091C11.8576 4.07946 10.4587 3.5 9 3.5ZM2 9C2.00009 7.88067 2.26861 6.77768 2.78303 5.78356C3.29745 4.78944 4.04276 3.93318 4.95645 3.2866C5.87015 2.64002 6.92557 2.22197 8.0342 2.06754C9.14282 1.9131 10.2723 2.02677 11.3279 2.39902C12.3836 2.77127 13.3345 3.39124 14.101 4.20692C14.8676 5.0226 15.4273 6.0102 15.7333 7.08689C16.0393 8.16358 16.0827 9.29795 15.8597 10.3949C15.6368 11.4918 15.154 12.5192 14.452 13.391L17.78 16.72C17.8537 16.7887 17.9128 16.8715 17.9538 16.9635C17.9948 17.0555 18.0168 17.1548 18.0186 17.2555C18.0204 17.3562 18.0018 17.4562 17.9641 17.5496C17.9264 17.643 17.8703 17.7278 17.799 17.799C17.7278 17.8703 17.643 17.9264 17.5496 17.9641C17.4562 18.0018 17.3562 18.0204 17.2555 18.0186C17.1548 18.0168 17.0555 17.9948 16.9635 17.9538C16.8715 17.9128 16.7887 17.8537 16.72 17.78L13.391 14.452C12.3625 15.2804 11.1207 15.8009 9.80901 15.9536C8.49727 16.1062 7.16912 15.8846 5.97795 15.3145C4.78677 14.7444 3.78117 13.849 3.07727 12.7316C2.37338 11.6143 1.99991 10.3206 2 9Z" fill="#A3A3A3" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function HamburgerIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const content = children ?? <Outlet />;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-white flex items-center justify-between h-[56px] sm:h-[60px] lg:h-[68px] px-4 sm:px-6 lg:px-8 relative w-full">
        <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]" />
        
        <div className="flex items-center gap-4 z-10">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-white gap-[12px] h-full items-start px-[14px] relative">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex gap-[12px] h-full items-center justify-center px-[10px] py-[8px] relative shrink-0"
              >
                {isActive && (
                  <div aria-hidden="true" className="absolute border-[#c2c2c2] border-b-2 border-solid inset-0 pointer-events-none" />
                )}
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#404040] text-[14px]">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Tablet Navigation - Horizontal Scroll */}
        <div className="hidden md:flex lg:hidden overflow-x-auto gap-2 h-full items-center px-4 flex-1 mx-4 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center px-3 py-2 relative shrink-0 whitespace-nowrap rounded-md transition-colors ${
                  isActive ? 'bg-[#f5f5f5] text-[#404040]' : 'text-[#737373] hover:text-[#404040]'
                }`}
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] leading-[20px]">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Search and Profile - Desktop & Tablet */}
        <div className="hidden md:flex gap-2 lg:gap-[8px] items-center justify-end relative shrink-0 z-10">
          <div className="hidden lg:flex flex-col items-start relative shrink-0 w-[180px] xl:w-[222px]">
            <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="flex gap-[10px] items-center px-[10px] py-[7px] relative w-full">
                  <SearchIcon />
                  <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#a3a3a3] text-[14px]">
                    Search
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search Icon Only - Tablet */}
          <button className="lg:hidden bg-white p-2 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5]">
            <SearchIcon />
          </button>
          
          <div className="bg-[#171717] overflow-clip relative rounded-[100px] shrink-0 size-[32px] sm:size-[36px]">
            <div className="absolute inset-0 flex items-center justify-center font-['Inter:Medium',sans-serif] font-medium text-[14px] sm:text-[16px] text-white">
              DU
            </div>
          </div>
        </div>

        {/* Mobile Menu Button & Profile */}
        <div className="flex md:hidden items-center gap-3 z-10">
          <div className="bg-[#171717] overflow-clip relative rounded-[100px] shrink-0 size-[32px]">
            <div className="absolute inset-0 flex items-center justify-center font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">
              DU
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#404040] p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-[56px] right-0 bottom-0 w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Search */}
          <div className="p-4 border-b border-[#e5e5e5]">
            <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
              <div className="flex items-center px-3 py-2">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 ml-2 font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder-[#a3a3a3] outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-6 py-3 transition-colors ${
                    isActive
                      ? 'bg-[#f5f5f5] text-[#404040] border-l-4 border-[#05376D]'
                      : 'text-[#737373] hover:bg-[#fafafa] hover:text-[#404040]'
                  }`}
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] leading-[20px]">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full">
        {content}
      </main>
    </div>
  );
}
