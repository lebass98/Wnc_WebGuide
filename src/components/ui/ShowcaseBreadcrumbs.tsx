import React from 'react';
import { ChevronRight, Home, Folder, FileText } from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/BreadcrumbsSnippets.json';

const ShowcaseBreadcrumbs: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            브래드크럼
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">브래드크럼</span>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* 1. Default Chevron Breadcrumb */}
        <ShowcaseWrapper
          title="기본 쉐브론 브래드크럼"
          description="홈 아이콘과 화살표 구분자가 결합되어 페이지 계층 구조를 직관적으로 탐색할 수 있는 표준 브래드크럼입니다."
          snippet={codeSnippets.defaultChevronBreadcrumb}
        >
          <div className="w-full py-4">
            <nav className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-400" aria-label="Breadcrumb">
              <a href="#" onClick={e => e.preventDefault()} className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Home className="w-4 h-4" />
                <span>홈</span>
              </a>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" />
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                UI 요소
              </a>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" />
              <span className="text-slate-900 dark:text-white font-bold">
                브래드크럼
              </span>
            </nav>
          </div>
        </ShowcaseWrapper>

        {/* 2. Slash Separator Breadcrumb */}
        <ShowcaseWrapper
          title="슬래시 구분선 브래드크럼"
          description="심플한 슬래시(/) 기호로 항목을 깔끔하게 분리하여 미니멀한 UI에 잘 어울리는 텍스트형 브래드크럼입니다."
          snippet={codeSnippets.slashSeparatorBreadcrumb}
        >
          <div className="w-full py-4">
            <nav className="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                대시보드
              </a>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                프로젝트 관리
              </a>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <a href="#" onClick={e => e.preventDefault()} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                디자인 시스템
              </a>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                컴포넌트 가이드
              </span>
            </nav>
          </div>
        </ShowcaseWrapper>

        {/* 3. Capsule Pill Breadcrumb */}
        <ShowcaseWrapper
          title="캡슐 배지 브래드크럼"
          description="각 단계가 캡슐형 배지로 감싸져 있어 시각적 구분이 뚜렷하고 클릭 영역이 넓은 배지형 브래드크럼입니다."
          snippet={codeSnippets.capsulePillBreadcrumb}
        >
          <div className="w-full py-4">
            <nav className="flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Folder className="w-3.5 h-3.5 text-slate-500" />
                <span>문서함</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span>UI 컴포넌트</span>
              </a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                <FileText className="w-3.5 h-3.5" />
                <span>네비게이션 상세</span>
              </div>
            </nav>
          </div>
        </ShowcaseWrapper>

        {/* 4. Bar Step Breadcrumb */}
        <ShowcaseWrapper
          title="스텝 바 브래드크럼"
          description="주문/결제/신청 등 단계별 프로세스의 현재 진행 상황을 안내할 수 있는 바 형태의 스텝 브래드크럼입니다."
          snippet={codeSnippets.barStepBreadcrumb}
        >
          <div className="w-full py-4">
            <nav className="flex items-center w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-1.5 text-xs font-semibold">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="flex items-center px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-700/60 transition-all shrink-0"
              >
                1. 장바구니
              </a>
              <span className="text-slate-300 dark:text-slate-600 px-1 shrink-0">&rsaquo;</span>
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="flex items-center px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-700/60 transition-all shrink-0"
              >
                2. 주문 및 배송정보
              </a>
              <span className="text-slate-300 dark:text-slate-600 px-1 shrink-0">&rsaquo;</span>
              <div className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm font-bold shrink-0">
                3. 결제하기
              </div>
              <span className="text-slate-300 dark:text-slate-600 px-1 shrink-0">&rsaquo;</span>
              <span className="flex items-center px-4 py-2 text-slate-400 dark:text-slate-500 shrink-0">
                4. 주문 완료
              </span>
            </nav>
          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseBreadcrumbs;
