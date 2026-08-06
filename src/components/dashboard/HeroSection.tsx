import React, { useState } from 'react';
import { Search, Sparkles, Copy, Check, Code2, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroLiveSnippet } from '../../data/landingPageData';

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'react' | 'html'>('react');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleCopy = () => {
    const textToCopy = activeTab === 'react' ? heroLiveSnippet.react : heroLiveSnippet.html;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/ui/buttons-badges?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 dark:from-[#1A222C] dark:via-slate-900 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800 shadow-lg p-6 sm:p-10 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Headlines & Search */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Wnc WebGuide v2.4 릴리즈</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-slate-600 dark:text-slate-300">120+ 모던 컴포넌트</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 dark:from-white dark:via-slate-100 dark:to-indigo-200 bg-clip-text text-transparent">
            원클릭 복사로 완성하는 <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-500/30 underline-offset-8">React & HTML</span> UI 라이브러리
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            복잡한 설치 과정 없이 필요한 스니펫을 바로 가져가서 사용하세요. 
            버튼, 폼, 모달부터 이음·아르떼 웹진 전용 템플릿까지 준비되어 있습니다.
          </p>

          {/* Quick Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-md">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="컴포넌트 검색 (예: 버튼, 모달, 테이블, 웹진)..."
                className="w-full pl-11 pr-24 py-3.5 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 rounded-2xl text-sm text-slate-900 dark:text-white placeholder-slate-400 shadow-sm transition-all outline-none"
              />
              <div className="absolute right-3 flex items-center gap-1.5">
                <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-mono text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md">
                  ⌘K
                </kbd>
                <button
                  type="submit"
                  className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors cursor-pointer shadow-sm shadow-indigo-200 dark:shadow-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Tech Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">지원 스택:</span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-lg text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500" /> React 18+ / TS
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-lg text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500" /> Tailwind v4
            </span>
            <span className="px-2.5 py-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-lg text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> HTML5 / CSS3
            </span>
          </div>
        </div>

        {/* Right Column: Live Interactive Demo Box */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl transition-colors">
            {/* Header / Tabs */}
            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
                  <Code2 className="w-3.5 h-3.5 text-indigo-500" /> Live Playground
                </span>
              </div>

              {/* Tab Toggle Buttons */}
              <div className="flex items-center bg-slate-200/70 dark:bg-slate-900 p-1 rounded-lg border border-slate-300/50 dark:border-slate-700/60 text-xs">
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    activeTab === 'react'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  React TSX
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    activeTab === 'html'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  HTML
                </button>
              </div>
            </div>

            {/* Live Component Preview Card */}
            <div className="p-6 bg-slate-50/50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 min-h-[140px] flex items-center justify-center border-b border-slate-200 dark:border-slate-800 relative group">
              <span className="absolute top-3 left-4 text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                Preview Result
              </span>
              
              {/* Preview Button */}
              <button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>시작하기 (Get Started)</span>
              </button>
            </div>

            {/* Code Snippet Display & Copy Action */}
            <div className="relative p-4 bg-slate-900 font-mono text-xs text-slate-200 overflow-x-auto max-h-44 scrollbar-thin">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium transition-all shadow-md cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>복사됨!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>1초 복사</span>
                  </>
                )}
              </button>
              
              <pre className="pr-20 whitespace-pre-wrap leading-relaxed text-indigo-200/90">
                {activeTab === 'react' ? heroLiveSnippet.react : heroLiveSnippet.html}
              </pre>
            </div>

            {/* Footer Status */}
            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                <Zap className="w-3 h-3" /> Ready to copy
              </span>
              <span className="font-mono text-slate-400 dark:text-slate-500">Zero Configuration Needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
