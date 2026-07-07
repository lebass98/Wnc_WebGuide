import React, { useState } from 'react';
import { 
  ChevronRight, 
  Trash2, 
  Send, 
  ArrowRight, 
  Loader2, 
  Download, 
  Check 
} from 'lucide-react';

const ShowcaseButtonsBadges: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerLoading = () => {
    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            버튼 & 배지
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">버튼 & 배지</span>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Box 1: Button Themes */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">버튼 테마 스타일</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">용도와 중요도에 맞춰 세분화된 테마 스타일입니다.</p>
          </div>
          
          <div className="space-y-4">
            {/* Primary Filled Buttons */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">배경이 찬 버튼 (Filled)</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2.5 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">기본 인디고</button>
                <button className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">다크 테마</button>
                <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">에메랄드</button>
                <button className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">경고 로즈</button>
              </div>
            </div>

            {/* Outlined Buttons */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">테두리형 버튼 (Outlined)</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer">보통 테두리</button>
                <button className="px-5 py-2.5 border border-indigo-500 hover:bg-indigo-500/10 text-indigo-500 rounded-xl text-xs font-bold transition-all cursor-pointer">인디고 라인</button>
                <button className="px-5 py-2.5 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold transition-all cursor-pointer">그린 라인</button>
                <button className="px-5 py-2.5 border border-rose-500 hover:bg-rose-500/10 text-rose-500 rounded-xl text-xs font-bold transition-all cursor-pointer">레드 라인</button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">고스트 텍스트 버튼 (Ghost)</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer">회색 고스트</button>
                <button className="px-4 py-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer">인디고 고스트</button>
                <button className="px-4 py-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer">레드 고스트</button>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Button Sizes & Interactive */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">버튼 규격 & 상호작용</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">상황에 알맞은 크기와 아이콘 연동, 액티브 로더 예시입니다.</p>
          </div>

          <div className="space-y-4">
            {/* Sizes */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">버튼 크기 (Sizes)</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="px-3 py-1.5 bg-[#4B62FA] text-white rounded-lg text-[10px] font-black tracking-wider uppercase cursor-pointer">Mini</button>
                <button className="px-4 py-2 bg-[#4B62FA] text-white rounded-lg text-xs font-bold cursor-pointer">Small</button>
                <button className="px-5 py-2.5 bg-[#4B62FA] text-white rounded-xl text-xs font-bold cursor-pointer">Medium</button>
                <button className="px-7 py-3.5 bg-[#4B62FA] text-white rounded-2xl text-sm font-black tracking-wide cursor-pointer">Large Size</button>
              </div>
            </div>

            {/* Icon Combination */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아이콘 연동 버튼</h4>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#4B62FA] hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer">
                  <Send className="w-3.5 h-3.5" />
                  메시지 보내기
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer">
                  내보내기
                  <Download className="w-3.5 h-3.5" />
                </button>
                <button className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Loading Simulator */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">로딩 상태 시뮬레이션</h4>
              <div>
                <button 
                  onClick={triggerLoading}
                  className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                      처리 중...
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      전송 성공
                    </>
                  ) : (
                    <>
                      클릭하여 업로드
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3: Button Groups */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">버튼 그룹 (Button Groups)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">밀접하게 붙여서 다중 분기를 깔끔하게 컨트롤하는 구조입니다.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">가로형 버튼 그룹</h4>
              <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border-r border-slate-200 dark:border-slate-700 cursor-pointer">오늘</button>
                <button className="px-5 py-2.5 bg-slate-50 dark:bg-slate-700 text-xs font-bold text-indigo-600 dark:text-white border-r border-slate-200 dark:border-slate-700 cursor-pointer">이번 주</button>
                <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">이번 달</button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타/아이콘 버튼 그룹</h4>
              <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                {['수정', '미리보기', '삭제'].map((label, idx) => (
                  <button 
                    key={idx}
                    className={`px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer ${
                      idx !== 2 ? 'border-r border-slate-200 dark:border-slate-700' : ''
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Box 4: Badges */}
        <div className="bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">배지 및 상태 라벨 (Badges)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">상태 정보나 개수를 표현하기 적절한 스타일 칩셋입니다.</p>
          </div>

          <div className="space-y-4">
            {/* Standard Soft Badges */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">소프트 배지 (Soft Colors)</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">대시보드</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">작업 완료</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">진행 중</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">반려됨</span>
              </div>
            </div>

            {/* Solid Bold Badges */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">솔리드 배지 (Solid Colors)</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#4B62FA] text-white">NEW</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-emerald-500 text-white">ACTIVE</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-rose-500 text-white">FAIL</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-slate-900 dark:bg-slate-700 text-white">99+</span>
              </div>
            </div>

            {/* Avatar Status Overlays */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타 활동 상태 닷 (Status dot)</h4>
              <div className="flex items-center gap-4">
                {/* Active user */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
                    <img src="https://i.pravatar.cc/150?u=1" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800"></span>
                </div>

                {/* Away user */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
                    <img src="https://i.pravatar.cc/150?u=4" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-amber-500 border-2 border-white dark:border-slate-800"></span>
                </div>

                {/* Offline user */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm">
                    <img src="https://i.pravatar.cc/150?u=9" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShowcaseButtonsBadges;
