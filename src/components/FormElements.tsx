import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Copy, 
  Upload, 
  ChevronDown, 
  CreditCard, 
  Eye, 
  X, 
  Check, 
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon
} from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

interface FormElementsWrapperProps {
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
}

const FormElementsWrapper: React.FC<FormElementsWrapperProps> = ({ title, description, snippet, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [previewMode, setPreviewMode] = useState<'react' | 'html'>('react');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState('320px');

  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const body = iframe.contentDocument.body;
      const html = iframe.contentDocument.documentElement;
      if (body) {
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
      }, 150);
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
    <div className="space-y-4 font-sans bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
      {/* Wrapper Header: Controls Toolbar (세로 줄내림 레이아웃 적용) */}
      <div className="flex flex-col items-start gap-3 bg-slate-50/50 dark:bg-slate-800/40 p-4 rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* 1. Preview Mode Group: React | HTML */}
          {activeTab === 'preview' && (
            <div className="flex items-center p-1 bg-slate-200/80 dark:bg-[#1A222C] rounded-xl">
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

          {/* 2. Device View Mode Group (Only Visible in Preview-HTML) */}
          {activeTab === 'preview' && previewMode === 'html' && (
            <div className="flex items-center p-1 bg-slate-200/80 dark:bg-[#1A222C] rounded-xl">
              <button
                onClick={() => setDevice('desktop')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${device === 'desktop' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${device === 'tablet' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${device === 'mobile' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* 3. Theme Toggle Switch (Only Visible in Preview-HTML) */}
          {activeTab === 'preview' && previewMode === 'html' && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* 4. Code Language Mode selector */}
          {activeTab === 'code' && (
            <div className="flex items-center p-1 bg-slate-200/80 dark:bg-[#1A222C] rounded-xl">
              <button
                onClick={() => setCodeMode('react')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${codeMode === 'react' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                React Source
              </button>
              <button
                onClick={() => setCodeMode('html')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${codeMode === 'html' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-550'}`}
              >
                HTML / CSS / JS
              </button>
            </div>
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
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          previewMode === 'react' ? (
            /* React Component Live Preview */
            <div className={theme === 'dark' ? 'dark' : ''}>
              <div className="bg-white dark:bg-[#1A222C] transition-colors duration-300 w-full">
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

// Code Snippets Definition
const codeSnippets = {
  defaultInputs: {
    react: `import React, { useState } from 'react';
import { Eye, CreditCard } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';

function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">입력란</label>
        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
        <input type="text" placeholder="info@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
        <div className="relative">
          <input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
          <Eye 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer text-slate-400 hover:text-indigo-500" 
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">입력란</label>
    <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
    <input type="text" placeholder="info@gmail.com" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
    <div class="relative">
      <input type="password" id="pw-input" placeholder="비밀번호를 입력하세요" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-855 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
      <span class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-indigo-500" id="pw-toggle">
        <i data-lucide="eye" class="w-4 h-4"></i>
      </span>
    </div>
  </div>
</div>`,
    css: `/* 기본 Tailwind CSS 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const pwInput = document.getElementById('pw-input');
  const pwToggle = document.getElementById('pw-toggle');
  if (pwToggle && pwInput) {
    pwToggle.addEventListener('click', () => {
      const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
      pwInput.setAttribute('type', type);
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>기본 입력란 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">입력란</label>
        <input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
        <input type="text" placeholder="info@gmail.com" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
        <div class="relative">
          <input type="password" id="pw-input" placeholder="비밀번호를 입력하세요" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
          <span class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-indigo-500" id="pw-toggle">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const pwInput = document.getElementById('pw-input');
      const pwToggle = document.getElementById('pw-toggle');
      if (pwToggle && pwInput) {
        pwToggle.addEventListener('click', () => {
          const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
          pwInput.setAttribute('type', type);
        });
      }
    });
  </script>
</body>
</html>`
  },
  selectInputs: {
    react: `import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function SelectInputs() {
  const [multiSelectOpen, setMultiSelectOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(['옵션 1', '옵션 3']);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
        <div className="relative">
          <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
            <option>옵션 선택</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
        <div className="relative">
          <div onClick={() => setMultiSelectOpen(!multiSelectOpen)} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-800 cursor-pointer min-h-[50px]">
            {selectedOptions.length === 0 && <span className="text-slate-400">옵션을 선택하세요...</span>}
            {selectedOptions.map(option => (
              <span key={option} className="bg-slate-100 dark:bg-slate-700 text-slate-650 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">
                {option}
                <X className="w-3 h-3 text-slate-400 hover:text-red-500" onClick={(e) => { e.stopPropagation(); setSelectedOptions(selectedOptions.filter(o => o !== option)); }} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
    <div class="relative">
      <select class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        <option>옵션 선택</option>
        <option>옵션 1</option>
        <option>옵션 2</option>
      </select>
      <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"></i>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
    <div class="relative">
      <select multiple class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white min-h-[100px]">
        <option selected>옵션 1</option>
        <option>옵션 2</option>
        <option selected>옵션 3</option>
        <option>옵션 4</option>
      </select>
    </div>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `// Setup`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>선택 입력란 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
        <div class="relative">
          <select class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none appearance-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
            <option>옵션 선택</option>
            <option>옵션 1</option>
            <option>옵션 2</option>
          </select>
          <i data-lucide="chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"></i>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
        <div class="relative">
          <select multiple class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white min-h-[100px] p-2">
            <option selected class="p-1 rounded">옵션 1</option>
            <option class="p-1 rounded">옵션 2</option>
            <option selected class="p-1 rounded">옵션 3</option>
            <option class="p-1 rounded">옵션 4</option>
          </select>
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
  },
  textarea: {
    react: `import React from 'react';

function TextareaInput() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">기본 설명</label>
        <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">비활성화 상태 설명</label>
        <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-55 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none" disabled></textarea>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">기본 설명</label>
    <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비활성화 상태 설명</label>
    <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none" disabled></textarea>
  </div>
</div>`,
    css: `/* 기본 Tailwind CSS 스타일 제공 */`,
    js: `// 없음`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>텍스트 영역 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">기본 설명</label>
        <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">비활성화 상태 설명</label>
        <textarea placeholder="설명을 입력하세요..." rows="4" class="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none" disabled></textarea>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  inputGroup: {
    react: `import React, { useState } from 'react';
import { Mail, Copy } from 'lucide-react';

function InputGroup() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("www.tailadmin.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="w-5 h-5 text-slate-400" />
          </div>
          <input type="text" placeholder="info@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
        <div className="flex">
          <input type="text" value="www.tailadmin.com" readOnly className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-650" />
          <button 
            onClick={handleCopy}
            className="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-indigo-500 font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            {copied ? <span className="text-emerald-500">복사됨!</span> : <><Copy className="w-4 h-4" /> 복사</>}
          </button>
        </div>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
      </div>
      <input type="text" placeholder="info@gmail.com" class="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
    <div class="flex">
      <input type="text" value="www.tailadmin.com" readonly class="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-600 dark:text-slate-400" id="website-url" />
      <button id="copy-btn" class="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-indigo-500 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
        <i data-lucide="copy" class="w-4 h-4"></i> 복사
      </button>
    </div>
  </div>
</div>`,
    css: `/* 기본 Tailwind CSS 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-btn');
  const websiteUrl = document.getElementById('website-url');
  if (copyBtn && websiteUrl) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(websiteUrl.value).then(() => {
        copyBtn.innerText = "복사됨!";
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> 복사';
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
      });
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>입력 그룹 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
          </div>
          <input type="text" placeholder="info@gmail.com" class="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
        <div class="flex">
          <input type="text" value="www.tailadmin.com" readonly class="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-600 dark:text-slate-400" id="website-url" />
          <button id="copy-btn" class="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-indigo-500 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <i data-lucide="copy" class="w-4 h-4"></i> 복사
          </button>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const copyBtn = document.getElementById('copy-btn');
      const websiteUrl = document.getElementById('website-url');
      if (copyBtn && websiteUrl) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(websiteUrl.value).then(() => {
            copyBtn.innerText = "복사됨!";
            setTimeout(() => {
              copyBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i> 복사';
              lucide.createIcons();
            }, 2000);
          });
        });
      }
    });
  </script>
</body>
</html>`
  },
  fileInput: {
    react: `import React, { useState } from 'react';

function FileInput() {
  const [fileName, setFileName] = useState("선택된 파일 없음");
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
      <div className="relative">
        <input type="file" className="hidden" id="file-upload" onChange={handleFileChange} />
        <label htmlFor="file-upload" className="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
          <span className="bg-slate-100 dark:bg-slate-700 text-slate-655 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
          <span className="text-slate-400 text-sm truncate">{fileName}</span>
        </label>
      </div>
    </div>
  );
}`,
    html: `<div class="flex flex-col gap-2">
  <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
  <div class="relative">
    <input type="file" class="hidden" id="file-upload-html" />
    <label for="file-upload-html" class="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
      <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
      <span class="text-slate-400 text-sm truncate" id="file-name-display">선택된 파일 없음</span>
    </label>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const fileUpload = document.getElementById('file-upload-html');
  const fileNameDisplay = document.getElementById('file-name-display');
  if (fileUpload && fileNameDisplay) {
    fileUpload.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileNameDisplay.innerText = e.target.files[0].name;
      }
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>파일 입력 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
      <div class="relative">
        <input type="file" class="hidden" id="file-upload-html" />
        <label for="file-upload-html" class="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
          <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
          <span class="text-slate-400 text-sm truncate" id="file-name-display">선택된 파일 없음</span>
        </label>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const fileUpload = document.getElementById('file-upload-html');
      const fileNameDisplay = document.getElementById('file-name-display');
      if (fileUpload && fileNameDisplay) {
        fileUpload.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            fileNameDisplay.innerText = e.target.files[0].name;
          }
        });
      }
    });
  </script>
</body>
</html>`
  },
  checkboxes: {
    react: `import React, { useState } from 'react';
import { Check } from 'lucide-react';

function CheckboxesInput() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);

  return (
    <div className="flex flex-wrap gap-8 items-center pt-2">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" className="hidden" checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} />
        <div className={\`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all \${checkbox1 ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}\`}>
          {checkbox1 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className="text-sm font-medium text-slate-600">기본</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" className="hidden" checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} />
        <div className={\`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all \${checkbox2 ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}\`}>
          {checkbox2 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className="text-sm font-medium text-slate-655">선택됨</span>
      </label>
    </div>
  );
}`,
    html: `<div class="flex flex-wrap gap-8 items-center pt-2">
  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="checkbox" class="hidden checkbox-input" id="chk-1" />
    <div class="w-5 h-5 rounded-[0.25rem] border border-slate-300 flex items-center justify-center transition-all checkbox-box">
      <i data-lucide="check" class="w-3.5 h-3.5 text-white hidden check-icon"></i>
    </div>
    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">기본</span>
  </label>

  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="checkbox" class="hidden checkbox-input" id="chk-2" checked />
    <div class="w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box">
      <i data-lucide="check" class="w-3.5 h-3.5 text-white check-icon"></i>
    </div>
    <span class="text-sm font-medium text-slate-800 dark:text-white">선택됨</span>
  </label>
</div>`,
    css: `.checkbox-input:checked + .checkbox-box {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
.checkbox-input:checked + .checkbox-box .check-icon {
  display: block;
}`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checkbox-input');
  checkboxes.forEach(ch => {
    ch.addEventListener('change', (e) => {
      const box = ch.nextElementSibling;
      const icon = box.querySelector('.check-icon');
      if (ch.checked) {
        box.classList.add('bg-blue-500', 'border-blue-500');
        box.classList.remove('border-slate-300');
        if (icon) icon.classList.remove('hidden');
      } else {
        box.classList.remove('bg-blue-500', 'border-blue-500');
        box.classList.add('border-slate-300');
        if (icon) icon.classList.add('hidden');
      }
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>체크박스 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="flex flex-wrap gap-8 items-center pt-2">
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" class="hidden checkbox-input" id="chk-1" />
        <div class="w-5 h-5 rounded-[0.25rem] border border-slate-300 dark:border-slate-650 flex items-center justify-center transition-all checkbox-box">
          <i data-lucide="check" class="w-3.5 h-3.5 text-white hidden check-icon" stroke-width="3"></i>
        </div>
        <span class="text-sm font-medium text-slate-600 dark:text-slate-400">기본</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="checkbox" class="hidden checkbox-input" id="chk-2" checked />
        <div class="w-5 h-5 rounded-[0.25rem] border border-blue-500 bg-blue-500 flex items-center justify-center transition-all checkbox-box">
          <i data-lucide="check" class="w-3.5 h-3.5 text-white check-icon" stroke-width="3"></i>
        </div>
        <span class="text-sm font-medium text-slate-800 dark:text-white">선택됨</span>
      </label>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const checkboxes = document.querySelectorAll('.checkbox-input');
      checkboxes.forEach(ch => {
        ch.addEventListener('change', (e) => {
          const box = ch.nextElementSibling;
          const icon = box.querySelector('.check-icon');
          if (ch.checked) {
            box.classList.add('bg-blue-500', 'border-blue-500');
            box.classList.remove('border-slate-300', 'dark:border-slate-650');
            if (icon) icon.classList.remove('hidden');
          } else {
            box.classList.remove('bg-blue-500', 'border-blue-500');
            box.classList.add('border-slate-300', 'dark:border-slate-650');
            if (icon) icon.classList.add('hidden');
          }
        });
      });
    });
  </script>
</body>
</html>`
  },
  radioButtons: {
    react: `import React, { useState } from 'react';

function RadioButtonsInput() {
  const [radioValue, setRadioValue] = useState('secondary');
  return (
    <div className="flex flex-wrap gap-8 items-center pt-2">
      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="radio" value="default" checked={radioValue === 'default'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
        <div className={\`w-5 h-5 rounded-full border flex items-center justify-center transition-all \${radioValue === 'default' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'}\`}>
           {radioValue === 'default' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
        </div>
        <span className="text-sm font-medium">기본</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer group">
        <input type="radio" value="secondary" checked={radioValue === 'secondary'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
        <div className={\`w-5 h-5 rounded-full border flex items-center justify-center transition-all \${radioValue === 'secondary' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300'}\`}>
          {radioValue === 'secondary' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
        </div>
        <span className="text-sm font-medium">보조</span>
      </label>
    </div>
  );
}`,
    html: `<div class="flex flex-wrap gap-8 items-center pt-2">
  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="radio" name="radio-html" value="default" class="hidden radio-input" id="rad-1" />
    <div class="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center transition-all radio-box">
      <div class="w-1.5 h-1.5 rounded-full bg-white hidden radio-dot"></div>
    </div>
    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">기본</span>
  </label>

  <label class="flex items-center gap-2 cursor-pointer group">
    <input type="radio" name="radio-html" value="secondary" class="hidden radio-input" id="rad-2" checked />
    <div class="w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box">
      <div class="w-1.5 h-1.5 rounded-full bg-white radio-dot"></div>
    </div>
    <span class="text-sm font-medium text-slate-800 dark:text-white">보조</span>
  </label>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('.radio-input');
  radios.forEach(rad => {
    rad.addEventListener('change', () => {
      radios.forEach(r => {
        const box = r.nextElementSibling;
        const dot = box.querySelector('.radio-dot');
        if (r.checked) {
          box.classList.add('bg-indigo-500', 'border-indigo-500');
          box.classList.remove('border-slate-300');
          if (dot) dot.classList.remove('hidden');
        } else {
          box.classList.remove('bg-indigo-500', 'border-indigo-500');
          box.classList.add('border-slate-300');
          if (dot) dot.classList.add('hidden');
        }
      });
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>라디오 버튼 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="flex flex-wrap gap-8 items-center pt-2">
      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-html" value="default" class="hidden radio-input" id="rad-1" />
        <div class="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-655 flex items-center justify-center transition-all radio-box">
          <div class="w-1.5 h-1.5 rounded-full bg-white hidden radio-dot"></div>
        </div>
        <span class="text-sm font-medium text-slate-600 dark:text-slate-400">기본</span>
      </label>

      <label class="flex items-center gap-2 cursor-pointer group">
        <input type="radio" name="radio-html" value="secondary" class="hidden radio-input" id="rad-2" checked />
        <div class="w-5 h-5 rounded-full border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-all radio-box">
          <div class="w-1.5 h-1.5 rounded-full bg-white radio-dot"></div>
        </div>
        <span class="text-sm font-medium text-slate-800 dark:text-white">보조</span>
      </label>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const radios = document.querySelectorAll('.radio-input');
      radios.forEach(rad => {
        rad.addEventListener('change', () => {
          radios.forEach(r => {
            const box = r.nextElementSibling;
            const dot = box.querySelector('.radio-dot');
            if (r.checked) {
              box.classList.add('bg-indigo-500', 'border-indigo-500');
              box.classList.remove('border-slate-300', 'dark:border-slate-650');
              if (dot) dot.classList.remove('hidden');
            } else {
              box.classList.remove('bg-indigo-500', 'border-indigo-500');
              box.classList.add('border-slate-300', 'dark:border-slate-650');
              if (dot) dot.classList.add('hidden');
            }
          });
        });
      });
    });
  </script>
</body>
</html>`
  },
  toggleSwitch: {
    react: `import React, { useState } from 'react';

function ToggleSwitchInput() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex gap-8 items-center">
        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle1(!toggle1)}>
          <div className={\`relative w-11 h-6 rounded-full transition-colors \${toggle1 ? 'bg-indigo-500' : 'bg-slate-200'}\`}>
            <div className={\`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 \${toggle1 ? 'left-[calc(100%-1.25rem)]' : 'left-1'}\`}></div>
          </div>
          <span className="text-sm font-medium">기본</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle2(!toggle2)}>
          <div className={\`relative w-11 h-6 rounded-full transition-colors \${toggle2 ? 'bg-indigo-500' : 'bg-slate-200'}\`}>
            <div className={\`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 \${toggle2 ? 'translate-x-6' : 'translate-x-1'}\`}></div>
          </div>
          <span className="text-sm font-medium">선택됨</span>
        </label>
      </div>
    </div>
  );
}`,
    html: `<div class="space-y-4">
  <div class="flex gap-8 items-center">
    <label class="flex items-center gap-3 cursor-pointer group toggle-label" id="t-lbl-1">
      <div class="relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-650 transition-colors toggle-bg">
        <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-slate-650">기본</span>
    </label>

    <label class="flex items-center gap-3 cursor-pointer group toggle-label active" id="t-lbl-2">
      <div class="relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg">
        <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle"></div>
      </div>
      <span class="text-sm font-medium text-slate-600 dark:text-slate-400">선택됨</span>
    </label>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-label');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const bg = t.querySelector('.toggle-bg');
      const circle = t.querySelector('.toggle-circle');
      const isActive = t.classList.contains('active');
      if (isActive) {
        t.classList.remove('active');
        bg.classList.remove('bg-indigo-500');
        bg.classList.add('bg-slate-200', 'dark:bg-slate-650');
        circle.classList.remove('translate-x-6');
        circle.classList.add('translate-x-0');
      } else {
        t.classList.add('active');
        bg.classList.add('bg-indigo-500');
        bg.classList.remove('bg-slate-200', 'dark:bg-slate-650');
        circle.classList.remove('translate-x-0');
        circle.classList.add('translate-x-6');
      }
    });
  });
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>토글 스위치 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="space-y-4">
      <div class="flex gap-8 items-center">
        <label class="flex items-center gap-3 cursor-pointer group toggle-label" id="t-lbl-1">
          <div class="relative w-11 h-6 rounded-full bg-slate-200 dark:bg-slate-650 transition-colors toggle-bg">
            <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-slate-650">기본</span>
        </label>

        <label class="flex items-center gap-3 cursor-pointer group toggle-label active" id="t-lbl-2">
          <div class="relative w-11 h-6 rounded-full bg-indigo-500 transition-colors toggle-bg">
            <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 translate-x-6 toggle-circle"></div>
          </div>
          <span class="text-sm font-medium text-slate-600 dark:text-slate-400">선택됨</span>
        </label>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const toggles = document.querySelectorAll('.toggle-label');
      toggles.forEach(t => {
        t.addEventListener('click', () => {
          const bg = t.querySelector('.toggle-bg');
          const circle = t.querySelector('.toggle-circle');
          const isActive = t.classList.contains('active');
          if (isActive) {
            t.classList.remove('active');
            bg.classList.remove('bg-indigo-500');
            bg.classList.add('bg-slate-200', 'dark:bg-slate-650');
            circle.classList.remove('translate-x-6');
            circle.style.left = '4px';
          } else {
            t.classList.add('active');
            bg.classList.add('bg-indigo-50');
            bg.classList.remove('bg-slate-200', 'dark:bg-slate-650');
            circle.style.left = '24px';
          }
        });
      });
    });
  </script>
</body>
</html>`
  },
  dropzone: {
    react: `import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

function DropzoneInput() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dropzoneRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  return (
    <div 
      className={\`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all \${dragActive ? 'border-indigo-500 bg-indigo-50/50' : 'border-indigo-100 hover:border-indigo-300'}\`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onClick={() => dropzoneRef.current?.click()}
    >
      <input ref={dropzoneRef} type="file" className="hidden" multiple />
      <Upload className="w-6 h-6 text-indigo-500" />
      <p className="text-sm text-slate-500 mt-2">여기로 파일을 드래그 앤 드롭하거나 클릭하여 업로드</p>
    </div>
  );
}`,
    html: `<div class="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500" id="dropzone-html">
  <input type="file" class="hidden" id="drop-file-input" multiple />
  <div class="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
    <i data-lucide="upload" class="w-6 h-6 text-indigo-500"></i>
  </div>
  <div>
    <p class="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
  </div>
</div>`,
    css: `/* 기본 스타일 제공 */`,
    js: `document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone-html');
  const fileInput = document.getElementById('drop-file-input');
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('border-indigo-500', 'bg-indigo-50/50');
    });
    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('border-indigo-500', 'bg-indigo-50/50');
    });
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('border-indigo-500', 'bg-indigo-50/50');
      if (e.dataTransfer.files.length) {
        alert(e.dataTransfer.files.length + '개 파일 드롭 완료');
      }
    });
  }
});`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>드롭존 미리보기</title>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] p-6 flex justify-center items-center min-h-[300px]">
  <div class="w-full max-w-md bg-white dark:bg-[#1A222C] p-6 rounded-xl border border-slate-100 dark:border-slate-800">
    <div class="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500" id="dropzone-html">
      <input type="file" class="hidden" id="drop-file-input" multiple />
      <div class="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
        <i data-lucide="upload" class="w-6 h-6 text-indigo-500"></i>
      </div>
      <div>
        <p class="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const dropzone = document.getElementById('dropzone-html');
      const fileInput = document.getElementById('drop-file-input');
      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('border-indigo-500', 'bg-indigo-50/50');
        });
        dropzone.addEventListener('dragleave', () => {
          dropzone.classList.remove('border-indigo-500', 'bg-indigo-50/50');
        });
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-indigo-500', 'bg-indigo-50/50');
          if (e.dataTransfer.files.length) {
            alert(e.dataTransfer.files.length + '개 파일 드롭 완료');
          }
        });
      }
    });
  </script>
</body>
</html>`
  }
};

const FormElements: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  // Multiple Select State
  const [multiSelectOpen, setMultiSelectOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['옵션 1', '옵션 3']);
  const availableOptions = ['옵션 1', '옵션 2', '옵션 3', '옵션 4'];

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  // Dropzone State
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const dropzoneRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("www.tailadmin.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Checkboxes & Radios State
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radioValue, setRadioValue] = useState('secondary');

  // Toggle Switches State
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(true);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            폼 요소
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>폼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">폼 요소</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
        
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Default Inputs */}
          <FormElementsWrapper
            title="기본 입력란"
            description="가장 널리 활용되는 텍스트 및 비밀번호 입력 필드 형태입니다."
            snippet={codeSnippets.defaultInputs}
          >
            <div className="space-y-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-355">입력란</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">플레이스홀더가 있는 입력란</label>
                <input type="text" placeholder="info@gmail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">비밀번호 입력란</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all" />
                  <Eye 
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer hover:text-indigo-500 transition-colors ${showPassword ? 'text-indigo-500' : 'text-slate-400'}`} 
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-50">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">날짜 선택 입력란</label>
                <CustomDatePicker placeholder="mm/dd/yyyy" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">시간 선택 입력란</label>
                <div className="relative">
                  <input type="time" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">결제 입력란</label>
                <div className="relative">
                  <input type="text" placeholder="카드 번호" className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
                </div>
              </div>
            </div>
          </FormElementsWrapper>

          {/* Select Inputs */}
          <FormElementsWrapper
            title="선택 입력란 (Select)"
            description="다양한 선택 옵션을 보여주거나 여러 옵션을 멀티 셀렉트 형태로 선택할 수 있습니다."
            snippet={codeSnippets.selectInputs}
          >
            <div className="space-y-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">선택 입력란</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                    <option>옵션 선택</option>
                    <option>옵션 1</option>
                    <option>옵션 2</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">다중 선택 옵션</label>
                <div className="relative">
                  <div 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-800 cursor-pointer min-h-[50px] transition-all relative z-10"
                    onClick={() => setMultiSelectOpen(!multiSelectOpen)}
                  >
                    {selectedOptions.length === 0 && <span className="text-slate-400">옵션을 선택하세요...</span>}
                    {selectedOptions.map(option => (
                      <span key={option} className="bg-slate-100 dark:bg-slate-700 text-slate-650 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1">
                        {option} 
                        <X 
                          className="w-3 h-3 hover:text-red-500 transition-colors" 
                          onClick={(e) => removeOption(e, option)}
                        />
                      </span>
                    ))}
                    <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform ${multiSelectOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Dropdown Menu */}
                  {multiSelectOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto custom-scrollbar">
                      {availableOptions.map(option => (
                        <div 
                          key={option}
                          onClick={() => toggleOption(option)}
                          className={`px-4 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center transition-colors ${selectedOptions.includes(option) ? 'bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-slate-600 dark:text-slate-400 dark:text-slate-300'}`}
                        >
                          <div className={`w-4 h-4 rounded-[0.25rem] border mr-3 flex items-center justify-center transition-colors ${selectedOptions.includes(option) ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                            {selectedOptions.includes(option) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FormElementsWrapper>

          {/* Textarea input field */}
          <FormElementsWrapper
            title="텍스트 영역 (Textarea)"
            description="긴 안내글이나 설명 입력을 지원하는 다크모드 대응 텍스트 영역입니다."
            snippet={codeSnippets.textarea}
          >
            <div className="space-y-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">설명</label>
                <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">설명 (비활성화)</label>
                <textarea placeholder="설명을 입력하세요..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500" disabled></textarea>
              </div>
            </div>
          </FormElementsWrapper>

        </div>

        {/* Right Column */}
        <div className="space-y-6">

          {/* Input Group */}
          <FormElementsWrapper
            title="입력 그룹"
            description="메일 및 URL 등 복사 기능이 통합된 복합 입력 필드 그룹입니다."
            snippet={codeSnippets.inputGroup}
          >
            <div className="space-y-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">이메일</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <input type="text" placeholder="info@gmail.com" className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">웹사이트</label>
                <div className="flex">
                  <input type="text" value="www.tailadmin.com" readOnly className="flex-1 px-4 py-3 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 outline-none text-slate-650 dark:text-slate-400 dark:text-slate-300" />
                  <button 
                    onClick={handleCopy}
                    className="px-4 py-3 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-indigo-500 dark:text-indigo-400 font-semibold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    {copied ? <span className="text-emerald-500 text-sm">복사됨!</span> : <><Copy className="w-4 h-4" /> 복사</>}
                  </button>
                </div>
              </div>
            </div>
          </FormElementsWrapper>

          {/* File Input */}
          <FormElementsWrapper
            title="파일 입력"
            description="버튼 디자인과 연결된 실시간 업로드 파일 표시 입력 필드입니다."
            snippet={codeSnippets.fileInput}
          >
            <div className="space-y-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">파일 업로드</label>
                <div className="relative">
                  <input type="file" className="hidden" id="file-upload" onChange={handleFileChange} />
                  <label htmlFor="file-upload" className="flex items-center w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all overflow-hidden whitespace-nowrap">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-655 px-3 py-1 rounded-md text-sm font-semibold mr-4 shrink-0">파일 선택</span>
                    <span className="text-slate-400 text-sm truncate">
                      {selectedFiles.length > 0 ? selectedFiles[0].name : "선택된 파일 없음"}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </FormElementsWrapper>

          {/* Checkboxes */}
          <FormElementsWrapper
            title="체크박스"
            description="다양한 상태를 가지는 다크모드 지원 맞춤형 체크박스 컴포넌트입니다."
            snippet={codeSnippets.checkboxes}
          >
            <div className="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden" checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} />
                <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${checkbox1 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}`}>
                  {checkbox1 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className={`text-sm font-medium ${checkbox1 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="hidden" checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} />
                <div className={`w-5 h-5 rounded-[0.25rem] border flex items-center justify-center transition-all ${checkbox2 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600'}`}>
                  {checkbox2 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className={`text-sm font-medium ${checkbox2 ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
              </label>
            </div>
          </FormElementsWrapper>

          {/* Radio Buttons */}
          <FormElementsWrapper
            title="라디오 버튼"
            description="상호 배타적인 두 가지 옵션을 나타내기 위한 라디오 버튼 인터페이스입니다."
            snippet={codeSnippets.radioButtons}
          >
            <div className="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl flex flex-wrap gap-8 items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" value="default" checked={radioValue === 'default'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${radioValue === 'default' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 group-hover:border-indigo-500 dark:border-slate-600'}`}>
                   {radioValue === 'default' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-sm font-medium ${radioValue === 'default' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="radio-test" value="secondary" checked={radioValue === 'secondary'} onChange={(e) => setRadioValue(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${radioValue === 'secondary' ? 'border-indigo-500 bg-indigo-500' : 'border-slate-300 group-hover:border-indigo-500 dark:border-slate-600'}`}>
                  {radioValue === 'secondary' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-sm font-medium ${radioValue === 'secondary' ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>보조</span>
              </label>
            </div>
          </FormElementsWrapper>

          {/* Toggle switch input */}
          <FormElementsWrapper
            title="토글 스위치 설정"
            description="상태 On/Off를 한 번의 클릭으로 신속하게 변경하는 토글 스위치 형태입니다."
            snippet={codeSnippets.toggleSwitch}
          >
            <div className="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl space-y-4 pt-2">
              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle1(!toggle1)}>
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${toggle1 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600 group-hover:bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${toggle1 ? 'left-[calc(100%-1.25rem)]' : 'left-1'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle2(!toggle2)}>
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${toggle2 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-600 group-hover:bg-slate-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${toggle2 ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle2 ? 'text-indigo-650 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
                </label>
              </div>

              <div className="flex gap-8 items-center">
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle3(!toggle3)}>
                  <div className={`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 ${toggle3 ? 'border-slate-800 dark:border-white' : 'border-slate-200 group-hover:border-slate-300'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${toggle3 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle3 ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>기본</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setToggle4(!toggle4)}>
                   <div className={`relative w-12 h-6 border-2 rounded-full transition-colors flex items-center px-1 ${toggle4 ? 'border-slate-800 dark:border-white' : 'border-slate-200 group-hover:border-slate-300'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${toggle4 ? 'bg-slate-800 dark:bg-white translate-x-6' : 'bg-slate-200 translate-x-0'}`}></div>
                  </div>
                  <span className={`text-sm font-medium ${toggle4 ? 'text-slate-800 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>선택됨</span>
                </label>
              </div>
            </div>
          </FormElementsWrapper>

          {/* Dropzone */}
          <FormElementsWrapper
            title="드롭존 (파일 끌어다 놓기)"
            description="컴퓨터 내부 파일을 브라우저 영역에 직접 끌어다 올리는 드롭존 형태입니다."
            snippet={codeSnippets.dropzone}
          >
            <div className="p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              <div 
                className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 cursor-pointer transition-all ${dragActive ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 scale-[1.02]' : 'border-indigo-100 dark:border-slate-700 bg-indigo-50/5 dark:bg-slate-800 hover:border-indigo-300'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => dropzoneRef.current?.click()}
              >
                <input 
                  ref={dropzoneRef}
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  multiple
                />
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-800`}>
                  <Upload className={`w-6 h-6 ${dragActive ? 'text-indigo-600 animate-bounce' : 'text-indigo-500'}`} />
                </div>
                
                {selectedFiles.length > 0 ? (
                  <div className="space-y-2 w-full max-w-sm">
                    <p className="text-lg font-bold text-indigo-600">{selectedFiles.length}개 파일 선택됨</p>
                    <ul className="text-sm text-slate-500 max-h-24 overflow-y-auto custom-scrollbar text-left bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                      {selectedFiles.map((file, i) => (
                        <li key={i} className="truncate">• {file.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">여기로 파일을 드래그 앤 드롭하세요</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">PNG, JPG, WEBP, SVG 이미지를 지원합니다</p>
                  </div>
                )}
              </div>
            </div>
          </FormElementsWrapper>

        </div>

      </div>
    </div>
  );
};

export default FormElements;
