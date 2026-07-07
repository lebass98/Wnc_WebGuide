import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Plus, 
  Minus, 
  Info, 
  ChevronRight, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Sun, 
  Moon, 
  Copy, 
  Check
} from 'lucide-react';

interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

interface FaqSectionWrapperProps {
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
}

const FaqSectionWrapper: React.FC<FaqSectionWrapperProps> = ({ title, description, snippet, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [previewMode, setPreviewMode] = useState<'react' | 'html'>('react');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState('400px');

  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      const html = iframe.contentDocument.documentElement;
      if (body) {
        const height = Math.max(
          body.scrollHeight, body.offsetHeight,
          html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        setIframeHeight(`${height}px`);
      }
    }
  };

  useEffect(() => {
    if (activeTab === 'preview' && previewMode === 'html') {
      const timer = setTimeout(updateIframeHeight, 150);
      return () => clearTimeout(timer);
    }
  }, [activeTab, previewMode, device, theme, snippet.fullHtml]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1550);
    });
  };

  return (
    <div className="space-y-4">
      {/* Wrapper Header: Controls Toolbar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/40 p-4 rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* 1. Preview/Code toggle tab */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              미리보기
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              코드 보기
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* 1.5 Preview Mode Switcher (React vs HTML) */}
          {activeTab === 'preview' && (
            <>
              <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-1">
                <button
                  onClick={() => setPreviewMode('react')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${previewMode === 'react' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  React 미리보기
                </button>
                <button
                  onClick={() => setPreviewMode('html')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${previewMode === 'html' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  HTML 미리보기
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 2. Device Responsive simulation switcher (only for preview) */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setDevice('desktop')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Monitor className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    데스크톱 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setDevice('tablet')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Tablet className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    태블릿 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setDevice('mobile')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Smartphone className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    모바일 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 3. Embedded Theme simulator switcher (only for preview) */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setTheme('light')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Sun className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    라이트 모드 테마
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Moon className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    다크 모드 테마
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 4. Code type toggler (only for code mode) */}
          {activeTab === 'code' && (
            <>
              <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-1">
                <button
                  onClick={() => setCodeMode('react')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${codeMode === 'react' ? 'bg-[#4B62FA] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  React
                </button>
                <button
                  onClick={() => setCodeMode('html')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${codeMode === 'html' ? 'bg-[#4B62FA] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  일반 HTML
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 5. Copy Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyCode}
              className={`relative group p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                {copied ? "복사 완료!" : "HTML/CSS/JS 전체 소스 복사"}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          previewMode === 'react' ? (
            /* React Component Live Preview */
            <div className={theme === 'dark' ? 'dark' : ''}>
              <div className="bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300 w-full">
                {children}
              </div>
            </div>
          ) : (
            /* Static HTML iframe Preview (applying simulated theme) */
            <iframe
              ref={iframeRef}
              onLoad={updateIframeHeight}
              srcDoc={theme === 'dark' ? snippet.fullHtml.replace('<body class="', '<body class="dark ') : snippet.fullHtml}
              title={`${title} HTML Preview`}
              className="w-full border-none bg-slate-50 dark:bg-[#0F172A] transition-colors"
              style={{ height: iframeHeight }}
              sandbox="allow-scripts"
            />
          )
        ) : (
          /* Code Preview Panel with inner sub-tabs for static HTML */
          <div className="bg-[#0F172A] flex flex-col min-h-[350px]">
            {/* HTML Mode Sub Tab Bar */}
            {codeMode === 'html' && (
              <div className="flex gap-2 px-5 py-2.5 border-b border-slate-800/80 bg-[#141C2F]">
                {(['html', 'css', 'js'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setHtmlSubTab(tab)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${htmlSubTab === tab ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  >
                    {tab === 'html' ? 'HTML 마크업' : tab === 'css' ? 'CSS 스타일' : 'JS 인터랙션'}
                  </button>
                ))}
              </div>
            )}
            
            {/* Syntax Code block view */}
            <div className="flex-1 overflow-x-auto p-4 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed text-slate-300 custom-scrollbar select-text max-h-[450px]">
              <pre className="whitespace-pre-wrap sm:whitespace-pre break-all sm:break-normal">
                {codeMode === 'react' ? snippet.react : snippet[htmlSubTab]}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openFaq1, setOpenFaq1] = useState<number | null>(0);
  const [openFaq2, setOpenFaq2] = useState<number | null>(0);

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
      react: `import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BorderAccordionFaq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqData = [
    {
      question: "무료 업데이트가 지원되나요?",
      answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다."
    },
    {
      question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?",
      answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다."
    },
    {
      question: "\\"무제한 프로젝트\\"는 무슨 뜻인가요?",
      answer: "무제한 프로젝트란 본 서비스를 활용하여 진행할 수 있는 웹, 앱 등의 프로젝트 생성 개수에 어떠한 제한도 두지 않는다는 것을 의미합니다. 하나의 라이선스로 원하는 만큼 프로젝트를 구축할 수 있습니다."
    }
  ];
  
  return (
    <div className="space-y-4 w-full max-w-4xl mx-auto">
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
            <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-slate-50 dark:border-slate-800">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};`,
      html: `<!-- FAQ 유형 1 (보더 아코디언 마크업 - Tailwind CSS 기반) -->
<div class="space-y-4 w-full max-w-4xl mx-auto">
  
  <!-- 아코디언 항목 1 (기본 활성화) -->
  <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300 active" data-index="0">
    <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
      <span class="font-bold text-slate-800 dark:text-white">무료 업데이트가 지원되나요?</span>
      <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
      </div>
    </button>
    <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
      <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
      </div>
    </div>
  </div>

  <!-- 아코디언 항목 2 -->
  <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300" data-index="1">
    <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
      <span class="font-bold text-slate-800 dark:text-white">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
      <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
      </div>
    </button>
    <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
      <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다.
      </div>
    </div>
  </div>

  <!-- 아코디언 항목 3 -->
  <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300" data-index="2">
    <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
      <span class="font-bold text-slate-800 dark:text-white">"무제한 프로젝트"는 무슨 뜻인가요?</span>
      <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
      </div>
    </button>
    <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
      <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        무제한 프로젝트란 본 서비스를 활용하여 진행할 수 있는 웹, 앱 등의 프로젝트 생성 개수에 어떠한 제한도 두지 않는다는 것을 의미합니다. 하나의 라이선스로 원하는 만큼 프로젝트를 구축할 수 있습니다.
      </div>
    </div>
  </div>

</div>`,
      css: `/* 기본 Tailwind CSS 스타일링 사용으로 별도의 커스텀 클래스가 존재하지 않습니다. */`,
      js: `// Vanilla JS 아코디언 구동 이벤트 바인딩
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    const updateState = () => {
      const isActive = item.classList.contains('active');
      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    };

    updateState();

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.faq-content');
        otherContent.style.maxHeight = '0px';
        otherContent.style.opacity = '0';
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (!isActive) {
        item.classList.add('active');
      }
      updateState();
    });
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>FAQ 유형 1 (보더 아코디언) 실시간 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-4xl mx-auto">
    <div class="space-y-4 w-full">
      
      <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300 active">
        <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span class="font-bold text-slate-800 dark:text-white">무료 업데이트가 지원되나요?</span>
          <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </div>
        </button>
        <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
          <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
          </div>
        </div>
      </div>

      <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
        <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span class="font-bold text-slate-800 dark:text-white">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
          <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </div>
        </button>
        <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
          <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다.
          </div>
        </div>
      </div>

      <div class="faq-item border border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
        <button class="faq-trigger w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span class="font-bold text-slate-800 dark:text-white">"무제한 프로젝트"는 무슨 뜻인가요?</span>
          <div class="faq-icon w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300">
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-500"></i>
          </div>
        </button>
        <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
          <div class="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            무제한 프로젝트란 본 서비스를 활용하여 진행할 수 있는 웹, 앱 등의 프로젝트 생성 개수에 어떠한 제한도 두지 않는다는 것을 의미합니다. 하나의 라이선스로 원하는 만큼 프로젝트를 구축할 수 있습니다.
          </div>
        </div>
      </div>

    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        const updateState = () => {
          const isActive = item.classList.contains('active');
          if (isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            if (icon) icon.style.transform = 'rotate(180deg)';
          } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            if (icon) icon.style.transform = 'rotate(0deg)';
          }
        };

        updateState();

        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            otherContent.style.maxHeight = '0px';
            otherContent.style.opacity = '0';
            const otherIcon = otherItem.querySelector('.faq-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          });
          if (!isActive) {
            item.classList.add('active');
          }
          updateState();
        });
      });
      lucide.createIcons();
    });
  </script>
</body>
</html>`
    },
    faq2: {
      react: `import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const SwitchingBgFaq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqData = [
    { question: "무료 업데이트가 지원되나요?", answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다." },
    { question: "어떤 라이선스가 제게 적합한가요?", answer: "스타트업이나 소규모 팀인 경우 스탠다드 라이선스가 적합하며, 다수의 프로젝트와 여러 명의 협업 개발자가 있는 대규모 에이전시나 엔터프라이즈의 경우 팀 혹은 엔터프라이즈 라이선스를 권장합니다." },
    { question: "가격 정책에 언급된 \\"시트(Seats)\\"는 무엇인가요?", answer: "시트(Seats)는 대시보드 관리자 페이지에 접근하거나 프로젝트 개발에 직접 참여하는 개발자 혹은 관리자 계정의 수를 의미합니다." },
    { question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?", answer: "네, 완전히 가능합니다. 제공되는 코드를 바탕으로 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다." },
    { question: "\\"무제한 프로젝트\\"는 무슨 뜻인가요?", answer: "프로젝트 진행 개수에 한도를 두지 않는다는 의미입니다. 단일 라이선스로 다수의 서비스 애플리케이션에 적용하실 수 있습니다." },
    { question: "더 상위 요금제로 업그레이드할 수 있나요?", answer: "언제든지 고객 지원 버튼을 통해 요금제 업그레이드를 신청하실 수 있으며, 결제 금액은 사용한 날짜를 제외하고 일할 계산되어 청구됩니다." },
    { question: "다크 모드와 라이트 모드를 지원하나요?", answer: "예, 제공되는 컴포넌트는 기본적으로 다크/라이트 테마에 완벽하게 대응하도록 설계되었으며, 시스템 설정에 따라 적절한 테마가 자동으로 적용됩니다." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full max-w-5xl mx-auto">
      <div className="space-y-4">
        {faqData.slice(0, 3).map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className={\`w-full flex items-center justify-between p-5 text-left transition-colors \${openIdx === idx ? 'bg-indigo-550 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}\`}
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
      <div className="space-y-4">
        {faqData.slice(3).map((item, idx) => {
          const realIdx = idx + 3;
          return (
            <div key={realIdx} className="rounded-lg overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIdx(openIdx === realIdx ? null : realIdx)}
                className={\`w-full flex items-center justify-between p-5 text-left transition-colors \${openIdx === realIdx ? 'bg-indigo-550 dark:bg-indigo-500/10' : 'bg-slate-50 dark:bg-slate-800'}\`}
              >
                <span className="font-bold text-slate-800 dark:text-white">{item.question}</span>
                {openIdx === realIdx ? (
                  <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                )}
              </button>
              <div className={\`transition-all duration-300 ease-in-out \${openIdx === realIdx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden\`}>
                <div className={\`p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 \${openIdx === realIdx ? 'bg-indigo-50 dark:bg-indigo-500/10' : ''}\`}>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};`,
      html: `<!-- FAQ 유형 2 (스위칭 배경 아코디언 마크업 - Tailwind CSS 기반) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full max-w-5xl mx-auto">
  
  <!-- Left column -->
  <div class="space-y-4">
    <!-- 항목 1 (활성화 상태) -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300 active">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-indigo-50 dark:bg-indigo-500/10 text-slate-800 dark:text-white">
        <span class="font-bold">무료 업데이트가 지원되나요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="minus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-500/10">
          우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
        </div>
      </div>
    </div>

    <!-- 항목 2 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">어떤 라이선스가 제게 적합한가요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          스타트업이나 소규모 팀인 경우 스탠다드 라이선스가 적합하며, 다수의 프로젝트와 여러 명의 협업 개발자가 있는 대규모 에이전시나 엔터프라이즈의 경우 팀 혹은 엔터프라이즈 라이선스를 권장합니다.
        </div>
      </div>
    </div>

    <!-- 항목 3 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">가격 정책에 언급된 "시트(Seats)"는 무엇인가요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          시트(Seats)는 대시보드 관리자 페이지에 접근하거나 프로젝트 개발에 직접 참여하는 개발자 혹은 관리자 계정의 수를 의미합니다.
        </div>
      </div>
    </div>
  </div>

  <!-- Right column -->
  <div class="space-y-4">
    <!-- 항목 4 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          네, 완전히 가능합니다. 제공되는 코드를 바탕으로 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다.
        </div>
      </div>
    </div>

    <!-- 항목 5 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">"무제한 프로젝트"는 무슨 뜻인가요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          프로젝트 진행 개수에 한도를 두지 않는다는 의미입니다. 단일 라이선스로 다수의 서비스 애플리케이션에 적용하실 수 있습니다.
        </div>
      </div>
    </div>

    <!-- 항목 6 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">더 상위 요금제로 업그레이드할 수 있나요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          언제든지 고객 지원 버튼을 통해 요금제 업그레이드를 신청하실 수 있으며, 결제 금액은 사용한 날짜를 제외하고 일할 계산되어 청구됩니다.
        </div>
      </div>
    </div>

    <!-- 항목 7 -->
    <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
      <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
        <span class="font-bold">다크 모드와 라이트 모드를 지원하나요?</span>
        <div class="faq-icon-wrapper flex items-center justify-center">
          <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
        </div>
      </button>
      <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
        <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 animate-in fade-in">
          예, 제공되는 컴포넌트는 기본적으로 다크/라이트 테마에 완벽하게 대응하도록 설계되었으며, 시스템 설정에 따라 적절한 테마가 자동으로 적용됩니다.
        </div>
      </div>
    </div>
  </div>

</div>`,
      css: `/* 기본 Tailwind CSS 스타일링 사용으로 별도의 커스텀 클래스가 존재하지 않습니다. */`,
      js: `// Vanilla JS 플러스/마이너스 토글 연동 (상호배타 단일오픈 지원)
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const iconWrapper = item.querySelector('.faq-icon-wrapper');

    const updateState = () => {
      const isActive = item.classList.contains('active');
      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        trigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-indigo-50 dark:bg-indigo-500/10 text-slate-800 dark:text-white";
        if (iconWrapper) iconWrapper.innerHTML = '<i data-lucide="minus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
      } else {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        trigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white";
        if (iconWrapper) iconWrapper.innerHTML = '<i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    updateState();

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.faq-content');
        otherContent.style.maxHeight = '0px';
        otherContent.style.opacity = '0';
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        otherTrigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white";
        const otherIcon = otherItem.querySelector('.faq-icon-wrapper');
        if (otherIcon) otherIcon.innerHTML = '<i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
      });

      if (!isActive) {
        item.classList.add('active');
      }
      updateState();
    });
  });
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
});`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>FAQ 유형 2 (스위칭 배경 아코디언) 실시간 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full max-w-5xl mx-auto">
      
      <div class="space-y-4">
        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300 active">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-indigo-50 dark:bg-indigo-500/10 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">무료 업데이트가 지원되나요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="minus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-500/10">
              우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
            </div>
          </div>
        </div>

        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">어떤 라이선스가 제게 적합한가요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              스타트업이나 소규모 팀인 경우 스탠다드 라이선스가 적합하며, 다수의 프로젝트와 여러 명의 협업 개발자가 있는 대규모 에이전시나 엔터프라이즈의 경우 팀 혹은 엔터프라이즈 라이선스를 권장합니다.
            </div>
          </div>
        </div>

        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">가격 정책에 언급된 "시트(Seats)"는 무엇인가요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              시트(Seats)는 대시보드 관리자 페이지에 접근하거나 프로젝트 개발에 직접 참여하는 개발자 혹은 관리자 계정의 수를 의미합니다.
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              네, 완전히 가능합니다. 제공되는 코드를 바탕으로 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다.
            </div>
          </div>
        </div>

        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">"무제한 프로젝트"는 무슨 뜻인가요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              프로젝트 진행 개수에 한도를 두지 않는다는 의미입니다. 단일 라이선스로 다수의 서비스 애플리케이션에 적용하실 수 있습니다.
            </div>
          </div>
        </div>

        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">더 상위 요금제로 업그레이드할 수 있나요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              언제든지 고객 지원 버튼을 통해 요금제 업그레이드를 신청하실 수 있으며, 결제 금액은 사용한 날짜를 제외하고 일할 계산되어 청구됩니다.
            </div>
          </div>
        </div>

        <div class="faq-item rounded-lg overflow-hidden transition-all duration-300">
          <button class="faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white">
            <span class="font-bold text-slate-800 dark:text-white">다크 모드와 라이트 모드를 지원하나요?</span>
            <div class="faq-icon-wrapper flex items-center justify-center">
              <i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>
            </div>
          </button>
          <div class="faq-content transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0">
            <div class="p-5 pt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 animate-in fade-in">
              예, 제공되는 컴포넌트는 기본적으로 다크/라이트 테마에 완벽하게 대응하도록 설계되었으며, 시스템 설정에 따라 적절한 테마가 자동으로 적용됩니다.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const content = item.querySelector('.faq-content');
        const iconWrapper = item.querySelector('.faq-icon-wrapper');

        const updateState = () => {
          const isActive = item.classList.contains('active');
          if (isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            trigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-indigo-50 dark:bg-indigo-500/10 text-slate-800 dark:text-white";
            if (iconWrapper) iconWrapper.innerHTML = '<i data-lucide="minus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
          } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            trigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-850 dark:text-white";
            if (iconWrapper) iconWrapper.innerHTML = '<i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
          }
          lucide.createIcons();
        };

        updateState();

        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            otherContent.style.maxHeight = '0px';
            otherContent.style.opacity = '0';
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            otherTrigger.className = "faq-trigger w-full flex items-center justify-between p-5 text-left transition-colors bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white";
            const otherIcon = otherItem.querySelector('.faq-icon-wrapper');
            if (otherIcon) otherIcon.innerHTML = '<i data-lucide="plus" class="w-4 h-4 text-slate-600 dark:text-slate-300"></i>';
          });
          if (!isActive) {
            item.classList.add('active');
          }
          updateState();
        });
      });
      lucide.createIcons();
    });
  </script>
</body>
</html>`
    },
    faq3: {
      react: `import React from 'react';
import { Info } from 'lucide-react';

const FlatIconFaq = () => {
  const faqData = [
    { question: "무료 업데이트가 지원되나요?", answer: "우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다." },
    { question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?", answer: "네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경할 수 있습니다." },
    { question: "어떤 라이선스가 제게 적합한가요?", answer: "개인 개발자라면 기본 라이선스를, 기업 고객이라면 확장 라이선스를 추천해 드립니다. 자세한 비교 내용은 결제 페이지에서 확인하세요." },
    { question: "\\"무제한 프로젝트\\"는 무슨 뜻인가요?", answer: "무제한 프로젝트란 본 플랫폼 내에서 생성하거나 운영할 워크스페이스나 애플리케이션 프로젝트 개수에 상한제가 없음을 의미합니다. 자유롭게 다양한 서비스 모델을 개발하고 런칭할 수 있습니다." },
    { question: "가격 정책에 언급된 \\"시트(Seats)\\"는 무엇인가요?", answer: "시트(Seats)는 서비스를 구독하여 이용할 수 있는 인증된 활성 사용자 혹은 팀원의 최대 허용 인원을 뜻합니다." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-5xl mx-auto">
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
            {idx < 2 && (
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};`,
      html: `<!-- FAQ 유형 3 (플랫 아이콘 그리드 마크업 - Tailwind CSS 기반) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-5xl mx-auto">
  
  <!-- 항목 1 -->
  <div class="flex gap-4">
    <div class="shrink-0 pt-1">
      <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
    </div>
    <div class="space-y-3 text-left">
      <h4 class="font-bold text-slate-800 dark:text-white leading-tight">무료 업데이트가 지원되나요?</h4>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다.
      </p>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
      </p>
    </div>
  </div>

  <!-- 항목 2 -->
  <div class="flex gap-4">
    <div class="shrink-0 pt-1">
      <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
    </div>
    <div class="space-y-3 text-left">
      <h4 class="font-bold text-slate-800 dark:text-white leading-tight">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</h4>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경할 수 있습니다.
      </p>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
      </p>
    </div>
  </div>

  <!-- 항목 3 -->
  <div class="flex gap-4">
    <div class="shrink-0 pt-1">
      <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
    </div>
    <div class="space-y-3 text-left">
      <h4 class="font-bold text-slate-800 dark:text-white leading-tight">어떤 라이선스가 제게 적합한가요?</h4>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        개인 개발자라면 기본 라이선스를, 기업 고객이라면 확장 라이선스를 추천해 드립니다. 자세한 비교 내용은 결제 페이지에서 확인하세요.
      </p>
    </div>
  </div>

  <!-- 항목 4 -->
  <div class="flex gap-4">
    <div class="shrink-0 pt-1">
      <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
    </div>
    <div class="space-y-3 text-left">
      <h4 class="font-bold text-slate-800 dark:text-white leading-tight">"무제한 프로젝트"는 무슨 뜻인가요?</h4>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        무제한 프로젝트란 본 플랫폼 내에서 생성하거나 운영할 워크스페이스나 애플리케이션 프로젝트 개수에 상한제가 없음을 의미합니다. 자유롭게 다양한 서비스 모델을 개발하고 런칭할 수 있습니다.
      </p>
    </div>
  </div>

  <!-- 항목 5 -->
  <div class="flex gap-4">
    <div class="shrink-0 pt-1">
      <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
        <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
      </div>
    </div>
    <div class="space-y-3 text-left">
      <h4 class="font-bold text-slate-800 dark:text-white leading-tight">가격 정책에 언급된 "시트(Seats)"는 무엇인가요?</h4>
      <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        시트(Seats)는 서비스를 구독하여 이용할 수 있는 인증된 활성 사용자 혹은 팀원의 최대 허용 인원을 뜻합니다.
      </p>
    </div>
  </div>

</div>`,
      css: `/* 기본 Tailwind CSS 스타일링 사용으로 별도의 커스텀 클래스가 존재하지 않습니다. */`,
      js: `// 본 플랫 리스트 형태는 정적 레이아웃으로써 작동에 관여하는 자바스크립트 소스가 불필요합니다.
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>FAQ 유형 3 (아이콘 정보형 플랫 리스트) 실시간 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-5xl mx-auto">
      
      <div class="flex gap-4">
        <div class="shrink-0 pt-1">
          <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        </div>
        <div class="space-y-3 text-left">
          <h4 class="font-bold text-slate-800 dark:text-white leading-tight">무료 업데이트가 지원되나요?</h4>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다.
          </p>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="shrink-0 pt-1">
          <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        </div>
        <div class="space-y-3 text-left">
          <h4 class="font-bold text-slate-800 dark:text-white leading-tight">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</h4>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경할 수 있습니다.
          </p>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            추가적인 안내사항이 있다면 고객 지원 문서나 이용약관의 관련 섹션을 통해 상세히 확인해보실 것을 권장합니다.
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="shrink-0 pt-1">
          <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        </div>
        <div class="space-y-3 text-left">
          <h4 class="font-bold text-slate-800 dark:text-white leading-tight">어떤 라이선스가 제게 적합한가요?</h4>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            개인 개발자라면 기본 라이선스를, 기업 고객이라면 확장 라이선스를 추천해 드립니다. 자세한 비교 내용은 결제 페이지에서 확인하세요.
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="shrink-0 pt-1">
          <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        </div>
        <div class="space-y-3 text-left">
          <h4 class="font-bold text-slate-800 dark:text-white leading-tight">"무제한 프로젝트"는 무슨 뜻인가요?</h4>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            무제한 프로젝트란 본 플랫폼 내에서 생성하거나 운영할 워크스페이스나 애플리케이션 프로젝트 개수에 상한제가 없음을 의미합니다. 자유롭게 다양한 서비스 모델을 개발하고 런칭할 수 있습니다.
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="shrink-0 pt-1">
          <div class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i>
          </div>
        </div>
        <div class="space-y-3 text-left">
          <h4 class="font-bold text-slate-800 dark:text-white leading-tight">가격 정책에 언급된 "시트(Seats)"는 무엇인가요?</h4>
          <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            시트(Seats)는 서비스를 구독하여 이용할 수 있는 인증된 활성 사용자 혹은 팀원의 최대 허용 인원을 뜻합니다.
          </p>
        </div>
      </div>

    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  </script>
</body>
</html>`
    }
  };

  return (
    <div className="space-y-10 pb-10 font-sans">
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

      {/* FAQ Variation 1 */}
      <FaqSectionWrapper 
        title="FAQ 유형 1" 
        description="기본형 보더 아코디언 스타일 레이아웃입니다."
        snippet={codeSnippets.faq1}
      >
        <div className="space-y-4 w-full max-w-4xl mx-auto">
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
                <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-slate-50 dark:border-slate-800">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FaqSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* FAQ Variation 2 */}
      <FaqSectionWrapper 
        title="FAQ 유형 2" 
        description="배경색이 반전 스위칭되는 미려한 아코디언 스타일입니다."
        snippet={codeSnippets.faq2}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full max-w-5xl mx-auto">
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
      </FaqSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* FAQ Variation 3 */}
      <FaqSectionWrapper 
        title="FAQ 유형 3" 
        description="아이콘을 결합하여 가벼운 정보 전달력을 높인 플랫 리스트입니다."
        snippet={codeSnippets.faq3}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-5xl mx-auto">
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
      </FaqSectionWrapper>
    </div>
  );
};

export default FAQ;
