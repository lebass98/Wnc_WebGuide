import ShowcaseWrapper from '../../components/ui/ShowcaseWrapper';
import React from 'react';
import {
  ArrowRight,
  Play,
  Sparkles,
  Search,
  Star,
  CheckCircle,
  Users,
  Box,
  ChevronRight } from 'lucide-react';
import codeSnippets from '../../data/HeroSectionsSnippets.json';



const YiArchiveHero: React.FC = () => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const kvSectionRef = React.useRef<HTMLDivElement>(null);
  const kvImgListRef = React.useRef<HTMLDivElement>(null);



  React.useEffect(() => {
    const slides = sliderRef.current?.querySelectorAll('.img-wrap');
    if (!slides || slides.length === 0) return;

    let currentIndex = 0;
    const slideCount = slides.length;
    const autoplayDelay = 4000;
    const transitionDuration = 3000;
    let autoplayTimer: any = null;
    let lastIndex = -1;

    function showSlide(index: number) {
      slides?.forEach((slide: any, i) => {
        if (i === index) {
          slide.classList.add('active');
          slide.classList.remove('last-active');
        } else if (i === lastIndex) {
          slide.classList.add('last-active');
          slide.classList.remove('active');
        } else {
          slide.classList.remove('active', 'last-active');
        }
      });
      lastIndex = index;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    }

    const initTimeout = setTimeout(() => {
      showSlide(currentIndex);
    }, 100);

    autoplayTimer = setTimeout(() => {
      nextSlide();
      autoplayTimer = setInterval(nextSlide, autoplayDelay + transitionDuration);
    }, 3000);

    const handleScroll = () => {
      const kvSection = kvSectionRef.current;
      const kvImgList = kvImgListRef.current;
      if (!kvSection || !kvImgList) return;

      const kvHeight = kvSection.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY <= 0) {
        kvImgList.style.transform = 'scale(1)';
        kvImgList.style.opacity = '1';
        return;
      }

      if (scrollY >= kvHeight) return;

      const scrollRatio = Math.min(1, Math.max(0, scrollY / kvHeight));
      const nextScale = 1 + 0.5 * scrollRatio;
      const nextOpacity = 1 - scrollRatio;

      kvImgList.style.transform = `scale(${nextScale})`;
      kvImgList.style.opacity = `${nextOpacity}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll);
    handleScroll();

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(autoplayTimer);
      clearInterval(autoplayTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div className="wrap mx-auto box-border relative w-full max-w-full overflow-hidden font-sans rounded-xl bg-slate-900 border border-slate-800">
      <style dangerouslySetInnerHTML={{ __html: `
        .list_kv_img .img-wrap {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 0;
          overflow: hidden;
          transition: opacity 0s 3s, z-index 0s 3s;
        }
        .list_kv_img .img-wrap.active {
          opacity: 1;
          z-index: 20;
          transition: opacity 3s ease-in-out, z-index 0s 0s;
        }
        .list_kv_img .img-wrap.last-active {
          opacity: 1;
          z-index: 10;
          transition: opacity 0s 3s, z-index 0s 3s;
        }
        .list_kv_img .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform-origin: top center;
          transform: scale(1.3);
          transition: transform 0s 3.5s;
        }
        .list_kv_img .img-wrap.active img {
          transform: scale(1);
          transition: transform 7.5s ease-out;
        }
        @media (max-width: 1024px) {
          .list_kv_img .img-wrap {
            height: 570px;
          }
        }
      `}} />

      <div className="container w-[1920px] max-w-full mx-auto relative max-lg:w-full">
        <section className="main-sec se1 relative max-lg:z-0">
          <div ref={kvSectionRef} className="mainVisual relative h-[820px] inset-0 bg-white/30 max-lg:h-auto max-w-full">
            <div ref={kvImgListRef} className="list_kv_img swiper-container relative w-full h-[820px] max-lg:h-[570px] overflow-hidden origin-center transition-[transform,opacity] duration-100 ease-out">
              <div ref={sliderRef} className="swiper-wrapper relative w-full h-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <span key={num} className="img-wrap swiper-slide group absolute inset-0 block w-full h-full max-lg:h-[570px] overflow-hidden" style={num === 1 ? { opacity: 1, zIndex: 10 } : undefined}>
                    <img className="cover pc w-full h-full object-cover object-center origin-top" src={`${import.meta.env.BASE_URL}assets/hero_yiarchive/visual_background${num}.jpg`} alt="" />
                    <img className="cover pc w-full h-full object-cover object-center origin-top" src={`${import.meta.env.BASE_URL}assets/hero_yiarchive/visual_background${num}.jpg`} alt="" />
                  </span>
                ))}
              </div>
            </div>
            <div className="info-area absolute left-1/2 top-[240px] -translate-x-1/2 w-[1300px] max-lg:w-full max-lg:top-[140px] max-lg:px-[12px]">
              <div className="txt-wrap max-lg:w-[336px] max-lg:mx-auto">
                <p className="tit text-[22px] font-semibold text-white leading-[1.5] text-center max-lg:text-[14px]">용인디지털기록관</p>
                <p className="txt mt-2 font-['GyeonggiBatang'] text-[64px] font-bold text-white leading-[1.4] text-center max-lg:break-keep max-lg:text-[32px]">용인의 어제와 오늘을 담아 내일로 이어갑니다.</p>
              </div>
              <div className="sch-bar group relative w-[920px] rounded-full border-3 border-white bg-white/10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] backdrop-blur-[4px] h-[78px] mt-[64px] mx-auto has-[:focus]:border-[#7D03FF] has-[:focus]:bg-white max-lg:w-full max-lg:h-[52px] max-lg:mt-[32px]">
                <input type="text" className="sch-input w-full h-full text-[20px] font-medium text-white leading-[1.6] pl-[37px] pr-[100px] bg-transparent border-none outline-none placeholder:text-[20px] placeholder:font-medium placeholder:text-white focus:text-[#05020F] focus:outline-none focus:rounded-full focus:placeholder:text-[#05020F] max-lg:text-[16px] max-lg:pl-[24px] max-lg:pr-[20px] max-lg:placeholder:text-[16px]" placeholder="검색어를 입력하세요." />
                <button className="btn btn-icon-sch white btnSch absolute right-[36px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-[url('https://www.yiarchive.or.kr/inc/user/resource/image/main/sch-btn.svg')] bg-center bg-contain bg-no-repeat group-focus-within:invert max-lg:w-[28px] max-lg:h-[28px] max-lg:right-[20px]"></button>
              </div>
              <div className="tag-wrap flex items-start justify-center mx-auto pl-[40px] mt-6 max-lg:p-0 max-lg:flex-col max-lg:mt-[24px]">
                <p className="tit text-[18px] font-bold text-white leading-[1.6] w-[100px] mr-[24px] py-[6px] max-lg:mx-auto max-lg:text-center max-lg:text-[16px] max-lg:p-0">인기검색어</p>
                <ul className="tags text-center flex items-center justify-start flex-wrap gap-[6px] max-w-[calc(100%-101px)] max-lg:mt-[8px] max-lg:mx-auto max-lg:mb-0 max-lg:justify-center max-lg:gap-[8px] max-lg:max-w-full max-lg:w-full">
                  {['임진산성', '김량천', '처인성', '묘소', '제단', '파담마을'].map((tag) => (
                    <li key={tag} className="flex items-center">
                      <a href="javascript:void(0)" className="schEx rounded-full bg-[#05020F]/40 backdrop-blur-[2px] text-[18px] font-medium text-white leading-[1.6] px-[16px] py-[6px] transition-all duration-200 ease lg:hover:bg-[#7D03FF] max-lg:px-[14px] max-lg:py-[6px] max-lg:font-normal max-lg:text-[15px]">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const HeroSections: React.FC = () => {
  // Code snippets data map for 5 Hero Variations
  return (
    <div className="space-y-12 pb-20 font-sans">
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

      {/* 0. YiArchive custom fade slider hero */}
      <ShowcaseWrapper
        title="용인디지털기록관 히어로 (바닐라 JS & Tailwind)"
        description="외부 jQuery 및 Swiper 종속성 없이 바닐라 자바스크립트 타이머와 네이티브 CSS 3D/Z-Index 레이어 트랜지션을 사용하여 완성한 최첨단 크로스페이드 슬라이더 및 스크롤 연동 줌아웃 히어로 섹션입니다."
        snippet={codeSnippets.hero_yiarchive}
      >
        <YiArchiveHero />
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 1. Simple centered hero */}
      <ShowcaseWrapper
        title="간단한 중앙 정렬 히어로"
        description="깔끔한 타이포그래피와 중앙 집중형 레이아웃의 기본형 히어로 섹션입니다."
        snippet={codeSnippets.hero1}
      >
        <div className="relative isolate px-3 sm:px-6 pt-10 sm:pt-14 bg-white dark:bg-slate-950 min-h-[420px] sm:min-h-[600px] flex flex-col w-full max-h-full mx-auto rounded-xl overflow-hidden">
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
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 2. Classic Split Hero */}
      <ShowcaseWrapper
        title="클래식 분할 배치 히어로"
        description="한눈에 띄는 뱃지와 소셜 신뢰도 증명 리스트를 결합한 좌우 분할식 컴포넌트입니다."
        snippet={codeSnippets.hero2}
      >
        <section className="relative overflow-hidden bg-white dark:bg-slate-900 w-full max-h-full mx-auto px-3 sm:px-8 py-6 lg:py-24 rounded-xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-700 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-550 dark:bg-indigo-505/10 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20">
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
            <div className="relative animate-in zoom-in duration-1000 max-h-full mx-auto lg:max-w-none w-full">
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
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 3. Centered Elegant Hero */}
      <ShowcaseWrapper
        title="우아한 분위기의 중앙 정렬 히어로"
        description="다크 모드와 그라디언트 글로우 백드롭으로 고급스러운 브랜드 이미지를 심어주는 레이아웃입니다."
        snippet={codeSnippets.hero3}
      >
        <section className="relative w-full max-h-full mx-auto overflow-hidden bg-slate-950 px-4 sm:px-8 py-8 sm:py-24 text-center rounded-xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-indigo-500 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500 rounded-full blur-[80px] sm:blur-[120px] translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-h-full mx-auto space-y-4 sm:space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
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
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 4. Search Oriented Hero */}
      <ShowcaseWrapper
        title="검색 포커스형 가이드 히어로"
        description="검색 인풋 필드를 상단 중앙에 배치하여 도움말이나 서비스 탐색에 특화된 레이아웃입니다."
        snippet={codeSnippets.hero4}
      >
        <section className="relative w-full max-h-full mx-auto overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 sm:p-10 lg:p-20 shadow-sm rounded-xl">
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
                className="block w-full pl-10 sm:pl-16 pr-16 sm:pr-32 py-3 sm:py-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl sm:rounded-3xl text-xs sm:text-lg focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all dark:text-white dark:placeholder:text-slate-500 outline-none"
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
      </ShowcaseWrapper>

      <div className="h-[1px] bg-slate-200 dark:bg-slate-800" />

      {/* 5. Minimalist Image Hero */}
      <ShowcaseWrapper
        title="미니멀 이미지 배경 히어로"
        description="아름다운 사무실 전경 배경을 깔아 입체적인 시인성을 확보하는 정적인 무드의 히어로 섹션입니다."
        snippet={codeSnippets.hero5}
      >
        <section className="relative h-[320px] sm:h-[500px] lg:h-[550px] w-full max-h-full mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
            alt="사무실"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 max-h-full space-y-4 sm:space-y-6 text-left">
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
      </ShowcaseWrapper>
    </div>
  );
};

export default HeroSections;
