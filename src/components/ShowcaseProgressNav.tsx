import React, { useState } from 'react';
import { 
  ChevronRight, 
  Play, 
  RefreshCw, 
  ChevronDown, 
  Check 
} from 'lucide-react';

const ShowcaseProgressNav: React.FC = () => {
  // Progress Bar Simulation State
  const [progress, setProgress] = useState(45);

  // Tabs State
  const [activeTab, setActiveTab] = useState<'info' | 'settings' | 'security'>('info');

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const accordionData = [
    {
      title: '디자인 시스템의 컴포넌트는 재사용 가능한가요?',
      content: '네, 모든 컴포넌트는 독립적인 모듈로 작성되어 클래스 설정이나 Props 설정을 통해 손쉽게 다른 프로젝트로 이관 및 재사용할 수 있습니다.'
    },
    {
      title: '다크 모드는 테일윈드에서 어떻게 감지하나요?',
      content: '기본적으로 HTML <html> 태그의 classList에 "dark" 클래스를 토글하는 방식으로 설정되어 있으며, Tailwind CSS v4의 컴파일러가 이를 인지해 스타일을 자동 전환합니다.'
    },
    {
      title: '차트 라이브러리 ECharts 외에 다른 것도 지원하나요?',
      content: '프로젝트에 이미 echarts와 echarts-for-react가 의존성으로 설치되어 있으며, 반응형 크기 자동 조절 등 대시보드 맞춤형 커스텀이 추가로 도입되어 있습니다.'
    }
  ];

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            진행률 & 네비게이션
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">진행률 & 네비게이션</span>
          </div>
        </div>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Box 1: Progress Bars */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">진행률 지표 (Progress)</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">진행도를 정밀하게 전달하는 슬라이더 스케일입니다.</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={simulateProgress}
                className="p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-xl transition-all cursor-pointer"
              >
                <Play className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setProgress(45)}
                className="p-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 rounded-xl transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {/* Linear Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                <span>프로젝트 진행도</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Danger / Warning colored Progress */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                <span>디스크 임계치 초과 경고 (임시값 85%)</span>
                <span className="text-rose-500">85%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Steppers */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">단계별 스태퍼 (Steps)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">업무 처리나 회원가입 시 여러 단계를 유도하는 타임라인 스태퍼입니다.</p>
          </div>

          <div className="flex items-center justify-between relative max-w-md mx-auto py-4">
            {/* Connecting Bar */}
            <div className="absolute top-[34px] left-[30px] right-[30px] h-[2px] bg-slate-100 dark:bg-slate-700 -z-10">
              <div className="h-full bg-indigo-500 w-1/2 transition-all duration-500" />
            </div>

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-100 dark:shadow-none">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-white">본인 인증</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-indigo-50 dark:border-indigo-950">
                2
              </div>
              <span className="text-xs font-bold text-indigo-500">정보 입력</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center font-bold text-sm border-2 border-transparent">
                3
              </div>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">완료</span>
            </div>
          </div>
        </div>

        {/* Box 3: Tabs Navigation */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">탭 네비게이션 (Tabs)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">부드러운 테일윈드 언더라인과 스위칭 탭 예시입니다.</p>
          </div>

          <div className="space-y-6">
            {/* Underline Tab Layout */}
            <div className="border-b border-slate-100 dark:border-slate-700 flex gap-6">
              {[
                { id: 'info', label: '개인정보' },
                { id: 'settings', label: '환경설정' },
                { id: 'security', label: '보안옵션' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === tab.id 
                      ? 'border-indigo-500 text-indigo-500' 
                      : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents View */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-2xl border border-slate-100/50 dark:border-slate-800 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {activeTab === 'info' && '지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.'}
              {activeTab === 'settings' && '시스템 다크 테마 우선 감지 모드 활성화 및 정기 자동 백업 주기가 매일 오전 04:00시로 지정되었습니다.'}
              {activeTab === 'security' && '2단계 다중 로그인 차단 보호 조치 활성화 상태이며, 마지막 패스워드 갱신은 45일 전입니다.'}
            </div>
          </div>
        </div>

        {/* Box 4: Accordion */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">아코디언 토글 (Accordions)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">질문 답변(FAQ)이나 카테고리 확장에 자주 사용되는 구조입니다.</p>
          </div>

          <div className="space-y-3">
            {accordionData.map((item, idx) => (
              <div 
                key={idx}
                className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-800 dark:text-white cursor-pointer"
                >
                  <span>{item.title}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {openAccordion === idx && (
                  <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs leading-relaxed text-slate-500 dark:text-slate-400 animate-slide-down">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShowcaseProgressNav;
