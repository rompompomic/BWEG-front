import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function ProviderEditPage() {
  const params = useParams();
  const navigate = useNavigate();
  const providerId = params.providerId ?? params.id ?? 'new';
  const isFromCompanies = Boolean(params.providerId);
  const isNew = providerId === 'new';
  const listPath = isFromCompanies ? '/companies' : '/providers';
  const detailPath = isFromCompanies ? `/companies/${providerId}` : `/providers/${providerId}`;
  const [activeTab, setActiveTab] = useState('order-config');
  const [isActive, setIsActive] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    companyName: 'SIA "NIKA MI"',
    regNumber: '',
    legalAddress: '',
    contactNumber: '',
    contactEmail: '',
    bank: '',
    bankAccount: '',
    serviceCategories: ['Containers service', 'Skip Hire'],
    serviceRegions: '',
    contactPersonName: '',
    contactPersonPhone: '',
    contactPersonEmail: '',
    telegramLink: '',
    whatsappLink: '',
    // Order Configuration
    displayCompanyLogo: true,
    invoiceToEmail: false,
    strictAccountingReports: false,
    invoiceSuffix: '',
    maxOrdersPerHour: '',
    navitec: '',
    hsb: '',
    paymentMethods: ''
  });

  const handleSave = () => {
    // Save logic here
    navigate(isNew ? listPath : detailPath);
  };

  const handleCancel = () => {
    navigate(isNew ? listPath : detailPath);
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="flex flex-col items-center px-4 sm:px-8 pb-12 pt-8 sm:pt-12">
        <div className="w-full max-w-[1220px] flex flex-col gap-6 sm:gap-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-[14px] pt-4 sm:pt-8">
            <button
              onClick={() => navigate(listPath)}
              className="flex gap-[14px] items-center rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors px-2 py-1"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                {isFromCompanies ? 'Companies' : 'Providers'}
              </p>
            </button>
            
            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
            </svg>
            
            {isNew ? (
              <div className="flex gap-[14px] items-center rounded-[8px] shrink-0 px-2 py-1">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                  New
                </p>
              </div>
            ) : (
              <button
                onClick={() => navigate(detailPath)}
                className="flex gap-[14px] items-center rounded-[8px] shrink-0 hover:bg-[#f5f5f5] transition-colors px-2 py-1"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                  {`SIA "NIKA MI"`}
                </p>
              </button>
            )}

            <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
            </svg>

            <div className="flex gap-[14px] items-center rounded-[8px] shrink-0 px-2 py-1">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[14px]">
                {isNew ? 'Create' : 'Edit'}
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[24px] sm:text-[30px]">
              {isNew ? (isFromCompanies ? 'New company' : 'New provider') : `SIA "NIKA MI"`}
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`h-[24px] w-[45px] rounded-full relative transition-colors ${
                  isActive ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                }`}
              >
                <div className={`absolute bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                  isActive ? 'left-[23px]' : 'left-[2px]'
                }`} />
              </button>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                Active
              </p>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            {/* Legal Details Section */}
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px] mb-6">
                Legal details
              </h2>

              <div className="flex flex-col gap-6">
                {/* Company name & Reg number */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Company name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateField('companyName', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Reg. number
                    </label>
                    <input
                      type="text"
                      value={formData.regNumber}
                      onChange={(e) => updateField('regNumber', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Legal address, Contact number & email */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Legal address
                    </label>
                    <input
                      type="text"
                      value={formData.legalAddress}
                      onChange={(e) => updateField('legalAddress', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Contact number
                    </label>
                    <input
                      type="text"
                      value={formData.contactNumber}
                      onChange={(e) => updateField('contactNumber', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Contact e-mail
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => updateField('contactEmail', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Bank & Bank account */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Bank
                    </label>
                    <input
                      type="text"
                      value={formData.bank}
                      onChange={(e) => updateField('bank', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Bank account
                    </label>
                    <input
                      type="text"
                      value={formData.bankAccount}
                      onChange={(e) => updateField('bankAccount', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Service categories & Logo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Service categories
                    </label>
                    <div className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] flex items-center gap-2">
                      <span className="bg-[#fef3c7] text-[#d97706] px-2 py-1 rounded text-[12px] font-['Inter:Medium',sans-serif]">
                        Containers service ×
                      </span>
                      <span className="bg-[#fef3c7] text-[#d97706] px-2 py-1 rounded text-[12px] font-['Inter:Medium',sans-serif]">
                        Skip Hire ×
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Logo
                    </label>
                    <div className="h-[100px] border-2 border-dashed border-[#e5e5e5] rounded-[8px] flex flex-col items-center justify-center gap-2">
                      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                        Drag & Drop your files or <span className="text-[#05376d] cursor-pointer">Browse</span>
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#a3a3a3]">
                        Optimal image dimensions: 180×180px
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service regions */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Service regions
                  </label>
                  <select
                    value={formData.serviceRegions}
                    onChange={(e) => updateField('serviceRegions', e.target.value)}
                    className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                  >
                    <option value="">Select option</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Person Section */}
            <div className="p-4 sm:p-6 md:p-8 border-t border-[#e5e5e5]">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px] mb-6">
                Contact person
              </h2>

              <div className="flex flex-col gap-6">
                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={formData.contactPersonName}
                    onChange={(e) => updateField('contactPersonName', e.target.value)}
                    className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPersonPhone}
                      onChange={(e) => updateField('contactPersonPhone', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.contactPersonEmail}
                      onChange={(e) => updateField('contactPersonEmail', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Telegram & WhatsApp */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Telegram integration link
                    </label>
                    <input
                      type="text"
                      value={formData.telegramLink}
                      onChange={(e) => updateField('telegramLink', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      WhatsApp integration link
                    </label>
                    <input
                      type="text"
                      value={formData.whatsappLink}
                      onChange={(e) => updateField('whatsappLink', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Photo */}
                <div className="flex flex-col gap-2">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                    Photo
                  </label>
                  <div className="h-[100px] border-2 border-dashed border-[#e5e5e5] rounded-[8px] flex flex-col items-center justify-center gap-2">
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                      Drag & Drop your files or <span className="text-[#05376d] cursor-pointer">Browse</span>
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#a3a3a3]">
                      Optimal image dimensions: 180×180px
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-[#e5e5e5] px-4 sm:px-6 md:px-8 pt-6">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                <button
                  onClick={() => setActiveTab('order-config')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'order-config'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Order Configuration and Integration Parameters
                </button>
                <button
                  onClick={() => setActiveTab('vehicles')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'vehicles'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Vehicles
                </button>
                <button
                  onClick={() => setActiveTab('service-area')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'service-area'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Service Area and Inventory Categories
                </button>
                <button
                  onClick={() => setActiveTab('drivers')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'drivers'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Drivers
                </button>
                <button
                  onClick={() => setActiveTab('destinations')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'destinations'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Destinations
                </button>
                <button
                  onClick={() => setActiveTab('working-hours')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'working-hours'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Working Hours
                </button>
                <button
                  onClick={() => setActiveTab('capacity-templates')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'capacity-templates'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Capacity Templates
                </button>
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`px-3 py-2 rounded-[8px] whitespace-nowrap text-[14px] font-['Inter:Medium',sans-serif] font-medium transition-colors ${
                    activeTab === 'terms'
                      ? 'bg-white border border-[#e5e5e5] text-[#0a0a0a]'
                      : 'text-[#737373] hover:bg-[#f5f5f5]'
                  }`}
                >
                  Terms and conditions
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Order Configuration Tab */}
              {activeTab === 'order-config' && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                    Order Configuration and Integration Parameters
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Invoice suffix */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Invoice suffix
                      </label>
                      <input
                        type="text"
                        value={formData.invoiceSuffix}
                        onChange={(e) => updateField('invoiceSuffix', e.target.value)}
                        className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                      />
                    </div>
                    {/* Maximum number of orders */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Maximum number of orders per hour (overall capacity limit)
                      </label>
                      <input
                        type="number"
                        value={formData.maxOrdersPerHour}
                        onChange={(e) => updateField('maxOrdersPerHour', e.target.value)}
                        className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                      />
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                          Display company logo
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#737373]">
                          Removed in the admin panel, in apps, etc.
                        </p>
                      </div>
                      <button
                        onClick={() => updateField('displayCompanyLogo', !formData.displayCompanyLogo)}
                        className={`h-[24px] w-[45px] rounded-full relative transition-colors ${
                          formData.displayCompanyLogo ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div className={`absolute bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          formData.displayCompanyLogo ? 'left-[23px]' : 'left-[2px]'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                          Invoice to e-mail
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#737373]">
                          Invoice sent automatically to the client's e-mail
                        </p>
                      </div>
                      <button
                        onClick={() => updateField('invoiceToEmail', !formData.invoiceToEmail)}
                        className={`h-[24px] w-[45px] rounded-full relative transition-colors ${
                          formData.invoiceToEmail ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div className={`absolute bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          formData.invoiceToEmail ? 'left-[23px]' : 'left-[2px]'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                          Strict accounting reports
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#737373]">
                          Availability of strict accounting reports
                        </p>
                      </div>
                      <button
                        onClick={() => updateField('strictAccountingReports', !formData.strictAccountingReports)}
                        className={`h-[24px] w-[45px] rounded-full relative transition-colors ${
                          formData.strictAccountingReports ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                        }`}
                      >
                        <div className={`absolute bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                          formData.strictAccountingReports ? 'left-[23px]' : 'left-[2px]'
                        }`} />
                      </button>
                    </div>
                  </div>

                  {/* Navitec & HSB/Logistics partners */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        Navitec
                      </label>
                      <input
                        type="text"
                        placeholder="Integration keys / IDs for receiving data about vehicles and/or containers"
                        value={formData.navitec}
                        onChange={(e) => updateField('navitec', e.target.value)}
                        className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                        HSB / logistics partners
                      </label>
                      <input
                        type="text"
                        placeholder="Event endpoints, notification URLs"
                        value={formData.hsb}
                        onChange={(e) => updateField('hsb', e.target.value)}
                        className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                      />
                    </div>
                  </div>

                  {/* Payment methods */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Payment methods
                    </label>
                    <select
                      value={formData.paymentMethods}
                      onChange={(e) => updateField('paymentMethods', e.target.value)}
                      className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                    >
                      <option value="">Select option</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Vehicles Tab */}
              {activeTab === 'vehicles' && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                      Vehicles
                    </h3>
                    <button className="bg-[#dbeafe] text-[#05376d] px-3 py-2 rounded-[8px] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold hover:bg-[#bfdbfe] transition-colors">
                      + New vehicle
                    </button>
                  </div>

                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Registration number
                        </label>
                        <input
                          type="text"
                          defaultValue="NM1V4R"
                          className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Technical passport number
                        </label>
                        <input
                          type="text"
                          defaultValue="NM1V4R"
                          className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Vehicle type
                        </label>
                        <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                          <option>Select option</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Brand
                        </label>
                        <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                          <option>Select option</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <button className="h-[24px] w-[45px] bg-[#05376d] rounded-full relative">
                          <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[23px] shadow" />
                        </button>
                        <span className="text-[14px]">Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="h-[24px] w-[45px] bg-[#e5e5e5] rounded-full relative">
                          <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[2px] shadow" />
                        </button>
                        <span className="text-[14px]">Available</span>
                      </div>
                    </div>
                    <button className="mt-4 text-[#dc2626] text-[14px] font-['Inter:Medium',sans-serif] flex items-center gap-2">
                      <svg className="size-4" fill="none" viewBox="0 0 16 16">
                        <path d="M3 4h10M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1m2 0v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4h10z" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Service Area and Inventory Categories Tab */}
              {activeTab === 'service-area' && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                    Service Area and Inventory Categories
                  </h3>

                  {/* Containers service */}
                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] mb-4">
                      Containers service
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Service area
                        </label>
                        <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                          <option>Select option</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Company's inventory
                        </label>
                        <div className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white flex items-center">
                          <span className="bg-[#fef3c7] text-[#d97706] px-2 py-1 rounded text-[12px]">
                            NM1V4R ×
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skip Hire */}
                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] mb-4">
                      Skip Hire
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Service area
                        </label>
                        <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                          <option>Select option</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Company's inventory
                        </label>
                        <div className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white flex items-center">
                          <span className="bg-[#fef3c7] text-[#d97706] px-2 py-1 rounded text-[12px]">
                            NM1V4R ×
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Drivers Tab */}
              {activeTab === 'drivers' && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                      Drivers
                    </h3>
                    <button className="bg-[#dbeafe] text-[#05376d] px-3 py-2 rounded-[8px] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold hover:bg-[#bfdbfe] transition-colors">
                      + New driver
                    </button>
                  </div>

                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Full name
                        </label>
                        <input
                          type="text"
                          defaultValue="Andrejs Dzjuronincs"
                          className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                          Default vehicle
                        </label>
                        <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                          <option>Select option</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Password
                          </label>
                          <input
                            type="password"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Password confirmation
                          </label>
                          <input
                            type="password"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button className="h-[24px] w-[45px] bg-[#05376d] rounded-full relative">
                            <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[23px] shadow" />
                          </button>
                          <span className="text-[14px]">Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="h-[24px] w-[45px] bg-[#e5e5e5] rounded-full relative">
                            <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[2px] shadow" />
                          </button>
                          <span className="text-[14px]">Available</span>
                        </div>
                      </div>
                      <button className="text-[#dc2626] text-[14px] font-['Inter:Medium',sans-serif] flex items-center gap-2">
                        <svg className="size-4" fill="none" viewBox="0 0 16 16">
                          <path d="M3 4h10M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1m2 0v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4h10z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Destinations Tab */}
              {activeTab === 'destinations' && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                      Destinations
                    </h3>
                    <button className="bg-[#dbeafe] text-[#05376d] px-3 py-2 rounded-[8px] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold hover:bg-[#bfdbfe] transition-colors">
                      + New destination
                    </button>
                  </div>

                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Name
                          </label>
                          <input
                            type="text"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Type
                          </label>
                          <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                            <option>Select option</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Address
                          </label>
                          <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                            <option>Select option</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Location (coordinates)
                          </label>
                          <input
                            type="text"
                            className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="default"
                          className="w-4 h-4 rounded border-[#e5e5e5]"
                        />
                        <label htmlFor="default" className="text-[14px]">
                          Default
                        </label>
                      </div>
                      <button className="text-[#dc2626] text-[14px] font-['Inter:Medium',sans-serif] flex items-center gap-2">
                        <svg className="size-4" fill="none" viewBox="0 0 16 16">
                          <path d="M3 4h10M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1m2 0v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4h10z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Working Hours Tab */}
              {activeTab === 'working-hours' && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                    Working Hours
                  </h3>

                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <div key={day} className="bg-[#f5f5f5] rounded-[12px] p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">
                          {day}
                        </h4>
                        <div className="flex items-center gap-2">
                          <button className="h-[24px] w-[45px] bg-[#05376d] rounded-full relative">
                            <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[23px] shadow" />
                          </button>
                          <span className="text-[14px]">Working</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            From
                          </label>
                          <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                            <option>Select option</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            To
                          </label>
                          <select className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white">
                            <option>Select option</option>
                          </select>
                        </div>
                      </div>
                      <p className="text-[12px] text-[#737373] mt-2">
                        In case there are 90 previous slots in (1-6 h, specify %)
                      </p>
                    </div>
                  ))}

                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">
                        Sunday
                      </h4>
                      <div className="flex items-center gap-2">
                        <button className="h-[24px] w-[45px] bg-[#e5e5e5] rounded-full relative">
                          <div className="absolute bg-white rounded-full size-[20px] top-[2px] left-[2px] shadow" />
                        </button>
                        <span className="text-[14px]">Working</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] mb-4">
                      Closed Days
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#fef3c7] text-[#d97706] px-3 py-1 rounded-[8px] text-[14px]">
                        Dec 24, 2025 ×
                      </span>
                      <span className="bg-[#fef3c7] text-[#d97706] px-3 py-1 rounded-[8px] text-[14px]">
                        Dec 31, 2025 ×
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                        Closed date
                      </label>
                      <input
                        type="date"
                        className="h-[40px] px-3 border border-[#e5e5e5] rounded-[8px] bg-white max-w-[300px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Capacity Templates Tab */}
              {activeTab === 'capacity-templates' && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[14px] text-[#737373] mb-6">
                      If CRON is turned on then, Your diagrams in data were for is there is no 5-16 h
                    </p>
                  </div>

                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                    <div key={day} className="bg-[#f5f5f5] rounded-[12px] p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">
                          {day}
                        </h4>
                        <button className="bg-[#dbeafe] text-[#05376d] px-3 py-1 rounded-[8px] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                          + Add template
                        </button>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a]">
                            Time slot
                          </label>
                          <select className="h-[36px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[14px]">
                            <option>Select option</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a]">
                            Time end
                          </label>
                          <select className="h-[36px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[14px]">
                            <option>Select option</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a]">
                            Max orders count
                          </label>
                          <input
                            type="number"
                            className="h-[36px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[14px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#0a0a0a]">
                            Inventory categories
                          </label>
                          <select className="h-[36px] px-2 border border-[#e5e5e5] rounded-[8px] bg-white text-[14px]">
                            <option>Select option</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-[#f5f5f5] rounded-[12px] p-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]">
                        Sunday
                      </h4>
                      <button className="bg-[#dbeafe] text-[#05376d] px-3 py-1 rounded-[8px] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                        + Add template
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Terms and Conditions Tab */}
              {activeTab === 'terms' && (
                <div className="flex flex-col gap-6">
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#171717] text-[18px] sm:text-[20px]">
                    Terms and conditions
                  </h3>

                  {/* Skip Hire */}
                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] mb-4">
                      Skip Hire
                    </h4>
                    <div className="flex flex-col gap-4">
                      {['LV', 'EN', 'RU'].map((lang) => (
                        <div key={lang} className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Agreement content {lang}
                          </label>
                          <textarea
                            rows={4}
                            className="p-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] resize-y outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Containers for wood waste */}
                  <div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] mb-4">
                      Containers for wood waste
                    </h4>
                    <div className="flex flex-col gap-4">
                      {['LV', 'EN', 'RU'].map((lang) => (
                        <div key={lang} className="flex flex-col gap-2">
                          <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">
                            Agreement content {lang}
                          </label>
                          <textarea
                            rows={4}
                            className="p-3 border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] resize-y outline-none focus:border-[#05376d] focus:ring-1 focus:ring-[#05376d]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-[12px]">
            <button
              onClick={handleSave}
              className="bg-[#05376d] px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                Save changes
              </span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border border-[#e5e5e5] px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#f5f5f5] transition-colors"
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
