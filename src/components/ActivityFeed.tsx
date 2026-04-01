import React from 'react';


const ActivityFeed: React.FC = () => {
  const activities = [
    {
      type: 'user',
      title: '새 사용자 등록됨',
      desc: 'Alex Johnson님이 플랫폼에 가입했습니다.',
      time: '2분 전',
      color: 'bg-indigo-500'
    },
    {
      type: 'system',
      title: '데이터베이스 백업 완료',
      desc: '주간 자동 백업이 완료되었습니다.',
      time: '1시간 전',
      color: 'bg-emerald-500'
    },
    {
      type: 'alert',
      title: '높은 CPU 사용량 감지됨',
      desc: 'Server-01의 CPU 부하가 90%에 도달했습니다.',
      time: '3시간 전',
      color: 'bg-amber-500'
    },
    {
      type: 'system',
      title: '서버 유지 보수',
      desc: '예정된 유지 보수가 완료되었습니다.',
      time: '5시간 전',
      color: 'bg-slate-500'
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm p-6 h-full flex flex-col transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">최근 활동</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">시스템 업데이트</p>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Vertical Line */}
        <div className="absolute top-2 bottom-0 left-[11px] w-0.5 bg-slate-100 dark:bg-slate-800"></div>

        <div className="space-y-6 relative">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="relative mt-1 shrink-0">
                <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-[#1A222C] flex items-center justify-center ${activity.color} z-10 relative`}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight mb-0.5">{activity.title}</p>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{activity.time}</span>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
