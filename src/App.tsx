import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import RecentOrders from './components/RecentOrders';
import FormElements from './components/FormElements';
import FormLayout from './components/FormLayout';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MonthlyTargetCard from './components/MonthlyTargetCard';
import MonthlySalesChart from './components/MonthlySalesChart';
import StatisticsChart from './components/StatisticsChart';
import CustomersDemographic from './components/CustomersDemographic';
import TaskList from './components/TaskList';
import TaskKanban from './components/TaskKanban';
import BasicTables from './components/BasicTables';
import FAQ from './components/FAQ';
import Integrations from './components/Integrations';
import Calendar from './components/Calendar';
import LineCharts from './components/LineCharts';
import HeroSections from './components/HeroSections';
import PricingSections from './components/PricingSections';
import { Users, Package } from 'lucide-react';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              title="고객"
              value="3,782"
              icon={<Users className="w-5 h-5 text-[#3C50E0]" />}
              trend={11.01}
              className="h-full"
            />
            <StatCard
              title="주문"
              value="5,359"
              icon={<Package className="w-5 h-5 text-[#3C50E0]" />}
              trend={-9.05}
              className="h-full"
            />
          </div>
          {/* Monthly Sales Chart takes remaining space */}
          <div className="flex-1 min-h-[350px]">
            <MonthlySalesChart />
          </div>
        </div>
        <div className="xl:col-span-1 h-full min-h-[514px]">
          <MonthlyTargetCard />
        </div>
      </div>

      {/* Middle Section: Statistics Chart */}
      <div className="w-full">
        <StatisticsChart />
      </div>

      {/* Bottom Section: Demographic and Orders */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
        <div className="xl:col-span-1">
          <CustomersDemographic />
        </div>
        <div className="xl:col-span-2 overflow-x-auto">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
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
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/signin');
  };

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route 
          path="/signin" 
          element={
            <LoginPage 
              onLoginSuccess={handleLoginSuccess} 
              onSignUpClick={() => navigate('/signup')} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />
        <Route 
          path="/signup" 
          element={
            <SignUpPage 
              onSignUpSuccess={handleLoginSuccess} 
              onSignInClick={() => navigate('/signin')} 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          } 
        />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    );
  }

  return (
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

      <div className="flex-1 lg flex flex-col min-h-screen overflow-hidden transition-all duration-300">
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
              <Route path="/" element={<DashboardHome />} />
              <Route path="/tasks/list" element={<TaskList />} />
              <Route path="/tasks/kanban" element={<TaskKanban />} />
              <Route path="/forms/elements" element={<FormElements />} />
              <Route path="/forms/layout" element={<FormLayout />} />
              <Route path="/tables/basic" element={<BasicTables />} />
              <Route path="/pages/faq" element={<FAQ />} />
              <Route path="/pages/integrations" element={<Integrations />} />
              <Route path="/pages/hero-sections" element={<HeroSections />} />
              <Route path="/pages/pricing-sections" element={<PricingSections />} />
              <Route path="/charts/line-charts" element={<LineCharts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/signin" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
