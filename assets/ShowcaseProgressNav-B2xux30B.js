import{b as r,j as e,H as c,ac as g,R as u,N as f,h as v}from"./vendor-react-CmoVjuNX.js";import{S as a}from"./ShowcaseWrapper-xKyl-VYD.js";const h={react:`import React, { useState } from 'react';
import { Play, RefreshCw } from 'lucide-react';

const ProgressShowcase = () => {
  const [progress, setProgress] = useState(45);

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="space-y-6 p-4 dark:bg-slate-900 rounded-xl">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold">진행률 지표 (Progress)</span>
        <div className="flex gap-2">
          <button onClick={simulateProgress} className="p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl transition-all cursor-pointer">
            <Play className="w-4 h-4" />
          </button>
          <button onClick={() => setProgress(45)} className="p-2 border border-slate-200 rounded-xl transition-all cursor-pointer">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-655">
          <span>프로젝트 진행도</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out" style={{ width: \`\${progress}%\` }} />
        </div>
      </div>
    </div>
  );
};`,html:`<div class="space-y-6 p-4">
  <div class="flex justify-between items-center">
    <span class="text-sm font-bold">진행률 지표 (Progress)</span>
    <div class="flex gap-2">
      <button id="btn-play-progress" class="p-2 bg-indigo-50 text-indigo-600 rounded-xl transition-all">
        <i data-lucide="play" class="w-4 h-4"></i>
      </button>
      <button id="btn-reset-progress" class="p-2 border border-slate-200 rounded-xl transition-all">
        <i data-lucide="refresh-cw" class="w-4 h-4"></i>
      </button>
    </div>
  </div>
  <div class="space-y-2">
    <div class="flex justify-between text-xs font-bold text-slate-600">
      <span>프로젝트 진행도</span>
      <span id="progress-percentage">45%</span>
    </div>
    <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
      <div id="progress-bar" class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out" style="width: 45%"></div>
    </div>
  </div>
</div>`,css:"",js:`document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('btn-play-progress');
  const resetBtn = document.getElementById('btn-reset-progress');
  const progressBar = document.getElementById('progress-bar');
  const progressPct = document.getElementById('progress-percentage');
  
  if (playBtn && resetBtn && progressBar && progressPct) {
    let interval;
    playBtn.addEventListener('click', () => {
      clearInterval(interval);
      let width = 0;
      progressBar.style.width = '0%';
      progressPct.textContent = '0%';
      
      interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
        } else {
          width += 5;
          progressBar.style.width = width + '%';
          progressPct.textContent = width + '%';
        }
      }, 100);
    });
    
    resetBtn.addEventListener('click', () => {
      clearInterval(interval);
      progressBar.style.width = '45%';
      progressPct.textContent = '45%';
    });
  }
});`,fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/lucide@latest"><\/script>
  <title>진행률 지표</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <span class="text-sm font-bold dark:text-white">진행률 지표 (Progress)</span>
        <div class="flex gap-2">
          <button id="btn-play-progress" class="p-2 bg-indigo-50 text-indigo-600 rounded-xl transition-all">
            <i data-lucide="play" class="w-4 h-4"></i>
          </button>
          <button id="btn-reset-progress" class="p-2 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-xl transition-all">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
      <div class="space-y-2">
        <div class="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
          <span>프로젝트 진행도</span>
          <span id="progress-percentage">45%</span>
        </div>
        <div class="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div id="progress-bar" class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out" style="width: 45%"></div>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const playBtn = document.getElementById('btn-play-progress');
      const resetBtn = document.getElementById('btn-reset-progress');
      const progressBar = document.getElementById('progress-bar');
      const progressPct = document.getElementById('progress-percentage');
      
      if (playBtn && resetBtn && progressBar && progressPct) {
        let interval;
        playBtn.addEventListener('click', () => {
          clearInterval(interval);
          let width = 0;
          progressBar.style.width = '0%';
          progressPct.textContent = '0%';
          
          interval = setInterval(() => {
            if (width >= 100) {
              clearInterval(interval);
            } else {
              width += 5;
              progressBar.style.width = width + '%';
              progressPct.textContent = width + '%';
            }
          }, 100);
        });
        
        resetBtn.addEventListener('click', () => {
          clearInterval(interval);
          progressBar.style.width = '45%';
          progressPct.textContent = '45%';
        });
      }
    });
    if (window.lucide) window.lucide.createIcons();
  <\/script>
</body>
</html>`},w={react:`import React from 'react';
import { Check } from 'lucide-react';

