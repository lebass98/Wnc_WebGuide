import React from 'react';
import { SlidersHorizontal, FileCode2 } from 'lucide-react';
import dashboardData from '../../data/componentDashboardData.json';

const RecentOrders: React.FC = () => {
  const releases = dashboardData.releases;

  const statusStyles: { [key: string]: { text: string; css: string } } = {
    'new': { text: '신규 추가', css: 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800' },
    'stable': { text: '안정화', css: 'text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20' },
  };

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">최근 업데이트 컴포넌트</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>필터</span>
          </button>
          <button className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 shadow-sm hover:bg-slate-50 transition-all">
            전체 보기
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="pb-6 w-[45%]">컴포넌트 이름</th>
              <th className="pb-6">카테고리</th>
              <th className="pb-6">퍼블리셔</th>
              <th className="pb-6">빌드 용량</th>
              <th className="pb-6">최종 패치</th>
              <th className="pb-6 text-right">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {releases.map((item, idx) => (
              <tr key={idx} className="group transition-colors">
                <td className="py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-[#2E3A47] flex items-center justify-center shadow-sm">
                      <FileCode2 className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{item.name}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.category}
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-600 dark:text-slate-400">
                  {item.publisher}
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {item.size}
                </td>
                <td className="py-5 whitespace-nowrap text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.date}
                </td>
                <td className="py-5 whitespace-nowrap text-right">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-tight ${statusStyles[item.status]?.css}`}>
                    {statusStyles[item.status]?.text}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
