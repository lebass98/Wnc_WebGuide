import React, { useState } from 'react';
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
  Check, 
  FileCode
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
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  
  const [copied, setCopied] = useState(false);
  const [fullCopied, setFullCopied] = useState(false);

  const handleCopyCode = () => {
    const textToCopy = codeMode === 'react' ? snippet.react : snippet[htmlSubTab];
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleCopyFullSource = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setFullCopied(true);
      setTimeout(() => setFullCopied(false), 1500);
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

          {/* 2. Device Responsive simulation switcher (only for preview) */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setDevice('desktop')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="데스크톱 뷰"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setDevice('tablet')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="태블릿 뷰"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setDevice('mobile')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="모바일 뷰"
                >
                  <Smartphone className="w-4 h-4" />
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
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                  title="라이트 모드 테마"
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="다크 모드 테마"
                >
                  <Moon className="w-4 h-4" />
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
              className={`p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
              title={copied ? "복사 완료!" : "코드 복사"}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>

            {codeMode === 'html' && activeTab === 'code' && (
              <button
                onClick={handleCopyFullSource}
                className={`p-2 rounded-xl transition-all cursor-pointer ${fullCopied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
                title={fullCopied ? "전체 소스 복사됨!" : "전체 소스 복사 (바로 실행용)"}
              >
                {fullCopied ? <Check className="w-4 h-4" /> : <FileCode className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          /* Live Preview Container with Simulated local Light/Dark class */
          <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-white dark:bg-[#0F172A] p-6 sm:p-9 transition-colors duration-300 min-h-[250px] flex flex-col justify-center">
              {children}
            </div>
          </div>
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
    { question: "무료 업데이트가 지원되나요?", answer: "우리의 서비스는 지속적인 개선을 목표로..." },
    { question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?", answer: "네, 대시보드는 모듈화되어 있으며..." },
    { question: "\\"무제한 프로젝트\\"는 무슨 뜻인가요?", answer: "무제한 프로젝트란 본 서비스를 활용하여..." }
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
            <div className="p-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-slate-50 dark:border-slate-800">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};`,
      html: `<!-- FAQ 유형 1 (보더 아코디언 마크업) -->
<div class="faq-container">
  
  <!-- 아코디언 항목 1 (기본 활성화 상태) -->
  <div class="faq-item active">
    <button class="faq-trigger">
      <span class="faq-question">무료 업데이트가 지원되나요?</span>
      <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </button>
    <div class="faq-content">
      <div class="faq-answer">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
      </div>
    </div>
  </div>

  <!-- 아코디언 항목 2 (비활성화 상태) -->
  <div class="faq-item">
    <button class="faq-trigger">
      <span class="faq-question">대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?</span>
      <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </button>
    <div class="faq-content">
      <div class="faq-answer">
        네, 대시보드는 모듈화되어 있으며, 각 컴포넌트들을 필요와 설정에 맞춰서 수정할 수 있도록 설계되어 있습니다. 손쉽게 디자인을 변경하거나 구성을 추가할 수 있습니다.
      </div>
    </div>
  </div>

</div>`,
      css: `/* FAQ 유형 1 스타일 정의 */
.faq-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
}

.faq-item {
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-color-scheme: dark) {
  .faq-item {
    border-color: #1e293b;
    background-color: #1a222c;
  }
  .faq-question {
    color: #ffffff !important;
  }
  .faq-answer {
    color: #94a3b8 !important;
    border-color: #1e293b !important;
  }
  .icon-circle {
    background-color: #1e293b !important;
  }
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.faq-question {
  font-weight: 700;
  color: #1e293b;
  font-size: 16px;
  transition: color 0.2s;
}

.faq-trigger:hover .faq-question {
  color: #4f46e5;
}

.icon-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.2s;
}

.chevron-icon {
  color: #64748b;
  transition: transform 0.3s;
}

.faq-content {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}

.faq-item.active .faq-content {
  max-height: 200px;
  opacity: 1;
}

.faq-item.active .icon-circle {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 24px;
  padding-top: 0px;
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}`,
      js: `// Vanilla JS 아코디언 구동 이벤트 바인딩
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
    }

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-content').style.maxHeight = '0px';
        otherItem.querySelector('.faq-content').style.opacity = '0';
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
      }
    });
  });
});`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ 유형 1 (보더 아코디언) 실시간 미리보기</title>
  <style>
    body {
      background-color: #f8fafc;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      display: flex;
      justify-content: center;
    }
    .wrapper {
      width: 100%;
      max-width: 800px;
      background: #ffffff;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      border: 1px solid #f1f5f9;
    }
    .title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 24px;
    }
    
    .faq-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .faq-item {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
      background-color: #ffffff;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px;
      border: none;
      background: transparent;
      text-align: left;
      cursor: pointer;
      outline: none;
    }
    .faq-question {
      font-weight: 700;
      color: #1e293b;
      font-size: 15px;
      transition: color 0.2s;
    }
    .faq-trigger:hover .faq-question {
      color: #4f46e5;
    }
    .icon-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease, background-color 0.2s;
    }
    .chevron-icon {
      color: #64748b;
      transition: transform 0.3s;
    }
    .faq-content {
      max-height: 0px;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
    }
    .faq-item.active .faq-content {
      max-height: 200px;
      opacity: 1;
    }
    .faq-item.active .icon-circle {
      transform: rotate(180deg);
      background-color: #e0e7ff;
    }
    .faq-item.active .chevron-icon {
      color: #4f46e5;
    }
    .faq-answer {
      padding: 24px;
      font-size: 14px;
      line-height: 1.6;
      color: #485563;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>

  <div class="wrapper">
    <div class="title">자주 묻는 질문 (FAQ)</div>

    <div class="faq-container">
      
      <div class="faq-item active">
        <button class="faq-trigger">
          <span class="faq-question">무료 업데이트가 지원되나요?</span>
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </button>
        <div class="faq-content">
          <div class="faq-answer">
            우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
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

        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        }

        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          faqItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-content').style.maxHeight = '0px';
            otherItem.querySelector('.faq-content').style.opacity = '0';
          });

          if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
          } else {
            item.classList.remove('active');
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
          }
        });
      });
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
    { question: "무료 업데이트가 지원되나요?", answer: "우리의 서비스는 지속적인 개선을 목표로..." },
    { question: "어떤 라이선스가 제게 적합한가요?", answer: "스타트업이나 소규모 팀인 경우..." }
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
      html: `<!-- FAQ 유형 2 (스위칭 배경 아코디언 마크업) -->
