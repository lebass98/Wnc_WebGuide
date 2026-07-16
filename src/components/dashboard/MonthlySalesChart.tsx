import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useI18n } from '../../i18n/config';

const MonthlySalesChart: React.FC = () => {
  const { t } = useI18n();

  const data = [
    { month: '1월', value: 40 },
    { month: '2월', value: 95 },
    { month: '3월', value: 48 },
    { month: '4월', value: 72 },
    { month: '5월', value: 45 },
    { month: '6월', value: 47 },
    { month: '7월', value: 70 },
    { month: '8월', value: 25 },
    { month: '9월', value: 52 },
    { month: '10월', value: 96 },
    { month: '11월', value: 68 },
    { month: '12월', value: 26 },
  ];

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-sm p-7 border border-[#E2E8F0] dark:border-[#2E3A47] transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-xl font-bold text-[#1C2434] dark:text-white">{t('dashboard.monthlySalesTrend')}</h3>
        </div>
        <button className="text-[#64748B] hover:text-[#1C2434] dark:hover:text-white">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 relative min-h-[260px]">
        <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] pr-4 pb-8">
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>

        <div className="ml-12 h-full flex flex-col">
          <div className="flex-1 relative flex items-end justify-between px-2 pb-8">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-[#E2E8F0] dark:border-[#2E3A47]"></div>
              ))}
            </div>

            {data.map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center flex-1 group z-10 h-full justify-end">
                <div
                  className="w-full max-w-[16px] bg-[#3C50E0] rounded-t-sm hover:bg-[#3C50E0]/90 transition-all cursor-pointer relative"
                  style={{ height: `${item.value}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1C2434] text-white text-[11px] font-medium py-1 px-2.5 rounded whitespace-nowrap z-20 transition-opacity pointer-events-none">
                    {Math.round(item.value / 2.5)} {t('charts.units')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-12 right-0 flex justify-between px-2">
            {data.map((item, idx) => (
              <span key={idx} className="text-[13px] font-medium text-[#64748B] dark:text-[#8A99AF] flex-1 text-center">
                {item.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySalesChart;
