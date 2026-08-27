import React from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  Gift 
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

      {/* 2-Column Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Box 1: Toss Impact Growth Box */}
        <ShowcaseWrapper
          title="성장 배너 박스 (Impact for Growth)"
          description="시선을 사로잡는 대형 영문 타이틀과 캡슐형 서브 링크 목록이 결합된 토스 스타일의 프리미엄 배너 박스입니다."
          snippet={codeSnippets.impactGrowthBox}
        >
          <div
            className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 flex flex-col 2xl:flex-row gap-6 2xl:gap-8 items-start justify-between relative overflow-hidden shadow-sm border border-amber-200/50 dark:border-slate-800 transition-colors w-full min-h-[420px]"
            style={{
              background:
                'radial-gradient(closest-side, rgba(255, 245, 167, 1) 0%, rgba(255, 245, 167, 0.15) 100%)',
            }}
          >
            {/* Left Column: Heading */}
            <div className="flex flex-col gap-3 items-start justify-between shrink-0 w-full 2xl:w-[220px]">
              <div className="space-y-0.5">
                <h2 className="text-[#333d4b] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  impact for
                </h2>
                <h2 className="text-[#333d4b] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  growth
                </h2>
              </div>

              <div className="flex items-center gap-2 pt-2 2xl:pt-8 text-[#333d4b]/70 dark:text-slate-300 font-bold text-lg sm:text-xl lg:text-2xl tracking-tight group cursor-pointer hover:text-[#333d4b] dark:hover:text-white transition-colors">
                <span>성장의 토대</span>
                <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-4 h-4 text-[#333d4b] dark:text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Service Pill Cards */}
            <div className="flex flex-col gap-3 items-stretch justify-center w-full flex-1">
              {serviceList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/95 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full py-3.5 sm:py-4 px-5 sm:px-6 flex items-center justify-between shadow-sm hover:shadow-md hover:translate-x-1.5 transition-all duration-200 cursor-pointer group border border-slate-100 dark:border-slate-700/60"
                >
                  <span className="text-[#333d4b] dark:text-slate-100 text-sm sm:text-base font-semibold tracking-tight">
                    {item}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 dark:group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-3">
                    <ChevronRight className="w-4 h-4" />
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
          <div className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white relative overflow-hidden shadow-xl border border-indigo-500/20 w-full flex flex-col justify-between min-h-[420px]">
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-[11px] font-extrabold uppercase tracking-wider">
                  Next Level Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                  차세대 비즈니스를 위한 올인원 솔루션 박스
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  빠르고 유연하게 확장 가능한 컴포넌트 아키텍처를 경험해보세요. 지금 바로 시작할 수 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                {features.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-xs text-white mb-0.5">{f.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-tight">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>가이드 바로보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Box 3: Stats Analytics Box */}
        <ShowcaseWrapper
          title="비즈니스 핵심 지표 박스"
          description="실시간 지표 상태와 전일 대비 증감율을 일목요연하게 전달하는 대시보드 요약 박스입니다."
          snippet={codeSnippets.statsMetricBox}
        >
          <div className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm w-full flex flex-col justify-between min-h-[420px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Analytics</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">핵심 지표 모니터링</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 border border-emerald-500/20">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  LIVE ON
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-bold text-slate-400">총 매출액</p>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">₩ 84.5M</p>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18.4% 상승
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                  <div className="w-8 h-8 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-[11px] font-bold text-slate-400">활성 사용자</p>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">14,290명</p>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12.1% 상승
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>최근 24시간 실시간 기준</span>
              <button className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">상세 리포트 →</button>
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Box 4: Promo Voucher Box */}
        <ShowcaseWrapper
          title="프로모션 & 쿠폰 카드 박스"
          description="사용자 참여를 유도하는 그라디언트 배경과 혜택 코드 복사 액션이 포함된 프로모션 박스입니다."
          snippet={codeSnippets.promoCardBox}
        >
          <div className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 text-white shadow-lg relative overflow-hidden w-full flex flex-col justify-between min-h-[420px]">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-extrabold uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                Special Benefit
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  신규 가입 20% 특별 할인
                </h3>
                <p className="text-xs sm:text-sm text-pink-100 leading-relaxed">
                  엔터프라이즈 플랜 첫 3개월 결제 시 적용 가능한 전용 프로모션 코드입니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white text-pink-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-pink-100 uppercase">프로모션 코드</p>
                    <p className="text-sm font-extrabold tracking-wider font-mono">GROWTH2027</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('GROWTH2027');
                    alert('프로모션 코드가 복사되었습니다: GROWTH2027');
                  }}
                  className="px-3 py-1.5 bg-white text-pink-600 rounded-xl text-xs font-black shadow-sm hover:bg-pink-50 transition-colors cursor-pointer shrink-0"
                >
                  코드 복사
                </button>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>혜택 등록하러 가기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoxes;
