import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
const svgPaths = {
p2ae3a500: "M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684094 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684095 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z",
p58a0400: "M0.276203 0.251252C0.634498 -0.0932623 1.20424 -0.0820909 1.54875 0.276204L6 5.0015L10.4513 0.276203C10.7958 -0.0820913 11.3655 -0.0932628 11.7238 0.251251C12.0821 0.595765 12.0933 1.1655 11.7487 1.5238L6.64875 6.9238C6.47907 7.10027 6.24482 7.2 6 7.2C5.75519 7.2 5.52093 7.10027 5.35125 6.9238L0.251251 1.5238C-0.0932627 1.1655 -0.0820913 0.595766 0.276203 0.251252Z",
p74be300: "M9.75 1.5C7.56196 1.5 5.46354 2.36919 3.91637 3.91637C2.36919 5.46354 1.5 7.56196 1.5 9.75C1.5 10.8334 1.71339 11.9062 2.12799 12.9071C2.54259 13.9081 3.15029 14.8175 3.91637 15.5836C4.68245 16.3497 5.59193 16.9574 6.59286 17.372C7.5938 17.7866 8.66659 18 9.75 18C10.8334 18 11.9062 17.7866 12.9071 17.372C13.9081 16.9574 14.8175 16.3497 15.5836 15.5836C16.3497 14.8175 16.9574 13.9081 17.372 12.9071C17.7866 11.9062 18 10.8334 18 9.75C18 7.56196 17.1308 5.46354 15.5836 3.91637C14.0365 2.36919 11.938 1.5 9.75 1.5ZM2.85571 2.85571C4.68419 1.02723 7.16414 0 9.75 0C12.3359 0 14.8158 1.02723 16.6443 2.85571C18.4728 4.68419 19.5 7.16414 19.5 9.75C19.5 11.0304 19.2478 12.2982 18.7578 13.4812C18.2678 14.6641 17.5497 15.7389 16.6443 16.6443C15.7389 17.5497 14.6641 18.2678 13.4812 18.7578C12.2982 19.2478 11.0304 19.5 9.75 19.5C8.46961 19.5 7.20176 19.2478 6.01884 18.7578C4.83591 18.2678 3.76108 17.5497 2.85571 16.6443C1.95034 15.7389 1.23216 14.6641 0.742174 13.4812C0.252191 12.2982 0 11.0304 0 9.75C5.96046e-08 7.16414 1.02723 4.68419 2.85571 2.85571ZM13.1859 6.8897C13.523 7.13046 13.6011 7.59887 13.3603 7.93593L9.6103 13.1859C9.48216 13.3653 9.28157 13.4793 9.06186 13.4974C8.84215 13.5156 8.62556 13.4362 8.46967 13.2803L6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967C6.51256 9.67678 6.98744 9.67678 7.28033 9.96967L8.9043 11.5936L12.1397 7.06407C12.3805 6.72701 12.8489 6.64894 13.1859 6.8897Z",
p79f0400: "M13.2188 1.125C12.9949 1.125 12.7803 1.21391 12.622 1.37218L11.7544 2.24032L12.9476 3.43357L13.8155 2.56569C13.9738 2.40742 14.0627 2.19276 14.0627 1.96894C14.0627 1.74511 13.9738 1.53045 13.8155 1.37218C13.6572 1.21391 13.4426 1.125 13.2188 1.125ZM12.1521 4.22906L10.959 3.03591L4.65786 9.33632C4.65782 9.33636 4.65791 9.33627 4.65786 9.33632C4.32771 9.66671 4.08489 10.0743 3.95161 10.5219L3.64854 11.5391L4.66563 11.2361C5.11331 11.1028 5.52085 10.8601 5.85125 10.5299C5.85129 10.5299 5.85121 10.53 5.85125 10.5299L12.1521 4.22906ZM11.8264 0.576806C12.1956 0.207559 12.6966 0 13.2188 0C13.7409 0 14.2418 0.207441 14.611 0.576688C14.9802 0.945935 15.1877 1.44674 15.1877 1.96894C15.1877 2.49113 14.9802 2.99194 14.611 3.36118L6.64675 11.3254C6.18418 11.7877 5.61365 12.1276 4.98687 12.3143C4.98683 12.3143 4.98691 12.3143 4.98687 12.3143L2.97312 12.9143C2.77517 12.9732 2.56081 12.919 2.41475 12.7729C2.2687 12.6269 2.21444 12.4125 2.27342 12.2146L2.87339 10.2009C2.8734 10.2009 2.87337 10.201 2.87339 10.2009C3.06001 9.57415 3.39984 9.00362 3.86214 8.54105L11.8264 0.576806ZM2.25 3.93769C1.95163 3.93769 1.66548 4.05621 1.4545 4.26719C1.24353 4.47817 1.125 4.76432 1.125 5.06269V12.9377C1.125 13.2361 1.24353 13.5222 1.4545 13.7332C1.66548 13.9442 1.95163 14.0627 2.25 14.0627H10.125C10.4234 14.0627 10.7095 13.9442 10.9205 13.7332C11.1315 13.5222 11.25 13.2361 11.25 12.9377V9.37519C11.25 9.06453 11.5018 8.81269 11.8125 8.81269C12.1232 8.81269 12.375 9.06453 12.375 9.37519V12.9377C12.375 13.5344 12.1379 14.1067 11.716 14.5287C11.294 14.9506 10.7217 15.1877 10.125 15.1877H2.25C1.65326 15.1877 1.08097 14.9506 0.65901 14.5287C0.237053 14.1067 0 13.5344 0 12.9377V5.06269C0 4.46595 0.237053 3.89365 0.65901 3.4717C1.08097 3.04974 1.65326 2.81269 2.25 2.81269H5.8125C6.12316 2.81269 6.375 3.06453 6.375 3.37519C6.375 3.68585 6.12316 3.93769 5.8125 3.93769H2.25Z",
};

