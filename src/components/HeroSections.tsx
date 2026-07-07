import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle, 
  Search, 
  Sparkles, 
  Users, 
  Box, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Sun, 
  Moon, 
  Copy,
  Check,
  FileCode
} from 'lucide-react';

interface CodeSnippet {
  react: string;
  html: string;
  css: string;
  js: string;
  fullHtml: string;
}

interface HeroSectionWrapperProps {
  title: string;
  description: string;
  snippet: CodeSnippet;
  children: React.ReactNode;
}

const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({ title, description, snippet, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [codeMode, setCodeMode] = useState<'react' | 'html'>('react');
  const [htmlSubTab, setHtmlSubTab] = useState<'html' | 'css' | 'js'>('html');
  
  const [copied, setCopied] = useState(false);
  const [fullCopied, setFullCopied] = useState(false);

  const handleCopyCode = () => {
    const textToCopy = codeMode === 'react' ? snippet.react : snippet[htmlSubTab];
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleCopyFullSource = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setFullCopied(true);
      setTimeout(() => setFullCopied(false), 1500);
    });
  };

  return (
    <div className="space-y-4">
      {/* Wrapper Header: Controls Toolbar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/40 p-4 rounded-2xl">
        <div>
          <h3 className="text-base font-bold text-slate-800 dark:text-white leading-tight">{title}</h3>
          <p className="text-[12px] text-slate-400 dark:text-slate-500 mt-1">{description}</p>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* 1. Preview/Code toggle tab */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              미리보기
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              코드 보기
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* 2. Device Responsive simulation switcher (only for preview) */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setDevice('desktop')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="데스크톱 뷰"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setDevice('tablet')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="태블릿 뷰"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setDevice('mobile')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="모바일 뷰"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 3. Embedded Theme simulator switcher (only for preview) */}
          {activeTab === 'preview' && (
            <>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setTheme('light')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                  title="라이트 모드 테마"
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                  title="다크 모드 테마"
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 4. Code type toggler (only for code mode) */}
          {activeTab === 'code' && (
            <>
              <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-1">
                <button
                  onClick={() => setCodeMode('react')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${codeMode === 'react' ? 'bg-[#4B62FA] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  React
                </button>
                <button
                  onClick={() => setCodeMode('html')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${codeMode === 'html' ? 'bg-[#4B62FA] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  일반 HTML
                </button>
              </div>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />
            </>
          )}

          {/* 5. Copy Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyCode}
              className={`p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
              title={copied ? "복사 완료!" : "코드 복사"}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>

            {codeMode === 'html' && activeTab === 'code' && (
              <button
                onClick={handleCopyFullSource}
                className={`p-2 rounded-xl transition-all cursor-pointer ${fullCopied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
                title={fullCopied ? "전체 소스 복사됨!" : "전체 소스 복사 (바로 실행용)"}
              >
                {fullCopied ? <Check className="w-4 h-4" /> : <FileCode className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className={`overflow-hidden border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${activeTab === 'preview' && device === 'mobile' ? 'max-w-[375px] mx-auto' : activeTab === 'preview' && device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          /* Live Preview Container with Simulated local Light/Dark class */
          <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-white dark:bg-[#0F172A] transition-colors duration-300 min-h-[300px] flex flex-col justify-center">
              {children}
            </div>
          </div>
        ) : (
          /* Code Preview Panel with inner sub-tabs for static HTML */
          <div className="bg-[#0F172A] flex flex-col min-h-[350px]">
            {/* HTML Mode Sub Tab Bar */}
            {codeMode === 'html' && (
              <div className="flex gap-2 px-5 py-2.5 border-b border-slate-800/80 bg-[#141C2F]">
                {(['html', 'css', 'js'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setHtmlSubTab(tab)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${htmlSubTab === tab ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  >
                    {tab === 'html' ? 'HTML 마크업' : tab === 'css' ? 'CSS 스타일' : 'JS 인터랙션'}
                  </button>
                ))}
              </div>
            )}
            
            {/* Syntax Code block view */}
            <div className="flex-1 overflow-auto p-6 font-mono text-[13px] leading-relaxed text-slate-300 custom-scrollbar select-text max-h-[450px]">
              <pre className="whitespace-pre">
                {codeMode === 'react' ? snippet.react : snippet[htmlSubTab]}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSections: React.FC = () => {
  // Code snippets data map for 5 Hero Variations
  const codeSnippets: Record<string, CodeSnippet> = {
    hero1: {
      react: `import React from 'react';
import { ArrowRight } from 'lucide-react';

const CenteredHero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-white dark:bg-slate-950 min-h-[700px] flex flex-col">
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 lg:px-8 z-50">
        <div className="flex lg:flex-1">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {['제품', '기능', '마켓플레이스', '회사'].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 hover:text-indigo-600">
            로그인 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-8">
          온라인 비즈니스를 풍요롭게 하는 데이터
        </h2>
        <p className="text-lg leading-8 text-slate-600 dark:text-slate-400 mb-10">
          데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요. 모든 분석 정보와 실시간 트렌드를 한 곳에서 확인할 수 있습니다.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500">
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- 1. Centered Hero 마크업 -->
<div class="centered-hero-section">
  <nav class="nav-bar">
    <div class="logo">Logo</div>
    <div class="menu">
      <a href="#">제품</a>
      <a href="#">기능</a>
      <a href="#">회사</a>
    </div>
  </nav>

  <div class="hero-content">
    <h1>온라인 비즈니스를 풍요롭게 하는 데이터</h1>
    <p>데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요.</p>
    <button class="btn-start">시작하기</button>
  </div>
</div>`,
      css: `.centered-hero-section {
  position: relative;
  text-align: center;
  padding: 100px 20px;
  background-color: #ffffff;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
}
.hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  color: #0f172a;
}
.btn-start {
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}`,
      js: `// Centered Hero JS 인터랙션이 필요하지 않습니다.`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; font-family: sans-serif; }
    .centered-hero-section { text-align: center; padding: 100px 20px; }
    .btn-start { background: #4f46e5; color: #fff; padding: 12px 24px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="centered-hero-section">
    <h1>온라인 비즈니스를 풍요롭게 하는 데이터</h1>
    <button class="btn-start">시작하기</button>
  </div>
</body>
</html>`
    },
    hero2: {
      react: `import React from 'react';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';

const ClassicSplitHero = () => {
  return (
    <div className="container mx-auto px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-55 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            새로운 버전 2.0 출시
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.2]">
            몇 분 만에 워크플로우를 현행화하세요
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            최첨단 관리자 패널로 비즈니스 운영을 간소화하세요. 속도와 퍼포먼스를 위해 설계되었습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2">
              지금 시작하기 <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- 2. Classic Split Hero 마크업 -->
<div class="split-hero-container">
  <div class="hero-left">
    <div class="badge">새로운 버전 출시</div>
    <h2>워크플로우를 현행화하세요</h2>
    <p>최첨단 관리자 패널로 비즈니스 운영을 간소화하세요.</p>
    <button class="btn-primary">지금 시작하기</button>
  </div>
  <div class="hero-right">
    <div class="preview-box">
      <!-- 이미지/콘텐츠 삽입 -->
    </div>
  </div>
</div>`,
      css: `.split-hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 60px 40px;
}
.badge {
  display: inline-block;
  background-color: #e0e7ff;
  color: #4f46e5;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
}
.btn-primary {
  background-color: #4f46e5;
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,
      js: `// Split Hero 인터랙션 처리 소스`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; font-family: sans-serif; }
    .split-hero-container { display: grid; grid-template-columns: 1fr 1fr; padding: 60px; }
    .badge { display: inline-block; background: #e0e7ff; color: #4f46e5; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
    .btn-primary { background: #4f46e5; color: #fff; padding: 14px 28px; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="split-hero-container">
    <div class="hero-left">
      <div class="badge">새로운 버전 2.0 출시</div>
      <h2>몇 분 만에 워크플로우를 현행화하세요</h2>
      <button class="btn-primary">지금 시작하기</button>
    </div>
  </div>
</body>
</html>`
    },
    hero3: {
      react: `import React from 'react';

const CenteredElegantHero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 px-8 py-24 text-center">
      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
          복잡성 없이 인프라를 확장하세요
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 rounded-2xl font-bold">
            무료로 체험하기
          </button>
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- 3. Centered Elegant Hero 마크업 -->
<div class="elegant-hero">
  <div class="elegant-inner">
    <h2>복잡성 없이 인프라를 확장하세요</h2>
    <p>아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.</p>
    <div class="buttons">
      <button class="btn-elegant-white">무료로 체험하기</button>
    </div>
  </div>
</div>`,
      css: `.elegant-hero {
  background-color: #020617;
  padding: 100px 20px;
  text-align: center;
}
.elegant-inner h2 {
  color: #ffffff;
  font-size: 54px;
  font-weight: 850;
  line-height: 1.1;
}
.elegant-inner p {
  color: #94a3b8;
  font-size: 18px;
}
.btn-elegant-white {
  background-color: #ffffff;
  color: #020617;
  border: none;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,
      js: `// Elegant Hero Dynamic Background JS (Optional)`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; font-family: sans-serif; background: #020617; }
    .elegant-hero { padding: 100px 20px; text-align: center; }
    .elegant-inner h2 { color: #ffffff; font-size: 40px; }
    .elegant-inner p { color: #94a3b8; }
    .btn-elegant-white { background: #ffffff; color: #020617; padding: 14px 32px; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="elegant-hero">
    <div class="elegant-inner">
      <h2>복잡성 없이 인프라를 확장하세요</h2>
      <p>아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.</p>
      <button class="btn-elegant-white">무료로 체험하기</button>
    </div>
  </div>
</body>
</html>`
    },
    hero4: {
      react: `import React from 'react';
import { Search } from 'lucide-react';

const SearchOrientedHero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 p-8 sm:p-16 shadow-sm">
      <div className="max-w-3xl space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
           무엇을 도와드릴까요?
        </h2>
        <div className="relative">
          <input 
            type="text" 
            className="block w-full pl-6 pr-12 py-5 bg-slate-50 border border-slate-200 rounded-3xl"
            placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..."
          />
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- 4. Search Oriented Hero 마크업 -->
<div class="search-hero">
  <h2>무엇을 도와드릴까요?</h2>
  <div class="search-wrapper">
    <input type="text" placeholder="문서, 컴포넌트 검색..." class="search-input" />
    <button class="search-btn">검색</button>
  </div>
</div>`,
      css: `.search-hero {
  background-color: #ffffff;
  padding: 60px 40px;
  border-radius: 24px;
}
.search-wrapper {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.search-input {
  flex: 1;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  font-size: 16px;
}
.search-btn {
  background-color: #4f46e5;
  color: #fff;
  padding: 16px 32px;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
}`,
      js: `// Search input focus event binding`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; font-family: sans-serif; padding: 40px; }
    .search-hero { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 60px; }
    .search-wrapper { display: flex; gap: 12px; margin-top: 24px; }
    .search-input { flex: 1; padding: 16px; border: 1px solid #e2e8f0; border-radius: 16px; }
    .search-btn { background: #4f46e5; color: #fff; padding: 16px 32px; border: none; border-radius: 16px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="search-hero">
    <h2>무엇을 도와드릴까요?</h2>
    <div class="search-wrapper">
      <input type="text" placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..." class="search-input" />
      <button class="search-btn">검색</button>
    </div>
  </div>
</body>
</html>`
    },
    hero5: {
      react: `import React from 'react';
import { ArrowRight } from 'lucide-react';

const MinimalistImageHero = () => {
  return (
    <div className="relative h-[600px] rounded-[32px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
        alt="사무실" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/60"></div>
      <div className="absolute inset-0 flex flex-col justify-center px-12 max-w-4xl space-y-6">
        <h2 className="text-5xl font-bold text-white">
           모든 픽셀에 담긴 우아함.
        </h2>
        <button className="w-fit px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold">
           무료 체험 시작
        </button>
      </div>
    </div>
  );
};`,
      html: `<!-- 5. Minimalist Image Hero 마크업 -->
<div class="image-hero">
  <div class="hero-bg-overlay"></div>
  <div class="hero-text-overlay">
    <h2>모든 픽셀에 담긴 우아함.</h2>
    <button class="btn-white-hero">무료 체험 시작</button>
  </div>
</div>`,
      css: `.image-hero {
  position: relative;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070');
  background-size: cover;
  background-position: center;
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
}
.hero-text-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  z-index: 10;
}
.hero-text-overlay h2 {
  color: #ffffff;
  font-size: 44px;
  font-weight: 800;
}
.btn-white-hero {
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  margin-top: 20px;
}`,
      js: `// Minimalist image background sizing and trigger logic`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; font-family: sans-serif; }
    .image-hero { position: relative; height: 500px; background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070') center/cover; }
    .hero-bg-overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.6); }
    .hero-text-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 48px; z-index: 10; }
    .hero-text-overlay h2 { color: #fff; font-size: 36px; margin: 0; }
    .btn-white-hero { background: #4f46e5; color: #fff; padding: 14px 28px; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; width: fit-content; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="image-hero">
    <div class="hero-bg-overlay"></div>
    <div class="hero-text-overlay">
      <h2>모든 픽셀에 담긴 우아함.</h2>
      <button class="btn-white-hero">무료 체험 시작</button>
    </div>
  </div>
</body>
</html>`
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            히어로 섹션
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>페이지</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">히어로 섹션</span>
          </div>
        </div>
      </div>

      {/* 1. Simple centered hero */}
      <HeroSectionWrapper 
        title="간단한 중앙 정렬 히어로" 
        description="깔끔한 타이포그래피와 중앙 집중형 레이아웃의 기본형 히어로 섹션입니다."
        snippet={codeSnippets.hero1}
      >
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-white dark:bg-slate-950 min-h-[600px] flex flex-col w-full">
          {/* Navbar */}
          <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 lg:px-8 z-50">
            <div className="flex lg:flex-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {['제품', '기능', '마켓플레이스', '회사'].map((item) => (
                <a key={item} href="#" className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 hover:text-indigo-600">
                로그인 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Background Blurred Elements */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-slate-900/20 dark:hover:ring-white/20 transition-all flex items-center gap-2">
                다음 투자 유치 라운드를 발표합니다.
                <a href="#" className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                  자세히 보기 <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-8">
              온라인 비즈니스를 풍요롭게 하는 데이터
            </h2>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-400 mb-10">
              데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요. 모든 분석 정보와 실시간 트렌드를 한 곳에서 확인할 수 있습니다.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
                시작하기
              </button>
              <a href="#" className="text-sm font-bold leading-6 text-slate-900 dark:text-white flex items-center gap-1 group">
                더 알아보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </HeroSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 2. Classic Split Hero */}
      <HeroSectionWrapper
        title="클래식 분할 배치 히어로"
        description="한눈에 띄는 뱃지와 소셜 신뢰도 증명 리스트를 결합한 좌우 분할식 컴포넌트입니다."
        snippet={codeSnippets.hero2}
      >
        <section className="relative overflow-hidden bg-white dark:bg-slate-900 w-full px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                새로운 버전 2.0 출시
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.2]">
                몇 분 만에 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">워크플로우</span>를 현행화하세요
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                최첨단 관리자 패널로 비즈니스 운영을 간소화하세요. 속도, 성능, 그리고 탁월한 사용자 경험을 위해 설계되었습니다.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-200 dark:shadow-none hover:-translate-y-1">
                  지금 시작하기 <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-600 transition-all">
                  <Play className="w-5 h-5 fill-current" /> 데모 영상 보기
                </button>
              </div>
              <div className="flex items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} alt="사용자" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold text-white">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">10,000개 이상의 기업이 함께합니다</p>
                </div>
              </div>
            </div>
            <div className="relative animate-in zoom-in duration-1000">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-[40px] shadow-2xl overflow-hidden group">
                <div className="bg-slate-900 rounded-[36px] overflow-hidden aspect-[4/3] relative">
                   <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" 
                    alt="대시보드 미리보기" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent flex items-end p-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-full flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-left">월간 수익</p>
                          <p className="text-emerald-400 text-sm flex items-center gap-1 font-bold">+12.5% 증가 폭</p>
                        </div>
                        <div className="text-white text-2xl font-black">$45,280</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HeroSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 3. Centered Elegant Hero */}
      <HeroSectionWrapper
        title="우아한 분위기의 중앙 정렬 히어로"
        description="다크 모드와 그라디언트 글로우 백드롭으로 고급스러운 브랜드 이미지를 심어주는 레이아웃입니다."
        snippet={codeSnippets.hero3}
      >
        <section className="relative w-full overflow-hidden bg-slate-950 px-8 py-24 text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mx-auto w-fit px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center gap-2 text-white/80 text-sm">
              <span className="bg-emerald-500 w-2 h-2 rounded-full animate-pulse"></span>
              엔터프라이즈 지원. SOC2 규정 준수.
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              복잡성 없이 <br className="hidden md:block" /> 인프라를 확장하세요
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다. 놀라운 인터페이스를 구축하는 데 필요한 모든 것을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                무료로 체험하기
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                영업팀 문의하기
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
               {[
                 { val: "99.9%", lab: "가동률" },
                 { val: "24/7", lab: "고객 지원" },
                 { val: "<10ms", lab: "대기 시간" },
                 { val: "100k+", lab: "활성 사용자" }
               ].map((stat, i) => (
                 <div key={i}>
                   <p className="text-3xl font-black text-white">{stat.val}</p>
                   <p className="text-slate-500 font-medium">{stat.lab}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </HeroSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 4. Search Oriented Hero */}
      <HeroSectionWrapper
        title="검색 포커스형 가이드 히어로"
        description="검색 인풋 필드를 상단 중앙에 배치하여 도움말이나 서비스 탐색에 특화된 레이아웃입니다."
        snippet={codeSnippets.hero4}
      >
        <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-16 lg:p-24 shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Sparkles className="w-64 h-64 text-indigo-500" />
          </div>
          <div className="max-w-3xl space-y-8 relative z-10 text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
               무엇을 도와드릴까요?
            </h2>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-16 pr-12 py-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-3xl text-lg focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white dark:placeholder:text-slate-500"
                placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..."
              />
              <div className="absolute inset-y-0 right-0 py-3 pr-3">
                <button className="h-full px-6 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
                  검색
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-slate-400">인기 검색어:</span>
              {['API 문서', '설치', '사용자 정의', '배포'].map((tag) => (
                <button key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
             <div className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">시작하기</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">프로젝트를 단시간에 시작하고 실행할 수 있는 필수 가이드입니다.</p>
             </div>
             <div className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-indigo-500" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">팀 협업</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">프로젝트 전반에 걸쳐 팀과 역할을 효과적으로 관리하는 방법을 알아보세요.</p>
             </div>
             <div className="p-8 bg-slate-50 dark:bg-slate-900/30 rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Box className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">컴포넌트 라이브러리</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">미리 구축된 아름다운 컴포넌트의 방대한 라이브러리를 둘러보세요.</p>
             </div>
          </div>
        </section>
      </HeroSectionWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 5. Minimalist Image Hero */}
      <HeroSectionWrapper
        title="미니멀 이미지 배경 히어로"
        description="아름다운 사무실 전경 배경을 깔아 입체적인 시인성을 확보하는 정적인 무드의 히어로 섹션입니다."
        snippet={codeSnippets.hero5}
      >
        <section className="relative h-[550px] w-full rounded-[32px] overflow-hidden group">
           <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
            alt="사무실" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
           <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-12 md:px-24 max-w-4xl space-y-6 text-left">
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
                 모든 픽셀에 <br /> 담긴 우아함.
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
                 우리는 단순함과 집중의 힘을 믿습니다. 보이지 않는 곳에서 강력한 도구를 제공하여 여러분의 콘텐츠가 빛날 수 있도록 플랫폼을 설계했습니다.
              </p>
              <div className="flex items-center gap-6 pt-4">
                 <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:-translate-y-1">
                    무료 체험 시작
                 </button>
                 <div className="flex items-center gap-2 group/link cursor-pointer">
                    <span className="text-white font-bold group-hover/link:underline">우리의 철학에 대해 자세히 알아보기</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover/link:translate-x-1 transition-transform" />
                 </div>
              </div>
           </div>
        </section>
      </HeroSectionWrapper>
    </div>
  );
};

export default HeroSections;
