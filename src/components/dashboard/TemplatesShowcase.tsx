import React from 'react';
import { Layout, ArrowUpRight, FileText, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { templatesShowcase } from '../../data/landingPageData';

const TemplatesShowcase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#16232A] dark:text-[#FF5B04] text-xs font-semibold uppercase tracking-wider">
            <Layout className="w-4 h-4" />
            <span>Webzine & Page Templates</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
            웹진 & 페이지 완성형 템플릿 쇼케이스
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            이음, 아르떼 웹진 스니펫 및 대시보드 풀 템플릿을 한꺼번에 조립해서 사용하세요.
          </p>
        </div>

        <button
          onClick={() => navigate('/webzine/eeum')}
          className="self-start md:self-auto px-4 py-2 bg-[#16232A] dark:bg-slate-800 text-white rounded-xl text-xs font-medium hover:bg-[#23343e] dark:hover:bg-[#FF5B04] transition-colors flex items-center gap-2 cursor-pointer border border-slate-700 shadow-xs"
        >
          <span>웹진 전체 템플릿 탐색</span>
          <ArrowUpRight className="w-4 h-4 text-[#FF5B04]" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templatesShowcase.map((tmpl) => (
          <div
            key={tmpl.id}
            onClick={() => navigate(tmpl.route)}
            className="group relative bg-white dark:bg-[#1A222C] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl dark:hover:border-[#FF5B04]/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            {/* Background Gradient Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${tmpl.imageBg} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none opacity-60 dark:opacity-100`} />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#E4EEF0] dark:bg-[#075056]/20 text-[#16232A] dark:text-[#E4EEF0] border border-slate-200 dark:border-[#075056]/40 text-xs font-bold rounded-full">
                  {tmpl.tag}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                  <Grid className="w-3.5 h-3.5 text-[#075056] dark:text-[#FF5B04]" /> {tmpl.itemCount} Components Included
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#16232A] dark:group-hover:text-[#FF5B04] transition-colors flex items-center gap-2">
                  <span>{tmpl.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {tmpl.description}
                </p>
              </div>
            </div>

            {/* Template Quick Tags */}
            <div className="relative z-10 pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                <FileText className="w-3.5 h-3.5 text-[#075056] dark:text-[#FF5B04]" /> Ready to Copy Code
              </span>

              <span className="font-semibold text-[#16232A] dark:text-[#FF5B04] group-hover:underline flex items-center gap-1">
                템플릿 보러가기 <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesShowcase;
