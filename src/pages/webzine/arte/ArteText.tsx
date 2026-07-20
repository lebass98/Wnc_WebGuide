import React from 'react';
import { ChevronRight } from 'lucide-react';

const ArteText: React.FC = () => {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            글씨
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>웹진</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">글씨</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">
          아르떼 - 글씨 페이지 콘텐츠 영역입니다.
        </p>
      </div>
    </div>
  );
};

export default ArteText;
