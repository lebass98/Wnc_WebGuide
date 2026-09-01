import React from 'react';
import { Activity, Layers } from 'lucide-react';
import { libraryMetrics, recentUpdates } from '../../data/landingPageData';

const LibraryMetrics: React.FC = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Metrics Grid (Left 2 Columns) */}
      <div className="xl:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#16232A] dark:text-[#FF5B04]" />
            <span>라이브러리 통계 & 지표</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">Wnc WebGuide Metrics</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {libraryMetrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1A222C] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 hover:border-[#FF5B04]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {item.label}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md">
                  {item.change}
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {item.value}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Changelog & Timeline (Right 1 Column) */}
      <div className="xl:col-span-1 bg-white dark:bg-[#1A222C] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#16232A] dark:text-[#FF5B04]" />
            <span>최근 업데이트 이력</span>
          </h3>
          <span className="text-[11px] px-2 py-0.5 bg-[#E4EEF0] dark:bg-[#075056]/20 text-[#16232A] dark:text-[#FF5B04] font-mono rounded">
            Changelog
          </span>
        </div>

        <div className="space-y-4">
          {recentUpdates.map((log, idx) => (
            <div key={idx} className="relative pl-4 border-l-2 border-[#16232A]/30 dark:border-[#FF5B04]/40 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-[#075056] dark:text-[#FF5B04] font-bold">{log.version}</span>
                <span className="text-slate-400 font-mono">{log.date}</span>
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                {log.title}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                {log.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryMetrics;
