import React from 'react';
import { ChevronRight } from 'lucide-react';

const Arte: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header with Bottom Border */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            아르떼
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">아르떼</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          웹진 - 아르떼 페이지 콘텐츠 영역입니다.
        </p>
      </div>
    </div>
  );
};

export default Arte;
