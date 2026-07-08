export interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

export const codeSnippets: Record<string, CodeSnippet> = {
  toasts: {
    react: `import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

const ToastSimulator = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastId, setToastId] = useState(0);

  const showToast = (type: 'success' | 'error' | 'info' | 'warning', title: string, message: string) => {
    const newToast = { id: toastId, type, title, message };
    setToasts(prev => [...prev, newToast]);
    setToastId(prev => prev + 1);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 3000);
  };

  return (
    <div className="p-6 space-y-6 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
      {/* Toast Floating Container */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 transform translate-y-0 animate-slide-in border-slate-100 dark:border-slate-700"
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
            {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{toast.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">{toast.message}</p>
            </div>
            <button
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => showToast('success', '작업 완료', '정상적으로 데이터가 저장되었습니다.')}
          className="flex items-center justify-center gap-2 p-3 bg-emerald-555 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all cursor-pointer"
        >
          <CheckCircle className="w-4 h-4" /> 성공 토스트
        </button>
        <button
          onClick={() => showToast('error', '오류 발생', '서버 접속이 원활하지 않습니다. 다시 시도해 주세요.')}
          className="flex items-center justify-center gap-2 p-3 bg-rose-500 text-white rounded-xl text-xs font-bold hover:bg-rose-600 transition-all cursor-pointer"
        >
          <XCircle className="w-4 h-4" /> 실패 토스트
        </button>
        <button
          onClick={() => showToast('warning', '권한 제한', '수정 권한이 없는 계정입니다.')}
          className="flex items-center justify-center gap-2 p-3 bg-amber-500 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition-all cursor-pointer"
        >
          <AlertTriangle className="w-4 h-4" /> 경고 토스트
        </button>
        <button
          onClick={() => showToast('info', '안내 사항', '신규 템플릿 안내 페이지가 업데이트되었습니다.')}
          className="flex items-center justify-center gap-2 p-3 bg-sky-500 text-white rounded-xl text-xs font-bold hover:bg-sky-600 transition-all cursor-pointer"
        >
          <Info className="w-4 h-4" /> 정보 토스트
        </button>
      </div>
    </div>
  );
};`,
    html: `<!-- HTML 마크업 (Tailwind CSS 기반) -->
<div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl relative min-h-[160px]">
  <div class="grid grid-cols-2 gap-3">
    <button onclick="triggerToast('success', '작업 완료', '정상적으로 데이터가 저장되었습니다.')" class="flex items-center justify-center gap-2 p-3 bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="check-circle" class="w-4 h-4"></i> 성공 토스트
    </button>
    <button onclick="triggerToast('error', '오류 발생', '서버 접속이 원활하지 않습니다. 다시 시도해 주세요.')" class="flex items-center justify-center gap-2 p-3 bg-rose-500 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="x-circle" class="w-4 h-4"></i> 실패 토스트
    </button>
    <button onclick="triggerToast('warning', '권한 제한', '수정 권한이 없는 계정입니다.')" class="flex items-center justify-center gap-2 p-3 bg-amber-500 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="alert-triangle" class="w-4 h-4"></i> 경고 토스트
    </button>
    <button onclick="triggerToast('info', '안내 사항', '신규 템플릿 안내 페이지가 업데이트되었습니다.')" class="flex items-center justify-center gap-2 p-3 bg-sky-500 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="info" class="w-4 h-4"></i> 정보 토스트
    </button>
  </div>

  <!-- Toast Floating Container -->
  <div id="toast-container" class="fixed top-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none"></div>
</div>`,
    css: `/* 토스트 애니메이션 스타일 */
@keyframes slideIn {
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.animate-slide-in {
  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-out {
  animation: fadeOut 0.2s ease-out forwards;
}`,
    js: `// 토스트 알림 작동 스크립트
function triggerToast(type, title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 border-slate-100 dark:border-slate-700 animate-slide-in';
  
  let iconHtml = '';
  if (type === 'success') iconHtml = '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"></i>';
  else if (type === 'error') iconHtml = '<i data-lucide="x-circle" class="w-5 h-5 text-rose-500 shrink-0 mt-0.5"></i>';
  else if (type === 'warning') iconHtml = '<i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500 shrink-0 mt-0.5"></i>';
  else iconHtml = '<i data-lucide="info" class="w-5 h-5 text-sky-500 shrink-0 mt-0.5"></i>';

  toast.innerHTML = \`
    \${iconHtml}
    <div class="flex-1 min-w-0 text-left">
      <p class="text-sm font-bold text-slate-800 dark:text-white leading-tight">\${title}</p>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">\${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 shrink-0">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  \`;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  // 3초 후 자동 제거
  setTimeout(() => {
    toast.classList.add('animate-fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>토스트 알림 실시간 미리보기</title>
  <style>
    @keyframes slideIn {
      from { transform: translateY(-1rem); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { transform: opacity 0.2s ease-out forwards; }
    }
    .animate-slide-in { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .animate-fade-out { animation: fadeOut 0.2s ease-out forwards; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center">
  <div class="w-full max-w-full mx-auto">
    <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative min-h-[160px]">
      <div class="grid grid-cols-2 gap-3">
        <button onclick="triggerToast('success', '작업 완료', '정상적으로 데이터가 저장되었습니다.')" class="flex items-center justify-center gap-2 p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all">
          <i data-lucide="check-circle" class="w-4 h-4"></i> 성공 토스트
        </button>
        <button onclick="triggerToast('error', '오류 발생', '서버 접속이 원활하지 않습니다. 다시 시도해 주세요.')" class="flex items-center justify-center gap-2 p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all">
          <i data-lucide="x-circle" class="w-4 h-4"></i> 실패 토스트
        </button>
        <button onclick="triggerToast('warning', '권한 제한', '수정 권한이 없는 계정입니다.')" class="flex items-center justify-center gap-2 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all">
          <i data-lucide="alert-triangle" class="w-4 h-4"></i> 경고 토스트
        </button>
        <button onclick="triggerToast('info', '안내 사항', '신규 템플릿 안내 페이지가 업데이트되었습니다.')" class="flex items-center justify-center gap-2 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-all">
          <i data-lucide="info" class="w-4 h-4"></i> 정보 토스트
        </button>
      </div>

      <!-- Toast Floating Container -->
      <div id="toast-container" class="fixed top-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none"></div>
    </div>
  </div>

  <script>
    function triggerToast(type, title, message) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-lg transition-all duration-300 animate-slide-in';
      
      let iconHtml = '';
      if (type === 'success') iconHtml = '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"></i>';
      else if (type === 'error') iconHtml = '<i data-lucide="x-circle" class="w-5 h-5 text-rose-500 shrink-0 mt-0.5"></i>';
      else if (type === 'warning') iconHtml = '<i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500 shrink-0 mt-0.5"></i>';
      else iconHtml = '<i data-lucide="info" class="w-5 h-5 text-sky-500 shrink-0 mt-0.5"></i>';

      toast.innerHTML = \`
        \${iconHtml}
        <div class="flex-1 min-w-0 text-left">
          <p class="text-sm font-bold text-slate-800 dark:text-white leading-tight">\${title}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">\${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 shrink-0">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      \`;

      container.appendChild(toast);
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        toast.classList.add('animate-fade-out');
        toast.addEventListener('animationend', () => toast.remove());
      }, 3000);
    }
    // Initialize icons
    if (window.lucide) window.lucide.createIcons();
  </script>
</body>
</html>`
  },
  modals: {
    react: `import React, { useState } from 'react';
import { Trash2, Plus, Settings, X } from 'lucide-react';

const ModalShowcase = () => {
  const [activeModal, setActiveModal] = useState<'none' | 'confirm' | 'form' | 'drawer'>('none');
  const [formData, setFormData] = useState({ name: '', email: '' });

  return (
    <div className="p-6 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl relative">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveModal('confirm')}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <Trash2 className="w-4 h-4" /> 경고/삭제 모달
        </button>
        <button
          onClick={() => setActiveModal('form')}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> 정보 입력 모달
        </button>
        <button
          onClick={() => setActiveModal('drawer')}
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <Settings className="w-4 h-4" /> 우측 슬라이드 오버
        </button>
      </div>

      {/* 1. Confirm Modal */}
      {activeModal === 'confirm' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 space-y-6 w-full max-w-md">
            <div className="flex items-center gap-4 text-rose-500">
              <div className="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-full">
                <Trash2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">프로젝트 영구 삭제</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">삭제 작업은 되돌릴 수 없습니다.</p>
              </div>
            </div>
            <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
              정말로 삭제하시겠습니까? 데이터 베이스와 연결된 모든 테이블과 미디어가 제거됩니다.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setActiveModal('none')} className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-750 dark:text-slate-300 hover:bg-slate-50">
                취소
              </button>
              <button onClick={() => setActiveModal('none')} className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold">
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Form Modal */}
      {activeModal === 'form' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">새 구성원 추가</h4>
              <button onClick={() => setActiveModal('none')} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">이름</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="예: 홍길동" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">이메일</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="name@example.com" />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button onClick={() => setActiveModal('none')} className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold">
                  취소
                </button>
                <button onClick={() => setActiveModal('none')} className="px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">
                  구성원 등록
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Drawer */}
      {activeModal === 'drawer' && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal('none')} />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white dark:bg-slate-800 shadow-xl border-l border-slate-100 dark:border-slate-700 flex flex-col h-full">
              <div className="px-6 py-6 border-b flex items-center justify-between">
                <h4 className="text-lg font-bold">환경 설정</h4>
                <button onClick={() => setActiveModal('none')}><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <p className="text-sm text-slate-500">이곳에 대시보드 옵션을 설정하는 다양한 폼과 버튼 배치가 들어갑니다.</p>
              </div>
              <div className="p-6 border-t flex gap-3">
                <button onClick={() => setActiveModal('none')} className="flex-1 py-3 border rounded-xl text-sm font-bold">취소</button>
                <button onClick={() => setActiveModal('none')} className="flex-1 py-3 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">저장하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};`,
    html: `<!-- HTML 마크업 (Tailwind CSS 기반) -->
<div class="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl flex gap-3">
  <button onclick="openModal('confirm')" class="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-xl text-xs font-bold transition-all">
    <i data-lucide="trash-2" class="w-4 h-4"></i> 경고/삭제 모달
  </button>
  <button onclick="openModal('form')" class="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold transition-all">
    <i data-lucide="plus" class="w-4 h-4"></i> 정보 입력 모달
  </button>
  <button onclick="openModal('drawer')" class="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all">
    <i data-lucide="settings" class="w-4 h-4"></i> 우측 슬라이드 오버
  </button>
</div>

<!-- 1. Confirm Modal -->
<div id="modal-confirm" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('confirm')"></div>
  <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 space-y-6 w-full max-w-md z-10 animate-zoom-in">
    <div class="flex items-center gap-4 text-rose-500">
      <div class="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-full">
        <i data-lucide="trash-2" class="w-8 h-8"></i>
      </div>
      <div>
        <h4 class="text-lg font-bold text-slate-900 dark:text-white">프로젝트 영구 삭제</h4>
      </div>
    </div>
    <p class="text-sm text-slate-600 dark:text-slate-350">정말로 삭제하시겠습니까? 데이터 베이스와 연결된 모든 테이블과 미디어가 제거됩니다.</p>
    <div class="flex gap-3 justify-end">
      <button onclick="closeModal('confirm')" class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold">취소</button>
      <button onclick="closeModal('confirm')" class="px-5 py-2.5 bg-rose-500 text-white rounded-xl text-sm font-bold">삭제하기</button>
    </div>
  </div>
</div>

<!-- 2. Form Modal -->
<div id="modal-form" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('form')"></div>
  <div class="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-10">
    <div class="p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
      <h4 class="text-lg font-bold text-slate-900 dark:text-white">새 구성원 추가</h4>
      <button onclick="closeModal('form')" class="text-slate-400 hover:text-slate-655"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div class="p-6 space-y-4">
      <div class="space-y-2 text-left">
        <label class="text-xs font-bold text-slate-755">이름</label>
        <input type="text" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-855" placeholder="예: 홍길동" />
      </div>
      <div class="space-y-2 text-left">
        <label class="text-xs font-bold text-slate-755">이메일</label>
        <input type="email" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-855" placeholder="name@example.com" />
      </div>
      <div class="flex gap-3 justify-end pt-4">
        <button onclick="closeModal('form')" class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold">취소</button>
        <button onclick="closeModal('form')" class="px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">구성원 등록</button>
      </div>
    </div>
  </div>
</div>

<!-- 3. Drawer -->
<div id="modal-drawer" class="hidden fixed inset-0 z-50 overflow-hidden">
  <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('drawer')"></div>
  <div class="absolute inset-y-0 right-0 max-w-full flex pl-10 z-10">
    <div class="w-screen max-w-md bg-white dark:bg-slate-800 shadow-xl border-l border-slate-100 dark:border-slate-700 flex flex-col h-full">
      <div class="px-6 py-6 border-b flex items-center justify-between">
        <h4 class="text-lg font-bold text-slate-800 dark:text-white">환경 설정</h4>
        <button onclick="closeModal('drawer')"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <p class="text-sm text-slate-500">대시보드 환경을 설정하는 예시 영역입니다.</p>
      </div>
      <div class="p-6 border-t flex gap-3">
        <button onclick="closeModal('drawer')" class="flex-1 py-3 border rounded-xl text-sm font-bold">취소</button>
        <button onclick="closeModal('drawer')" class="flex-1 py-3 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">저장하기</button>
      </div>
    </div>
  </div>
</div>`,
    css: `/* 모달 트랜지션 애니메이션 */
@keyframes zoomIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-zoom-in {
  animation: zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}`,
    js: `// 모달 여닫기 제어 스크립트
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) modal.classList.remove('hidden');
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) modal.classList.add('hidden');
}`,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>모달 & 슬라이드 오버 실시간 미리보기</title>
  <style>
    @keyframes zoomIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-zoom-in { animation: zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center">
  <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-3 max-w-full w-full">
    <button onclick="openModal('confirm')" class="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all">
      <i data-lucide="trash-2" class="w-4 h-4"></i> 경고/삭제 모달
    </button>
    <button onclick="openModal('form')" class="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="plus" class="w-4 h-4"></i> 정보 입력 모달
    </button>
    <button onclick="openModal('drawer')" class="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all">
      <i data-lucide="settings" class="w-4 h-4"></i> 우측 슬라이드 오버
    </button>
  </div>

  <!-- 1. Confirm Modal -->
  <div id="modal-confirm" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('confirm')"></div>
    <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-6 space-y-6 w-full max-w-md z-10 animate-zoom-in">
      <div class="flex items-center gap-4 text-rose-500">
        <div class="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-full">
          <i data-lucide="trash-2" class="w-8 h-8"></i>
        </div>
        <div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white">프로젝트 영구 삭제</h4>
        </div>
      </div>
      <p class="text-sm text-slate-600 dark:text-slate-350">정말로 삭제하시겠습니까? 데이터 베이스와 연결된 모든 테이블과 미디어가 제거됩니다.</p>
      <div class="flex gap-3 justify-end">
        <button onclick="closeModal('confirm')" class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold">취소</button>
        <button onclick="closeModal('confirm')" class="px-5 py-2.5 bg-rose-500 text-white rounded-xl text-sm font-bold">삭제하기</button>
      </div>
    </div>
  </div>

  <!-- 2. Form Modal -->
  <div id="modal-form" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('form')"></div>
    <div class="relative w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-10">
      <div class="p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
        <h4 class="text-lg font-bold text-slate-900 dark:text-white">새 구성원 추가</h4>
        <button onclick="closeModal('form')" class="text-slate-400 hover:text-slate-655"><i data-lucide="x" class="w-5 h-5"></i></button>
      </div>
      <div class="p-6 space-y-4">
        <div class="space-y-2 text-left">
          <label class="text-xs font-bold text-slate-700">이름</label>
          <input type="text" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="예: 홍길동" />
        </div>
        <div class="space-y-2 text-left">
          <label class="text-xs font-bold text-slate-700">이메일</label>
          <input type="email" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800" placeholder="name@example.com" />
        </div>
        <div class="flex gap-3 justify-end pt-4">
          <button onclick="closeModal('form')" class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold">취소</button>
          <button onclick="closeModal('form')" class="px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">구성원 등록</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. Drawer -->
  <div id="modal-drawer" class="hidden fixed inset-0 z-50 overflow-hidden">
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeModal('drawer')"></div>
    <div class="absolute inset-y-0 right-0 max-w-full flex pl-10 z-10">
      <div class="w-screen max-w-md bg-white dark:bg-slate-800 shadow-xl border-l border-slate-100 dark:border-slate-700 flex flex-col h-full">
        <div class="px-6 py-6 border-b flex items-center justify-between">
          <h4 class="text-lg font-bold text-slate-800 dark:text-white">환경 설정</h4>
          <button onclick="closeModal('drawer')"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <p class="text-sm text-slate-500">대시보드 환경을 설정하는 예시 영역입니다.</p>
        </div>
        <div class="p-6 border-t flex gap-3">
          <button onclick="closeModal('drawer')" class="flex-1 py-3 border rounded-xl text-sm font-bold">취소</button>
          <button onclick="closeModal('drawer')" class="flex-1 py-3 bg-[#4B62FA] text-white rounded-xl text-sm font-bold">저장하기</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    function openModal(id) {
      const modal = document.getElementById('modal-' + id);
      if (modal) modal.classList.remove('hidden');
    }
    function closeModal(id) {
      const modal = document.getElementById('modal-' + id);
      if (modal) modal.classList.add('hidden');
    }
    // Initialize icons
    if (window.lucide) window.lucide.createIcons();
  </script>
</body>
</html>`
  },
  alerts: {
    react: `import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

const AlertBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-[#F8FAFC] dark:bg-slate-900 rounded-xl">
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
          <p className="text-xs text-slate-500 dark:text-amber-550/80 mt-1 leading-normal">
            현재 사용 중인 템플릿의 기간이 만료되기까지 3일 남았습니다. 지속적인 혜택 유지를 위해 갱신을 부탁드립니다.
          </p>
        </div>
      </div>

      {/* Info Alert */}
      <div className="flex items-start gap-3 p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/50 dark:bg-sky-950/20 text-sky-800 dark:text-sky-400">
        <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold">정기 서비스 점검 안내</p>
          <p className="text-xs text-slate-500 dark:text-sky-555 mt-1 leading-normal">
            내일 오전 02:00 ~ 04:00 사이에 서버 업그레이드 및 정기 점검이 실시될 예정입니다. 작업 시간 중 접속이 제한될 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};`,
    html: `<!-- HTML 마크업 (Tailwind CSS 기반) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <!-- Success Alert -->
  <div class="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800">
    <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"></i>
    <div>
      <p class="text-sm font-bold">결제 처리 완료</p>
      <p class="text-xs text-slate-500 mt-1 leading-normal">구독 플랜 변경 결제가 정상적으로 처리되었습니다. 이번 결제 영수증은 가입하신 이메일로 전송되었습니다.</p>
    </div>
  </div>

  <!-- Error Alert -->
  <div class="flex items-start gap-3 p-4 rounded-xl border border-rose-100 bg-rose-50 text-rose-800">
    <i data-lucide="x-circle" class="w-5 h-5 text-rose-500 shrink-0 mt-0.5"></i>
    <div>
      <p class="text-sm font-bold">서버 동기화 에러</p>
      <p class="text-xs text-slate-500 mt-1 leading-normal">데이터베이스 동기화 중 타임아웃 오류가 발생했습니다. 재로드 버튼을 클릭하시거나 네트워크 상태를 점검해 보세요.</p>
    </div>
  </div>

  <!-- Warning Alert -->
  <div class="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50 text-amber-800">
    <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500 shrink-0 mt-0.5"></i>
    <div>
      <p class="text-sm font-bold">라이선스 만료 주의</p>
      <p class="text-xs text-slate-500 mt-1 leading-normal">현재 사용 중인 템플릿의 기간이 만료되기까지 3일 남았습니다. 지속적인 혜택 유지를 위해 갱신을 부탁드립니다.</p>
    </div>
  </div>

  <!-- Info Alert -->
  <div class="flex items-start gap-3 p-4 rounded-xl border border-sky-100 bg-sky-50 text-sky-800">
    <i data-lucide="info" class="w-5 h-5 text-sky-500 shrink-0 mt-0.5"></i>
    <div>
      <p class="text-sm font-bold">정기 서비스 점검 안내</p>
      <p class="text-xs text-slate-500 mt-1 leading-normal">내일 오전 02:00 ~ 04:00 사이에 서버 업그레이드 및 정기 점검이 실시될 예정입니다. 작업 시간 중 접속이 제한될 수 있습니다.</p>
    </div>
  </div>
</div>`,
    css: ``,
    js: ``,
    fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <title>인라인 알림 배너 실시간 미리보기</title>
</head>
<body class="bg-white dark:bg-[#0F172A] flex items-center justify-center min-h-screen p-6">
  <div class="w-full max-w-full mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Success Alert -->
      <div class="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 dark:border-emerald-950 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-400">
        <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"></i>
        <div class="text-left">
          <p class="text-sm font-bold">결제 처리 완료</p>
          <p class="text-xs text-slate-500 dark:text-emerald-555 mt-1 leading-normal">구독 플랜 변경 결제가 정상적으로 처리되었습니다. 이번 결제 영수증은 가입하신 이메일로 전송되었습니다.</p>
        </div>
      </div>

      <!-- Error Alert -->
      <div class="flex items-start gap-3 p-4 rounded-xl border border-rose-100 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-400">
        <i data-lucide="x-circle" class="w-5 h-5 text-rose-500 shrink-0 mt-0.5"></i>
        <div class="text-left">
          <p class="text-sm font-bold">서버 동기화 에러</p>
          <p class="text-xs text-slate-500 dark:text-rose-555 mt-1 leading-normal">데이터베이스 동기화 중 타임아웃 오류가 발생했습니다. 재로드 버튼을 클릭하시거나 네트워크 상태를 점검해 보세요.</p>
        </div>
      </div>

      <!-- Warning Alert -->
      <div class="flex items-start gap-3 p-4 rounded-xl border border-amber-100 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400">
        <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500 shrink-0 mt-0.5"></i>
        <div class="text-left">
          <p class="text-sm font-bold">라이선스 만료 주의</p>
          <p class="text-xs text-slate-500 dark:text-amber-555 mt-1 leading-normal">현재 사용 중인 템플릿의 기간이 만료되기까지 3일 남았습니다. 지속적인 혜택 유지를 위해 갱신을 부탁드립니다.</p>
        </div>
      </div>

      <!-- Info Alert -->
      <div class="flex items-start gap-3 p-4 rounded-xl border border-sky-100 dark:border-sky-950 bg-sky-50/50 dark:bg-sky-950/20 text-sky-800 dark:text-sky-400">
        <i data-lucide="info" class="w-5 h-5 text-sky-500 shrink-0 mt-0.5"></i>
        <div class="text-left">
          <p class="text-sm font-bold">정기 서비스 점검 안내</p>
          <p class="text-xs text-slate-500 dark:text-sky-555 mt-1 leading-normal">내일 오전 02:00 ~ 04:00 사이에 서버 업그레이드 및 정기 점검이 실시될 예정입니다. 작업 시간 중 접속이 제한될 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
  <script>
    if (window.lucide) window.lucide.createIcons();
  </script>
</body>
</html>`
  }
};
