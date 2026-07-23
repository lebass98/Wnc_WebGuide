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
  Bell,
} from 'lucide-react';
import { useI18n } from '../../i18n/config';
import { menuItems, type SubMenuItem } from '../../config/navigation';

const renderBadge = (badge?: string, badgeColor?: string) => {
  if (!badge) return null;
  if (badge === 'NEW') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#D1F9F6] text-[#004D40] dark:bg-cyan-950 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-800/80 shadow-2xs">
        <Bell className="w-3 h-3 text-[#004D40] dark:text-cyan-300 fill-[#004D40]/20" />
        <span>NEW</span>
      </span>
    );
  }
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${badgeColor || 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
      {badge}
    </span>
  );
};

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
      <div className={`flex-1 py-6 space-y-2 custom-scrollbar dark:shadow-none bg-slate-50/30 dark:bg-[#1A222C] ${isOpen ? 'overflow-y-auto px-4' : 'overflow-visible px-2'}`}>
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon];
          if (!item.subItems) {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.key}
                onClick={() => { if (item.path) { navigate(item.path); if (window.innerWidth < 1024) onClose(); } }}
                className={`group flex transition-all cursor-pointer ${
                  isOpen
                    ? `items-center justify-between px-3 py-2.5 rounded-xl ${isActive ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/50'}`
                    : `flex-col items-center justify-center py-2 px-1 rounded-xl w-[64px] mx-auto ${isActive ? 'bg-indigo-50/80 dark:bg-slate-800/60' : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/50'}`
                }`}
              >
                {!isOpen ? (
                  <>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-200 dark:shadow-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-100 dark:group-hover:bg-slate-700 group-hover:text-indigo-600 dark:group-hover:text-white'}`}>
                      {Icon && <Icon className="w-4 h-4 shrink-0" />}
                    </div>
                    <span className={`text-[11px] font-medium mt-1.5 leading-tight text-center truncate max-w-[60px] ${isActive ? 'text-indigo-600 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white'}`}>
                      {t(item.labelKey)}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-5 h-5 shrink-0" />}
                      <span className="font-medium text-sm">{t(item.labelKey)}</span>
                    </div>
                    {isActive && <span className="text-[10px] font-bold bg-indigo-500 text-white px-2 py-0.5 rounded tracking-wide">{t('common.new')}</span>}
                  </>
                )}
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
        className="hidden lg:flex absolute z-40 top-7 -right-3.5 w-7 h-7 rounded-full bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-700/80 items-center justify-center cursor-pointer shadow-md text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200"
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
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
  isLast?: boolean;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ label, subItems, activePath, onClose, badge, badgeColor, isLast }) => {
  const { t } = useI18n();
  const isAnyChildActive = subItems.some((sub) => sub.path === activePath);
  const [isOpen, setIsOpen] = React.useState(isAnyChildActive);
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAnyChildActive) setIsOpen(true);
  }, [activePath, isAnyChildActive]);

  const showSub = isOpen || isHovered;

  return (
    <div
      className="flex flex-col relative group/subitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 2nd Tier Vertical Line: Continuous line for non-last items extending through child items */}
      {!isLast && (
        <div className="absolute left-[-22px] top-0 bottom-[-8px] w-[1px] bg-slate-200 dark:bg-slate-700/80 pointer-events-none" />
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group/sub flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all relative ${
          showSub || isAnyChildActive
            ? 'bg-slate-100/70 dark:bg-slate-800/50 text-slate-900 dark:text-white'
            : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/40 dark:hover:bg-slate-800/30'
        }`}
      >
        {/* 2nd Tier Tree Hook */}
        <div className="absolute left-[-22px] top-0 bottom-0 w-3 pointer-events-none">
          <div className="w-[12px] h-[16px] border-l border-b border-slate-200 dark:border-slate-700/80 rounded-bl-[6px] absolute left-0 top-0" />
        </div>

        <div className="flex items-center gap-2">
          <span>{label}</span>
          {renderBadge(badge, badgeColor)}
        </div>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover/sub:text-slate-600 dark:group-hover/sub:text-white transition-transform duration-300 ${showSub ? 'rotate-180' : ''}`} />
      </div>

      {subItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showSub ? 'max-h-[600px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-6 pr-0 relative py-0.5">
            {subItems.map((item, idx) => {
              const isSubLast = idx === subItems.length - 1;
              const isActive = activePath === item.path;
              return (
                <div
                  key={idx}
                  onClick={() => { if (item.path) { navigate(item.path); if (window.innerWidth < 1024) onClose(); } }}
                  className={`flex items-center justify-between text-sm font-medium px-3 py-2 rounded-lg cursor-pointer transition-all relative ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {/* 3rd Tier Tree Hook & Vertical Line */}
                  <div className="absolute left-[-16px] top-0 bottom-0 w-3 pointer-events-none">
                    <div className="w-[10px] h-[16px] border-l border-b border-slate-200 dark:border-slate-700/80 rounded-bl-[5px] absolute left-0 top-0" />
                    {!isSubLast && (
                      <div className="absolute left-0 top-0 bottom-[-8px] w-[1px] bg-slate-200 dark:border-slate-700/80" />
                    )}
                  </div>

                  <span>{t(item.labelKey)}</span>
                  {renderBadge(item.badge, item.badgeColor)}
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
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAnySubActive(subItems)) setIsOpen(true);
  }, [activePath, subItems]);

  const isActive = isAnySubActive(subItems);
  const showSub = isOpen || isHovered;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        className={`group flex transition-all cursor-pointer relative ${
          isSidebarOpen
            ? `items-center justify-between px-3 py-2.5 rounded-xl ${
                showSub || isActive
                  ? 'bg-slate-100/80 dark:bg-slate-800/60 text-slate-900 dark:text-white'
                  : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
              }`
            : `flex-col items-center justify-center py-2 px-1 rounded-xl w-[64px] mx-auto ${
                isActive
                  ? 'bg-indigo-50/80 dark:bg-slate-800/60'
                  : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
              }`
        }`}
      >
        {!isSidebarOpen ? (
          <>
            <div className="flex items-center justify-center relative w-full">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-200 dark:shadow-none'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-100 dark:group-hover:bg-slate-700 group-hover:text-indigo-600 dark:group-hover:text-white'
              }`}>
                <Icon className="w-4 h-4 shrink-0" />
              </div>
              {subItems.length > 0 && (
                <ChevronRight className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors" />
              )}
            </div>
            <span className={`text-[11px] font-medium mt-1.5 leading-tight text-center truncate max-w-[60px] ${
              isActive
                ? 'text-indigo-600 dark:text-white font-bold'
                : 'text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white'
            }`}>
              {label}
            </span>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 shrink-0" />
              <span className="font-medium text-sm">{label}</span>
            </div>
            <div className="flex items-center gap-2">
              {renderBadge(badge, badgeColor)}
              <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-transform duration-300 ${showSub ? 'rotate-180' : ''}`} />
            </div>
          </>
        )}
      </div>

      {/* Flyout Popup Menu for Collapsed Mini-Sidebar Mode */}
      {!isSidebarOpen && isHovered && subItems.length > 0 && (
        <div className="absolute left-[70px] top-0 z-50 min-w-[210px] bg-white dark:bg-[#1A222C] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 animate-in fade-in slide-in-from-left-2 duration-150">
          {/* Bridge for smooth hover transition */}
          <div className="absolute -left-4 top-0 bottom-0 w-4" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="font-bold text-sm text-slate-900 dark:text-white">{label}</span>
            {renderBadge(badge, badgeColor)}
          </div>

          {/* SubItems List */}
          <div className="flex flex-col gap-1.5 max-h-[360px] overflow-y-auto custom-scrollbar">
            {subItems.map((item, idx) => {
              if (item.subItems) {
                return (
                  <div key={idx} className="flex flex-col gap-1 py-1">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 px-2">
                      <span>{t(item.labelKey)}</span>
                      {renderBadge(item.badge, item.badgeColor)}
                    </div>
                    <div className="flex flex-col gap-1 pl-2">
                      {item.subItems.map((sub, sIdx) => {
                        const isSubActive = activePath === sub.path;
                        return (
                          <div
                            key={sIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (sub.path) {
                                navigate(sub.path);
                                setIsHovered(false);
                                if (window.innerWidth < 1024) onClose();
                              }
                            }}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                              isSubActive
                                ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-white font-bold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            <span>{t(sub.labelKey)}</span>
                            {renderBadge(sub.badge, sub.badgeColor)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isSubActive = activePath === item.path;
              return (
                <div
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.path) {
                      navigate(item.path);
                      setIsHovered(false);
                      if (window.innerWidth < 1024) onClose();
                    }
                  }}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    isSubActive
                      ? 'bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{t(item.labelKey)}</span>
                  {renderBadge(item.badge, item.badgeColor)}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Submenu Dropdown (for Expanded Mode) */}
      {isSidebarOpen && subItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showSub ? 'max-h-[1000px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-11 pr-0 py-1 relative">
            {/* Connecting line from 1st tier icon to 2nd tier items */}
            <div className="absolute left-[22px] top-[-6px] h-3 w-[1px] bg-slate-200 dark:bg-slate-700/80 pointer-events-none" />

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
                  className={`text-sm font-medium px-3 py-2 rounded-lg cursor-pointer transition-all relative ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {/* 2nd Tier Tree Hook */}
                  <div className="absolute left-[-22px] top-0 bottom-0 w-3 pointer-events-none">
                    <div className="w-[12px] h-[16px] border-l border-b border-slate-200 dark:border-slate-700/80 rounded-bl-[6px] absolute left-0 top-0" />
                    {!isLast && (
                      <div className="absolute left-0 top-0 bottom-[-8px] w-[1px] bg-slate-200 dark:bg-slate-700/80" />
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
