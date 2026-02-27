import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const svgPaths = {
p1eb85980: "M5.25718 5.60378C5.24524 5.29335 4.98391 5.05137 4.67348 5.06331C4.36305 5.07524 4.12107 5.33657 4.13301 5.647L4.39251 12.397C4.40444 12.7074 4.66577 12.9494 4.9762 12.9375C5.28663 12.9255 5.52861 12.6642 5.51668 12.3538L5.25718 5.60378ZM9.36718 5.647C9.37911 5.33657 9.13713 5.07524 8.8267 5.06331C8.51627 5.05137 8.25494 5.29335 8.24301 5.60378L7.98351 12.3538C7.97157 12.6642 8.21355 12.9255 8.52398 12.9375C8.83441 12.9494 9.09574 12.7074 9.10768 12.397L9.36718 5.647Z",
p2ae3a500: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
p37073b80: "M6.1875 0C6.49816 0 6.75 0.25184 6.75 0.5625V5.625H11.8125C12.1232 5.625 12.375 5.87684 12.375 6.1875C12.375 6.49816 12.1232 6.75 11.8125 6.75H6.75V11.8125C6.75 12.1232 6.49816 12.375 6.1875 12.375C5.87684 12.375 5.625 12.1232 5.625 11.8125V6.75H0.5625C0.25184 6.75 0 6.49816 0 6.1875C0 5.87684 0.25184 5.625 0.5625 5.625H5.625V0.5625C5.625 0.25184 5.87684 0 6.1875 0Z",
p38978200: "M8.01272 0.0201672C7.17118 -0.00672239 6.329 -0.00672239 5.48746 0.0201672C4.28408 0.0580839 3.37509 1.06034 3.37509 2.23314V2.40322C2.66292 2.46855 1.95277 2.55472 1.24557 2.66163C0.984685 2.70053 0.725465 2.74247 0.466419 2.78742C0.160333 2.84054 -0.0447401 3.13173 0.00837479 3.43781C0.0614897 3.7439 0.352679 3.94897 0.658765 3.89586C0.710856 3.88682 0.76294 3.87791 0.815029 3.86913L1.56925 13.6733C1.61284 14.2385 1.86819 14.7666 2.28424 15.1516C2.70024 15.5367 3.24625 15.7505 3.81309 15.7504H9.68693C10.2538 15.7505 10.7999 15.5367 11.2159 15.1516C11.632 14.7666 11.8873 14.2386 11.9309 13.6734L12.6851 3.86986C12.7372 3.87866 12.7893 3.88757 12.8414 3.89661C13.1475 3.94972 13.4387 3.74465 13.4918 3.43856C13.5449 3.13248 13.3398 2.84129 13.0338 2.78817C12.7745 2.74319 12.5157 2.70131 12.2556 2.66178C11.5483 2.55484 10.8375 2.46857 10.1251 2.40322V2.23314C10.1251 1.05942 9.21594 0.0580788 8.01272 0.0201672ZM9.51925 3.48097C10.2048 3.53404 10.8886 3.60701 11.5699 3.69977L10.8093 13.5869C10.7875 13.8695 10.6598 14.1335 10.4518 14.326C10.2437 14.5186 9.97071 14.6255 9.68726 14.6254H3.81309C3.52964 14.6255 3.25644 14.5186 3.04842 14.326C2.84042 14.1335 2.71275 13.8696 2.69094 13.587L1.93032 3.69977C2.61156 3.60701 3.29539 3.53404 3.98094 3.48097C5.82424 3.33851 7.67594 3.33851 9.51925 3.48097ZM4.50009 2.31748C5.99871 2.22634 7.50148 2.22634 9.00009 2.31748V2.23314C9.00009 1.63697 8.54407 1.16238 7.97746 1.14461C7.15965 1.11848 6.34087 1.11847 5.52306 1.1446C4.95661 1.16237 4.50009 1.63755 4.50009 2.23314V2.31748Z",
p3ff29e00: "M0.21934 0.238708C0.359965 0.0982579 0.550589 0.0193681 0.74934 0.0193681C0.948091 0.0193681 1.13871 0.0982579 1.27934 0.238708L4.99934 3.95871L8.71934 0.238708C8.788 0.165022 8.8708 0.105919 8.9628 0.064927C9.0548 0.023935 9.15412 0.00189351 9.25482 0.000116722C9.35552 -0.00166006 9.45555 0.0168643 9.54894 0.0545854C9.64233 0.0923064 9.72716 0.148451 9.79838 0.21967C9.8696 0.290889 9.92574 0.375722 9.96346 0.46911C10.0012 0.562499 10.0197 0.662527 10.0179 0.76323C10.0162 0.863933 9.99411 0.963247 9.95312 1.05525C9.91213 1.14725 9.85303 1.23005 9.77934 1.29871L5.52934 5.54871C5.38871 5.68916 5.19809 5.76805 4.99934 5.76805C4.80059 5.76805 4.60997 5.68916 4.46934 5.54871L0.21934 1.29871C0.0788894 1.15808 0 0.967459 0 0.768708C0 0.569957 0.0788894 0.379334 0.21934 0.238708Z",
p621a400: "M0.118988 0.118988C0.277638 -0.0396626 0.534862 -0.0396626 0.693512 0.118988L3.65625 3.08173L6.61899 0.118988C6.77764 -0.0396626 7.03486 -0.0396626 7.19351 0.118988C7.35216 0.277638 7.35216 0.534862 7.19351 0.693512L4.23077 3.65625L7.19351 6.61899C7.35216 6.77764 7.35216 7.03486 7.19351 7.19351C7.03486 7.35216 6.77764 7.35216 6.61899 7.19351L3.65625 4.23077L0.693512 7.19351C0.534862 7.35216 0.277638 7.35216 0.118988 7.19351C-0.0396626 7.03486 -0.0396626 6.77764 0.118988 6.61899L3.08173 3.65625L0.118988 0.693512C-0.0396626 0.534862 -0.0396626 0.277638 0.118988 0.118988Z",
};

