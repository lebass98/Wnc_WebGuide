import React from 'react';
import { Home, ChevronRight, ChevronDown, Printer, Share2 } from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BreadcrumbsSnippets.json';

const ShowcaseBreadcrumbs: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            브래드크럼
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">브래드크럼</span>
          </div>
        </div>
      </div>

      {/* Grid container (1열 풀와이드) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Seoul Art Book Breadcrumb */}
        <ShowcaseWrapper
          title="서울아트책보고 브래드크럼 네비게이션"
          description="홈 이동, 드롭다운 형태의 1·2차 뎁스 네비게이션 및 인쇄·공유 기능 버튼이 포함된 브래드크럼 바 컴포넌트입니다."
          snippet={codeSnippets.seoulArtBookBreadcrumb}
          defaultFullWidth={true}
        >
          <div className="flex flex-col gap-0 items-start justify-start min-h-[76px] w-full max-w-[1400px] relative font-sans antialiased">
            <div className="bg-[rgba(255,255,255,0.70)] dark:bg-slate-800/80 border-solid border-[#e1e1e1] dark:border-slate-700 border-2 p-0.5 self-stretch shrink-0 h-[76px] relative w-full overflow-x-auto">
              
              {/* 처음으로 (Home) */}
              <div className="w-[121.25px] h-[72px] absolute left-4 sm:left-9 top-0.5 flex items-center">
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="text-[#111111] dark:text-white text-left text-lg leading-[72px] font-normal absolute left-0 sm:left-[26px] top-[-2px] tracking-[-0.25px] flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  <span>처음으로</span>
                </a>
              </div>

              {/* 공간소개 Dropdown Menu */}
              <div className="pr-6 sm:pr-10 pl-3 sm:pl-5 flex flex-col gap-0 items-start justify-start w-56 sm:w-80 sm:min-w-[320px] absolute left-[125px] sm:left-[157.25px] top-0.5 h-[72px] justify-center cursor-pointer group">
                <div className="text-[#111111] dark:text-white text-left text-lg leading-[70px] font-normal relative tracking-[-0.25px] flex items-center justify-between w-full group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>공간소개</span>
                  <ChevronDown className="w-4 h-4 text-[#111111] dark:text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-y-0.5" />
                </div>
                <div className="bg-[#cccccc] dark:bg-slate-600 shrink-0 w-0.5 h-5 absolute left-0 top-[25px]" />
              </div>

              {/* 서울아트책보고란 Dropdown Menu */}
              <div className="pr-6 sm:pr-10 pl-3 sm:pl-5 flex flex-col gap-0 items-start justify-start w-56 sm:w-80 absolute left-[350px] sm:left-[477.25px] top-0.5 h-[72px] justify-center cursor-pointer group">
                <div className="text-[#111111] dark:text-white text-left text-lg leading-[70px] font-normal relative tracking-[-0.25px] flex items-center justify-between w-full group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>서울아트책보고란</span>
                  <ChevronDown className="w-4 h-4 text-[#111111] dark:text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-y-0.5" />
                </div>
                <div className="bg-[#cccccc] dark:bg-slate-600 shrink-0 w-0.5 h-5 absolute left-0 top-[25px]" />
              </div>

              {/* 구분선 */}
              <div className="bg-[#cccccc] dark:bg-slate-600 w-0.5 h-5 absolute left-[575px] sm:left-[795.25px] top-[27px]" />
            </div>

            {/* 우측 인쇄 & 공유 버튼 그룹 */}
            <div className="flex flex-row gap-0 items-start justify-start shrink-0 w-[130px] h-[50px] absolute right-3 sm:right-6 top-[13px]">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-[#f1f1f1] dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-[50px] flex items-center justify-center shrink-0 w-[50px] h-[50px] relative overflow-hidden transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                aria-label="인쇄하기"
              >
                <Printer className="w-5 h-5" />
              </button>
              <div className="pl-[30px] flex flex-col gap-0 items-start justify-start shrink-0 w-20 h-[50px] relative">
                <div className="bg-[#cccccc] dark:bg-slate-600 shrink-0 w-0.5 h-5 absolute left-[15px] top-[15px]" />
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: document.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('링크가 복사되었습니다.');
                    }
                  }}
                  className="bg-[#ffffff] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-[50px] flex items-center justify-center shrink-0 w-[50px] h-[50px] relative overflow-hidden transition-colors cursor-pointer text-slate-700 dark:text-slate-200 shadow-xs"
                  aria-label="공유하기"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBreadcrumbs;
