import React, { useState } from 'react';
import { Layers, Copy, Check, ExternalLink } from 'lucide-react';
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
  const [codeType, setCodeType] = useState<Record<string, 'react' | 'html'>>({});
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'all'
    ? featuredComponents
    : featuredComponents.filter(item => item.category === selectedCategory);

  const handleCopy = (item: ComponentItem) => {
    const currentType = codeType[item.id] || 'react';
    const code = currentType === 'react' ? item.reactCode : item.htmlCode;
    navigator.clipboard.writeText(code);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleCodeType = (id: string, type: 'react' | 'html') => {
    setCodeType(prev => ({ ...prev, [id]: type }));
  };

  return (
    <section className="space-y-6">
      {/* Section Title & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Featured UI Components</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            인기 UI 컴포넌트 갤러리
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            카테고리별로 검증된 컴포넌트 스니펫을 실시간 미리보고 가져가세요.
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
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
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
          const currentCodeType = codeType[item.id] || 'react';
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header & Badge */}
              <div className="p-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-500 transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md uppercase tracking-wider ${
                        item.badge === 'HOT'
                          ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                          : item.badge === 'NEW'
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 bg-slate-950 font-mono text-xs text-slate-300 relative min-h-[120px] max-h-[150px] overflow-y-auto">
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 z-10 text-[10px]">
                  <button
                    onClick={() => toggleCodeType(item.id, 'react')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      currentCodeType === 'react' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    React
                  </button>
                  <button
                    onClick={() => toggleCodeType(item.id, 'html')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      currentCodeType === 'html' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    HTML
                  </button>
                </div>

                <pre className="pr-16 text-indigo-200/90 whitespace-pre-wrap leading-relaxed">
                  {currentCodeType === 'react' ? item.reactCode : item.htmlCode}
                </pre>
              </div>

              {/* Card Footer Actions */}
              <div className="p-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => navigate(item.route)}
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>상세 가이드 보기</span>
                </button>

                <button
                  onClick={() => handleCopy(item)}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
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
