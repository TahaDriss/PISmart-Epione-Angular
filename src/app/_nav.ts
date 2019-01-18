export const navItems = [
  {
    name: 'Doctor Space',
    url: '/admin/dashboard',
    icon: 'icon-speedometer',
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
