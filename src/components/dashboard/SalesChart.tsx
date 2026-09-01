import React from 'react';

const SalesChart: React.FC = () => {
  const categories = [
    { name: '전자제품', color: 'bg-[#FF5B04]', dot: 'bg-[#FF5B04]', hex: '#FF5B04', percent: 45 },
    { name: '의류', color: 'bg-[#075056]', dot: 'bg-[#075056]', hex: '#075056', percent: 30 },
    { name: '도서', color: 'bg-[#16232A]', dot: 'bg-[#16232A]', hex: '#16232A', percent: 15 },
    { name: '기타', color: 'bg-amber-500', dot: 'bg-amber-500', hex: '#f59e0b', percent: 10 },
  ];

  // Calculate conic gradient
  // 0 - 45% Orange
  // 45 - 75% Deep Sea Green
  // 75 - 90% Mirage
  // 90 - 100% Yellow
  const gradientString = `
    conic-gradient(
      #FF5B04 0% 45%,
      transparent 45% 46%, 
      #075056 46% 75%,
      transparent 75% 76%, 
      #16232A 76% 90%,
      transparent 90% 91%, 
      #f59e0b 91% 100%,
      transparent 100% 100%
    )
  `;

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">카테고리별 매출</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">제품 분포도</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* CSS Donut Chart */}
        <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: gradientString,
              transform: 'rotate(-90deg)' // Start from top
            }}
          ></div>
          {/* Inner hole for donut shape */}
          <div className="absolute w-28 h-28 bg-white dark:bg-[#1A222C] rounded-full"></div>
        </div>

        {/* Legend */}
        <div className="w-full mt-4 space-y-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${cat.dot}`}></span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{cat.name}</span>
              </div>
              <span className="text-sm font-bold text-slate-800 dark:text-white">{cat.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
