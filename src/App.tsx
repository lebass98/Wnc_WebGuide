import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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

// Lazy loaded UI components
const ShowcaseAlertsModals = lazy(() => import('./components/ui/ShowcaseAlertsModals'));
const ShowcaseButtonsBadges = lazy(() => import('./components/ui/ShowcaseButtonsBadges'));
const ShowcaseDataDisplay = lazy(() => import('./components/ui/ShowcaseDataDisplay'));
const ShowcaseProgressNav = lazy(() => import('./components/ui/ShowcaseProgressNav'));
const ShowcaseStatesLoaders = lazy(() => import('./components/ui/ShowcaseStatesLoaders'));

import DashboardSkeleton from './components/common/DashboardSkeleton';

const App: React.FC = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  };

  const handleLogout = () => {
    // 임시로 로그아웃 시에도 메인에 머물도록 설정
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<DashboardSkeleton />}>
        <Routes>
      {/* 1. 풀 스크린 에러 페이지 라우트 그룹 */}
      <Route path="/pages/error-404" element={<ErrorPage code="404" />} />
      <Route path="/pages/error-500" element={<ErrorPage code="500" />} />
      <Route path="/pages/error-503" element={<ErrorPage code="503" />} />

      {/* 2. 로그인 관련 풀 스크린 라우트 */}
      <Route 
        path="/signin" 
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <LoginPage 
              onLoginSuccess={handleLoginSuccess} 
              onSignUpClick={() => navigate('/signup')} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )
        } 
      />
      <Route 
        path="/signup" 
        element={
          isAuthenticated ? (
            <Navigate to="/" replace />
          ) : (
            <SignUpPage 
              onSignUpSuccess={handleLoginSuccess} 
              onSignInClick={() => navigate('/signin')} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          )
        } 
      />

      {/* 3. 대시보드 레이아웃 영역 (비인증 상태라면 signin으로 강제 리다이렉션) */}
      <Route 
        path="/*" 
        element={
          !isAuthenticated ? (
            <Navigate to="/signin" replace />
          ) : (
            <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-300">
              <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
              />

              {/* Overlay for mobile when sidebar is open */}
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden"
                  onClick={closeSidebar}
                />
              )}

              <div className="flex-1 lg:pl-[280px] flex flex-col min-h-screen overflow-hidden transition-all duration-300">
                <Header
                  onMenuClick={toggleSidebar}
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  onLogout={handleLogout}
                />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pt-[100px] lg:pt-[112px] custom-scrollbar">
                  <div className="w-full">
                    <Routes>
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
                      <Route path="/charts/line-charts" element={<LineCharts />} />
                      <Route path="/calendar" element={<Calendar />} />
                      <Route path="/ui/alerts-modals" element={<ShowcaseAlertsModals />} />
                      <Route path="/ui/buttons-badges" element={<ShowcaseButtonsBadges />} />
                      <Route path="/ui/data-display" element={<ShowcaseDataDisplay />} />
                      <Route path="/ui/progress-nav" element={<ShowcaseProgressNav />} />
                      <Route path="/ui/states-loaders" element={<ShowcaseStatesLoaders />} />
                      <Route path="*" element={<Navigate to="/pages/error-404" replace />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </div>
          )
        }
      />
    </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
