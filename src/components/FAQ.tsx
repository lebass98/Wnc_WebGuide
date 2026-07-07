import React, { useState } from 'react';
import { 
  ChevronDown, 
  Plus, 
  Minus, 
  Info, 
  ChevronRight, 
  Code, 
  Copy, 
  Check, 
  X 
} from 'lucide-react';

interface CodeSnippet {
  title: string;
  react: string;
  html: string;
  css: string;
  js: string;
}

const FAQ: React.FC = () => {
  const [openFaq1, setOpenFaq1] = useState<number | null>(0);
  const [openFaq2, setOpenFaq2] = useState<number | null>(0);

  // Code preview modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState<CodeSnippet | null>(null);
  
  // 'react' for React version code, 'html' for HTML, CSS, JS version code
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  // Sub-tabs when codeMode is 'html'
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  const [isCopied, setIsCopied] = useState(false);

  const faqData1 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "무제한 프로젝트란 본 서비스를 활용하여 진행할 수 있는 웹, 앱 등의 프로젝트 생성 개수에 어떠한 제한도 두지 않는다는 것을 의미합니다. 하나의 라이선스로 원하는 만큼 프로젝트를 구축할 수 있습니다."
    }
  ];

  const faqData2 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다."
    },
    {
      question: "어떤 라이선스가 제게 적합한가요?",
      answer: "스타트업이나 소규모 팀인 경우 스탠다드 라이선스가 적합하며, 다수의 프로젝트와 여러 명의 협업 개발자가 있는 대규모 에이전시나 엔터프라이즈의 경우 팀 혹은 엔터프라이즈 라이선스를 권장합니다."
    },
    {
      question: "가격 정책에 언급된 \"시트(Seats)\"는 무엇인가요?",
      answer: "시트(Seats)는 대시보드 관리자 페이지에 접근하거나 프로젝트 개발에 직접 참여하는 개발자 혹은 관리자 계정의 수를 의미합니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 완전히 가능합니다. 제공되는 코드를 바탕으로 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "프로젝트 진행 개수에 한도를 두지 않는다는 의미입니다. 단일 라이선스로 다수의 서비스 애플리케이션에 적용하실 수 있습니다."
    },
    {
      question: "더 상위 요금제로 업그레이드할 수 있나요?",
      answer: "언제든지 고객 지원 버튼을 통해 요금제 업그레이드를 신청하실 수 있으며, 결제 금액은 사용한 날짜를 제외하고 일할 계산되어 청구됩니다."
    },
    {
      question: "다크 모드와 라이트 모드를 지원하나요?",
      answer: "예, 제공되는 컴포넌트는 기본적으로 다크/라이트 테마에 완벽하게 대응하도록 설계되었으며, 시스템 설정에 따라 적절한 테마가 자동으로 적용됩니다."
    }
  ];

  const faqData3 = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경할 수 있습니다."
    },
    {
      question: "어떤 라이선스가 제게 적합한가요?",
      answer: "개인 개발자라면 기본 라이선스를, 기업 고객이라면 확장 라이선스를 추천해 드립니다. 자세한 비교 내용은 결제 페이지에서 확인하세요."
    },
    {
      question: "\"무제한 프로젝트\"는 무슨 뜻인가요?",
      answer: "무제한 프로젝트란 본 플랫폼 내에서 생성하거나 운영할 워크스페이스나 애플리케이션 프로젝트 개수에 상한제가 없음을 의미합니다. 자유롭게 다양한 서비스 모델을 개발하고 런칭할 수 있습니다."
    },
    {
      question: "가격 정책에 언급된 \"시트(Seats)\"는 무엇인가요?",
      answer: "시트(Seats)는 서비스를 구독하여 이용할 수 있는 인증된 활성 사용자 혹은 팀원의 최대 허용 인원을 뜻합니다."
    }
  ];

  // Code snippets data map
  const codeSnippets: Record<string, CodeSnippet> = {
    faq1: {
      title: "FAQ 유형 1 (보더 아코디언)",
      react: `import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BorderAccordionFaq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqData = [
    { question: "무료 업데이트가 지원되나요?", answer: "..." },
    { question: "대시보드 커스터마이징 가능 여부", answer: "..." }
  ];
  
  return (
    <div className="space-y-4">
      {faqData.map((item, idx) => (
        <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
          <button 
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
            <div className={\`w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 \${openIdx === idx ? 'rotate-180' : ''}\`}>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </div>
          </button>
          <div className={\`transition-all duration-300 ease-in-out \${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden\`}>
            <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};`,
      html: `<!-- 일반 정적 HTML 마크업 (3개 항목 펼침 버전) -->
<div class="faq-container" style="display: flex; flex-direction: column; gap: 16px;">
  
  <!-- 항목 1 (활성화 상태) -->
  <div class="faq-item active" style="border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden; transition: all 0.3s ease;">
    <button class="faq-trigger" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 24px; border: none; background: transparent; text-align: left; cursor: pointer;">
      <span style="font-weight: 700; color: #1e293b;">무료 업데이트가 지원되나요?</span>
      <div class="icon-circle" style="width: 32px; height: 32px; border-radius: 50%; background: #f8fafc; display: flex; align-items: center; justify-content: center; transform: rotate(180deg); transition: transform 0.3s;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </button>
    <div class="faq-content" style="max-height: 400px; opacity: 1; transition: all 0.3s ease; border-top: 1px solid #f1f5f9;">
      <div style="padding: 24px; padding-top: 0px; font-size: 14px; line-height: 1.6; color: #64748b;">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내 모든 주요 패치를 무료 제공합니다.
      </div>
    </div>
  </div>

  <!-- 항목 2 (비활성화 상태) -->
  <div class="faq-item" style="border: 1px solid #f1f5f9; border-radius: 8px; overflow: hidden; transition: all 0.3s ease;">
    <button class="faq-trigger" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 24px; border: none; background: transparent; text-align: left; cursor: pointer;">
      <span style="font-weight: 700; color: #1e293b;">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
      <div class="icon-circle" style="width: 32px; height: 32px; border-radius: 50%; background: #f8fafc; display: flex; align-items: center; justify-content: center; transform: rotate(0deg); transition: transform 0.3s;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </button>
    <div class="faq-content" style="max-height: 0px; opacity: 0; overflow: hidden; transition: all 0.3s ease;">
      <div style="padding: 24px; padding-top: 0px; font-size: 14px; line-height: 1.6; color: #64748b;">
        네, 모듈화되어 있으며, 각 컴포넌트들을 설정에 맞춰 수정할 수 있도록 정교하게 설계되어 있습니다.
      </div>
    </div>
  </div>

</div>`,
      css: `/* CSS / Tailwind CSS Utility Classes */
.border-slate-100 { border-color: #f1f5f9; }
.dark .dark\\:border-slate-800 { border-color: #1e293b; }
.rounded-lg { border-radius: 0.5rem; }
.transition-all { transition-property: all; }
.duration-300 { transition-duration: 300ms; }
.rotate-180 { transform: rotate(180deg); }
.max-h-96 { max-height: 24rem; }
.max-h-0 { max-height: 0px; }
.overflow-hidden { overflow: hidden; }`,
      js: `// Vanilla JavaScript 아코디언 토글 제어 이벤트 바인딩
document.querySelectorAll('.faq-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const content = item.querySelector('.faq-content');
    const circle = button.querySelector('.icon-circle');
    
    const isActive = item.classList.toggle('active');
    
    if (isActive) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
      circle.style.transform = 'rotate(180deg)';
    } else {
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      circle.style.transform = 'rotate(0deg)';
    }
  });
});`
    },
    faq2: {
      title: "FAQ 유형 2 (스위칭 배경 아코디언)",
      react: `import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const SwitchingBgFaq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqData = [
    { question: "무료 업데이트가 지원되나요?", answer: "..." },
    { question: "어떤 라이선스가 제게 적합한가요?", answer: "..." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className={\`w-full flex items-center justify-between p-5 text-left transition-colors \${openIdx === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}\`}
            >
              <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
              {openIdx === idx ? (
                <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              ) : (
                <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              )}
            </button>
            <div className={\`transition-all duration-300 ease-in-out \${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden\`}>
              <div className={\`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 \${openIdx === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}\`}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`,
      html: `<!-- 일반 정적 HTML 마크업 (배경 스위칭 테마형) -->
<div class="faq-switching-container" style="display: grid; grid-template-cols: 1fr; gap: 16px;">
  
  <!-- 활성화된 카드 (연한 보라/인디고 배경) -->
  <div class="faq-card active" style="border-radius: 8px; overflow: hidden; transition: background 0.3s;">
    <button class="faq-btn" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px; border: none; background: #e0e7ff; text-align: left; cursor: pointer;">
      <span style="font-weight: 700; color: #1e293b;">무료 업데이트가 지원되나요?</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <div class="faq-content" style="max-height: 400px; opacity: 1; background: #e0e7ff;">
      <div style="padding: 20px; padding-top: 8px; font-size: 14px; line-height: 1.6; color: #4f46e5;">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내 패치를 무료로 제공받으실 수 있습니다.
      </div>
    </div>
  </div>

  <!-- 비활성화된 카드 (회색 배경) -->
  <div class="faq-card" style="border-radius: 8px; overflow: hidden; transition: background 0.3s;">
    <button class="faq-btn" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px; border: none; background: #f8fafc; text-align: left; cursor: pointer;">
      <span style="font-weight: 700; color: #1e293b;">어떤 라이선스가 제게 적합한가요?</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </button>
    <div class="faq-content" style="max-height: 0px; opacity: 0; overflow: hidden;">
      <div style="padding: 20px; padding-top: 8px; font-size: 14px; line-height: 1.6; color: #64748b;">
        소규모 팀의 경우 스탠다드 라이선스가 좋으며, 대규모 기업의 경우 엔터프라이즈 라이선스를 추천합니다.
      </div>
    </div>
  </div>

</div>`,
      css: `/* CSS / Tailwind CSS Utility Classes */
.bg-indigo-50 { background-color: #e0e7ff; }
.dark .dark\\:bg-indigo-500\\/10 { background-color: rgba(99, 102, 241, 0.1); }
.bg-slate-50 { background-color: #f8fafc; }
.dark .dark\\:bg-slate-800 { background-color: #1e293b; }
.transition-colors { transition-property: background-color, border-color, color, fill, stroke; }`,
      js: `// Vanilla JavaScript 버튼 클릭 플러스/마이너스 스위칭 제어
document.querySelectorAll('.faq-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const content = card.querySelector('.faq-content');
    
    const isOpen = card.classList.toggle('active');
    
    if (isOpen) {
      button.style.backgroundColor = '#e0e7ff';
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
    } else {
      button.style.backgroundColor = '#f8fafc';
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
    }
  });
});`
    },
    faq3: {
      title: "FAQ 유형 3 (아이콘 정보형 플랫 리스트)",
      react: `import React from 'react';
import { Info } from 'lucide-react';

const FlatIconFaq = () => {
  const faqData = [
    { question: "무료 업데이트가 지원되나요?", answer: "..." },
    { question: "대시보드 커스터마이징 가능 여부", answer: "..." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {faqData.map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="shrink-0 pt-1">
            <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Info className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{item.question}</h4>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};`,
      html: `<!-- 일반 정적 HTML 마크업 (플랫 그리드형) -->
<div class="faq-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px 48px;">
  
  <!-- 질문 항목 1 -->
  <div class="faq-grid-item" style="display: flex; gap: 16px;">
    <div style="flex-shrink: 0; padding-top: 4px;">
      <div style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <h4 style="margin: 0; font-weight: 700; color: #1e293b; line-height: 1.25;">무료 업데이트가 지원되나요?</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #64748b;">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내 무료 패치를 제공받으실 수 있습니다.
      </p>
    </div>
  </div>

  <!-- 질문 항목 2 -->
  <div class="faq-grid-item" style="display: flex; gap: 16px;">
    <div style="flex-shrink: 0; padding-top: 4px;">
      <div style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <h4 style="margin: 0; font-weight: 700; color: #1e293b; line-height: 1.25;">대시보드 커스터마이징 가능 여부</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #64748b;">
        네, 모듈화되어 있으며, 각 컴포넌트들을 필요에 맞춰 자유롭게 수정하고 적용하도록 지원하고 있습니다.
      </p>
    </div>
  </div>

</div>`,
      css: `/* CSS / Tailwind CSS Utility Classes */
.flex { display: flex; }
.shrink-0 { flex-shrink: 0; }
.border-slate-200 { border-color: #e2e8f0; }
.text-slate-400 { color: #94a3b8; }
.gap-4 { gap: 1rem; }`,
      js: `// 플랫형 질문 리스트는 일반 정적 마크업으로 별도 JS 로직이 관여하지 않습니다.`
    }
  };

  const openCodeModal = (snippetKey: string) => {
    setSelectedSnippet(codeSnippets[snippetKey]);
    setCodeMode('react'); // 기본 모드는 React로 지정
    setHtmlSubTab('html'); // HTML 모드 서브탭 초기화
    setIsCopied(false);
    setIsModalOpen(true);
  };

  const handleCopyCode = () => {
    if (!selectedSnippet) return;
    const textToCopy = codeMode === 'react' ? selectedSnippet.react : selectedSnippet[htmlSubTab];
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };

  return (
    <div className="space-y-10 pb-10 font-sans relative">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            자주 묻는 질문 (FAQ)
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>페이지</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">자주 묻는 질문</span>
          </div>
        </div>
      </div>

      {/* FAQ Type 1 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9 relative">
        {/* Code Preview Button */}
        <button
          onClick={() => openCodeModal('faq1')}
          className="absolute top-4 right-4 sm:top-6 sm:right-9 flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-800/60 dark:hover:bg-indigo-500/10 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
        >
          <Code className="w-3.5 h-3.5" />
          코드 보기
        </button>

        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 pr-24">FAQ 유형 1</h3>
        <div className="space-y-4">
          {faqData1.map((item, idx) => (
            <div key={idx} className="border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenFaq1(openFaq1 === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                <div className={`w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openFaq1 === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq1 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Type 2 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9 relative">
        {/* Code Preview Button */}
        <button
          onClick={() => openCodeModal('faq2')}
          className="absolute top-4 right-4 sm:top-6 sm:right-9 flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-800/60 dark:hover:bg-indigo-500/10 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
        >
          <Code className="w-3.5 h-3.5" />
          코드 보기
        </button>

        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 pr-24">FAQ 유형 2</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {faqData2.slice(0, 3).map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq2(openFaq2 === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                >
                  <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                  {openFaq2 === idx ? (
                    <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  )}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq2 === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === idx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqData2.slice(3).map((item, idx) => {
              const realIdx = idx + 3;
              return (
                <div key={realIdx} className="rounded-lg overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq2(openFaq2 === realIdx ? null : realIdx)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}`}
                  >
                    <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                    {openFaq2 === realIdx ? (
                      <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    )}
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq2 === realIdx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className={`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${openFaq2 === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Type 3 */}
      <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 sm:p-9 relative">
        {/* Code Preview Button */}
        <button
          onClick={() => openCodeModal('faq3')}
          className="absolute top-4 right-4 sm:top-6 sm:right-9 flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-800/60 dark:hover:bg-indigo-500/10 dark:text-slate-400 dark:hover:text-indigo-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
        >
          <Code className="w-3.5 h-3.5" />
          코드 보기
        </button>

        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-6 pr-24">FAQ 유형 3</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {faqData3.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="shrink-0 pt-1">
                <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 dark:text-white leading-tight">{item.question}</h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.answer}
                </p>
                {idx < 2 && (
                   <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Previewer Modal (Mac-style look) */}
      {isModalOpen && selectedSnippet && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="bg-white dark:bg-[#1E293B] rounded-2xl w-full max-w-4xl max-h-[85vh] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Mac Header */}
            <div className="bg-slate-50 dark:bg-[#0F172A] px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Simulated Mac Buttons */}
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 block hover:opacity-85 cursor-pointer" onClick={() => setIsModalOpen(false)}></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 block"></span>
                <span className="text-[13px] font-bold text-slate-600 dark:text-slate-400 ml-3">
                  {selectedSnippet.title}
                </span>
              </div>

              {/* Major Toggle Switch: React vs HTML */}
              <div className="flex items-center gap-4 mr-4">
                <div className="inline-flex rounded-xl bg-slate-200 dark:bg-slate-800 p-1 border border-slate-300/40 dark:border-slate-700/60">
                  <button
                    onClick={() => {
                      setCodeMode('react');
                      setIsCopied(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      codeMode === 'react'
                        ? 'bg-[#4B62FA] text-white shadow-md'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'
                    }`}
                  >
                    React 버전
                  </button>
                  <button
                    onClick={() => {
                      setCodeMode('html');
                      setIsCopied(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      codeMode === 'html'
                        ? 'bg-[#4B62FA] text-white shadow-md'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'
                    }`}
                  >
                    일반 HTML
                  </button>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Tabs and Code Viewer */}
            <div className="flex-1 flex flex-col min-h-0 bg-[#0F172A]">
              {/* Tab Selector Row (Only shown when codeMode is 'html') */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800/80 bg-[#141C2F]">
                <div className="flex gap-4">
                  {codeMode === 'react' ? (
                    // React Mode info tag
                    <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 uppercase tracking-wide">
                      REACT COMPONENT SOURCE
                    </span>
                  ) : (
                    // HTML Mode sub-tabs (HTML, CSS, JS)
                    (['html', 'css', 'js'] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => {
                          setHtmlSubTab(tab);
                          setIsCopied(false);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                          htmlSubTab === tab 
                            ? 'bg-slate-700 text-white shadow-sm' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                        }`}
                      >
                        {tab === 'html' ? 'HTML 마크업' : tab === 'css' ? 'CSS 스타일' : 'JS 인터랙션'}
                      </button>
                    ))
                  )}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4B62FA]/10 hover:bg-[#4B62FA]/25 text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400 animate-scale-up" />
                      <span className="text-emerald-400">복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      코드 복사
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Container */}
              <div className="flex-1 overflow-auto p-6 font-mono text-[13px] leading-relaxed text-slate-300 custom-scrollbar select-text">
                <pre className="whitespace-pre">
                  {codeMode === 'react' ? selectedSnippet.react : selectedSnippet[htmlSubTab]}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
