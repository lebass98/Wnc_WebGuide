export interface SubMenuItem {
  key: string;
  labelKey: string;
  path?: string;
  subItems?: SubMenuItem[];
  badge?: string;
  badgeColor?: string;
  isNew?: boolean;
}

export interface MenuItem {
  key: string;
  icon: string;
  labelKey: string;
  path?: string;
  badge?: string;
  badgeColor?: string;
  subItems?: SubMenuItem[];
  isNew?: boolean;
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
      { key: 'input', labelKey: 'sidebar.input', path: '/components/input' },
    ],
  },
  {
    key: 'webzine',
    icon: 'BookOpen',
    labelKey: 'sidebar.webzine',
    badge: 'NEW',
    isNew: true,
    subItems: [
      {
        key: 'eeum',
        labelKey: 'sidebar.eeum',
        badge: '72',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300',
        subItems: [
          { key: 'text', labelKey: 'sidebar.eeumText', path: '/webzine/eeum/text', badge: '18', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'box', labelKey: 'sidebar.eeumBox', path: '/webzine/eeum/box', badge: '17', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'image', labelKey: 'sidebar.eeumImage', path: '/webzine/eeum/image', badge: '11', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'link', labelKey: 'sidebar.eeumLink', path: '/webzine/eeum/link', badge: '3', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'video', labelKey: 'sidebar.eeumVideo', path: '/webzine/eeum/video', badge: '3', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'profile', labelKey: 'sidebar.eeumProfile', path: '/webzine/eeum/profile', badge: '14', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
          { key: 'table', labelKey: 'sidebar.eeumTable', path: '/webzine/eeum/table', badge: '6', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
        ],
      },
      {
        key: 'arte',
        labelKey: 'sidebar.arte',
        badge: '91',
        badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300',
        subItems: [
          { key: 'image', labelKey: 'sidebar.arteImage', path: '/webzine/arte/image', badge: '16', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'link', labelKey: 'sidebar.arteLink', path: '/webzine/arte/link', badge: '10', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'video', labelKey: 'sidebar.arteVideo', path: '/webzine/arte/video', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'text', labelKey: 'sidebar.arteText', path: '/webzine/arte/text', badge: '16', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'profile', labelKey: 'sidebar.arteProfile', path: '/webzine/arte/profile', badge: '9', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'box', labelKey: 'sidebar.arteBox', path: '/webzine/arte/box', badge: '14', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'new', labelKey: 'sidebar.arteNew', path: '/webzine/arte/new', badge: 'NEW', isNew: true, badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'table', labelKey: 'sidebar.arteTable', path: '/webzine/arte/table', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'notice', labelKey: 'sidebar.arteNotice', path: '/webzine/arte/notice', badge: '6', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
        ],
      },
    ],
  },
];
