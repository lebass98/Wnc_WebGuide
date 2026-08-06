import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Sparkles, Heart, Download, Monitor, Tablet, Smartphone, ArrowRightLeft, Info, HelpCircle, Zap } from 'lucide-react';
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

  // Helper to render live component UI previews
  const renderLivePreview = (itemId: string) => {
    switch (itemId) {
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
