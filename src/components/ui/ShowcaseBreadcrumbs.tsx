import React, { useState } from 'react';
import { Home, ChevronRight, ChevronDown, ChevronUp, Printer, Share2 } from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BreadcrumbsSnippets.json';

const ShowcaseBreadcrumbs: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const spaceMenuItems = [
    { name: '공간소개', isCurrent: true },
    { name: '프로그램 소개', isCurrent: false },
    { name: '열린 도서관', isCurrent: false },
    { name: '커뮤니티 공간', isCurrent: false },
  ];

  const bookMenuItems = [
    { name: '서울아트책보고란', isCurrent: true },
    { name: 'BI소개', isCurrent: false },
    { name: '시설현황', isCurrent: false },
    { name: '이용안내', isCurrent: false },
    { name: '찾아오시는길', isCurrent: false },
  ];

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
            <span className="text-[#16232A] dark:text-[#FF5B04] font-medium">브래드크럼</span>
          </div>
        </div>
      </div>

      {/* Grid container (1열 풀와이드) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Seoul Art Book Breadcrumb with Dropdown Hover Effect */}
        <ShowcaseWrapper
          title="서울아트책보고 브래드크럼 네비게이션"
          description="마우스 호버 시 이미지와 동일하게 뎁스별 하위 메뉴가 직각 드롭다운 박스 형태로 펼쳐지는 인터랙티브 브래드크럼 바입니다."
          snippet={codeSnippets.seoulArtBookBreadcrumb}
          defaultFullWidth={true}
        >
          <div className="flex flex-col gap-0 items-start justify-start min-h-[380px] w-full max-w-[1400px] relative font-sans antialiased">
            
            {/* Main Breadcrumb Bar Container */}
            <div className="bg-white/90 dark:bg-slate-800/90 border-2 border-[#e1e1e1] dark:border-slate-700 h-[76px] relative w-full flex items-center justify-between">
              
              {/* Left Breadcrumb Items */}
              <div className="flex items-center h-full">
                
                {/* 1. 처음으로 (Home) */}
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  className="h-full px-6 sm:px-8 flex items-center gap-2 text-[#111111] dark:text-white text-lg tracking-[-0.25px] font-normal hover:text-[#FF5B04] transition-colors"
                >
                  <Home className="w-5 h-5 shrink-0" />
                  <span>처음으로</span>
                </a>

                <div className="bg-[#cccccc] dark:bg-slate-600 w-0.5 h-5 shrink-0" />

                {/* 2. 공간소개 (Depth 1 Dropdown) */}
                <div
                  className="relative h-full"
                  onMouseEnter={() => setOpenDropdown('space')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* Default Bar Item */}
                  <div className="h-full w-56 sm:w-80 px-6 sm:px-8 flex items-center justify-between cursor-pointer text-[#111111] dark:text-white text-lg tracking-[-0.25px] font-normal hover:text-[#FF5B04] transition-colors">
                    <span>공간소개</span>
                    <ChevronDown className="w-5 h-5 text-[#111111] dark:text-white" />
                  </div>

                  {/* Dropdown Card on Hover */}
                  {openDropdown === 'space' && (
                    <div className="absolute left-[-2px] top-[-2px] w-[calc(100%+4px)] min-w-[240px] bg-white dark:bg-slate-900 border-2 border-[#111111] dark:border-white shadow-2xl z-50 rounded-none animate-in fade-in duration-150">
                      {/* Top Header of Dropdown */}
                      <div className="h-[76px] px-6 sm:px-8 flex items-center justify-between text-[#111111] dark:text-white text-lg font-normal tracking-[-0.25px]">
                        <span>공간소개</span>
                        <ChevronUp className="w-5 h-5 text-[#111111] dark:text-white" />
                      </div>

                      {/* Dropdown Menu Items */}
                      <div className="px-6 sm:px-8 pt-2 pb-6 flex flex-col gap-4 text-[17px] tracking-[-0.25px]">
                        {spaceMenuItems.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            onClick={e => e.preventDefault()}
                            className={`text-left transition-colors cursor-pointer ${
                              item.isCurrent
                                ? 'text-[#111111] dark:text-white underline underline-offset-4 font-normal'
                                : 'text-[#333333] dark:text-slate-300 hover:underline hover:text-black dark:hover:text-white'
                            }`}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#cccccc] dark:bg-slate-600 w-0.5 h-5 shrink-0" />

                {/* 3. 서울아트책보고란 (Depth 2 Dropdown) */}
                <div
                  className="relative h-full"
                  onMouseEnter={() => setOpenDropdown('book')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* Default Bar Item */}
                  <div className="h-full w-56 sm:w-80 px-6 sm:px-8 flex items-center justify-between cursor-pointer text-[#111111] dark:text-white text-lg tracking-[-0.25px] font-normal hover:text-[#FF5B04] transition-colors">
                    <span>서울아트책보고란</span>
                    <ChevronDown className="w-5 h-5 text-[#111111] dark:text-white" />
                  </div>

                  {/* Dropdown Card on Hover */}
                  {openDropdown === 'book' && (
                    <div className="absolute left-[-2px] top-[-2px] w-[calc(100%+4px)] min-w-[240px] bg-white dark:bg-slate-900 border-2 border-[#111111] dark:border-white shadow-2xl z-50 rounded-none animate-in fade-in duration-150">
                      {/* Top Header of Dropdown */}
                      <div className="h-[76px] px-6 sm:px-8 flex items-center justify-between text-[#111111] dark:text-white text-lg font-normal tracking-[-0.25px]">
                        <span>서울아트책보고란</span>
                        <ChevronUp className="w-5 h-5 text-[#111111] dark:text-white" />
                      </div>

                      {/* Dropdown Menu Items */}
                      <div className="px-6 sm:px-8 pt-2 pb-6 flex flex-col gap-4 text-[17px] tracking-[-0.25px]">
                        {bookMenuItems.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            onClick={e => e.preventDefault()}
                            className={`text-left transition-colors cursor-pointer ${
                              item.isCurrent
                                ? 'text-[#111111] dark:text-white underline underline-offset-4 font-normal'
                                : 'text-[#333333] dark:text-slate-300 hover:underline hover:text-black dark:hover:text-white'
                            }`}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-[#cccccc] dark:bg-slate-600 w-0.5 h-5 shrink-0 hidden md:block" />
              </div>

              {/* Right Action Icons (공유 & 인쇄) */}
              <div className="flex items-center gap-4 px-6 sm:px-8 shrink-0">
                {/* Share Button */}
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
                  className="w-[50px] h-[50px] rounded-full bg-[#f1f1f1] dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center text-[#111111] dark:text-white transition-colors cursor-pointer"
                  aria-label="공유하기"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <div className="bg-[#cccccc] dark:bg-slate-600 w-0.5 h-5 shrink-0" />

                {/* Print Button */}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#111111] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="인쇄하기"
                >
                  <Printer className="w-5 h-5" />
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