<div class="faq-grid">
  
  <div class="faq-group">
    
    <!-- 항목 1 (활성화 상태) -->
    <div class="faq-card active">
      <button class="faq-btn">
        <span class="faq-question">무료 업데이트가 지원되나요?</span>
        <!-- 플러스/마이너스 공통 SVG (세로선을 CSS로 제어) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="math-icon">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="12" y1="5" x2="12" y2="19" class="vertical-line"></line>
        </svg>
      </button>
      <div class="faq-content">
        <div class="faq-answer">
          우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
        </div>
      </div>
    </div>

  </div>
</div>`,
      css: `/* FAQ 유형 2 스타일 정의 */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.faq-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: none;
  background-color: #f8fafc;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.faq-question {
  font-weight: 700;
  color: #1e293b;
  font-size: 15px;
}

.math-icon {
  color: #475569;
}

.vertical-line {
  transition: transform 0.2s, opacity 0.2s;
  transform-origin: center;
}

.faq-content {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.2s ease;
}

.faq-answer {
  padding: 20px;
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

/* Active 상태 스타일 (Active 시 연한 보라/인디고 테마) */
.faq-card.active .faq-btn {
  background-color: #e0e7ff;
}
.faq-card.active .faq-btn .faq-question {
  color: #4f46e5;
}
.faq-card.active .faq-btn .math-icon {
  color: #4f46e5;
}
.faq-card.active .vertical-line {
  opacity: 0;
  transform: scaleY(0);
}
.faq-card.active .faq-content {
  max-height: 200px;
  opacity: 1;
  background-color: #e0e7ff;
}

/* 다크모드 대응 */
@media (prefers-color-scheme: dark) {
  .faq-btn {
    background-color: #1a222c;
  }
  .faq-question {
    color: #ffffff;
  }
  .math-icon {
    color: #94a3b8;
  }
  .faq-card.active .faq-btn {
    background-color: rgba(99, 102, 241, 0.1);
  }
  .faq-card.active .faq-btn .faq-question {
    color: #818cf8;
  }
  .faq-card.active .faq-btn .math-icon {
    color: #818cf8;
  }
  .faq-card.active .faq-content {
    background-color: rgba(99, 102, 241, 0.1);
  }
  .faq-answer {
    color: #94a3b8;
  }
}`,
      js: `// Vanilla JS 플러스/마이너스 토글 연동 (상호배타 단일오픈 지원)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.faq-card');

  cards.forEach((card) => {
    const btn = card.querySelector('.faq-btn');
    const content = card.querySelector('.faq-content');

    if (card.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = '1';
    }

    btn.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      cards.forEach((otherCard) => {
        otherCard.classList.remove('active');
        const otherContent = otherCard.querySelector('.faq-content');
        otherContent.style.maxHeight = '0px';
        otherContent.style.opacity = '0';
      });

      if (!isActive) {
        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      }
    });
  });
});`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ 유형 2 (스위칭 배경 아코디언) 실시간 미리보기</title>
  <style>
    body {
      background-color: #f8fafc;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      display: flex;
      justify-content: center;
    }
    .wrapper {
      width: 100%;
      max-width: 850px;
      background: #ffffff;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      border: 1px solid #f1f5f9;
    }
    .title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 24px;
    }
    .faq-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .faq-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .faq-card {
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .faq-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border: none;
      background-color: #f8fafc;
      text-align: left;
      cursor: pointer;
      outline: none;
      transition: background-color 0.3s;
    }
    .faq-question {
      font-weight: 700;
      color: #1e293b;
      font-size: 15px;
    }
    .math-icon {
      color: #475569;
    }
    .vertical-line {
      transition: transform 0.2s, opacity 0.2s;
      transform-origin: center;
    }
    .faq-content {
      max-height: 0px;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, opacity 0.2s ease;
    }
    .faq-answer {
      padding: 20px;
      font-size: 14px;
      line-height: 1.6;
      color: #64748b;
    }
    .faq-card.active .faq-btn {
      background-color: #e0e7ff;
    }
    .faq-card.active .faq-btn .faq-question {
      color: #4f46e5;
    }
    .faq-card.active .faq-btn .math-icon {
      color: #4f46e5;
    }
    .faq-card.active .vertical-line {
      opacity: 0;
      transform: scaleY(0);
    }
    .faq-card.active .faq-content {
      max-height: 200px;
      opacity: 1;
      background-color: #e0e7ff;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="title">자주 묻는 질문 (FAQ) - 배경 스위칭 테마</div>
    <div class="faq-grid">
      <div class="faq-group">
        <div class="faq-card active">
          <button class="faq-btn">
            <span class="faq-question">무료 업데이트가 지원되나요?</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="math-icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="12" y1="5" x2="12" y2="19" class="vertical-line"></line>
            </svg>
          </button>
          <div class="faq-content">
            <div class="faq-answer">
              우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 따라서 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 관련된 릴리즈 노트는 업데이트마다 주기적으로 확인하실 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.faq-card');
      cards.forEach((card) => {
        const btn = card.querySelector('.faq-btn');
        const content = card.querySelector('.faq-content');
        if (card.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        }
        btn.addEventListener('click', () => {
          const isActive = card.classList.contains('active');
          cards.forEach((otherCard) => {
            otherCard.classList.remove('active');
            const otherContent = otherCard.querySelector('.faq-content');
            otherContent.style.maxHeight = '0px';
            otherContent.style.opacity = '0';
          });
          if (!isActive) {
            card.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
          }
        });
      });
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
    { question: "무료 업데이트가 지원되나요?", answer: "우리의 서비스는 지속적인 개선을 목표로..." },
    { question: "대시보드를 제 필요에 맞게 커스터마이징할 수 있나요?", answer: "네, 대시보드는 모듈화되어 있으며..." }
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
      html: `<!-- FAQ 유형 3 (플랫 아이콘 그리드 마크업) -->
