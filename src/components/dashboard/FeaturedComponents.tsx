import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Heart, Download, Monitor, Tablet, Smartphone, ArrowRightLeft, Info, HelpCircle, MousePointer, Edit3, MessageSquare, Table, PieChart, Sparkles, CheckCircle, Search, ChevronDown, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';
import type { ComponentItem } from '../../data/landingPageData';
import { useComponentStorage } from '../../hooks/useComponentStorage';
import ComponentCompareModal from './ComponentCompareModal';

const categories = [
  { id: 'all', label: '전체 (All 22)', icon: Layers, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'favorites', label: '❤️ 내 즐겨찾기', icon: Heart, color: 'text-rose-500' },
  { id: 'buttons', label: '버튼 & 뱃지 (7)', icon: MousePointer, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'forms', label: '폼 & 인풋 (5)', icon: Edit3, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'modals', label: '모달 & 페이지 (5)', icon: MessageSquare, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'tables', label: '테이블 & 업무 (3)', icon: Table, color: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'charts', label: '일정 & 차트 (2)', icon: PieChart, color: 'text-indigo-600 dark:text-indigo-400' },
];

const categoryBadgeStyles: Record<string, string> = {
  buttons: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  forms: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  modals: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  tables: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  charts: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
};

const FeaturedComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [cardModes, setCardModes] = useState<Record<string, 'preview' | 'react' | 'html'>>({});
  const [viewports, setViewports] = useState<Record<string, '100%' | '768px' | '375px'>>({});
  const [activeA11yId, setActiveA11yId] = useState<string | null>(null);
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

  // Helper to render EXACT 1 REPRESENTATIVE ITEM per 100% actual page route!
  const renderLivePreview = (itemId: string) => {
    switch (itemId) {
      // --- 1. Buttons & Badges (실제 라우트 페이지 6개) ---
      case 'ui-buttons-badges':
        return (
          <div className="flex items-center gap-2.5">
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-indigo-500/25 transition-all flex items-center gap-1.5 cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>샤인 시그니처 버튼</span>
            </button>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold text-[11px] rounded-full">
              LIVE 정상
            </span>
          </div>
        );

      case 'ui-boxes':
        return (
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-950/40 dark:to-slate-800 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-between w-full max-w-xs shadow-2xs">
            <div className="space-y-0.5">
              <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-tight">impact for growth</h5>
              <p className="text-[10px] text-amber-800 dark:text-amber-300 font-semibold">성장의 토대</p>
            </div>
            <div className="px-2 py-1 rounded-full bg-white dark:bg-slate-700 text-[10px] font-bold text-slate-700 dark:text-slate-200 shadow-2xs">
              배너 박스
            </div>
          </div>
        );

      case 'ui-alerts-modals':
        return (
          <div className="p-3.5 bg-slate-900 text-white rounded-2xl shadow-lg border border-slate-800 flex items-center justify-between gap-4 w-full max-w-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold">성공적으로 반영되었습니다</span>
            </div>
            <button className="px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-lg hover:bg-indigo-500">확인</button>
          </div>
        );

      case 'ui-data-display':
        return (
          <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs w-full max-w-xs">
            <div className="relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" className="w-9 h-9 rounded-full border-2 border-indigo-500" alt="Avatar" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900 dark:text-white">김서연 에디터</h5>
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">Senior UI Specialist</p>
            </div>
          </div>
        );

      case 'ui-progress-nav':
        return (
          <div className="space-y-1.5 w-full max-w-xs p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300">프로젝트 진행률</span>
              <span className="text-indigo-600 dark:text-indigo-400">78%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-500 h-full rounded-full transition-all duration-500" style={{ width: '78%' }} />
            </div>
          </div>
        );

      case 'ui-states-loaders':
        return (
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-indigo-50/80 dark:bg-indigo-950/50 rounded-2xl border border-indigo-200 dark:border-indigo-800/60 text-xs font-bold text-indigo-600 dark:text-indigo-300">
            <svg className="animate-spin w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            <span>실시간 데이터 로딩 중...</span>
          </div>
        );

      case 'input-component':
        return (
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              readOnly
              defaultValue="검색어 입력 스니펫..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium focus:outline-none text-slate-800 dark:text-slate-200"
            />
          </div>
        );

      // --- 2. Forms (실제 라우트 페이지 5개) ---
      case 'form-elements':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs space-y-2">
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">이메일 수신 동의</label>
            <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <span className="text-[11px] text-slate-600 dark:text-slate-400">마케팅 알림 받기</span>
              <div className="w-8 h-4 bg-indigo-600 rounded-full p-0.5 flex justify-end">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        );

      case 'form-layout':
        return (
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs p-3 bg-white dark:bg-slate-800 border rounded-2xl">
            <div>
              <label className="text-[10px] font-bold text-slate-500 block mb-1">성 (Last)</label>
              <input type="text" defaultValue="홍" readOnly className="w-full p-1.5 text-xs border rounded-lg bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 block mb-1">이름 (First)</label>
              <input type="text" defaultValue="길동" readOnly className="w-full p-1.5 text-xs border rounded-lg bg-slate-50 dark:bg-slate-900" />
            </div>
          </div>
        );

      case 'login-page-form':
        return (
          <div className="p-3.5 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">로그인</span>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <input type="email" defaultValue="user@domain.com" readOnly className="w-full p-1.5 text-[11px] border rounded-lg bg-slate-50 dark:bg-slate-900" />
            <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold">인증하기</button>
          </div>
        );

      case 'signup-page-form':
        return (
          <div className="p-3.5 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs space-y-2">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">회원가입 약관</span>
            <div className="flex items-center gap-2 text-[11px]">
              <input type="checkbox" checked readOnly className="accent-indigo-600" />
              <span>서비스 이용약관 동의 (필수)</span>
            </div>
          </div>
        );

      case 'faq-accordion':
        return (
          <div className="p-3 bg-slate-50 dark:bg-slate-800 border rounded-2xl w-full max-w-xs space-y-1">
            <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
              <span>Q. 컴포넌트는 자유롭게 사용 가능한가요?</span>
              <ChevronDown className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">네, 1초 복사 버튼으로 어디서든 즉시 가져가 사용 가능합니다.</p>
          </div>
        );

      // --- 3. Modals & Pages (실제 라우트 페이지 5개) ---
      case 'integration-cards':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-500/10 text-indigo-600 font-extrabold rounded-lg flex items-center justify-center text-xs">S</div>
              <span className="text-xs font-bold">Slack 연동 모듈</span>
            </div>
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 font-bold text-[10px] rounded-full">연동됨</span>
          </div>
        );

      case 'pricing-tier-cards':
        return (
          <div className="p-3.5 bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-2xl w-full max-w-xs text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Pro Membership</span>
            <div className="text-lg font-extrabold my-0.5">$29 <span className="text-[10px] font-normal text-indigo-200">/ 월</span></div>
          </div>
        );

      case 'hero-section-layouts':
        return (
          <div className="p-4 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl text-center w-full max-w-xs">
            <h4 className="text-xs font-extrabold">모던 히어로 레이아웃</h4>
          </div>
        );

      case 'error-404-component':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs text-center space-y-1">
            <span className="text-xl font-extrabold text-indigo-600">404</span>
            <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">요청하신 페이지를 찾을 수 없습니다</p>
          </div>
        );

      case 'error-500-component':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs text-center space-y-1">
            <span className="text-xl font-extrabold text-rose-500">500</span>
            <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">내부 시스템 오류가 발생했습니다</p>
          </div>
        );

      // --- 4. Tables & Tasks (실제 라우트 페이지 3개) ---
      case 'table-basic-data':
        return (
          <div className="w-full max-w-xs border rounded-2xl overflow-hidden text-xs">
            <div className="bg-slate-100 dark:bg-slate-800 p-2 font-bold flex justify-between">
              <span>사용자명</span>
              <span>상태</span>
            </div>
            <div className="p-2 bg-white dark:bg-slate-900 flex justify-between items-center border-t border-slate-100 dark:border-slate-800">
              <span className="font-medium">홍길동 (Admin)</span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 font-bold text-[10px] rounded">승인됨</span>
            </div>
          </div>
        );

      case 'task-list-component':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl w-full max-w-xs flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">대시보드 UI 개편 완료</span>
            <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-600 font-bold text-[10px] rounded">완료</span>
          </div>
        );

      case 'task-kanban-board':
        return (
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-xs">
            <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-slate-700 dark:text-slate-300">
              <span>To Do (2)</span>
            </div>
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl font-bold text-indigo-600 dark:text-indigo-300">
              <span>Done (5) ✓</span>
            </div>
          </div>
        );

      // --- 5. Calendar & Charts (실제 라우트 페이지 2개) ---
      case 'calendar-page-component':
        return (
          <div className="p-3 bg-white dark:bg-slate-800 border rounded-2xl text-center w-full max-w-xs">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">📅 2026년 8월 6일 (목) 일정</span>
          </div>
        );

      case 'chart-line-charts':
        return (
          <div className="p-3.5 bg-slate-900 text-white rounded-2xl flex justify-between items-center text-xs">
            <div>
              <p className="text-[10px] text-slate-400 font-medium">주간 주가 지수</p>
              <p className="text-sm font-bold text-indigo-400 mt-0.5">+28.4% ▲</p>
            </div>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold rounded-lg">LIVE</span>
          </div>
        );

      default:
        return (
          <div className="p-3 bg-slate-100 rounded-xl text-xs font-bold">
            {itemId} 실존 대표 요소
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
            <span>100% Real Dedicated Page Routes Only</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            사이드바 및 라우터에 100% 존재하여 이동 가능한 실존 전용 페이지 컴포넌트 21종 모음입니다.
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

      {/* Components Grid with 100% Real Page Route Component Rendering */}
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

              {/* Card Body: ACTUAL REAL PAGE COMPONENT RENDER OR CODE BOX */}
              <div className="relative min-h-[140px] max-h-[140px] overflow-hidden flex items-center justify-center">
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
