import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  Search,
  Filter,
  Plus,
  Moon,
  Sun,
  Bell,
  Settings,
  Languages,
  X,
  Clock,
  CornerDownLeft,
  ChevronRight,
  LayoutDashboard,
  ListTodo,
  SquarePen,
  Table,
  Layers,
  Component,
  Grid,
  BookOpen,
  Check,
  FileText,
} from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { useI18n } from '../../i18n/config';
import { searchableIndex, type SearchIndexItem } from '../../config/searchIndex';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  ListTodo,
  SquarePen,
  Table,
  Layers,
  Component,
  Grid,
  BookOpen,
  FileText,
};

const POPULAR_SEARCH_TAGS = ['대시보드', '테이블', '이음', '아르떼', '알림', '차트', '폼', '자주 묻는 질문', '히어로'];

const LOCAL_STORAGE_RECENT_KEY = 'wnc_recent_searches';

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const navigate = useNavigate();

  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_RECENT_KEY);
      return saved ? JSON.parse(saved) : ['대시보드 메인', '최근 주문 테이블', '이음 텍스트'];
    } catch {
      return ['대시보드 메인', '최근 주문 테이블', '이음 텍스트'];
    }
  });

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Detect OS for shortcut badge text
  const isMac = typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  // Filtered Categories List for filter popup
  const categoriesList = useMemo(() => {
    const uniqueKeys = Array.from(new Set(searchableIndex.map((i) => i.categoryKey)));
    return [
      { key: 'all', label: '전체 카테고리' },
      ...uniqueKeys.map((key) => {
        const found = searchableIndex.find((i) => i.categoryKey === key);
        return {
          key,
          label: found ? found.categoryName : key,
        };
      }),
    ];
  }, []);

  // Filtered Search Results (Title, SubTitle, Keywords, Category, Path Matching)
  const filteredResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return searchableIndex.filter((item) => {
      // Filter by category if selected
      if (selectedCategory !== 'all' && item.categoryKey !== selectedCategory) {
        return false;
      }

      const titleMatch = item.title.toLowerCase().includes(q);
      const subTitleMatch = item.subTitle ? item.subTitle.toLowerCase().includes(q) : false;
      const categoryMatch = item.categoryName.toLowerCase().includes(q);
      const parentMatch = item.parentMenuName ? item.parentMenuName.toLowerCase().includes(q) : false;
      const pathMatch = item.path.toLowerCase().includes(q);
      const keywordMatch = item.keywords.some((kw) => kw.toLowerCase().includes(q));

      return titleMatch || subTitleMatch || categoryMatch || parentMatch || pathMatch || keywordMatch;
    });
  }, [searchQuery, selectedCategory]);

  // Save Recent Search
  const addRecentSearch = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== trimmed);
      const next = [trimmed, ...filtered].slice(0, 6);
      try {
        localStorage.setItem(LOCAL_STORAGE_RECENT_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const removeRecentSearch = (e: React.MouseEvent, query: string) => {
    e.stopPropagation();
    setRecentSearches((prev) => {
      const next = prev.filter((item) => item !== query);
      try {
        localStorage.setItem(LOCAL_STORAGE_RECENT_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const clearAllRecent = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_RECENT_KEY);
    } catch {
      // ignore
    }
  };

  // Helper for scrolling and pulsing focus animation
  const scrollToAndFocusComponent = (id: string) => {
    if (!id) return;
    let attempts = 0;
    const maxAttempts = 15;

    const performScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Trigger focus pulse animation
        el.classList.remove('component-focus-highlight');
        void el.offsetWidth; // Force reflow
        el.classList.add('component-focus-highlight');

        setTimeout(() => {
          el.classList.remove('component-focus-highlight');
        }, 2600);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(performScroll, 100);
      }
    };

    setTimeout(performScroll, 60);
  };

  // Handle Selection & Navigation
  const handleSelectResult = (item: SearchIndexItem) => {
    addRecentSearch(item.title);
    setIsDropdownOpen(false);
    setIsMobileSearchOpen(false);
    setSearchQuery('');
    setSelectedIndex(-1);

    const targetUrl = item.id ? `${item.path}#${item.id}` : item.path;
    navigate(targetUrl);

    if (item.id) {
      scrollToAndFocusComponent(item.id);
    }
  };

  const handleSelectQueryTag = (tag: string) => {
    setSearchQuery(tag);
    setIsDropdownOpen(true);
    if (desktopInputRef.current) desktopInputRef.current.focus();
    if (mobileInputRef.current) mobileInputRef.current.focus();
  };

  // Keyboard Navigation & Cmd+K Shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsDropdownOpen(true);
        if (window.innerWidth < 768) {
          setIsMobileSearchOpen(true);
          setTimeout(() => mobileInputRef.current?.focus(), 100);
        } else {
          desktopInputRef.current?.focus();
        }
        return;
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileSearchOpen(false);
        setIsFilterOpen(false);
        return;
      }

      // Only handle arrow navigation if dropdown is open and there are results
      if (!isDropdownOpen || filteredResults.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < filteredResults.length) {
        e.preventDefault();
        handleSelectResult(filteredResults[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, filteredResults, selectedIndex]);

  // Reset selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchQuery, selectedCategory]);

  // Click outside listener for desktop dropdown & filter
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className={`fixed top-0 right-0 left-0 ${isSidebarOpen ? 'lg:left-[280px]' : 'lg:left-[80px]'} h-[72px] lg:h-[80px] px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white/80 dark:bg-[#1A222C]/80 border-b border-slate-200 dark:border-slate-800 z-20 transition-all duration-300 backdrop-blur-md`}>
        {/* Left side: Title and Greetings */}
        <div className="flex items-center gap-3 lg:gap-6">
          <button
            onClick={onMenuClick}
            aria-label="메뉴 열기"
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white lg:hidden p-1.5 -ml-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-lg sm:text-[22px] font-bold text-slate-800 dark:text-white leading-tight">대시보드</h2>
            <p className="hidden sm:block text-[13px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">퍼블리싱팀님 환영합니다! 템플릿가이드에 오신걸 환영합니다.</p>
          </div>
        </div>

        {/* Center: Desktop Search Bar */}
        <div className="flex-1 max-w-xl px-4 lg:px-12 hidden md:block" ref={searchContainerRef}>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
              <Search className="h-[18px] w-[18px] text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            
            <input
              ref={desktopInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!isDropdownOpen) setIsDropdownOpen(true);
              }}
              onFocus={() => setIsDropdownOpen(true)}
              className="block w-full pl-11 pr-24 py-2 sm:py-2.5 bg-slate-100 dark:bg-slate-800/70 border border-transparent focus:border-indigo-500/30 rounded-full text-sm font-medium placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white focus:ring-4 focus:ring-indigo-500/10 focus:bg-white dark:focus:bg-slate-800 transition-all outline-none"
              placeholder="타이틀, 메뉴, 키워드 검색... (⌘K)"
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5 z-10">
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    desktopInputRef.current?.focus();
                  }}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full transition-colors"
                  title="검색어 지우기"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Shortcut K badge */}
              {!searchQuery && (
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold text-slate-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md shadow-2xs pointer-events-none">
                  {isMac ? '⌘K' : 'Ctrl+K'}
                </kbd>
              )}

              {/* Filter Button */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`p-1.5 rounded-full transition-colors ${
                    selectedCategory !== 'all' || isFilterOpen
                      ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 dark:text-indigo-400'
                      : 'text-slate-400 hover:text-indigo-500 hover:bg-slate-200/50 dark:hover:bg-slate-700'
                  }`}
                  title="카테고리 필터"
                >
                  <Filter className="h-[18px] w-[18px]" />
                </button>

                {/* Filter Dropdown Popup */}
                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      카테고리 필터
                    </div>
                    {categoriesList.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => {
                          setSelectedCategory(cat.key);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium transition-colors ${
                          selectedCategory === cat.key
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>{cat.label}</span>
                        {selectedCategory === cat.key && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Search Results Dropdown */}
          {isDropdownOpen && (
            <div className="absolute left-4 right-4 lg:left-12 lg:right-12 top-[70px] bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <SearchResultsContent
                searchQuery={searchQuery}
                filteredResults={filteredResults}
                recentSearches={recentSearches}
                selectedIndex={selectedIndex}
                selectedCategory={selectedCategory}
                categoriesList={categoriesList}
                onSelectResult={handleSelectResult}
                onSelectQueryTag={handleSelectQueryTag}
                onRemoveRecent={removeRecentSearch}
                onClearAllRecent={clearAllRecent}
                onSelectCategory={setSelectedCategory}
                t={t}
                resultsContainerRef={resultsContainerRef}
              />
            </div>
          )}
        </div>

        {/* Right side: Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search Icon Button */}
          <button
            onClick={() => {
              setIsMobileSearchOpen(true);
              setTimeout(() => mobileInputRef.current?.focus(), 150);
            }}
            className="md:hidden p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
            aria-label="검색"
          >
            <Search className="w-5 h-5" />
          </button>

          <button className="hidden sm:flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-indigo-200">
            <Plus className="w-4 h-4" />
            새로 만들기
          </button>

          <div className="flex items-center gap-0.5 sm:gap-1 mx-1 sm:mx-2">
            <button
              onClick={toggleTheme}
              className="hidden sm:block p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
              title={isDarkMode ? '라이트 모드 전환' : '다크 모드 전환'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
              className="p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
              title={locale === 'ko' ? 'English' : '한국어'}
            >
              <Languages className="w-5 h-5" />
            </button>

            <div className="relative">
              <button className="p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
                <Bell className="w-5 h-5" />
              </button>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white dark:border-[#1A222C]"></span>
            </div>

            <button className="hidden sm:block p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Profile block */}
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-800 group relative">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User Avatar"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 dark:border-slate-800 shadow-sm bg-indigo-50 dark:bg-slate-800"
            />
            <div className="hidden md:block flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">퍼블리싱팀</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium transition-colors">관리자</p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Modal Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex flex-col p-4 md:hidden animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#1A222C] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[85vh] overflow-hidden">
            {/* Mobile Search Header */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="w-5 h-5 text-indigo-500 shrink-0" />
              <input
                ref={mobileInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="타이틀, 메뉴, 키워드 검색..."
                className="flex-1 bg-transparent border-none text-base font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="px-2.5 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
              >
                취소
              </button>
            </div>

            {/* Mobile Search Results Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <SearchResultsContent
                searchQuery={searchQuery}
                filteredResults={filteredResults}
                recentSearches={recentSearches}
                selectedIndex={selectedIndex}
                selectedCategory={selectedCategory}
                categoriesList={categoriesList}
                onSelectResult={handleSelectResult}
                onSelectQueryTag={handleSelectQueryTag}
                onRemoveRecent={removeRecentSearch}
                onClearAllRecent={clearAllRecent}
                onSelectCategory={setSelectedCategory}
                t={t}
                resultsContainerRef={resultsContainerRef}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable Search Results Dropdown Component
interface SearchResultsContentProps {
  searchQuery: string;
  filteredResults: SearchIndexItem[];
  recentSearches: string[];
  selectedIndex: number;
  selectedCategory: string;
  categoriesList: { key: string; label: string }[];
  onSelectResult: (item: SearchIndexItem) => void;
  onSelectQueryTag: (tag: string) => void;
  onRemoveRecent: (e: React.MouseEvent, query: string) => void;
  onClearAllRecent: (e: React.MouseEvent) => void;
  onSelectCategory: (categoryKey: string) => void;
  t: (key: string) => string;
  resultsContainerRef: React.RefObject<HTMLDivElement | null>;
}

const SearchResultsContent: React.FC<SearchResultsContentProps> = ({
  searchQuery,
  filteredResults,
  recentSearches,
  selectedIndex,
  selectedCategory,
  categoriesList,
  onSelectResult,
  onSelectQueryTag,
  onRemoveRecent,
  onClearAllRecent,
  onSelectCategory,
  resultsContainerRef,
}) => {
  const isMac = typeof window !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  return (
    <div className="flex flex-col text-left max-h-[480px]" ref={resultsContainerRef}>
      {/* Category Pills Header */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 overflow-x-auto custom-scrollbar">
        {categoriesList.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelectCategory(cat.key)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.key
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        {/* Case 1: Empty Query - Show Recent & Popular Tags */}
        {!searchQuery.trim() && (
          <div className="p-3 space-y-4">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" /> 최근 검색어
                  </span>
                  <button
                    onClick={onClearAllRecent}
                    className="text-[11px] text-slate-400 hover:text-red-500 transition-colors"
                  >
                    전체 삭제
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((item) => (
                    <span
                      key={item}
                      onClick={() => onSelectQueryTag(item)}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 rounded-xl text-xs font-medium cursor-pointer transition-all border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <span>{item}</span>
                      <button
                        onClick={(e) => onRemoveRecent(e, item)}
                        className="text-slate-400 hover:text-red-500 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Search Tags */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                인기 추천 키워드
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCH_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onSelectQueryTag(tag)}
                    className="px-3 py-1.5 bg-indigo-50/70 dark:bg-indigo-500/10 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-300 rounded-xl text-xs font-semibold transition-all border border-indigo-100 dark:border-indigo-500/20"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Case 2: Active Query with Matching Results */}
        {searchQuery.trim() && filteredResults.length > 0 && (
          <div className="space-y-1">
            <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              타이틀 & 항목 검색 결과 ({filteredResults.length}건)
            </div>
            {filteredResults.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || BookOpen;
              const isSelected = selectedIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectResult(item)}
                  className={`flex items-start justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-900 dark:text-white font-semibold shadow-2xs border border-indigo-200 dark:border-indigo-500/30'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      {/* Title & Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* SubTitle / Description */}
                      {item.subTitle && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed truncate">
                          {item.subTitle}
                        </p>
                      )}

                      {/* Category & Breadcrumb */}
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded">
                          {item.categoryName}
                        </span>
                        {item.parentMenuName && (
                          <>
                            <ChevronRight className="w-3 h-3 text-slate-400" />
                            <span>{item.parentMenuName}</span>
                          </>
                        )}
                        <span className="text-slate-400 font-mono text-[10px]">
                          ({item.path})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 shrink-0 mt-1 pl-2">
                    <CornerDownLeft className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Case 3: Active Query with NO Results */}
        {searchQuery.trim() && filteredResults.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">
              "{searchQuery}" 타이틀 및 항목을 찾을 수 없습니다
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              다른 키워드나 메뉴 명칭으로 검색해 보세요.
            </p>
          </div>
        )}
      </div>

      {/* Dropdown Footer Navigation Helper */}
      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
              ↑↓
            </kbd>{' '}
            이동
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
              ↵
            </kbd>{' '}
            선택
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
              ESC
            </kbd>{' '}
            닫기
          </span>
        </div>
        <div className="hidden sm:block text-slate-400">
          단축키: {isMac ? '⌘K' : 'Ctrl+K'}
        </div>
      </div>
    </div>
  );
};

export default Header;