<div class="faq-grid-list">
  
  <div class="faq-grid-item">
    <div class="icon-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    </div>
    <div class="faq-text-group">
      <h4 class="faq-grid-title">무료 업데이트가 지원되나요?</h4>
      <p class="faq-grid-desc">
        우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다.
      </p>
    </div>
  </div>

</div>`,
      css: `/* FAQ 유형 3 스타일 정의 */
.faq-grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px 48px;
}

.faq-grid-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.icon-wrapper {
  flex-shrink: 0;
  margin-top: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}

.info-icon {
  color: #94a3b8;
}

.faq-text-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.faq-grid-title {
  margin: 0;
  font-weight: 700;
  color: #1e293b;
  font-size: 15px;
  line-height: 1.3;
}

.faq-grid-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

@media (prefers-color-scheme: dark) {
  .icon-wrapper {
    border-color: #334155;
    background-color: #1e293b;
  }
  .info-icon {
    color: #64748b;
  }
  .faq-grid-title {
    color: #ffffff;
  }
  .faq-grid-desc {
    color: #94a3b8;
  }
}`,
      js: `// 본 플랫 리스트 형태는 정적 레이아웃으로써 작동에 관여하는 자바스크립트 소스가 불필요합니다.`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ 유형 3 (아이콘 정보형 플랫 리스트) 실시간 미리보기</title>
  <style>
    body {
      background-color: #f8fafc;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      display: flex;
      justify-content: center;
    }
    .wrapper {
      width: 100%;
      max-width: 900px;
      background: #ffffff;
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
      border: 1px solid #f1f5f9;
    }
    .title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 32px;
    }
    .faq-grid-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px 48px;
    }
    .faq-grid-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .icon-wrapper {
      flex-shrink: 0;
      margin-top: 4px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
    }
    .info-icon {
      color: #94a3b8;
    }
    .faq-text-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .faq-grid-title {
      margin: 0;
      font-weight: 700;
      color: #1e293b;
      font-size: 15px;
      line-height: 1.3;
    }
    .faq-grid-desc {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="title">자주 묻는 질문 (FAQ) - 플랫 아이콘 그리드</div>
    <div class="faq-grid-list">
      <div class="faq-grid-item">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="faq-text-group">
          <h4 class="faq-grid-title">무료 업데이트가 지원되나요?</h4>
          <p class="faq-grid-desc">
            우리의 서비스는 지속적인 개선을 목표로 하고 있습니다. 라이선스 기간 내에는 모든 주요 업데이트 및 패치를 무료로 제공받으실 수 있습니다. 기능 개선 사항을 주기적으로 고객님께 안내해 드립니다.
          </p>
        </div>
      </div>
    </div>
  </div>
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
        <div className="space-y-4 w-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
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
