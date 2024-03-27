interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  subItems?: MenuItem[];
}

export const MENU: MenuItem[] = [
  {
    title: 'Features',
    subItems: [
      {
        title: 'Todo list',
        link: '',
        icon: 'images/icon-todo.svg'
      },
      {
        title: 'Calendar',
        link: '',
        icon: 'images/icon-calendar.svg'
      },
      {
        title: 'Reminders',
        link: '',
        icon: 'images/icon-reminders.svg'
      },
      {
        title: 'Planning',
        link: '',
        icon: 'images/icon-planning.svg'
      }
    ]
  },
  {
    title: 'Company',
    subItems: [
      {
        title: 'History',
        link: '',
        icon: ''
      },
      {
        title: 'Our Team',
        link: '',
        icon: ''
      },
      {
        title: 'Blog',
        link: '',
        icon: ''
      }
    ]
  },
  { title: 'Careers', link: '' },
  { title: 'About', link: '' }
];
