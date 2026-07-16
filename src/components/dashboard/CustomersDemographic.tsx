import React from 'react';
import { MoreVertical, Copy, GitCommit, CheckCircle2, AlertCircle } from 'lucide-react';
import dashboardData from '../../data/componentDashboardData.json';
import { useI18n } from '../../i18n/config';

const CustomersDemographic: React.FC = () => {
  const { t } = useI18n();
  const activities = dashboardData.activities;

  const iconComponents: { [key: string]: React.ReactNode } = {
    'copy': <Copy className="w-4 h-4 text-indigo-500" />,
    'commit': <GitCommit className="w-4 h-4 text-emerald-500" />,
    'fix': <CheckCircle2 className="w-4 h-4 text-blue-500" />,
    'issue': <AlertCircle className="w-4 h-4 text-rose-500" />,
  };

  const bgStyles: { [key: string]: string } = {
    'copy': 'bg-indigo-50 dark:bg-indigo-950/20',
    'commit': 'bg-emerald-50 dark:bg-emerald-950/20',
    'fix': 'bg-blue-50 dark:bg-blue-950/20',
    'issue': 'bg-rose-50 dark:bg-rose-950/20',
  };

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{t('dashboard.realTimeDevLog')}</h3>
          <p className="text-xs text-[#64748B] dark:text-[#8A99AF] font-medium">{t('dashboard.componentCopyHistory')}</p>
        </div>
        <button className="text-[#64748B] hover:text-[#1C2434] dark:hover:text-white">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="relative pl-6 border-l border-slate-100 dark:border-slate-800 space-y-6">
          {activities.map((log) => (
            <div key={log.id} className="relative group">
              <div className={`absolute -left-[38px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-[#1A222C] shadow-sm transition-transform group-hover:scale-110 ${bgStyles[log.type] || 'bg-slate-100'}`}>
                {iconComponents[log.type] || <Copy className="w-4 h-4 text-slate-500" />}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                  {log.message}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-1.5 py-0.5 rounded">
                    {log.author}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">{log.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersDemographic;
