import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ChevronDown,
  X,
  SquarePen,
  ListTodo,
  Table,
  Layers,
  Component,
  Grid
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-[280px] bg-white dark:bg-[#1A222C] border-r border-slate-200 dark:border-slate-800 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      {/* Logo Area */}
      <div className="h-[72px] lg:h-[80px] flex items-center justify-between px-6 border-b border-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-indigo-200">
            N
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 absolute" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Template GUIDE</h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">WordNCode</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar dark:shadow-none bg-slate-50/30 dark:bg-[#1A222C]">
        {/* Dashboard Item */}
        <div
          onClick={() => { navigate('/'); onClose(); }}
          className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${currentPath === '/' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`}
        >
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-semibold text-sm">대시보드</span>
          </div>
          {currentPath === '/' && <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-white tracking-wide">신규</span>}
        </div>

        {/* Task Menu */}
        <NavItem
          icon={ListTodo}
          label="작업"
          hasSubmenu
          subItems={['목록', '칸반']}
          onSubItemClick={(sub) => {
            if (sub === '목록') navigate('/tasks/list');
            if (sub === '칸반') navigate('/tasks/kanban');
            onClose();
          }}
          activeSubItem={
            currentPath === '/tasks/list' ? '목록' : 
              currentPath === '/tasks/kanban' ? '칸반' : undefined
          }
          isActive={currentPath.startsWith('/tasks')}
        />

        {/* Forms Submenu */}
        <NavItem
          icon={SquarePen}
          label="폼"
          hasSubmenu
          subItems={['폼 요소', '폼 레이아웃']}
          onSubItemClick={(sub) => {
            if (sub === '폼 요소') navigate('/forms/elements');
            if (sub === '폼 레이아웃') navigate('/forms/layout');
            onClose();
          }}
          activeSubItem={
            currentPath === '/forms/elements' ? '폼 요소' :
              currentPath === '/forms/layout' ? '폼 레이아웃' : undefined
          }
          isActive={currentPath.startsWith('/forms')}
        />

        {/* Tables Submenu */}
        <NavItem
          icon={Table}
          label="테이블"
          hasSubmenu
          subItems={['기본 테이블']}
          onSubItemClick={(sub) => {
            if (sub === '기본 테이블') navigate('/tables/basic');
            onClose();
          }}
          activeSubItem={currentPath === '/tables/basic' ? '기본 테이블' : undefined}
          isActive={currentPath.startsWith('/tables')}
        />

        {/* Pages Submenu */}
        <NavItem
          icon={Layers}
          label="페이지"
          hasSubmenu
          subItems={['자주 묻는 질문', '연동', '히어로 섹션', '가격 정책 섹션', '에러 404', '에러 500', '에러 503']}
          onSubItemClick={(sub) => {
            if (sub === '자주 묻는 질문') navigate('/pages/faq');
            if (sub === '연동') navigate('/pages/integrations');
            if (sub === '히어로 섹션') navigate('/pages/hero-sections');
            if (sub === '가격 정책 섹션') navigate('/pages/pricing-sections');
            if (sub === '에러 404') navigate('/pages/error-404');
            if (sub === '에러 500') navigate('/pages/error-500');
            if (sub === '에러 503') navigate('/pages/error-503');
            onClose();
          }}
          activeSubItem={
            currentPath === '/pages/faq' ? '자주 묻는 질문' :
              currentPath === '/pages/integrations' ? '연동' : 
                currentPath === '/pages/hero-sections' ? '히어로 섹션' : 
                  currentPath === '/pages/pricing-sections' ? '가격 정책 섹션' : 
                    currentPath === '/pages/error-404' ? '에러 404' :
                      currentPath === '/pages/error-500' ? '에러 500' :
                        currentPath === '/pages/error-503' ? '에러 503' : undefined
          }
          isActive={currentPath.startsWith('/pages')}
        />

        {/* Applications Submenu */}
        <NavItem
          icon={Grid}
          label="Applications"
          hasSubmenu
          subItems={['Echarts', '캘린더']}
          onSubItemClick={(sub) => {
            if (sub === 'Echarts') navigate('/charts/line-charts');
            if (sub === '캘린더') navigate('/calendar');
            onClose();
          }}
          activeSubItem={
            currentPath === '/charts/line-charts' ? 'Echarts' :
              currentPath === '/calendar' ? '캘린더' : undefined
          }
          isActive={currentPath === '/charts/line-charts' || currentPath === '/calendar'}
        />

        {/* UI Elements Submenu */}
        <NavItem
          icon={Component}
          label="UI 요소"
          hasSubmenu
          subItems={['알림 & 모달', '버튼 & 배지', '데이터 표시', '진행률 & 네비게이션', '상태 & 로더']}
          onSubItemClick={(sub) => {
            if (sub === '알림 & 모달') navigate('/ui/alerts-modals');
            if (sub === '버튼 & 배지') navigate('/ui/buttons-badges');
            if (sub === '데이터 표시') navigate('/ui/data-display');
            if (sub === '진행률 & 네비게이션') navigate('/ui/progress-nav');
            if (sub === '상태 & 로더') navigate('/ui/states-loaders');
            onClose();
          }}
          activeSubItem={
            currentPath === '/ui/alerts-modals' ? '알림 & 모달' :
              currentPath === '/ui/buttons-badges' ? '버튼 & 배지' :
                currentPath === '/ui/data-display' ? '데이터 표시' :
                  currentPath === '/ui/progress-nav' ? '진행률 & 네비게이션' :
                    currentPath === '/ui/states-loaders' ? '상태 & 로더' : undefined
          }
          isActive={currentPath.startsWith('/ui')}
        />
      </div>

    </aside>
  );
};

// Helper component for navigation items
interface NavItemProps {
  icon: React.ElementType;
  label: string;
  badge?: string;
  badgeColor?: string;
  hasSubmenu?: boolean;
  subItems?: string[];
  onSubItemClick?: (label: string) => void;
  activeSubItem?: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  badge,
  badgeColor = "bg-slate-100 text-slate-600",
  hasSubmenu,
  subItems = [],
  onSubItemClick,
  activeSubItem,
  isActive
}) => {
  const [isOpen, setIsOpen] = React.useState(isActive || false);

  React.useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  return (
    <div>
      <div
        onClick={() => hasSubmenu && setIsOpen(!isOpen)}
        className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-all ${isOpen || isActive ? 'bg-indigo-50/30 dark:bg-slate-800/30' : ''} ${isActive ? 'text-indigo-600 dark:text-white' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-white' : ''}`} />
          <span className={`font-medium text-sm ${isActive ? 'font-bold' : ''}`}>{label}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
          {hasSubmenu && (
            <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          )}
        </div>
      </div>

      {/* Submenu Dropdown */}
      {hasSubmenu && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-11 pr-3 py-1">
            {subItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSubItemClick && onSubItemClick(item)}
                className={`text-sm font-medium py-1.5 cursor-pointer transition-colors ${activeSubItem === item ? 'text-indigo-600 dark:text-white font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

