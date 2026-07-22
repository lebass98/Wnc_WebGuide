export interface SubMenuItem {
  key: string;
  labelKey: string;
  path?: string;
  subItems?: SubMenuItem[];
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
      { key: 'input', labelKey: 'sidebar.input', path: '/components/input' },
    ],
  },
  {
    key: 'webzine',
    icon: 'BookOpen',
    labelKey: 'sidebar.webzine',
    subItems: [
      {
        key: 'eeum',
        labelKey: 'sidebar.eeum',
        subItems: [
          { key: 'text', labelKey: 'sidebar.eeumText', path: '/webzine/eeum/text' },
          { key: 'box', labelKey: 'sidebar.eeumBox', path: '/webzine/eeum/box' },
          { key: 'image', labelKey: 'sidebar.eeumImage', path: '/webzine/eeum/image' },
          { key: 'link', labelKey: 'sidebar.eeumLink', path: '/webzine/eeum/link' },
          { key: 'video', labelKey: 'sidebar.eeumVideo', path: '/webzine/eeum/video' },
          { key: 'profile', labelKey: 'sidebar.eeumProfile', path: '/webzine/eeum/profile' },
          { key: 'table', labelKey: 'sidebar.eeumTable', path: '/webzine/eeum/table' },
        ],
      },
      {
        key: 'arte',
        labelKey: 'sidebar.arte',
        subItems: [
          { key: 'image', labelKey: 'sidebar.arteImage', path: '/webzine/arte/image' },
          { key: 'link', labelKey: 'sidebar.arteLink', path: '/webzine/arte/link' },
          { key: 'video', labelKey: 'sidebar.arteVideo', path: '/webzine/arte/video' },
          { key: 'text', labelKey: 'sidebar.arteText', path: '/webzine/arte/text' },
          { key: 'profile', labelKey: 'sidebar.arteProfile', path: '/webzine/arte/profile' },
          { key: 'box', labelKey: 'sidebar.arteBox', path: '/webzine/arte/box' },
          { key: 'new', labelKey: 'sidebar.arteNew', path: '/webzine/arte/new' },
          { key: 'table', labelKey: 'sidebar.arteTable', path: '/webzine/arte/table' },
          { key: 'notice', labelKey: 'sidebar.arteNotice', path: '/webzine/arte/notice' },
        ],
      },
    ],
  },
];
