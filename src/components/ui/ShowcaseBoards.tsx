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
            <span className="text-[#16232A] dark:text-[#FF5B04] font-medium">게시판</span>
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
            
            {/* Category Capsule Tabs (자료 원본: rounded-[40px]) */}
            <div className="flex flex-wrap gap-2 items-center justify-start w-full">
              {tabs.map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[40px] px-5 h-[43px] flex items-center justify-center text-[17px] font-semibold tracking-tight transition-all cursor-pointer ${
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
                      <h4 className="text-[#333d4b] dark:text-white text-xl leading-[29px] font-bold tracking-tight group-hover:text-[#FF5B04] transition-colors truncate">
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

            {/* Pagination (자료 원본: rounded-[50px]) */}
            <div className="flex flex-row items-center justify-start gap-1 w-full pt-2">
              {[1, 2, 3, 4, 5].map(pageNum => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-[34px] h-[34px] rounded-[50px] flex items-center justify-center text-lg leading-none transition-all cursor-pointer ${
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
                className="w-[34px] h-[34px] rounded-[50px] flex items-center justify-center text-[#6d7683] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer ml-1"
                aria-label="이전 페이지"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
                className="w-[34px] h-[34px] rounded-[50px] flex items-center justify-center text-[#6d7683] dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
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
          <div className="flex flex-col gap-5 w-full font-sans antialiased text-[#000000] dark:text-white">
            
            {/* Top Benefit Card (자료 원본: bg-[#f6f6f6] rounded-sm p-[30px]) */}
            <div className="bg-[#f6f6f6] dark:bg-slate-800/80 rounded-sm p-6 sm:p-[30px] flex flex-col gap-0 border-0">
              <h3 className="text-lg sm:text-[20px] font-semibold tracking-[-0.8px] text-[#000000] dark:text-white leading-7">
                2026 서울아트마켓 개인등록 혜택
              </h3>
              <div className="border-t border-[#e5e5e5] dark:border-slate-700 mt-5 pt-5 flex flex-col gap-3">
                {benefits.map(item => (
                  <div key={item.id} className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-3xl bg-[#000000] dark:bg-white text-white dark:text-[#000000] text-[14px] font-normal flex items-center justify-center shrink-0 mt-0.5 leading-6">
                      {item.id}
                    </span>
                    <div className="flex flex-col">
                      <p className="text-[16px] font-normal text-[#000000] dark:text-slate-200 leading-[22.4px] tracking-[-0.8px]">
                        {item.title}
                      </p>
                      {item.sub && (
                        <p className="text-[15px] font-normal text-[#000000] dark:text-slate-400 mt-0.5 leading-[21px] tracking-[-0.8px]">
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button (자료 원본: border-[#000000] rounded-none) */}
            <div className="flex justify-end pt-3">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2.5 px-5 h-[50px] min-w-[160px] border border-[#000000] dark:border-white rounded-none text-[18px] font-medium tracking-[-0.8px] text-[#000000] dark:text-white hover:bg-[#000000] hover:text-white dark:hover:bg-white dark:hover:text-[#000000] transition-colors cursor-pointer"
              >
                <span>개인등록 바로가기</span>
                <span className="text-[18px] leading-none">&rarr;</span>
              </a>
            </div>

            {/* Main Registration Guide Table Section */}
            <div className="flex flex-col gap-0 mt-2">
              <div className="text-[#cccccc] dark:text-slate-600 text-[36px] sm:text-[55px] font-normal leading-[55px] tracking-[-0.3px] font-mono">
                REGISTRATION GUIDE
              </div>
              <h2 className="text-[#000000] dark:text-white text-[24px] sm:text-[30px] font-semibold leading-[42px] tracking-[-0.8px] mt-1 mb-4">
                2026 서울아트마켓 등록안내
              </h2>

              {/* Responsive Table (자료 원본: border-t-2 border-[#444444] rounded-none) */}
              <div className="w-full overflow-x-auto rounded-none border-t-2 border-[#444444] dark:border-slate-200">
                <table className="w-full min-w-[760px] text-center text-[16px] border-collapse rounded-none border-b border-[#dddddd] dark:border-slate-700">
                  <thead className="bg-[#f6f6f6] dark:bg-slate-800 text-[#000000] dark:text-white font-semibold border-b border-[#dddddd] dark:border-slate-700">
                    <tr className="h-[48px]">
                      <th colSpan={3} className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 tracking-[-0.8px]">
                        구분
                      </th>
                      <th className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 tracking-[-0.8px]">
                        등록기간
                      </th>
                      <th className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700 w-24 tracking-[-0.8px]">
                        할인율
                      </th>
                      <th className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 w-32 tracking-[-0.8px]">
                        가격
                      </th>
                      <th className="py-3 px-4 w-44 tracking-[-0.8px]">
                        등록방법
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dddddd] dark:divide-slate-700 bg-white dark:bg-slate-900 text-[#000000] dark:text-slate-300 font-normal tracking-[-0.8px]">
                    {/* Row 1: 사전등록 1차 */}
                    <tr className="h-[48px]">
                      <td rowSpan={8} className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700 bg-white dark:bg-slate-900 font-normal text-center w-28">
                        개인등록
                      </td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700 w-32">사전등록(1차)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700 w-28">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">8월 12일(수)~9월 15일(화)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">50%</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">50,000원</td>
                      <td rowSpan={2} className="py-3 px-4 text-[16px] leading-[22.4px]">
                        온라인<br />(공식홈페이지)
                      </td>
                    </tr>
                    {/* Row 2: 사전등록 2차 */}
                    <tr className="h-[48px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">사전등록(2차)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">9월 16일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">30%</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">70,000원</td>
                    </tr>
                    {/* Row 3: 현장등록 전일권 */}
                    <tr className="h-[70px]">
                      <td rowSpan={3} className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">현장등록</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 leading-tight">
                        행사 기간 내<br />(10월 13일(화)~10월 16일(금))
                      </td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">정가</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">100,000원</td>
                      <td rowSpan={3} className="py-3 px-4 text-[16px] leading-[22.4px]">
                        오프라인<br />(행사장)
                      </td>
                    </tr>
                    {/* Row 4: 현장등록 1일권 */}
                    <tr className="h-[115px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">1일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 leading-snug">
                        행사 기간 내<br />(10월 13일(화)~10월 16일(금))<br />
                        <span className="text-[14px] text-slate-500 dark:text-slate-400">* 당일 행사만 참여 가능<br />*센터 내 행사 티켓 할인 불가</span>
                      </td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">정가</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">30,000원</td>
                    </tr>
                    {/* Row 5: 쇼케이스 관람권 */}
                    <tr className="h-[70px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">쇼케이스 관람권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700 leading-tight">
                        행사 기간 내<br />(10월 13일(화)~10월 16일(금))
                      </td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">정가</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">10,000원</td>
                    </tr>
                    {/* Row 6: 예술인패스 */}
                    <tr className="h-[48px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">예술인패스 할인</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">50%</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">50,000원</td>
                      <td rowSpan={3} className="py-3 px-4 text-[16px] leading-[22.4px]">
                        온/오프라인<br />(공식 홈페이지 및 행사장)
                      </td>
                    </tr>
                    {/* Row 7: 전년도참가자 */}
                    <tr className="h-[48px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전년도참가자 할인</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">50%</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">50,000원</td>
                    </tr>
                    {/* Row 8: 학생 할인 */}
                    <tr className="h-[48px]">
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">학생 할인</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">전일권</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">8월 12일(수)~10월 7일(수)</td>
                      <td className="py-3 px-3 border-r border-[#dddddd] dark:border-slate-700">70%</td>
                      <td className="py-3 px-4 border-r border-[#dddddd] dark:border-slate-700">30,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footnotes */}
              <div className="space-y-1 text-[16px] text-[#757575] dark:text-slate-400 pt-3 tracking-[-0.8px] leading-[22.4px]">
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
