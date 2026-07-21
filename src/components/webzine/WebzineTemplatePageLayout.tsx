import React from 'react';
import { ChevronRight, LayoutList, Grid2X2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Masonry layout column distribution (Left: EVEN index, Right: ODD index)
  const col1Templates = templates.filter((_, idx) => idx % 2 === 0);
  const col2Templates = templates.filter((_, idx) => idx % 2 === 1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-6 pb-10 font-sans"
    >
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLayoutColumns(1)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 1
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="1행 보기"
          >
            <LayoutList className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLayoutColumns(2)}
            className={`p-1.5 rounded-lg transition-all cursor-pointer ${
              layoutColumns === 2
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
            title="2행 보기"
          >
            <Grid2X2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Multiple Reusable Editors with Framer Motion Animation */}
      <AnimatePresence mode="wait">
        {layoutColumns === 1 ? (
          <motion.div 
            key="layout-1-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {templates.map((template, idx) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
                className="bg-slate-50/30 dark:bg-slate-900/10 rounded-2xl dark:border-slate-900"
              >
                <ArteHtmlEditor
                  title={template.title}
                  description={template.description}
                  initialHtml={template.html}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="layout-2-cols"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start"
          >
            {/* Column 1 (Left) */}
            <div className="space-y-8">
              {col1Templates.map((template, idx) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
                  className="bg-slate-50/30 dark:bg-slate-900/10 p-2 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <ArteHtmlEditor
                    title={template.title}
                    description={template.description}
                    initialHtml={template.html}
                  />
                </motion.div>
              ))}
            </div>

            {/* Column 2 (Right) */}
            <div className="space-y-8">
              {col2Templates.map((template, idx) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04 + 0.02, 0.44) }}
                  className="bg-slate-50/30 dark:bg-slate-900/10 p-2 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <ArteHtmlEditor
                    title={template.title}
                    description={template.description}
                    initialHtml={template.html}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WebzineTemplatePageLayout;
