import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BoardsSnippets.json';

const ShowcaseBoards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('성장의 토대');
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = ['전체', '모두의 경험', '안전한 기술', '성장의 토대'];

  const articles = [
    {
      id: 1,
      type: '영상',
      title: '좋은 서비스가 더 많은 사람에게 닿을 수 있도록ㅣ앱인토스 메이커스 노트',
      source: '토스코어',
      date: '2025-10-13',
    },
    {
      id: 2,
      type: '보도자료',
      title: '토스페이먼츠, 소도몰과 ‘가맹점 결제 혁신 모델 구축’ 업무협약',
      source: '토스페이먼츠',
      date: '2025-09-10',
    },
    {
      id: 3,
      type: '보도자료',
      title: '토스, 넵튠과 ‘HTML5 게임 챌린지’ 개최',
      source: '토스',
      date: '2025-07-30',
    },
    {
      id: 4,
      type: '아티클',
      title: '앱인토스, 당신의 아이디어가 토스의 3,000만 유저에게 닿는 방법',
      source: '토스',
      date: '2025-07-25',
    },
    {
      id: 5,
      type: '보도자료',
      title: '토스페이먼츠, PG 업계 최초 통합 리스크 관리 시스템(RMS) 도입',
      source: '토스페이먼츠',
      date: '2025-07-23',
    },
    {
      id: 6,
      type: '보도자료',
      title: '토스, 앱인토스 첫 웨비나 개최…관심 있는 누구나 참여 가능',
      source: '토스',
      date: '2025-07-22',
    },
  ];

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            게시판
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">게시판</span>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Toss Article Board */}
        <ShowcaseWrapper
          title="토스 아티클 & 보도자료 게시판"
          description="카테고리 탭 필터링과 깔끔한 플랫 행 레이아웃, 페이지네이션이 결합된 토스 스타일의 게시판 컴포넌트입니다."
          snippet={codeSnippets.tossArticleBoard}
          defaultFullWidth={true}
        >
          <div className="flex flex-col gap-10 items-start justify-start w-full font-sans antialiased">
            
            {/* Category Capsule Tabs */}
            <div className="flex flex-wrap gap-2 items-center justify-start w-full">
              {tabs.map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 h-[43px] flex items-center justify-center text-[17px] font-semibold tracking-tight transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#f7ecb5] dark:bg-amber-400/20 text-[#333d4b] dark:text-amber-300 shadow-none'
                      : 'bg-white dark:bg-slate-800 text-[#333d4b] dark:text-slate-300 opacity-60 hover:opacity-100 shadow-none'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Article Board List */}
            <div className="w-full overflow-x-auto">
              <div className="flex flex-col gap-7 items-start justify-start w-full min-w-[720px]">
                {articles.map(article => (
                  <div
                    key={article.id}
                    className="flex flex-row items-center justify-start w-full gap-4 group cursor-pointer py-1 transition-colors"
                  >
                    {/* Type / Tag */}
                    <div className="w-[92px] shrink-0">
                      <span className="text-[#333d4b] dark:text-slate-400 text-[17px] leading-[27px] font-medium tracking-tight">
                        {article.type}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-[#333d4b] dark:text-white text-xl leading-[29px] font-bold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                        {article.title}
                      </h4>
                    </div>

                    {/* Source */}
                    <div className="w-32 shrink-0 pr-4 text-left">
                      <span className="text-[#333d4b] dark:text-slate-300 text-[17px] leading-[27px] font-medium tracking-tight truncate block">
                        {article.source}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="w-[104px] shrink-0 text-right">
                      <span className="text-[#333d4b] dark:text-slate-400 text-[17px] leading-[27px] font-medium tracking-tight">
                        {article.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-row items-center justify-start gap-1 w-full pt-2">
              {[1, 2, 3, 4, 5].map(pageNum => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-lg leading-none transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#f8f3e7] dark:bg-amber-400/20 text-[#333d4b] dark:text-amber-300 font-bold'
                      : 'text-[#6d7683] dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Prev & Next Icons */}
              <button
                type="button"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[#6d7683] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer ml-1"
                aria-label="이전 페이지"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[#6d7683] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                aria-label="다음 페이지"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoards;
