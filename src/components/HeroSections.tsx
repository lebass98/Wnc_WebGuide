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
  Check
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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.fullHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
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
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'desktop' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Monitor className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    데스크톱 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setDevice('tablet')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'tablet' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Tablet className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    태블릿 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setDevice('mobile')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${device === 'mobile' ? 'bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Smartphone className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    모바일 뷰
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
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
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Sun className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    라이트 모드 테마
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`relative group p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Moon className="w-4 h-4" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                    다크 모드 테마
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
                  </div>
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
              className={`relative group p-2 rounded-xl transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700'}`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2 py-1 text-[10px] font-bold text-white bg-slate-900/90 dark:bg-slate-800/95 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 pointer-events-none whitespace-nowrap z-50">
                {copied ? "복사 완료!" : "HTML/CSS/JS 전체 소스 복사"}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
              </div>
            </button>
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
            <div className="flex-1 overflow-x-auto p-4 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed text-slate-300 custom-scrollbar select-text max-h-[450px]">
              <pre className="whitespace-pre-wrap sm:whitespace-pre break-all sm:break-normal">
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
    <div className="relative isolate px-4 sm:px-6 pt-12 sm:pt-14 bg-white dark:bg-slate-950 min-h-[500px] sm:min-h-[600px] flex flex-col w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6 lg:px-8 z-50">
        <div className="flex items-center lg:flex-1">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
        </div>
        <div className="hidden md:flex md:gap-x-8 lg:gap-x-12">
          {['제품','기능','회사'].map((item) => (
            <a key={item} href="#" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex justify-end lg:flex-1">
          <a href="#" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 hover:text-indigo-600">
            로그인 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-2xl py-20 sm:py-28 lg:py-36 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-8 leading-tight">
          온라인 비즈니스를 풍요롭게 하는 데이터
        </h2>
        <p className="text-xs sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6 sm:mb-10 max-w-lg mx-auto">
          데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요.
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <button className="rounded-lg bg-indigo-600 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition-all">
            시작하기
          </button>
          <a href="#" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group hover:text-indigo-600">
            더 알아보기 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};`,
      html: `<!-- 1. Centered Hero 마크업 -->
<div class="centered-hero-section">
  <nav class="nav-bar">
    <div class="logo-box">Logo</div>
    <div class="menu">
      <a href="#">제품</a>
      <a href="#">기능</a>
      <a href="#">회사</a>
    </div>
    <a href="#" class="auth-link">로그인 &rarr;</a>
  </nav>
  <div class="hero-content">
    <h1>온라인 비즈니스를 풍요롭게 하는 데이터</h1>
    <p>데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요.</p>
    <div class="btn-group">
      <button class="btn-start">시작하기</button>
      <a href="#" class="btn-link">더 알아보기 &rarr;</a>
    </div>
  </div>
</div>`,
      css: `.centered-hero-section {
  position: relative;
  text-align: center;
  padding: 60px 16px;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 40px;
}
.menu { display: none; gap: 24px; }
.menu a, .auth-link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}
.menu a:hover, .auth-link:hover { color: #4f46e5; }
.hero-content { max-width: 700px; margin: 0 auto; }
.hero-content h1 {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
  margin: 0 0 16px;
}
.hero-content p {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 28px;
}
.btn-group { display: flex; align-items: center; justify-content: center; gap: 16px; }
.btn-start {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.btn-link { color: #0f172a; text-decoration: none; font-size: 13px; font-weight: 700; }

@media (min-width: 768px) {
  .menu { display: flex; }
  .hero-content h1 { font-size: 48px; }
  .hero-content p { font-size: 18px; }
  .centered-hero-section { padding: 100px 20px; }
}`,
      js: `// Centered Hero JS 인터랙션이 필요하지 않습니다.`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centered Hero</title>
  <style>
    body { margin: 0; font-family: sans-serif; }
    .centered-hero-section { text-align: center; padding: 60px 16px; }
    .hero-content h1 { font-size: 28px; color: #0f172a; margin: 0 0 16px; }
    .btn-start { background: #4f46e5; color: #fff; padding: 10px 20px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    @media (min-width: 768px) {
      .hero-content h1 { font-size: 48px; }
      .centered-hero-section { padding: 100px 20px; }
    }
  </style>
</head>
<body>
  <div class="centered-hero-section">
    <div class="hero-content">
      <h1>온라인 비즈니스를 풍요롭게 하는 데이터</h1>
      <button class="btn-start">시작하기</button>
    </div>
  </div>
</body>
</html>`
    },
    hero2: {
      react: `import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const ClassicSplitHero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 w-full px-4 sm:px-8 py-10 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            새로운 버전 2.0 출시
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.25]">
            몇 분 만에 워크플로우를 현행화하세요
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            최첨단 관리자 패널로 비즈니스 운영을 간소화하세요. 속도와 성능을 위해 설계되었습니다.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="px-5 py-3 sm:px-8 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md">
              지금 시작하기 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="px-5 py-3 sm:px-8 sm:py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" /> 데모 영상
            </button>
          </div>
        </div>
        {/* Right: Image card */}
        <div className="relative max-w-md mx-auto lg:max-w-none w-full">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 rounded-[24px] sm:rounded-[32px] shadow-xl">
            <div className="bg-slate-900 rounded-[22px] sm:rounded-[30px] overflow-hidden aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                alt="대시보드"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent flex items-end p-4 sm:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl w-full flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs sm:text-sm font-bold">월간 수익</p>
                    <p className="text-emerald-400 text-[10px] sm:text-xs font-bold">+12.5%</p>
                  </div>
                  <div className="text-white text-base sm:text-2xl font-black">$45,280</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};`,
      html: `<!-- 2. Classic Split Hero 마크업 -->
<section class="split-hero">
  <div class="split-grid">
    <div class="hero-left">
      <div class="badge">새로운 버전 2.0 출시</div>
      <h2>몇 분 만에 워크플로우를 현행화하세요</h2>
      <p>최첨단 관리자 패널로 비즈니스 운영을 간소화하세요.</p>
      <div class="btn-group">
        <button class="btn-primary">지금 시작하기</button>
        <button class="btn-secondary">데모 영상</button>
      </div>
    </div>
    <div class="hero-right">
      <div class="preview-card">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" alt="대시보드" />
      </div>
    </div>
  </div>
</section>`,
      css: `.split-hero {
  background: #fff;
  padding: 40px 16px;
}
.split-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}
.badge {
  display: inline-block;
  background: #e0e7ff;
  color: #4f46e5;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
}
.hero-left h2 {
  font-size: 24px;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.25;
  margin: 0 0 16px;
}
.hero-left p {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 24px;
}
.btn-group { display: flex; flex-wrap: wrap; gap: 12px; }
.btn-primary {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}
.btn-secondary {
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}
.preview-card { border-radius: 20px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,.1); }
.preview-card img { width: 100%; height: auto; display: block; }

@media (min-width: 1024px) {
  .split-grid { grid-template-columns: 1fr 1fr; padding: 80px 40px; }
  .hero-left h2 { font-size: 48px; }
  .hero-left p { font-size: 18px; }
  .split-hero { padding: 80px 40px; }
}`,
      js: `// Split Hero 인터랙션 처리 소스`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic Split Hero</title>
  <style>
    body { margin: 0; font-family: sans-serif; }
    .split-hero { padding: 40px 16px; }
    .split-grid { display: grid; grid-template-columns: 1fr; gap: 40px; max-width: 1200px; margin: 0 auto; }
    .badge { display: inline-block; background: #e0e7ff; color: #4f46e5; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; }
    .btn-primary { background: #4f46e5; color: #fff; padding: 12px 24px; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; }
    .preview-card img { width: 100%; border-radius: 16px; }
    @media (min-width: 1024px) {
      .split-grid { grid-template-columns: 1fr 1fr; }
      .split-hero { padding: 80px 40px; }
    }
  </style>
</head>
<body>
  <section class="split-hero">
    <div class="split-grid">
      <div>
        <div class="badge">새로운 버전 2.0 출시</div>
        <h2>몇 분 만에 워크플로우를 현행화하세요</h2>
        <button class="btn-primary">지금 시작하기</button>
      </div>
      <div class="preview-card">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" alt="대시보드" />
      </div>
    </div>
  </section>
</body>
</html>`
    },
    hero3: {
      react: `import React from 'react';

const CenteredElegantHero = () => {
  const stats = [
    { val: '99.9%', lab: '가동률' },
    { val: '24/7',  lab: '고객 지원' },
    { val: '<10ms', lab: '대기 시간' },
    { val: '100k+', lab: '사용자' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 px-4 sm:px-8 py-12 sm:py-24 text-center">
      {/* Glow blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-indigo-500 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500 rounded-full blur-[80px] sm:blur-[120px] translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-10">
        <div className="mx-auto w-fit px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 text-white/80 text-xs">
          <span className="bg-emerald-500 w-1.5 h-1.5 rounded-full animate-pulse" />
          엔터프라이즈 지원. SOC2 준수.
        </div>
        <h2 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          복잡성 없이 인프라를 확장하세요
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 bg-white text-slate-950 rounded-2xl text-xs sm:text-sm font-bold">
            무료로 체험하기
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-lg sm:text-3xl font-black text-white">{s.val}</p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1">{s.lab}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};`,
      html: `<!-- 3. Centered Elegant Hero 마크업 -->
<section class="elegant-hero">
  <div class="elegant-inner">
    <div class="status-badge"><span class="pulse"></span> 엔터프라이즈 지원. SOC2 준수.</div>
    <h2>복잡성 없이 인프라를 확장하세요</h2>
    <p>아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.</p>
    <button class="btn-white">무료로 체험하기</button>
    <div class="stats-grid">
      <div class="stat"><span class="val">99.9%</span><span class="lab">가동률</span></div>
      <div class="stat"><span class="val">24/7</span><span class="lab">고객 지원</span></div>
      <div class="stat"><span class="val">&lt;10ms</span><span class="lab">대기 시간</span></div>
      <div class="stat"><span class="val">100k+</span><span class="lab">사용자</span></div>
    </div>
  </div>
</section>`,
      css: `.elegant-hero {
  background: #020617;
  padding: 60px 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.elegant-inner {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  padding: 6px 14px;
  border-radius: 9999px;
  color: rgba(255,255,255,.8);
  font-size: 12px;
  margin-bottom: 24px;
}
.pulse {
  width: 6px; height: 6px;
  background: #10b981;
  border-radius: 50%;
  display: inline-block;
}
.elegant-inner h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 16px;
}
.elegant-inner p {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 32px;
}
.btn-white {
  background: #fff;
  color: #020617;
  border: none;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,.1);
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat .val { color: #fff; font-size: 22px; font-weight: 900; }
.stat .lab { color: #64748b; font-size: 11px; }

@media (min-width: 768px) {
  .elegant-hero { padding: 100px 32px; }
  .elegant-inner h2 { font-size: 54px; }
  .elegant-inner p { font-size: 18px; }
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
  .stat .val { font-size: 32px; }
}`,
      js: `// Elegant Hero Dynamic Background JS (Optional)`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centered Elegant Hero</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #020617; color: #fff; text-align: center; }
    .elegant-hero { padding: 60px 16px; }
    .elegant-inner h2 { font-size: 28px; }
    .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.1); }
    .stat .val { font-size: 22px; font-weight: 900; display: block; }
    .stat .lab { font-size: 11px; color: #64748b; }
    .btn-white { background: #fff; color: #020617; padding: 12px 28px; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; }
    @media (min-width: 768px) {
      .elegant-inner h2 { font-size: 54px; }
      .stats-grid { grid-template-columns: repeat(4, 1fr); }
      .elegant-hero { padding: 100px 32px; }
    }
  </style>
</head>
<body>
  <section class="elegant-hero">
    <div class="elegant-inner">
      <h2>복잡성 없이 인프라를 확장하세요</h2>
      <p style="color:#94a3b8">아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다.</p>
      <button class="btn-white">무료로 체험하기</button>
      <div class="stats-grid">
        <div class="stat"><span class="val">99.9%</span><span class="lab">가동률</span></div>
        <div class="stat"><span class="val">24/7</span><span class="lab">고객 지원</span></div>
        <div class="stat"><span class="val">&lt;10ms</span><span class="lab">대기 시간</span></div>
        <div class="stat"><span class="val">100k+</span><span class="lab">사용자</span></div>
      </div>
    </div>
  </section>
</body>
</html>`
    },
    hero4: {
      react: `import React from 'react';
import { Search } from 'lucide-react';

const SearchOrientedHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 sm:p-10 lg:p-20 shadow-sm">
      <div className="max-w-3xl space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          무엇을 도와드릴까요?
        </h2>
        <div className="relative flex items-center">
          <div className="absolute left-4 sm:left-6 text-slate-400 pointer-events-none">
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 sm:pl-16 pr-24 sm:pr-32 py-4 sm:py-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl sm:rounded-3xl text-sm outline-none"
            placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..."
          />
          <div className="absolute right-2 inset-y-2 flex">
            <button className="h-full px-4 sm:px-6 bg-indigo-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold">
              검색
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          { title: '시작하기', desc: '프로젝트를 단시간에 실행할 수 있는 필수 가이드입니다.' },
          { title: 'API 문서', desc: '모든 API 엔드포인트와 사용 방법을 확인하세요.' },
          { title: '컴포넌트', desc: '재사용 가능한 UI 컴포넌트 라이브러리를 탐색하세요.' },
        ].map((card, i) => (
          <div key={i} className="p-5 sm:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-700/50 text-left">
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};`,
      html: `<!-- 4. Search Oriented Hero 마크업 -->
<section class="search-hero">
  <div class="search-content">
    <h2>무엇을 도와드릴까요?</h2>
    <div class="search-wrapper">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
      <input type="text" class="search-input" placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..." />
      <button class="search-btn">검색</button>
    </div>
  </div>
  <div class="card-grid">
    <div class="info-card"><h4>시작하기</h4><p>프로젝트를 단시간에 실행할 수 있는 필수 가이드입니다.</p></div>
    <div class="info-card"><h4>API 문서</h4><p>모든 API 엔드포인트와 사용 방법을 확인하세요.</p></div>
    <div class="info-card"><h4>컴포넌트</h4><p>재사용 가능한 UI 컴포넌트 라이브러리를 탐색하세요.</p></div>
  </div>
</section>`,
      css: `.search-hero {
  background: #fff;
  border: 1px solid #f1f5f9;
  border-radius: 24px;
  padding: 32px 16px;
}
.search-content { max-width: 800px; }
.search-content h2 {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px;
}
.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 16px;
  width: 20px;
  height: 20px;
  color: #94a3b8;
  pointer-events: none;
}
.search-input {
  width: 100%;
  padding: 14px 110px 14px 44px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}
.search-btn {
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 32px;
}
.info-card {
  padding: 20px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
}
.info-card h4 { font-size: 14px; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
.info-card p  { font-size: 12px; color: #64748b; margin: 0; line-height: 1.5; }

@media (min-width: 640px) {
  .search-hero { padding: 60px 40px; }
  .search-content h2 { font-size: 32px; }
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}`,
      js: `// Search input focus event binding`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Oriented Hero</title>
  <style>
    body { margin: 0; font-family: sans-serif; padding: 20px; }
    .search-hero { background: #fff; border: 1px solid #f1f5f9; border-radius: 24px; padding: 32px 16px; }
    .search-wrapper { position: relative; display: flex; align-items: center; margin-top: 20px; }
    .search-input { width: 100%; padding: 14px 110px 14px 44px; border: 1px solid #e2e8f0; border-radius: 16px; font-size: 14px; box-sizing: border-box; }
    .search-btn { position: absolute; right: 8px; top: 8px; bottom: 8px; background: #4f46e5; color: #fff; border: none; padding: 0 16px; border-radius: 10px; font-weight: 700; cursor: pointer; }
    .card-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 32px; }
    .info-card { padding: 20px; background: #f8fafc; border-radius: 16px; }
    @media (min-width: 640px) {
      .search-hero { padding: 60px 40px; }
      .card-grid { grid-template-columns: repeat(3, 1fr); }
    }
  </style>
</head>
<body>
  <section class="search-hero">
    <h2>무엇을 도와드릴까요?</h2>
    <div class="search-wrapper">
      <input type="text" class="search-input" placeholder="문서, 컴포넌트, 또는 튜토리얼 검색..." />
      <button class="search-btn">검색</button>
    </div>
    <div class="card-grid">
      <div class="info-card"><h4>시작하기</h4><p>프로젝트를 단시간에 실행할 수 있는 필수 가이드입니다.</p></div>
      <div class="info-card"><h4>API 문서</h4><p>모든 API 엔드포인트와 사용 방법을 확인하세요.</p></div>
      <div class="info-card"><h4>컴포넌트</h4><p>재사용 가능한 UI 컴포넌트 라이브러리를 탐색하세요.</p></div>
    </div>
  </section>
</body>
</html>`
    },
    hero5: {
      react: `import React from 'react';
import { ArrowRight } from 'lucide-react';

const MinimalistImageHero = () => {
  return (
    <section className="relative h-[350px] sm:h-[480px] lg:h-[560px] w-full rounded-[28px] sm:rounded-[40px] overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
        alt="사무실"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 max-w-4xl space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
          모든 픽셀에<br className="hidden sm:block" /> 담긴 우아함.
        </h2>
        <p className="text-xs sm:text-base lg:text-xl text-slate-200 leading-relaxed max-w-md">
          우리는 단순함과 집중의 힘을 믿습니다. 보이지 않는 곳에서 강력한 도구를 제공합니다.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <button className="px-5 py-2.5 sm:px-8 sm:py-4 bg-indigo-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-lg hover:-translate-y-1 transition-transform w-fit">
            무료 체험 시작
          </button>
          <a href="#" className="flex items-center gap-1 text-white text-xs sm:text-sm font-bold group/link hover:underline w-fit">
            철학 알아보기 <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};`,
      html: `<!-- 5. Minimalist Image Hero 마크업 -->
<section class="image-hero">
  <div class="img-overlay"></div>
  <div class="img-content">
    <h2>모든 픽셀에 담긴 우아함.</h2>
    <p>우리는 단순함과 집중의 힘을 믿습니다. 보이지 않는 곳에서 강력한 도구를 제공합니다.</p>
    <div class="img-actions">
      <button class="btn-trial">무료 체험 시작</button>
      <a href="#" class="btn-more">철학 알아보기 &rarr;</a>
    </div>
  </div>
</section>`,
      css: `.image-hero {
  position: relative;
  height: 350px;
  border-radius: 24px;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070');
  background-size: cover;
  background-position: center;
}
.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15,23,42,.9) 0%, rgba(15,23,42,.5) 50%, transparent 100%);
}
.img-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  max-width: 640px;
  z-index: 10;
}
.img-content h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 12px;
}
.img-content p {
  color: #e2e8f0;
  font-size: 12px;
  line-height: 1.6;
  margin: 0 0 20px;
  max-width: 380px;
}
.img-actions { display: flex; flex-direction: column; gap: 12px; }
.btn-trial {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  width: fit-content;
}
.btn-more {
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

@media (min-width: 640px) {
  .image-hero { height: 480px; border-radius: 32px; }
  .img-content { padding: 48px; }
  .img-content h2 { font-size: 48px; }
  .img-content p { font-size: 16px; }
  .img-actions { flex-direction: row; align-items: center; }
  .btn-trial { padding: 14px 28px; font-size: 14px; }
}

@media (min-width: 1024px) {
  .image-hero { height: 560px; }
  .img-content h2 { font-size: 64px; }
}`,
      js: `// Minimalist image background sizing and trigger logic`,
      fullHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minimalist Image Hero</title>
  <style>
    body { margin: 0; font-family: sans-serif; }
    .image-hero { position: relative; height: 350px; border-radius: 24px; overflow: hidden; background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070') center/cover; }
    .img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(15,23,42,.9), rgba(15,23,42,.4), transparent); }
    .img-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 24px; z-index: 10; }
    .img-content h2 { color: #fff; font-size: 24px; font-weight: 800; margin: 0 0 12px; }
    .img-content p { color: #e2e8f0; font-size: 12px; margin: 0 0 20px; }
    .btn-trial { background: #4f46e5; color: #fff; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 700; cursor: pointer; }
    @media (min-width: 640px) {
      .image-hero { height: 480px; border-radius: 32px; }
      .img-content { padding: 48px; }
      .img-content h2 { font-size: 48px; }
      .btn-trial { padding: 14px 28px; }
    }
    @media (min-width: 1024px) {
      .image-hero { height: 560px; }
      .img-content h2 { font-size: 64px; }
    }
  </style>
</head>
<body>
  <section class="image-hero">
    <div class="img-overlay"></div>
    <div class="img-content">
      <h2>모든 픽셀에 담긴 우아함.</h2>
      <p>우리는 단순함과 집중의 힘을 믿습니다.</p>
      <button class="btn-trial">무료 체험 시작</button>
    </div>
  </section>
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
        <div className="relative isolate px-3 sm:px-6 pt-10 sm:pt-14 bg-white dark:bg-slate-950 min-h-[420px] sm:min-h-[600px] flex flex-col w-full rounded-xl overflow-hidden">
          {/* Navbar */}
          <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6 lg:px-8 z-50">
            <div className="flex lg:flex-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:gap-x-8 lg:gap-x-12">
              {['제품', '기능', '회사'].map((item) => (
                <a key={item} href="#" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 hover:text-indigo-600">
                로그인 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>

          {/* Background Blurred Elements */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-36 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-xs sm:text-sm leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-slate-900/20 dark:hover:ring-white/20 transition-all flex items-center gap-2">
                투자 유치 라운드 발표
                <a href="#" className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                  자세히 보기 <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-8 leading-tight">
              온라인 비즈니스를 풍요롭게 하는 데이터
            </h2>
            <p className="text-xs sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6 sm:mb-10 max-w-lg mx-auto">
              데이터 기반 의사결정으로 비즈니스의 성공 가능성을 높이세요. 모든 분석 정보와 실시간 트렌드를 한 곳에서 확인할 수 있습니다.
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <button className="rounded-lg bg-indigo-600 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition-all">
                시작하기
              </button>
              <a href="#" className="text-xs sm:text-sm font-bold leading-6 text-slate-900 dark:text-white flex items-center gap-1 group">
                더 알아보기 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
        <section className="relative overflow-hidden bg-white dark:bg-slate-900 w-full px-3 sm:px-8 py-6 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-700 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                새로운 버전 2.0 출시
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.25]">
                몇 분 만에 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">워크플로우</span>를 현행화하세요
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                최첨단 관리자 패널로 비즈니스 운영을 간소화하세요. 속도, 성능, 그리고 탁월한 사용자 경험을 위해 설계되었습니다.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button className="px-5 py-3 sm:px-8 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md hover:-translate-y-1">
                  지금 시작하기 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="px-5 py-3 sm:px-8 sm:py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> 데모 영상
                </button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 sm:pt-8 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} alt="사용자" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-slate-850" />
                  ))}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-850 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
                    +2k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">10,000개 이상의 기업 협업</p>
                </div>
              </div>
            </div>
            <div className="relative animate-in zoom-in duration-1000 max-w-md mx-auto lg:max-w-none w-full">
              <div className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 rounded-[24px] sm:rounded-[40px] shadow-xl overflow-hidden group">
                <div className="bg-slate-900 rounded-[22px] sm:rounded-[38px] overflow-hidden aspect-[4/3] relative">
                   <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" 
                    alt="대시보드 미리보기" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent flex items-end p-4 sm:p-8">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-full flex items-center justify-between">
                        <div>
                          <p className="text-white text-xs sm:text-sm font-bold text-left">월간 수익</p>
                          <p className="text-emerald-400 text-[10px] sm:text-xs flex items-center gap-1 font-bold">+12.5%</p>
                        </div>
                        <div className="text-white text-base sm:text-2xl font-black">$45,280</div>
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
        <section className="relative w-full overflow-hidden bg-slate-950 px-4 sm:px-8 py-8 sm:py-24 text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-indigo-500 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500 rounded-full blur-[80px] sm:blur-[120px] translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="mx-auto w-fit px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center gap-2 text-white/80 text-xs">
              <span className="bg-emerald-500 w-1.5 h-1.5 rounded-full animate-pulse"></span>
              엔터프라이즈 지원. SOC2 준수.
            </div>
            <h2 className="text-2xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              복잡성 없이 <br className="hidden md:block" /> 인프라를 확장하세요
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              아름답게 디자인되고 세심하게 제작된 개발자용 UI 컴포넌트입니다. 놀라운 인터페이스를 구축하는 데 필요한 모든 것을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
              <button className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 bg-white text-slate-950 rounded-2xl text-xs sm:text-sm font-bold hover:bg-slate-200 transition-all">
                무료로 체험하기
              </button>
              <button className="w-full sm:w-auto px-6 py-3 sm:px-10 sm:py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-xs sm:text-sm font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                영업팀 문의하기
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 pt-5 sm:pt-12 border-t border-white/10">
               {[
                 { val: "99.9%", lab: "가동률" },
                 { val: "24/7", lab: "고객 지원" },
                 { val: "<10ms", lab: "대기 시간" },
                 { val: "100k+", lab: "사용자" }
               ].map((stat, i) => (
                 <div key={i}>
                   <p className="text-lg sm:text-3xl font-black text-white">{stat.val}</p>
                   <p className="text-[11px] sm:text-xs text-slate-500 font-medium">{stat.lab}</p>
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
        <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 sm:p-10 lg:p-20 shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Sparkles className="w-64 h-64 text-indigo-500" />
          </div>
          <div className="max-w-3xl space-y-6 sm:space-y-8 relative z-10 text-left">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
               무엇을 도와드릴까요?
            </h2>
            <div className="relative group flex items-center">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 sm:pl-16 pr-16 sm:pr-32 py-3 sm:py-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl sm:rounded-3xl text-xs sm:text-lg focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white dark:placeholder:text-slate-500"
                placeholder="컴포넌트 검색..."
              />
              <div className="absolute inset-y-0 right-0 py-1.5 pr-1.5 sm:py-3 sm:pr-3 flex items-center">
                <button className="h-full px-3 sm:px-6 bg-indigo-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold hover:bg-indigo-700 transition-all">
                  검색
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-bold text-slate-400">인기 검색어:</span>
              {['API', '설치', '배포'].map((tag) => (
                <button key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 text-left">
             <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900/30 rounded-2xl sm:rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group flex sm:flex-col items-start gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1">시작하기</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">프로젝트를 단시간에 시작하고 실행할 수 있는 필수 가이드입니다.</p>
                </div>
             </div>
             <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900/30 rounded-2xl sm:rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group flex sm:flex-col items-start gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1">팀 협업</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">팀과 역할을 효과적으로 관리하는 방법을 알아보세요.</p>
                </div>
             </div>
             <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900/30 rounded-2xl sm:rounded-3xl border border-transparent hover:border-indigo-500/30 transition-all group flex sm:flex-col items-start gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Box className="w-4 h-4 sm:w-6 sm:h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1">컴포넌트 라이브러리</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">미리 구축된 컴포넌트 라이브러리를 탐색하세요.</p>
                </div>
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
        <section className="relative h-[320px] sm:h-[500px] lg:h-[550px] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden group">
           <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
            alt="사무실" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
           <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 max-w-4xl space-y-4 sm:space-y-6 text-left">
              <h2 className="text-xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                 모든 픽셀에 담긴 우아함.
              </h2>
              <p className="hidden sm:block text-xs sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-lg">
                 우리는 단순함과 집중의 힘을 믿습니다. 보이지 않는 곳에서 강력한 도구를 제공합니다.
              </p>
              <div className="flex flex-row items-center gap-3 sm:gap-4 pt-1">
                 <button className="px-4 py-2 sm:px-10 sm:py-4 bg-indigo-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg">
                    무료 체험 시작
                 </button>
                 <div className="flex items-center gap-1 group/link cursor-pointer text-xs">
                    <span className="text-white font-bold group-hover/link:underline">철학 보기</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover/link:translate-x-1 transition-transform" />
                 </div>
              </div>
           </div>
        </section>
      </HeroSectionWrapper>
    </div>
  );
};

export default HeroSections;
