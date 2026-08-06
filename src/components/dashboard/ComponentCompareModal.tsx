import React from 'react';
import { X, ArrowRightLeft, Copy, Check } from 'lucide-react';
import type { ComponentItem } from '../../data/landingPageData';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: ComponentItem[];
  renderLivePreview: (itemId: string) => React.ReactNode;
}

const ComponentCompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  items,
  renderLivePreview,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen || items.length === 0) return null;

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                컴포넌트 나란히 비교하기 (Side-by-Side Compare)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                선택한 {items.length}개 컴포넌트의 프리뷰와 스니펫 코드를 한 눈에 비교합니다.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 scrollbar-thin">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-indigo-500 uppercase">{item.category}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/10 text-indigo-500 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>

              {/* Live Preview Box */}
              <div className="p-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl min-h-[140px] flex items-center justify-center">
                {renderLivePreview(item.id)}
              </div>

              {/* Code Snippet Box */}
              <div className="p-3 bg-slate-900 rounded-xl font-mono text-[11px] text-indigo-200 relative max-h-36 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{item.reactCode}</pre>
                <button
                  onClick={() => handleCopyCode(item.id, item.reactCode)}
                  className="absolute top-2 right-2 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] flex items-center gap-1 font-sans cursor-pointer"
                >
                  {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === item.id ? '복사됨' : '복사'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCompareModal;
