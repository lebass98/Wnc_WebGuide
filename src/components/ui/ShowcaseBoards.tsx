import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
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

  const benefits = [
    {
      id: 1,
      title: '모든 PAMS 프로그램 참여 가능',
      sub: '* 단, 일부 프로그램의 경우 선착순 또는 사전예약으로 입장이 제한될 수 있음',
    },
    {
      id: 2,
      title: '2026 서울아트마켓 참가자(델리게이트) 정보 제공',
      sub: '',
    },
    {
      id: 3,
      title: '서울아트마켓 프로그램북 제공 등',
      sub: '',
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
        
        {/* Board 1: Toss Article Board */}
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

        {/* Board 2: Seoul Art Market Registration & Benefit Guide */}
        <ShowcaseWrapper
          title="서울아트마켓 등록안내 & 혜택 가이드"
          description="개인등록 혜택 안내 카드와 구분·등록기간·할인율·가격이 일목요연하게 정리된 공식 등록안내 테이블 컴포넌트입니다."
          snippet={codeSnippets.registrationGuideBoard}
          defaultFullWidth={true}
        >
          <div className="flex flex-col gap-6 w-full font-sans antialiased text-slate-900 dark:text-white">
            
            {/* Top Benefit Card */}
            <div className="bg-[#f6f6f6] dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700/80 flex flex-col gap-5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                2026 서울아트마켓 개인등록 혜택
              </h3>
              <div className="border-t border-slate-200 dark:border-slate-700 pt-5 flex flex-col gap-4">
                {benefits.map(item => (
                  <div key={item.id} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.id}
                    </span>
                    <div className="flex flex-col">
                      <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        {item.title}
                      </p>
                      {item.sub && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="flex justify-end">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-900 dark:border-white rounded-xl text-sm font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all cursor-pointer shadow-xs"
              >
                <span>개인등록 바로가기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Main Registration Guide Table Section */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
                REGISTRATION GUIDE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                2026 서울아트마켓 등록안내
              </h2>

              {/* Responsive Table */}
              <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-2">
                <table className="w-full min-w-[760px] text-center text-xs sm:text-sm border-collapse">
                  <thead className="bg-[#f6f6f6] dark:bg-slate-800/90 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th colSpan={3} className="py-3.5 px-4 border-r border-slate-200 dark:border-slate-700">
                        구분
                      </th>
                      <th className="py-3.5 px-4 border-r border-slate-200 dark:border-slate-700">
                        등록기간
                      </th>
                      <th className="py-3.5 px-3 border-r border-slate-200 dark:border-slate-700 w-20">
                        할인율
                      </th>
                      <th className="py-3.5 px-4 border-r border-slate-200 dark:border-slate-700 w-28">
                        가격
                      </th>
                      <th className="py-3.5 px-4 w-36">
                        등록방법
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium">
                    {/* Row 1: 사전등록 1차 */}
                    <tr>
                      <td rowSpan={8} className="py-3 px-3 font-bold border-r border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 text-slate-900 dark:text-white w-24">
                        개인등록
                      </td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 w-28">사전등록(1차)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 w-24">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">8월 12일(수)~9월 15일(화)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold">50%</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">50,000원</td>
                      <td rowSpan={2} className="py-3 px-4 text-xs font-semibold leading-relaxed">
                        온라인<br /><span className="text-slate-400">(공식홈페이지)</span>
                      </td>
                    </tr>
                    {/* Row 2: 사전등록 2차 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">사전등록(2차)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">9월 16일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold">30%</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">70,000원</td>
                    </tr>
                    {/* Row 3: 현장등록 전일권 */}
                    <tr>
                      <td rowSpan={3} className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">현장등록</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">행사 기간 내 (10.13~10.16)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-slate-400">정가</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">100,000원</td>
                      <td rowSpan={3} className="py-3 px-4 text-xs font-semibold leading-relaxed">
                        오프라인<br /><span className="text-slate-400">(행사장)</span>
                      </td>
                    </tr>
                    {/* Row 4: 현장등록 1일권 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">1일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 text-xs">
                        행사 기간 내 (10.13~10.16)<br />
                        <span className="text-[11px] text-slate-400">* 당일 행사만 참여 가능 / 센터 내 행사 할인 불가</span>
                      </td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-slate-400">정가</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">30,000원</td>
                    </tr>
                    {/* Row 5: 쇼케이스 관람권 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-xs">쇼케이스 관람권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">행사 기간 내 (10.13~10.16)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-slate-400">정가</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">10,000원</td>
                    </tr>
                    {/* Row 6: 예술인패스 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">예술인패스 할인</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold">50%</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">50,000원</td>
                      <td rowSpan={3} className="py-3 px-4 text-xs font-semibold leading-relaxed">
                        온/오프라인<br /><span className="text-slate-400">(공식홈페이지 및 행사장)</span>
                      </td>
                    </tr>
                    {/* Row 7: 전년도참가자 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-xs">전년도참가자 할인</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-bold">50%</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">50,000원</td>
                    </tr>
                    {/* Row 8: 학생 할인 */}
                    <tr>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">학생 할인</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 font-bold">70%</td>
                      <td className="py-3 px-4 border-r border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white">30,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footnotes */}
              <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <p>* 중복할인 불가하며 학생은 중‧고‧대학생‧대학원생 포함</p>
                <p>* 등록기간 및 권종, 가격 등은 사업 추진 현황에 따라 변동될 수 있음</p>
              </div>
            </div>

          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBoards;