// Mock data - в реальном приложении данные берутся из API
const employeeData = {
  id: 1,
  name: 'Janis Andreev',
  company: 'NIKA MI',
  email: 'email@email.lv',
  phone: '+999 999 99 99',
  employeeNumber: '12345',
  roles: ['Sales', 'Marketing', 'Admin', 'Dispatcher'],
  status: 'active',
  registrationDate: '18/07/2024',
  lastLogin: '18/07/2024',
  roleHistory: [
    {
      date: '10.12.25 20:20',
      location: 'Windows, Riga',
      action: 'New role',
      role: 'Admin',
      addedBy: 'Admin',
      addedByName: 'Dmitrii Andreev'
    },
    {
      date: '10.12.25 20:20',
      location: 'Windows, Riga',
      action: 'New role',
      roles: ['Sales', 'Marketing', 'Dispatcher'],
      addedBy: 'self'
    }
  ],
  loginHistory: [
    {
      date: '10.12.25 19:20',
      status: 'success',
      location: 'Windows',
      city: 'Riga'
    },
    {
      date: '10.12.25 18:45',
      status: 'password-reset',
      location: 'Windows',
      city: 'Riga'
    },
    {
      date: '10.12.25 18:20',
      status: 'failed',
      location: 'Windows',
      city: 'Riga'
    }
  ],
  changelog: [
    {
      date: '10.12.25 20:20',
      location: 'Windows, Riga',
      field: 'Phone',
      oldValue: '[Promo name]',
      action: 'applied in',
      order: '1234510'
    },
    {
      date: '10.12.25 20:20',
      location: 'Windows, Riga',
      invoices: ['123458', '123458', '1234510', '1234511'],
      action: 'exported'
    },
    {
      date: '10.12.25 20:20',
      invoice: '123458',
      action: 'related to order',
      order: '123458',
      generated: true
    },
    {
      date: '10.12.25 20:20',
      location: 'Windows, Riga',
      client: '[Client name]',
      action: 'Blocked'
    }
  ]
};

