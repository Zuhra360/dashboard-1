import { IconLayoutDashboardFilled,IconChartBar,IconFileInvoice ,
    IconListCheck,IconCalendarMonth,IconMessageFilled,IconSettings,IconBellFilled} from '@tabler/icons-react';
export const Sidebardata=[
    {
         link:'home',
         name:'Dashboard',
        icon:<IconLayoutDashboardFilled/>,
       
    },
    {   
        link:'analytics',
        name:'Analytics',
        icon:<IconChartBar/>
    },
    {
         link:'invoice',
        name:'Invoice',
        icon:<IconFileInvoice/>,
       
    },
    {
      link:'schedule',
      name:'Schedule',
        icon:<IconListCheck/>
    },
    {
      name:'Calender',
        icon:<IconCalendarMonth/>
    },
    {
         name:'Messages',
        icon:<IconMessageFilled/>
    },
    {
      name:'Notifications',
        icon:<IconBellFilled/>
    },
    {
      link:'settings',
      name:'Settings',
        icon:<IconSettings/>
    }
]