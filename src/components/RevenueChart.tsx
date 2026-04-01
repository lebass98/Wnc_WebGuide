import React from 'react';

const RevenueChart: React.FC = () => {
  const [activePeriod, setActivePeriod] = React.useState('월');

  // Mock data for the chart with period variations
  const periodData: { [key: string]: { month: string; revenue: number; expenses: number }[] } = {
    '주': [
      { month: '월', revenue: 65, expenses: 42 },
      { month: '화', revenue: 72, expenses: 48 },
      { month: '수', revenue: 58, expenses: 35 },
      { month: '목', revenue: 81, expenses: 52 },
      { month: '금', revenue: 75, expenses: 49 },
      { month: '토', revenue: 87, expenses: 58 },
      { month: '일', revenue: 92, expenses: 68 },
    ],
    '월': [
      { month: '1월', revenue: 45, expenses: 32 },
      { month: '2월', revenue: 52, expenses: 38 },
      { month: '3월', revenue: 48, expenses: 35 },
      { month: '4월', revenue: 61, expenses: 42 },
      { month: '5월', revenue: 55, expenses: 39 },
      { month: '6월', revenue: 67, expenses: 48 },
      { month: '7월', revenue: 72, expenses: 48 },
      { month: '8월', revenue: 69, expenses: 45 },
      { month: '9월', revenue: 78, expenses: 52 },
      { month: '10월', revenue: 74, expenses: 50 },
      { month: '11월', revenue: 82, expenses: 55 },
      { month: '12월', revenue: 89, expenses: 58 },
    ],
    '연': [
      { month: '2021', revenue: 75, expenses: 52 },
      { month: '2022', revenue: 82, expenses: 58 },
      { month: '2023', revenue: 95, expenses: 65 },
    ]
  };

  const data = periodData[activePeriod];

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">수익 개요</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{activePeriod}별 수익 분석</p>
        </div>
        <div className="flex items-center gap-2">
          {['주', '월', '연'].map((period) => (
            <button 
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${period === activePeriod ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative mt-4">
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((val, i) => (
            <div key={i} className="flex items-center w-full h-0">
              <span className="text-xs text-slate-400 dark:text-slate-500 w-10 text-right pr-4 shrink-0 font-medium">
                ${val}k
              </span>
              {i !== 4 && <div className="flex-1 border-t border-slate-100 dark:border-slate-800"></div>}
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="absolute inset-x-0 bottom-0 top-0 left-10 flex justify-between items-end pb-[1px]">
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 group">
              <div className="flex items-end justify-center w-full gap-1 h-[220px]">
                {/* Revenue Bar */}
                <div 
                  className="w-full max-w-[12px] bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-sm group-hover:opacity-80 transition-opacity"
                  style={{ height: `${item.revenue}%` }}
                ></div>
                {/* Expenses Bar */}
                <div 
                  className="w-full max-w-[12px] bg-slate-400 rounded-t-sm group-hover:opacity-80 transition-opacity"
                  style={{ height: `${item.expenses}%` }}
                ></div>
              </div>
              <span className="mt-4 text-xs font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
