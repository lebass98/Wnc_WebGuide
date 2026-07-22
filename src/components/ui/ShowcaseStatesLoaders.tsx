import React from 'react';
import { 
  ChevronRight, 
  Search, 
  Inbox, 
  RefreshCw, 
  Plus 
} from 'lucide-react';
import ShowcaseWrapper from './ShowcaseWrapper';
import codeSnippets from '../../data/StatesLoadersSnippets.json';

const ShowcaseStatesLoaders: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            상태 & 로더
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">상태 & 로더</span>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Box 1: Skeleton Loaders */}
        <ShowcaseWrapper
          title="스켈레톤 로더 (Skeleton Loaders)"
          description="데이터 비동기 로딩 중 화면 흐름을 유지하고 로딩 인지를 돕는 프리로더 뼈대입니다."
          snippet={codeSnippets.skeletons}
        >
          <div className="space-y-6">
            
            {/* Card Skeleton */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">카드 타입 스켈레톤</h4>
              <div className="border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4 animate-pulse">
                {/* Media area placeholder */}
                <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                <div className="space-y-2">
                  {/* Title placeholder */}
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                  {/* Description placeholder */}
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
                </div>
                {/* Avatar and name placeholder */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/4" />
                </div>
              </div>
            </div>

            {/* List/Table Row Skeleton */}
            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">리스트/행 타입 스켈레톤</h4>
              <div className="space-y-3 animate-pulse">
                {[1, 2, 3].map(item => (
                  <div key={item} className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl">
                    <div className="flex items-center gap-3 w-2/3">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
                        <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                      </div>
                    </div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-12" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ShowcaseWrapper>

        {/* Box 2: Empty States */}
        <ShowcaseWrapper
          title="빈 화면 상태 (Empty States)"
          description="등록된 데이터가 없거나 조건에 맞는 결과물이 없을 때 사용자 행동을 유도하는 UI입니다."
          snippet={codeSnippets.emptyStates}
        >
          <div className="space-y-6">
            
            {/* Empty State 1: No Search Results */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">검색 결과 없음</h4>
              <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full">
                  <Search className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">일치하는 결과가 없습니다</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed">
                    다른 키워드로 다시 검색해 보시거나, 필터 설정을 변경해 보세요.
                  </p>
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer">
                  <RefreshCw className="w-3.5 h-3.5" />
                  초기화
                </button>
              </div>
            </div>

            {/* Empty State 2: No Data inbox */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">데이터 함 비어있음</h4>
              <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-center space-y-4">
                <div className="p-3 bg-indigo-50 text-indigo-505 dark:bg-indigo-500/10 dark:text-indigo-400 rounded-full">
                  <Inbox className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">수신된 메시지가 없습니다</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-[240px] leading-relaxed">
                    새로운 프로젝트 연동이 완료되면 이곳에 실시간 업무 메시지가 표시됩니다.
                  </p>
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 dark:shadow-none cursor-pointer">
                  <Plus className="w-3.5 h-3.5" />
                  연동 추가하기
                </button>
              </div>
            </div>

          </div>
        </ShowcaseWrapper>

      </div>

    </div>
  );
};

export default ShowcaseStatesLoaders;
