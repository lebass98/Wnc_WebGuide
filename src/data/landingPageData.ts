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

// 2. Featured UI Components - Actual Project Components Array (6 components per category = 36 total)
export const featuredComponents: ComponentItem[] = [
  // --- Category: Buttons & Badges (6) ---
  {
    id: 'ui-buttons-badges',
    title: 'ShowcaseButtonsBadges (버튼 & 배지)',
    category: 'buttons',
    description: '실제 UI 가이드 페이지의 그라데이션, 소셜, 로딩 및 상태 뱃지 모음 컴포넌트',
    badge: 'POPULAR',
    route: '/ui/buttons-badges',
    reactCode: `import ShowcaseButtonsBadges from '@/components/ui/ShowcaseButtonsBadges';\n\nexport default function ButtonsDemo() {\n  return <ShowcaseButtonsBadges />;\n}`,
    htmlCode: `<div class="flex items-center gap-3">
  <button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-all">샤인 버튼</button>
  <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 font-bold text-xs rounded-full">실시간 정상</span>
</div>`
  },
  {
    id: 'ui-alerts-modals',
    title: 'ShowcaseAlertsModals (알림 & 모달)',
    category: 'buttons',
    description: '실제 프로젝트에서 사용되는 성공 토스트, 경고 배너 및 확인 다이얼로그 모음',
    badge: 'HOT',
    route: '/ui/alerts-modals',
    reactCode: `import ShowcaseAlertsModals from '@/components/ui/ShowcaseAlertsModals';\n\nexport default function AlertDemo() {\n  return <ShowcaseAlertsModals />;\n}`,
    htmlCode: `<div class="p-4 bg-slate-900 text-white rounded-2xl shadow-xl flex items-center justify-between">
  <span>알림 모달 메시지</span>
  <button class="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg">확인</button>
</div>`
  },
  {
    id: 'ui-data-display',
    title: 'ShowcaseDataDisplay (데이터 디스플레이)',
    category: 'buttons',
    description: '아바타 그룹, 커스텀 통계 뱃지 및 프로필 디스플레이 카드 컴포넌트',
    badge: 'NEW',
    route: '/ui/data-display',
    reactCode: `import ShowcaseDataDisplay from '@/components/ui/ShowcaseDataDisplay';\n\nexport default function DataDisplayDemo() {\n  return <ShowcaseDataDisplay />;\n}`,
    htmlCode: `<div class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200">
  <img src="/avatar.png" class="w-10 h-10 rounded-full" />
  <div><h4 class="font-bold text-xs">사용자 프로필</h4></div>
</div>`
  },
  {
    id: 'ui-progress-nav',
    title: 'ShowcaseProgressNav (진행바 & 내비게이션)',
    category: 'buttons',
    description: '프로그레스 바, 4단계 진행 스텝 인디케이터 및 브레드크럼 스니펫',
    route: '/ui/progress-nav',
    reactCode: `import ShowcaseProgressNav from '@/components/ui/ShowcaseProgressNav';\n\nexport default function ProgressDemo() {\n  return <ShowcaseProgressNav />;\n}`,
    htmlCode: `<div class="w-full bg-slate-200 rounded-full h-2">
  <div class="bg-indigo-600 h-2 rounded-full" style="width: 75%"></div>
</div>`
  },
  {
    id: 'ui-states-loaders',
    title: 'ShowcaseStatesLoaders (상태 & 스피너)',
    category: 'buttons',
    description: '데이터 로딩 스피너, Empty 데이터 처리 및 스켈레톤 가이드',
    route: '/ui/states-loaders',
    reactCode: `import ShowcaseStatesLoaders from '@/components/ui/ShowcaseStatesLoaders';\n\nexport default function StatesDemo() {\n  return <ShowcaseStatesLoaders />;\n}`,
    htmlCode: `<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>`
  },
  {
    id: 'input-component',
    title: 'InputComponent (공통 입력 필드)',
    category: 'buttons',
    description: '플로팅 라벨, 키보드 단축키 및 유효성 검사 입력 필드',
    route: '/components/input',
    reactCode: `import InputComponent from '@/components/ui/InputComponent';\n\nexport default function InputDemo() {\n  return <InputComponent />;\n}`,
    htmlCode: `<input type="text" placeholder="이메일 입력..." class="px-3.5 py-2 text-xs border rounded-xl w-full" />`
  },

  // --- Category: Forms & Inputs (6) ---
  {
    id: 'form-elements',
    title: 'FormElements (통합 폼 요소 모음)',
    category: 'forms',
    description: '실제 폼 페이지의 체크박스, 라디오, 토글 스위치 및 선택 박스 통합 컴포넌트',
    badge: 'POPULAR',
    route: '/forms/elements',
    reactCode: `import FormElements from '@/pages/forms/FormElements';\n\nexport default function FormElementsDemo() {\n  return <FormElements />;\n}`,
    htmlCode: `<form class="space-y-4 p-4 border rounded-2xl bg-white">
  <label class="block text-xs font-bold">이름</label>
  <input type="text" class="w-full p-2 text-xs border rounded-xl" />
</form>`
  },
  {
    id: 'form-layout',
    title: 'FormLayout (그리드 폼 레이아웃)',
    category: 'forms',
    description: '2열/3열 그리드 구조의 회원 정보 입력 및 설정 레이아웃 컴포넌트',
    badge: 'HOT',
    route: '/forms/layout',
    reactCode: `import FormLayout from '@/pages/forms/FormLayout';\n\nexport default function FormLayoutDemo() {\n  return <FormLayout />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-4">
  <input type="text" placeholder="성" class="p-2 border rounded-xl" />
  <input type="text" placeholder="이름" class="p-2 border rounded-xl" />
</div>`
  },
  {
    id: 'input-custom-picker',
    title: 'CustomDatePicker (커스텀 날짜 선택기)',
    category: 'forms',
    description: '날짜 및 시간 범위를 간편하게 제어하는 커스텀 데이트 피커',
    route: '/forms/elements',
    reactCode: `import CustomDatePicker from '@/components/common/CustomDatePicker';\n\nexport default function DatePickerDemo() {\n  return <CustomDatePicker />;\n}`,
    htmlCode: `<input type="date" class="px-3 py-2 text-xs border border-slate-300 rounded-xl" />`
  },
  {
    id: 'login-page-form',
    title: 'LoginPage Form (사용자 서명 인증)',
    category: 'forms',
    description: '소셜 로그인 연동 및 토큰 기반 사용자 인증 폼',
    route: '/signin',
    reactCode: `import LoginPage from '@/pages/auth/LoginPage';\n\nexport default function LoginDemo() {\n  return <LoginPage />;\n}`,
    htmlCode: `<div class="p-6 bg-white rounded-3xl shadow-xl space-y-4">
  <h3 class="font-bold text-base">로그인</h3>
  <input type="email" placeholder="email@domain.com" class="w-full p-2.5 text-xs border rounded-xl" />
</div>`
  },
  {
    id: 'signup-page-form',
    title: 'SignUpPage Form (회원 가입 폼)',
    category: 'forms',
    description: '약관 동의 및 계정 생성을 지원하는 모던 신규 회원가입 폼',
    route: '/signup',
    reactCode: `import SignUpPage from '@/pages/auth/SignUpPage';\n\nexport default function SignUpDemo() {\n  return <SignUpPage />;\n}`,
    htmlCode: `<div class="p-6 bg-white rounded-3xl shadow-xl space-y-4">
  <h3 class="font-bold text-base">회원가입</h3>
  <button class="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl">계정 생성</button>
</div>`
  },
  {
    id: 'faq-accordion',
    title: 'FAQ Accordions (아코디언 질의응답)',
    category: 'forms',
    description: '질문과 답변을 펼치고 닫는 자주 묻는 질문 아코디언 컴포넌트',
    route: '/pages/faq',
    reactCode: `import FAQ from '@/pages/faq/FAQ';\n\nexport default function FAQDemo() {\n  return <FAQ />;\n}`,
    htmlCode: `<details class="p-3 bg-slate-100 rounded-xl cursor-pointer">
  <summary class="font-bold text-xs">자주 묻는 질문은 무엇인가요?</summary>
  <p class="text-xs text-slate-600 mt-2">답변 내용이 여기에 들어갑니다.</p>
</details>`
  },

  // --- Category: Modals & Alerts (6) ---
  {
    id: 'alert-modal-system',
    title: 'ShowcaseAlertsModals (통합 모달)',
    category: 'modals',
    description: '실제 알림 모달, 삭제 확인 액션창 및 토스트 시스템',
    badge: 'POPULAR',
    route: '/ui/alerts-modals',
    reactCode: `import ShowcaseAlertsModals from '@/components/ui/ShowcaseAlertsModals';\n\nexport default function ModalDemo() {\n  return <ShowcaseAlertsModals />;\n}`,
    htmlCode: `<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
  <div class="bg-white p-6 rounded-3xl shadow-2xl">모달 콘텐츠</div>
</div>`
  },
  {
    id: 'integration-cards',
    title: 'Integrations (확장 서비스 카드)',
    category: 'modals',
    description: '외부 서비스 및 API 연동을 제어하는 그리드 카드 컴포넌트',
    badge: 'HOT',
    route: '/pages/integrations',
    reactCode: `import Integrations from '@/pages/integrations/Integrations';\n\nexport default function IntegrationsDemo() {\n  return <Integrations />;\n}`,
    htmlCode: `<div class="p-4 border rounded-2xl flex items-center justify-between">
  <span class="font-bold text-xs">Slack Integration</span>
  <button class="px-3 py-1 bg-indigo-600 text-white text-xs rounded-xl">연동하기</button>
</div>`
  },
  {
    id: 'pricing-tier-cards',
    title: 'PricingSections (구독 요금제 카드)',
    category: 'modals',
    description: '플랜 비교, 월간/연간 스위치 및 결제 가입 요금제 카드 컴포넌트',
    route: '/pages/pricing-sections',
    reactCode: `import PricingSections from '@/pages/pricing/PricingSections';\n\nexport default function PricingDemo() {\n  return <PricingSections />;\n}`,
    htmlCode: `<div class="p-6 border-2 border-indigo-500 rounded-3xl shadow-xl text-center">
  <h4 class="font-bold text-lg">Pro Plan</h4>
  <p class="text-2xl font-extrabold my-2">$29/mo</p>
</div>`
  },
  {
    id: 'error-404-component',
    title: 'ErrorPage 404 (페이지 미발견)',
    category: 'modals',
    description: '존재하지 않는 페이지 탐색 시 안내하는 404 에러 안내 화면',
    route: '/pages/error-404',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error404Demo() {\n  return <ErrorPage code="404" />;\n}`,
    htmlCode: `<div class="text-center py-12 space-y-2">
  <h1 class="text-4xl font-extrabold text-indigo-600">404</h1>
  <p class="text-xs text-slate-500">페이지를 찾을 수 없습니다.</p>
</div>`
  },
  {
    id: 'error-500-component',
    title: 'ErrorPage 500 (서버 오류)',
    category: 'modals',
    description: '내부 예외 발생 시 전용복구를 안내하는 500 장애 대응 화면',
    route: '/pages/error-500',
    reactCode: `import ErrorPage from '@/pages/errors/ErrorPage';\n\nexport default function Error500Demo() {\n  return <ErrorPage code="500" />;\n}`,
    htmlCode: `<div class="text-center py-12 space-y-2">
  <h1 class="text-4xl font-extrabold text-rose-600">500</h1>
  <p class="text-xs text-slate-500">서버에 문제가 발생했습니다.</p>
</div>`
  },
  {
    id: 'task-list-component',
    title: 'TaskList (태스크 리스트 관리)',
    category: 'modals',
    description: '우선순위 뱃지, 상태 변경 및 검색을 결합한 작업 목록 컴포넌트',
    route: '/tasks/list',
    reactCode: `import TaskList from '@/pages/tasks/TaskList';\n\nexport default function TaskListDemo() {\n  return <TaskList />;\n}`,
    htmlCode: `<div class="p-3 border rounded-xl flex items-center justify-between">
  <span class="font-bold text-xs">대시보드 UI 리팩토링</span>
  <span class="px-2 py-0.5 bg-amber-500/10 text-amber-600 text-[10px] rounded">진행중</span>
</div>`
  },

  // --- Category: Tables (6) ---
  {
    id: 'table-basic-data',
    title: 'BasicTables (기본 데이터 테이블)',
    category: 'tables',
    description: '프로필 이미지, 상태 뱃지, 정렬 및 페이징이 결합된 기본 표 컴포넌트',
    badge: 'POPULAR',
    route: '/tables/basic',
    reactCode: `import BasicTables from '@/pages/tables/BasicTables';\n\nexport default function BasicTableDemo() {\n  return <BasicTables />;\n}`,
    htmlCode: `<table class="w-full text-left border-collapse">
  <thead><tr class="border-b text-xs"><th class="p-2">이름</th><th class="p-2">상태</th></tr></thead>
  <tbody><tr class="border-b text-xs"><td class="p-2 font-bold">홍길동</td><td class="p-2">승인됨</td></tr></tbody>
</table>`
  },
  {
    id: 'table-ieum-editorial',
    title: 'IeumTable (이음 에디토리얼 표)',
    category: 'tables',
    description: '이음 웹진 스타일의 감성 감각적 칼럼 및 기사 데이터 표',
    badge: 'HOT',
    route: '/webzine/eeum/table',
    reactCode: `import IeumTable from '@/pages/webzine/ieum/IeumTable';\n\nexport default function IeumTableDemo() {\n  return <IeumTable />;\n}`,
    htmlCode: `<div class="p-4 bg-slate-50 rounded-2xl border font-serif text-xs">
  <h4 class="font-bold border-b pb-2">이음 문화 저널 목록</h4>
</div>`
  },
  {
    id: 'table-arte-visual',
    title: 'ArteTable (아르떼 미디어 표)',
    category: 'tables',
    description: '아르떼 예술 문화 아티클 및 미디어 자산 정보 테이블',
    route: '/webzine/arte/table',
    reactCode: `import ArteTable from '@/pages/webzine/arte/ArteTable';\n\nexport default function ArteTableDemo() {\n  return <ArteTable />;\n}`,
    htmlCode: `<div class="p-4 bg-white rounded-2xl border text-xs">
  <div class="flex justify-between font-bold"><span>아르떼 미술관 갤러리</span><span>2026.08</span></div>
</div>`
  },
  {
    id: 'task-kanban-board',
    title: 'TaskKanban (칸반 보드)',
    category: 'tables',
    description: '드래그 앤 드롭 형태의 작업 할 일/진행 중/완료 대시보드 보드',
    route: '/tasks/kanban',
    reactCode: `import TaskKanban from '@/pages/tasks/TaskKanban';\n\nexport default function KanbanDemo() {\n  return <TaskKanban />;\n}`,
    htmlCode: `<div class="grid grid-cols-3 gap-4">
  <div class="p-3 bg-slate-100 rounded-2xl"><h4 class="font-bold text-xs">할 일 (To Do)</h4></div>
</div>`
  },
  {
    id: 'calendar-page-component',
    title: 'Calendar (스케줄 달력)',
    category: 'tables',
    description: '월간/주간 스케줄 이벤트 등록 및 일정 관리 달력 컴포넌트',
    route: '/calendar',
    reactCode: `import Calendar from '@/pages/Calendar';\n\nexport default function CalendarDemo() {\n  return <Calendar />;\n}`,
    htmlCode: `<div class="p-4 border rounded-2xl text-center">
  <h3 class="font-bold text-sm">2026년 8월 일정</h3>
</div>`
  },
  {
    id: 'hero-section-layouts',
    title: 'HeroSections (히어로 헤더 그리드)',
    category: 'tables',
    description: '다양한 랜딩 페이지의 메인 비주얼 히어로 레이아웃 모음',
    route: '/pages/hero-sections',
    reactCode: `import HeroSections from '@/pages/hero/HeroSections';\n\nexport default function HeroSectionsDemo() {\n  return <HeroSections />;\n}`,
    htmlCode: `<header class="py-16 text-center bg-indigo-900 text-white rounded-3xl">
  <h1 class="text-3xl font-extrabold">멋진 랜딩 히어로</h1>
</header>`
  },

  // --- Category: Webzine Snippets (6) ---
  {
    id: 'arte-image-component',
    title: 'ArteImage (아르떼 비주얼 이미지)',
    category: 'webzine',
    description: '아르떼 웹진의 고화질 비주얼 이미지 카드 및 캡션 레이아웃',
    badge: 'POPULAR',
    route: '/webzine/arte/image',
    reactCode: `import ArteImage from '@/pages/webzine/arte/ArteImage';\n\nexport default function ArteImageDemo() {\n  return <ArteImage />;\n}`,
    htmlCode: `<div class="rounded-2xl overflow-hidden shadow-lg border">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" class="w-full h-48 object-cover" />
</div>`
  },
  {
    id: 'arte-video-component',
    title: 'ArteVideo (아르떼 영상 플레이어)',
    category: 'webzine',
    description: '아르떼 예술 오디오/비디오 미디어 스트리밍 카드',
    badge: 'HOT',
    route: '/webzine/arte/video',
    reactCode: `import ArteVideo from '@/pages/webzine/arte/ArteVideo';\n\nexport default function ArteVideoDemo() {\n  return <ArteVideo />;\n}`,
    htmlCode: `<div class="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center">
  <button class="w-12 h-12 bg-indigo-600 text-white rounded-full font-bold">▶</button>
</div>`
  },
  {
    id: 'arte-text-component',
    title: 'ArteText (아르떼 칼럼 텍스트)',
    category: 'webzine',
    description: '에디터 본문 타이포그래피 및 문단 가독성 스니펫',
    route: '/webzine/arte/text',
    reactCode: `import ArteText from '@/pages/webzine/arte/ArteText';\n\nexport default function ArteTextDemo() {\n  return <ArteText />;\n}`,
    htmlCode: `<article class="prose max-w-none text-xs leading-relaxed">
  <h2 class="font-bold text-base">예술의 새로운 해석</h2>
</article>`
  },
  {
    id: 'arte-profile-component',
    title: 'ArteProfile (아르떼 필진 프로필)',
    category: 'webzine',
    description: '아르떼 전문 칼럼니스트 및 기자의 서재 프로필 컴포넌트',
    route: '/webzine/arte/profile',
    reactCode: `import ArteProfile from '@/pages/webzine/arte/ArteProfile';\n\nexport default function ArteProfileDemo() {\n  return <ArteProfile />;\n}`,
    htmlCode: `<div class="flex items-center gap-3 p-4 bg-slate-100 rounded-2xl">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arte" class="w-10 h-10 rounded-full" />
  <div><h4 class="font-bold text-xs">수석 에디터</h4></div>
</div>`
  },
  {
    id: 'arte-box-component',
    title: 'ArteBox (아르떼 기획 강조 박스)',
    category: 'webzine',
    description: '주요 이슈 및 에디터 픽 강조 아티클 박스 컴포넌트',
    route: '/webzine/arte/box',
    reactCode: `import ArteBox from '@/pages/webzine/arte/ArteBox';\n\nexport default function ArteBoxDemo() {\n  return <ArteBox />;\n}`,
    htmlCode: `<div class="p-6 bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl">
  <span class="px-2 py-0.5 bg-amber-400 text-slate-900 text-[10px] font-bold rounded">Arte Pick</span>
</div>`
  },
  {
    id: 'arte-notice-component',
    title: 'ArteNotice (아르떼 정기구독 공지)',
    category: 'webzine',
    description: '뉴스레터 수신 동의 및 아르떼 월간 정기구독 공지 카드',
    route: '/webzine/arte/notice',
    reactCode: `import ArteNotice from '@/pages/webzine/arte/ArteNotice';\n\nexport default function ArteNoticeDemo() {\n  return <ArteNotice />;\n}`,
    htmlCode: `<div class="p-4 bg-indigo-600 text-white rounded-2xl flex items-center justify-between">
  <span class="font-bold text-xs">아르떼 8월호 뉴스레터 구독</span>
</div>`
  },

  // --- Category: Charts & Metrics (6) ---
  {
    id: 'chart-line-charts',
    title: 'LineCharts (분석 트렌드 차트)',
    category: 'charts',
    description: 'ECharts 기반의 동적 라인, 영역 및 성과 분석 트렌드 차트 컴포넌트',
    badge: 'POPULAR',
    route: '/charts/line-charts',
    reactCode: `import LineCharts from '@/pages/charts/LineCharts';\n\nexport default function LineChartsDemo() {\n  return <LineCharts />;\n}`,
    htmlCode: `<div class="p-4 border rounded-2xl bg-white text-xs">
  <h4 class="font-bold">주간 방문자 트렌드</h4>
</div>`
  },
  {
    id: 'arte-new-visual',
    title: 'ArteNew (신규 아티클 쇼케이스)',
    category: 'charts',
    description: '아르떼 웹진의 최신 릴리즈 및 핫 아티클 메타 카드',
    badge: 'NEW',
    route: '/webzine/arte/new',
    reactCode: `import ArteNew from '@/pages/webzine/arte/ArteNew';\n\nexport default function ArteNewDemo() {\n  return <ArteNew />;\n}`,
    htmlCode: `<div class="p-4 bg-white border rounded-2xl text-xs font-bold">
  <span>✨ New Release Issue #42</span>
</div>`
  },
  {
    id: 'ieum-video-component',
    title: 'IeumVideo (이음 비디오 플레이어)',
    category: 'charts',
    description: '이음 감성 웹진의 스트리밍 비디오 모듈',
    route: '/webzine/eeum/video',
    reactCode: `import IeumVideo from '@/pages/webzine/ieum/IeumVideo';\n\nexport default function IeumVideoDemo() {\n  return <IeumVideo />;\n}`,
    htmlCode: `<div class="rounded-2xl overflow-hidden aspect-video bg-black">
  <video src="#" class="w-full h-full"></video>
</div>`
  },
  {
    id: 'ieum-image-component',
    title: 'IeumImage (이음 포토 갤러리)',
    category: 'charts',
    description: '이음 웹진의 감성 시각 포토 갤러리 레이아웃 카드',
    route: '/webzine/eeum/image',
    reactCode: `import IeumImage from '@/pages/webzine/ieum/IeumImage';\n\nexport default function IeumImageDemo() {\n  return <IeumImage />;\n}`,
    htmlCode: `<div class="grid grid-cols-2 gap-2 p-2 bg-slate-100 rounded-2xl">
  <img src="/photo1.jpg" class="rounded-xl" />
</div>`
  },
  {
    id: 'ieum-text-component',
    title: 'IeumText (이음 칼럼 인용구)',
    category: 'charts',
    description: '이음 웹진의 문학적 명언 및 아티클 인용구 컴포넌트',
    route: '/webzine/eeum/text',
    reactCode: `import IeumText from '@/pages/webzine/ieum/IeumText';\n\nexport default function IeumTextDemo() {\n  return <IeumText />;\n}`,
    htmlCode: `<blockquote class="p-4 border-l-4 border-indigo-600 bg-indigo-50 italic text-xs">
  "삶과 예술의 조화로운 경험"
</blockquote>`
  },
  {
    id: 'arte-link-component',
    title: 'ArteLink (아르떼 출처 뱃지)',
    category: 'charts',
    description: '아르떼 관련 외부 아티클 참조 및 소스 뱃지 컴포넌트',
    route: '/webzine/arte/link',
    reactCode: `import ArteLink from '@/pages/webzine/arte/ArteLink';\n\nexport default function ArteLinkDemo() {\n  return <ArteLink />;\n}`,
    htmlCode: `<a href="#" class="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 underline">
  <span>관련 출처 확인 🔗</span>
</a>`
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
    description: '프로젝트 실제 페이지의 ShowcaseButtonsBadges, FormElements, BasicTables, ArteImage, LineCharts 등 실존 컴포넌트 36종 갤러리 추천 탑재',
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
