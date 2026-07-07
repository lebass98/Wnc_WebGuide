import React from 'react';
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const BasicTables: React.FC = () => {
  return (
    <div className="space-y-10 pb-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold text-slate-900 dark:text-white leading-tight">
            기본 테이블
          </h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            <span>홈</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>테이블</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">기본 테이블</span>
          </div>
        </div>
      </div>

      {/* Basic Table 1 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">기본 테이블 1</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <h4 className="text-lg font-bold text-slate-800 dark:text-white">인기 채널</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">사용자</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">프로젝트명</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">팀</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">예산</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {[
                  {
                    user: { name: 'Lindsey Curtis', role: '웹 디자이너', avatar: 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop' },
                    project: '에이전시 웹사이트',
                    team: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop'],
                    status: '진행 중',
                    budget: '3.9K'
                  },
                  {
                    user: { name: 'Kaiya George', role: '프로젝트 매니저', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                    project: '테크놀로지',
                    team: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'],
                    status: '대기 중',
                    budget: '24.9K'
                  },
                  {
                    user: { name: 'Zain Geidt', role: '콘텐츠 라이터', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
                    project: '블로그 글쓰기',
                    team: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'],
                    status: '진행 중',
                    budget: '12.7K'
                  },
                  {
                    user: { name: 'Abram Schleifer', role: '디지털 마케터', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
                    project: '소셜 미디어',
                    team: ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1535711603863-10d97bc7a2d4?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'],
                    status: '취소',
                    budget: '2.8K'
                  },
                  {
                    user: { name: 'Carla George', role: '프론트엔드 개발자', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                    project: '웹사이트',
                    team: ['https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'],
                    status: '진행 중',
                    budget: '4.5K'
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={row.user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
                        <div>
                          <div className="text-sm font-bold text-slate-800 dark:text-white">{row.user.name}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.user.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">{row.project}</td>
                    <td className="px-6 py-4">
                      <div className="flex -space-x-2">
                        {row.team.map((avatar, idx) => (
                          <img key={idx} src={avatar} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 object-cover" alt="" />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                        row.status === '진행 중' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                        row.status === '대기 중' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                        'bg-red-50 dark:bg-red-500/10 text-red-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-700 dark:text-slate-200">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Basic Table 2 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">기본 테이블 2</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">최근 주문</h4>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="검색..." 
                    className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none w-full sm:w-64 focus:border-indigo-500 transition-all"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  필터
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                    <th className="px-4 py-4 w-10">
                      <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                    </th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">거래 ID</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">고객</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">제품/서비스</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">거래 가치</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">마감일</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">상태</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase text-center">작업</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { id: 'DE124321', customer: { name: 'John Doe', email: 'johndoe@gmail.com', avatar: 'JD' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: '완료' },
                    { id: 'DE124321', customer: { name: 'Kierra Franci', email: 'kierra@gmail.com', avatar: 'KF' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: '완료' },
                    { id: 'DE124321', customer: { name: 'Emerson Workman', email: 'emerson@gmail.com', avatar: 'EW' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: '대기 중' },
                    { id: 'DE124321', customer: { name: 'Chance Philips', email: 'chance@gmail.com', avatar: 'CP' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: '완료' },
                    { id: 'DE124321', customer: { name: 'Terry Geidt', email: 'terry@gmail.com', avatar: 'TG' }, product: 'Software License', value: '$18,50.34', date: '2024-06-15', status: '완료' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-slate-800 dark:text-200">{row.id}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold shrink-0">{row.customer.avatar}</div>
                          <div>
                            <div className="text-[13px] font-bold text-slate-800 dark:text-white">{row.customer.name}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.customer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[13px] font-medium text-slate-600 dark:text-slate-300">{row.product}</td>
                      <td className="px-4 py-4 text-[13px] font-bold text-slate-800 dark:text-white">{row.value}</td>
                      <td className="px-4 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.date}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${row.status === '완료' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' : 'bg-orange-50 dark:bg-orange-500/10 text-orange-600'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 3 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">기본 테이블 3</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">최근 거래</h4>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="검색..." 
                  className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm outline-none w-full sm:w-64 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/10 dark:bg-slate-800/20">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">이름</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">날짜</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">가격</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">카테고리</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">상태</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { name: 'PYPL 매수', date: 'Nov 23, 01:00 PM', price: '$2,567.88', category: '금융', status: '성공', iconColor: 'bg-blue-600', icon: 'P' },
                    { name: 'AAPL 매수', date: 'Nov 22, 09:00 PM', price: '$2,567.88', category: '기술', status: '대기 중', iconColor: 'bg-slate-900', icon: 'A' },
                    { name: 'KKST 매도', date: 'Oct 12, 03:54 PM', price: '$6,754.88', category: '금융', status: '성공', iconColor: 'bg-emerald-600', icon: 'K' },
                    { name: 'FB 매수', date: 'Sep 09, 02:00 AM', price: '$1,445.41', category: '소셜 미디어', status: '성공', iconColor: 'bg-blue-500', icon: 'F' },
                    { name: 'AMZN 매도', date: 'Feb 15, 08:00 PM', price: '$5,698.55', category: '이커머스', status: '실패', iconColor: 'bg-orange-600', icon: 'a' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${row.iconColor} text-white flex items-center justify-center font-bold text-sm`}>{row.icon}</div>
                          <span className="text-sm font-bold text-slate-800 dark:text-white">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-white">{row.price}</td>
                      <td className="px-6 py-4 text-[13px] font-medium text-slate-500 dark:text-slate-400">{row.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                          row.status === '성공' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                          row.status === '대기 중' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                          'bg-red-50 dark:bg-red-500/10 text-red-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" />
                이전
              </button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 8, 9, 10].map((p, i) => (
                  <button key={i} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600' : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}>
                    {p}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                다음
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 4 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">기본 테이블 4</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <h4 className="text-lg font-bold text-slate-800 dark:text-white">주요 캠페인</h4>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50 dark:border-slate-800">
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">크리에이터</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">캠페인</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">상태</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { name: 'Wilson Gouse', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', campaign: '브랜드를 성장시키세요...', type: '광고 캠페인', platform: 'Slack', status: '성공' },
                    { name: 'Terry Franci', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop', campaign: '더 나은 아이디어를...', type: '광고 캠페인', platform: 'Facebook', status: '대기 중' },
                    { name: 'Alena Franci', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', campaign: '웹사이트 트래픽 증가...', type: '광고 캠페인', platform: 'Google', status: '성공' },
                    { name: 'Jocelyn Kenter', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop', campaign: '디지털 마케팅...', type: '광고 캠페인', platform: 'Instagram', status: '실패' },
                    { name: 'Brandon Philips', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', campaign: '퍼스널 브랜딩', type: '광고 캠페인', platform: 'Facebook', status: '성공' },
                    { name: 'James Lipshutz', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', campaign: '웹사이트 트래픽 증가...', type: '광고 캠페인', platform: 'Google', status: '성공' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img src={row.avatar} className="w-9 h-9 rounded-full object-cover" alt="" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
                            row.platform === 'Slack' ? 'bg-[#4A154B]' :
                            row.platform === 'Facebook' ? 'bg-[#1877F2]' :
                            row.platform === 'Google' ? 'bg-[#4285F4]' :
                            'bg-[#E1306C]'
                          }`}>
                            {row.platform[0]}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800 dark:text-white">{row.campaign}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">{row.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          row.status === '성공' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' :
                          row.status === '대기 중' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600' :
                          'bg-red-50 dark:bg-red-500/10 text-red-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table 5 Section */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white mb-4">기본 테이블 5</h3>
        <div className="bg-white dark:bg-[#1A222C] rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">최근 주문</h4>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  필터
                </button>
                <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  전체 보기
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50 dark:border-slate-800">
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">제품</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">카테고리</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">국가</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CR</th>
                    <th className="px-4 py-4 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">가치</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { product: 'TailGrids', category: 'UI 키트', country: '🇺🇸', cr: '대시보드', value: '$12,499' },
                    { product: 'GrayGrids', category: '템플릿', country: '🇸🇬', cr: '대시보드', value: '$5,498' },
                    { product: 'Uideck', category: '템플릿', country: '🇬🇧', cr: '대시보드', value: '$4,521' },
                    { product: 'FormBold', category: 'SaaS', country: '🇪🇬', cr: '대시보드', value: '$13,843' },
                    { product: 'NextAdmin', category: '대시보드', country: '🇫🇮', cr: '대시보드', value: '$7,523' },
                    { product: 'FormBuilder', category: 'SaaS', country: '🇧🇪', cr: '대시보드', value: '$1,377' },
                    { product: 'AyroUI', category: 'UI 키트', country: '🇧🇩', cr: '대시보드', value: '$599,00' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-4 text-sm font-bold text-slate-800 dark:text-white">{row.product}</td>
                      <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{row.category}</td>
                      <td className="px-4 py-4 text-xl">{row.country}</td>
                      <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">{row.cr}</td>
                      <td className="px-4 py-4 text-sm font-bold text-emerald-500">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTables;
