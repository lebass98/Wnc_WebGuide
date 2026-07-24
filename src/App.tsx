import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// Lazy loaded page components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Calendar = lazy(() => import('./pages/Calendar'));
const TaskList = lazy(() => import('./pages/tasks/TaskList'));
const TaskKanban = lazy(() => import('./pages/tasks/TaskKanban'));
const FormElements = lazy(() => import('./pages/forms/FormElements'));
const FormLayout = lazy(() => import('./pages/forms/FormLayout'));
const InputComponent = lazy(() => import('./components/ui/InputComponent'));
const BasicTables = lazy(() => import('./pages/tables/BasicTables'));
const FAQ = lazy(() => import('./pages/faq/FAQ'));
const Integrations = lazy(() => import('./pages/integrations/Integrations'));
const HeroSections = lazy(() => import('./pages/hero/HeroSections'));
const PricingSections = lazy(() => import('./pages/pricing/PricingSections'));
const LineCharts = lazy(() => import('./pages/charts/LineCharts'));
const ErrorPage = lazy(() => import('./pages/errors/ErrorPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const SignUpPage = lazy(() => import('./pages/auth/SignUpPage'));
const Eeum = lazy(() => import('./pages/webzine/Eeum'));
const IeumText = lazy(() => import('./pages/webzine/ieum/IeumText'));
const IeumBox = lazy(() => import('./pages/webzine/ieum/IeumBox'));
const IeumImage = lazy(() => import('./pages/webzine/ieum/IeumImage'));
const IeumLink = lazy(() => import('./pages/webzine/ieum/IeumLink'));
const IeumVideo = lazy(() => import('./pages/webzine/ieum/IeumVideo'));
const IeumProfile = lazy(() => import('./pages/webzine/ieum/IeumProfile'));
const IeumTable = lazy(() => import('./pages/webzine/ieum/IeumTable'));
const Arte = lazy(() => import('./pages/webzine/Arte'));
const ArteImage = lazy(() => import('./pages/webzine/arte/ArteImage'));
const ArteLink = lazy(() => import('./pages/webzine/arte/ArteLink'));
const ArteVideo = lazy(() => import('./pages/webzine/arte/ArteVideo'));
const ArteText = lazy(() => import('./pages/webzine/arte/ArteText'));
const ArteProfile = lazy(() => import('./pages/webzine/arte/ArteProfile'));
const ArteBox = lazy(() => import('./pages/webzine/arte/ArteBox'));
const ArteNew = lazy(() => import('./pages/webzine/arte/ArteNew'));
const ArteTable = lazy(() => import('./pages/webzine/arte/ArteTable'));
const ArteNotice = lazy(() => import('./pages/webzine/arte/ArteNotice'));

// Lazy loaded UI components
const ShowcaseAlertsModals = lazy(() => import('./components/ui/ShowcaseAlertsModals'));
const ShowcaseButtonsBadges = lazy(() => import('./components/ui/ShowcaseButtonsBadges'));
const ShowcaseDataDisplay = lazy(() => import('./components/ui/ShowcaseDataDisplay'));
const ShowcaseProgressNav = lazy(() => import('./components/ui/ShowcaseProgressNav'));
const ShowcaseStatesLoaders = lazy(() => import('./components/ui/ShowcaseStatesLoaders'));

import DashboardSkeleton from './components/common/DashboardSkeleton';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<DashboardSkeleton />}>
        <Routes>
      {/* 1. 풀 스크린 에러 페이지 라우트 그룹 */}
      <Route path="/pages/error-404-raw" element={<ErrorPage code="404" standalone={true} />} />
      <Route path="/pages/error-500-raw" element={<ErrorPage code="500" standalone={true} />} />
      <Route path="/pages/error-503-raw" element={<ErrorPage code="503" standalone={true} />} />

      {/* 2. 로그인 관련 풀 스크린 라우트 */}
      <Route 
        path="/signin" 
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <LoginPage />
          )
        } 
      />
      <Route 
        path="/signup" 
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <SignUpPage />
          )
        } 
      />

      {/* 3. 대시보드 레이아웃 영역 (비인증 상태라면 signin으로 강제 리다이렉션) */}
      <Route 
        element={
          !isAuthenticated ? (
            <Navigate to="/signin" replace />
          ) : (
            <div className="flex min-h-screen bg-[radial-gradient(circle_at_15%_15%,rgba(197,213,255,0.75)_0%,transparent_45%),radial-gradient(circle_at_85%_20%,rgba(244,181,253,0.7)_0%,transparent_45%),radial-gradient(circle_at_90%_85%,rgba(255,214,179,0.75)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(233,181,255,0.65)_0%,transparent_50%),linear-gradient(135deg,#f0f4ff_0%,#fdf0f9_50%,#fff6ee_100%)] animated-flow-bg dark:bg-[radial-gradient(circle_at_15%_15%,rgba(30,58,138,0.35)_0%,transparent_50%),radial-gradient(circle_at_85%_20%,rgba(88,28,135,0.35)_0%,transparent_50%),radial-gradient(circle_at_90%_85%,rgba(124,45,18,0.3)_0%,transparent_50%),linear-gradient(135deg,#0f172a_0%,#1e1b4b_50%,#0f172a_100%)] font-sans transition-colors duration-300">
              <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                onToggle={toggleSidebar}
              />

              {/* Overlay for mobile when sidebar is open */}
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
                  onClick={closeSidebar}
                />
              )}

              <div className={`flex-1 ${isSidebarOpen ? 'lg:pl-[280px]' : 'lg:pl-[80px]'} flex flex-col min-h-screen overflow-hidden transition-all duration-300`}>
                 <Header
                  onMenuClick={toggleSidebar}
                  isSidebarOpen={isSidebarOpen}
                />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pt-[100px] lg:pt-[112px] custom-scrollbar">
                  <div className="w-full">
                    <Outlet />
                  </div>
                </main>
              </div>
            </div>
          )
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/list" element={<TaskList />} />
        <Route path="/tasks/kanban" element={<TaskKanban />} />
        <Route path="/forms/elements" element={<FormElements />} />
        <Route path="/forms/layout" element={<FormLayout />} />
        <Route path="/components/input" element={<InputComponent />} />
        <Route path="/tables/basic" element={<BasicTables />} />
        <Route path="/pages/faq" element={<FAQ />} />
        <Route path="/pages/integrations" element={<Integrations />} />
        <Route path="/pages/hero-sections" element={<HeroSections />} />
        <Route path="/pages/pricing-sections" element={<PricingSections />} />
        <Route path="/pages/error-404" element={<ErrorPage code="404" />} />
        <Route path="/pages/error-500" element={<ErrorPage code="500" />} />
        <Route path="/pages/error-503" element={<ErrorPage code="503" />} />
        <Route path="/charts/line-charts" element={<LineCharts />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/webzine/eeum" element={<Eeum />} />
        <Route path="/webzine/eeum/text" element={<IeumText />} />
        <Route path="/webzine/eeum/box" element={<IeumBox />} />
        <Route path="/webzine/eeum/image" element={<IeumImage />} />
        <Route path="/webzine/eeum/link" element={<IeumLink />} />
        <Route path="/webzine/eeum/video" element={<IeumVideo />} />
        <Route path="/webzine/eeum/profile" element={<IeumProfile />} />
        <Route path="/webzine/eeum/table" element={<IeumTable />} />
        <Route path="/webzine/arte" element={<Arte />} />
        <Route path="/webzine/arte/image" element={<ArteImage />} />
        <Route path="/webzine/arte/link" element={<ArteLink />} />
        <Route path="/webzine/arte/video" element={<ArteVideo />} />
        <Route path="/webzine/arte/text" element={<ArteText />} />
        <Route path="/webzine/arte/profile" element={<ArteProfile />} />
        <Route path="/webzine/arte/box" element={<ArteBox />} />
        <Route path="/webzine/arte/new" element={<ArteNew />} />
        <Route path="/webzine/arte/table" element={<ArteTable />} />
        <Route path="/webzine/arte/notice" element={<ArteNotice />} />
        <Route path="/ui/alerts-modals" element={<ShowcaseAlertsModals />} />
        <Route path="/ui/buttons-badges" element={<ShowcaseButtonsBadges />} />
        <Route path="/ui/data-display" element={<ShowcaseDataDisplay />} />
        <Route path="/ui/progress-nav" element={<ShowcaseProgressNav />} />
        <Route path="/ui/states-loaders" element={<ShowcaseStatesLoaders />} />
        <Route path="*" element={<Navigate to="/pages/error-404" replace />} />
      </Route>
    </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
