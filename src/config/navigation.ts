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
    badge: '2',
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300',
    subItems: [
      { key: 'list', labelKey: 'sidebar.taskList', path: '/tasks/list', badge: '1', badgeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' },
      { key: 'kanban', labelKey: 'sidebar.taskKanban', path: '/tasks/kanban', badge: '1', badgeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' },
    ],
  },
  {
    key: 'forms',
    icon: 'SquarePen',
    labelKey: 'sidebar.forms',
    badge: '13',
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
    subItems: [
      { key: 'elements', labelKey: 'sidebar.formElements', path: '/forms/elements', badge: '9', badgeColor: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' },
      { key: 'layout', labelKey: 'sidebar.formLayout', path: '/forms/layout', badge: '4', badgeColor: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' },
    ],
  },
  {
    key: 'tables',
    icon: 'Table',
    labelKey: 'sidebar.tables',
    badge: '5',
    badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300',
    subItems: [
      { key: 'basic', labelKey: 'sidebar.basicTable', path: '/tables/basic', badge: '5', badgeColor: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400' },
    ],
  },
  {
    key: 'pages',
    icon: 'Layers',
    labelKey: 'sidebar.pages',
    badge: '17',
    badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
    subItems: [
      { key: 'faq', labelKey: 'sidebar.faq', path: '/pages/faq', badge: '3', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'integrations', labelKey: 'sidebar.integrations', path: '/pages/integrations', badge: '1', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'hero', labelKey: 'sidebar.heroSections', path: '/pages/hero-sections', badge: '6', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'pricing', labelKey: 'sidebar.pricingSections', path: '/pages/pricing-sections', badge: '4', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'error-404', labelKey: 'sidebar.error404', path: '/pages/error-404', badge: '1', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'error-500', labelKey: 'sidebar.error500', path: '/pages/error-500', badge: '1', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
      { key: 'error-503', labelKey: 'sidebar.error503', path: '/pages/error-503', badge: '1', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
    ],
  },
  {
    key: 'applications',
    icon: 'Grid',
    labelKey: 'sidebar.applications',
    badge: '12',
    badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300',
    subItems: [
      { key: 'echarts', labelKey: 'sidebar.echarts', path: '/charts/line-charts', badge: '11', badgeColor: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400' },
      { key: 'calendar', labelKey: 'sidebar.calendar', path: '/calendar', badge: '1', badgeColor: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400' },
    ],
  },
  {
    key: 'ui',
    icon: 'Component',
    labelKey: 'sidebar.ui',
    badge: '24',
    badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300',
    subItems: [
      { key: 'alerts', labelKey: 'sidebar.alertsModals', path: '/ui/alerts-modals', badge: '3', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'buttons', labelKey: 'sidebar.buttonsBadges', path: '/ui/buttons-badges', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'boxes', labelKey: 'sidebar.boxes', path: '/ui/boxes', badge: '2', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'boards', labelKey: 'sidebar.boards', path: '/ui/boards', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'data-display', labelKey: 'sidebar.dataDisplay', path: '/ui/data-display', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'progress', labelKey: 'sidebar.progressNav', path: '/ui/progress-nav', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'states', labelKey: 'sidebar.statesLoaders', path: '/ui/states-loaders', badge: '2', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
      { key: 'input', labelKey: 'sidebar.input', path: '/components/input', badge: '1', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
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
          { key: 'new', labelKey: 'sidebar.arteNew', path: '/webzine/arte/new', badge: '12', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'table', labelKey: 'sidebar.arteTable', path: '/webzine/arte/table', badge: '4', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
          { key: 'notice', labelKey: 'sidebar.arteNotice', path: '/webzine/arte/notice', badge: '6', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
        ],
      },
    ],
  },
];