const Steppers = () => {
  return (
    <div className="flex items-center justify-between relative py-4 max-w-md mx-auto dark:bg-slate-900 rounded-xl p-4">
      <div className="absolute top-[34px] left-[30px] right-[30px] h-[2px] bg-slate-100 dark:bg-slate-700 -z-10">
        <div className="h-full bg-indigo-500 w-1/2" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
          <Check className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-slate-800 dark:text-white">본인 인증</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-indigo-50 dark:border-indigo-950">
          2
        </div>
        <span className="text-xs font-bold text-indigo-500">정보 입력</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm">
          3
        </div>
        <span className="text-xs font-bold text-slate-400">완료</span>
      </div>
    </div>
  );
};`,html:`<div class="flex items-center justify-between relative py-4 max-w-md mx-auto">
  <div class="absolute top-[34px] left-[30px] right-[30px] h-[2px] bg-slate-100 -z-10">
    <div class="h-full bg-indigo-500 w-1/2"></div>
  </div>
  <div class="flex flex-col items-center gap-2">
    <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
      <i data-lucide="check" class="w-5 h-5"></i>
    </div>
    <span class="text-xs font-bold text-slate-800">본인 인증</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-indigo-50">
      2
    </div>
    <span class="text-xs font-bold text-indigo-500">정보 입력</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-sm">
      3
    </div>
    <span class="text-xs font-bold text-slate-400">완료</span>
  </div>
