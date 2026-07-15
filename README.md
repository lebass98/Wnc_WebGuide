# 📊 React + TypeScript + Vite 대시보드 프로젝트 (DashBoard_01)

본 프로젝트는 **React 19**, **TypeScript**, 그리고 **Vite**를 기반으로 구축된 프리미엄 관리자 대시보드 웹 애플리케이션입니다. Tailwind CSS v4를 활용한 미려한 UI 디자인과 다크 모드, 드래그 앤 드롭 업무 보드, 인터랙티브한 ECharts 시각화 등 다양한 컴포넌트와 유틸리티 기능을 완벽히 탑재하고 있습니다.

---

## 🚀 프로젝트 주요 특징 & 상황

1. **상태 관리 및 사용자 인증**
   - 로컬 스토리지(`localStorage`) 기반의 세션 유지 방식으로 구동되는 로그인/회원가입 기능이 탑재되어 있습니다.
   - 인증되지 않은 사용자가 서비스 내 다른 경로로 접근할 때 `/signin` 페이지로 자동 리다이렉트하는 라우팅 가드가 적용되어 있습니다.

2. **다크 모드 & 라이트 모드 (Theme)**
   - Tailwind CSS v4의 `dark` 배리언트를 커스텀하여 시스템 설정 및 사용자 명시적 선택에 따라 실시간으로 테마가 전환됩니다.
   - 설정된 테마 상태 역시 로컬 스토리지에 유지되어 새로고침 시에도 유지됩니다.

3. **🌐 전역 상태 관리 및 데이터 흐름 (Context API 도입)**
   - **Props 드릴링 전면 해결**: [App.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/App.tsx)에서 하위 컴포넌트들로 어지럽게 전달되던 다크 모드 테마 토글, 로그인 세션 변수, 로그아웃 콜백 등을 전면 걷어내고 Context API를 통해 전역 관리를 일원화했습니다.
   - **ThemeContext**: 테마 상태(`light` / `dark`)의 변경, 로컬 스토리지 자동 저장 및 최상단 HTML 돔 조작을 [ThemeContext.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/context/ThemeContext.tsx)로 완전히 격리하고 `useTheme` 커스텀 훅을 제공합니다.
   - **AuthContext**: 로그인 정보(`isAuthenticated`), 로그인 시도(`login`), 로그아웃(`logout`) 플로우를 [AuthContext.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/context/AuthContext.tsx) 내에 캡슐화하고 `useAuth` 커스텀 훅을 제공하여 라우터 가딩과 헤더 및 인증 폼의 상태 변환을 유기적으로 통제합니다.

4. **풍부한 인터랙티브 컴포넌트**
   - **Kanban Board** & **Task List**: `@dnd-kit` 라이브러리를 사용해 직접 카드를 이동시킬 수 있는 고성능 간반 보드를 지원합니다.
   - **ECharts Charts**: 매출 추이, 목표 달성률, 고객 현황 등을 화려한 그래프로 렌더링하기 위해 `echarts`와 `echarts-for-react`가 최적화되어 도입되어 있습니다.
   - **Calendar & Forms**: 다양한 포맷의 일정 관리 기능과, 캘린더 피커를 포함한 정교한 폼 레이아웃 요소를 제공합니다.

