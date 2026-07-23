import{b as o,j as t,H as d,a0 as b,av as p,a3 as u,aw as h,N as g,aa as m}from"./vendor-react-CmoVjuNX.js";import{S as e}from"./ShowcaseWrapper-xKyl-VYD.js";const v={react:`import React from 'react';

const ButtonThemes = () => {
  return (
    <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
      {/* Filled Buttons */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">배경이 찬 버튼 (Filled)</h4>
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">기본 인디고</button>
          <button className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">다크 테마</button>
          <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">에메랄드</button>
          <button className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">경고 로즈</button>
        </div>
      </div>

      {/* Outlined Buttons */}
      <div className="space-y-2 pt-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">테두리형 버튼 (Outlined)</h4>
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer">보통 테두리</button>
          <button className="px-5 py-2.5 border border-indigo-500 hover:bg-indigo-500/10 text-indigo-500 rounded-xl text-xs font-bold transition-all cursor-pointer">인디고 라인</button>
          <button className="px-5 py-2.5 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold transition-all cursor-pointer">그린 라인</button>
          <button className="px-5 py-2.5 border border-rose-500 hover:bg-rose-500/10 text-rose-500 rounded-xl text-xs font-bold transition-all cursor-pointer">레드 라인</button>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-2 pt-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">고스트 텍스트 버튼 (Ghost)</h4>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer">회색 고스트</button>
          <button className="px-4 py-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer">인디고 고스트</button>
          <button className="px-4 py-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer">레드 고스트</button>
        </div>
      </div>
    </div>
  );
};`,html:`<div class="space-y-4 p-4">
  <!-- Filled Buttons -->
  <div class="space-y-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">배경이 찬 버튼 (Filled)</h4>
    <div class="flex flex-wrap gap-2">
      <button class="px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold transition-all">기본 인디고</button>
      <button class="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold transition-all">다크 테마</button>
      <button class="px-5 py-2.5 bg-emerald-555 text-white rounded-xl text-xs font-bold transition-all">에메랄드</button>
      <button class="px-5 py-2.5 bg-rose-500 text-white rounded-xl text-xs font-bold transition-all">경고 로즈</button>
    </div>
  </div>

  <!-- Outlined Buttons -->
  <div class="space-y-2 pt-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">테두리형 버튼 (Outlined)</h4>
    <div class="flex flex-wrap gap-2">
      <button class="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all">보통 테두리</button>
      <button class="px-5 py-2.5 border border-indigo-500 text-indigo-500 rounded-xl text-xs font-bold transition-all">인디고 라인</button>
      <button class="px-5 py-2.5 border border-emerald-500 text-emerald-500 rounded-xl text-xs font-bold transition-all">그린 라인</button>
      <button class="px-5 py-2.5 border border-rose-500 text-rose-500 rounded-xl text-xs font-bold transition-all">레드 라인</button>
    </div>
  </div>

  <!-- Ghost Buttons -->
  <div class="space-y-2 pt-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">고스트 텍스트 버튼 (Ghost)</h4>
    <div class="flex flex-wrap gap-2">
      <button class="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-bold transition-all">회색 고스트</button>
      <button class="px-4 py-2 text-indigo-500 hover:bg-indigo-50 rounded-xl text-xs font-bold transition-all">인디고 고스트</button>
      <button class="px-4 py-2 text-rose-500 hover:bg-rose-50 rounded-xl text-xs font-bold transition-all">레드 고스트</button>
    </div>
  </div>
</div>`,css:"/* Tailwind CSS 기반 디자인 시스템이 사용되었습니다. */",js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <title>버튼 테마 스타일</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-4">
      <div class="space-y-2">
        <h4 class="text-[11px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">배경이 찬 버튼 (Filled)</h4>
        <div class="flex flex-wrap gap-2">
          <button class="px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all">기본 인디고</button>
          <button class="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all">다크 테마</button>
          <button class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all">에메랄드</button>
          <button class="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all">경고 로즈</button>
        </div>
      </div>
      <div class="space-y-2 pt-2">
        <h4 class="text-[11px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">테두리형 버튼 (Outlined)</h4>
        <div class="flex flex-wrap gap-2">
          <button class="px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold transition-all">보통 테두리</button>
          <button class="px-5 py-2.5 border border-indigo-500 hover:bg-indigo-500/10 text-indigo-500 rounded-xl text-xs font-bold transition-all">인디고 라인</button>
          <button class="px-5 py-2.5 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold transition-all">그린 라인</button>
          <button class="px-5 py-2.5 border border-rose-500 hover:bg-rose-500/10 text-rose-500 rounded-xl text-xs font-bold transition-all">레드 라인</button>
        </div>
      </div>
      <div class="space-y-2 pt-2">
        <h4 class="text-[11px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">고스트 텍스트 버튼 (Ghost)</h4>
        <div class="flex flex-wrap gap-2">
          <button class="px-4 py-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-800 dark:text-slate-400 rounded-xl text-xs font-bold transition-all">회색 고스트</button>
          <button class="px-4 py-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl text-xs font-bold transition-all">인디고 고스트</button>
          <button class="px-4 py-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl text-xs font-bold transition-all">레드 고스트</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`},f=JSON.parse(`{"react":"import React, { useState } from 'react';\\nimport { Send, Download, Trash2, Loader2, Check, ArrowRight } from 'lucide-react';\\n\\nconst ButtonInteractive = () => {\\n  const [isLoading, setIsLoading] = useState(false);\\n  const [isSuccess, setIsSuccess] = useState(false);\\n\\n  const triggerLoading = () => {\\n    if (isLoading) return;\\n    setIsLoading(true);\\n    setIsSuccess(false);\\n    setTimeout(() => {\\n      setIsLoading(false);\\n      setIsSuccess(true);\\n    }, 2000);\\n  };\\n\\n  return (\\n    <div className=\\"space-y-4 p-4 dark:bg-slate-900 rounded-xl\\">\\n      {/* Sizes */}\\n      <div className=\\"space-y-2\\">\\n        <h4 className=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">버튼 크기 (Sizes)</h4>\\n        <div className=\\"flex items-center gap-2 flex-wrap\\">\\n          <button className=\\"px-3 py-1.5 bg-[#4B62FA] text-white rounded-lg text-[10px] font-black tracking-wider uppercase cursor-pointer\\">Mini</button>\\n          <button className=\\"px-4 py-2 bg-[#4B62FA] text-white rounded-lg text-xs font-bold cursor-pointer\\">Small</button>\\n          <button className=\\"px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold cursor-pointer\\">Medium</button>\\n          <button className=\\"px-7 py-3.5 bg-[#4B62FA] text-white rounded-2xl text-sm font-black tracking-wide cursor-pointer\\">Large Size</button>\\n        </div>\\n      </div>\\n\\n      {/* Icons */}\\n      <div className=\\"space-y-2 pt-2\\">\\n        <h4 className=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">아이콘 연동 버튼</h4>\\n        <div className=\\"flex flex-wrap gap-2\\">\\n          <button className=\\"flex items-center gap-2 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer\\">\\n            <Send className=\\"w-3.5 h-3.5\\" /> 메시지 보내기\\n          </button>\\n          <button className=\\"flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer\\">\\n            내보내기 <Download className=\\"w-3.5 h-3.5\\" />\\n          </button>\\n          <button className=\\"p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all cursor-pointer\\">\\n            <Trash2 className=\\"w-4 h-4\\" />\\n          </button>\\n        </div>\\n      </div>\\n\\n      {/* Interactive */}\\n      <div className=\\"space-y-2 pt-2\\">\\n        <h4 className=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">로딩 상태 시뮬레이션</h4>\\n        <div>\\n          <button onClick={triggerLoading} className=\\"flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer\\">\\n            {isLoading ? (\\n              <><Loader2 className=\\"w-4 h-4 animate-spin text-indigo-400\\" /> 처리 중...</>\\n            ) : isSuccess ? (\\n              <><Check className=\\"w-4 h-4 text-emerald-400\\" /> 전송 성공</>\\n            ) : (\\n              <>클릭하여 업로드 <ArrowRight className=\\"w-3.5 h-3.5\\" /></>\\n            )}\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n  );\\n};","html":"<div class=\\"space-y-4 p-4\\">\\n  <!-- Sizes -->\\n  <div class=\\"space-y-2\\">\\n    <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">버튼 크기 (Sizes)</h4>\\n    <div class=\\"flex items-center gap-2 flex-wrap\\">\\n      <button class=\\"px-3 py-1.5 bg-[#4B62FA] text-white rounded-lg text-[10px] font-black uppercase\\">Mini</button>\\n      <button class=\\"px-4 py-2 bg-[#4B62FA] text-white rounded-lg text-xs font-bold\\">Small</button>\\n      <button class=\\"px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold\\">Medium</button>\\n      <button class=\\"px-7 py-3.5 bg-[#4B62FA] text-white rounded-2xl text-sm font-black\\">Large Size</button>\\n    </div>\\n  </div>\\n\\n  <!-- Icons -->\\n  <div class=\\"space-y-2 pt-2\\">\\n    <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">아이콘 연동 버튼</h4>\\n    <div class=\\"flex flex-wrap gap-2\\">\\n      <button class=\\"flex items-center gap-2 px-4 py-2 bg-[#4B62FA] text-white rounded-xl text-xs font-bold\\">\\n        <i data-lucide=\\"send\\" class=\\"w-3.5 h-3.5\\"></i> 메시지 보내기\\n      </button>\\n      <button class=\\"flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold\\">\\n        내보내기 <i data-lucide=\\"download\\" class=\\"w-3.5 h-3.5\\"></i>\\n      </button>\\n      <button class=\\"p-2.5 bg-rose-500 text-white rounded-xl\\">\\n        <i data-lucide=\\"trash-2\\" class=\\"w-4 h-4\\"></i>\\n      </button>\\n    </div>\\n  </div>\\n\\n  <!-- Interactive -->\\n  <div class=\\"space-y-2 pt-2\\">\\n    <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">로딩 상태 시뮬레이션</h4>\\n    <div>\\n      <button id=\\"btn-upload\\" class=\\"flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold transition-all\\">\\n        <span id=\\"btn-upload-text\\">클릭하여 업로드</span> <i id=\\"btn-upload-icon\\" data-lucide=\\"arrow-right\\" class=\\"w-3.5 h-3.5\\"></i>\\n      </button>\\n    </div>\\n  </div>\\n</div>","css":"","js":"document.addEventListener('DOMContentLoaded', () => {\\n  const uploadBtn = document.getElementById('btn-upload');\\n  const btnText = document.getElementById('btn-upload-text');\\n  const btnIcon = document.getElementById('btn-upload-icon');\\n  \\n  if (uploadBtn && btnText && btnIcon) {\\n    uploadBtn.addEventListener('click', () => {\\n      btnText.textContent = '처리 중...';\\n      btnIcon.outerHTML = '<i id=\\"btn-upload-icon\\" data-lucide=\\"loader-2\\" class=\\"w-4 h-4 animate-spin text-indigo-400\\"></i>';\\n      if(window.lucide) window.lucide.createIcons();\\n      \\n      setTimeout(() => {\\n        const currentIcon = document.getElementById('btn-upload-icon');\\n        btnText.textContent = '전송 성공';\\n        if(currentIcon) {\\n          currentIcon.outerHTML = '<i id=\\"btn-upload-icon\\" data-lucide=\\"check\\" class=\\"w-4 h-4 text-emerald-400\\"></i>';\\n        }\\n        if(window.lucide) window.lucide.createIcons();\\n      }, 2000);\\n    });\\n  }\\n});","fullHtml":"<!DOCTYPE html>\\n<html lang=\\"ko\\">\\n<head>\\n  <meta charset=\\"UTF-8\\">\\n  <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n  <script src=\\"https://cdn.tailwindcss.com\\"><\/script>\\n  <script src=\\"https://unpkg.com/lucide@latest\\"><\/script>\\n  <title>버튼 규격 & 상호작용</title>\\n  <style>\\n    .animate-spin { animation: spin 1s linear infinite; }\\n    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\\n  </style>\\n</head>\\n<body class=\\"bg-slate-50 dark:bg-[#0F172A] \\">\\n  <div class=\\"max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6\\">\\n    <div class=\\"space-y-4\\">\\n      <div class=\\"space-y-2\\">\\n        <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">버튼 크기 (Sizes)</h4>\\n        <div class=\\"flex items-center gap-2 flex-wrap\\">\\n          <button class=\\"px-3 py-1.5 bg-[#4B62FA] text-white rounded-lg text-[10px] font-black uppercase\\">Mini</button>\\n          <button class=\\"px-4 py-2 bg-[#4B62FA] text-white rounded-lg text-xs font-bold\\">Small</button>\\n          <button class=\\"px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold\\">Medium</button>\\n          <button class=\\"px-7 py-3.5 bg-[#4B62FA] text-white rounded-2xl text-sm font-black\\">Large Size</button>\\n        </div>\\n      </div>\\n      <div class=\\"space-y-2 pt-2\\">\\n        <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">아이콘 연동 버튼</h4>\\n        <div class=\\"flex flex-wrap gap-2\\">\\n          <button class=\\"flex items-center gap-2 px-4 py-2 bg-[#4B62FA] text-white rounded-xl text-xs font-bold\\">\\n            <i data-lucide=\\"send\\" class=\\"w-3.5 h-3.5\\"></i> 메시지 보내기\\n          </button>\\n          <button class=\\"flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold\\">\\n            내보내기 <i data-lucide=\\"download\\" class=\\"w-3.5 h-3.5\\"></i>\\n          </button>\\n          <button class=\\"p-2.5 bg-rose-500 text-white rounded-xl\\">\\n            <i data-lucide=\\"trash-2\\" class=\\"w-4 h-4\\"></i>\\n          </button>\\n        </div>\\n      </div>\\n      <div class=\\"space-y-2 pt-2\\">\\n        <h4 class=\\"text-[11px] font-bold text-slate-400 uppercase tracking-wider\\">로딩 상태 시뮬레이션</h4>\\n        <div>\\n          <button id=\\"btn-upload\\" class=\\"flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all\\">\\n            <span id=\\"btn-upload-text\\">클릭하여 업로드</span> <i id=\\"btn-upload-icon\\" data-lucide=\\"arrow-right\\" class=\\"w-3.5 h-3.5\\"></i>\\n          </button>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n\\n  <script>\\n    document.addEventListener('DOMContentLoaded', () => {\\n      const uploadBtn = document.getElementById('btn-upload');\\n      const btnText = document.getElementById('btn-upload-text');\\n      const btnIcon = document.getElementById('btn-upload-icon');\\n      \\n      if (uploadBtn && btnText && btnIcon) {\\n        uploadBtn.addEventListener('click', () => {\\n          btnText.textContent = '처리 중...';\\n          btnIcon.outerHTML = '<i id=\\"btn-upload-icon\\" data-lucide=\\"loader-2\\" class=\\"w-4 h-4 animate-spin text-indigo-400\\"></i>';\\n          if(window.lucide) window.lucide.createIcons();\\n          \\n          setTimeout(() => {\\n            const currentIcon = document.getElementById('btn-upload-icon');\\n            btnText.textContent = '전송 성공';\\n            if(currentIcon) {\\n              currentIcon.outerHTML = '<i id=\\"btn-upload-icon\\" data-lucide=\\"check\\" class=\\"w-4 h-4 text-emerald-400\\"></i>';\\n            }\\n            if(window.lucide) window.lucide.createIcons();\\n          }, 2000);\\n        });\\n      }\\n    });\\n    if (window.lucide) window.lucide.createIcons();\\n  <\/script>\\n</body>\\n</html>"}`),w={react:`import React from 'react';

const ButtonGroups = () => {
  return (
    <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
      {/* Horizontal Button Group */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">가로형 버튼 그룹</h4>
        <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700 cursor-pointer">오늘</button>
          <button className="px-5 py-2.5 bg-slate-50 dark:bg-slate-700 text-xs font-bold text-indigo-600 dark:text-white border-r border-slate-200 dark:border-slate-700 cursor-pointer">이번 주</button>
          <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">이번 달</button>
        </div>
      </div>

      {/* Avatar/Action Button Group */}
      <div className="space-y-2 pt-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타/아이콘 버튼 그룹</h4>
        <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          {['수정', '미리보기', '삭제'].map((label, idx) => (
            <button 
              key={idx}
              className={\`px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer \${
                idx !== 2 ? 'border-r border-slate-200 dark:border-slate-700' : ''
              }\`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};`,html:`<div class="space-y-4 p-4">
  <!-- Horizontal Button Group -->
  <div class="space-y-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">가로형 버튼 그룹</h4>
    <div class="inline-flex rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button class="px-5 py-2.5 bg-white text-xs font-bold text-slate-700 border-r border-slate-200">오늘</button>
      <button class="px-5 py-2.5 bg-slate-50 text-xs font-bold text-indigo-600 border-r border-slate-200">이번 주</button>
      <button class="px-5 py-2.5 bg-white text-xs font-bold text-slate-700">이번 달</button>
    </div>
  </div>

  <!-- Avatar/Action Button Group -->
  <div class="space-y-2 pt-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타/아이콘 버튼 그룹</h4>
    <div class="inline-flex rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button class="px-4 py-2 bg-white text-xs font-bold text-slate-700 border-r border-slate-200">수정</button>
      <button class="px-4 py-2 bg-white text-xs font-bold text-slate-700 border-r border-slate-200">미리보기</button>
      <button class="px-4 py-2 bg-white text-xs font-bold text-slate-700">삭제</button>
    </div>
  </div>
</div>`,css:"",js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <title>버튼 그룹</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-4">
      <div class="space-y-2">
        <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">가로형 버튼 그룹</h4>
        <div class="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <button class="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700">오늘</button>
          <button class="px-5 py-2.5 bg-slate-50 dark:bg-slate-700 text-xs font-bold text-indigo-600 dark:text-white border-r border-slate-200 dark:border-slate-700">이번 주</button>
          <button class="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">이번 달</button>
        </div>
      </div>
      <div class="space-y-2 pt-2">
        <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타/아이콘 버튼 그룹</h4>
        <div class="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <button class="px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700">수정</button>
          <button class="px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700">미리보기</button>
          <button class="px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">삭제</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`},k={react:`import React from 'react';

const BadgesShowcase = () => {
  return (
    <div className="space-y-4 p-4 dark:bg-slate-900 rounded-xl">
      {/* Soft Badges */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">소프트 배지 (Soft Colors)</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">대시보드</span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">작업 완료</span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">진행 중</span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">반려됨</span>
        </div>
      </div>

      {/* Solid Badges */}
      <div className="space-y-2 pt-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">솔리드 배지 (Solid Colors)</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#4B62FA] text-white">NEW</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500 text-white">ACTIVE</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-rose-500 text-white">FAIL</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-slate-900 dark:bg-slate-700 text-white">99+</span>
        </div>
      </div>

      {/* Status Dot Overlays */}
      <div className="space-y-2 pt-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타 활동 상태 닷 (Status dot)</h4>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
              <img src="https://i.pravatar.cc/150?u=1" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800"></span>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
              <img src="https://i.pravatar.cc/150?u=4" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-slate-800"></span>
          </div>
        </div>
      </div>
    </div>
  );
};`,html:`<div class="space-y-4 p-4">
  <!-- Soft Badges -->
  <div class="space-y-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">소프트 배지 (Soft Colors)</h4>
    <div class="flex flex-wrap gap-2">
      <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600">대시보드</span>
      <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">작업 완료</span>
      <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600">진행 중</span>
      <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600">반려됨</span>
    </div>
  </div>

  <!-- Solid Badges -->
  <div class="space-y-2 pt-2">
    <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">솔리드 배지 (Solid Colors)</h4>
    <div class="flex flex-wrap gap-2">
      <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#4B62FA] text-white">NEW</span>
      <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500 text-white">ACTIVE</span>
      <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-rose-500 text-white">FAIL</span>
      <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-slate-900 text-white">99+</span>
    </div>
  </div>
</div>`,css:"",js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <title>배지 및 상태 라벨</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-4">
      <div class="space-y-2">
        <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">소프트 배지 (Soft Colors)</h4>
        <div class="flex flex-wrap gap-2">
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">대시보드</span>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">작업 완료</span>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">진행 중</span>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">반려됨</span>
        </div>
      </div>
      <div class="space-y-2 pt-2">
        <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">솔리드 배지 (Solid Colors)</h4>
        <div class="flex flex-wrap gap-2">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#4B62FA] text-white">NEW</span>
          <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500 text-white">ACTIVE</span>
          <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-rose-500 text-white">FAIL</span>
          <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-slate-900 dark:bg-slate-700 text-white">99+</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`},s={buttonThemes:v,buttonSizesInteractive:f,buttonGroups:w,badges:k},j=()=>{const[a,n]=o.useState(!1),[i,r]=o.useState(!1),x=()=>{a||(n(!0),r(!1),setTimeout(()=>{n(!1),r(!0)},2e3))};return t.jsxs("div",{className:"space-y-6 pb-20 font-sans",children:[t.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:t.jsxs("div",{children:[t.jsx("h1",{className:"text-[26px] font-bold text-slate-900 dark:text-white leading-tight",children:"버튼 & 배지"}),t.jsxs("div",{className:"flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1",children:[t.jsx("span",{children:"홈"}),t.jsx(d,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"UI 요소"}),t.jsx(d,{className:"w-3.5 h-3.5"}),t.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-medium",children:"버튼 & 배지"})]})]})}),t.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[t.jsx(e,{title:"버튼 테마 스타일",description:"용도와 중요도에 맞춰 세분화된 테마 스타일입니다.",snippet:s.buttonThemes,children:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"배경이 찬 버튼 (Filled)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx("button",{className:"px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:"기본 인디고"}),t.jsx("button",{className:"px-5 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:"다크 테마"}),t.jsx("button",{className:"px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:"에메랄드"}),t.jsx("button",{className:"px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:"경고 로즈"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"테두리형 버튼 (Outlined)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx("button",{className:"px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"보통 테두리"}),t.jsx("button",{className:"px-5 py-2.5 border border-indigo-500 hover:bg-indigo-500/10 text-indigo-500 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"인디고 라인"}),t.jsx("button",{className:"px-5 py-2.5 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"그린 라인"}),t.jsx("button",{className:"px-5 py-2.5 border border-rose-500 hover:bg-rose-500/10 text-rose-500 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"레드 라인"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"고스트 텍스트 버튼 (Ghost)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx("button",{className:"px-4 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:"회색 고스트"}),t.jsx("button",{className:"px-4 py-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"인디고 고스트"}),t.jsx("button",{className:"px-4 py-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"레드 고스트"})]})]})]})}),t.jsx(e,{title:"버튼 규격 & 상호작용",description:"상황에 알맞은 크기와 아이콘 연동, 액티브 로더 예시입니다.",snippet:s.buttonSizesInteractive,children:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"버튼 크기 (Sizes)"}),t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("button",{className:"px-3 py-1.5 bg-[#4B62FA] text-white rounded-lg text-[10px] font-black tracking-wider uppercase cursor-pointer",children:"Mini"}),t.jsx("button",{className:"px-4 py-2 bg-[#4B62FA] text-white rounded-lg text-xs font-bold cursor-pointer",children:"Small"}),t.jsx("button",{className:"px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold cursor-pointer",children:"Medium"}),t.jsx("button",{className:"px-7 py-3.5 bg-[#4B62FA] text-white rounded-2xl text-sm font-black tracking-wide cursor-pointer",children:"Large Size"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"아이콘 연동 버튼"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer",children:[t.jsx(b,{className:"w-3.5 h-3.5"}),"메시지 보내기"]}),t.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer",children:["내보내기",t.jsx(p,{className:"w-3.5 h-3.5"})]}),t.jsx("button",{className:"p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all cursor-pointer",children:t.jsx(u,{className:"w-4 h-4"})})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"로딩 상태 시뮬레이션"}),t.jsx("div",{children:t.jsx("button",{onClick:x,className:"flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer",children:a?t.jsxs(t.Fragment,{children:[t.jsx(h,{className:"w-4 h-4 animate-spin text-indigo-400"}),"처리 중..."]}):i?t.jsxs(t.Fragment,{children:[t.jsx(g,{className:"w-4 h-4 text-emerald-400"}),"전송 성공"]}):t.jsxs(t.Fragment,{children:["클릭하여 업로드",t.jsx(m,{className:"w-3.5 h-3.5"})]})})})]})]})}),t.jsx(e,{title:"버튼 그룹 (Button Groups)",description:"밀접하게 붙여서 다중 분기를 깔끔하게 컨트롤하는 구조입니다.",snippet:s.buttonGroups,children:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"가로형 버튼 그룹"}),t.jsxs("div",{className:"inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm",children:[t.jsx("button",{className:"px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700 cursor-pointer",children:"오늘"}),t.jsx("button",{className:"px-5 py-2.5 bg-slate-50 dark:bg-slate-700 text-xs font-bold text-indigo-600 dark:text-white border-r border-slate-200 dark:border-slate-700 cursor-pointer",children:"이번 주"}),t.jsx("button",{className:"px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer",children:"이번 달"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"아바타/아이콘 버튼 그룹"}),t.jsx("div",{className:"inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm",children:["수정","미리보기","삭제"].map((c,l)=>t.jsx("button",{className:`px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer ${l!==2?"border-r border-slate-200 dark:border-slate-700":""}`,children:c},l))})]})]})}),t.jsx(e,{title:"배지 및 상태 라벨 (Badges)",description:"상태 정보나 개수를 표현하기 적절한 스타일 칩셋입니다.",snippet:s.badges,children:t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"소프트 배지 (Soft Colors)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",children:"대시보드"}),t.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",children:"작업 완료"}),t.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",children:"진행 중"}),t.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",children:"반려됨"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"솔리드 배지 (Solid Colors)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx("span",{className:"px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#4B62FA] text-white",children:"NEW"}),t.jsx("span",{className:"px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500 text-white",children:"ACTIVE"}),t.jsx("span",{className:"px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-rose-500 text-white",children:"FAIL"}),t.jsx("span",{className:"px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-slate-900 dark:bg-slate-700 text-white",children:"99+"})]})]}),t.jsxs("div",{className:"space-y-2 pt-2",children:[t.jsx("h4",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"아바타 활동 상태 닷 (Status dot)"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm",children:t.jsx("img",{src:"https://i.pravatar.cc/150?u=1",alt:"avatar",className:"w-full h-full object-cover"})}),t.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800"})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm",children:t.jsx("img",{src:"https://i.pravatar.cc/150?u=4",alt:"avatar",className:"w-full h-full object-cover"})}),t.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-slate-800"})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm",children:t.jsx("img",{src:"https://i.pravatar.cc/150?u=9",alt:"avatar",className:"w-full h-full object-cover"})}),t.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800"})]})]})]})]})})]})]})};export{j as default};