</div>`,css:"",js:"",fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/lucide@latest"><\/script>
  <title>단계별 스태퍼</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="flex items-center justify-between relative py-4 max-w-md mx-auto">
      <div class="absolute top-[34px] left-[30px] right-[30px] h-[2px] bg-slate-100 dark:bg-slate-700 -z-10">
        <div class="h-full bg-indigo-500 w-1/2"></div>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
          <i data-lucide="check" class="w-5 h-5"></i>
        </div>
        <span class="text-xs font-bold text-slate-800 dark:text-white">본인 인증</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-indigo-50 dark:border-indigo-950">
          2
        </div>
        <span class="text-xs font-bold text-indigo-500">정보 입력</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-555 flex items-center justify-center font-bold text-sm">
          3
        </div>
        <span class="text-xs font-bold text-slate-400 dark:text-slate-500">완료</span>
      </div>
    </div>
  </div>
  <script>
    if(window.lucide) window.lucide.createIcons();
  <\/script>
</body>
</html>`},k={react:`import React, { useState } from 'react';

const TabsShowcase = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'settings' | 'security'>('info');

  return (
    <div className="space-y-6 p-4 dark:bg-slate-900 rounded-xl">
      <div className="border-b border-slate-100 dark:border-slate-700 flex gap-6">
        {[
          { id: 'info', label: '개인정보' },
          { id: 'settings', label: '환경설정' },
          { id: 'security', label: '보안옵션' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={\`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer \${
              activeTab === tab.id ? 'border-indigo-500 text-indigo-500' : 'border-transparent text-slate-400'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-2xl border border-slate-100/50 dark:border-slate-850 text-sm leading-relaxed text-slate-655">
        {activeTab === 'info' && '지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.'}
        {activeTab === 'settings' && '시스템 다크 테마 우선 감지 모드 활성화 및 정기 자동 백업 주기가 매일 오전 04:00시로 지정되었습니다.'}
        {activeTab === 'security' && '2단계 다중 로그인 차단 보호 조치 활성화 상태이며, 마지막 패스워드 갱신은 45일 전입니다.'}
      </div>
    </div>
  );
};`,html:`<div class="space-y-6 p-4">
  <div class="border-b border-slate-100 flex gap-6">
    <button onclick="switchTab('info')" id="tab-info" class="pb-3 text-sm font-bold border-b-2 border-indigo-500 text-indigo-500">개인정보</button>
    <button onclick="switchTab('settings')" id="tab-settings" class="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400">환경설정</button>
    <button onclick="switchTab('security')" id="tab-security" class="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400">보안옵션</button>
  </div>
  <div id="tab-content" class="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm leading-relaxed text-slate-600">
    지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.
  </div>
</div>`,css:"",js:`function switchTab(tabId) {
  const contents = {
    info: '지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.',
    settings: '시스템 다크 테마 우선 감지 모드 활성화 및 정기 자동 백업 주기가 매일 오전 04:00시로 지정되었습니다.',
    security: '2단계 다중 로그인 차단 보호 조치 활성화 상태이며, 마지막 패스워드 갱신은 45일 전입니다.'
  };
  
  const buttons = ['info', 'settings', 'security'];
  buttons.forEach(id => {
    const btn = document.getElementById('tab-' + id);
    if (btn) {
      if (id === tabId) {
        btn.className = 'pb-3 text-sm font-bold border-b-2 border-indigo-500 text-indigo-500';
      } else {
        btn.className = 'pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400';
      }
    }
  });
  
  const contentDiv = document.getElementById('tab-content');
  if (contentDiv) {
    contentDiv.textContent = contents[tabId];
  }
}`,fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <title>탭 네비게이션</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-6">
      <div class="border-b border-slate-100 dark:border-slate-700 flex gap-6">
        <button onclick="switchTab('info')" id="tab-info" class="pb-3 text-sm font-bold border-b-2 border-indigo-500 text-indigo-500">개인정보</button>
        <button onclick="switchTab('settings')" id="tab-settings" class="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400 dark:text-slate-500">환경설정</button>
        <button onclick="switchTab('security')" id="tab-security" class="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400 dark:text-slate-500">보안옵션</button>
      </div>
      <div id="tab-content" class="p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-2xl border border-slate-100/50 dark:border-slate-800 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.
      </div>
    </div>
  </div>

  <script>
    function switchTab(tabId) {
      const contents = {
        info: '지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.',
        settings: '시스템 다크 테마 우선 감지 모드 활성화 및 정기 자동 백업 주기가 매일 오전 04:00시로 지정되었습니다.',
        security: '2단계 다중 로그인 차단 보호 조치 활성화 상태이며, 마지막 패스워드 갱신은 45일 전입니다.'
      };
      
      const buttons = ['info', 'settings', 'security'];
      buttons.forEach(id => {
        const btn = document.getElementById('tab-' + id);
        if (btn) {
          if (id === tabId) {
            btn.className = 'pb-3 text-sm font-bold border-b-2 border-indigo-500 text-indigo-500';
          } else {
            btn.className = 'pb-3 text-sm font-bold border-b-2 border-transparent text-slate-400 dark:text-slate-500';
          }
        }
      });
      
      const contentDiv = document.getElementById('tab-content');
      if (contentDiv) {
        contentDiv.textContent = contents[tabId];
      }
    }
  <\/script>
</body>
</html>`},y={react:`import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionShowcase = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accordionData = [
    { title: '디자인 시스템의 컴포넌트는 재사용 가능한가요?', content: '네, 모든 컴포넌트는 독립적인 모듈로 작성되어 클래스 설정이나 Props 설정을 통해 손쉽게 다른 프로젝트로 이관 및 재사용할 수 있습니다.' },
    { title: '다크 모드는 테일윈드에서 어떻게 감지하나요?', content: '기본적으로 HTML <html> 태그의 classList에 "dark" 클래스를 토글하는 방식으로 설정되어 있으며, Tailwind CSS v4의 컴파일러가 이를 인지해 스타일을 자동 전환합니다.' }
  ];

  return (
    <div className="space-y-3 p-4 dark:bg-slate-900 rounded-xl">
      {accordionData.map((item, idx) => (
        <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
          <button onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-800 dark:text-white cursor-pointer">
            <span>{item.title}</span>
            <ChevronDown className={\`w-4 h-4 text-slate-400 transition-transform duration-300 \${openAccordion === idx ? 'rotate-180' : ''}\`} />
          </button>
          {openAccordion === idx && (
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs leading-relaxed text-slate-555">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`,html:`<div class="space-y-3 p-4">
  <div class="border border-slate-100 rounded-xl overflow-hidden">
    <button onclick="toggleAccordion(0)" class="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 font-bold text-sm text-slate-800">
      <span>디자인 시스템의 컴포넌트는 재사용 가능한가요?</span>
      <i id="icon-0" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300 rotate-180"></i>
    </button>
    <div id="content-0" class="p-4 border-t border-slate-100 bg-slate-50/50 text-xs leading-relaxed text-slate-500">
      네, 모든 컴포넌트는 독립적인 모듈로 작성되어 클래스 설정이나 Props 설정을 통해 손쉽게 다른 프로젝트로 이관 및 재사용할 수 있습니다.
    </div>
  </div>

  <div class="border border-slate-100 rounded-xl overflow-hidden">
    <button onclick="toggleAccordion(1)" class="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 font-bold text-sm text-slate-800">
      <span>다크 모드는 테일윈드에서 어떻게 감지하나요?</span>
      <i id="icon-1" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300"></i>
    </button>
    <div id="content-1" class="hidden p-4 border-t border-slate-100 bg-slate-50/50 text-xs leading-relaxed text-slate-500">
      기본적으로 HTML &lt;html&gt; 태그의 classList에 "dark" 클래스를 토글하는 방식으로 설정되어 있으며, Tailwind CSS v4의 컴파일러가 이를 인지해 스타일을 자동 전환합니다.
    </div>
  </div>
</div>`,css:"",js:`function toggleAccordion(idx) {
  const indexes = [0, 1];
  indexes.forEach(i => {
    const content = document.getElementById('content-' + i);
    const icon = document.getElementById('icon-' + i);
    if (content && icon) {
      if (i === idx) {
        const isHidden = content.classList.contains('hidden');
        if (isHidden) {
          content.classList.remove('hidden');
          icon.classList.add('rotate-180');
        } else {
          content.classList.add('hidden');
          icon.classList.remove('rotate-180');
        }
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }
  });
}`,fullHtml:`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/lucide@latest"><\/script>
  <title>아코디언 토글</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] ">
  <div class="max-w-full mx-auto bg-white dark:bg-slate-900 rounded-2xl dark:border-slate-800 p-6">
    <div class="space-y-3">
      <div class="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
        <button onclick="toggleAccordion(0)" class="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-800 dark:text-white">
          <span>디자인 시스템의 컴포넌트는 재사용 가능한가요?</span>
          <i id="icon-0" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300 rotate-180"></i>
        </button>
        <div id="content-0" class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          네, 모든 컴포넌트는 독립적인 모듈로 작성되어 클래스 설정이나 Props 설정을 통해 손쉽게 다른 프로젝트로 이관 및 재사용할 수 있습니다.
        </div>
      </div>
      <div class="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
        <button onclick="toggleAccordion(1)" class="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-800 dark:text-white">
          <span>다크 모드는 테일윈드에서 어떻게 감지하나요?</span>
          <i id="icon-1" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300"></i>
        </button>
        <div id="content-1" class="hidden p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          기본적으로 HTML &lt;html&gt; 태그의 classList에 "dark" 클래스를 토글하는 방식으로 설정되어 있으며, Tailwind CSS v4의 컴파일러가 이를 인지해 스타일을 자동 전환합니다.
        </div>
      </div>
    </div>
  </div>
  <script>
    function toggleAccordion(idx) {
      const indexes = [0, 1];
      indexes.forEach(i => {
        const content = document.getElementById('content-' + i);
        const icon = document.getElementById('icon-' + i);
        if (content && icon) {
          if (i === idx) {
            const isHidden = content.classList.contains('hidden');
            if (isHidden) {
              content.classList.remove('hidden');
              icon.classList.add('rotate-180');
            } else {
              content.classList.add('hidden');
              icon.classList.remove('rotate-180');
            }
          } else {
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
          }
        }
      });
    }
    if(window.lucide) window.lucide.createIcons();
  <\/script>
</body>
</html>`},l={progress:h,steps:w,tabs:k,accordions:y},B=()=>{const[o,i]=r.useState(45),[s,b]=r.useState("info"),[d,x]=r.useState(0),p=()=>{i(0);const t=setInterval(()=>{i(n=>n>=100?(clearInterval(t),100):n+5)},100)},m=[{title:"디자인 시스템의 컴포넌트는 재사용 가능한가요?",content:"네, 모든 컴포넌트는 독립적인 모듈로 작성되어 클래스 설정이나 Props 설정을 통해 손쉽게 다른 프로젝트로 이관 및 재사용할 수 있습니다."},{title:"다크 모드는 테일윈드에서 어떻게 감지하나요?",content:'기본적으로 HTML <html> 태그의 classList에 "dark" 클래스를 토글하는 방식으로 설정되어 있으며, Tailwind CSS v4의 컴파일러가 이를 인지해 스타일을 자동 전환합니다.'},{title:"차트 라이브러리 ECharts 외에 다른 것도 지원하나요?",content:"프로젝트에 이미 echarts와 echarts-for-react가 의존성으로 설치되어 있으며, 반응형 크기 자동 조절 등 대시보드 맞춤형 커스텀이 추가로 도입되어 있습니다."}];return e.jsxs("div",{className:"space-y-6 pb-20 font-sans",children:[e.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-[26px] font-bold text-slate-900 dark:text-white leading-tight",children:"진행률 & 네비게이션"}),e.jsxs("div",{className:"flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1",children:[e.jsx("span",{children:"홈"}),e.jsx(c,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"UI 요소"}),e.jsx(c,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-medium",children:"진행률 & 네비게이션"})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[e.jsx(a,{title:"진행률 지표 (Progress)",description:"진행도를 정밀하게 전달하는 슬라이더 스케일입니다.",snippet:l.progress,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400",children:"시뮬레이션"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:p,className:"p-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-xl transition-all cursor-pointer",children:e.jsx(g,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>i(45),className:"p-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 rounded-xl transition-all cursor-pointer",children:e.jsx(u,{className:"w-4 h-4"})})]})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400",children:[e.jsx("span",{children:"프로젝트 진행도"}),e.jsxs("span",{children:[o,"%"]})]}),e.jsx("div",{className:"w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out",style:{width:`${o}%`}})})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400",children:[e.jsx("span",{children:"디스크 임계치 초과 경고 (임시값 85%)"}),e.jsx("span",{className:"text-rose-500",children:"85%"})]}),e.jsx("div",{className:"w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-rose-500 rounded-full",style:{width:"85%"}})})]})]})]})}),e.jsx(a,{title:"단계별 스태퍼 (Steps)",description:"업무 처리나 회원가입 시 여러 단계를 유도하는 타임라인 스태퍼입니다.",snippet:l.steps,children:e.jsxs("div",{className:"flex items-center justify-between relative max-h-full mx-auto py-4 w-full",children:[e.jsx("div",{className:"absolute top-[34px] left-[30px] right-[30px] h-[2px] bg-slate-100 dark:bg-slate-700 -z-10",children:e.jsx("div",{className:"h-full bg-indigo-500 w-1/2 transition-all duration-500"})}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-100 dark:shadow-none",children:e.jsx(f,{className:"w-5 h-5"})}),e.jsx("span",{className:"text-xs font-bold text-slate-800 dark:text-white",children:"본인 인증"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm border-4 border-indigo-50 dark:border-indigo-950",children:"2"}),e.jsx("span",{className:"text-xs font-bold text-indigo-500",children:"정보 입력"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 flex items-center justify-center font-bold text-sm border-2 border-transparent",children:"3"}),e.jsx("span",{className:"text-xs font-bold text-slate-400 dark:text-slate-500",children:"완료"})]})]})}),e.jsx(a,{title:"탭 네비게이션 (Tabs)",description:"부드러운 테일윈드 언더라인과 스위칭 탭 예시입니다.",snippet:l.tabs,children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"border-b border-slate-100 dark:border-slate-700 flex gap-6",children:[{id:"info",label:"개인정보"},{id:"settings",label:"환경설정"},{id:"security",label:"보안옵션"}].map(t=>e.jsx("button",{onClick:()=>b(t.id),className:`pb-3 text-sm font-bold border-b-2 transition-all cursor-pointer ${s===t.id?"border-indigo-500 text-indigo-500":"border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,children:t.label},t.id))}),e.jsxs("div",{className:"p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-2xl border border-slate-100/50 dark:border-slate-800 text-sm leading-relaxed text-slate-600 dark:text-slate-300",children:[s==="info"&&"지안나 마르티네즈 님의 이메일은 design@example.com 이며, 서울 마포구에 오피스가 위치하고 있습니다.",s==="settings"&&"시스템 다크 테마 우선 감지 모드 활성화 및 정기 자동 백업 주기가 매일 오전 04:00시로 지정되었습니다.",s==="security"&&"2단계 다중 로그인 차단 보호 조치 활성화 상태이며, 마지막 패스워드 갱신은 45일 전입니다."]})]})}),e.jsx(a,{title:"아코디언 토글 (Accordions)",description:"질문 답변(FAQ)이나 카테고리 확장에 자주 사용되는 구조입니다.",snippet:l.accordions,children:e.jsx("div",{className:"space-y-3",children:m.map((t,n)=>e.jsxs("div",{className:"border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden",children:[e.jsxs("button",{onClick:()=>x(d===n?null:n),className:"w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-sm text-slate-800 dark:text-white cursor-pointer",children:[e.jsx("span",{children:t.title}),e.jsx(v,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${d===n?"rotate-180":""}`})]}),d===n&&e.jsx("div",{className:"p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs leading-relaxed text-slate-500 dark:text-slate-400 animate-slide-down",children:t.content})]},n))})})]})]})};export{B as default};
