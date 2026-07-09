import ShowcaseWrapper from './ShowcaseWrapper';
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  X as CloseIcon } from 'lucide-react';
import CustomDatePicker from './CustomDatePicker';
import codeSnippets from './CalendarSnippets.json';



interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  type: 'danger' | 'success' | 'primary' | 'warning';
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 11)); // March 11, 2026
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const defaultEvents: Event[] = [
    { id: '1', title: '이벤트 컨퍼런스', startDate: new Date(2026, 2, 11), endDate: new Date(2026, 2, 11), type: 'danger' },
    { id: '2', title: '회의', startDate: new Date(2026, 2, 12), endDate: new Date(2026, 2, 12), type: 'success' },
    { id: '3', title: '워크샵', startDate: new Date(2026, 2, 13), endDate: new Date(2026, 2, 13), type: 'primary' },
  ];

  const koreanHolidays: Event[] = [
    // 2026년 법정 공휴일 (빨간날 - type: 'danger')
    { id: 'h1', title: '신정', startDate: new Date(2026, 0, 1), endDate: new Date(2026, 0, 1), type: 'danger' },
    { id: 'h2', title: '설날 연휴', startDate: new Date(2026, 1, 16), endDate: new Date(2026, 1, 16), type: 'danger' },
    { id: 'h3', title: '설날', startDate: new Date(2026, 1, 17), endDate: new Date(2026, 1, 17), type: 'danger' },
    { id: 'h4', title: '설날 연휴', startDate: new Date(2026, 1, 18), endDate: new Date(2026, 1, 18), type: 'danger' },
    { id: 'h5', title: '삼일절', startDate: new Date(2026, 2, 1), endDate: new Date(2026, 2, 1), type: 'danger' },
    { id: 'h6', title: '대체공휴일(삼일절)', startDate: new Date(2026, 2, 2), endDate: new Date(2026, 2, 2), type: 'danger' },
    { id: 'h7', title: '어린이날', startDate: new Date(2026, 4, 5), endDate: new Date(2026, 4, 5), type: 'danger' },
    { id: 'h8', title: '부처님오신날', startDate: new Date(2026, 4, 24), endDate: new Date(2026, 4, 24), type: 'danger' },
    { id: 'h9', title: '대체공휴일(부처님)', startDate: new Date(2026, 4, 25), endDate: new Date(2026, 4, 25), type: 'danger' },
    { id: 'h10', title: '지방선거', startDate: new Date(2026, 5, 3), endDate: new Date(2026, 5, 3), type: 'danger' },
    { id: 'h11', title: '현충일', startDate: new Date(2026, 5, 6), endDate: new Date(2026, 5, 6), type: 'danger' },
    { id: 'h12', title: '광복절', startDate: new Date(2026, 7, 15), endDate: new Date(2026, 7, 15), type: 'danger' },
    { id: 'h13', title: '대체공휴일(광복절)', startDate: new Date(2026, 7, 17), endDate: new Date(2026, 7, 17), type: 'danger' },
    { id: 'h14', title: '추석 연휴', startDate: new Date(2026, 8, 24), endDate: new Date(2026, 8, 24), type: 'danger' },
    { id: 'h15', title: '추석', startDate: new Date(2026, 8, 25), endDate: new Date(2026, 8, 25), type: 'danger' },
    { id: 'h16', title: '추석 연휴', startDate: new Date(2026, 8, 26), endDate: new Date(2026, 8, 26), type: 'danger' },
    { id: 'h17', title: '개천절', startDate: new Date(2026, 9, 3), endDate: new Date(2026, 9, 3), type: 'danger' },
    { id: 'h18', title: '대체공휴일(개천절)', startDate: new Date(2026, 9, 5), endDate: new Date(2026, 9, 5), type: 'danger' },
    { id: 'h19', title: '한글날', startDate: new Date(2026, 9, 9), endDate: new Date(2026, 9, 9), type: 'danger' },
    { id: 'h20', title: '기독탄신일', startDate: new Date(2026, 11, 25), endDate: new Date(2026, 11, 25), type: 'danger' },
    
    // 국가 지정 특정일 및 기념일 (type: 'warning'으로 구분)
    { id: 'a1', title: '식목일', startDate: new Date(2026, 3, 5), endDate: new Date(2026, 3, 5), type: 'warning' },
    { id: 'a2', title: '어버이날', startDate: new Date(2026, 4, 8), endDate: new Date(2026, 4, 8), type: 'warning' },
    { id: 'a3', title: '스승의 날', startDate: new Date(2026, 4, 15), endDate: new Date(2026, 4, 15), type: 'warning' },
    { id: 'a4', title: '제헌절', startDate: new Date(2026, 6, 17), endDate: new Date(2026, 6, 17), type: 'warning' },
    { id: 'a5', title: '국군의 날', startDate: new Date(2026, 9, 1), endDate: new Date(2026, 9, 1), type: 'warning' }
  ];

  const [events, setEvents] = useState<Event[]>([...defaultEvents, ...koreanHolidays]);

  const [formData, setFormData] = useState({
    title: '',
    type: 'primary' as Event['type'],
    startDate: new Date(2026, 3, 6),
    endDate: new Date(2026, 3, 7)
  });

  const timeSlots = ['하루 종일', '오전 6시', '오전 7시', '오전 8시', '오전 9시', '오전 10시', '오전 11시', '오후 12시', '오후 1시', '오후 2시', '오후 3시', '오후 4시', '오후 5시', '오후 6시', '오후 7시', '오후 8시', '오후 9시', '오후 10시'];
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // Helper functions
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getWeekRange = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${end.toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}`;
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === 'month') newDate.setMonth(currentDate.getMonth() - 1);
    else if (view === 'week') newDate.setDate(currentDate.getDate() - 7);
    else newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'month') newDate.setMonth(currentDate.getMonth() + 1);
    else if (view === 'week') newDate.setDate(currentDate.getDate() + 7);
    else newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleAddEvent = (initialDate?: Date) => {
    const defaultDate = initialDate || new Date();
    setFormData({
      title: '',
      type: 'primary',
      startDate: defaultDate,
      endDate: defaultDate
    });
    setIsEditing(false);
    setEditingEventId(null);
    setIsModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setFormData({
      title: event.title,
      type: event.type,
      startDate: event.startDate,
      endDate: event.endDate
    });
    setEditingEventId(event.id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && editingEventId) {
      setEvents(events.map(event => 
        event.id === editingEventId 
          ? { ...event, ...formData } 
          : event
      ));
    } else {
      const newEvent: Event = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData
      };
      setEvents([...events, newEvent]);
    }
    
    setIsModalOpen(false);
    setFormData({
      title: '',
      type: 'primary',
      startDate: new Date(2026, 3, 6),
      endDate: new Date(2026, 3, 7)
    });
  };

  const getEventStyles = (type: string) => {
    switch (type) {
      case 'danger': return 'bg-red-50 dark:bg-red-500/10 text-slate-700 dark:text-slate-300 border-l-4 border-red-500';
      case 'success': return 'bg-emerald-50 dark:bg-emerald-500/10 text-slate-700 dark:text-slate-300 border-l-4 border-emerald-500';
      case 'primary': return 'bg-indigo-50 dark:bg-indigo-500/10 text-slate-700 dark:text-slate-300 border-l-4 border-indigo-500';
      case 'warning': return 'bg-orange-50 dark:bg-orange-500/10 text-slate-700 dark:text-slate-300 border-l-4 border-orange-500';
      default: return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-l-4 border-slate-500';
    }
  };

  const getRadioStyles = (type: Event['type']) => {
    const colors = {
      danger: 'bg-red-500 border-red-500',
      success: 'bg-emerald-500 border-emerald-500',
      primary: 'bg-[#4B62FA] border-[#4B62FA]',
      warning: 'bg-orange-500 border-orange-500'
    };
    return formData.type === type ? `${colors[type]} ring-offset-2 ring-2` : 'bg-transparent border-slate-300 dark:border-slate-600';
  };

  // --- Rendering UI Parts ---

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const prevMonthDays = getDaysInMonth(year, month - 1);
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push({ day: prevMonthDays - firstDay + i + 1, current: false, date: new Date(year, month - 1, prevMonthDays - firstDay + i + 1) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({ day: i, current: true, date: new Date(year, month, i) });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
        days.push({ day: i, current: false, date: new Date(year, month + 1, i) });
    }

    return (
      <div className="grid grid-cols-7 border-t border-slate-200 dark:border-slate-800">
        {daysOfWeek.map(d => (
          <div key={d} className="py-4 text-center text-[13px] font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            {d}
          </div>
        ))}
        {days.map((d, i) => {
          const dayEvents = events.filter(e => e.startDate.toDateString() === d.date.toDateString());
          return (
            <div 
                key={i} 
                onClick={() => handleAddEvent(d.date)}
                className={`min-h-[140px] p-2 border-r border-b border-slate-200 dark:border-slate-800 last:border-r-0 cursor-pointer transition-all active:scale-[0.98] active:bg-slate-50 dark:active:bg-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 ${d.current ? '' : 'bg-slate-50/30 dark:bg-slate-800/20'}`}
            >
              <div className="flex justify-start mb-2 px-1">
                <span className={`text-[14px] font-bold ${d.current ? 'text-slate-800 dark:text-slate-200' : 'text-slate-300 dark:text-slate-700'}`}>
                    {d.day}
                </span>
              </div>
              <div className="space-y-1">
                {dayEvents.map(e => (
                  <div 
                    key={e.id} 
                    onClick={(ev) => {
                      ev.stopPropagation();
                      handleEditEvent(e);
                    }}
                    className={`px-2 py-1 rounded text-[11px] font-bold truncate cursor-pointer hover:brightness-95 transition-all ${getEventStyles(e.type)}`}
                  >
                    {e.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const weekDays = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d;
    });

    return (
      <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/30">
          <div className="border-r border-slate-200 dark:border-slate-800" />
          {weekDays.map((d, i) => (
            <div key={i} className="py-4 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0">
               <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400">
                 {daysOfWeek[i]} {d.getMonth() + 1}/{d.getDate()}
               </span>
            </div>
          ))}
        </div>
        <div className="overflow-y-auto max-h-[600px] custom-scrollbar">
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-8 border-b border-slate-100 dark:border-slate-800/50">
                <div className="p-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 border-r border-slate-200 dark:border-slate-800 text-right pr-4 uppercase">
                    {time}
                </div>
                {weekDays.map((d, i) => (
                    <div 
                        key={i} 
                        onClick={() => handleAddEvent(d)}
                        className="border-r border-slate-100 dark:border-slate-800/50 last:border-r-0 relative min-h-[50px] group transition-colors cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 active:bg-slate-100 dark:active:bg-slate-800/40"
                    >
                        {time === '하루 종일' && i === 3 && (
                            <div className={`absolute inset-x-1 top-1 bottom-1 px-2 py-1 rounded text-[10px] font-bold ${getEventStyles('danger')}`}>이벤트 컨퍼런스</div>
                        )}
                        {time === '오전 7시' && i === 4 && (
                            <div className={`absolute inset-x-1 top-1 bottom-1 px-2 py-1 rounded text-[10px] font-bold ${getEventStyles('success')}`}>회의</div>
                        )}
                        {time === '오전 7시' && i === 5 && (
                             <div className={`absolute inset-x-1 top-1 bottom-1 px-2 py-1 rounded text-[10px] font-bold ${getEventStyles('primary')}`}>워크샵</div>
                        )}
                    </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    return (
      <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-[100px_1fr] border-b border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/30">
          <div className="border-r border-slate-200 dark:border-slate-800" />
          <div className="py-4 text-center uppercase tracking-widest text-[12px] font-bold text-slate-500 dark:text-slate-400">
            {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
        </div>
        <div className="overflow-y-auto max-h-[600px] custom-scrollbar">
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-[100px_1fr] border-b border-slate-100 dark:border-slate-800/50">
               <div className="p-4 text-[12px] font-bold text-slate-400 dark:text-slate-500 border-r border-slate-200 dark:border-slate-800 text-right pr-6 uppercase leading-none">
                 {time}
               </div>
               <div 
                 onClick={() => handleAddEvent(currentDate)}
                 className="relative min-h-[60px] group transition-colors cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 active:bg-slate-100 dark:active:bg-slate-800/40" 
               />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">캘린더</h1>
        <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
          <span>홈</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>캘린더</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">일정 관리</span>
        </div>
      </div>

      <ShowcaseWrapper
        title="인터랙티브 캘린더"
        description="이벤트 추가, 수정 및 월간/주간/일간 뷰포트 전환이 가능한 인터랙티브 캘린더 컴포넌트입니다."
        snippet={codeSnippets.calendar}
      >
        <div className="bg-white dark:bg-[#1A222C] rounded-[10px] overflow-hidden">
          {/* Nav Bar */}
          <div className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                 <button onClick={handlePrev} className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all text-slate-600 dark:text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
                 <button onClick={handleNext} className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all text-slate-600 dark:text-slate-400"><ChevronRight className="w-4 h-4" /></button>
              </div>
              <button 
                onClick={() => handleAddEvent()}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 rounded-lg text-[13px] font-bold text-white transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
              >
                <Plus className="w-4 h-4" /> 이벤트 추가 +
              </button>
            </div>

            <h2 className="text-[20px] font-bold text-slate-900 dark:text-white">
              {view === 'month' ? formatMonthYear(currentDate) : view === 'week' ? getWeekRange(currentDate) : formatDate(currentDate)}
            </h2>

            <div className="flex items-center p-1 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 w-fit">
              {['month', 'week', 'day'].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v as any)}
                  className={`px-6 py-2 rounded-md text-[13px] font-bold capitalize transition-all ${view === v ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                >
                  {v === 'month' ? '월간' : v === 'week' ? '주간' : '일간'}
                </button>
              ))}
            </div>
          </div>

          {/* View Content */}
          {view === 'month' ? renderMonthView() : view === 'week' ? renderWeekView() : renderDayView()}
        </div>
      </ShowcaseWrapper>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-[560px] bg-white dark:bg-slate-900 rounded-[24px] shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8 pb-4">
                <div className="flex items-center justify-between mb-1">
                    <h2 className="text-[24px] font-bold text-slate-900 dark:text-white">{isEditing ? '이벤트 수정' : '이벤트 추가'}</h2>
                    <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"><CloseIcon className="w-5 h-5" /></button>
                </div>
                <p className="text-[14px] text-slate-500 dark:text-slate-400">다음 일정을 계획하세요: 이벤트를 추가하거나 수정하여 일정을 관리하세요</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 pt-0 space-y-6">
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">이벤트 제목</label>
                        <input
                            type="text" required value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            placeholder="작업 제목을 입력하세요"
                            className="w-full px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">이벤트 색상</label>
                        <div className="flex flex-wrap items-center gap-6 pt-1">
                            {(['danger', 'success', 'primary', 'warning'] as const).map((t) => (
                                <label key={t} className="flex items-center gap-2.5 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input type="radio" name="type" className="sr-only" onChange={() => setFormData({...formData, type: t})} />
                                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${getRadioStyles(t)}`} />
                                    </div>
                                    <span className="text-[14px] font-medium text-slate-600 dark:text-slate-400 capitalize group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">시작 날짜 입력</label>
                        <CustomDatePicker 
                            value={formData.startDate}
                            placeholder="2026. 04. 06." 
                            onChange={(d) => d instanceof Date && setFormData({...formData, startDate: d})} 
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[14px] font-bold text-slate-700 dark:text-slate-300 ml-1">종료 날짜 입력</label>
                        <CustomDatePicker 
                            value={formData.endDate}
                            placeholder="2026. 04. 07." 
                            onChange={(d) => d instanceof Date && setFormData({...formData, endDate: d})} 
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">닫기</button>
                    <button type="submit" className="px-8 py-2.5 rounded-xl bg-[#4B62FA] hover:bg-indigo-600 text-sm font-bold text-white shadow-lg transition-all active:scale-95">
                        {isEditing ? '변경사항 저장' : '이벤트 추가'}
                    </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

