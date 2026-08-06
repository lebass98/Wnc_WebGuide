import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';
import type { ComponentItem } from '../../data/landingPageData';

const categories = [
  { id: 'all', label: '전체 (All)' },
  { id: 'buttons', label: '버튼 & 뱃지' },
  { id: 'forms', label: '폼 & 인풋' },
  { id: 'modals', label: '모달 & 알림' },
  { id: 'tables', label: '테이블' },
  { id: 'webzine', label: '웹진 스니펫' },
  { id: 'charts', label: '차트' },
];

const FeaturedComponents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  // View mode for each item: 'preview' (default), 'react', 'html'
  const [cardModes, setCardModes] = useState<Record<string, 'preview' | 'react' | 'html'>>({});
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'all'
    ? featuredComponents
    : featuredComponents.filter(item => item.category === selectedCategory);

  const getMode = (id: string): 'preview' | 'react' | 'html' => {
    return cardModes[id] || 'preview';
  };

  const setMode = (id: string, mode: 'preview' | 'react' | 'html') => {
    setCardModes(prev => ({ ...prev, [id]: mode }));
  };

  const handleCopy = (item: ComponentItem) => {
    const currentMode = getMode(item.id);
    const code = currentMode === 'html' ? item.htmlCode : item.reactCode;
    navigator.clipboard.writeText(code);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to render live component UI previews directly inside card
  const renderLivePreview = (itemId: string) => {
    switch (itemId) {
      case 'btn-gradient':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px]">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-indigo-500 text-white shadow-md hover:shadow-indigo-500/25 transition-all cursor-pointer">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>샤인 버튼 (Live)</span>
              </span>
            </button>
          </div>
        );

      case 'input-floating':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] px-4">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                id="floating_demo"
                className="block px-4 pb-2.5 pt-4 w-full text-xs text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 peer"
                placeholder=" "
                defaultValue="user@example.com"
              />
              <label
                htmlFor="floating_demo"
                className="absolute text-xs text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600"
              >
                이메일 주소
              </label>
            </div>
          </div>
        );

      case 'modal-glass':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] p-2">
            <div className="p-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl shadow-lg text-white text-xs max-w-xs w-full">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-indigo-400">알림 모달 (Preview)</h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-1 text-[11px] text-slate-300">변경사항이 저장되었습니다.</p>
            </div>
          </div>
        );

      case 'table-hover':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] px-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-[10px] uppercase text-slate-500">
                  <tr>
                    <th className="px-3 py-1.5">사용자</th>
                    <th className="px-3 py-1.5">상태</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="px-3 py-1.5 font-medium text-slate-900 dark:text-white">김철수</td>
                    <td className="px-3 py-1.5">
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] rounded-full font-bold">
                        활성
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'webzine-card':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] p-2">
            <div className="w-full max-w-xs overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-3 p-2.5">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80"
                alt="Webzine Thumbnail"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <span className="text-[10px] font-bold text-indigo-500 uppercase">Arte Webzine</span>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">디지털 아트의 새로운 패러다임</h5>
              </div>
            </div>
          </div>
        );

      case 'chart-sparkline':
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] p-2">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-white w-full max-w-xs flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">주간 트래픽</p>
                <p className="text-base font-bold text-emerald-400">+28.4%</p>
              </div>
              <div className="px-2.5 py-1 bg-emerald-500/10 rounded-lg text-[10px] text-emerald-400 font-mono font-bold">
                ▲ TRENDING
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full min-h-[140px] text-xs text-slate-400">
            Preview
          </div>
        );
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Title & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Featured UI Components</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            실시간 미리보기로 컴포넌트를 확인하고, 필요한 코드를 바로 복사하세요.
          </p>
        </div>

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
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="group bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header & Badge & Tab Controls */}
              <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <div className="min-w-0 flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className={`shrink-0 px-1.5 py-0.5 text-[9px] font-extrabold rounded uppercase tracking-wider ${
                      item.badge === 'HOT'
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                        : item.badge === 'NEW'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Card View Mode Selector: [Preview | React | HTML] */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] shrink-0">
                  <button
                    onClick={() => setMode(item.id, 'preview')}
                    className={`px-2 py-1 rounded-md font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                      currentMode === 'preview'
                        ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    title="미리보기 모드"
                  >
                    <Eye className="w-3 h-3" />
                    <span>미리보기</span>
                  </button>

                  <button
                    onClick={() => setMode(item.id, 'react')}
                    className={`px-2 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      currentMode === 'react'
                        ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    title="React 스니펫 코드"
                  >
                    React
                  </button>

                  <button
                    onClick={() => setMode(item.id, 'html')}
                    className={`px-2 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      currentMode === 'html'
                        ? 'bg-indigo-600 text-white font-bold shadow-2xs'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    title="HTML 스니펫 코드"
                  >
                    HTML
                  </button>
                </div>
              </div>

              {/* Card Body: Live Preview (Default) OR Code Box */}
              <div className="relative min-h-[150px] max-h-[160px]">
                {currentMode === 'preview' ? (
                  <div className="p-4 bg-slate-50/70 dark:bg-slate-900/50 h-full flex items-center justify-center">
                    {renderLivePreview(item.id)}
                  </div>
                ) : (
                  <div className="p-4 bg-slate-900 font-mono text-xs text-slate-200 h-full overflow-y-auto scrollbar-thin">
                    <pre className="whitespace-pre-wrap leading-relaxed text-indigo-200/90">
                      {currentMode === 'react' ? item.reactCode : item.htmlCode}
                    </pre>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => navigate(item.route)}
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>상세 가이드 보기</span>
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
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedComponents;
