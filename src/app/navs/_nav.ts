export const navItems = [
  {
    name: 'Doctor Space',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
  },


  {
    name: 'Paths',
    url: '/admin/paths',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List',
        url: '/admin/paths',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add path',
        url: '/admin/paths/add',
        icon: 'icon-puzzle'
      }
    ]
  },

  {
    name: 'Reports',
    url: '/admin/reports',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List',
        url: '/admin/reports',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add report',
        url: '/admin/reports/add',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'My space'
  },
  {
    name: 'Appointments',
    url: '/admin/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'View all (with extract possibility)',
        url: '/admin/doctors/app',
        icon: 'icon-cursor'
      },
      {
        name: 'Delete an appointment',
        url: '/admin/doctors/appDel',
        icon: 'icon-fire'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/admin/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/admin/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/admin/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/admin/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/admin/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/admin/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/admin/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/admin/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/admin/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/admin/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/admin/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Doctolib',
    url: '/admin/doctolib',
    icon: 'icon-star'
  },
  {
    name: 'Epione Health Care',
    url: '/admin/chatbot',
    icon: 'icon-star'
  },
  {
    name: 'Pages',
    url: '/admin/pages',
    icon: 'icon-star',
  },
  {
    name: 'Consultations',
    url: '/admin/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'View all',
        url: '/admin/doctors/consultationsList',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add consultation',
        url: '/admin/doctors/consultationsAdd',
        icon: 'icon-puzzle'
      },
      {
        name: 'Best consultations',
        url: '/admin/doctors/bestCons',
        icon: 'icon-puzzle'
      }

    ]
  },
  {
    name: 'My calendar',
    url: '/admin/doctors/calendar',
    icon: 'icon-hourglass'
  },
  {
    name: 'Doctors and colleagues',
    url: '/admin/doctors/doctorList',
    icon: 'icon-people'
  }
];
