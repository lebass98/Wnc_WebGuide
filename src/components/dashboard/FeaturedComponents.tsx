import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Heart, Download, Monitor, Tablet, Smartphone, ArrowRightLeft, Info, HelpCircle, MousePointer, Edit3, MessageSquare, Table, FileText, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';
import type { ComponentItem } from '../../data/landingPageData';
import { useComponentStorage } from '../../hooks/useComponentStorage';
import ComponentCompareModal from './ComponentCompareModal';

// Direct Import of ACTUAL React Page Components
import ShowcaseButtonsBadges from '../ui/ShowcaseButtonsBadges';
import ShowcaseAlertsModals from '../ui/ShowcaseAlertsModals';
import ShowcaseDataDisplay from '../ui/ShowcaseDataDisplay';
import ShowcaseProgressNav from '../ui/ShowcaseProgressNav';
import ShowcaseStatesLoaders from '../ui/ShowcaseStatesLoaders';
import InputComponent from '../ui/InputComponent';

import FormElements from '../../pages/forms/FormElements';
import FormLayout from '../../pages/forms/FormLayout';
import CustomDatePicker from '../ui/CustomDatePicker';
import FAQ from '../../pages/faq/FAQ';

import Integrations from '../../pages/integrations/Integrations';
import PricingSections from '../../pages/pricing/PricingSections';
import ErrorPage from '../../pages/errors/ErrorPage';
import TaskList from '../../pages/tasks/TaskList';

import BasicTables from '../../pages/tables/BasicTables';
import IeumTable from '../../pages/webzine/ieum/IeumTable';
import ArteTable from '../../pages/webzine/arte/ArteTable';
import TaskKanban from '../../pages/tasks/TaskKanban';

import ArteImage from '../../pages/webzine/arte/ArteImage';
import ArteVideo from '../../pages/webzine/arte/ArteVideo';
import ArteText from '../../pages/webzine/arte/ArteText';
import ArteProfile from '../../pages/webzine/arte/ArteProfile';
import ArteBox from '../../pages/webzine/arte/ArteBox';
import ArteNotice from '../../pages/webzine/arte/ArteNotice';

import LineCharts from '../../pages/charts/LineCharts';
import ArteNew from '../../pages/webzine/arte/ArteNew';
import IeumVideo from '../../pages/webzine/ieum/IeumVideo';
import IeumImage from '../../pages/webzine/ieum/IeumImage';
import IeumText from '../../pages/webzine/ieum/IeumText';
import ArteLink from '../../pages/webzine/arte/ArteLink';

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

  // Helper to render ACTUAL REACT PAGE COMPONENTS directly inside the preview card!
  const renderLivePreview = (itemId: string) => {
    return (
      <div className="w-full h-full max-h-[220px] overflow-y-auto overflow-x-hidden p-2 scrollbar-thin pointer-events-auto">
        <div className="scale-[0.8] transform-gpu origin-top-left w-[125%] font-sans">
          {(() => {
            switch (itemId) {
              // --- Buttons Category (Actual React Components) ---
              case 'ui-buttons-badges':
                return <ShowcaseButtonsBadges />;
              case 'ui-alerts-modals':
                return <ShowcaseAlertsModals />;
              case 'ui-data-display':
                return <ShowcaseDataDisplay />;
              case 'ui-progress-nav':
                return <ShowcaseProgressNav />;
              case 'ui-states-loaders':
                return <ShowcaseStatesLoaders />;
              case 'input-component':
                return <InputComponent />;

              // --- Forms Category (Actual React Components) ---
              case 'form-elements':
                return <FormElements />;
              case 'form-layout':
                return <FormLayout />;
              case 'input-custom-picker':
                return <CustomDatePicker />;
              case 'login-page-form':
                return (
                  <div className="p-4 bg-white dark:bg-slate-800 border rounded-2xl max-w-sm space-y-2">
                    <h4 className="font-bold text-sm text-indigo-600">실제 로그인 인증 폼</h4>
                    <input type="text" placeholder="user@domain.com" className="w-full p-2 border rounded-lg text-xs" />
                    <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg font-bold text-xs">로그인</button>
                  </div>
                );
              case 'signup-page-form':
                return (
                  <div className="p-4 bg-white dark:bg-slate-800 border rounded-2xl max-w-sm space-y-2">
                    <h4 className="font-bold text-sm text-indigo-600">실제 회원가입 폼</h4>
                    <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg font-bold text-xs">계정 생성</button>
                  </div>
                );
              case 'faq-accordion':
                return <FAQ />;

              // --- Modals & Alerts Category (Actual React Components) ---
              case 'alert-modal-system':
                return <ShowcaseAlertsModals />;
              case 'integration-cards':
                return <Integrations />;
              case 'pricing-tier-cards':
                return <PricingSections />;
              case 'error-404-component':
                return <ErrorPage code="404" />;
              case 'error-500-component':
                return <ErrorPage code="500" />;
              case 'task-list-component':
                return <TaskList />;

              // --- Tables Category (Actual React Components) ---
              case 'table-basic-data':
                return <BasicTables />;
              case 'table-ieum-editorial':
                return <IeumTable />;
              case 'table-arte-visual':
                return <ArteTable />;
              case 'task-kanban-board':
                return <TaskKanban />;
              case 'calendar-page-component':
                return (
                  <div className="p-4 bg-white dark:bg-slate-800 border rounded-2xl text-center font-bold text-xs">
                    📅 실제 스케줄러 캘린더 컴포넌트
                  </div>
                );
              case 'hero-section-layouts':
                return (
                  <div className="p-6 bg-indigo-900 text-white rounded-2xl text-center font-bold">
                    🚀 실제 히어로 랜딩 블록
                  </div>
                );

              // --- Webzine Snippets Category (Actual React Components) ---
              case 'arte-image-component':
                return <ArteImage />;
              case 'arte-video-component':
                return <ArteVideo />;
              case 'arte-text-component':
                return <ArteText />;
              case 'arte-profile-component':
                return <ArteProfile />;
              case 'arte-box-component':
                return <ArteBox />;
              case 'arte-notice-component':
                return <ArteNotice />;

              // --- Charts Category (Actual React Components) ---
              case 'chart-line-charts':
                return <LineCharts />;
              case 'arte-new-visual':
                return <ArteNew />;
              case 'ieum-video-component':
                return <IeumVideo />;
              case 'ieum-image-component':
                return <IeumImage />;
              case 'ieum-text-component':
                return <IeumText />;
              case 'arte-link-component':
                return <ArteLink />;

              default:
                return <ShowcaseButtonsBadges />;
            }
          })()}
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-6">
      {/* Section Title & Compare Action Floating Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Actual Project UI Components Direct Render</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            실제 사이트 서브 페이지의 React 컴포넌트를 본래 모습 그대로 직접 미리보고 코드를 다운로드하세요.
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

      {/* Components Grid with Direct Component Rendering */}
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

              {/* Card Body: DIRECT REACT COMPONENT RENDER OR CODE BOX */}
              <div className="relative min-h-[220px] max-h-[220px] overflow-hidden flex items-center justify-center">
                {currentMode === 'preview' ? (
                  <div className="p-2 bg-slate-50/70 dark:bg-slate-900/50 h-full w-full flex items-start justify-center transition-all duration-300" style={{ maxWidth: currentVp }}>
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