export default function EmployeeViewPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showRoleHistory, setShowRoleHistory] = useState(true);
  const [showLoginHistory, setShowLoginHistory] = useState(true);
  const [showChangelog, setShowChangelog] = useState(true);

  return (
    <div className="bg-[#fafafa] min-h-screen w-full pb-8">
      <div className="content-stretch flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[110px] w-full">
        {/* Page Header */}
        <div className="content-stretch flex flex-col gap-[14px] items-start pt-6 md:pt-[32px] w-full max-w-[1220px]">
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
              {employeeData.name}
            </p>
          </div>

          {/* Title and Actions */}
          <div className="flex items-center justify-between w-full">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] text-[#171717] text-[30px]">
              {employeeData.name}
            </h1>
            <div className="flex gap-[16px] items-center">
              <button className="bg-[#dbeafe] flex items-center justify-center px-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1e3a8a] text-[14px]">
                  Reset password
                </span>
              </button>
              <button 
                onClick={() => navigate(`/employers/${id}/edit`)}
                className="bg-[#05376d] flex gap-[6px] items-center justify-center pl-[14px] pr-[16px] py-[8px] rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)]"
              >
                <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                  <g transform="translate(1.4, 1.6)">
                    <path clipRule="evenodd" d={svgPaths.p79f0400} fill="white" fillRule="evenodd" />
                  </g>
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px]">
                  Edit
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Info Card */}
        <div className="bg-white flex flex-col gap-[22px] items-start p-[24px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full max-w-[1220px] mt-6">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Full name
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.name}
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Role
              </p>
              <div className="flex gap-[8px] flex-wrap mt-1">
                {employeeData.roles.map((role, index) => (
                  <div key={index} className="bg-[#eff6ff] border border-[#bfdbfe] px-[6px] py-[2px] rounded-[6px]">
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#2563eb] text-[14px]">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-[12px] items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Company
              </p>
              <div className="bg-[#eff6ff] border border-[#bfdbfe] px-[6px] py-[2px] rounded-[6px] mt-1">
                <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#2563eb] text-[14px]">
                  {employeeData.company}
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Status
              </p>
              <svg className="size-[24px] mt-1" fill="none" viewBox="0 0 24 24">
                <g transform="translate(2.25, 2.25)">
                  <path clipRule="evenodd" d={svgPaths.p74be300} fill="#22C55E" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex gap-[12px] items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                E-mail
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.email}
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Phone
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.phone}
              </p>
            </div>
          </div>

          <div className="flex gap-[12px] items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Employee number
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.employeeNumber}
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Phone
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.phone}
              </p>
            </div>
          </div>

          <div className="flex gap-[12px] items-start w-full">
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Registration date
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.registrationDate}
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#171717] text-[14px]">
                Last login
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#171717] text-[14px]">
                {employeeData.lastLogin}
              </p>
            </div>
          </div>
        </div>

        {/* Role History */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full max-w-[1220px] mt-6">
          <button
            onClick={() => setShowRoleHistory(!showRoleHistory)}
            className="flex items-center justify-between px-[24px] py-[16px] w-full"
          >
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
              Role history
            </h2>
            <svg className={`size-[24px] transition-transform ${showRoleHistory ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
              <g transform="translate(6, 8.4)">
                <path clipRule="evenodd" d={svgPaths.p58a0400} fill="#A3A3A3" fillRule="evenodd" />
              </g>
            </svg>
          </button>
          
          {showRoleHistory && (
            <>
              <div className="h-px bg-[#e5e5e5] w-full" />
              <div className="flex flex-col gap-[22px] p-[24px]">
                {employeeData.roleHistory.map((item, index) => (
                  <div key={index} className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] p-[24px]">
                    <div className="flex gap-[12px] text-[16px] mb-4">
                      <span className="font-['Inter:Regular',sans-serif] text-[#171717]">{item.date}</span>
                      <span className="font-['Inter:Regular',sans-serif] text-[#a3a3a3]">{item.location}</span>
                    </div>
                    <div className="flex gap-[8px] items-center flex-wrap">
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">{item.action}</span>
                      {item.role && (
                        <div className="bg-[#fafafa] border border-[#e5e5e5] px-[6px] py-[2px] rounded-[6px]">
                          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px]">
                            {item.role}
                          </span>
                        </div>
                      )}
                      {item.roles && item.roles.map((role, i) => (
                        <div key={i} className="bg-[#fafafa] border border-[#e5e5e5] px-[6px] py-[2px] rounded-[6px]">
                          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px]">
                            {role}
                          </span>
                        </div>
                      ))}
                      {item.addedBy && item.addedBy !== 'self' && (
                        <>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">added by</span>
                          <div className="bg-[#fafafa] border border-[#e5e5e5] px-[6px] py-[2px] rounded-[6px]">
                            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px]">
                              {item.addedBy}
                            </span>
                          </div>
                          {item.addedByName && (
                            <div className="bg-[#eff6ff] border border-[#bfdbfe] px-[6px] py-[2px] rounded-[6px]">
                              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#525252] text-[14px]">
                                {item.addedByName}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                      {item.addedBy === 'self' && (
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">added by self</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Login History */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full max-w-[1220px] mt-6">
          <button
            onClick={() => setShowLoginHistory(!showLoginHistory)}
            className="flex items-center justify-between px-[24px] py-[16px] w-full"
          >
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
              Login history
            </h2>
            <svg className={`size-[24px] transition-transform ${showLoginHistory ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
              <g transform="translate(6, 8.4)">
                <path clipRule="evenodd" d={svgPaths.p58a0400} fill="#A3A3A3" fillRule="evenodd" />
              </g>
            </svg>
          </button>

          {showLoginHistory && (
            <>
              <div className="h-px bg-[#e5e5e5] w-full" />
              <div className="flex flex-col p-[24px] gap-[16px]">
                {employeeData.loginHistory.map((item, index) => (
                  <div
                    key={index}
                    className={`p-[16px] rounded-[8px] ${
                      item.status === 'success'
                        ? 'bg-[#f0fdf4]'
                        : item.status === 'password-reset'
                        ? 'bg-[#eff6ff]'
                        : 'bg-[#fef2f2]'
                    }`}
                  >
                    <div className="flex gap-[12px] text-[16px] mb-2">
                      <span className="font-['Inter:Regular',sans-serif] text-[#171717]">{item.date}</span>
                    </div>
                    <div className="flex gap-[8px] items-center">
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                        {item.status === 'success'
                          ? 'Successful login from'
                          : item.status === 'password-reset'
                          ? 'Password reset from'
                          : 'Unsuccessful login from'}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                        {item.location}
                      </span>
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
                        {item.city}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Changelog */}
        <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] w-full max-w-[1220px] mt-6">
          <button
            onClick={() => setShowChangelog(!showChangelog)}
            className="flex items-center justify-between px-[24px] py-[16px] w-full"
          >
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#171717] text-[18px]">
              Changelog
            </h2>
            <svg className={`size-[24px] transition-transform ${showChangelog ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
              <g transform="translate(6, 8.4)">
                <path clipRule="evenodd" d={svgPaths.p58a0400} fill="#A3A3A3" fillRule="evenodd" />
              </g>
            </svg>
          </button>

          {showChangelog && (
            <>
              <div className="h-px bg-[#e5e5e5] w-full" />
              <div className="flex flex-col gap-[16px] p-[24px]">
                {employeeData.changelog.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-[12px] text-[16px] mb-2">
                      <span className="font-['Inter:Regular',sans-serif] text-[#171717]">{item.date}</span>
                      {item.location && (
                        <span className="font-['Inter:Regular',sans-serif] text-[#a3a3a3]">{item.location}</span>
                      )}
                    </div>
                    <div className="flex gap-[8px] items-center flex-wrap">
                      {item.field && (
                        <>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">{item.field}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">{item.oldValue}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">{item.action}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">Order</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">{item.order}</span>
                        </>
                      )}
                      {item.invoices && (
                        <>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">Invoices</span>
                          {item.invoices.map((inv, i) => (
                            <span key={i} className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">
                              {inv}
                              {i < item.invoices!.length - 1 ? ',' : ''}
                            </span>
                          ))}
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">
                            were {item.action}
                          </span>
                        </>
                      )}
                      {item.invoice && !item.invoices && (
                        <>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">Invoice</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">{item.invoice}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">{item.action}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">{item.order}</span>
                          {item.generated && (
                            <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">was generated</span>
                          )}
                        </>
                      )}
                      {item.client && (
                        <>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">Client</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2563eb]">{item.client}</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#171717]">was</span>
                          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#dc2626]">{item.action}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}