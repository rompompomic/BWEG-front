import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const svgPaths = {
  p15e9dd00:
    'M46.3392 9.03931H41.4442L33.2449 23.711L25.0194 9.06691L25.0036 9.03931H20.1443L33.1987 32.3839L33.2455 32.4678L35.7063 28.0576L46.2934 9.12054L46.3392 9.03931Z',
  p18710d80: 'M51.7535 9.03931L48.1602 15.4665L39.9787 30.0808L38.6467 32.4678H43.5684L56.6748 9.03931H51.7535Z',
  p1dab7000: 'M71.7281 18.543H58.9969V22.9602H71.7281V18.543Z',
  p1e768c00: 'M77.2295 9.03931H58.9969V13.4565H77.2295V9.03931Z',
  p1f811400:
    'M96.2609 27.2984C94.9778 28.0321 93.4716 28.4037 91.7805 28.4037C90.2493 28.4037 88.8531 28.0665 87.6306 27.4013C86.417 26.7409 85.4539 25.8198 84.7679 24.6619C84.0819 23.505 83.7344 22.19 83.7344 20.7533C83.7344 19.3167 84.0819 17.9703 84.7679 16.8134C85.4539 15.6571 86.4154 14.7413 87.6274 14.0914C88.8507 13.4352 90.259 13.1029 91.8112 13.1029C94.11 13.1029 96.0968 13.8844 97.7161 15.4256L98.1702 15.8589L101.011 13.0546L100.58 12.5853C99.5171 11.4268 98.2098 10.5349 96.6956 9.93389C95.1967 9.34034 93.5112 9.03931 91.6868 9.03931C89.3589 9.03931 87.2307 9.54261 85.3609 10.5354C83.4799 11.5346 81.9843 12.9463 80.9145 14.7301C79.8455 16.5145 79.3037 18.541 79.3037 20.7538C79.3037 22.9666 79.846 24.9894 80.9161 26.7632C81.9835 28.5349 83.4726 29.9449 85.3416 30.9547C87.2016 31.9592 89.3153 32.4683 91.6238 32.4683C93.2486 32.4683 94.8323 32.2183 96.3312 31.7256C97.8389 31.2292 99.1826 30.5051 100.323 29.5733L100.565 29.3758V19.9723H96.2601L96.2609 27.2984Z',
  p24345fc0:
    'M18.9034 21.8857C18.3522 21.1781 17.6554 20.6127 16.8267 20.1991C17.3149 19.7987 17.7352 19.3215 18.08 18.7741C18.677 17.8285 18.9796 16.6993 18.9796 15.4177C18.9796 13.4141 18.2009 11.8213 16.6643 10.6836C15.1898 9.59256 13.1077 9.03882 10.4756 9.03882H0.00193398V32.4795H11.1024C13.9607 32.4795 16.1882 31.9173 17.7232 30.8082C19.3254 29.6498 20.1378 27.9812 20.1378 25.848C20.1378 24.2711 19.7221 22.938 18.9034 21.8857ZM13.534 17.8938C12.7825 18.4146 11.659 18.6791 10.195 18.6791H4.43237V12.9139H10.195C11.6595 12.9139 12.7825 13.1783 13.5334 13.6991C14.2266 14.1801 14.5492 14.8464 14.5492 15.7962C14.5492 16.746 14.2271 17.4129 13.534 17.8938ZM4.43185 22.5547H10.9769C15.1887 22.5547 15.6759 24.2897 15.6759 25.5952C15.6759 26.6459 15.3422 27.3546 14.6264 27.8256C13.8413 28.3422 12.6138 28.6039 10.9769 28.6039H4.43237L4.43185 22.5547Z',
  p2ce25e70:
    'M0.0750104 6.41391C1.31439 2.68809 4.82876 0 8.9726 0C13.1145 0 16.6275 2.6856 17.8685 6.40871C17.9687 6.7096 17.9688 7.03515 17.8687 7.33609C16.6294 11.0619 13.115 13.75 8.97114 13.75C4.82923 13.75 1.3162 11.0644 0.0752834 7.34129C-0.0250012 7.04041 -0.0250966 6.71486 0.0750104 6.41391ZM13.3472 6.875C13.3472 9.29125 11.3884 11.25 8.97217 11.25C6.55592 11.25 4.59717 9.29125 4.59717 6.875C4.59717 4.45875 6.55592 2.5 8.97217 2.5C11.3884 2.5 13.3472 4.45875 13.3472 6.875Z',
  p379af900:
    'M12.6897 4.27586C13.0896 4.65675 13.105 5.28972 12.7241 5.68966L7.00985 11.6897C6.82111 11.8878 6.55939 12 6.28571 12C6.01204 12 5.75032 11.8878 5.56158 11.6897L3.27586 9.28966C2.89498 8.88972 2.91041 8.25675 3.31034 7.87586C3.71028 7.49498 4.34325 7.51041 4.72414 7.91035L6.28571 9.55L11.2759 4.31034C11.6567 3.91041 12.2897 3.89498 12.6897 4.27586Z',
  p8207f80: 'M8.97217 9.375C10.3529 9.375 11.4722 8.25571 11.4722 6.875C11.4722 5.49429 10.3529 4.375 8.97217 4.375C7.59146 4.375 6.47217 5.49429 6.47217 6.875C6.47217 8.25571 7.59146 9.375 8.97217 9.375Z',
  p3103b000: 'M77.2295 28.0474H58.9969V32.4677H77.2295V28.0474Z',
} as const;

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      email: 'filament@mail.com',
      password: '',
      rememberMe: true
    }
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
    // Mock login - redirect to providers page
    navigate('/providers');
  };

  return (
    <div className="bg-[#fafafa] min-h-screen w-full flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[514px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#ececee] p-[48px] flex flex-col gap-[28px]">
        {/* Logo and Title */}
        <div className="flex flex-col gap-[20px] items-center w-full">
          <div className="h-[40px] w-[101px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.011 40">
              <g>
                <path d={svgPaths.p1e768c00} fill="#05376D" />
                <path d={svgPaths.p3103b000} fill="#05376D" />
                <path d={svgPaths.p1dab7000} fill="#05376D" />
                <path d={svgPaths.p24345fc0} fill="#05376D" />
                <path d={svgPaths.p1f811400} fill="#05376D" />
                <path d={svgPaths.p18710d80} fill="#05376D" />
                <path d={svgPaths.p15e9dd00} fill="#05376D" />
              </g>
            </svg>
          </div>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#171717] text-[24px] leading-[32px] text-center">
            Sign in
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px] w-full">
          {/* Email Field */}
          <div className="flex flex-col gap-[8px] w-full">
            <label className="flex gap-[2px] items-start font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">
              <span className="text-[#171717]">Email address</span>
              <span className="text-[#dc2626] text-[12px]">*</span>
            </label>
            <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] flex items-center">
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="filament@mail.com"
                className="w-full h-full text-[#171717] text-[14px] font-['Inter:Regular',sans-serif] outline-none bg-transparent"
              />
            </div>
            {errors.email && (
              <p className="text-[#dc2626] text-[12px] font-['Inter:Regular',sans-serif]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-[8px] w-full">
            <div className="flex items-start justify-between w-full">
              <label className="flex gap-[2px] items-start font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px]">
                <span className="text-[#171717]">Password</span>
                <span className="text-[#dc2626] text-[12px]">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowForgotPasswordModal(true)}
                className="font-['Inter:Medium',sans-serif] font-medium text-[#05376d] text-[14px] leading-[20px] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="bg-white h-[38px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06),0px_0px_0px_1px_#e5e5e5] px-[14px] flex items-center gap-[10px]">
              <input
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••"
                className="flex-1 h-full text-[#171717] text-[14px] font-['Inter:Regular',sans-serif] outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center size-[20px] shrink-0"
              >
                <svg className="size-full" fill="none" viewBox="0 0 20 20">
                  <g transform="translate(1.03, 3.125)">
                    <path d={svgPaths.p8207f80} fill="#A3A3A3" />
                    <path clipRule="evenodd" d={svgPaths.p2ce25e70} fill="#A3A3A3" fillRule="evenodd" />
                  </g>
                </svg>
              </button>
            </div>
            {errors.password && (
              <p className="text-[#dc2626] text-[12px] font-['Inter:Regular',sans-serif]">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex gap-[12px] items-start w-full">
            <label className="flex gap-[12px] items-start cursor-pointer pt-[2px]">
              <div className="relative size-[16px] shrink-0">
                <input
                  {...register('rememberMe')}
                  type="checkbox"
                  className="peer sr-only"
                />
                <div className="size-[16px] rounded-[4px] border border-[#e5e5e5] bg-white shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] peer-checked:bg-[#05376d] peer-checked:border-[#05376d] transition-colors" />
                <svg 
                  className="absolute inset-0 size-[16px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" 
                  fill="none" 
                  viewBox="0 0 16 16"
                >
                  <path 
                    clipRule="evenodd" 
                    d={svgPaths.p379af900} 
                    fill="white" 
                    fillRule="evenodd" 
                  />
                </svg>
              </div>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0a0a0a] text-[14px] leading-[20px]">
                Remember me
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#05376d] text-white w-full rounded-[8px] shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.05)] px-[16px] py-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] leading-[20px] text-center hover:bg-[#042d5a] transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>

      {/* Forgot Password Modal Placeholder */}
      {showForgotPasswordModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowForgotPasswordModal(false)}
        >
          <div 
            className="bg-white rounded-[12px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.14)] p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#171717] mb-4">
              Reset Password
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#404040] mb-4">
              Please contact your administrator to reset your password.
            </p>
            <button
              onClick={() => setShowForgotPasswordModal(false)}
              className="bg-[#05376d] text-white w-full rounded-[8px] px-4 py-2 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#042d5a] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
