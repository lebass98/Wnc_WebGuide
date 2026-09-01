import React, { useState } from 'react';
import { Sparkles, Code2, Layers, Search, Command, Check, Copy } from 'lucide-react';
import { featuredComponents } from '../../data/landingPageData';

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = searchTerm
    ? featuredComponents.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-[#1A222C]/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xl backdrop-blur-xl p-8 sm:p-12 lg:p-14 transition-colors duration-300">
      {/* 🔮 Subtle Brand Mirage & Blaze Orange Gradient Soft Aura */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#075056]/15 dark:bg-[#075056]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF5B04]/10 dark:bg-[#FF5B04]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E4EEF0] dark:bg-[#075056]/20 border border-slate-200/80 dark:border-[#075056]/40 rounded-full text-[#16232A] dark:text-[#E4EEF0] text-xs sm:text-sm font-bold shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#FF5B04] animate-spin" style={{ animationDuration: '6s' }} />
          <span>WNC React & Web UI/UX Architecture Guide v2.4</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            어디서든 쉽게 가져다 쓰는<br />
            <span className="bg-gradient-to-r from-[#16232A] via-[#075056] to-[#FF5B04] dark:from-white dark:via-[#E4EEF0] dark:to-[#FF5B04] bg-clip-text text-transparent">
              모던 React & HTML UI 컴포넌트 가이드
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            반응형 웹 디자인, 웹진 레이아웃 및 36개 랜드마크 UI 컴포넌트를 사이트 스타일로 실시간 미리보고 한 번의 클릭으로 코드를 복사하거나 다운로드하세요.
          </p>
        </div>

        {/* Global Command Palette Interactive Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="relative flex items-center bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-2 shadow-md focus-within:border-[#16232A] dark:focus-within:border-[#FF5B04] focus-within:ring-2 focus-within:ring-[#16232A]/20 dark:focus-within:ring-[#FF5B04]/20 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="컴포넌트 검색... (예: 버튼, 폼, 모달, 차트)"
              className="w-full px-3 py-2 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 text-xs font-mono shrink-0 shadow-2xs">
              <Command className="w-3.5 h-3.5" />
              <span>K</span>
            </div>
          </div>

          {/* Quick Search Autocomplete Dropdown */}
          {searchTerm && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-h-72 overflow-y-auto z-30 p-2 text-left space-y-1">
              {filtered.length > 0 ? (
                filtered.map(item => (
                  <div key={item.id} className="p-3 hover:bg-[#E4EEF0]/60 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-between group">
                    <div>
                      <span className="text-[10px] font-bold text-[#075056] dark:text-[#FF5B04] uppercase">{item.category}</span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#16232A] dark:group-hover:text-[#FF5B04]">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                    <button
                      onClick={() => handleCopyCode(item.id, item.reactCode)}
                      className="px-2.5 py-1 bg-[#16232A] hover:bg-[#23343e] dark:bg-[#FF5B04] dark:hover:bg-[#e04f00] text-white rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === item.id ? '복사됨' : '코드 복사'}</span>
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-slate-400 text-xs">
                  검색어 <strong>"{searchTerm}"</strong>에 해당하는 컴포넌트가 없습니다.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Feature Highlights Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
            <Code2 className="w-5 h-5 text-[#16232A] dark:text-[#FF5B04] mx-auto" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">36+ UI</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">카테고리별 6종 컴포넌트</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
            <Layers className="w-5 h-5 text-[#075056] dark:text-[#E4EEF0] mx-auto" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">100% 모던</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">React TSX & Vanilla HTML</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
            <Sparkles className="w-5 h-5 text-[#FF5B04] mx-auto" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">라이브 프리뷰</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">실시간 미리보기 & 비교</p>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
            <Command className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">1-클릭복사</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">파일 다운로드 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
