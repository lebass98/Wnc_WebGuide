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
import { codeSnippets } from './FormElementsSnippets';

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
    <div className="space-y-4 font-sans mb-[40px]">
      {/* Wrapper Header: Controls Toolbar (세로 줄내림 레이아웃 적용) */}
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
              <div className="bg-white dark:bg-[#0F172A] transition-colors duration-300 w-full p-4">
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
