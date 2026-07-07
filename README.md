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

3. **풍부한 인터랙티브 컴포넌트**
   - **Kanban Board** & **Task List**: `@dnd-kit` 라이브러리를 사용해 직접 카드를 이동시킬 수 있는 고성능 간반 보드를 지원합니다.
   - **ECharts Charts**: 매출 추이, 목표 달성률, 고객 현황 등을 화려한 그래프로 렌더링하기 위해 `echarts`와 `echarts-for-react`가 최적화되어 도입되어 있습니다.
   - **Calendar & Forms**: 다양한 포맷의 일정 관리 기능과, 캘린더 피커를 포함한 정교한 폼 레이아웃 요소를 제공합니다.

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
│   │   ├── ActivityFeed.tsx          # 최근 사용자 활동 로그 피드
│   │   ├── BasicTables.tsx           # 정렬 및 상세 보기 기능을 제공하는 기본 데이터 테이블
│   │   ├── Calendar.tsx              # 일정 등록 및 달력 뷰
│   │   ├── CustomDatePicker.tsx      # 커스텀 날짜 선택기
│   │   ├── CustomersDemographic.tsx  # 지도 기반 고객 지역 통계 (JSVectorMap 활용)
│   │   ├── FAQ.tsx                   # 아코디언 스타일의 자주 묻는 질문(FAQ) 목록
│   │   ├── FormElements.tsx          # 체크박스, 라디오, 인풋 등 각종 폼 필수 입력 요소
│   │   ├── FormLayout.tsx            # 프로필 수정, 비밀번호 변경 등 폼 페이지 레이아웃
│   │   ├── Header.tsx                # 검색창, 알림/프로필 드롭다운, 테마 스위치 포함 헤더
│   │   ├── HeroSections.tsx          # 서비스 대표 소개(히어로) 영역 컴포넌트
│   │   ├── Integrations.tsx          # 연결된 써드파티 앱 목록 관리 화면
│   │   ├── LineCharts.tsx            # 선형 분석 그래프 모음 컴포넌트
│   │   ├── LoginPage.tsx             # 아이디/비밀번호 및 소셜 로그인 지원 로그인 뷰
│   │   ├── MapOne.tsx                # 지도 시각화 컴포넌트
│   │   ├── MonthlySalesChart.tsx     # 월간 판매 데이터 꺾은선/막대 혼합 그래프
│   │   ├── MonthlyTargetCard.tsx     # 당월 실적 및 원형 진행도 목표 카드
│   │   ├── PricingSections.tsx       # 다크/라이트 모드 맞춤형 요금제 비교 테이블
│   │   ├── RecentOrders.tsx          # 최근 주문 내역 리스트 및 상태(Status) 배지
│   │   ├── RevenueChart.tsx          # 총 수익률 비교 분석 차트
│   │   ├── SalesChart.tsx            # 판매 실적 도넛/원형 차트
│   │   ├── Sidebar.tsx               # 반응형 사이드 네비게이션 바 (모바일 드로워 기능 포함)
│   │   ├── SignUpPage.tsx            # 회원 가입 폼 뷰
│   │   ├── StatCard.tsx              # 상단 통계 요약 카드 (고객 수, 주문 수 등)
│   │   ├── StatisticsChart.tsx       # 상세 주간/월간 실적 대비 그래프
│   │   ├── TaskKanban.tsx            # 드래그 앤 드롭 드래그 기능이 적용된 칸반 태스크 보드
│   │   └── TaskList.tsx              # 표 형식의 전체 할 일 목록 및 관리
│   ├── App.tsx               # 메인 라우터(Route) 선언, 다크 모드/인증 등 전역 상태 핸들러
│   ├── index.css             # 전역 스타일 및 Pretendard 폰트 로드, Tailwind 설정
│   ├── jsvectormap.d.ts      # JSVectorMap TypeScript 환경 사용을 위한 타입 파일
│   └── main.tsx              # React 가상 DOM의 시작점 (BrowserRouter 바인딩)
├── eslint.config.js          # ESLint 정적 분석 린트 설정 파일
├── package.json              # 프로젝트 의존성 리스트 및 실행 스크립트 정보
├── tsconfig.json             # TypeScript 전체 전역 설정
├── tsconfig.app.json         # 클라이언트 App 전용 TypeScript 세부 설정
├── tsconfig.node.json        # Node 환경(Vite Config 등)을 위한 TypeScript 설정
└── vite.config.ts            # Vite 서버 포트, 플러그인, Base URL 설정 파일
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
- 실행 후 브라우저에서 `http://localhost:5173/react_dashboard_01/` 로 접근할 수 있습니다.

### 3. 프로덕션 빌드
배포용 번들을 준비하기 위해 TypeScript 타입 검사 수행 후 리소스를 빌드합니다.
```bash
npm run build
```
- 빌드 결과물은 `dist/` 폴더 하위에 생성됩니다.

### 4. GitHub Pages 배포
설정되어 있는 스크립트를 사용하여 GitHub Pages에 손쉽게 빌드 결과물을 배포할 수 있습니다.
```bash
npm run deploy
```
