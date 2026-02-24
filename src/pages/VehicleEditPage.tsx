import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const svgPaths = {
p26e2b7f0: "M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84522 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13937 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z",
p38e5e800: "M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z",
} as const;

export default function VehicleEditPage() {
  const { providerId, vehicleId } = useParams();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    regNumber: 'NM(Y4R',
    technicalPassport: 'NM(Y4R',
    vehicleType: '',
    brand: '',
    loadCapacity: '',
    pricePerMin: '',
    pricePerKm: '',
    navirec: '',
    isActive: true,
    isAvailable: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет отправка данных на сервер
    console.log('Saving vehicle data:', formData);
    navigate(`/companies/${providerId}/vehicles/${vehicleId}`);
  };

  const handleCancel = () => {
    navigate(`/companies/${providerId}/vehicles/${vehicleId}`);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full">
      {/* Main Container */}
      <div className="content-stretch flex flex-col items-center pb-[32px] sm:pb-[48px] px-4 sm:px-6 md:px-8 lg:px-[32px] w-full">
        <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-start max-w-[1220px] w-full">
          {/* Breadcrumbs and Header */}
          <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] items-start pt-4 sm:pt-6 md:pt-[32px] w-full">
            {/* Breadcrumbs */}
            <div className="content-stretch flex items-start w-full overflow-x-auto scrollbar-hide">
              <button
                onClick={() => navigate('/companies')}
                className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap">
                  Companies
                </p>
              </button>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  SIA "NIKA MI"
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <button
                  onClick={() => navigate(`/companies/${providerId}`)}
                  className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] hover:text-[#171717] whitespace-nowrap"
                >
                  Vehicles
                </button>
              </div>
              <div className="flex gap-[10px] sm:gap-[14px] items-center justify-center pr-[10px] sm:pr-[14px] rounded-[8px] shrink-0">
                <svg className="size-[16px] sm:size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p38e5e800} fill="#A3A3A3" fillRule="evenodd" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#737373] text-[13px] sm:text-[14px] whitespace-nowrap">
                  {formData.regNumber}
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="content-stretch flex items-center justify-between w-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] text-[#171717] text-[20px] sm:text-[24px] md:text-[30px]">
                <p className="leading-[24px] sm:leading-[28px] md:leading-[32px]">{formData.regNumber}</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white w-full rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] overflow-hidden">
            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start p-4 sm:p-5 md:p-[24px] w-full">
              {/* Row 1: Registration number, Technical passport, Toggles */}
              <div className="content-stretch flex flex-col gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Registration and Technical passport */}
                <div className="content-stretch flex flex-col sm:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                  {/* Registration number */}
                  <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                      Registration number
                    </label>
                    <input
                      type="text"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>

                  {/* Technical passport number */}
                  <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                      Technical passport number
                    </label>
                    <input
                      type="text"
                      value={formData.technicalPassport}
                      onChange={(e) => setFormData({ ...formData, technicalPassport: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    />
                  </div>
                </div>

                {/* Toggles */}
                <div className="content-stretch flex flex-col xs:flex-row gap-[16px] sm:gap-[24px] items-start w-full">
                  {/* Active Toggle */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                    className="flex gap-[12px] items-center"
                  >
                    <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${formData.isActive ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                      <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${formData.isActive ? 'left-[23px]' : 'left-[2px]'}`} />
                    </div>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Active
                    </span>
                  </button>

                  {/* Available Toggle */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isAvailable: !formData.isAvailable })}
                    className="flex gap-[12px] items-center"
                  >
                    <div className={`h-[24px] overflow-clip relative rounded-[100px] w-[45px] ${formData.isAvailable ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'}`}>
                      <div className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${formData.isAvailable ? 'left-[23px]' : 'left-[2px]'}`} />
                    </div>
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                      Available
                    </span>
                  </button>
                </div>
              </div>

              {/* Row 2: Vehicle type, Brand, Load capacity */}
              <div className="content-stretch flex flex-col md:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Vehicle type */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Vehicle type
                  </label>
                  <div className="relative w-full">
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                    >
                      <option value="">Select type</option>
                      <option value="skip">Skip</option>
                      <option value="truck">Truck</option>
                      <option value="van">Van</option>
                    </select>
                    <svg className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[20px] pointer-events-none" fill="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p26e2b7f0} fill="#737373" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Brand */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Brand
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder=""
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>

                {/* Load capacity */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Load capacity (in tons)
                  </label>
                  <input
                    type="text"
                    value={formData.loadCapacity}
                    onChange={(e) => setFormData({ ...formData, loadCapacity: e.target.value })}
                    placeholder=""
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>
              </div>

              {/* Row 3: Price per minute, Price per kilometer */}
              <div className="content-stretch flex flex-col sm:flex-row gap-[20px] sm:gap-[24px] items-start w-full">
                {/* Price per minute */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Price per minute
                  </label>
                  <input
                    type="text"
                    value={formData.pricePerMin}
                    onChange={(e) => setFormData({ ...formData, pricePerMin: e.target.value })}
                    placeholder=""
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>

                {/* Price per kilometer */}
                <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-0 w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Price per kilometer
                  </label>
                  <input
                    type="text"
                    value={formData.pricePerKm}
                    onChange={(e) => setFormData({ ...formData, pricePerKm: e.target.value })}
                    placeholder=""
                    className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                  />
                </div>
              </div>

              {/* Navirec */}
              <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                  Navirec
                </label>
                <input
                  type="text"
                  value={formData.navirec}
                  onChange={(e) => setFormData({ ...formData, navirec: e.target.value })}
                  placeholder=""
                  className="bg-white h-[38px] w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#05376d]"
                />
                <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#737373] text-[13px] sm:text-[14px]">
                  Integration keys / IDs for receiving data about vehicles and/or containers
                </p>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex items-start w-full">
            <div className="content-stretch flex flex-col xs:flex-row gap-[12px] items-center w-full xs:w-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#04305c] transition-colors w-full xs:w-auto"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[14px] text-white">
                  Save changes
                </span>
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="bg-white flex items-center justify-center px-[16px] py-[8px] rounded-[8px] border border-[#e5e5e5] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-colors w-full xs:w-auto"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                  Cancel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
