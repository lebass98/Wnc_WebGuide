import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Copy,
  Check
} from 'lucide-react';
import codeSnippets from './InputComponentSnippets.json';

interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

interface FormLayoutWrapperProps {
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
}

const FormLayoutWrapper: React.FC<FormLayoutWrapperProps> = ({ title, description, snippet, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [previewMode, setPreviewMode] = useState<'react' | 'html'>('react');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState('100px');

  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      if (body) {
        let contentHeight = body.scrollHeight;
        const firstChild = body.firstElementChild as HTMLElement;
        if (firstChild) {
          const rectHeight = firstChild.getBoundingClientRect().height;
          contentHeight = Math.max(contentHeight, Math.ceil(rectHeight));
        }
        const finalHeight = Math.max(contentHeight + 12, 100);
        setIframeHeight(`${finalHeight}px`);
      }
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let mutationObserver: MutationObserver | null = null;

    const handleLoad = () => {
      updateIframeHeight();
      const iframeDoc = iframe.contentDocument;
      if (iframeDoc && iframeDoc.body) {
        mutationObserver = new MutationObserver(() => {
          updateIframeHeight();
        });
        mutationObserver.observe(iframeDoc.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['class']
        });
      }
    };

    iframe.addEventListener('load', handleLoad);

    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      handleLoad();
    }

    return () => {
      iframe.removeEventListener('load', handleLoad);
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, [activeTab, previewMode, device, theme, snippet.fullHtml]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-4 font-sans mb-[40px]">
      {/* Wrapper Header: Controls Toolbar */}
      <div className="flex flex-col items-start gap-3 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl">
        <div>
          <h3 className="text-base text-[22px] font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2 justify-end w-full">

          {/* 1. Preview Mode Group: React | HTML */}
          {activeTab === 'preview' && (
            <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setPreviewMode('react')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${previewMode === 'react' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                React
              </button>
              <button
                onClick={() => setPreviewMode('html')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${previewMode === 'html' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                HTML
              </button>
            </div>
          )}

          {/* 코드보기 button */}
          <button
            onClick={() => setActiveTab(activeTab === 'code' ? 'preview' : 'code')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer border ${activeTab === 'code' ? 'bg-[#4B62FA] text-white border-[#4B62FA] shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-800 dark:hover:text-white hover:border-slate-300'}`}
          >
            코드보기
          </button>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Code type toggler (only in code tab) */}
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

          {/* Device simulation switcher (preview only) */}
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

              {/* Theme toggler */}
              <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <button 
                  onClick={() => setTheme('light')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-white dark:bg-slate-700 text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Sun className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-white dark:bg-slate-700 text-indigo-500' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Moon className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* Copy HTML Source button */}
          <button
            onClick={handleCopyCode}
            className={`p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer relative group ${copied ? 'bg-emerald-500 border-emerald-500 text-white' : 'text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-850'}`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
              {copied ? '복사 완료!' : 'HTML 전체 복사'}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
            </div>
          </button>

        </div>
      </div>

      {/* Frame Container */}
      <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-4 sm:p-8 border border-slate-200/50 dark:border-slate-800/50">
        <div className="flex justify-center w-full">
          
          {/* Active preview Tab */}
          {activeTab === 'preview' ? (
            <div 
              className="bg-white dark:bg-[#1A222C] rounded-2xl shadow-sm overflow-hidden border border-slate-200/40 dark:border-slate-800/40 transition-all duration-300 w-full"
              style={{
                maxWidth: device === 'mobile' ? '400px' : device === 'tablet' ? '768px' : '100%'
              }}
            >
              {previewMode === 'react' ? (
                <div className="p-4 transition-colors duration-300">
                  {children}
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  srcDoc={snippet.fullHtml}
                  className="w-full border-none block"
                  style={{ height: iframeHeight }}
                  title="html-preview"
                />
              )}
            </div>
          ) : (
            /* Active Code tab */
            <div className="w-full bg-slate-950 rounded-2xl overflow-hidden text-left border border-slate-800">
              
              {/* Code sub tabs */}
              {codeMode === 'html' ? (
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                  <button
                    onClick={() => setHtmlSubTab('html')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${htmlSubTab === 'html' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setHtmlSubTab('css')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${htmlSubTab === 'css' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                  >
                    CSS
                  </button>
                  <button
                    onClick={() => setHtmlSubTab('js')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${htmlSubTab === 'js' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-300'}`}
                  >
                    Javascript
                  </button>
                </div>
              ) : (
                <div className="px-4 py-3.5 bg-slate-900 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-400">React Component Code</span>
                </div>
              )}

              {/* Code display block */}
              <div className="p-4 sm:p-6 overflow-x-auto max-h-[500px] custom-scrollbar">
                <pre className="text-xs sm:text-sm font-mono text-slate-300">
                  <code>
                    {codeMode === 'react' 
                      ? snippet.react 
                      : htmlSubTab === 'html' 
                        ? snippet.html 
                        : htmlSubTab === 'css' 
                          ? snippet.css 
                          : snippet.js
                    }
                  </code>
                </pre>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// React component representation of the input states card
const InputStatePreview: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-10 flex flex-col gap-8 items-start justify-start w-full border border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
        <div className="text-[#111111] dark:text-white text-left font-bold text-xl leading-[1.5] relative">
          State
        </div>
        <div className="text-[#767676] dark:text-slate-400 text-left text-sm leading-[1.5] font-medium relative">
          Default : 인풋창의 기본 상태
          <br />
          Focused : 인풋창이 선택된 상태
          <br />
          Completed : 인풋창 입력 중 상태
          <br />
          Error : 입력 내용에 오류가 있을 시, 인풋창아래 hint 메세지 제공
          <br />
          Disabled : 인풋 비활성화 상태, 입력 불가능
          <br />
          View : 이미 입력된 내용을 확인만 할 수 있는 상태, 입력 불가능
        </div>
      </div>
      <div className="rounded-2xl border border-solid border-[#dadada] dark:border-slate-700 p-6 flex flex-col xl:flex-row gap-10 items-start justify-start w-full overflow-x-auto">
        
        {/* Default */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Default
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-white dark:bg-slate-800">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#767676] dark:text-slate-400 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
            <div className="pt-[8px] pr-[0px] pb-[0px] pl-[0px] flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
              <div className="text-[#256ef4] dark:text-indigo-400 text-left text-[15px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                * 필수 입력 항목입니다.
              </div>
            </div>
          </div>
        </div>

        {/* Focused */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Focused
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#256ef4] py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-white dark:bg-slate-800 ring-2 ring-blue-100 dark:ring-blue-900/30">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#111111] dark:text-white text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Completed
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-white dark:bg-slate-800">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#111111] dark:text-white text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Error
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-300 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#c7332a] py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-white dark:bg-slate-800">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#767676] dark:text-slate-400 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
            <div className="pt-[8px] pr-[0px] pb-[0px] pl-[0px] flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative">
              <svg className="flex-shrink-0 w-5 h-5 text-[#c7332a]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.64973 9.03711C6.98407 5.01211 8.15124 3 10 3C11.848 3 13.0159 5.01211 15.3503 9.03711L15.6415 9.538C17.5814 12.8824 18.5518 14.5547 17.675 15.7773C16.7982 17 14.6287 17 10.2912 17H9.70881C5.37131 17 3.20176 17 2.32498 15.7773C1.44821 14.5547 2.41858 12.8824 4.35854 9.538L4.64973 9.03711ZM10 6.30556C10.1591 6.30556 10.3117 6.36701 10.4243 6.47641C10.5368 6.58581 10.6 6.73418 10.6 6.88889V10.7778C10.6 10.9325 10.5368 11.0809 10.4243 11.1903C10.3117 11.2997 10.1591 11.3611 10 11.3611C9.84087 11.3611 9.68827 11.2997 9.57575 11.1903C9.46323 11.0809 9.40001 10.9325 9.40001 10.7778V6.88889C9.40001 6.73418 9.46323 6.58581 9.57575 6.47641C9.68827 6.36701 9.84087 6.30556 10 6.30556ZM10 13.8889C10.2122 13.8889 10.4156 13.8069 10.5657 13.6611C10.7157 13.5152 10.8 13.3174 10.8 13.1111C10.8 12.9048 10.7157 12.707 10.5657 12.5611C10.4156 12.4153 10.2122 12.3333 10 12.3333C9.78783 12.3333 9.58435 12.4153 9.43433 12.5611C9.2843 12.707 9.20002 12.9048 9.20002 13.1111C9.20002 13.3174 9.2843 13.5152 9.43433 13.6611C9.58435 13.8069 9.78783 13.8889 10 13.8889Z" fill="#C7332A" />
              </svg>
              <div className="text-[#c7332a] text-left text-[15px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                필수 입력 항목입니다.
              </div>
            </div>
          </div>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            Disabled
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-350 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-[#f5f5f5] dark:bg-slate-800/50 opacity-60">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#999999] dark:text-slate-500 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View */}
        <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[240px] relative">
          <div className="text-[#111111] dark:text-white text-left font-semibold text-base leading-[1.5] relative self-stretch">
            View (내용만 확인)
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div className="py-[4px] px-[0px] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-[40px] relative">
              <div className="text-[#464648] dark:text-slate-350 text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                Label
              </div>
            </div>
            <div className="rounded-md border border-solid border-[#dadada] dark:border-slate-700 py-[6px] px-[24px] flex flex-row gap-2 items-center justify-start shrink-0 w-[240px] h-[56px] relative bg-[#f5f5f5] dark:bg-slate-800/50">
              <div className="flex flex-row gap-1 items-center justify-start flex-1 relative">
                <div className="text-[#111111] dark:text-white text-left text-[17px] leading-[1.6] tracking-[-0.025em] font-normal relative flex-1">
                  내용을 입력하세요
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const InputComponent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            인풋 컴포넌트
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>컴포넌트</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">인풋</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 pb-20">
        <FormLayoutWrapper
          title="Input State"
          description="인풋의 상태를 나타내주는 폼입니다."
          snippet={codeSnippets.inputStates}
        >
          <InputStatePreview />
        </FormLayoutWrapper>
      </div>
    </div>
  );
};

export default InputComponent;
