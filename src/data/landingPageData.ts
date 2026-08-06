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

// 2. Featured UI Components - ONLY ACTUAL REAL PAGE COMPONENTS (6 components per category = 36 total)
export const featuredComponents: ComponentItem[] = [
  // --- Category: Buttons & Badges (6 actual UI Showcase components) ---
  {
    id: 'ui-buttons-badges',
    title: '샤인 그라데이션 버튼 (ShowcaseButtonsBadges)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 샤인 에펙트 및 그라데이션 버튼',
    badge: 'POPULAR',
    route: '/ui/buttons-badges',
    reactCode: `import ShowcaseButtonsBadges from '@/components/ui/ShowcaseButtonsBadges';\n\nexport default function ButtonsDemo() {\n  return <ShowcaseButtonsBadges />;\n}`,
    htmlCode: `<button class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs rounded-xl shadow-md">샤인 버튼</button>`
  },
  {
    id: 'ui-alerts-modals',
    title: '성공 토스트 알림 (ShowcaseAlertsModals)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 성공 상태 안내 토스트 알림',
    badge: 'HOT',
    route: '/ui/alerts-modals',
    reactCode: `import ShowcaseAlertsModals from '@/components/ui/ShowcaseAlertsModals';\n\nexport default function AlertDemo() {\n  return <ShowcaseAlertsModals />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-900 text-white rounded-xl text-xs flex justify-between"><span>성공 반영 완료</span></div>`
  },
  {
    id: 'ui-data-display',
    title: '사용자 프로필 아바타 (ShowcaseDataDisplay)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 프로필 아바타 & 접속 상태 인디케이터',
    badge: 'NEW',
    route: '/ui/data-display',
    reactCode: `import ShowcaseDataDisplay from '@/components/ui/ShowcaseDataDisplay';\n\nexport default function DataDisplayDemo() {\n  return <ShowcaseDataDisplay />;\n}`,
    htmlCode: `<div class="flex items-center gap-2 p-2 bg-white border rounded-xl">
  <img src="/avatar.png" class="w-8 h-8 rounded-full" />
  <span class="text-xs font-bold">김서연</span>
</div>`
  },
  {
    id: 'ui-progress-nav',
    title: '진행률 프로그레스 바 (ShowcaseProgressNav)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 78% 완료 진행률 인디케이터',
    route: '/ui/progress-nav',
    reactCode: `import ShowcaseProgressNav from '@/components/ui/ShowcaseProgressNav';\n\nexport default function ProgressDemo() {\n  return <ShowcaseProgressNav />;\n}`,
    htmlCode: `<div class="w-full bg-slate-200 rounded-full h-2">
  <div class="bg-indigo-600 h-2 rounded-full" style="width: 78%"></div>
</div>`
  },
  {
    id: 'ui-states-loaders',
    title: '실시간 데이터 로딩 스피너 (ShowcaseStatesLoaders)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 동적 로딩 스피너 애니메이션',
    route: '/ui/states-loaders',
    reactCode: `import ShowcaseStatesLoaders from '@/components/ui/ShowcaseStatesLoaders';\n\nexport default function StatesDemo() {\n  return <ShowcaseStatesLoaders />;\n}`,
    htmlCode: `<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>`
  },
  {
    id: 'input-component',
    title: '아이콘 융합 검색 필드 (InputComponent)',
    category: 'buttons',
    description: '실제 입력 필드 페이지의 돋보기 아이콘 내장 인풋 컴포넌트',
    route: '/components/input',
    reactCode: `import InputComponent from '@/components/ui/InputComponent';\n\nexport default function InputDemo() {\n  return <InputComponent />;\n}`,
    htmlCode: `<input type="text" placeholder="검색어 입력..." class="pl-8 pr-3 py-2 text-xs border rounded-xl w-full" />`
  },

  // --- Category: Forms & Inputs (6 actual Form Page components) ---
  {
    id: 'form-elements',
    title: '이메일 수신 동의 스위치 (FormElements)',
    category: 'forms',
    description: '실제 Form Elements 페이지의 온/오프 토글 스위치 폼 요소',
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
    title: '성/이름 2열 그리드 폼 (FormLayout)',
    category: 'forms',
    description: '실제 Form Layout 페이지의 2열 그리드 정보 입력 필드',
    badge: 'HOT',
    route: '/forms/layout',
    reactCode: `import FormLayout from '@/pages/forms/FormLayout';\n\nexport default function FormLayoutDemo() {\n  return <FormLayout />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-2">
  <input type="text" placeholder="성" class="p-2 border rounded-lg" />
  <input type="text" placeholder="이름" class="p-2 border rounded-lg" />
</div>`
  },
  {
    id: 'input-custom-picker',
    title: '기간 지정 커스텀 데이트피커 (CustomDatePicker)',
    category: 'forms',
    description: '실제 폼 페이지에서 동작하는 날짜 범위 선택기 컴포넌트',
    route: '/forms/elements',
    reactCode: `import CustomDatePicker from '@/components/ui/CustomDatePicker';\n\nexport default function DatePickerDemo() {\n  return <CustomDatePicker />;\n}`,
    htmlCode: `<input type="date" class="px-3 py-2 text-xs border rounded-xl" />`
  },
  {
    id: 'login-page-form',
    title: '이메일 수신 인증 로그인 (LoginPage)',
    category: 'forms',
    description: '실제 /signin 페이지의 이메일 및 비밀번호 검증 폼',
    route: '/signin',
    reactCode: `import LoginPage from '@/pages/auth/LoginPage';\n\nexport default function LoginDemo() {\n  return <LoginPage />;\n}`,
    htmlCode: `<form class="space-y-2 p-4 bg-white rounded-2xl shadow">
  <input type="email" placeholder="user@domain.com" class="w-full p-2 text-xs border rounded-lg" />
  <button class="w-full py-2 bg-indigo-600 text-white text-xs rounded-lg">로그인</button>
</form>`
  },
  {
    id: 'signup-page-form',
    title: '약관 동의 회원가입 (SignUpPage)',
    category: 'forms',
    description: '실제 /signup 페이지의 서비스 필수 약관 동의 체크박스',
    route: '/signup',
    reactCode: `import SignUpPage from '@/pages/auth/SignUpPage';\n\nexport default function SignUpDemo() {\n  return <SignUpPage />;\n}`,
    htmlCode: `<label class="flex items-center gap-2 text-xs font-bold">
  <input type="checkbox" checked /> 이용약관에 동의합니다
</label>`
  },
  {
    id: 'faq-accordion',
    title: '자주 묻는 질문 아코디언 (FAQ)',
    category: 'forms',
    description: '실제 FAQ 페이지의 질문 펼침 및 닫힘 아코디언 모듈',
    route: '/pages/faq',
    reactCode: `import FAQ from '@/pages/faq/FAQ';\n\nexport default function FAQDemo() {\n  return <FAQ />;\n}`,
    htmlCode: `<details class="p-3 bg-slate-50 border rounded-xl">
  <summary class="font-bold text-xs">자주 묻는 질문</summary>
  <p class="text-xs text-slate-500 mt-1">답변 내용입니다.</p>
</details>`
  },

  // --- Category: Modals & Notifications (6 actual Modal/Notification Page components) ---
  {
    id: 'alert-modal-system',
    title: '삭제 확인 경고 다이얼로그 (ShowcaseAlertsModals)',
    category: 'modals',
    description: '실제 모달 페이지의 데이터 삭제 확인 경고 팝업',
    badge: 'POPULAR',
    route: '/ui/alerts-modals',
    reactCode: `import ShowcaseAlertsModals from '@/components/ui/ShowcaseAlertsModals';\n\nexport default function ModalDemo() {\n  return <ShowcaseAlertsModals />;\n}`,
    htmlCode: `<div class="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex justify-between items-center">
  <span class="text-rose-600 font-bold text-xs">정말 삭제하시겠습니까?</span>
  <button class="px-3 py-1 bg-rose-600 text-white text-xs rounded-lg">삭제</button>
</div>`
  },
  {
    id: 'integration-cards',
    title: 'Slack 외부 API 연동 모듈 (Integrations)',
    category: 'modals',
    description: '실제 Integrations 페이지의 서비스 연동 제어 카드',
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
    title: 'Pro Membership 요금제 플랜 (PricingSections)',
    category: 'modals',
    description: '실제 요금제 페이지의 Pro 멤버십 구독 안내 카드',
    route: '/pages/pricing-sections',
    reactCode: `import PricingSections from '@/pages/pricing/PricingSections';\n\nexport default function PricingDemo() {\n  return <PricingSections />;\n}`,
    htmlCode: `<div class="p-4 bg-indigo-600 text-white rounded-2xl text-center">
  <span class="text-[10px] font-bold uppercase">Pro Plan</span>
  <div class="text-lg font-extrabold my-1">$29 / mo</div>
</div>`
  },
  {
    id: 'error-404-component',
    title: '404 페이지 미발견 안내 (ErrorPage)',
    category: 'modals',
    description: '실제 에러 페이지의 404 Not Found 안내 컴포넌트',
    route: '/pages/error-404',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error404Demo() {\n  return <ErrorPage code="404" />;\n}`,
    htmlCode: `<div class="text-center p-4 border rounded-2xl">
  <h2 class="text-2xl font-bold text-indigo-600">404</h2>
  <p class="text-xs text-slate-500">페이지를 찾을 수 없습니다.</p>
</div>`
  },
  {
    id: 'error-500-component',
    title: '500 서버 시스템 오류 안내 (ErrorPage)',
    category: 'modals',
    description: '실제 에러 페이지의 500 Server Error 안내 컴포넌트',
    route: '/pages/error-500',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error500Demo() {\n  return <ErrorPage code="500" />;\n}`,
    htmlCode: `<div class="text-center p-4 border rounded-2xl">
  <h2 class="text-2xl font-bold text-rose-600">500</h2>
  <p class="text-xs text-slate-500">서버에 오류가 발생했습니다.</p>
</div>`
  },
  {
    id: 'task-list-component',
    title: '대시보드 UI 개편 태스크 (TaskList)',
    category: 'modals',
    description: '실제 Task List 페이지의 업무 항목 완료 관리 스니펫',
    route: '/tasks/list',
    reactCode: `import TaskList from '@/pages/tasks/TaskList';\n\nexport default function TaskListDemo() {\n  return <TaskList />;\n}`,
    htmlCode: `<div class="p-3 border rounded-xl flex justify-between items-center">
  <span class="font-bold text-xs">대시보드 UI 개편 완료</span>
  <span class="px-2 py-0.5 bg-indigo-500/10 text-indigo-600 text-[10px] font-bold rounded">완료</span>
</div>`
  },

  // --- Category: Tables & Productivity (6 actual Table & App Page components) ---
  {
    id: 'table-basic-data',
    title: '사용자 승인 데이터 테이블 (BasicTables)',
    category: 'tables',
    description: '실제 BasicTables 페이지의 사용자 프로필 및 상태 표 행',
    badge: 'POPULAR',
    route: '/tables/basic',
    reactCode: `import BasicTables from '@/pages/tables/BasicTables';\n\nexport default function BasicTableDemo() {\n  return <BasicTables />;\n}`,
    htmlCode: `<table class="w-full text-left border-collapse text-xs">
  <tr class="border-b"><th class="p-2">사용자명</th><th class="p-2">상태</th></tr>
  <tr class="border-b"><td class="p-2 font-bold">홍길동 (Admin)</td><td class="p-2 text-emerald-600 font-bold">승인됨</td></tr>
</table>`
  },
  {
    id: 'table-striped-data',
    title: '줄무늬 데이터 스타일 표 (BasicTables)',
    category: 'tables',
    description: '실제 BasicTables 페이지의 격자 가독성 높인 스트라이프 테이블',
    badge: 'HOT',
    route: '/tables/basic',
    reactCode: `import BasicTables from '@/pages/tables/BasicTables';\n\nexport default function StripedTableDemo() {\n  return <BasicTables />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-50 border rounded-xl text-xs font-bold">줄무늬 스타일 표 행</div>`
  },
  {
    id: 'table-hover-data',
    title: '호버 반응형 강조 표 (BasicTables)',
    category: 'tables',
    description: '실제 BasicTables 페이지의 마우스 호버 강조 데이터 표',
    route: '/tables/basic',
    reactCode: `import BasicTables from '@/pages/tables/BasicTables';\n\nexport default function HoverTableDemo() {\n  return <BasicTables />;\n}`,
    htmlCode: `<div class="p-3 hover:bg-indigo-50 border rounded-xl text-xs font-bold">마우스 호버 데이터 표 행</div>`
  },
  {
    id: 'task-kanban-board',
    title: 'To Do / Done 칸반 컬럼 (TaskKanban)',
    category: 'tables',
    description: '실제 TaskKanban 페이지의 작업 상태 드래그앤드롭 컬럼 보드',
    route: '/tasks/kanban',
    reactCode: `import TaskKanban from '@/pages/tasks/TaskKanban';\n\nexport default function KanbanDemo() {\n  return <TaskKanban />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-2 text-xs font-bold">
  <div class="p-2 bg-slate-100 rounded-lg">To Do (2)</div>
  <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg">Done (5)</div>
</div>`
  },
  {
    id: 'calendar-page-component',
    title: '월간/일간 일정 스케줄러 (Calendar)',
    category: 'tables',
    description: '실제 Calendar 페이지의 2026년 8월 일정 스케줄러 컴포넌트',
    route: '/calendar',
    reactCode: `import Calendar from '@/pages/Calendar';\n\nexport default function CalendarDemo() {\n  return <Calendar />;\n}`,
    htmlCode: `<div class="p-3 border rounded-2xl text-center text-xs font-bold text-indigo-600">
  🗓️ 2026년 8월 6일 일정 스케줄러
</div>`
  },
  {
    id: 'hero-section-layouts',
    title: '모던 비주얼 히어로 블록 (HeroSections)',
    category: 'tables',
    description: '실제 HeroSections 페이지의 메인 타이포그래피 랜딩 블록',
    route: '/pages/hero-sections',
    reactCode: `import HeroSections from '@/pages/hero/HeroSections';\n\nexport default function HeroSectionsDemo() {\n  return <HeroSections />;\n}`,
    htmlCode: `<header class="p-6 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl text-center">
  <h1 class="text-lg font-bold">모던 히어로 비주얼 블록</h1>
</header>`
  },

  // --- Category: App & Dashboard Blocks (6 actual Dashboard Page components) ---
  {
    id: 'stat-card-widget',
    title: '대시보드 핵심 통계 메트릭 (Dashboard)',
    category: 'webzine',
    description: '실제 메인 대시보드의 매출 및 이익 성과 지표 위젯',
    badge: 'POPULAR',
    route: '/',
    reactCode: `import Dashboard from '@/pages/Dashboard';\n\nexport default function StatWidgetDemo() {\n  return <Dashboard />;\n}`,
    htmlCode: `<div class="p-4 bg-white border rounded-2xl shadow-sm">
  <span class="text-xs text-slate-500 font-bold">총 성과 지표</span>
  <h3 class="text-lg font-extrabold text-indigo-600">$45,280</h3>
</div>`
  },
  {
    id: 'analytics-summary',
    title: '주간 활성 사용자 요약 (Dashboard)',
    category: 'webzine',
    description: '실제 메인 대시보드의 주간 활성 사용자 트렌드 요약 카드',
    badge: 'HOT',
    route: '/',
    reactCode: `import Dashboard from '@/pages/Dashboard';\n\nexport default function AnalyticsSummaryDemo() {\n  return <Dashboard />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-900 text-white rounded-2xl flex justify-between items-center text-xs">
  <span>주간 활성 사용자</span>
  <span class="text-emerald-400 font-bold">+18.2% ▲</span>
</div>`
  },
  {
    id: 'user-profile-header',
    title: '상단 유저 프로필 헤더 (Header)',
    category: 'webzine',
    description: '실제 공통 레이아웃 Header의 유저 정보 및 알림 종 벨',
    route: '/',
    reactCode: `import Header from '@/components/layout/Header';\n\nexport default function HeaderDemo() {\n  return <Header />;\n}`,
    htmlCode: `<div class="flex items-center justify-between p-3 border rounded-xl">
  <span class="font-bold text-xs">알림 (3)</span>
  <img src="/avatar.png" class="w-7 h-7 rounded-full" />
</div>`
  },
  {
    id: 'sidebar-navigation',
    title: '사이드바 내비게이션 메뉴 (Sidebar)',
    category: 'webzine',
    description: '실제 공통 레이아웃 Sidebar의 카테고리 이동 메뉴 모듈',
    route: '/',
    reactCode: `import Sidebar from '@/components/layout/Sidebar';\n\nexport default function SidebarDemo() {\n  return <Sidebar />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-900 text-white rounded-xl text-xs font-bold">
  <span>📊 대시보드 메뉴</span>
</div>`
  },
  {
    id: 'filter-search-bar',
    title: '통합 검색 & 상태 필터 바 (TaskList)',
    category: 'webzine',
    description: '실제 TaskList 페이지의 태스크 검색 및 상태 드롭다운 필터',
    route: '/tasks/list',
    reactCode: `import TaskList from '@/pages/tasks/TaskList';\n\nexport default function FilterSearchDemo() {\n  return <TaskList />;\n}`,
    htmlCode: `<div class="flex gap-2 p-2 border rounded-xl">
  <input type="text" placeholder="검색..." class="p-1 text-xs border rounded" />
  <select class="text-xs p-1 border rounded"><option>전체</option></select>
</div>`
  },
  {
    id: 'activity-timeline',
    title: '최근 활동 이력 타임라인 (Dashboard)',
    category: 'webzine',
    description: '실제 메인 대시보드의 실시간 변경사항 타임라인 기록',
    route: '/',
    reactCode: `import Dashboard from '@/pages/Dashboard';\n\nexport default function ActivityTimelineDemo() {\n  return <Dashboard />;\n}`,
    htmlCode: `<div class="p-3 border-l-2 border-indigo-600 bg-indigo-50/50 rounded-r-xl text-xs">
  <span class="font-bold">시스템 업데이트 완료</span>
</div>`
  },

  // --- Category: Charts & Metrics (6 actual Chart & Metric Page components) ---
  {
    id: 'chart-line-charts',
    title: 'ECharts 라인 트렌드 차트 (LineCharts)',
    category: 'charts',
    description: '실제 LineCharts 페이지의 주간 지수 동적 라인 차트 지표',
    badge: 'POPULAR',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function LineChartsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-3.5 bg-slate-900 text-white rounded-2xl flex justify-between items-center text-xs">
  <div><p class="text-[10px] text-slate-400">주간 지수</p><p class="font-bold text-indigo-400">+28.4% ▲</p></div>
  <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded">LIVE</span>
</div>`
  },
  {
    id: 'chart-area-charts',
    title: '영역 채움 성과 분석 차트 (LineCharts)',
    category: 'charts',
    description: '실제 LineCharts 페이지의 누적 영역 그라데이션 차트',
    badge: 'NEW',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function AreaChartsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-3 bg-white border rounded-2xl text-xs font-bold text-indigo-600">
  <span>📈 누적 매출 성과 차트</span>
</div>`
  },
  {
    id: 'chart-bar-metrics',
    title: '월별 데이터 비교 막대 차트 (LineCharts)',
    category: 'charts',
    description: '실제 LineCharts 페이지의 월별 매출 비교 막대 그래픽',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function BarMetricsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-100 rounded-2xl text-xs font-bold text-center">
  <span>📊 월별 실적 비교 차트</span>
</div>`
  },
  {
    id: 'chart-pie-metrics',
    title: '카테고리 점유율 도넛 차트 (LineCharts)',
    category: 'charts',
    description: '실제 LineCharts 페이지의 서비스 점유율 파이 도넛 차트',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function PieMetricsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-3 bg-white border rounded-2xl text-xs font-bold flex justify-between">
  <span>🍩 카테고리 비중 차트</span>
  <span class="text-indigo-600">64%</span>
</div>`
  },
  {
    id: 'chart-kpi-summary',
    title: 'KPI 핵심 성과 지표 카드 (Dashboard)',
    category: 'charts',
    description: '실제 메인 대시보드의 목표 달성률 KPI 요약 카드',
    route: '/',
    reactCode: `import Dashboard from '@/pages/Dashboard';\n\nexport default function KPISummaryDemo() {\n  return <Dashboard />;\n}`,
    htmlCode: `<div class="p-3 bg-indigo-600 text-white rounded-2xl text-xs font-bold text-center">
  <span>🎯 3분기 KPI 달성률 94%</span>
</div>`
  },
  {
    id: 'chart-live-status',
    title: '실시간 서버 가동률 지표 (Dashboard)',
    category: 'charts',
    description: '실제 메인 대시보드의 실시간 서버 트래픽 가동 상태',
    route: '/',
    reactCode: `import Dashboard from '@/pages/Dashboard';\n\nexport default function LiveStatusDemo() {\n  return <Dashboard />;\n}`,
    htmlCode: `<div class="p-3 bg-slate-900 text-emerald-400 rounded-2xl font-mono text-xs font-bold flex justify-between">
  <span>SERVER HEALTH</span>
  <span>99.9% ONLINE</span>
</div>`
  }
];