const companiesList = ['NIKA MI', 'ZOLT', 'Company A', 'Company B'];
const rolesList = ['Super Admin', 'Admin', 'Dispatcher', 'Accountant', 'Sales', 'Marketing'];
const headEmployeesList = ['John Doe', 'Jane Smith', 'Bob Johnson'];

export default function EmployeeEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    companies: ['NIKA MI', 'ZOLT'],
    role: '',
    employeeNumber: '12345',
    headEmployee: '',
    mainPhone: '',
    mainEmail: '',
    active: true
  });

  const [additionalPhones, setAdditionalPhones] = useState<string[]>([]);
  const [additionalEmails, setAdditionalEmails] = useState<string[]>([]);

  const addPhone = () => {
    setAdditionalPhones([...additionalPhones, '']);
  };

  const removePhone = (index: number) => {
    setAdditionalPhones(additionalPhones.filter((_, i) => i !== index));
  };

  const updatePhone = (index: number, value: string) => {
    const updated = [...additionalPhones];
    updated[index] = value;
    setAdditionalPhones(updated);
  };

  const addEmail = () => {
    setAdditionalEmails([...additionalEmails, '']);
  };

  const removeEmail = (index: number) => {
    setAdditionalEmails(additionalEmails.filter((_, i) => i !== index));
  };

  const updateEmail = (index: number, value: string) => {
    const updated = [...additionalEmails];
    updated[index] = value;
    setAdditionalEmails(updated);
  };

  const removeCompany = (company: string) => {
    setFormData({
      ...formData,
      companies: formData.companies.filter(c => c !== company)
    });
  };

  const handleSave = () => {
    console.log('Saving employee:', { ...formData, additionalPhones, additionalEmails });
    navigate('/employers');
  };

  const handleCancel = () => {
    navigate('/employers');
  };

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
                {isEditMode ? 'Edit employer' : 'New employer'}
              </p>
            </div>

            {/* Title and Active Toggle */}
            <div className="flex items-center justify-between w-full">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[30px]">
                {isEditMode ? 'Edit employer' : 'New employer'}
              </h1>
              <div className="flex gap-[12px] items-center">
                <button
                  onClick={() => setFormData({ ...formData, active: !formData.active })}
                  className={`h-[24px] rounded-[100px] w-[45px] relative ${
                    formData.active ? 'bg-[#05376d]' : 'bg-[#e5e5e5]'
                  }`}
                >
                  <div
                    className={`absolute bg-white rounded-[100px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.16)] size-[20px] top-[2px] transition-all ${
                      formData.active ? 'left-[23px]' : 'left-[2px]'
                    }`}
                  />
                </button>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0a0a0a] text-[14px]">
                  Active
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white flex flex-col items-start overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full">
            <div className="flex flex-col gap-[24px] items-start p-6 md:p-[24px] w-full">
              {/* Row 1: Full name and Password */}
              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {/* Row 2: Company and Role */}
              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Company
                  </label>
                  <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] w-full">
                    <div className="flex items-center px-[14px] py-[7px] gap-[10px] min-h-[38px]">
                      <div className="flex flex-wrap gap-[6px_8px] items-start flex-1">
                        {formData.companies.map((company, index) => (
                          <div
                            key={index}
                            className="bg-[#eff6ff] border border-[#dbeafe] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[6px]"
                          >
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#2563eb] text-[14px]">
                              {company}
                            </span>
                            <button onClick={() => removeCompany(company)} className="size-[13px]">
                              <svg className="size-[13px]" fill="none" viewBox="0 0 13 13">
                                <g transform="translate(2.84, 2.84)">
                                  <path clipRule="evenodd" d={svgPaths.p621a400} fill="#2563EB" fillRule="evenodd" />
                                </g>
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 20 20">
                        <g transform="translate(5, 7.2)">
                          <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Role
                  </label>
                  <div className="relative w-full">
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[40px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] w-full appearance-none outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                    >
                      <option value="">Select option</option>
                      {rolesList.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                        <g transform="translate(5, 7.2)">
                          <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Employee number and Head employee */}
              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Employee number
                  </label>
                  <input
                    type="text"
                    value={formData.employeeNumber}
                    readOnly
                    disabled
                    className="bg-[#fafafa] h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] w-full cursor-not-allowed"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px] items-start w-full">
                  <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                    Head employee
                  </label>
                  <div className="relative w-full">
                    <select
                      value={formData.headEmployee}
                      onChange={(e) => setFormData({ ...formData, headEmployee: e.target.value })}
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] pr-[40px] font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] w-full appearance-none outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                    >
                      <option value="">Select employee</option>
                      {headEmployeesList.map(emp => (
                        <option key={emp} value={emp}>{emp}</option>
                      ))}
                    </select>
                    <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                        <g transform="translate(5, 7.2)">
                          <path clipRule="evenodd" d={svgPaths.p3ff29e00} fill="#737373" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Phone and Email */}
              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                {/* Phone Column */}
                <div className="flex-1 flex flex-col gap-[12px] items-start w-full">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                      Main phone
                    </label>
                    <input
                      type="tel"
                      value={formData.mainPhone}
                      onChange={(e) => setFormData({ ...formData, mainPhone: e.target.value })}
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                      placeholder="Enter phone"
                    />
                  </div>

                  {/* Additional Phones */}
                  {additionalPhones.map((phone, index) => (
                    <div key={index} className="flex gap-[10px] items-end w-full">
                      <div className="flex-1 flex flex-col gap-[8px] items-start">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Additional phone
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => updatePhone(index, e.target.value)}
                          className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                          placeholder="Enter phone"
                        />
                      </div>
                      <button
                        onClick={() => removePhone(index)}
                        className="bg-[#fee2e2] flex items-center justify-center h-[38px] w-[38px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                      >
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <g transform="translate(2.25, 1.125)">
                            <path clipRule="evenodd" d={svgPaths.p38978200} fill="#7F1D1D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p1eb85980} fill="#7F1D1D" fillRule="evenodd" />
                          </g>
                        </svg>
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={addPhone}
                    className="bg-white border border-[#e5e5e5] flex gap-[6px] items-center justify-center pl-[10px] pr-[12px] py-[6px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:border-[#2563eb] transition-colors"
                  >
                    <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                      <g transform="translate(2.8125, 2.8125)">
                        <path clipRule="evenodd" d={svgPaths.p37073b80} fill="#1E3A8A" fillRule="evenodd" />
                      </g>
                    </svg>
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                      Additional phone
                    </span>
                  </button>
                </div>

                {/* Email Column */}
                <div className="flex-1 flex flex-col gap-[12px] items-start w-full">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                      Main e-mail
                    </label>
                    <input
                      type="email"
                      value={formData.mainEmail}
                      onChange={(e) => setFormData({ ...formData, mainEmail: e.target.value })}
                      className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#262626] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                      placeholder="Enter email"
                    />
                  </div>

                  {/* Additional Emails */}
                  {additionalEmails.map((email, index) => (
                    <div key={index} className="flex gap-[10px] items-end w-full">
                      <div className="flex-1 flex flex-col gap-[8px] items-start">
                        <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#171717] text-[14px]">
                          Additional e-mail
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => updateEmail(index, e.target.value)}
                          className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] py-[7px] font-['Inter:Regular',sans-serif] text-[14px] text-[#171717] w-full outline-none focus:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_2px_#2563eb]"
                          placeholder="Enter email"
                        />
                      </div>
                      <button
                        onClick={() => removeEmail(index)}
                        className="bg-[#fee2e2] flex items-center justify-center h-[38px] w-[38px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                      >
                        <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                          <g transform="translate(2.25, 1.125)">
                            <path clipRule="evenodd" d={svgPaths.p38978200} fill="#7F1D1D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p1eb85980} fill="#7F1D1D" fillRule="evenodd" />
                          </g>
                        </svg>
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={addEmail}
                    className="bg-white border border-[#e5e5e5] flex gap-[6px] items-center justify-center pl-[10px] pr-[12px] py-[6px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:border-[#2563eb] transition-colors"
                  >
                    <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                      <g transform="translate(2.8125, 2.8125)">
                        <path clipRule="evenodd" d={svgPaths.p37073b80} fill="#1E3A8A" fillRule="evenodd" />
                      </g>
                    </svg>
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#262626] text-[14px]">
                      Additional e-mail
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[12px] items-center pb-[12px]">
            <button
              onClick={handleSave}
              className="bg-[#05376d] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#042c5a] transition-colors"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px]">
                Save changes
              </span>
            </button>
            <button
              onClick={handleCancel}
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
