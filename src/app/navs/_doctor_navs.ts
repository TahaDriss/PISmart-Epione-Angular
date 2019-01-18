export const doctorMenu = [
    {
        name: 'Dashboard',
        url: '/doctor/dashboard',
        icon: 'icon-speedometer'
    },
    {
        name: 'Consultations',
        url: '/doctor/base',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'View all',
                url: '/doctor/consultationsList',
                icon: 'icon-puzzle'
            },
            {
                name: 'Add consultation',
                url: '/doctor/consultationsAdd',
                icon: 'icon-puzzle'
            },
            {
                name: 'Best consultations',
                url: '/doctor/bestCons',
                icon: 'icon-puzzle'
            }
        ]
    },
    {
        name: 'My calendar',
        url: '/doctor/calendar',
        icon: 'icon-hourglass'
    },
    {
        name: 'Doctors and colleagues',
        url: '/doctor/doctorList',
        icon: 'icon-people'
    },
    {
        name: 'Paths',
        url: '/doctor/paths',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'List',
                url: '/doctor/paths',
                icon: 'icon-puzzle'
            },
            {
                name: 'Add path',
                url: '/doctor/paths/add',
                icon: 'icon-puzzle'
            }
        ]
    },

    {
        name: 'Reports',
        url: '/doctor/reports',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'List',
                url: '/doctor/reports',
                icon: 'icon-puzzle'
            },
            {
                name: 'Add report',
                url: '/doctor/reports/add',
                icon: 'icon-puzzle'
            }
        ]
    },
    {
        name: 'Appointments',
        url: '/doctor/buttons',
        icon: 'icon-cursor',
        children: [
            {
                name: 'View all (with extract possibility)',
                url: '/doctor/app',
                icon: 'icon-cursor'
            },
            {
                name: 'Delete an appointment',
                url: '/doctor/appDel',
                icon: 'icon-fire'
            }
        ]
    },
];