5. **📐 대시보드 레이아웃 개선 및 UI/UX 라이브러리 허브화 (최신 업데이트)**
   - **가이드 사이트 정체성 부여**: 의미 없는 쇼핑몰 매출/주문 정보 및 지도를 전면 걷어내고, 사이트 본질인 **컴포넌트 쇼케이스 가이드 현황**을 모니터링할 수 있는 전용 지표와 위젯들로 완전히 교체했습니다.
   - **4열 KPI 확장**: 상단 지표를 4열로 넓혀 총 컴포넌트 수(`142개`), 누적 코드 복사(`3,820회`), 금주 신규 템플릿(`8개`), 누적 개발 단축 시간(`42.5시간`)을 직관적으로 보여줍니다.
   - **릴리즈 이력 및 개발자 실시간 로그 피드**: 최근 수정 및 업데이트된 컴포넌트의 빌드 크기, 패치 일자를 담은 테이블과 개발자 복사/이슈 기여 타임라인 로그 위젯을 엮었습니다.
   - **사이드바 fixed 고정**: 좌측 사이드바를 `fixed` 형태로 완전 고정하고, 메인 콘텐츠 영역에 패딩(`lg:pl-[280px]`)을 확보하여 콘텐츠 가려짐 현상을 근본적으로 해결했습니다.
   - **FAQ 2열 반응형 그리드 배치**: FAQ 아코디언 카드들을 `grid-cols-1 xl:grid-cols-2` 그리드로 정렬하고, 불필요한 구분선을 제거해 탁월한 공간 활용도와 심미성을 구현했습니다.
   - **카드 헤더 세로 줄내림(flex-col) 디자인 고정**: 2열 그리드가 적용된 FAQ, 폼 레이아웃, 폼 요소 카드의 상단 도구 바가 가로폭 부족으로 깨지거나 찌그러지지 않도록 항상 세로 정렬(`flex flex-col items-start gap-3`)로 디자인을 고정했습니다.
   - **폼 요소 및 폼 레이아웃 실시간 미리보기(Wrapper) 연동**:
     - 각 카드 영역에 대해 **React 탭 / 일반 HTML 탭 실시간 미리보기** 탭을 탑재했습니다.
     - **기기 뷰포트 시뮬레이터**(데스크톱/태블릿/모바일) 및 **실시간 테마 스위처**(라이트/다크 모드 변경)를 제공하여 뷰 상태를 반응형으로 즉각 테스트할 수 있습니다.
     - 전체 소스코드 **코드보기 및 클립보드 간편 복사** 기능이 연동되어 개발자의 템플릿 사용성을 대폭 끌어올렸습니다.

6. **📐 아키텍처 및 폴더 구조 리팩토링**
   - **폴더 세분화**: 기존 `src/components/` 하위에 평면적으로 흩어져 있던 약 40여 개의 컴포넌트를 `components/layout/` (공통 레이아웃), `components/ui/` (재사용 UI), `components/dashboard/` (대시보드 위젯)으로 분류하여 파일의 독립성과 응집도를 강화했습니다.
   - **페이지(Pages) 컴포넌트 격리**: 라우터와 직접 매핑되는 각 페이지 컴포넌트들을 `src/pages/` 디렉토리 하위의 도메인 분류 폴더로 물리적으로 이동시켰습니다.
   - **Dashboard 추출**: [App.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/App.tsx) 내부의 메인 대시보드 코드를 [Dashboard.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/pages/Dashboard.tsx) 페이지 파일로 깔끔하게 추출하여 최상단 라우터 소스코드의 가독성을 대폭 개선했습니다.
   - **데이터 격리 및 스타일 분할**: JSON 형식의 정적 모의 데이터(`.json`)를 `src/data/` 로 격리 보관하였고, Pretendard 폰트 불러오기 및 스크롤바 스타일 코드를 `src/styles/` 폴더 내 개별 CSS 파일로 구조화했습니다.

7. **⚡ 성능 및 빌드 최적화**
   - **라우트 단위 코드 스플리팅(Code Splitting)**: `React.lazy()`와 `Suspense`를 활용해 모든 페이지 및 쇼케이스 컴포넌트를 지연 로드(Dynamic Import)하도록 구성했습니다. 이로 인해 초기 로딩 시 다운받는 메인 JS 번들 용량이 **2.32MB에서 56.45KB로 약 97.5% 대폭 감축**되어 초기 웹 진입 성능이 혁신적으로 개선되었습니다.
   - **ECharts 트리쉐이킹(Tree Shaking)**: ECharts를 불러오는 유일한 페이지인 [LineCharts.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/pages/charts/LineCharts.tsx)에 `ReactEChartsCore` 및 필요한 구성 모듈만 선별 임포트하여 ECharts 빌드 번들 크기를 줄였습니다.
   - **Vite manualChunks 청크 분할 설정**: [vite.config.ts](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/vite.config.ts)를 갱신하여 묵직한 패키지들(`react`, `react-dom`, `echarts`, `lucide-react`)을 별도의 벤더 청크 파일로 분할해 순환 참조를 제어하고, 빌드 단계에서 발생하던 청크 크기 500kB 한도 초과 경고를 완벽히 해결했습니다.

