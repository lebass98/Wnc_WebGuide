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

// 2. Featured UI Components - ONLY 100% REAL INDEPENDENT PAGE ROUTE COMPONENTS (Total 21 Real Pages)
export const featuredComponents: ComponentItem[] = [
  // --- Category: Buttons & Badges (6 Real Page Routes) ---
  {
    id: 'ui-buttons-badges',
    title: '버튼 & 배지 쇼케이스 (ShowcaseButtonsBadges)',
    category: 'buttons',
    description: '실제 /ui/buttons-badges 페이지의 그라데이션 및 샤인 버튼 모음',
    badge: 'POPULAR',
    route: '/ui/buttons-badges',
    reactCode: `import ShowcaseButtonsBadges from '@/components/ui/ShowcaseButtonsBadges';\n\nexport default function ButtonsDemo() {\n  return <ShowcaseButtonsBadges />;\n}`,
    htmlCode: `<button class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs rounded-xl shadow-md">샤인 버튼</button>`
  },
  {
    id: 'ui-boxes',
    title: '성장 배너 박스 (ShowcaseBoxes)',
    category: 'buttons',
    description: '실제 /ui/boxes 페이지의 토스 스타일 성장 배너 박스 & 카드 리스트',
    badge: 'NEW',
    route: '/ui/boxes',
    reactCode: `import ShowcaseBoxes from '@/components/ui/ShowcaseBoxes';\n\nexport default function BoxesDemo() {\n  return <ShowcaseBoxes />;\n}`,
    htmlCode: `<div class="p-6 rounded-[32px] bg-amber-100 flex justify-between items-center"><h2 class="text-xl font-bold">impact for growth</h2><span class="text-xs font-bold">성장의 토대 →</span></div>`
  },
  {
    id: 'ui-alerts-modals',
    title: '알림 & 토스트 쇼케이스 (ShowcaseAlertsModals)',
    category: 'buttons',
    description: '실제 /ui/alerts-modals 페이지의 성공 토스트 알림 및 다이얼로그 모음',
    badge: 'HOT',
    route: '/ui/alerts-modals',
    reactCode: `import ShowcaseAlertsModals from '@/components/ui/ShowcaseAlertsModals';\n\nexport default function AlertDemo() {\n  return <ShowcaseAlertsModals />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-900 text-white rounded-xl text-xs flex justify-between"><span>성공 반영 완료</span></div>`
  },
  {
    id: 'ui-data-display',
    title: '데이터 디스플레이 쇼케이스 (ShowcaseDataDisplay)',
    category: 'buttons',
    description: '실제 /ui/data-display 페이지의 프로필 아바타 & 상태 뱃지 모음',
    badge: 'NEW',
    route: '/ui/data-display',
    reactCode: `import ShowcaseDataDisplay from '@/components/ui/ShowcaseDataDisplay';\n\nexport default function DataDisplayDemo() {\n  return <ShowcaseDataDisplay />;\n}`,
    htmlCode: `<div class="flex items-center gap-2 p-2 bg-white border rounded-xl">
  <img src="/avatar.png" class="w-8 h-8 rounded-full" />
  <span class="text-xs font-bold">김서연</span>
</div>`
  },
  {
    id: 'ui-boards',
    title: '토스 아티클 & 보도자료 게시판 (ShowcaseBoards)',
    category: 'buttons',
    description: '실제 /ui/boards 페이지의 카테고리 탭 & 토스 스타일 아티클 게시판',
    badge: 'NEW',
    route: '/ui/boards',
    reactCode: `import ShowcaseBoards from '@/components/ui/ShowcaseBoards';\n\nexport default function BoardsDemo() {\n  return <ShowcaseBoards />;\n}`,
    htmlCode: `<div class="p-4 rounded-xl border bg-white dark:bg-slate-800 space-y-2">\n  <span class="px-2 py-0.5 rounded bg-[#f7ecb5] text-[#333d4b] text-[10px] font-bold">성장의 토대</span>\n  <h4 class="text-xs font-bold">좋은 서비스가 더 많은 사람에게 닿을 수 있도록</h4>\n</div>`
  },
  {
    id: 'ui-progress-nav',
    title: '프로그레스 & 내비게이션 (ShowcaseProgressNav)',
    category: 'buttons',
    description: '실제 /ui/progress-nav 페이지의 진행률 프로그레스 바',
    route: '/ui/progress-nav',
    reactCode: `import ShowcaseProgressNav from '@/components/ui/ShowcaseProgressNav';\n\nexport default function ProgressDemo() {\n  return <ShowcaseProgressNav />;\n}`,
    htmlCode: `<div class="w-full bg-slate-200 rounded-full h-2">
  <div class="bg-indigo-600 h-2 rounded-full" style="width: 78%"></div>
</div>`
  },
  {
    id: 'ui-states-loaders',
    title: '상태 & 로더 스피너 (ShowcaseStatesLoaders)',
    category: 'buttons',
    description: '실제 /ui/states-loaders 페이지의 스피너 로딩 모듈',
    route: '/ui/states-loaders',
    reactCode: `import ShowcaseStatesLoaders from '@/components/ui/ShowcaseStatesLoaders';\n\nexport default function StatesDemo() {\n  return <ShowcaseStatesLoaders />;\n}`,
    htmlCode: `<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>`
  },
  {
    id: 'input-component',
    title: '공통 입력 필드 (InputComponent)',
    category: 'buttons',
    description: '실제 /components/input 페이지의 키보드 단축키 & 검색 인풋',
    route: '/components/input',
    reactCode: `import InputComponent from '@/components/ui/InputComponent';\n\nexport default function InputDemo() {\n  return <InputComponent />;\n}`,
    htmlCode: `<input type="text" placeholder="검색어 입력..." class="pl-8 pr-3 py-2 text-xs border rounded-xl w-full" />`
  },

  // --- Category: Forms & Inputs (5 Real Page Routes) ---
  {
    id: 'form-elements',
    title: '통합 폼 요소 패널 (FormElements)',
    category: 'forms',
    description: '실제 /forms/elements 페이지의 체크박스, 토글 스위치 폼',
    badge: 'POPULAR',
    route: '/forms/elements',
    reactCode: `import FormElements from '@/pages/forms/FormElements';\n\nexport default function FormElementsDemo() {\n  return <FormElements />;\n}`,
    htmlCode: `<div class="flex justify-between items-center p-2 border rounded-xl">
  <span class="text-xs font-bold">마케팅 수신 동의</span>
  <input type="checkbox" class="toggle" checked />
</div>`
  },
  {
    id: 'form-layout',
    title: '그리드 폼 레이아웃 (FormLayout)',
    category: 'forms',
    description: '실제 /forms/layout 페이지의 2열 회원정보 폼 레이아웃',
    badge: 'HOT',
    route: '/forms/layout',
    reactCode: `import FormLayout from '@/pages/forms/FormLayout';\n\nexport default function FormLayoutDemo() {\n  return <FormLayout />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-2">
  <input type="text" placeholder="성" class="p-2 border rounded-lg" />
  <input type="text" placeholder="이름" class="p-2 border rounded-lg" />
</div>`
  },
  {
    id: 'login-page-form',
    title: '사용자 로그인 페이지 (LoginPage)',
    category: 'forms',
    description: '실제 /signin 페이지의 사용자 이메일 로그인 인증 폼',
    route: '/signin',
    reactCode: `import LoginPage from '@/pages/auth/LoginPage';\n\nexport default function LoginDemo() {\n  return <LoginPage />;\n}`,
    htmlCode: `<form class="space-y-2 p-4 bg-white rounded-2xl shadow">
  <input type="email" placeholder="user@domain.com" class="w-full p-2 text-xs border rounded-lg" />
  <button class="w-full py-2 bg-indigo-600 text-white text-xs rounded-lg">로그인</button>
</form>`
  },
  {
    id: 'signup-page-form',
    title: '회원가입 약관 페이지 (SignUpPage)',
    category: 'forms',
    description: '실제 /signup 페이지의 서비스 약관 동의 폼',
    route: '/signup',
    reactCode: `import SignUpPage from '@/pages/auth/SignUpPage';\n\nexport default function SignUpDemo() {\n  return <SignUpPage />;\n}`,
    htmlCode: `<label class="flex items-center gap-2 text-xs font-bold">
  <input type="checkbox" checked /> 이용약관에 동의합니다
</label>`
  },
  {
    id: 'faq-accordion',
    title: '자주 묻는 질문 페이지 (FAQ)',
    category: 'forms',
    description: '실제 /pages/faq 페이지의 아코디언 질의응답 모듈',
    route: '/pages/faq',
    reactCode: `import FAQ from '@/pages/faq/FAQ';\n\nexport default function FAQDemo() {\n  return <FAQ />;\n}`,
    htmlCode: `<details class="p-3 bg-slate-50 border rounded-xl">
  <summary class="font-bold text-xs">자주 묻는 질문</summary>
  <p class="text-xs text-slate-500 mt-1">답변 내용입니다.</p>
</details>`
  },

  // --- Category: Modals & Pages (5 Real Page Routes) ---
  {
    id: 'integration-cards',
    title: '외부 서비스 연동 (Integrations)',
    category: 'modals',
    description: '실제 /pages/integrations 페이지의 외부 API 연동 카드',
    badge: 'HOT',
    route: '/pages/integrations',
    reactCode: `import Integrations from '@/pages/integrations/Integrations';\n\nexport default function IntegrationsDemo() {\n  return <Integrations />;\n}`,
    htmlCode: `<div class="p-3 border rounded-xl flex items-center justify-between">
  <span class="font-bold text-xs">Slack Integration</span>
  <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[10px] font-bold rounded-full">연동됨</span>
</div>`
  },
  {
    id: 'pricing-tier-cards',
    title: '구독 요금제 플랜 (PricingSections)',
    category: 'modals',
    description: '실제 /pages/pricing-sections 페이지의 멤버십 요금제 카드',
    route: '/pages/pricing-sections',
    reactCode: `import PricingSections from '@/pages/pricing/PricingSections';\n\nexport default function PricingDemo() {\n  return <PricingSections />;\n}`,
    htmlCode: `<div class="p-4 bg-indigo-600 text-white rounded-2xl text-center">
  <span class="text-[10px] font-bold uppercase">Pro Plan</span>
  <div class="text-lg font-extrabold my-1">$29 / mo</div>
</div>`
  },
  {
    id: 'hero-section-layouts',
    title: '히어로 비주얼 섹션 (HeroSections)',
    category: 'modals',
    description: '실제 /pages/hero-sections 페이지의 랜딩 히어로 블록',
    route: '/pages/hero-sections',
    reactCode: `import HeroSections from '@/pages/hero/HeroSections';\n\nexport default function HeroSectionsDemo() {\n  return <HeroSections />;\n}`,
    htmlCode: `<header class="p-6 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl text-center">
  <h1 class="text-lg font-bold">모던 히어로 비주얼 블록</h1>
</header>`
  },
  {
    id: 'error-404-component',
    title: '404 페이지 미발견 안내 (ErrorPage 404)',
    category: 'modals',
    description: '실제 /pages/error-404 페이지의 404 Not Found 안내 컴포넌트',
    route: '/pages/error-404',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error404Demo() {\n  return <ErrorPage code="404" />;\n}`,
    htmlCode: `<div class="text-center p-4 border rounded-2xl">
  <h2 class="text-2xl font-bold text-indigo-600">404</h2>
  <p class="text-xs text-slate-500">페이지를 찾을 수 없습니다.</p>
</div>`
  },
  {
    id: 'error-500-component',
    title: '500 서버 시스템 오류 안내 (ErrorPage 500)',
    category: 'modals',
    description: '실제 /pages/error-500 페이지의 500 Server Error 안내 컴포넌트',
    route: '/pages/error-500',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error500Demo() {\n  return <ErrorPage code="500" />;\n}`,
    htmlCode: `<div class="text-center p-4 border rounded-2xl">
  <h2 class="text-2xl font-bold text-rose-600">500</h2>
  <p class="text-xs text-slate-500">서버에 오류가 발생했습니다.</p>
</div>`
  },

  // --- Category: Tables & Tasks (3 Real Page Routes) ---
  {
    id: 'table-basic-data',
    title: '기본 데이터 테이블 (BasicTables)',
    category: 'tables',
    description: '실제 /tables/basic 페이지의 프로필 & 상태 데이터 표',
    badge: 'POPULAR',
    route: '/tables/basic',
    reactCode: `import BasicTables from '@/pages/tables/BasicTables';\n\nexport default function BasicTableDemo() {\n  return <BasicTables />;\n}`,
    htmlCode: `<table class="w-full text-left border-collapse text-xs">
  <tr class="border-b"><th class="p-2">사용자명</th><th class="p-2">상태</th></tr>
  <tr class="border-b"><td class="p-2 font-bold">홍길동 (Admin)</td><td class="p-2 text-emerald-600 font-bold">승인됨</td></tr>
</table>`
  },
  {
    id: 'task-list-component',
    title: '업무 리스트 관리 (TaskList)',
    category: 'tables',
    description: '실제 /tasks/list 페이지의 업무 상태 관리 리스트',
    route: '/tasks/list',
    reactCode: `import TaskList from '@/pages/tasks/TaskList';\n\nexport default function TaskListDemo() {\n  return <TaskList />;\n}`,
    htmlCode: `<div class="p-3 border rounded-xl flex justify-between items-center">
  <span class="font-bold text-xs">대시보드 UI 개편 완료</span>
  <span class="px-2 py-0.5 bg-indigo-500/10 text-indigo-600 text-[10px] font-bold rounded">완료</span>
</div>`
  },
  {
    id: 'task-kanban-board',
    title: '칸반 업무 보드 (TaskKanban)',
    category: 'tables',
    description: '실제 /tasks/kanban 페이지의 드래그앤드롭 업무 보드',
    route: '/tasks/kanban',
    reactCode: `import TaskKanban from '@/pages/tasks/TaskKanban';\n\nexport default function KanbanDemo() {\n  return <TaskKanban />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-2 text-xs font-bold">
  <div class="p-2 bg-slate-100 rounded-lg">To Do (2)</div>
  <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg">Done (5)</div>
</div>`
  },

  // --- Category: Calendar & Charts (2 Real Page Routes) ---
  {
    id: 'calendar-page-component',
    title: '일정 스케줄러 (Calendar)',
    category: 'charts',
    description: '실제 /calendar 페이지의 2026년 8월 스케줄러 캘린더',
    route: '/calendar',
    reactCode: `import Calendar from '@/pages/Calendar';\n\nexport default function CalendarDemo() {\n  return <Calendar />;\n}`,
    htmlCode: `<div class="p-3 border rounded-2xl text-center text-xs font-bold text-indigo-600">
  🗓️ 2026년 8월 6일 일정 스케줄러
</div>`
  },
  {
    id: 'chart-line-charts',
    title: 'ECharts 트렌드 차트 (LineCharts)',
    category: 'charts',
    description: '실제 /charts/line-charts 페이지의 실시간 지수 동적 트렌드 차트',
    badge: 'POPULAR',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function LineChartsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-3.5 bg-slate-900 text-white rounded-2xl flex justify-between items-center text-xs">
  <div><p class="text-[10px] text-slate-400">주간 지수</p><p class="font-bold text-indigo-400">+28.4% ▲</p></div>
  <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded">LIVE</span>
</div>`
  }
];

export const templatesList: TemplateItem[] = [
  {
    id: 'tpl-arte',
    title: '아르떼 (Arte) 예술/문화 메가 웹진 템플릿',
    category: 'webzine',
    description: '고화질 미디어, 필진 프로필, 동영상 플레이어 및 서브 컴포넌트를 탑재한 감각적인 문화 메가 웹진',
    tag: 'Arte Webzine',
    imageBg: 'from-purple-900 to-indigo-900',
    route: '/webzine/arte',
    itemCount: 9
  },
  {
    id: 'tpl-eeum',
    title: '이음 (Eeum) 감성 에디토리얼 웹진 템플릿',
    category: 'webzine',
    description: '인용구, 타이포그래피, 이미지 갤러리 및 서재 프로필이 매력적인 감성 에디토리얼 웹진 템플릿',
    tag: 'Eeum Webzine',
    imageBg: 'from-indigo-900 to-slate-900',
    route: '/webzine/eeum',
    itemCount: 7
  },
  {
    id: 'tpl-dashboard',
    title: '어드민 대시보드 & 업무 관리 애플리케이션',
    category: 'application',
    description: 'ECharts 트렌드 지표, 칸반 업무 보드, 캘린더 및 회원 관리 폼이 결합된 종합 반응형 어드민 템플릿',
    tag: 'Admin App',
    imageBg: 'from-blue-900 to-slate-950',
    route: '/tasks/kanban',
    itemCount: 12
  }
];

export const templatesShowcase = templatesList;

export const libraryMetrics: MetricItem[] = [
  { label: '실존 UI 컴포넌트 페이지', value: '21개', change: '100% 실존 독자 라우트', description: '사이드바 메뉴 100% 매핑' },
  { label: '완성 템플릿 레이아웃', value: '3종', change: '아르떼/이음/대시보드', description: '실제 서브 페이지 완벽 연동' },
  { label: '코드 복사 & Export', value: '100%', change: 'React TSX & HTML', description: '1초 복사 및 파일 다운로드' },
  { label: '반응형 뷰포트 지원', value: '3 Modes', change: 'Desktop/Tablet/Mobile', description: '실시간 프리뷰 조절 지원' }
];

export const updateLogs: UpdateLog[] = [
  {
    date: '2026.08.06',
    version: 'v2.5.0',
    title: '독립 실존 페이지 컴포넌트 21종 갤러리 100% 매핑',
    description: '사이드바 및 라우터에 100% 실존하는 독자 페이지 21종만 엄선하여 [실제 페이지 이동] 404 완벽 방지',
    tag: 'Feature'
  },
  {
    date: '2026.08.05',
    version: 'v2.3.0',
    title: '아르떼 & 이음 웹진 템플릿 레이아웃 탑재',
    description: '아르떼 및 이음 웹진 컴포넌트 라우트 및 에디토리얼 스타일링 완성',
    tag: 'Webzine'
  },
  {
    date: '2026.08.04',
    version: 'v2.2.0',
    title: '글래스모피즘 & 브랜드 테마 색상 정돈',
    description: '사이트 시그니처 인디고-블루 라이트/다크 테마 톤앤매너 완벽 정돈',
    tag: 'Improvement'
  }
];

export const recentUpdates = updateLogs;
