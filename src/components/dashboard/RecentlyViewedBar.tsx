import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredComponents } from '../../data/landingPageData';

interface RecentlyViewedBarProps {
  recentIds: string[];
}

const RecentlyViewedBar: React.FC<RecentlyViewedBarProps> = ({ recentIds }) => {
  const navigate = useNavigate();

  if (!recentIds || recentIds.length === 0) return null;

  const recentItems = recentIds
    .map((id) => featuredComponents.find((item) => item.id === id))
    .filter(Boolean);

  if (recentItems.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 shrink-0">
        <Clock className="w-4 h-4 text-indigo-500" />
        <span>최근 본 컴포넌트:</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 flex-1">
        {recentItems.map((item) => (
          <button
            key={item!.id}
            onClick={() => navigate(item!.route)}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl whitespace-nowrap transition-all border border-slate-200 dark:border-slate-700 cursor-pointer flex items-center gap-1 shrink-0"
          >
            <span>{item!.title}</span>
            <ArrowRight className="w-3 h-3 opacity-60" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedBar;
