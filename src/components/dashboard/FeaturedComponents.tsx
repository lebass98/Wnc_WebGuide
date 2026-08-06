import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Heart, Download, Monitor, Tablet, Smartphone, ArrowRightLeft, Info, HelpCircle, MousePointer, Edit3, MessageSquare, Table, FileText, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';
import type { ComponentItem } from '../../data/landingPageData';
import { useComponentStorage } from '../../hooks/useComponentStorage';
import ComponentCompareModal from './ComponentCompareModal';

const categories = [
  { id: 'all', label: '전체 (All 36)', icon: Layers, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'favorites', label: '❤️ 내 즐겨찾기', icon: Heart, color: 'text-rose-500' },
  { id: 'buttons', label: '버튼 & 뱃지 (6)', icon: MousePointer, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'forms', label: '폼 & 인풋 (6)', icon: Edit3, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'modals', label: '모달 & 알림 (6)', icon: MessageSquare, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'tables', label: '테이블 (6)', icon: Table, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'webzine', label: '웹진 스니펫 (6)', icon: FileText, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'charts', label: '차트 & 지표 (6)', icon: PieChart, color: 'text-indigo-600 dark:text-indigo-400' },
];

const categoryBadgeStyles: Record<string, string> = {
  buttons: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  forms: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  modals: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  tables: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  webzine: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  charts: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
};

const FeaturedComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [cardModes, setCardModes] = useState<Record<string, 'preview' | 'react' | 'html'>>({});
  
  // Responsive Viewport Resizer State: '100%' | '768px' | '375px'
  const [viewports, setViewports] = useState<Record<string, '100%' | '768px' | '375px'>>({});
  
  // A11y Info Tooltip Active State
  const [activeA11yId, setActiveA11yId] = useState<string | null>(null);

  // Compare Mode Selection State
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const { favorites, toggleFavorite, addRecentlyViewed } = useComponentStorage();
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'all'
    ? featuredComponents
    : selectedCategory === 'favorites'
    ? featuredComponents.filter(item => favorites.includes(item.id))
    : featuredComponents.filter(item => item.category === selectedCategory);

  const getMode = (id: string): 'preview' | 'react' | 'html' => cardModes[id] || 'preview';
  const setMode = (id: string, mode: 'preview' | 'react' | 'html') => setCardModes(prev => ({ ...prev, [id]: mode }));

  const getViewport = (id: string): '100%' | '768px' | '375px' => viewports[id] || '100%';
  const setViewport = (id: string, vp: '100%' | '768px' | '375px') => setViewports(prev => ({ ...prev, [id]: vp }));

  const handleCopy = (item: ComponentItem) => {
    addRecentlyViewed(item.id);
    const currentMode = getMode(item.id);
    const code = currentMode === 'html' ? item.htmlCode : item.reactCode;
    navigator.clipboard.writeText(code);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadFile = (item: ComponentItem) => {
    addRecentlyViewed(item.id);
    const currentMode = getMode(item.id);
    const isHtml = currentMode === 'html';
    const content = isHtml ? item.htmlCode : item.reactCode;
    const filename = `${item.id}.${isHtml ? 'html' : 'tsx'}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleCompareItem = (id: string) => {
    setSelectedForCompare(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id].slice(0, 3)
    );
  };

  const compareItemsList = featuredComponents.filter(i => selectedForCompare.includes(i.id));

  // Helper to render live component UI previews for ALL 36 actual project components
  const renderLivePreview = (itemId: string) => {
    switch (itemId) {
      // --- 1. Buttons & Badges Category (6 actual components) ---
      case 'ui-buttons-badges':
        return (
          <div className="flex items-center justify-center gap-2 h-full min-h-[130px] p-2">
            <button className="px-3.5 py-1.5 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md">샤인 버튼</button>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 font-bold text-[11px] rounded-full">실시간 정상</span>
          </div>
        );
      case 'ui-alerts-modals':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg text-xs w-full max-w-xs flex items-center justify-between">
              <span className="font-bold">시스템 알림</span>
              <span className="px-2 py-0.5 bg-indigo-600 rounded text-[10px]">확인</span>
            </div>
          </div>
        );
      case 'ui-data-display':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-2.5 p-2.5 bg-white dark:bg-slate-800 border rounded-xl w-full max-w-xs shadow-2xs">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" className="w-8 h-8 rounded-full border border-indigo-500" alt="Avatar" />
              <div><h5 className="text-xs font-bold">Data Display</h5><p className="text-[9px] text-slate-400">아바타 디스플레이</p></div>
            </div>
          </div>
        );
      case 'ui-progress-nav':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="space-y-1.5 w-full max-w-xs p-2 bg-white dark:bg-slate-800 rounded-xl border text-xs">
              <div className="flex justify-between font-bold"><span>진행률</span><span className="text-indigo-600">75%</span></div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        );
      case 'ui-states-loaders':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-2 p-3 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-200 text-xs font-bold text-indigo-600">
              <svg className="animate-spin w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
              <span>데이터 로딩 중...</span>
            </div>
          </div>
        );
      case 'input-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <input type="text" placeholder="입력 필드 예시..." className="w-full max-w-xs px-3 py-2 text-xs bg-white dark:bg-slate-800 border rounded-xl" defaultValue="유효성 검사 완료" />
          </div>
        );

      // --- 2. Forms Category (6 actual components) ---
      case 'form-elements':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl space-y-2 text-xs w-full max-w-xs">
              <label className="font-bold block">통합 폼 입력</label>
              <input type="text" value="Form Elements" readOnly className="w-full p-1.5 border rounded-lg bg-slate-50 dark:bg-slate-700 text-xs" />
            </div>
          </div>
        );
      case 'form-layout':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="grid grid-cols-2 gap-2 w-full max-w-xs p-2 bg-white dark:bg-slate-800 border rounded-xl text-xs">
              <input type="text" placeholder="성" readOnly defaultValue="홍" className="p-1.5 border rounded-lg text-xs" />
              <input type="text" placeholder="이름" readOnly defaultValue="길동" className="p-1.5 border rounded-lg text-xs" />
            </div>
          </div>
        );
      case 'input-custom-picker':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2.5 bg-white dark:bg-slate-800 border rounded-xl text-xs font-mono font-bold text-indigo-600 flex items-center gap-2">
              <span>📅 2026-08-06</span>
            </div>
          </div>
        );
      case 'login-page-form':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs w-full max-w-xs space-y-1">
              <h5 className="font-bold text-indigo-600">로그인 폼</h5>
              <input type="text" defaultValue="user@domain.com" readOnly className="w-full p-1 border rounded text-[11px]" />
            </div>
          </div>
        );
      case 'signup-page-form':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs w-full max-w-xs space-y-1">
              <h5 className="font-bold text-indigo-600">회원가입 폼</h5>
              <button className="w-full py-1 bg-indigo-600 text-white rounded text-[10px] font-bold">가입 승인</button>
            </div>
          </div>
        );
      case 'faq-accordion':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs w-full max-w-xs font-bold flex justify-between items-center">
              <span>FAQ 질문 답변</span>
              <span>▼</span>
            </div>
          </div>
        );

      // --- 3. Modals Category (6 actual components) ---
      case 'alert-modal-system':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-slate-900 text-white rounded-xl text-xs shadow-md w-full max-w-xs">
              <div className="flex justify-between font-bold text-indigo-400"><span>시스템 팝업</span><span>✕</span></div>
            </div>
          </div>
        );
      case 'integration-cards':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs w-full max-w-xs flex justify-between items-center">
              <span className="font-bold">Slack integration</span>
              <span className="px-2 py-0.5 bg-indigo-600 text-white text-[10px] rounded font-bold">연동</span>
            </div>
          </div>
        );
      case 'pricing-tier-cards':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-indigo-600 text-white rounded-xl text-xs text-center font-bold w-full max-w-xs">
              <h5>Pro Membership</h5>
              <p className="text-sm font-extrabold">$29 / mo</p>
            </div>
          </div>
        );
      case 'error-404-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="text-center font-bold text-indigo-600 text-sm">
              <span className="text-xl font-extrabold block">404</span>
              <span className="text-[11px] text-slate-500">Page Not Found</span>
            </div>
          </div>
        );
      case 'error-500-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="text-center font-bold text-rose-500 text-sm">
              <span className="text-xl font-extrabold block">500</span>
              <span className="text-[11px] text-slate-500">Server Exception</span>
            </div>
          </div>
        );
      case 'task-list-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2.5 bg-white dark:bg-slate-800 border rounded-xl text-xs w-full max-w-xs flex justify-between">
              <span className="font-bold">작업 리스트 #49</span>
              <span className="text-emerald-500 font-bold">완료</span>
            </div>
          </div>
        );

      // --- 4. Tables Category (6 actual components) ---
      case 'table-basic-data':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="w-full max-w-xs border rounded-xl overflow-hidden text-[11px]">
              <div className="bg-slate-100 dark:bg-slate-800 p-1.5 font-bold">기본 데이터 표</div>
              <div className="p-1.5 bg-white dark:bg-slate-900">홍길동 (승인)</div>
            </div>
          </div>
        );
      case 'table-ieum-editorial':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="w-full max-w-xs p-2.5 bg-indigo-50 dark:bg-slate-800 border border-indigo-200 rounded-xl text-xs font-serif">
              <span className="font-bold text-indigo-700 dark:text-indigo-300">이음 에디토리얼 이슈 표</span>
            </div>
          </div>
        );
      case 'table-arte-visual':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="w-full max-w-xs p-2.5 bg-white dark:bg-slate-800 border rounded-xl text-xs font-bold flex justify-between">
              <span>아르떼 미디어 표</span>
              <span className="text-indigo-600">2026.08</span>
            </div>
          </div>
        );
      case 'task-kanban-board':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="grid grid-cols-2 gap-1.5 w-full max-w-xs text-[10px]">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-bold">To Do</div>
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950 rounded-lg font-bold text-indigo-600">Done</div>
            </div>
          </div>
        );
      case 'calendar-page-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs text-center font-bold">
              <span>🗓️ 2026년 8월 스케줄러</span>
            </div>
          </div>
        );
      case 'hero-section-layouts':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-indigo-900 text-white rounded-xl text-center text-xs font-bold w-full max-w-xs">
              <span>히어로 랜딩 블록</span>
            </div>
          </div>
        );

      // --- 5. Webzine Snippets Category (6 actual components) ---
      case 'arte-image-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="w-full max-w-xs rounded-xl overflow-hidden border bg-white dark:bg-slate-800 p-1.5 flex gap-2 items-center">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" className="w-10 h-10 rounded object-cover" alt="Arte" />
              <span className="text-xs font-bold">Arte Visual Card</span>
            </div>
          </div>
        );
      case 'arte-video-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center w-full max-w-xs">
              <button className="w-8 h-8 bg-indigo-600 text-white rounded-full text-xs font-bold">▶</button>
            </div>
          </div>
        );
      case 'arte-text-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs max-w-xs leading-relaxed">
              <h5 className="font-bold text-indigo-600">아르떼 아티클 텍스트</h5>
            </div>
          </div>
        );
      case 'arte-profile-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 border rounded-xl w-full max-w-xs text-xs font-bold">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arte" className="w-8 h-8 rounded-full border border-indigo-500" alt="Profile" />
              <span>수석 에디터 서재</span>
            </div>
          </div>
        );
      case 'arte-box-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-indigo-900 text-white rounded-xl text-xs font-bold w-full max-w-xs">
              <span className="px-1.5 py-0.5 bg-amber-400 text-slate-900 text-[9px] rounded mr-1">Arte Pick</span>
              <span>특집 강조 박스</span>
            </div>
          </div>
        );
      case 'arte-notice-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-indigo-600 text-white rounded-xl text-xs font-bold flex justify-between items-center w-full max-w-xs">
              <span>📢 아르떼 정기구독</span>
              <span className="px-2 py-0.5 bg-white text-indigo-600 rounded text-[10px]">구독</span>
            </div>
          </div>
        );

      // --- 6. Charts & Metrics Category (6 actual components) ---
      case 'chart-line-charts':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-slate-900 text-white rounded-xl text-xs w-full max-w-xs flex justify-between items-center">
              <div><p className="text-[10px] text-slate-400">라인 트렌드</p><p className="font-bold text-indigo-400">+28.4%</p></div>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">▲ LIVE</span>
            </div>
          </div>
        );
      case 'arte-new-visual':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border rounded-xl text-xs font-bold text-indigo-600 w-full max-w-xs">
              <span>✨ New Release Issue #42</span>
            </div>
          </div>
        );
      case 'ieum-video-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="aspect-video bg-black rounded-xl flex items-center justify-center w-full max-w-xs text-white text-xs font-bold">
              <span>🎬 이음 미디어</span>
            </div>
          </div>
        );
      case 'ieum-image-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold w-full max-w-xs text-center">
              <span>📷 이음 포토 갤러리</span>
            </div>
          </div>
        );
      case 'ieum-text-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <blockquote className="p-2.5 border-l-4 border-indigo-600 bg-indigo-50 dark:bg-slate-800 italic text-xs w-full max-w-xs">
              "이음 에디토리얼 인용구"
            </blockquote>
          </div>
        );
      case 'arte-link-component':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2 bg-indigo-600 text-white rounded-xl text-xs font-bold">
              <span>🔗 아르떼 참고 링크 뱃지</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] text-xs text-slate-400 font-semibold">
            {itemId} Live Component
          </div>
        );
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Title & Compare Action Floating Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Actual Project UI Components</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            실제 사이트 페이지에서 사용되는 36개 주요 React 컴포넌트를 미리보고 바로 코드를 활용해보세요.
          </p>
        </div>

        {/* Compare Floating Button */}
        {selectedForCompare.length > 0 && (
          <div className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
            <span className="text-xs font-bold">{selectedForCompare.length}개 선택됨</span>
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="px-3 py-1 bg-white text-indigo-600 rounded-xl text-xs font-bold hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>나란히 비교하기</span>
            </button>
          </div>
        )}

        {/* Category Tabs with Icons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-[#1A222C] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${selectedCategory === cat.id ? 'text-white' : cat.color}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Components Grid with Site Signature Indigo Brand Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const currentMode = getMode(item.id);
          const currentVp = getViewport(item.id);
          const isCopied = copiedId === item.id;
          const isFav = favorites.includes(item.id);
          const isCompared = selectedForCompare.includes(item.id);
          const badgeClass = categoryBadgeStyles[item.category] || 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';

          return (
            <div
              key={item.id}
              className="group bg-white dark:bg-[#1A222C] rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Header & Controls */}
              <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <div className="min-w-0 flex items-center gap-2">
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-1 rounded-full transition-all cursor-pointer ${
                      isFav ? 'text-rose-500 bg-rose-500/10' : 'text-slate-400 hover:text-rose-500'
                    }`}
                    title={isFav ? '즐겨찾기 해제' : '즐겨찾기에 추가'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.2 text-[9px] font-bold uppercase rounded border ${badgeClass}`}>
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 text-[9px] font-extrabold bg-amber-400/20 text-amber-600 dark:text-amber-300 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card View Mode Selector & Compare Checkbox */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => toggleCompareItem(item.id)}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded border transition-all cursor-pointer ${
                      isCompared
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'text-slate-400 border-slate-200 dark:border-slate-700 hover:text-indigo-500'
                    }`}
                    title="컴포넌트 비교 선택"
                  >
                    {isCompared ? '✓ 비교선택' : '+ 비교'}
                  </button>

                  <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px]">
                    <button
                      onClick={() => setMode(item.id, 'preview')}
                      className={`px-2 py-0.5 rounded font-medium flex items-center gap-1 cursor-pointer transition-all ${
                        currentMode === 'preview' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>미리보기</span>
                    </button>
                    <button
                      onClick={() => setMode(item.id, 'react')}
                      className={`px-2 py-0.5 rounded font-medium cursor-pointer transition-all ${
                        currentMode === 'react' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      React
                    </button>
                    <button
                      onClick={() => setMode(item.id, 'html')}
                      className={`px-2 py-0.5 rounded font-medium cursor-pointer transition-all ${
                        currentMode === 'html' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      HTML
                    </button>
                  </div>
                </div>
              </div>

              {/* Viewport Resizer Bar (Only visible in Preview Mode) */}
              {currentMode === 'preview' && (
                <div className="px-4 py-1.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-mono flex items-center gap-1">
                    <Info className="w-3 h-3 text-indigo-500" /> Viewport: {currentVp}
                  </span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setViewport(item.id, '100%')} className={`p-1 rounded ${currentVp === '100%' ? 'text-indigo-600 font-bold bg-white dark:bg-slate-700' : ''}`} title="Desktop View"><Monitor className="w-3 h-3" /></button>
                    <button onClick={() => setViewport(item.id, '768px')} className={`p-1 rounded ${currentVp === '768px' ? 'text-indigo-600 font-bold bg-white dark:bg-slate-700' : ''}`} title="Tablet View"><Tablet className="w-3 h-3" /></button>
                    <button onClick={() => setViewport(item.id, '375px')} className={`p-1 rounded ${currentVp === '375px' ? 'text-indigo-600 font-bold bg-white dark:bg-slate-700' : ''}`} title="Mobile View"><Smartphone className="w-3 h-3" /></button>
                  </div>
                </div>
              )}

              {/* Card Body: Live Preview OR Code Box */}
              <div className="relative min-h-[140px] max-h-[150px] overflow-hidden flex items-center justify-center">
                {currentMode === 'preview' ? (
                  <div className="p-3 bg-slate-50/70 dark:bg-slate-900/50 h-full w-full flex items-center justify-center transition-all duration-300" style={{ maxWidth: currentVp }}>
                    {renderLivePreview(item.id)}
                  </div>
                ) : (
                  <div className="p-4 bg-slate-900 font-mono text-xs text-slate-200 h-full w-full overflow-y-auto scrollbar-thin">
                    <pre className="whitespace-pre-wrap leading-relaxed text-indigo-200/90">
                      {currentMode === 'react' ? item.reactCode : item.htmlCode}
                    </pre>
                  </div>
                )}
              </div>

              {/* A11y Accessibility Info Banner / Tooltip Toggle */}
              {activeA11yId === item.id && (
                <div className="p-3 bg-indigo-950 text-indigo-200 text-[11px] border-t border-indigo-800 space-y-1 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between font-bold text-indigo-300">
                    <span>♿ A11y 접근성 가이드</span>
                    <button onClick={() => setActiveA11yId(null)} className="text-slate-400 hover:text-white">✕</button>
                  </div>
                  <p>키보드 포커스(Tab/Enter) 및 명확한 ARIA 속성 라벨 지원 보장 스니펫입니다.</p>
                </div>
              )}

              {/* Card Footer Actions */}
              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveA11yId(activeA11yId === item.id ? null : item.id)}
                    className="p-1.5 text-slate-400 hover:text-indigo-500 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
                    title="접근성(A11y) 가이드 안내"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => navigate(item.route)}
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>실제 페이지 이동</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* File Download Button (.tsx / .html) */}
                  <button
                    onClick={() => handleDownloadFile(item)}
                    className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer shadow-2xs"
                    title="파일 다운로드 (.tsx / .html)"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleCopy(item)}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>복사 완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>코드 복사</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Component Compare Modal */}
      <ComponentCompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        items={compareItemsList}
        renderLivePreview={renderLivePreview}
      />
    </section>
  );
};

export default FeaturedComponents;