8. **🛡️ 코드 품질 및 안정성 고도화**
   - **ESLint 정밀 규칙 확장**: [eslint.config.js](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/eslint.config.js)를 확장하여 미사용 변수 에러 강제(`@typescript-eslint/no-unused-vars`), 콘솔 노출 경고(`no-console`), React Hooks 공식 규칙 엄격 규제 등 정적 코드 품질을 통제하기 위한 커스텀 정적 분석 규칙을 구성했습니다.
   - **전역 에러 바운더리(Error Boundary)**: 특정 하위 컴포넌트의 렌더링 런타임 에러로 인해 대시보드가 통째로 화이트아웃되는 크래시 현상을 차단하고자 [ErrorBoundary.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/components/common/ErrorBoundary.tsx) 예외 복구 장치를 신규 개발하고 [App.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/App.tsx)의 최상단 렌더링 스코프를 감싸 런타임 안정성을 확보했습니다.
   - **Vitest 테스팅 프레임워크 구축**: Vite 환경에 최적화된 고성능 테스트 엔진인 **Vitest**와 **React Testing Library**를 통합 도입하여 가상 DOM 환경(`jsdom`)에서 컴포넌트 렌더링 무결성을 주기적으로 검증할 수 있는 인프라를 마련했습니다.
   - **테스트 및 환경 모킹 자동화**: [setupTests.ts](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/setupTests.ts)를 통해 DOM 테스팅을 위한 단언식 확장 바인딩 및 `window.matchMedia` 같은 테스팅 환경 미지원 브라우저 API들의 모킹 구성을 자동화하여 테스트 구동 신뢰성을 높였습니다.

