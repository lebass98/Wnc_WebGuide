import React from 'react';
import { ChevronRight, LayoutList, Grid2X2 } from 'lucide-react';
import ArteHtmlEditor from './ArteHtmlEditor';
import { useArteLayout } from '../../hooks/useArteLayout';

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  html: string;
}

interface WebzineTemplatePageLayoutProps {
  title: string;
  categoryName?: string;
  subcategoryName: string;
  templates: TemplateItem[];
}

const WebzineTemplatePageLayout: React.FC<WebzineTemplatePageLayoutProps> = ({
  title,
  categoryName = '웹진',
  subcategoryName,
  templates,
}) => {
  const [layoutColumns, setLayoutColumns] = useArteLayout(1);

  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Page Header with Bottom Border */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{categoryName}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>아르떼</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">{subcategoryName}</span>
          </div>
        </div>

        {/* 카드 정렬 토글 버튼 */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl w-fit self-end sm:self-auto">
          <button
            onClick={() => setLayoutColumns(1)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 1
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="1행 보기"
          >
            <LayoutList className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLayoutColumns(2)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 2
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="2행 보기"
          >
            <Grid2X2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Multiple Reusable Editors based on Templates */}
      <div className={`grid gap-8 ${layoutColumns === 1 ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'}`}>
        {templates.map((template) => (
          <div key={template.id} className="bg-slate-50/30 dark:bg-slate-900/10 p-2 rounded-2xl border border-slate-100 dark:border-slate-900">
            <ArteHtmlEditor 
              title={template.title} 
              description={template.description} 
              initialHtml={template.html} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebzineTemplatePageLayout;
