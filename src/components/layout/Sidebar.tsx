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
  Grid,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useI18n } from '../../i18n/config';
import { menuItems, type SubMenuItem } from '../../config/navigation';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  ListTodo,
  SquarePen,
  Table,
  Layers,
  Component,
  Grid,
  BookOpen,
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

  return (
    <aside
      role="navigation"
      aria-label="사이드바 메뉴"
      className={`fixed inset-y-0 left-0 z-30 bg-white dark:bg-[#1A222C] border-r border-slate-200 dark:border-slate-800 flex flex-col transform transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'translate-x-0 w-[280px]' 
          : '-translate-x-full lg:translate-x-0 w-[280px] lg:w-[80px]'
      }`}
    >
      {/* Logo Area */}
      <div className={`h-[72px] lg:h-[80px] flex items-center ${isOpen ? 'justify-between px-6' : 'justify-center px-2'} border-b border-transparent`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-indigo-200 shrink-0">
            N
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 absolute" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          {isOpen && (
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{t('sidebar.brand')}</h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t('sidebar.subtitle')}</p>
            </div>
          )}
        </div>
        {isOpen && (
          <button
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="lg:hidden p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className={`flex-1 overflow-y-auto py-6 ${isOpen ? 'px-4' : 'px-2'} space-y-2 custom-scrollbar dark:shadow-none bg-slate-50/30 dark:bg-[#1A222C]`}>
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon];
          if (!item.subItems) {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.key}
                onClick={() => { if (item.path) { navigate(item.path); if (window.innerWidth < 1024) onClose(); } }}
                className={`group flex items-center transition-all cursor-pointer ${
                  isOpen
                    ? `justify-between px-3 py-2.5 rounded-xl ${isActive ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`
                    : `justify-center w-12 h-12 rounded-xl mx-auto ${isActive ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`
                }`}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-5 h-5 shrink-0" />}
                  {isOpen && <span className="font-semibold text-sm">{t(item.labelKey)}</span>}
                </div>
                {isOpen && isActive && <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-white tracking-wide">{t('common.new')}</span>}
              </div>
            );
          }

          return (
            <NavItem
              key={item.key}
              Icon={Icon}
              label={t(item.labelKey)}
              badge={item.badge}
              badgeColor={item.badgeColor}
              subItems={item.subItems}
              activePath={location.pathname}
              onClose={onClose}
              isSidebarOpen={isOpen}
            />
          );
        })}
      </div>

      {/* Toggle button for desktop */}
      <button
        onClick={onToggle}
        aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
        className={`hidden lg:flex absolute z-40 rounded-full bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 items-center justify-center cursor-pointer shadow-md text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 ${
          isOpen 
            ? 'w-7 h-7 top-[26px] -right-3.5' 
            : 'w-5 h-5 top-[30px] -right-5'
        }`}
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
      </button>
    </aside>
  );
};

