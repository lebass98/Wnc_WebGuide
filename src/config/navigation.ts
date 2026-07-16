export interface SubMenuItem {
  key: string;
  labelKey: string;
  path: string;
}

export interface MenuItem {
  key: string;
  icon: string;
  labelKey: string;
  path?: string;
  badge?: string;
  badgeColor?: string;
  subItems?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    icon: 'LayoutDashboard',
    labelKey: 'sidebar.dashboard',
    path: '/',
  },
  {
    key: 'tasks',
    icon: 'ListTodo',
    labelKey: 'sidebar.tasks',
    subItems: [
      { key: 'list', labelKey: 'sidebar.taskList', path: '/tasks/list' },
      { key: 'kanban', labelKey: 'sidebar.taskKanban', path: '/tasks/kanban' },
    ],
  },
  {
    key: 'forms',
    icon: 'SquarePen',
    labelKey: 'sidebar.forms',
    subItems: [
      { key: 'elements', labelKey: 'sidebar.formElements', path: '/forms/elements' },
      { key: 'layout', labelKey: 'sidebar.formLayout', path: '/forms/layout' },
    ],
  },
  {
    key: 'tables',
    icon: 'Table',
    labelKey: 'sidebar.tables',
    subItems: [
      { key: 'basic', labelKey: 'sidebar.basicTable', path: '/tables/basic' },
    ],
  },
  {
    key: 'pages',
    icon: 'Layers',
    labelKey: 'sidebar.pages',
    subItems: [
      { key: 'faq', labelKey: 'sidebar.faq', path: '/pages/faq' },
      { key: 'integrations', labelKey: 'sidebar.integrations', path: '/pages/integrations' },
      { key: 'hero', labelKey: 'sidebar.heroSections', path: '/pages/hero-sections' },
      { key: 'pricing', labelKey: 'sidebar.pricingSections', path: '/pages/pricing-sections' },
      { key: 'error-404', labelKey: 'sidebar.error404', path: '/pages/error-404' },
      { key: 'error-500', labelKey: 'sidebar.error500', path: '/pages/error-500' },
      { key: 'error-503', labelKey: 'sidebar.error503', path: '/pages/error-503' },
    ],
  },
  {
    key: 'applications',
    icon: 'Grid',
    labelKey: 'sidebar.applications',
    subItems: [
      { key: 'echarts', labelKey: 'sidebar.echarts', path: '/charts/line-charts' },
      { key: 'calendar', labelKey: 'sidebar.calendar', path: '/calendar' },
    ],
  },
  {
    key: 'ui',
    icon: 'Component',
    labelKey: 'sidebar.ui',
    subItems: [
      { key: 'alerts', labelKey: 'sidebar.alertsModals', path: '/ui/alerts-modals' },
      { key: 'buttons', labelKey: 'sidebar.buttonsBadges', path: '/ui/buttons-badges' },
      { key: 'data-display', labelKey: 'sidebar.dataDisplay', path: '/ui/data-display' },
      { key: 'progress', labelKey: 'sidebar.progressNav', path: '/ui/progress-nav' },
      { key: 'states', labelKey: 'sidebar.statesLoaders', path: '/ui/states-loaders' },
    ],
  },
  {
    key: 'components',
    icon: 'Component',
    labelKey: 'sidebar.components',
    subItems: [
      { key: 'input', labelKey: 'sidebar.input', path: '/components/input' },
    ],
  },
];
