import React from 'react';
import { 
  ChevronRight, 
  ChevronRight as ArrowRight, 
  Settings, 
  Shield, 
  Bell, 
  ExternalLink 
} from 'lucide-react';

const ShowcaseDataDisplay: React.FC = () => {
  return (
    <div className="space-y-6 pb-20 font-sans">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            데이터 표시
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>UI 요소</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">데이터 표시</span>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="xl:col-span-1 bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
            <span className="absolute top-4 right-4 px-2 py-1 rounded bg-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">PRO MEMBER</span>
          </div>
          
          {/* Profile Details */}
          <div className="px-6 pb-6 flex-1 flex flex-col items-center -mt-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-md">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="profile" className="w-full h-full object-cover" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">지안나 마르티네즈</h3>
            <p className="text-xs font-semibold text-indigo-500 mt-1">리드 UI/UX 디자이너</p>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center leading-relaxed">
              사용자 친화적이고 미려한 디자인 시스템을 구축하며 프론트엔드 퍼블리싱 가이드를 최적화하는 업무를 전문적으로 수행하고 있습니다.
            </p>

            <div className="w-full border-t border-slate-100 dark:border-slate-700/60 my-5"></div>
            
            {/* Contact stats */}
            <div className="grid grid-cols-3 gap-4 w-full text-center">
              <div>
                <p className="text-base font-extrabold text-slate-800 dark:text-white">12.5k</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">팔로워</p>
              </div>
              <div>
                <p className="text-base font-extrabold text-slate-800 dark:text-white">482</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">프로젝트</p>
              </div>
              <div>
                <p className="text-base font-extrabold text-slate-800 dark:text-white">15</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">어워즈</p>
              </div>
            </div>
          </div>
        </div>

        {/* Media Article Card */}
        <div className="xl:col-span-2 bg-white dark:bg-[#1A222C] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative min-h-[220px] md:min-h-auto">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400" alt="article" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 uppercase tracking-wide">디자인 시스템</span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-snug hover:text-indigo-500 transition-colors cursor-pointer">
                프론트엔드 개발 속도를 2배 높이는 Tailwind CSS 디자인 가이드
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                모듈화되고 재사용 가능한 UI 컴포넌트를 설계하여 팀 협업 효율을 대폭 상승시킬 수 있는 시각적 토큰 정의 방법과 실제 컴포넌트 쇼룸 개발 튜토리얼을 다룹니다.
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-700/60 mt-6">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-sm">
                <img src="https://i.pravatar.cc/150?u=1" alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">김민우 파트너</p>
                <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">2027년 1월 7일 · 8분 리딩</p>
              </div>
              <button className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 rounded-xl transition-all cursor-pointer">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Avatar Showcase Section */}
        <div className="xl:col-span-1 bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">아바타 종류 (Avatars)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">팀원이나 사용자의 프로필을 나타내는 아바타 스타일 모음입니다.</p>
          </div>

          <div className="space-y-4">
            {/* Circular & Square */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">기본 모양 (Shape)</h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50">
                  <img src="https://i.pravatar.cc/150?u=3" alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50">
                  <img src="https://i.pravatar.cc/150?u=3" alt="avatar" className="w-full h-full object-cover" />
                </div>
                {/* Initial Avatar */}
                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-indigo-200 dark:shadow-none">
                  JW
                </div>
              </div>
            </div>

            {/* Team Avatar Group */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">아바타 그룹 (Team Members)</h4>
              <div className="flex items-center">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=100&h=100&fit=crop" alt="member" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&h=100&fit=crop" alt="member" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="member" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="member" />
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-3">+ 12명 참여 중</span>
              </div>
            </div>
          </div>
        </div>

        {/* List Group Section */}
        <div className="xl:col-span-2 bg-white dark:bg-[#1A222C] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">리스트 그룹 (List Groups)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">아이콘 정보와 액션 링크가 결합된 설정 혹은 목록 구조입니다.</p>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
            {/* List item 1 */}
            <div className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400 transition-colors">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">시스템 세부 관리</p>
                  <p className="text-xs text-slate-400 mt-0.5">데이터베이스 상태 모니터링 및 로깅 제어</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded">활성화됨</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* List item 2 */}
            <div className="flex items-center justify-between py-3.5 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400 transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">계정 및 보안 등급</p>
                  <p className="text-xs text-slate-400 mt-0.5">2차 인증 관리 및 로그인 접속 장치 목록 조회</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded">조치 필요</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* List item 3 */}
            <div className="flex items-center justify-between py-3.5 last:pb-0 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400 transition-colors">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">수신 알림 정보 설정</p>
                  <p className="text-xs text-slate-400 mt-0.5">알림 푸시 옵션 및 메시지 발송 정책 제어</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">기본값</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShowcaseDataDisplay;
