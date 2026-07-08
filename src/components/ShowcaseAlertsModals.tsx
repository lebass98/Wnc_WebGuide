import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  X,
  Plus,
  Maximize2,
  Settings,
  Trash2,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Copy,
  Check
} from 'lucide-react';
import { codeSnippets } from './AlertsModalsSnippets';
import type { CodeSnippet } from './AlertsModalsSnippets';

interface AlertsModalsWrapperProps {
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
}

const AlertsModalsWrapper: React.FC<AlertsModalsWrapperProps> = ({ title, description, snippet, children }) => {
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
      if (body) {
        // 1. Calculate height based on regular document layout flow
        let contentHeight = body.scrollHeight;

        const firstChild = body.firstElementChild as HTMLElement;
        if (firstChild) {
          const rectHeight = firstChild.getBoundingClientRect().height;
          contentHeight = Math.max(contentHeight, Math.ceil(rectHeight));
        }

        // 2. Adjust height if modals/drawers are open (since they are fixed/absolute and out of normal flow)
        const openModals = iframe.contentDocument.querySelectorAll('[id^="modal-"]:not(.hidden)');
        if (openModals.length > 0) {
          let maxModalHeight = 450; // minimum comfortable viewport size for open modals
          openModals.forEach(modal => {
            const contentBox = modal.querySelector('.relative, .w-screen');
            if (contentBox) {
              const modalRect = contentBox.getBoundingClientRect();
              maxModalHeight = Math.max(maxModalHeight, modalRect.height + 80);
            }
          });
          contentHeight = Math.max(contentHeight, maxModalHeight);
        }

        // 3. Adjust height if toast floating alerts are currently showing
        const toastContainer = iframe.contentDocument.getElementById('toast-container');
        if (toastContainer && toastContainer.children.length > 0) {
          const toastsRect = toastContainer.getBoundingClientRect();
          contentHeight = Math.max(contentHeight, toastsRect.bottom + 24);
        }

        // Add safety padding to prevent scrollbar flicker
        const finalHeight = Math.max(contentHeight + 12, 80);
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
        // Observe mutations (modals toggled via classes, toasts added/removed via children list)
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

interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

const ShowcaseAlertsModals: React.FC = () => {
  // Toasts State
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastId, setToastId] = useState(0);

  // Modals State
  const [activeModal, setActiveModal] = useState<'none' | 'confirm' | 'form' | 'drawer'>('none');
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Toast Trigger
  const showToast = (type: 'success' | 'error' | 'info' | 'warning', title: string, message: string) => {
    const newToast: Toast = { id: toastId, type, title, message };
    setToasts(prev => [...prev, newToast]);
    setToastId(prev => prev + 1);

    // Auto dismiss after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6 pb-20 relative">
      {/* Toast Container (Fixed) */}
      <div className="fixed top-24 right-4 sm:right-8 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 transform translate-y-0 animate-slide-in ${toast.type === 'success' ? 'border-emerald-100 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-300' :
                toast.type === 'error' ? 'border-rose-100 dark:border-rose-900/30 text-rose-800 dark:text-rose-300' :
                  toast.type === 'warning' ? 'border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-300' :
                    'border-sky-100 dark:border-sky-900/30 text-sky-800 dark:text-sky-300'
              }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
            {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold leading-tight">{toast.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            알림 & 모달
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">알림 & 모달</span>
          </div>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Section 1: Toasts Trigger */}
        <AlertsModalsWrapper
          title="토스트 알림 시뮬레이터"
          description="클릭하면 우측 상단에 실시간으로 플로팅 토스트 카드가 3초간 노출됩니다."
          snippet={codeSnippets.toasts}
        >
          <div className="grid grid-cols-2 gap-3 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
            <button
              onClick={() => showToast('success', '작업 완료', '정상적으로 데이터가 저장되었습니다.')}
              className="flex items-center justify-center gap-2 p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <CheckCircle className="w-4 h-4" />
              성공 토스트
            </button>
            <button
              onClick={() => showToast('error', '오류 발생', '서버 접속이 원활하지 않습니다. 다시 시도해 주세요.')}
              className="flex items-center justify-center gap-2 p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <XCircle className="w-4 h-4" />
              실패 토스트
            </button>
            <button
              onClick={() => showToast('warning', '권한 제한', '수정 권한이 없는 계정입니다.')}
              className="flex items-center justify-center gap-2 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4" />
              경고 토스트
            </button>
            <button
              onClick={() => showToast('info', '안내 사항', '신규 템플릿 안내 페이지가 업데이트되었습니다.')}
              className="flex items-center justify-center gap-2 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Info className="w-4 h-4" />
              정보 토스트
            </button>
          </div>
        </AlertsModalsWrapper>

        {/* Section 2: Modals Trigger */}
        <AlertsModalsWrapper
          title="모달 & 슬라이드 오버"
          description="배경 흐림(Backdrop Blur) 효과와 부드러운 오버레이가 가미된 팝업 예시입니다."
          snippet={codeSnippets.modals}
        >
          <div className="flex flex-wrap gap-3 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
            <button
              onClick={() => setActiveModal('confirm')}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              경고/삭제 모달
            </button>
            <button
              onClick={() => setActiveModal('form')}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 dark:shadow-none cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              정보 입력 모달
            </button>
            <button
              onClick={() => setActiveModal('drawer')}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              우측 슬라이드 오버
            </button>
          </div>
        </AlertsModalsWrapper>

        {/* Section 3: Alerts Inline Banner */}
        <div className="xl:col-span-2">
          <AlertsModalsWrapper
            title="인라인 알림 배너 (Alerts)"
            description="상황별로 사용자 정보 영역이나 피드백 섹션에 고정하여 메시지를 강조하는 컴포넌트입니다."
            snippet={codeSnippets.alerts}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
              {/* Success Alert */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 dark:border-emerald-950 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">결제 처리 완료</p>
                  <p className="text-xs text-slate-500 dark:text-emerald-500/80 mt-1 leading-normal">
                    구독 플랜 변경 결제가 정상적으로 처리되었습니다. 이번 결제 영수증은 가입하신 이메일로 전송되었습니다.
                  </p>
                </div>
              </div>

              {/* Error Alert */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-rose-100 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-400">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">서버 동기화 에러</p>
                  <p className="text-xs text-slate-500 dark:text-rose-500/80 mt-1 leading-normal">
                    데이터베이스 동기화 중 타임아웃 오류가 발생했습니다. 재로드 버튼을 클릭하시거나 네트워크 상태를 점검해 보세요.
                  </p>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">라이선스 만료 주의</p>
                  <p className="text-xs text-slate-500 dark:text-amber-500/80 mt-1 leading-normal">
                    현재 사용 중인 템플릿의 기간이 만료되기까지 3일 남았습니다. 지속적인 혜택 유지를 위해 갱신을 부탁드립니다.
                  </p>
                </div>
              </div>

              {/* Info Alert */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/50 dark:bg-sky-950/20 text-sky-800 dark:text-sky-400">
                <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold">정기 서비스 점검 안내</p>
                  <p className="text-xs text-slate-500 dark:text-sky-500/80 mt-1 leading-normal">
                    내일 오전 02:00 ~ 04:00 사이에 서버 업그레이드 및 정기 점검이 실시될 예정입니다. 작업 시간 중 접속이 제한될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </AlertsModalsWrapper>
        </div>

      </div>

      {/* --- Actual Modal Overlays --- */}

      {/* 1. Confirm / Warning Modal */}
      {activeModal === 'confirm' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          {/* Content */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 space-y-6 animate-zoom-in">
            <div className="flex items-center gap-4 text-rose-500">
              <div className="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-full">
                <Trash2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">프로젝트 영구 삭제</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">삭제 작업은 절대 되돌릴 수 없습니다.</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              정말로 현재 프로젝트 'DashBoard_01'의 전체 리소스를 서버에서 영구히 삭제하시겠습니까? 데이터 베이스와 연결된 모든 테이블과 미디어가 제거됩니다.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setActiveModal('none')}
                className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
              >
                취소
              </button>
              <button
                onClick={() => {
                  showToast('error', '삭제 처리', '프로젝트가 휴지통으로 이동되었습니다.');
                  setActiveModal('none');
                }}
                className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition-all cursor-pointer"
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Input Form Modal */}
      {activeModal === 'form' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden animate-zoom-in">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">새 구성원 추가</h4>
              <button onClick={() => setActiveModal('none')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast('success', '등록 성공', `${formData.name}님이 팀원으로 성공적으로 추가되었습니다.`);
                setActiveModal('none');
                setFormData({ name: '', email: '' });
              }}
              className="p-6 space-y-4"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">이름</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm font-semibold"
                  placeholder="예: 홍길동"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">이메일</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all text-sm font-semibold"
                  placeholder="name@example.com"
                />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModal('none')}
                  className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-sm font-bold transition-all cursor-pointer"
                >
                  구성원 등록
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Slide-over / Drawer */}
      {activeModal === 'drawer' && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="absolute max-w-sm inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-h-full bg-white dark:bg-slate-800 shadow-xl border-l border-slate-100 dark:border-slate-700 flex flex-col h-full animate-slide-left">

              <div className="px-6 py-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-indigo-500" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">환경 설정 세부판넬</h4>
                </div>
                <button onClick={() => setActiveModal('none')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                <div className="space-y-4">
                  <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">글로벌 시스템 제어</h5>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700/50 rounded-xl">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">실시간 알림 받기</p>
                      <p className="text-xs text-slate-400 mt-1">서버 이벤트 발생 시 푸시 토스트를 띄웁니다.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">이메일 알림 옵션</h5>
                  <div className="space-y-3">
                    {['주간 리포트 이메일 발송', '주문 발생 시 즉시 발송', '서비스 공지 메일 수신'].map((label, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={`email-opt-${idx}`}
                          defaultChecked={idx !== 2}
                          className="w-4.5 h-4.5 accent-indigo-500 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`email-opt-${idx}`} className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">{label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 flex gap-3">
                <button
                  onClick={() => setActiveModal('none')}
                  className="flex-1 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer"
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    showToast('info', '설정 완료', '설정 파일이 시스템에 영구 보관되었습니다.');
                    setActiveModal('none');
                  }}
                  className="flex-1 py-3 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-sm font-bold transition-all cursor-pointer"
                >
                  저장하기
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShowcaseAlertsModals;
