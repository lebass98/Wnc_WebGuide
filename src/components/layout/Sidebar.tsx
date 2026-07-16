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
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

  return (
    <aside
      role="navigation"
      aria-label="사이드바 메뉴"
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
            <h1 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{t('sidebar.brand')}</h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t('sidebar.subtitle')}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="메뉴 닫기"
          className="lg:hidden p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar dark:shadow-none bg-slate-50/30 dark:bg-[#1A222C]">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon];
          if (!item.subItems) {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.key}
                onClick={() => { if (item.path) { navigate(item.path); onClose(); } }}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${isActive ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200 dark:shadow-none' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'}`}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-semibold text-sm">{t(item.labelKey)}</span>
                </div>
                {isActive && <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-white tracking-wide">{t('common.new')}</span>}
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
            />
          );
        })}
      </div>
    </aside>
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
}

const NavItem: React.FC<NavItemProps> = ({ Icon, label, badge, badgeColor = "bg-slate-100 text-slate-600", subItems, activePath, onClose }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = React.useState(subItems.some((sub) => sub.path === activePath));
  const navigate = useNavigate();

  React.useEffect(() => {
    if (subItems.some((sub) => sub.path === activePath)) setIsOpen(true);
  }, [activePath, subItems]);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-all ${isOpen ? 'bg-indigo-50/30 dark:bg-slate-800/30' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5`} />
          <span className="font-medium text-sm">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Submenu Dropdown */}
      {subItems.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 pl-11 pr-3 py-1">
            {subItems.map((item, idx) => {
              const isActive = activePath === item.path;
              return (
                <div
                  key={idx}
                  onClick={() => { navigate(item.path); onClose(); }}
                  className={`text-sm font-medium py-1.5 cursor-pointer transition-colors ${isActive ? 'text-indigo-600 dark:text-white font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'}`}
                >
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
