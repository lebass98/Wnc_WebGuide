import React, { useState } from 'react';
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
  Copy,
  FileCode
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
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyFullSource = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setFullCopied(true);
      setTimeout(() => setFullCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-4 bg-transparent">
      {/* Title & Description Column */}
      <div className="flex flex-col gap-1 p-0">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-snug">
          {title}
        </h3>
        <p className="text-[13px] text-slate-500 dark:text-slate-400 max-w-xl">
          {description}
        </p>
      </div>

      {/* Toolbar Controls - Placed underneath the title, taking w-full container space */}
      <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#1A222C] p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm w-full">
          {/* 1. Preview / Code Switcher */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              미리보기
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              코드보기
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* 2. Device simulation switcher (only for preview) */}
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
                  REACT
                </button>
                <button
                  onClick={() => setCodeMode('html')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${codeMode === 'html' ? 'bg-[#4B62FA] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  HTML/CSS
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 5. Copy Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyCode}
              className={`p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-750'}`}
              title={copied ? "복사 완료!" : "코드 복사"}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>

            {codeMode === 'html' && activeTab === 'code' && (
              <button
                onClick={handleCopyFullSource}
                className={`p-2 rounded-xl transition-all cursor-pointer ${fullCopied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 dark:bg-slate-800 dark:hover:bg-slate-750'}`}
                title={fullCopied ? "전체 소스 복사됨!" : "전체 소스 복사 (바로 실행용)"}
              >
                {fullCopied ? <Check className="w-4 h-4" /> : <FileCode className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

      {/* Frame Container */}
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto w-full' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto w-full' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          /* Live Preview Container with Simulated local Light/Dark class */
          <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-slate-50 dark:bg-[#0F172A] p-0 transition-colors duration-300 min-h-[300px] flex flex-col justify-center">
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

/* --- 1. Basic Form Preview Component --- */
const BasicFormPreview: React.FC = () => {
  return (
    <div className="w-full p-4 sm:p-6 transition-colors duration-300">
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
    <div className="w-full p-4 sm:p-6 transition-colors duration-300">
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
            <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
    <div className="w-full p-4 sm:p-6 transition-colors duration-300">
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
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 확인" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
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
    <div className="w-full p-4 sm:p-6 transition-colors duration-300">
      <div className="space-y-6 sm:space-y-8 text-left">
        
        {/* Personal Info section */}
        <div className="space-y-4 sm:space-y-6">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">개인 정보</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
              <input type="text" placeholder="이름 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성</label>
              <input type="text" placeholder="성 입력" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" />
            </div>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">성별</label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
              <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
            <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all text-xs sm:text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/도</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all text-xs sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">우편번호</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
                <span className={`text-xs sm:text-sm font-bold ${membership === 'free' ? 'text-slate-800 dark:text-white' : 'text-slate-505 text-slate-500'}`}>무료</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="membership" value="paid" checked={membership === 'paid'} onChange={(e) => setMembership(e.target.value)} className="hidden" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${membership === 'paid' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-500 dark:border-slate-600 dark:group-hover:border-blue-500'}`}>
                  {membership === 'paid' && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>
                <span className={`text-xs sm:text-sm font-bold ${membership === 'paid' ? 'text-slate-800 dark:text-white' : 'text-slate-505 text-slate-500'}`}>유료</span>
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
    <div className="w-full bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 p-4 sm:p-6 transition-colors duration-300">
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
      html: `<!-- 기본 폼 HTML -->
<div class="form-container">
  <div class="grid-2">
    <input type="text" placeholder="이름" class="form-input" />
    <input type="email" placeholder="이메일 주소" class="form-input" />
  </div>
  <input type="password" placeholder="비밀번호" class="form-input" />
  <input type="password" placeholder="비밀번호 확인" class="form-input" />
  <button type="button" class="btn-submit">제출</button>
</div>`,
      css: `.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.form-input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  outline: none;
  box-sizing: border-box;
}
.form-input:focus {
  border-color: #4f46e5;
}
.btn-submit {
  background: #4a6bff;
  color: #fff;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
@media (min-width: 640px) {
  .form-container { padding: 24px; }
  .grid-2 { grid-template-columns: 1fr 1fr; }
  .form-input { padding: 12px 16px; }
}`,
      js: `// 인터랙션 스크립트 없음`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .form-container { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
    .form-input { width: 100%; padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
    .btn-submit { background: #4a6bff; color: #fff; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    @media (min-width: 640px) {
      .grid-2 { grid-template-columns: 1fr 1fr; }
      .form-container { padding: 24px; }
    }
  </style>
</head>
<body>
  <div class="form-container">
    <div class="grid-2">
      <input type="text" placeholder="이름" class="form-input">
      <input type="email" placeholder="이메일 주소" class="form-input">
    </div>
    <input type="password" placeholder="비밀번호" class="form-input">
    <input type="password" placeholder="비밀번호 확인" class="form-input">
    <button type="button" class="btn-submit">제출</button>
  </div>
</body>
</html>`
    },
    form2: {
      react: `import React from 'react';
import { Send, ChevronDown } from 'lucide-react';

const MessageForm = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 p-4 sm:p-6 transition-colors duration-300">
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
            <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
      html: `<!-- 예제 폼 HTML -->
<div class="message-form">
  <div class="grid-2">
    <div class="input-group">
      <label>이름</label>
      <input type="text" placeholder="이름 입력" class="form-input" />
    </div>
    <div class="input-group">
      <label>성</label>
      <input type="text" placeholder="성 입력" class="form-input" />
    </div>
  </div>
  <div class="input-group">
    <label>이메일</label>
    <input type="email" placeholder="이메일 주소 입력" class="form-input" />
  </div>
  <div class="input-group">
    <label>주제 선택</label>
    <div class="select-wrapper">
      <select class="form-select">
        <option>옵션 1</option>
        <option>옵션 2</option>
        <option>옵션 3</option>
      </select>
    </div>
  </div>
  <div class="input-group">
    <label>메시지</label>
    <textarea rows="4" placeholder="메시지 입력" class="form-textarea"></textarea>
  </div>
  <button type="button" class="btn-send">메시지 전송</button>
</div>`,
      css: `.message-form {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input-group label {
  font-size: 12px;
  font-weight: 750;
  color: #475569;
}
.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}
.form-textarea { resize: none; }
.select-wrapper { position: relative; }
.btn-send {
  background: #4a6bff;
  color: #fff;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
@media (min-width: 640px) {
  .message-form { padding: 24px; }
  .grid-2 { grid-template-columns: 1fr 1fr; }
  .form-input, .form-select, .form-textarea { padding: 12px 16px; }
}`,
      js: `// 인터랙션 스크립트 없음`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .message-form { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; max-width: 550px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; text-align: left; }
    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
    .input-group { display: flex; flex-direction: column; gap: 6px; }
    .input-group label { font-size: 11px; font-weight: bold; color: #475569; }
    .form-input, .form-select, .form-textarea { width: 100%; padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
    .form-textarea { resize: none; }
    .btn-send { background: #4a6bff; color: #fff; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    @media (min-width: 640px) {
      .grid-2 { grid-template-columns: 1fr 1fr; }
      .message-form { padding: 24px; }
    }
  </style>
</head>
<body>
  <div class="message-form">
    <div class="grid-2">
      <div class="input-group">
        <label>이름</label>
        <input type="text" placeholder="이름 입력" class="form-input">
      </div>
      <div class="input-group">
        <label>성</label>
        <input type="text" placeholder="성 입력" class="form-input">
      </div>
    </div>
    <div class="input-group">
      <label>이메일</label>
      <input type="email" placeholder="이메일 주소 입력" class="form-input">
    </div>
    <button type="button" class="btn-send">메시지 전송</button>
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
    <div className="w-full bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 p-4 sm:p-6 transition-colors duration-300">
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
            <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
          />
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-slate-200 dark:border-slate-700 pr-3 my-1">
            <Lock className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-550 transition-colors" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 확인" 
            className="w-full pl-14 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-550 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm" 
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
      html: `<!-- 아이콘이 포함된 폼 HTML -->
<div class="icon-form">
  <div class="input-wrapper">
    <div class="icon-box">👤</div>
    <input type="text" placeholder="사용자 이름" class="form-input-icon" />
  </div>
  <div class="input-wrapper">
    <div class="icon-box">✉️</div>
    <input type="email" placeholder="이메일 주소" class="form-input-icon" />
  </div>
  <div class="input-wrapper">
    <div class="icon-box">🔒</div>
    <input type="password" placeholder="비밀번호" class="form-input-icon" />
  </div>
  <div class="flex-row">
    <label class="checkbox-container">
      <input type="checkbox" id="keep-login" />
      <span>로그인 유지</span>
    </label>
    <button type="button" class="btn-create">계정 생성</button>
  </div>
</div>`,
      css: `.icon-form {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.icon-box {
  position: absolute;
  left: 14px;
  font-size: 14px;
  pointer-events: none;
  border-right: 1px solid #cbd5e1;
  padding-right: 10px;
}
.form-input-icon {
  width: 100%;
  padding: 10px 16px 10px 52px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  outline: none;
  box-sizing: border-box;
}
.flex-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
}
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
}
.btn-create {
  background: #4a6bff;
  color: #fff;
  font-weight: bold;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
@media (min-width: 640px) {
  .icon-form { padding: 24px; }
  .form-input-icon { padding: 12px 16px 12px 52px; }
  .flex-row { flex-direction: row; align-items: center; }
}`,
      js: `// 로컬 체크박스 상태 바인딩 제어 예시 (Vanilla JS)`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .icon-form { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
    .input-wrapper { position: relative; display: flex; align-items: center; }
    .icon-box { position: absolute; left: 14px; pointer-events: none; border-right: 1px solid #cbd5e1; padding-right: 10px; }
    .form-input-icon { width: 105; padding: 10px 16px 10px 52px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
    .flex-row { display: flex; flex-direction: column; gap: 12px; justify-content: space-between; }
    .checkbox-container { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: bold; color: #475569; }
    .btn-create { background: #4a6bff; color: #fff; padding: 10px 24px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    @media (min-width: 640px) {
      .icon-form { padding: 24px; }
      .flex-row { flex-direction: row; align-items: center; }
    }
  </style>
</head>
<body>
  <div class="icon-form">
    <div class="input-wrapper">
      <span class="icon-box">👤</span>
      <input type="text" placeholder="사용자 이름" class="form-input-icon">
    </div>
    <div class="input-wrapper">
      <span class="icon-box">🔒</span>
      <input type="password" placeholder="비밀번호" class="form-input-icon">
    </div>
    <div class="flex-row">
      <label class="checkbox-container">
        <input type="checkbox"> 로그인 유지
      </label>
      <button class="btn-create">계정 생성</button>
    </div>
  </div>
</body>
</html>`
    },
    form4: {
      react: `import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PersonalInfoForm = () => {
  const [membership, setMembership] = useState('free');

  return (
    <div className="w-full bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 p-4 sm:p-6 transition-colors duration-300">
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
        </div>

        {/* Address section */}
        <div className="space-y-4 sm:space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-[15px]">주소</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">시/구/군</label>
              <input type="text" className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none transition-all text-xs sm:text-sm" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">국가</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm">
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfoForm;`,
      html: `<!-- 상세 개인정보 & 주소 폼 HTML -->
<div class="detailed-form">
  <h4>개인 정보</h4>
  <div class="grid-2">
    <div class="input-group">
      <label>이름</label>
      <input type="text" placeholder="이름 입력" class="form-input" />
    </div>
    <div class="input-group">
      <label>성</label>
      <input type="text" placeholder="성 입력" class="form-input" />
    </div>
  </div>
  
  <h4 class="section-title">주소</h4>
  <div class="grid-2">
    <div class="input-group">
      <label>시/구/군</label>
      <input type="text" class="form-input" />
    </div>
    <div class="input-group">
      <label>국가</label>
      <select class="form-select">
        <option>대한민국</option>
        <option>미국</option>
      </select>
    </div>
  </div>

  <div class="membership-group">
    <span>멤버십:</span>
    <label><input type="radio" name="membership" checked /> 무료</label>
    <label><input type="radio" name="membership" /> 유료</label>
  </div>

  <button class="btn-save">변경사항 저장</button>
</div>`,
      css: `.detailed-form {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.input-group { display: flex; flex-direction: column; gap: 8px; }
.input-group label { font-size: 12px; font-weight: 750; color: #475569; }
.form-input, .form-select {
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  outline: none;
  box-sizing: border-box;
}
.section-title {
  margin-top: 16px;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
}
.membership-group {
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 14px;
}
.btn-save {
  background: #4a6bff;
  color: #fff;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: fit-content;
}
@media (min-width: 640px) {
  .detailed-form { padding: 24px; }
  .grid-2 { grid-template-columns: 1fr 1fr; }
}`,
      js: `// 라디오 버튼 선택 바인딩 예시`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .detailed-form { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; text-align: left; }
    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
    .input-group { display: flex; flex-direction: column; gap: 6px; }
    .input-group label { font-size: 11px; font-weight: bold; color: #475569; }
    .form-input, .form-select { width: 100%; padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
    .btn-save { background: #4a6bff; color: #fff; padding: 12px 24px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; width: fit-content; }
    @media (min-width: 640px) {
      .grid-2 { grid-template-columns: 1fr 1fr; }
      .detailed-form { padding: 24px; }
    }
  </style>
</head>
<body>
  <div class="detailed-form">
    <h2>개인 정보</h2>
    <div class="grid-2">
      <div class="input-group">
        <label>이름</label>
        <input type="text" placeholder="이름 입력" class="form-input">
      </div>
      <div class="input-group">
        <label>성</label>
        <input type="text" placeholder="성 입력" class="form-input">
      </div>
    </div>
    <button class="btn-save">변경사항 저장</button>
  </div>
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
