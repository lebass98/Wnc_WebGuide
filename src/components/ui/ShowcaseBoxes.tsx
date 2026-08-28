import React from 'react';
import { ChevronRight } from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BoxesSnippets.json';

const ShowcaseBoxes: React.FC = () => {
  const growthServices = [
    '토스 앱에 오픈하는 내 서비스',
    '사장님의 경영을 돕는 결제 단말기',
    '온라인 사업에 필요한 결제 솔루션',
    '셀러와 사용자를 잇는 토스 쇼핑',
  ];

  const allExperienceServices = [
    '언어가 달라도 똑같이 누리는 편리함',
    '보이지 않는 벽을 허무는 접근성 기술',
    '어린이·청소년의 인생 첫 금융',
    '내 삶에 필요한 금융생활 안내자',
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
        
        {/* Box 1: Toss Impact Growth Box (Yellow Radial) */}
        <ShowcaseWrapper
          title="성장 배너 박스 (Impact for Growth)"
          description="대형 타이틀과 함께 호버 시 선택된 항목만 또렷해지고 나머지는 흐려지는 포커스 오퍼시티 효과가 적용된 배너 박스입니다."
          snippet={codeSnippets.impactGrowthBox}
        >
          <div
            className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 flex flex-col 2xl:flex-row gap-6 2xl:gap-8 items-start justify-between relative overflow-hidden border border-amber-200/50 dark:border-slate-800 transition-colors w-full min-h-[420px] shadow-none"
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
                <div className="w-7 h-7 rounded-full bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-all shadow-none">
                  <ChevronRight className="w-4 h-4 text-[#333d4b] dark:text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Service Pill Cards with Focus-on-Hover Opacity */}
            <div className="flex flex-col gap-3 items-stretch justify-center w-full flex-1 group/list">
              {growthServices.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item bg-white dark:bg-slate-800/90 rounded-full py-3.5 sm:py-4 px-5 sm:px-6 flex items-center justify-between transition-all duration-200 cursor-pointer border border-white/50 dark:border-slate-700/50 shadow-none hover:shadow-none group-hover/list:opacity-40 group-hover/list:bg-white/50 dark:group-hover/list:bg-slate-800/40 hover:!opacity-100 hover:!bg-white dark:hover:!bg-slate-800"
                >
                  <span className="text-[#333d4b] dark:text-slate-100 text-sm sm:text-base font-semibold tracking-tight transition-colors">
                    {item}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-transparent group-hover/item:bg-slate-100/80 dark:group-hover/item:bg-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover/list:text-slate-400 group-hover/item:text-[#333d4b] dark:group-hover/item:text-white transition-all shrink-0 ml-3 shadow-none">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseWrapper>

        {/* Box 2: Toss Impact All Box (Soft Blue Radial - 첨부 이미지 스타일) */}
        <ShowcaseWrapper
          title="모두의 경험 배너 박스 (Impact for All)"
          description="소프트 블루 그라디언트 배경에 그림자 없이 호버된 항목만 선명하게 떠오르는 오퍼시티 포커스 카드 박스입니다."
          snippet={codeSnippets.impactAllBox}
        >
          <div
            className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 flex flex-col 2xl:flex-row gap-6 2xl:gap-8 items-start justify-between relative overflow-hidden border border-sky-200/50 dark:border-slate-800 transition-colors w-full min-h-[420px] shadow-none"
            style={{
              background:
                'radial-gradient(circle at 15% 25%, rgba(195, 226, 255, 0.9) 0%, rgba(220, 240, 255, 0.45) 50%, rgba(235, 248, 255, 0.2) 100%)',
            }}
          >
            {/* Left Column: Heading */}
            <div className="flex flex-col gap-3 items-start justify-between shrink-0 w-full 2xl:w-[220px]">
              <div className="space-y-0.5">
                <h2 className="text-[#333d4b] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  impact for
                </h2>
                <h2 className="text-[#333d4b] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  all
                </h2>
              </div>

              <div className="flex items-center gap-2 pt-2 2xl:pt-8 text-[#333d4b]/70 dark:text-slate-300 font-bold text-lg sm:text-xl lg:text-2xl tracking-tight group cursor-pointer hover:text-[#333d4b] dark:hover:text-white transition-colors">
                <span>모두의 경험</span>
                <div className="w-7 h-7 rounded-full bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-all shadow-none">
                  <ChevronRight className="w-4 h-4 text-[#333d4b] dark:text-white" />
                </div>
              </div>
            </div>

            {/* Right Column: Service Pill Cards with Focus-on-Hover Opacity */}
            <div className="flex flex-col gap-3 items-stretch justify-center w-full flex-1 group/list">
              {allExperienceServices.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item bg-white dark:bg-slate-800/90 rounded-full py-3.5 sm:py-4 px-5 sm:px-6 flex items-center justify-between transition-all duration-200 cursor-pointer border border-white/60 dark:border-slate-700/50 shadow-none hover:shadow-none group-hover/list:opacity-40 group-hover/list:bg-white/50 dark:group-hover/list:bg-slate-800/40 hover:!opacity-100 hover:!bg-white dark:hover:!bg-slate-800"
                >
                  <span className="text-[#333d4b] dark:text-slate-100 text-sm sm:text-base font-semibold tracking-tight transition-colors">
                    {item}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-transparent group-hover/item:bg-slate-100/80 dark:group-hover/item:bg-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover/list:text-slate-400 group-hover/item:text-[#333d4b] dark:group-hover/item:text-white transition-all shrink-0 ml-3 shadow-none">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoxes;
