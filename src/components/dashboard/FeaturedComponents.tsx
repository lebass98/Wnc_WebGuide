import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Sparkles, Heart, Download, Monitor, Tablet, Smartphone, ArrowRightLeft, Info, HelpCircle, Zap, Bell, CheckCircle2, AlertTriangle, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';
import type { ComponentItem } from '../../data/landingPageData';
import { useComponentStorage } from '../../hooks/useComponentStorage';
import ComponentCompareModal from './ComponentCompareModal';

const categories = [
  { id: 'all', label: '전체 (All 36)' },
  { id: 'favorites', label: '❤️ 내 즐겨찾기' },
  { id: 'buttons', label: '버튼 & 뱃지 (6)' },
  { id: 'forms', label: '폼 & 인풋 (6)' },
  { id: 'modals', label: '모달 & 알림 (6)' },
  { id: 'tables', label: '테이블 (6)' },
  { id: 'webzine', label: '웹진 스니펫 (6)' },
  { id: 'charts', label: '차트 & 지표 (6)' },
];

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

  // Feature: Single Component File Download (.tsx or .html)
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

  // Compare Toggle
  const toggleCompareItem = (id: string) => {
    setSelectedForCompare(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id].slice(0, 3)
    );
  };

  const compareItemsList = featuredComponents.filter(i => selectedForCompare.includes(i.id));

  // Helper to render live component UI previews for ALL 36 items explicitly
  const renderLivePreview = (itemId: string) => {
    switch (itemId) {
      // --- 1. Buttons & Badges (6) ---
      case 'btn-gradient':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-indigo-500 text-white shadow-md transition-all cursor-pointer">
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>샤인 버튼</span>
              </span>
            </button>
          </div>
        );
      case 'btn-glow':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>네온 글로우 버튼</span>
            </button>
          </div>
        );
      case 'btn-icon-group':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <div className="inline-flex rounded-xl shadow-2xs" role="group">
              <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-l-xl hover:bg-slate-50 dark:hover:bg-slate-700">Left</button>
              <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-t border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">Mid</button>
              <button className="px-3 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-r-xl hover:bg-slate-50 dark:hover:bg-slate-700">Right</button>
            </div>
          </div>
        );
      case 'badge-status':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>실시간 서버 정상</span>
            </span>
          </div>
        );
      case 'btn-loading':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <button disabled className="px-4 py-2 bg-indigo-600/80 text-white font-medium text-xs rounded-xl flex items-center gap-2 cursor-not-allowed opacity-90">
              <svg className="animate-spin w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg>
              <span>처리 중...</span>
            </button>
          </div>
        );
      case 'badge-gradient':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <span className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-600 dark:text-violet-300 border border-violet-500/30 rounded-xl text-xs font-extrabold shadow-2xs">
              Premium Pro
            </span>
          </div>
        );

      // --- 2. Forms & Inputs (6) ---
      case 'input-floating':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-4">
            <div className="relative w-full max-w-xs">
              <input type="text" id="floating_demo" className="block px-3.5 pb-2 pt-3.5 w-full text-xs text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 peer" placeholder=" " defaultValue="user@example.com" />
              <label htmlFor="floating_demo" className="absolute text-xs text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-3.5 z-10 origin-[0] left-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600">이메일 주소</label>
            </div>
          </div>
        );
      case 'input-search-shortcut':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-4">
            <div className="relative flex items-center w-full max-w-xs">
              <input type="text" placeholder="빠른 검색..." className="w-full pl-3 pr-14 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none" />
              <kbd className="absolute right-2 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded">⌘K</kbd>
            </div>
          </div>
        );
      case 'input-toggle-switch':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
              <span className="ml-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">알림 설정</span>
            </label>
          </div>
        );
      case 'input-checkbox-card':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-4">
            <label className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-800 border-2 border-indigo-500 rounded-xl cursor-pointer shadow-2xs w-full max-w-xs">
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="w-3.5 h-3.5 text-indigo-600 rounded" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">기본 플랜 ($9/mo)</span>
              </div>
              <span className="text-[10px] font-bold text-indigo-500">선택됨</span>
            </label>
          </div>
        );
      case 'input-otp-pin':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px]">
            <div className="flex gap-1.5">
              {['7', '2', '8', '4'].map((val, idx) => (
                <input key={idx} type="text" readOnly value={val} className="w-8 h-8 text-center font-bold text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white" />
              ))}
            </div>
          </div>
        );
      case 'input-select-custom':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-4">
            <select className="w-full max-w-xs px-3 py-2 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl outline-none">
              <option>카테고리 선택 (전체)</option>
              <option>React Component</option>
            </select>
          </div>
        );

      // --- 3. Modals & Alerts (6) ---
      case 'modal-glass':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3.5 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl shadow-lg text-white text-xs max-w-xs w-full">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-indigo-400">알림 모달 (Preview)</h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-1 text-[11px] text-slate-300">변경사항이 저장되었습니다.</p>
            </div>
          </div>
        );
      case 'toast-success':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-2.5 p-3 bg-white dark:bg-slate-800 border border-emerald-500/30 rounded-xl shadow-xs text-xs max-w-xs w-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white">클립보드 복사 성공</h5>
                <p className="text-[10px] text-slate-400">즉시 붙여넣기 가능합니다.</p>
              </div>
            </div>
          </div>
        );
      case 'alert-banner':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl text-[11px] font-bold shadow-xs w-full max-w-xs flex justify-between items-center">
              <span>🚀 v2.4 14종 신규 릴리즈</span>
              <span className="px-2 py-0.5 bg-white/20 rounded">확인</span>
            </div>
          </div>
        );
      case 'modal-confirm':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md max-w-xs w-full text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-rose-500 font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>정말 삭제하시겠습니까?</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] font-bold">취소</button>
                <button className="flex-1 py-1 bg-rose-600 text-white rounded text-[10px] font-bold">삭제</button>
              </div>
            </div>
          </div>
        );
      case 'alert-toast-interactive':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center justify-between p-3 bg-slate-900 text-white rounded-xl text-xs w-full max-w-xs shadow-md">
              <span>항목 이동 완료</span>
              <span className="font-bold text-indigo-400 underline cursor-pointer">실행 취소</span>
            </div>
          </div>
        );
      case 'modal-slide-over':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border-l-4 border-indigo-500 rounded-r-xl shadow-xs text-xs max-w-xs w-full">
              <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold">
                <Bell className="w-3.5 h-3.5" />
                <span>시스템 안내</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">오늘 밤 점검 예정입니다.</p>
            </div>
          </div>
        );

      // --- 4. Tables (6) ---
      case 'table-hover':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-[10px] uppercase text-slate-500">
                  <tr><th className="px-2.5 py-1">사용자</th><th className="px-2.5 py-1">상태</th></tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 text-[11px]">
                  <tr><td className="px-2.5 py-1 font-semibold text-slate-900 dark:text-white">김철수</td><td className="px-2.5 py-1"><span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] rounded-full font-bold">활성</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'table-striped':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <table className="w-full text-left">
                <thead className="bg-indigo-600 text-white text-[10px] font-bold">
                  <tr><th className="px-2.5 py-1">프로젝트</th><th className="px-2.5 py-1">진행률</th></tr>
                </thead>
                <tbody className="text-[11px]">
                  <tr className="bg-slate-50 dark:bg-slate-800/60"><td className="px-2.5 py-1 font-semibold">WebGuide v2.4</td><td className="px-2.5 py-1 font-bold text-indigo-500">95%</td></tr>
                  <tr className="bg-white dark:bg-slate-900"><td className="px-2.5 py-1 font-semibold">Dashboard UI</td><td className="px-2.5 py-1 font-bold text-indigo-500">80%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'table-compact':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 text-[11px]">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500">
                  <tr><th className="px-2 py-1">날짜</th><th className="px-2 py-1">방문자</th><th className="px-2 py-1">변동</th></tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 font-mono text-[10px]">
                  <tr><td className="px-2 py-1">2026-08-06</td><td className="px-2 py-1 font-bold">12,450</td><td className="px-2 py-1 text-emerald-500 font-bold">+4.2%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'table-action':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white">결제 내역 #8492</span>
              <button className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-[10px] font-bold">액션 ⋯</button>
            </div>
          </div>
        );
      case 'table-timeline':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-bold text-slate-900 dark:text-white">새 커밋 푸시</span>
                <span className="text-[10px] text-slate-400 font-mono ml-auto">10분 전</span>
              </div>
            </div>
          </div>
        );
      case 'table-expandable':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] px-2">
            <div className="w-full max-w-xs p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>주문번호 #2026</span>
                <span className="text-indigo-500 font-bold">▼ 상세</span>
              </div>
            </div>
          </div>
        );

      // --- 5. Webzine Snippets (6) ---
      case 'webzine-card':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center gap-3 p-2">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" alt="Webzine" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <span className="text-[9px] font-bold text-indigo-500 uppercase">Arte Webzine</span>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">디지털 아트의 새로운 패러다임</h5>
              </div>
            </div>
          </div>
        );
      case 'webzine-quote':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <blockquote className="p-3 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl italic text-xs text-slate-700 dark:text-slate-300 font-serif max-w-xs">
              "기술과 디자인이 만나 일상의 가치를 바꿉니다."
            </blockquote>
          </div>
        );
      case 'webzine-profile':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-2.5 p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl max-w-xs w-full">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ArteEditor" className="w-8 h-8 rounded-full border border-indigo-500" alt="Editor" />
              <div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white">이아름 에디터</h5>
                <p className="text-[9px] text-slate-500">디지털 문화 기획자</p>
              </div>
            </div>
          </div>
        );
      case 'webzine-video':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center w-full max-w-xs">
              <button className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </button>
            </div>
          </div>
        );
      case 'webzine-image-grid':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden aspect-video w-full max-w-xs">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">Graphic 01</div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-[10px] font-bold">Graphic 02</div>
            </div>
          </div>
        );
      case 'webzine-notice':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-indigo-600 text-white rounded-xl text-xs font-bold w-full max-w-xs flex justify-between items-center">
              <span>📢 아르떼 8월호 정기 구독</span>
              <span className="px-2 py-0.5 bg-white text-indigo-600 rounded text-[10px]">구독</span>
            </div>
          </div>
        );

      // --- 6. Charts & KPIs (6) ---
      case 'chart-sparkline':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-white w-full max-w-xs flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">주간 트래픽</p>
                <p className="text-base font-bold text-emerald-400">+28.4%</p>
              </div>
              <div className="px-2 py-0.5 bg-emerald-500/10 rounded text-[10px] text-emerald-400 font-mono font-bold">
                ▲ TRENDING
              </div>
            </div>
          </div>
        );
      case 'chart-bar-progress':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="space-y-1.5 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs w-full max-w-xs">
              <div className="flex justify-between font-bold"><span>목표 달성율</span><span className="text-indigo-600">82%</span></div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
          </div>
        );
      case 'chart-kpi-donut':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs w-full max-w-xs">
              <div className="w-8 h-8 rounded-full border-4 border-indigo-500 border-t-slate-300 flex items-center justify-center font-bold text-[10px]">75%</div>
              <div><h5 className="font-bold text-slate-900 dark:text-white">용량 점유율</h5><p className="text-[9px] text-slate-400">750GB / 1TB</p></div>
            </div>
          </div>
        );
      case 'chart-stat-card':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs space-y-1 w-full max-w-xs">
              <span className="text-slate-400 text-[10px]">월간 구독 수익</span>
              <div className="flex items-baseline justify-between font-bold">
                <span className="text-sm text-slate-900 dark:text-white">₩ 8,450,000</span>
                <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] rounded">+12.8%</span>
              </div>
            </div>
          </div>
        );
      case 'chart-mini-line':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs w-full max-w-xs">
              <div><p className="text-[9px] text-slate-400">오늘의 방문자</p><p className="font-bold text-sm text-indigo-400">3,892명</p></div>
              <span className="text-emerald-400 font-mono font-bold text-[10px]">▲ LIVE</span>
            </div>
          </div>
        );
      case 'chart-step-indicator':
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] p-2">
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[11px] font-bold w-full max-w-xs">
              <span className="text-indigo-600">Step 1 ✓</span>
              <span className="text-indigo-600">Step 2 ✓</span>
              <span className="text-slate-400">Step 3</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full min-h-[130px] text-xs text-slate-400 font-semibold">
            {itemId} Live Preview
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
            <span>Featured UI Components & Tools</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            북마크, 반응형 뷰포트 조절, 코드 다운로드, 접근성 가이드 및 나란히 비교 도구를 제공합니다.
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

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-[#1A222C] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const currentMode = getMode(item.id);
          const currentVp = getViewport(item.id);
          const isCopied = copiedId === item.id;
          const isFav = favorites.includes(item.id);
          const isCompared = selectedForCompare.includes(item.id);

          return (
            <div
              key={item.id}
              className="group bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Header & Controls */}
              <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <div className="min-w-0 flex items-center gap-2">
                  {/* Bookmark Heart Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-1 rounded-full transition-all cursor-pointer ${
                      isFav ? 'text-rose-500 bg-rose-500/10' : 'text-slate-400 hover:text-rose-500'
                    }`}
                    title={isFav ? '즐겨찾기 해제' : '즐겨찾기에 추가'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>

                  <h3 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Card View Mode Selector & Compare Checkbox */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => toggleCompareItem(item.id)}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded border cursor-pointer ${
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
                      className={`px-2 py-0.5 rounded font-medium flex items-center gap-1 cursor-pointer ${
                        currentMode === 'preview' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>미리보기</span>
                    </button>
                    <button
                      onClick={() => setMode(item.id, 'react')}
                      className={`px-2 py-0.5 rounded font-medium cursor-pointer ${
                        currentMode === 'react' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      React
                    </button>
                    <button
                      onClick={() => setMode(item.id, 'html')}
                      className={`px-2 py-0.5 rounded font-medium cursor-pointer ${
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
                  <div className="flex items-center justify-between font-bold text-amber-300">
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
                    <span>상세 가이드</span>
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
