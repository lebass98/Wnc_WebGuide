import{j as e,H as s,i as l,R as n,ay as i,P as r}from"./vendor-react-CmoVjuNX.js";import{S as a}from"./ShowcaseWrapper-xKyl-VYD.js";const c={react:`import React from 'react';

const Skeletons = () => {
  return (
    <div className="space-y-6 p-4 dark:bg-slate-900 rounded-xl">
      {/* Card Skeleton */}
      <div className="space-y-3">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">카드 타입 스켈레톤</h4>
        <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4 animate-pulse">
          <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl" />
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};`,html:`<div class="space-y-6 p-4">
  <!-- Card Skeleton -->
  <div class="space-y-3">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">카드 타입 스켈레톤</h4>
    <div class="border border-slate-100 p-5 rounded-2xl space-y-4 animate-pulse">
      <div class="h-32 bg-slate-200 rounded-xl"></div>
      <div class="space-y-2">
        <div class="h-4 bg-slate-200 rounded w-2/3"></div>
        <div class="h-3 bg-slate-200 rounded w-full"></div>
      </div>
      <div class="flex items-center gap-3 pt-2">
        <div class="w-8 h-8 rounded-full bg-slate-200"></div>
        <div class="h-3 bg-slate-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
</div>`,css:`/* CSS 애니메이션 */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}`,js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <title>스켈레톤 로더</title>
  <style>
    .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-3">
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">카드 타입 스켈레톤</h4>
      <div class="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4 animate-pulse">
        <div class="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
        <div class="space-y-2">
          <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
          <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`},o={react:`import React from 'react';
import { Inbox, Plus } from 'lucide-react';

const EmptyStates = () => {
  return (
    <div className="space-y-6 p-4 dark:bg-slate-900 rounded-xl">
      <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4">
        <div className="p-3 bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full">
          <Inbox className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800 dark:text-white">수신된 메시지가 없습니다</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed">
            새로운 프로젝트 연동이 완료되면 이곳에 실시간 업무 메시지가 표시됩니다.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">
          <Plus className="w-3.5 h-3.5" /> 연동 추가하기
        </button>
      </div>
    </div>
  );
};`,html:`<div class="space-y-6 p-4">
  <div class="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 rounded-2xl text-center space-y-4">
    <div class="p-3 bg-indigo-50 text-indigo-505 rounded-full">
      <i data-lucide="inbox" class="w-8 h-8"></i>
    </div>
    <div>
      <h4 class="text-sm font-bold text-slate-800">수신된 메시지가 없습니다</h4>
      <p class="text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed">
        새로운 프로젝트 연동이 완료되면 이곳에 실시간 업무 메시지가 표시됩니다.
      </p>
    </div>
    <button class="flex items-center gap-1.5 px-4 py-2 bg-[#4B62FA] text-white rounded-xl text-xs font-bold shadow-md">
      <i data-lucide="plus" class="w-3.5 h-3.5"></i> 연동 추가하기
    </button>
  </div>
</div>`,css:"",js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/lucide@latest"><\/script>
  <title>빈 화면 상태</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4">
      <div class="p-3 bg-indigo-50 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full">
        <i data-lucide="inbox" class="w-8 h-8"></i>
      </div>
      <div>
        <h4 class="text-sm font-bold text-slate-800 dark:text-white">수신된 메시지가 없습니다</h4>
        <p class="text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed">
          새로운 프로젝트 연동이 완료되면 이곳에 실시간 업무 메시지가 표시됩니다.
        </p>
      </div>
      <button class="flex items-center gap-1.5 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
        <i data-lucide="plus" class="w-3.5 h-3.5"></i> 연동 추가하기
      </button>
    </div>
  </div>
  <script>
    if(window.lucide) window.lucide.createIcons();
  <\/script>
</body>
</html>`},t={skeletons:c,emptyStates:o},m=()=>e.jsxs("div",{className:"space-y-6 pb-20 font-sans",children:[e.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-[26px] font-bold text-slate-900 dark:text-white leading-tight",children:"상태 & 로더"}),e.jsxs("div",{className:"flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1",children:[e.jsx("span",{children:"홈"}),e.jsx(s,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"UI 요소"}),e.jsx(s,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-medium",children:"상태 & 로더"})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsx(a,{title:"스켈레톤 로더 (Skeleton Loaders)",description:"데이터 비동기 로딩 중 화면 흐름을 유지하고 로딩 인지를 돕는 프리로더 뼈대입니다.",snippet:t.skeletons,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"카드 타입 스켈레톤"}),e.jsxs("div",{className:"border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4 animate-pulse",children:[e.jsx("div",{className:"h-32 bg-slate-200 dark:bg-slate-700 rounded-xl"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"}),e.jsx("div",{className:"h-3 bg-slate-200 dark:bg-slate-700 rounded w-full"}),e.jsx("div",{className:"h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6"})]}),e.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"}),e.jsx("div",{className:"h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/4"})]})]})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"리스트/행 타입 스켈레톤"}),e.jsx("div",{className:"space-y-3 animate-pulse",children:[1,2,3].map(d=>e.jsxs("div",{className:"flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-3 w-2/3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 shrink-0"}),e.jsxs("div",{className:"space-y-2 w-full",children:[e.jsx("div",{className:"h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-1/3"}),e.jsx("div",{className:"h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-2/3"})]})]}),e.jsx("div",{className:"h-4 bg-slate-200 dark:bg-slate-700 rounded w-12"})]},d))})]})]})}),e.jsx(a,{title:"빈 화면 상태 (Empty States)",description:"등록된 데이터가 없거나 조건에 맞는 결과물이 없을 때 사용자 행동을 유도하는 UI입니다.",snippet:t.emptyStates,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"검색 결과 없음"}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4",children:[e.jsx("div",{className:"p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full",children:e.jsx(l,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-slate-800 dark:text-white",children:"일치하는 결과가 없습니다"}),e.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed",children:"다른 키워드로 다시 검색해 보시거나, 필터 설정을 변경해 보세요."})]}),e.jsxs("button",{className:"flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer",children:[e.jsx(n,{className:"w-3.5 h-3.5"}),"초기화"]})]})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"데이터 함 비어있음"}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4",children:[e.jsx("div",{className:"p-3 bg-indigo-50 text-indigo-505 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full",children:e.jsx(i,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-slate-800 dark:text-white",children:"수신된 메시지가 없습니다"}),e.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed",children:"새로운 프로젝트 연동이 완료되면 이곳에 실시간 업무 메시지가 표시됩니다."})]}),e.jsxs("button",{className:"flex items-center gap-1.5 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 dark:shadow-none cursor-pointer",children:[e.jsx(r,{className:"w-3.5 h-3.5"}),"연동 추가하기"]})]})]})]})})]})]});export{m as default};
