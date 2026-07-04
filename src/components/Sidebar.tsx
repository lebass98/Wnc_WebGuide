import React from 'react';
import {
  LayoutDashboard,
  Calendar,
  ChevronDown,
  X,
  SquarePen,
  ListTodo,
  Table,
  Layers,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onPageChange, currentPage }) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-30 w-[280px] bg-white dark:bg-[#1A222C] border-r border-slate-200 dark:border-slate-800 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
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
            <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Nexus</h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">관리자 패널</p>
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
          onClick={() => { onPageChange('dashboard'); onClose(); }}
          className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${currentPage === 'dashboard' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`}
        >
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-semibold text-sm">대시보드</span>
          </div>
          {currentPage === 'dashboard' && <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-white tracking-wide">신규</span>}
        </div>

        {/* Inactive Items Hidden
        <NavItem icon={BarChart2} label="Analytics" hasSubmenu subItems={['Overview', 'Real-time', 'Demographics']} />
        <NavItem icon={Users} label="Users" badge="2.4k" hasSubmenu subItems={['All Users', 'Active', 'Banned']} />
        <NavItem icon={ShoppingCart} label="E-commerce" hasSubmenu subItems={['Products', 'Orders', 'Customers', 'Coupons']} />
        */}
        
        {/* Task Menu */}
        <NavItem
          icon={ListTodo}
          label="작업"
          hasSubmenu
          subItems={['목록', '칸반']}
          onSubItemClick={(sub) => {
            if (sub === '목록') onPageChange('task-list');
            if (sub === '칸반') onPageChange('task-kanban');
            onClose();
          }}
          activeSubItem={
            currentPage === 'task-list' ? '목록' : 
              currentPage === 'task-kanban' ? '칸반' : undefined
          }
          isActive={currentPage === 'task-list' || currentPage === 'task-kanban'}
        />

        {/* Forms Submenu */}
        <NavItem
          icon={SquarePen}
          label="폼"
          hasSubmenu
          subItems={['폼 요소', '폼 레이아웃']}
          onSubItemClick={(sub) => {
            if (sub === '폼 요소') onPageChange('form-elements');
            if (sub === '폼 레이아웃') onPageChange('form-layout');
            onClose();
          }}
          activeSubItem={
            currentPage === 'form-elements' ? '폼 요소' :
              currentPage === 'form-layout' ? '폼 레이아웃' : undefined
          }
          isActive={currentPage === 'form-elements' || currentPage === 'form-layout'}
        />

        {/* Tables Submenu */}
        <NavItem
          icon={Table}
          label="테이블"
          hasSubmenu
          subItems={['기본 테이블']}
          onSubItemClick={(sub) => {
            if (sub === '기본 테이블') onPageChange('basic-tables');
            onClose();
          }}
          activeSubItem={currentPage === 'basic-tables' ? '기본 테이블' : undefined}
          isActive={currentPage === 'basic-tables'}
        />

        {/* Pages Submenu */}
        <NavItem
          icon={Layers}
          label="페이지"
          hasSubmenu
          subItems={['자주 묻는 질문', '연동', '히어로 섹션', '가격 정책 섹션']}
          onSubItemClick={(sub) => {
            if (sub === '자주 묻는 질문') onPageChange('faq');
            if (sub === '연동') onPageChange('integrations');
            if (sub === '히어로 섹션') onPageChange('hero-sections');
            if (sub === '가격 정책 섹션') onPageChange('pricing-sections');
            onClose();
          }}
          activeSubItem={
            currentPage === 'faq' ? '자주 묻는 질문' :
              currentPage === 'integrations' ? '연동' : 
                currentPage === 'hero-sections' ? '히어로 섹션' : 
                  currentPage === 'pricing-sections' ? '가격 정책 섹션' : undefined
          }
          isActive={currentPage === 'faq' || currentPage === 'integrations' || currentPage === 'hero-sections' || currentPage === 'pricing-sections'}
        />

        {/* ECharts Submenu */}
        <NavItem
          icon={BarChart3}
          label="ECharts"
          hasSubmenu
          subItems={['선형 차트']}
          onSubItemClick={(sub) => {
            if (sub === '선형 차트') onPageChange('line-charts');
            onClose();
          }}
          activeSubItem={currentPage === 'line-charts' ? '선형 차트' : undefined}
          isActive={currentPage === 'line-charts'}
        />

        {/* Inactive Items Hidden
        <NavItem icon={Box} label="Inventory" badge="847" />
        <NavItem icon={Activity} label="Transactions" />
        <NavItem icon={MessageSquare} label="Messages" badge="12" badgeColor="bg-red-500 text-white" />
        */}
        <div
          onClick={() => { onPageChange('calendar'); onClose(); }}
          className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${currentPage === 'calendar' ? 'bg-indigo-50/30 dark:bg-slate-800/30 text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`}
        >
          <div className="flex items-center gap-3">
            <Calendar className={`w-5 h-5 ${currentPage === 'calendar' ? 'text-indigo-600 dark:text-white' : ''}`} />
            <span className={`text-sm ${currentPage === 'calendar' ? 'font-bold' : 'font-medium'}`}>캘린더</span>
          </div>
        </div>
        {/* Inactive Items Hidden
        <NavItem icon={FileText} label="Reports" />
        <NavItem icon={Settings} label="Settings" />
        */}
      </div>

      {/* User Profile Footer */}

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
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
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