export const templatesList: TemplateItem[] = [
  {
    id: 'tpl-arte',
    title: '아르떼 (Arte) 예술/문화 메가 웹진 템플릿',
    category: 'webzine',
    description: '고화질 미디어, 필진 프로필, 동영상 플레이어 및 9종 서브 컴포넌트를 탑재한 감각적인 문화 메가 웹진',
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
  { label: '전체 UI 컴포넌트', value: '36+', change: '+14개 신규 추가', description: '6개 카테고리 실존 컴포넌트' },
  { label: '완성 템플릿 레이아웃', value: '3종', change: '아르떼/이음/대시보드', description: '실제 서브 페이지 완벽 연동' },
  { label: '코드 복사 & Export', value: '100%', change: 'React TSX & HTML', description: '1초 복사 및 파일 다운로드' },
  { label: '반응형 뷰포트 지원', value: '3 Modes', change: 'Desktop/Tablet/Mobile', description: '실시간 프리뷰 조절 지원' }
];

export const updateLogs: UpdateLog[] = [
  {
    date: '2026.08.06',
    version: 'v2.4.0',
    title: '실제 프로젝트 컴포넌트 36종 갤러리 전수 연동',
    description: '프로젝트 실제 페이지의 ShowcaseButtonsBadges, FormElements, BasicTables, LineCharts 등 실존 컴포넌트 36종 갤러리 추천 탑재',
    tag: 'Feature'
  },
  {
    date: '2026.08.05',
    version: 'v2.3.0',
    title: '아르떼 & 이음 웹진 템플릿 레이아웃 탑재',
    description: '아르떼(9종) 및 이음(7종) 웹진 컴포넌트 라우트 및 에디토리얼 스타일링 완성',
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
