import React, { useState, useRef, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Copy, 
  Check 
} from 'lucide-react';

export interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

export interface ShowcaseWrapperProps {
  id?: string;
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
  defaultFullWidth?: boolean;
}

const ShowcaseWrapper: React.FC<ShowcaseWrapperProps> = ({ 
  id, 
  title, 
  description, 
  snippet, 
  children,
  defaultFullWidth = false 
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [previewMode, setPreviewMode] = useState<'react' | 'html'>('react');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  const [isFullWidth, setIsFullWidth] = useState<boolean>(defaultFullWidth);
  
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
  }, [activeTab, previewMode, theme, snippet.fullHtml]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getSrcDoc = () => {
    if (!snippet.fullHtml) return '';
    let html = snippet.fullHtml;

    // React 미리보기(p-6 = 24px, w-full)와 100% 동일한 가로폭 및 패딩을 보장하는 스타일 주입
    const previewResetStyle = `
      <style>
        html, body {
          margin: 0 !important;
          padding: 24px !important;
          box-sizing: border-box !important;
          width: 100% !important;
          min-height: auto !important;
          background-color: ${theme === 'dark' ? '#0F172A' : '#ffffff'} !important;
        }
        body > div {
          width: 100% !important;
          max-width: 100% !important;
        }
      </style>
    `;

    if (html.includes('</head>')) {
      html = html.replace('</head>', `${previewResetStyle}</head>`);
    } else {
      html = previewResetStyle + html;
    }

    if (theme === 'dark') {
      if (html.includes('<html')) {
        html = html.replace('<html', '<html class="dark"');
      }
      if (html.includes('<body class="')) {
        html = html.replace('<body class="', '<body class="dark ');
      } else if (html.includes('<body ')) {
        html = html.replace('<body ', '<body class="dark" ');
      } else {
        html = html.replace('<body>', '<body class="dark">');
      }
    }
    return html;
  };

  const elementId = id || `showcase-${title.replace(/[\s,()/\-_:]+/g, '-')}`;

  return (
    <div 
      id={elementId} 
      className={`space-y-4 font-sans mb-[40px] w-full @container scroll-mt-[100px] transition-all duration-300 ${isFullWidth ? 'col-span-full xl:col-span-2' : 'col-span-1'}`}
    >
      {/* Wrapper Header: Controls Toolbar */}
      <div className="flex flex-col @[960px]:flex-row @[960px]:items-center justify-between gap-4 p-4 dark:bg-slate-800/40 rounded-2xl dark:border-slate-800">
        <div>
          <h3 className="text-base text-[22px] font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2 @[960px]:ml-0 ml-auto">
          {/* Main View Toggle: [ 미리보기 | 코드보기 ] */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              미리보기
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              코드보기
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Sub-toggle for Preview Tab: [ React | HTML ] */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl">
                <button
                  onClick={() => setPreviewMode('react')}
                  className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                    previewMode === 'react'
                      ? 'bg-[#16232A] dark:bg-[#FF5B04] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  React
                </button>
                <button
                  onClick={() => setPreviewMode('html')}
                  className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                    previewMode === 'html'
                      ? 'bg-[#16232A] dark:bg-[#FF5B04] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  HTML
                </button>
              </div>

              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* Sub-toggle for Code Tab: [ React | 일반 HTML ] */}
          {activeTab === 'code' && (
            <>
              <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-1">
                <button
                  onClick={() => setCodeMode('react')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
                    codeMode === 'react'
                      ? 'bg-[#16232A] dark:bg-[#FF5B04] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  React
                </button>
                <button
                  onClick={() => setCodeMode('html')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
                    codeMode === 'html'
                      ? 'bg-[#16232A] dark:bg-[#FF5B04] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  일반 HTML
                </button>
              </div>

              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* Theme switcher (preview only) */}
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
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-[#FF5B04]/10 text-[#FF5B04]' : 'text-slate-400 hover:text-slate-600'}`}
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

          {/* Copy Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyCode}
              className={`relative group p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-[#E4EEF0] text-slate-500 hover:text-[#FF5B04] dark:bg-slate-800 dark:hover:bg-slate-700'}`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                {copied ? "복사 완료!" : "HTML/CSS/JS 전체 소스 복사"}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
              </div>
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Layout Width Mode Toggle: 1열 (풀 와이드) vs 2열 (분할) */}
          <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            {/* 1열 풀와이드 버튼 */}
            <button
              type="button"
              onClick={() => setIsFullWidth(true)}
              className={`relative group p-1.5 rounded-lg transition-all cursor-pointer ${isFullWidth ? 'bg-white dark:bg-slate-700 text-[#16232A] dark:text-[#FF5B04] shadow-xs' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
              aria-label="1열 꽉 채우기 (풀 와이드)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                1열 꽉 채우기 (풀 와이드)
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
              </div>
            </button>

            {/* 2열 분할 버튼 */}
            <button
              type="button"
              onClick={() => setIsFullWidth(false)}
              className={`relative group p-1.5 rounded-lg transition-all cursor-pointer ${!isFullWidth ? 'bg-white dark:bg-slate-700 text-[#16232A] dark:text-[#FF5B04] shadow-xs' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
              aria-label="2열 분할 보기"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                2열 분할 보기
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div 
        className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 transition-all duration-300 w-full"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 20px 27px 0' }}
      >
        {activeTab === 'preview' ? (
          previewMode === 'react' ? (
            /* React Component Live Preview */
            <div className={theme === 'dark' ? 'dark' : ''}>
              <div className="bg-white dark:bg-[#0F172A] transition-colors duration-300 w-full p-6">
                {children}
              </div>
            </div>
          ) : (
            /* Static HTML iframe Preview (applying simulated theme) */
            <iframe
              ref={iframeRef}
              onLoad={updateIframeHeight}
              srcDoc={getSrcDoc()}
              title={`${title} HTML Preview`}
              className="w-full border-none bg-slate-50 dark:bg-[#0F172A] transition-colors block"
              style={{ height: iframeHeight }}
              sandbox="allow-scripts allow-same-origin"
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

export default ShowcaseWrapper;
