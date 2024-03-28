import { v4 } from 'uuid';

interface MenuItem {
  id: string;
  title: string;
  link?: string;
  icon?: string;
  subItems?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: v4(),
    title: 'Features',
    subItems: [
      { id: v4(), title: 'Todo list', link: '', icon: 'images/icon-todo.svg' },
      {
        id: v4(),
        title: 'Calendar',
        link: '',
        icon: 'images/icon-calendar.svg'
      },
      {
        id: v4(),
        title: 'Reminders',
        link: '',
        icon: 'images/icon-reminders.svg'
      },
      {
        id: v4(),
        title: 'Planning',
        link: '',
        icon: 'images/icon-planning.svg'
      }
    ]
  },
  {
    id: v4(),
    title: 'Company',
    subItems: [
      { id: v4(), title: 'History', link: '', icon: '' },
      { id: v4(), title: 'Our Team', link: '', icon: '' },
      { id: v4(), title: 'Blog', link: '', icon: '' }
    ]
  },
  { id: v4(), title: 'Careers', link: '' },
  { id: v4(), title: 'About', link: '' }
];