9. **🎨 UI/UX 및 웹 접근성(a11y) 고도화**
   - **다크 모드 Flicker 방지**: [index.html](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/index.html) 헤더 내에 테마 즉시 감지 스크립트를 삽입하여, 다크 모드 활성화 상태에서 페이지 진입 시 흰색 테마 화면이 순간적으로 보였다 사라지는 현상을 완벽히 차단했습니다.
   - **프리미엄 스켈레톤 UI 도입**: 대시보드의 실루엣을 모사하고 은은하게 깜빡이는 `animate-pulse` 점멸 애니메이션을 담은 [DashboardSkeleton.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/components/common/DashboardSkeleton.tsx)를 구현 및 Suspense 로더에 매핑하여 동적 로딩 지연 중 이탈감을 해결했습니다.
   - **웹 접근성(a11y) 표준 및 키보드 조작성 보완**: [FormElements.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/pages/forms/FormElements.tsx) 내의 커스텀 체크박스, 라디오, 토글 스위치 등에 `sr-only peer` 및 `peer-focus:ring` 기법을 적용하여 스크린 리더 인식 및 키보드 조작(Tab, Space/Enter)이 완벽하게 지원되도록 개선했습니다.
   - **Sidebar 접근성 마크업 보완**: [Sidebar.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/components/layout/Sidebar.tsx) 네비게이션 태그에 `role="navigation"` 속성을 주입하고 모바일 닫기 버튼에 스크린 리더용 레이블(`aria-label="메뉴 닫기"`)을 보완했습니다.
   - **마이크로 인터랙션 모션 추가**: [StatCard.tsx](file:///Users/ijaegwang/wordncode/React/Project/DashBoard_01/src/components/dashboard/StatCard.tsx)에 마우스 hover 시 살짝 떠오르며 입체적인 그림자가 강조되는 인터랙티브 효과를 적용했습니다.

---

## 🛠 기술 스택 (Technology Stack)

| 구분 | 도입 스택 / 라이브러리 |
| :--- | :--- |
| **Core** | React 19.2.0, TypeScript 5.9.3, Vite 7.3.1 |
| **Styling** | Tailwind CSS v4.2.1 (`@tailwindcss/vite` 연동) |
| **Routing** | React Router Dom 7.18.1 |
| **Icons** | Lucide React 0.577.0 |
| **Charts** | ECharts 6.0.0, ECharts-for-React 3.0.6, JSVectorMap 1.7.0 |
| **Drag & Drop**| @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities |
| **Testing** | Vitest 4.1.10, JSDOM, Testing-Library (React/Jest-DOM) |
| **Deployment** | gh-pages (GitHub Pages 자동 배포 지원) |

---

## 📂 프로젝트 폴더 & 파일 구조 (Root Structure)

```bash
DashBoard_01/
├── dist/                     # 빌드(npm run build) 완료 시 생성되는 정적 배포 파일 폴더
├── public/                   # 브라우저에 직접 서빙되는 정적 자원 (Favicon 등)
├── src/                      # 애플리케이션의 핵심 소스 코드 폴더
│   ├── assets/               # 이미지, SVG 아이콘 등 에셋 관리
│   ├── components/           # 대시보드를 구성하는 단위 컴포넌트 모음
│   │   ├── common/           # 공통 기능 및 예외 처리 컴포넌트
│   │   │   ├── DashboardSkeleton.tsx     # 페이지 지연 로딩 시 렌더링되는 점멸 스켈레톤 UI
│   │   │   └── ErrorBoundary.tsx         # 런타임 에러 감지 및 화면 복구 Fallback 컴포넌트
│   │   ├── dashboard/        # 대시보드 내 개별 통계 요약 카드 및 그래프 위젯
│   │   │   ├── ActivityFeed.tsx          # 최근 사용자 활동 로그 피드
│   │   │   ├── CustomersDemographic.tsx  # 실시간 컴포넌트 개발 및 사용 피드(Activity Feed) 타임라인
│   │   │   ├── MapOne.tsx                # 지도 시각화 컴포넌트 (트리쉐이킹 대응)
│   │   │   ├── MonthlySalesChart.tsx     # 월별 컴포넌트 추가 추이 그래프
│   │   │   ├── MonthlyTargetCard.tsx     # 가이드 구축 목표 달성율 및 현황 카드
│   │   │   ├── RecentOrders.tsx          # 최근 업데이트된 컴포넌트 리스트 릴리즈 테이블
│   │   │   ├── RevenueChart.tsx          # 총 수익률 비교 분석 차트
│   │   │   ├── SalesChart.tsx            # 판매 실적 도넛/원형 차트
│   │   │   ├── StatCard.tsx              # 상단 통계 요약 카드 (총 컴포넌트, 누적 복사 등)
│   │   │   └── StatisticsChart.tsx       # 상세 주간/월간 실적 대비 그래프
│   │   ├── layout/           # 서비스 전체 공통 레이아웃 컴포넌트
│   │   │   ├── Header.tsx                # 검색창, 알림/프로필 드롭다운, 테마 스위치 포함 헤더
│   │   │   └── Sidebar.tsx               # 반응형 사이드 네비게이션 바 (모바일 드로워 기능 포함)
│   │   └── ui/               # 실시간 미리보기 쇼케이스 및 재사용 가능 공통 UI 컴포넌트
│   │       ├── CustomDatePicker.tsx      # 커스텀 날짜 선택기
│   │       ├── InputComponent.tsx        # 반응형 인풋 컨트롤 미리보기
│   │       ├── ShowcaseAlertsModals.tsx  # 토스트 알림, 모달 팝업 가이드
│   │       ├── ShowcaseButtonsBadges.tsx # 버튼 종류 및 상태 배지 쇼케이스
│   │       ├── ShowcaseDataDisplay.tsx   # 유저 정보 카드 등의 데이터 표시 UI
│   │       ├── ShowcaseProgressNav.tsx   # 프로그레스 바 및 탭 네비게이션 쇼케이스
│   │       ├── ShowcaseStatesLoaders.tsx # 빈 상태(Empty), 로딩 상태 컴포넌트
│   │       └── ShowcaseWrapper.tsx       # 뷰포트 시뮬레이터 및 코드 뷰 탭 미리보기 래퍼
│   ├── context/              # 전역 상태 관리 폴더 (Context API)
│   │   ├── AuthContext.tsx   # 사용자 로그인 및 세션 관리 Context
│   │   └── ThemeContext.tsx  # 다크 모드 / 라이트 모드 테마 관리 Context
│   ├── data/                 # 소스코드와 격리된 정적 목데이터 (.json Snippet 데이터 모음)
│   │   ├── componentDashboardData.json   # 메인 대시보드 전용 UI 컴포넌트 라이브러리 및 타임라인 로그 Mock 데이터
│   ├── pages/                # 라우터와 직접적으로 맵핑되는 웹진/대시보드 페이지 컴포넌트
│   │   ├── auth/             # LoginPage.tsx, SignUpPage.tsx
│   │   ├── charts/           # LineCharts.tsx
│   │   ├── errors/           # ErrorPage.tsx (404, 500, 503 대응)
│   │   ├── faq/              # FAQ.tsx (아코디언 질문 페이지)
│   │   ├── forms/            # FormElements.tsx, FormLayout.tsx
│   │   ├── hero/             # HeroSections.tsx (서비스 소개)
│   │   ├── integrations/     # Integrations.tsx (써드파티 연동)
│   │   ├── pricing/          # PricingSections.tsx (요금제 테이블)
│   │   ├── tables/           # BasicTables.tsx
│   │   ├── tasks/            # TaskList.tsx, TaskKanban.tsx
│   │   ├── Calendar.tsx      # 캘린더 메인 일정 페이지
│   │   └── Dashboard.tsx     # 대시보드 메인 홈 페이지 (App.tsx에서 추출 분리 및 라이브러리 가이드화)
│   ├── styles/               # 스타일 세분화 폴더
│   │   ├── fonts.css         # Pretendard 웹 폰트 임포트 전용 파일
│   │   └── scrollbar.css     # 스크롤바 디자인 전용 커스텀 CSS
│   ├── types/                # 글로벌 TS 타입 정의 폴더 (jsvectormap.d.ts)
│   ├── __tests__/            # 테스팅 스펙 코드 폴더
│   │   └── App.test.tsx      # App 컴포넌트 렌더링 및 로더 폴백 단언 테스트
│   ├── App.tsx               # 메인 라우터 선언, 다크 모드/인증 등 전역 상태, lazy 로드 및 ErrorBoundary 래핑
│   ├── index.css             # 스타일 엔트리 (Tailwind CSS, fonts.css, scrollbar.css 취합)
│   ├── main.tsx              # React 가상 DOM 시작점 및 Router 마운트
│   └── setupTests.ts         # Vitest 글로벌 셋업 및 브라우저 API 모킹 파일
├── eslint.config.js          # ESLint 정적 분석 린트 설정 파일
├── package.json              # 프로젝트 의존성 리스트 및 실행 스크립트 정보
├── tsconfig.json             # TypeScript 전체 전역 설정
├── tsconfig.app.json         # 클라이언트 App 전용 TypeScript 세부 설정
├── tsconfig.node.json        # Node 환경(Vite Config 등)을 위한 TypeScript 설정
└── vite.config.ts            # Vite 빌드, 플러그인, Base URL, manualChunks 및 Vitest 설정 파일
```

---

## 💻 실행 및 빌드 방법 (Getting Started)

### 1. 패키지 설치
프로젝트에서 필요한 라이브러리 및 의존성을 설치합니다.
```bash
npm install
```

### 2. 로컬 개발 서버 실행
Vite의 고속 핫 리로딩(HMR) 기능이 활성화된 로컬 호스트 서버를 실행합니다.
```bash
npm run dev
```
- 실행 후 브라우저에서 `http://localhost:5173/` 로 접근할 수 있습니다.

### 3. 프로덕션 빌드
배포용 번들을 준비하기 위해 TypeScript 타입 검사 수행 후 리소스를 빌드합니다.
```bash
npm run build
```
- 빌드 결과물은 `dist/` 폴더 하위에 생성됩니다.

### 4. 테스트 실행
작성된 컴포넌트 및 로직 테스트 스펙을 일회성 또는 워치 모드로 실행합니다.
```bash
# 단발성 전체 테스트 실행
npm run test

# 테스트 실시간 감시(Watch) 모드 실행
npm run test:watch
```

### 5. GitHub Pages 배포
설정되어 있는 스크립트를 사용하여 GitHub Pages에 손쉽게 빌드 결과물을 배포할 수 있습니다.
```bash
npm run deploy
```
