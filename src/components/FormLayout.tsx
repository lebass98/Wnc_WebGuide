import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  User, 
  Lock, 
  Send, 
  ChevronDown, 
  Check, 
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Copy
} from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

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
  const [iframeHeight, setIframeHeight] = useState('400px');

  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      const html = iframe.contentDocument.documentElement;
      if (body) {
        // 내부 폼 높이를 정확히 맞추기 위해 scrollHeight 계산
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        setIframeHeight(`${height}px`);
      }
    }
  };

  useEffect(() => {
    if (activeTab === 'preview' && previewMode === 'html') {
      const timer = setTimeout(() => {
        updateIframeHeight();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeTab, previewMode, device, theme, snippet.fullHtml]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-4 font-sans">
      {/* Wrapper Header: Controls Toolbar */}
      <div className="flex flex-col items-start gap-3 bg-slate-50/50 dark:bg-slate-800/40 p-4 rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2">

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

          {/* 코드보기 button (separate, always visible) */}
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

          {/* Copy Actions */}
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
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto w-full' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto w-full' : 'w-full'}`}>
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

/* --- 1. Basic Form Preview Component --- */
const BasicFormPreview: React.FC = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <input 
            type="text" 
            placeholder="이름" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <input 
          type="password" 
          placeholder="비밀번호" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <input 
          type="password" 
          placeholder="비밀번호 확인" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center text-xs sm:text-sm"
        >
          제출
        </button>
      </div>
    </div>
  );
};

/* --- 2. Message Form Preview Component --- */
const MessageFormPreview: React.FC = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
            <input 
              type="text" 
              placeholder="이름 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
            <input 
              type="text" 
              placeholder="성 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
          <input 
            type="email" 
            placeholder="이메일 주소 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">주제 선택</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>옵션 1</option>
              <option>옵션 2</option>
              <option>옵션 3</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">메시지</label>
          <textarea 
            rows={4} 
            placeholder="메시지 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm"
          />
        </div>
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm"
        >
          메시지 전송 <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

/* --- 3. Icon Form Preview Component --- */
const IconFormPreview: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <User className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="사용자 이름" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 확인" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <input 
              type="checkbox" 
              className="hidden" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${rememberMe ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
              {rememberMe && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">로그인 유지</span>
          </label>
          <button 
            type="button" 
            className="w-full sm:w-auto py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
          >
            계정 생성
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 4. Personal Info Form Preview Component --- */
const PersonalInfoFormPreview: React.FC = () => {
  const [membership, setMembership] = useState('free');

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-6 sm:space-y-8 text-left">
        
        {/* Personal Info section */}
        <div className="space-y-4 sm:space-y-6">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
              <input type="text" placeholder="이름 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
              <input type="text" placeholder="성 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>남성</option>
                <option>여성</option>
                <option>기타</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2 relative z-50">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">생년월일</label>
            <CustomDatePicker placeholder="날짜 선택" />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">카테고리</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>카테고리 1</option>
                <option>카테고리 2</option>
                <option>카테고리 3</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Address section */}
        <div className="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">도로명</label>
            <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                  <option>--국가 선택--</option>
                  <option>미국</option>
                  <option>영국</option>
                  <option>대한민국</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">멤버십:</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="free" checked={membership === 'free'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'free' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                   {membership === 'free' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${membership === 'free' ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>무료</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                  {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${membership === 'paid' ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>유료</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              변경사항 저장
            </button>
            <button type="button" className="py-2.5 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              취소
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const FormLayout: React.FC = () => {
  const codeSnippets: Record<string, CodeSnippet> = {
    form1: {
      react: `import React from 'react';

const BasicForm = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <input 
            type="text" 
            placeholder="이름" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <input 
          type="password" 
          placeholder="비밀번호" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <input 
          type="password" 
          placeholder="비밀번호 확인" 
          className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center text-xs sm:text-sm"
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default BasicForm;`,
      html: `<!-- 기본 폼 HTML (Tailwind CSS 기반) -->
<div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
  <div class="space-y-4 sm:space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <input 
        type="text" 
        placeholder="이름" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
      <input 
        type="email" 
        placeholder="이메일 주소" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <input 
      type="password" 
      placeholder="비밀번호" 
      class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
    />
    <input 
      type="password" 
      placeholder="비밀번호 확인" 
      class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
    />
    <button 
      type="button" 
      class="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center text-xs sm:text-sm"
    >
      제출
    </button>
  </div>
</div>`,
      css: `/* 기본 Tailwind CSS 스타일링 사용으로 별도의 커스텀 클래스가 존재하지 않습니다. */`,
      js: `// 인터랙션 스크립트 없음`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>기본 폼 실시간 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800">
    <div class="space-y-4 sm:space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <input 
          type="text" 
          placeholder="이름" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
        <input 
          type="email" 
          placeholder="이메일 주소" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <input 
        type="password" 
        placeholder="비밀번호" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
      <input 
        type="password" 
        placeholder="비밀번호 확인" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
      <button 
        type="button" 
        class="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center text-xs sm:text-sm"
      >
        제출
      </button>
    </div>
  </div>
</body>
</html>`
    },
    form2: {
      react: `import React from 'react';
import { Send, ChevronDown } from 'lucide-react';

const MessageForm = () => {
  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
            <input 
              type="text" 
              placeholder="이름 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
            <input 
              type="text" 
              placeholder="성 입력" 
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
            />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
          <input 
            type="email" 
            placeholder="이메일 주소 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">주제 선택</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>옵션 1</option>
              <option>옵션 2</option>
              <option>옵션 3</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">메시지</label>
          <textarea 
            rows={4} 
            placeholder="메시지 입력" 
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm"
          />
        </div>
        <button 
          type="button" 
          className="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm"
        >
          메시지 전송 <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default MessageForm;`,
      html: `<!-- 예제 폼 HTML (Tailwind CSS 기반) -->
<div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
  <div class="space-y-4 sm:space-y-6 text-left">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
        <input 
          type="text" 
          placeholder="이름 입력" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
        <input 
          type="text" 
          placeholder="성 입력" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
    </div>
    <div class="space-y-1.5 sm:space-y-2">
      <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
      <input 
        type="email" 
        placeholder="이메일 주소 입력" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <div class="space-y-1.5 sm:space-y-2">
      <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">주제 선택</label>
      <div class="relative">
        <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
          <option>옵션 1</option>
          <option>옵션 2</option>
          <option>옵션 3</option>
        </select>
        <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>
    </div>
    <div class="space-y-1.5 sm:space-y-2">
      <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">메시지</label>
      <textarea 
        rows="4" 
        placeholder="메시지 입력" 
        class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm"
      ></textarea>
    </div>
    <button 
      type="button" 
      class="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm"
    >
      메시지 전송
    </button>
  </div>
</div>`,
      css: `/* 기본 Tailwind CSS 스타일링 사용으로 별도의 커스텀 클래스가 존재하지 않습니다. */`,
      js: `// 인터랙션 스크립트 없음`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>예제 폼 실시간 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800">
    <div class="space-y-4 sm:space-y-6 text-left">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
          <input 
            type="text" 
            placeholder="이름 입력" 
            class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
          <input 
            type="text" 
            placeholder="성 입력" 
            class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
        <input 
          type="email" 
          placeholder="이메일 주소 입력" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">주제 선택</label>
        <div class="relative">
          <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
            <option>옵션 1</option>
            <option>옵션 2</option>
            <option>옵션 3</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <!-- Chevron SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">메시지</label>
        <textarea 
          rows="4" 
          placeholder="메시지 입력" 
          class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm"
        ></textarea>
      </div>
      <button 
        type="button" 
        class="w-full py-2.5 sm:py-3 px-4 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 text-xs sm:text-sm"
      >
        메시지 전송
      </button>
    </div>
  </div>
</body>
</html>`
    },
    form3: {
      react: `import React, { useState } from 'react';
import { Mail, User, Lock, Check } from 'lucide-react';

const IconForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-4 sm:space-y-6 text-left">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <User className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="사용자 이름" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 확인" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <input 
              type="checkbox" 
              className="hidden" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <div className={"w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all " + (rememberMe ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500')}>
              {rememberMe && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">로그인 유지</span>
          </label>
          <button 
            type="button" 
            className="w-full sm:w-auto py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
          >
            계정 생성
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconForm;`,
      html: `<!-- 아이콘이 포함된 폼 HTML (Tailwind CSS 및 Lucide 웹아이콘 기반) -->
<div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
  <div class="space-y-4 sm:space-y-6 text-left">
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
        <i data-lucide="user" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
      </div>
      <input 
        type="text" 
        placeholder="사용자 이름" 
        class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
        <i data-lucide="mail" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
      </div>
      <input 
        type="email" 
        placeholder="이메일 주소" 
        class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
        <i data-lucide="lock" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
      </div>
      <input 
        type="password" 
        placeholder="비밀번호" 
        class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <div class="relative group">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
        <i data-lucide="lock" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
      </div>
      <input 
        type="password" 
        placeholder="비밀번호 확인" 
        class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
      />
    </div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
      <label class="checkbox-container flex items-center gap-3 cursor-pointer group w-fit">
        <input 
          type="checkbox" 
          class="hidden" 
          id="keep-login"
        />
        <div class="custom-checkbox w-5 h-5 rounded-[0.25rem] border border-slate-300 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
          <!-- Check icon SVG -->
          <svg class="check-icon hidden w-3.5 h-3.5 text-white" stroke="currentColor" stroke-width="3" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <span class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">로그인 유지</span>
      </label>
      <button 
        type="button" 
        class="w-full sm:w-auto py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
      >
        계정 생성
      </button>
    </div>
  </div>
</div>`,
      css: `.checkbox-container input[type="checkbox"]:checked ~ .custom-checkbox {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
.checkbox-container input[type="checkbox"]:checked ~ .custom-checkbox .check-icon {
  display: block;
}
.checkbox-container:hover .custom-checkbox {
  border-color: #3b82f6;
}`,
      js: `// 체크박스 커스텀 핸들러 (인터랙션 바인딩) 및 Lucide 아이콘 초기화 스크립트
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#keep-login');
  if(checkbox) {
    checkbox.addEventListener('change', (e) => {
      console.log('로그인 유지 상태:', e.target.checked);
    });
  }
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
  <title>아이콘 폼 실시간 미리보기</title>
  <style>
    .checkbox-container input[type="checkbox"]:checked ~ .custom-checkbox {
      background-color: #3b82f6;
      border-color: #3b82f6;
    }
    .checkbox-container input[type="checkbox"]:checked ~ .custom-checkbox .check-icon {
      display: block;
    }
    .checkbox-container:hover .custom-checkbox {
      border-color: #3b82f6;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800">
    <div class="space-y-4 sm:space-y-6 text-left">
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
          <i data-lucide="user" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
        </div>
        <input 
          type="text" 
          placeholder="사용자 이름" 
          class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
          <i data-lucide="mail" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
        </div>
        <input 
          type="email" 
          placeholder="이메일 주소" 
          class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
          <i data-lucide="lock" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
        </div>
        <input 
          type="password" 
          placeholder="비밀번호" 
          class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
          <i data-lucide="lock" class="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
        </div>
        <input 
          type="password" 
          placeholder="비밀번호 확인" 
          class="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
        />
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <label class="checkbox-container flex items-center gap-3 cursor-pointer group w-fit">
          <input 
            type="checkbox" 
            class="hidden" 
            id="keep-login"
          />
          <div class="custom-checkbox w-5 h-5 rounded-[0.25rem] border border-slate-300 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
            <svg class="check-icon hidden w-3.5 h-3.5 text-white" stroke="currentColor" stroke-width="3" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <span class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white">로그인 유지</span>
        </label>
        <button 
          type="button" 
          class="w-full sm:w-auto py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
        >
          계정 생성
        </button>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.querySelector('#keep-login');
      if(checkbox) {
        checkbox.addEventListener('change', (e) => {
          console.log('로그인 유지 상태:', e.target.checked);
        });
      }
      lucide.createIcons();
    });
  </script>
</body>
</html>`
    },
    form4: {
      react: `import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PersonalInfoForm = () => {
  const [membership, setMembership] = useState('free');

  return (
    <div className="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-6 sm:space-y-8 text-left">
        
        {/* Personal Info section */}
        <div className="space-y-4 sm:space-y-6">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
              <input type="text" placeholder="이름 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
              <input type="text" placeholder="성 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>남성</option>
                <option>여성</option>
                <option>기타</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">생년월일</label>
            <input type="date" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">카테고리</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>카테고리 1</option>
                <option>카테고리 2</option>
                <option>카테고리 3</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Address section */}
        <div className="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">도로명</label>
            <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                  <option>대한민국</option>
                  <option>미국</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">멤버십:</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="free" checked={membership === 'free'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={"w-5 h-5 rounded-full border flex items-center justify-center transition-all " + (membership === 'free' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500')}>
                   {membership === 'free' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className="text-xs sm:text-sm font-bold">무료</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={"w-5 h-5 rounded-full border flex items-center justify-center transition-all " + (membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500')}>
                  {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className="text-xs sm:text-sm font-bold">유료</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button type="button" className="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              변경사항 저장
            </button>
            <button type="button" className="py-2.5 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-650 font-semibold rounded-lg transition-colors text-xs sm:text-sm">
              취소
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfoForm;`,
      html: `<!-- 상세 개인정보 & 주소 폼 HTML (Tailwind CSS 기반) -->
<div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 transition-colors duration-300">
  <div class="space-y-6 sm:space-y-8 text-left">
    
    <!-- Personal Info section -->
    <div class="space-y-4 sm:space-y-6">
      <h4 class="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
          <input type="text" placeholder="이름 입력" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
          <input type="text" placeholder="성 입력" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
        </div>
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
        <div class="relative">
          <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
            <option>남성</option>
            <option>여성</option>
            <option>기타</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">생년월일</label>
        <input type="date" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
      </div>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">카테고리</label>
        <div class="relative">
          <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
            <option>카테고리 1</option>
            <option>카테고리 2</option>
            <option>카테고리 3</option>
          </select>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Address section -->
    <div class="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
      <h4 class="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
      <div class="space-y-1.5 sm:space-y-2">
        <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">도로명</label>
        <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
          <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
          <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
          <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
          <div class="relative">
            <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>대한민국</option>
              <option>미국</option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-6 pt-2">
        <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">멤버십:</span>
        <div class="flex items-center gap-4">
          <label class="radio-container flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="membership" value="free" class="hidden" id="membership-free" checked />
            <div class="custom-radio w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
               <div class="radio-dot hidden w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
            <span class="text-xs sm:text-sm font-bold text-slate-500">무료</span>
          </label>
          <label class="radio-container flex items-center gap-2 cursor-pointer group">
            <input type="radio" name="membership" value="paid" class="hidden" id="membership-paid" />
            <div class="custom-radio w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
              <div class="radio-dot hidden w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
            <span class="text-xs sm:text-sm font-bold text-slate-500">유료</span>
          </label>
        </div>
      </div>

      <div class="flex items-center gap-4 pt-4">
        <button type="button" class="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm">
          변경사항 저장
        </button>
        <button type="button" class="py-2.5 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-650 font-semibold rounded-lg transition-colors text-xs sm:text-sm">
          취소
        </button>
      </div>
    </div>
  </div>
</div>`,
      css: `/* 커스텀 라디오 버튼 인터랙션 스타일링 */
.radio-container input[type="radio"]:checked ~ .custom-radio {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
.radio-container input[type="radio"]:checked ~ .custom-radio .radio-dot {
  display: block;
}
.radio-container input[type="radio"]:checked ~ span {
  color: #1e293b;
}
.radio-container:hover .custom-radio {
  border-color: #3b82f6;
}`,
      js: `// 라디오 인터랙션 제어 스크립트 예제 및 Lucide 아이콘 초기화
document.addEventListener('DOMContentLoaded', () => {
  const freeRadio = document.querySelector('#membership-free');
  const paidRadio = document.querySelector('#membership-paid');
  
  const handleRadioChange = (e) => {
    console.log('선택된 멤버십:', e.target.value);
  };
  
  if(freeRadio && paidRadio) {
    freeRadio.addEventListener('change', handleRadioChange);
    paidRadio.addEventListener('change', handleRadioChange);
  }
  
  // Lucide 아이콘 활성화
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
  <title>상세 개인정보 & 주소 폼 실시간 미리보기</title>
  <style>
    .radio-container input[type="radio"]:checked ~ .custom-radio {
      background-color: #3b82f6;
      border-color: #3b82f6;
    }
    .radio-container input[type="radio"]:checked ~ .custom-radio .radio-dot {
      display: block;
    }
    .radio-container input[type="radio"]:checked ~ span {
      color: #1e293b;
    }
    .radio-container:hover .custom-radio {
      border-color: #3b82f6;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center min-h-screen">
  <div class="w-full max-w-full mx-auto bg-white dark:bg-[#1A222C] rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 dark:border-slate-800">
    <div class="space-y-6 sm:space-y-8 text-left">
      
      <!-- Personal Info section -->
      <div class="space-y-4 sm:space-y-6">
        <h4 class="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
            <input type="text" placeholder="이름 입력" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
          </div>
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
            <input type="text" placeholder="성 입력" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
          </div>
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
          <div class="relative">
            <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>남성</option>
              <option>여성</option>
              <option>기타</option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
          </div>
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">생년월일</label>
          <input type="date" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
        </div>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">카테고리</label>
          <div class="relative">
            <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
              <option>카테고리 1</option>
              <option>카테고리 2</option>
              <option>카테고리 3</option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Address section -->
      <div class="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
        <h4 class="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
        <div class="space-y-1.5 sm:space-y-2">
          <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">도로명</label>
          <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
            <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
            <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
            <input type="text" class="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div class="space-y-1.5 sm:space-y-2">
            <label class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
            <div class="relative">
              <select class="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-555 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-xs sm:text-sm">
                <option>대한민국</option>
                <option>미국</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-6 pt-2">
          <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">멤버십:</span>
          <div class="flex items-center gap-4">
            <label class="radio-container flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="membership" value="free" class="hidden" id="membership-free" checked />
              <div class="custom-radio w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
                 <div class="radio-dot hidden w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-500">무료</span>
            </label>
            <label class="radio-container flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="membership" value="paid" class="hidden" id="membership-paid" />
              <div class="custom-radio w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-all bg-white dark:bg-slate-800">
                <div class="radio-dot hidden w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-500">유료</span>
            </label>
          </div>
        </div>

        <div class="flex items-center gap-4 pt-4">
          <button type="button" class="py-2.5 px-6 bg-[#4A6BFF] hover:bg-[#3d59d6] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm">
            변경사항 저장
          </button>
          <button type="button" class="py-2.5 px-6 bg-white border border-slate-200 hover:bg-slate-50 text-slate-650 font-semibold rounded-lg transition-colors text-xs sm:text-sm">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const freeRadio = document.querySelector('#membership-free');
      const paidRadio = document.querySelector('#membership-paid');
      
      const handleRadioChange = (e) => {
        console.log('선택된 멤버십:', e.target.value);
      };
      
      if(freeRadio && paidRadio) {
        freeRadio.addEventListener('change', handleRadioChange);
        paidRadio.addEventListener('change', handleRadioChange);
      }
      lucide.createIcons();
    });
  </script>
</body>
</html>`
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            폼 레이아웃
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>폼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">폼 레이아웃</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pb-20">
        {/* Left Column */}
        <div className="space-y-8">
          <FormLayoutWrapper
            title="기본 폼"
            description="다양한 크기의 뷰포트에 유기적으로 대응하는 다단 격자형 로그인 및 가입용 기본 입력 폼 레이아웃입니다."
            snippet={codeSnippets.form1}
          >
            <BasicFormPreview />
          </FormLayoutWrapper>

          <FormLayoutWrapper
            title="예제 폼"
            description="이름, 주제, 텍스트 메시지를 포함하여 간편하게 메시지를 발송할 수 있는 문의 접수 목적의 폼입니다."
            snippet={codeSnippets.form2}
          >
            <MessageFormPreview />
          </FormLayoutWrapper>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <FormLayoutWrapper
            title="아이콘이 있는 예제 폼"
            description="인풋 왼쪽에 메일, 비밀번호 등 직관적인 필드 아이콘이 내장되어 시각적 정보 파악이 원활한 로그인 폼입니다."
            snippet={codeSnippets.form3}
          >
            <IconFormPreview />
          </FormLayoutWrapper>

          <FormLayoutWrapper
            title="상세 개인정보 & 주소 폼"
            description="개인 정보, 생년월일, 다단계 주소 필드와 라디오 멤버십 선택지가 복합적으로 정렬된 마스터 설정 폼 레이아웃입니다."
            snippet={codeSnippets.form4}
          >
            <PersonalInfoFormPreview />
          </FormLayoutWrapper>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
