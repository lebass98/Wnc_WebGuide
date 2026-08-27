import React from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BoxesSnippets.json';

const ShowcaseBoxes: React.FC = () => {
  const serviceList = [
    '토스 앱에 오픈하는 내 서비스',
    '사장님의 경영을 돕는 결제 단말기',
    '온라인 사업에 필요한 결제 솔루션',
    '셀러와 사용자를 잇는 토스 쇼핑',
  ];

  const features = [
    { icon: Sparkles, title: 'AI 자동화 인프라', desc: '워크플로우 전체를 연결하는 지능형 파이프라인' },
    { icon: Zap, title: '초고속 데이터 처리', desc: '밀리초 단위 응답성과 실시간 이벤트 트리거' },
    { icon: ShieldCheck, title: '엔터프라이즈 보안', desc: '엔드투엔드 암호화와 엄격한 감사 로그' },
  ];

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            박스
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">박스</span>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-8">
        
        {/* Box 1: Toss Impact Growth Box */}
        <ShowcaseWrapper
          title="성장 배너 박스 (Impact for Growth)"
          description="시선을 사로잡는 대형 영문 타이틀과 캡슐형 서브 링크 목록이 결합된 토스 스타일의 프리미엄 배너 박스입니다."
          snippet={codeSnippets.impactGrowthBox}
        >
          <div
            className="rounded-[36px] lg:rounded-[45px] p-8 sm:p-12 lg:py-[60px] lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-start justify-between relative overflow-hidden shadow-sm border border-amber-200/50 dark:border-slate-800 transition-colors w-full"
            style={{
              background:
                'radial-gradient(closest-side, rgba(255, 245, 167, 1) 0%, rgba(255, 245, 167, 0.15) 100%)',
            }}
          >
            {/* Left Column: Heading */}
            <div className="flex flex-col gap-4 items-start justify-between self-stretch shrink-0 lg:w-[300px]">
              <div className="space-y-1">
                <h2 className="text-[#333d4b] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  impact for
                </h2>
                <h2 className="text-[#333d4b] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  growth
                </h2>
              </div>

              <div className="flex items-center gap-2 pt-4 lg:pt-12 text-[#333d4b]/70 dark:text-slate-300 font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight group cursor-pointer hover:text-[#333d4b] dark:hover:text-white transition-colors">
                <span>성장의 토대</span>
                <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5 text-[#333d4b] dark:text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Service Pill Cards */}
            <div className="flex flex-col gap-3.5 sm:gap-4 items-stretch justify-center w-full lg:max-w-[500px]">
              {serviceList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/95 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full py-4 sm:py-5 px-6 sm:px-8 flex items-center justify-between shadow-sm hover:shadow-md hover:translate-x-1.5 transition-all duration-200 cursor-pointer group border border-slate-100 dark:border-slate-700/60"
                >
                  <span className="text-[#333d4b] dark:text-slate-100 text-base sm:text-lg lg:text-xl font-semibold tracking-tight">
                    {item}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 dark:group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-3">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Box 2: Gradient Feature Box */}
        <ShowcaseWrapper
          title="다크 그라디언트 비즈니스 박스"
          description="고급스러운 딥 블루-다크 그라디언트 배경에 기능 안내 카드와 CTA 버튼이 결합된 프로덕트 소개 박스입니다."
          snippet={codeSnippets.gradientFeatureBox}
        >
          <div className="rounded-[36px] p-8 sm:p-12 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white relative overflow-hidden shadow-xl border border-indigo-500/20 w-full">
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
              <div className="space-y-4 max-w-md">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  Next Level Architecture
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
                  차세대 비즈니스를 위한 올인원 솔루션 박스
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  빠르고 유연하게 확장 가능한 컴포넌트 아키텍처를 경험해보세요. 지금 바로 시작할 수 있습니다.
                </p>
                <div className="pt-2">
                  <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer">
                    <span>가이드 바로보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 w-full lg:w-80">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 cursor-pointer">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-white mb-1">{f.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoxes;
