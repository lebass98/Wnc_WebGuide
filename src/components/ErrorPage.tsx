import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, RotateCcw, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

interface ErrorPageProps {
  code: '404' | '500' | '503';
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code }) => {
  const navigate = useNavigate();

  const errorData = {
    '404': {
      title: 'Page Not Found',
      subtitle: '원하시는 페이지를 찾을 수 없습니다.',
      description: '입력하신 주소가 잘못되었거나, 페이지가 삭제 혹은 이동되었을 수 있습니다. 주소를 다시 한번 확인해 주세요.',
      icon: <ShieldAlert className="w-16 h-16 text-rose-500 animate-bounce" />,
      colorClass: 'text-rose-500 border-rose-100 dark:border-rose-900/30 bg-rose-50 dark:bg-rose-500/10',
      actionText: '대시보드로 돌아가기',
      illustration: (
        <svg className="w-full max-w-[320px] h-auto mx-auto mb-6 opacity-90 dark:opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="url(#paint0_linear_404)" className="animate-pulse" />
          <path d="M70 120 C 85 105, 115 105, 130 120" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <circle cx="75" cy="80" r="10" fill="white" />
          <circle cx="125" cy="80" r="10" fill="white" />
          <path d="M65 60 L 85 70" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M135 60 L 115 70" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <defs>
            <linearGradient id="paint0_linear_404" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F43F5E" />
              <stop offset="1" stopColor="#BE123C" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    '500': {
      title: 'Internal Server Error',
      subtitle: '서버 내부 오류가 발생했습니다.',
      description: '웹서버가 일시적인 요청 과부하 상태이거나 시스템 내부 점검 중입니다. 서비스 이용에 불편을 드려 대단히 죄송합니다.',
      icon: <AlertTriangle className="w-16 h-16 text-amber-500 animate-pulse" />,
      colorClass: 'text-amber-500 border-amber-100 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-500/10',
      actionText: '새로고침 시도',
      illustration: (
        <svg className="w-full max-w-[320px] h-auto mx-auto mb-6 opacity-90 dark:opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="30" width="140" height="140" rx="20" fill="url(#paint0_linear_500)" />
          <path d="M60 85 L 140 85 M60 115 L 140 115" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <circle cx="80" cy="85" r="4" fill="#F59E0B" className="animate-ping" />
          <circle cx="120" cy="115" r="4" fill="#F59E0B" className="animate-ping" />
          <defs>
            <linearGradient id="paint0_linear_500" x1="30" y1="30" x2="170" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    '503': {
      title: 'Service Unavailable',
      subtitle: '서비스 점검 중입니다.',
      description: '더 나은 서비스를 제공하기 위해 현재 시스템 점검 및 서버 업그레이드 작업이 진행 중입니다. 곧 안전하고 빠른 서비스로 찾아뵙겠습니다.',
      icon: <Cpu className="w-16 h-16 text-indigo-500 animate-spin-slow" style={{ animationDuration: '6s' }} />,
      colorClass: 'text-indigo-500 border-indigo-100 dark:border-indigo-900/30 bg-indigo-50 dark:bg-indigo-500/10',
      actionText: '대시보드로 돌아가기',
      illustration: (
        <svg className="w-full max-w-[320px] h-auto mx-auto mb-6 opacity-90 dark:opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#paint0_linear_503)" />
          <path d="M100 20 L 100 40 M100 160 L 100 180 M20 100 L 40 100 M160 100 L 180 100" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" className="animate-pulse" />
          <circle cx="100" cy="100" r="30" fill="white" fillOpacity="0.2" />
          <circle cx="100" cy="100" r="15" fill="white" className="animate-ping" />
          <defs>
            <linearGradient id="paint0_linear_503" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
        </svg>
      )
    }
  };

  const currentError = errorData[code];

  const handleAction = () => {
    if (code === '500') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-16 transition-colors duration-300 font-sans">
      <div className="w-full max-w-xl text-center space-y-8 bg-white dark:bg-[#1A222C] p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-300">
        
        {/* Error Badge & Illustration */}
        <div className="relative">
          {currentError.illustration}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-full border shadow-lg bg-white dark:bg-[#18202b] ${currentError.colorClass}`}>
            {currentError.icon}
          </div>
        </div>

        {/* Code Label */}
        <div className="space-y-3 pt-6">
          <span className="text-[64px] font-black tracking-widest text-slate-300 dark:text-slate-700 leading-none">
            {code}
          </span>
          <h2 className="text-[26px] font-extrabold text-slate-800 dark:text-white leading-tight">
            {currentError.title}
          </h2>
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300">
            {currentError.subtitle}
          </p>
          <p className="text-sm font-medium text-slate-400 dark:text-slate-500 max-w-md mx-auto leading-relaxed">
            {currentError.description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            이전으로
          </button>
          
          <button
            onClick={handleAction}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#4B62FA] hover:bg-indigo-600 rounded-xl text-sm font-bold text-white transition-all shadow-lg shadow-indigo-100 dark:shadow-none cursor-pointer"
          >
            {code === '500' ? <RotateCcw className="w-4 h-4" /> : <Home className="w-4 h-4" />}
            {currentError.actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