// Helper component for nested 3rd-level menu items
interface SubNavItemProps {
  label: string;
  subItems: SubMenuItem[];
  activePath: string;
  onClose: () => void;
  badge?: string;
  badgeColor?: string;
  isLast: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ label, subItems, activePath, onClose, badge, badgeColor, isLast }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = React.useState(subItems.some((sub) => sub.path === activePath));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (subItems.some((sub) => sub.path === activePath)) setIsOpen(true);
  }, [activePath, subItems]);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group/sub flex items-center justify-between py-1.5 cursor-pointer text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all relative pl-6`}
      >
        {/* 2nd Tier Tree Line */}
        <div className="absolute left-[-22px] top-0 bottom-0 w-3">
          <div className="w-[12px] h-[16px] border-l border-b border-slate-200 dark:border-slate-800 rounded-bl-[6px] absolute left-0 top-0" />
          {!isLast && (
            <div className="absolute left-0 top-[16px] bottom-[-8px] w-[1px] bg-slate-200 dark:bg-slate-800" />
          )}
        </div>

        <div className="flex items-center gap-2">
          <span>{label}</span>
          {badge && (
            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${badgeColor || 'bg-slate-100 text-slate-600'} scale-90`}>
              {badge}
            </span>
          )}
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover/sub:text-indigo-500 dark:group-hover/sub:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {subItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-6 relative">
            {subItems.map((item, idx) => {
              const isSubLast = idx === subItems.length - 1;
              const isActive = activePath === item.path;
              return (
                <div
                  key={idx}
                  onClick={() => { if (item.path) { navigate(item.path); if (window.innerWidth < 1024) onClose(); } }}
                  className={`flex items-center justify-between text-sm font-medium py-1.5 cursor-pointer transition-colors relative pl-6 ${isActive ? 'text-indigo-600 dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'}`}
                >
                  {/* 3rd Tier Tree Line */}
                  <div className="absolute left-[-16px] top-0 bottom-0 w-3">
                    <div className="w-[10px] h-[16px] border-l border-b border-slate-200 dark:border-slate-800 rounded-bl-[5px] absolute left-0 top-0" />
                    {!isSubLast && (
                      <div className="absolute left-0 top-[16px] bottom-[-8px] w-[1px] bg-slate-200 dark:bg-slate-800" />
                    )}
                  </div>

                  <span>{t(item.labelKey)}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${item.badgeColor || 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'} scale-90`}>
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for navigation items
interface NavItemProps {
  Icon: React.ElementType;
  label: string;
  badge?: string;
  badgeColor?: string;
  subItems: SubMenuItem[];
  activePath: string;
  onClose: () => void;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ Icon, label, badge, badgeColor = "bg-slate-100 text-slate-600", subItems, activePath, onClose, isSidebarOpen }) => {
  const { t } = useI18n();
  // Support both 2-tier and 3-tier deep check for active path
  const isAnySubActive = (items: SubMenuItem[]): boolean => {
    return items.some((sub) => {
      if (sub.path === activePath) return true;
      if (sub.subItems && isAnySubActive(sub.subItems)) return true;
      return false;
    });
  };

  const [isOpen, setIsOpen] = React.useState(isAnySubActive(subItems));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAnySubActive(subItems)) setIsOpen(true);
  }, [activePath, subItems]);

  const isActive = isAnySubActive(subItems);

  return (
    <div>
      <div
        onClick={() => {
          if (isSidebarOpen) {
            setIsOpen(!isOpen);
          } else {
            if (subItems[0] && subItems[0].path) {
              navigate(subItems[0].path);
              if (window.innerWidth < 1024) onClose();
            }
          }
        }}
        className={`group flex items-center transition-all cursor-pointer ${
          isSidebarOpen
            ? `justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 ${isOpen ? 'bg-indigo-50/30 dark:bg-slate-800/30' : ''} ${isActive ? 'text-indigo-600 dark:text-white font-bold' : 'text-slate-500 dark:text-slate-400'}`
            : `justify-center w-12 h-12 rounded-xl mx-auto hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 ${isActive ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400'}`
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 shrink-0" />
          {isSidebarOpen && <span className="font-medium text-sm">{label}</span>}
        </div>
        {isSidebarOpen && (
          <div className="flex items-center gap-2">
            {badge && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
                {badge}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        )}
      </div>

      {/* Submenu Dropdown */}
      {isSidebarOpen && subItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-11 pr-3 py-1">
            {subItems.map((item, idx) => {
              const isLast = idx === subItems.length - 1;
              if (item.subItems) {
                return (
                  <SubNavItem
                    key={idx}
                    label={t(item.labelKey)}
                    subItems={item.subItems}
                    activePath={activePath}
                    onClose={onClose}
                    badge={item.badge}
                    badgeColor={item.badgeColor}
                    isLast={isLast}
                  />
                );
              }
              const isActive = activePath === item.path;
              return (
                <div
                  key={idx}
                  onClick={() => { if (item.path) { navigate(item.path); if (window.innerWidth < 1024) onClose(); } }}
                  className={`text-sm font-medium py-1.5 cursor-pointer transition-colors relative pl-6 ${isActive ? 'text-indigo-600 dark:text-white font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'}`}
                >
                  {/* 2nd Tier Tree Line */}
                  <div className="absolute left-[-22px] top-0 bottom-0 w-3">
                    <div className="w-[12px] h-[16px] border-l border-b border-slate-200 dark:border-slate-800 rounded-bl-[6px] absolute left-0 top-0" />
                    {!isLast && (
                      <div className="absolute left-0 top-[16px] bottom-[-8px] w-[1px] bg-slate-200 dark:bg-slate-800" />
                    )}
                  </div>
                  {t(item.labelKey)}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
