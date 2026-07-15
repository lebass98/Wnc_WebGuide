import React from 'react';

const DashboardSkeleton: React.FC = () => {
  return (
    <div className="w-full space-y-6 animate-pulse p-1">
      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] h-[160px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-3 w-1/2">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-3/4"></div>
                  <div className="h-8 bg-slate-300 dark:bg-slate-600 rounded-sm w-full"></div>
                </div>
                <div className="w-11 h-11 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              </div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/3"></div>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] h-[160px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-3 w-1/2">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-3/4"></div>
                  <div className="h-8 bg-slate-300 dark:bg-slate-600 rounded-sm w-full"></div>
                </div>
                <div className="w-11 h-11 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              </div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/3"></div>
            </div>
          </div>
          
          {/* Monthly Sales Chart Area */}
          <div className="bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] min-h-[350px] flex flex-col justify-between flex-1">
            <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/4 mb-6"></div>
            <div className="flex-1 flex items-end justify-between gap-3 px-2 pb-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-slate-200 dark:bg-slate-700 rounded-t-sm w-full" 
                  style={{ height: `${[40, 90, 50, 75, 45, 55, 70, 30, 55, 95, 65, 35][i]}%` }}
                ></div>
              ))}
            </div>
            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-sm w-full mt-4"></div>
          </div>
        </div>

        {/* Target Card Area */}
        <div className="xl:col-span-1 bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] min-h-[514px] flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/2"></div>
            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-sm w-3/4"></div>
          </div>
          <div className="flex justify-center my-6">
            <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 dark:border-slate-800 flex items-center justify-center relative">
              <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-5/6"></div>
          </div>
        </div>
      </div>

      {/* Middle Section: Statistics Chart */}
      <div className="bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] w-full min-h-[350px]">
        <div className="flex justify-between items-center mb-6">
          <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/4"></div>
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-sm w-40"></div>
        </div>
        <div className="flex-1 h-48 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
          <div className="w-full h-full opacity-30 flex flex-col justify-between p-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Demographic and Orders */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
        {/* Customer Demographic */}
        <div className="xl:col-span-1 bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] min-h-[400px] flex flex-col justify-between">
          <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/2 mb-6"></div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-sm mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-2/3"></div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-white dark:bg-[#1A222C] rounded-sm p-6 border border-[#E2E8F0] dark:border-[#2E3A47] min-h-[400px] flex flex-col justify-between">
          <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/3 mb-6"></div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-5 gap-4 border-b border-slate-200 dark:border-slate-800 pb-3 font-semibold">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-slate-300 dark:bg-slate-600 rounded-sm w-2/3"></div>
              ))}
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grid grid-cols-5 gap-4 py-2 border-b border-slate-100 dark:border-slate-900/50">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/2"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-2/3"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full w-16"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-sm w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
