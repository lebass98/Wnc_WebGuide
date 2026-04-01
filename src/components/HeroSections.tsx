import React, { useState } from 'react';
import { 
  ChevronRight, ArrowRight, Play, Star, CheckCircle, Search, Sparkles, Users, Box, 
  Monitor, Smartphone, Tablet, Sun, Moon, ChevronDown, Copy
} from 'lucide-react';

interface HeroCardProps {
  title: string;
  children: React.ReactNode;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{title}</h3>
        <div className="flex items-center gap-4">
          {/* Preview/Code Toggle */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
            >
              미리보기
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
            >
              코드
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Device Icons */}
          <div className="flex items-center gap-1">
            <button onClick={() => setDevice('desktop')} className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Monitor className="w-4 h-4" />
            </button>
            <button onClick={() => setDevice('tablet')} className={`p-1.5 rounded-md transition-colors ${device === 'tablet' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Tablet className="w-4 h-4" />
            </button>
            <button onClick={() => setDevice('mobile')} className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Theme Icons */}
          <div className="flex items-center gap-1">
            <button onClick={() => setTheme('light')} className={`p-1.5 rounded-md transition-colors ${theme === 'light' ? 'bg-slate-100 dark:bg-slate-800 text-amber-500' : 'text-slate-400 hover:text-slate-600'}`}>
              <Sun className="w-4 h-4" />
            </button>
            <button onClick={() => setTheme('dark')} className={`p-1.5 rounded-md transition-colors ${theme === 'dark' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-400' : 'text-slate-400 hover:text-slate-600'}`}>
              <Moon className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700" />

          {/* Format Dropdown */}
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
            HTML <ChevronDown className="w-3 h-3" />
          </button>

          <button className="p-1.5 text-slate-400 hover:text-slate-600">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm ${device === 'mobile' ? 'max-w-[375px] mx-auto' : device === 'tablet' ? 'max-w-[768px] mx-auto' : 'w-full'}`}>
        {activeTab === 'preview' ? (
          <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
              {children}
            </div>
          </div>
        ) : (
          <div className="bg-[#1e1e1e] p-6 font-mono text-sm text-slate-300 overflow-x-auto min-h-[400px]">
             <pre>{`<!-- Simple centered hero -->
<div class="relative bg-white font-sans text-slate-900">
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
  </div>
  ...
</div>`}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSections: React.FC = () => {
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

      {/* NEW: Simple centered hero from image */}
      <HeroCard title="간단한 중앙 정렬">
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-white dark:bg-slate-950 min-h-[700px] flex flex-col">
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
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

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </HeroCard>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />
      
      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">전체 높이 변형</h3>

      {/* 1. Classic Split Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
        <div className="container mx-auto px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                새로운 버전 2.0 출시
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.2]">
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
              <div className="flex items-center gap-6 pt-6 pt-8 border-t border-slate-100 dark:border-slate-700">
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
                          <p className="text-white font-bold">월간 수익</p>
                          <p className="text-emerald-400 text-sm flex items-center gap-1 font-bold">+12.5% 증가 폭</p>
                        </div>
                        <div className="text-white text-2xl font-black">$45,280</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Centered Elegant Hero */}
      <section className="relative rounded-[32px] overflow-hidden bg-slate-950 px-8 py-24 text-center">
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

      {/* 3. Search Oriented Hero */}
      <section className="relative rounded-[32px] overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 p-8 sm:p-16 lg:p-24 shadow-sm">
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Sparkles className="w-64 h-64 text-indigo-500" />
        </div>
        <div className="max-w-3xl space-y-8 relative z-10">
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
              <button key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* 4. Minimalist Image Hero */}
      <section className="relative h-[600px] rounded-[32px] overflow-hidden group">
         <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
          alt="사무실" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
         <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-12 md:px-24 max-w-4xl space-y-6">
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
    </div>
  );
};

export default HeroSections;
