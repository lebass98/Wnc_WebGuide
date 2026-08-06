export interface ComponentItem {
  id: string;
  title: string;
  category: 'buttons' | 'forms' | 'modals' | 'tables' | 'webzine' | 'charts';
  description: string;
  badge?: 'NEW' | 'HOT' | 'POPULAR';
  reactCode: string;
  htmlCode: string;
  route: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  category: 'webzine' | 'application';
  description: string;
  tag: string;
  imageBg: string;
  route: string;
  itemCount: number;
}

export interface MetricItem {
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface UpdateLog {
  date: string;
  version: string;
  title: string;
  description: string;
  tag: 'Feature' | 'Webzine' | 'UI Component' | 'Improvement';
}

// 1. Hero Live Playground Code Snippets
export const heroLiveSnippet = {
  react: `<button className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer">
  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
  <span>시작하기 (Get Started)</span>
</button>`,
  html: `<button class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all inline-flex items-center gap-2 cursor-pointer">
  <svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
  <span>시작하기 (Get Started)</span>
</button>`
};

// 2. Featured UI Components
export const featuredComponents: ComponentItem[] = [
  {
    id: 'btn-gradient',
    title: '그라데이션 샤인 버튼',
    category: 'buttons',
    description: '빛나는 그라데이션 인터랙티브 호버 애니메이션 버튼',
    badge: 'HOT',
    reactCode: `<button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white shadow-md hover:shadow-lg transition-all">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0">
    샤인 버튼
  </span>
</button>`,
    htmlCode: `<button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 text-white">
  <span class="relative px-5 py-2.5 bg-slate-900 rounded-[10px] group-hover:bg-opacity-0 transition-all">
    샤인 버튼
  </span>
</button>`,
    route: '/ui/buttons-badges#btn-gradient'
  },
  {
    id: 'input-floating',
    title: '플로팅 라벨 인풋',
    category: 'forms',
    description: '입력 시 상단으로 부드럽게 이동하는 모던 인풋',
    badge: 'POPULAR',
    reactCode: `<div className="relative">
  <input type="text" id="floating_input" className="block px-4 pb-2.5 pt-4 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 peer" placeholder=" " />
  <label htmlFor="floating_input" className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600">이메일 주소</label>
</div>`,
    htmlCode: `<div class="relative">
  <input type="text" id="floating" class="block px-4 pb-2.5 pt-4 w-full text-sm bg-slate-50 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 peer" placeholder=" " />
  <label for="floating" class="absolute text-sm text-slate-500 duration-300 transform -translate-y-3 scale-75 top-4 left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-indigo-600">이메일 주소</label>
</div>`,
    route: '/components/input#input-floating'
  },
  {
    id: 'modal-glass',
    title: '글래스모피즘 알림 모달',
    category: 'modals',
    description: '반투명 블러 백드롭 스타일의 고급스러운 모달 카드',
    badge: 'NEW',
    reactCode: `<div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl text-white max-w-sm">
  <h3 className="text-lg font-bold text-indigo-400">성공적으로 완료되었습니다</h3>
  <p className="mt-2 text-sm text-slate-300">변경사항이 저장되었습니다. 즉시 확인해보세요.</p>
  <button className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">확인</button>
</div>`,
    htmlCode: `<div class="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white max-w-sm">
  <h3 class="text-lg font-bold text-indigo-400">성공적으로 완료되었습니다</h3>
  <p class="mt-2 text-sm text-slate-300">변경사항이 저장되었습니다.</p>
  <button class="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg">확인</button>
</div>`,
    route: '/ui/alerts-modals#modal-glass'
  },
  {
    id: 'table-hover',
    title: '인터랙티브 데이터 데이터 테이블',
    category: 'tables',
    description: '상태 뱃지, 프로필 아바타, 정렬 호버 효과가 포함된 테이블 스니펫',
    badge: 'POPULAR',
    reactCode: `<table className="w-full text-sm text-left text-slate-600 dark:text-slate-300">
  <thead className="text-xs uppercase bg-slate-100 dark:bg-slate-800 text-slate-500">
    <tr><th className="px-4 py-3">사용자</th><th className="px-4 py-3">상태</th></tr>
  </thead>
  <tbody>
    <tr className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">김철수</td>
      <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">활성</span></td>
    </tr>
  </tbody>
</table>`,
    htmlCode: `<table class="w-full text-sm text-left text-slate-600">
  <thead class="text-xs uppercase bg-slate-100">
    <tr><th class="px-4 py-3">사용자</th><th class="px-4 py-3">상태</th></tr>
  </thead>
  <tbody>
    <tr class="border-b hover:bg-slate-50">
      <td class="px-4 py-3 font-medium">김철수</td>
      <td class="px-4 py-3"><span class="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full">활성</span></td>
    </tr>
  </tbody>
</table>`,
    route: '/tables/basic#table-hover'
  },
  {
    id: 'webzine-card',
    title: '웹진 아르떼 카드 스니펫',
    category: 'webzine',
    description: '이미지 호버 줌과 에디터 프로필이 결합된 아티클 카드 스니펫',
    badge: 'HOT',
    reactCode: `<div className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
  <div className="relative overflow-hidden aspect-video">
    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Cover" />
  </div>
  <div className="p-5">
    <span className="text-xs font-semibold text-indigo-500 uppercase">Arte Webzine</span>
    <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">디지털 아트의 새로운 패러다임</h4>
  </div>
</div>`,
    htmlCode: `<div class="group overflow-hidden rounded-2xl bg-white border shadow-md">
  <div class="aspect-video overflow-hidden">
    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div class="p-5">
    <span class="text-xs font-semibold text-indigo-500 uppercase">Arte Webzine</span>
    <h4 class="mt-1 text-base font-bold text-slate-900">디지털 아트의 새로운 패러다임</h4>
  </div>
</div>`,
    route: '/webzine/arte/image#webzine-card'
  },
  {
    id: 'chart-sparkline',
    title: '스파크라인 라인 차트',
    category: 'charts',
    description: '트렌드를 한눈에 보여주는 경량 비주얼 라인 차트 카드',
    badge: 'NEW',
    reactCode: `<div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white flex items-center justify-between">
  <div>
    <p className="text-xs text-slate-400">주간 트래픽</p>
    <p className="text-xl font-bold text-emerald-400">+28.4%</p>
  </div>
  <div className="w-24 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-xs text-emerald-400 font-mono">
    ▲ TRENDING
  </div>
</div>`,
    htmlCode: `<div class="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white flex items-center justify-between">
  <div>
    <p class="text-xs text-slate-400">주간 트래픽</p>
    <p class="text-xl font-bold text-emerald-400">+28.4%</p>
  </div>
  <div class="w-24 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-xs text-emerald-400">
    ▲ TRENDING
  </div>
</div>`,
    route: '/charts/line#chart-sparkline'
  }
];

// 3. Webzine & Page Templates Showcase
export const templatesShowcase: TemplateItem[] = [
  {
    id: 'tmpl-eeum',
    title: '이음(Eeum) 웹진 메인 & 섹션',
    category: 'webzine',
    description: '텍스트, 박스, 이미지, 영상, 프로필, 테이블 컴포넌트 조합형 모던 웹진 템플릿',
    tag: 'Webzine Layout',
    imageBg: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    route: '/webzine/eeum',
    itemCount: 7
  },
  {
    id: 'tmpl-arte',
    title: '아르떼(Arte) 아티클 & 갤러리',
    category: 'webzine',
    description: '예술, 디자인, 감성 아티클 블록과 미디어 중심의 비주얼 그리드 레이아웃 템플릿',
    tag: 'Editorial & Gallery',
    imageBg: 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
    route: '/webzine/arte',
    itemCount: 8
  },
  {
    id: 'tmpl-dashboard',
    title: '어드민 서비스 대시보드',
    category: 'application',
    description: 'KPI 카드, 차트, 데이터 테이블, 타겟 프로그레스가 통합된 모던 어드민 UI',
    tag: 'Admin App',
    imageBg: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    route: '/pages/dashboard',
    itemCount: 5
  },
  {
    id: 'tmpl-kanban',
    title: '인터랙티브 칸반 보드',
    category: 'application',
    description: '드래그 앤 드롭 지원 상태별 태스크 및 프로젝트 관리 보드 레이아웃',
    tag: 'Task Management',
    imageBg: 'from-emerald-500/20 via-green-500/20 to-lime-500/20',
    route: '/tasks/kanban',
    itemCount: 4
  }
];

// 4. Library Overview Metric KPIs
export const libraryMetrics: MetricItem[] = [
  {
    label: 'UI Components',
    value: '120+',
    change: '+14 이번 달',
    description: '버튼, 폼, 모달, 테이블, 차트, 카드 스니펫'
  },
  {
    label: 'Webzine & Templates',
    value: '15+',
    change: '이음 & 아르떼 포함',
    description: '즉시 활용 가능한 페이지 전체 스니펫'
  },
  {
    label: 'Code Copy Speed',
    value: '1-Click',
    change: 'React & HTML',
    description: '종속성 없이 내 코드베이스에 붙여넣기'
  },
  {
    label: 'Theme & Custom',
    value: '100%',
    change: 'Tailwind v4 & CSS',
    description: '원하는 디자인 시스템으로 쉽게 변형 가능'
  }
];

// 5. Changelog / Recent Updates
export const recentUpdates: UpdateLog[] = [
  {
    date: '2026-08-06',
    version: 'v2.4.0',
    title: '웹진 아르떼(Arte) 신규 공지사항 & 이미지 그리드 추가',
    description: '아르떼 웹진 전용 ArteNotice 및 ArteNew 최신 레이아웃 스니펫이 업데이트되었습니다.',
    tag: 'Webzine'
  },
  {
    date: '2026-08-01',
    version: 'v2.3.0',
    title: 'Tailwind CSS v4 지원 및 반응형 UI 프리뷰 개선',
    description: '최신 Tailwind v4 패키지 호환성 및 모바일 프리뷰 토글을 지원합니다.',
    tag: 'UI Component'
  },
  {
    date: '2026-07-25',
    version: 'v2.2.0',
    title: '이음(Eeum) 비디오 & 프로필 레이아웃 릴리즈',
    description: '유튜브/비디오 엠베드 카드 및 인물 프로필 스니펫이 라이브러리에 추가되었습니다.',
    tag: 'Feature'
  }
];
