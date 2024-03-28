import { Menu, Transition } from '@headlessui/react';
import { MENU_ITEMS } from '../constants/menu';

const NavMenu = () => {
  return (
    <nav>
      <ul className='hidden lg:flex lg:space-x-7 lg:ml-14'>
        {MENU_ITEMS.map(menuItem => (
          <li key={menuItem.title}>
            <Menu>
              <Menu.Button>
                {menuItem.title}{' '}
                {menuItem.subItems && (
                  <img
                    src='images/icon-arrow-down.svg'
                    alt='Icon down arrow'
                    className='inline-block ml-1'
                  />
                )}
              </Menu.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                {/* Renderizar Menu.Items solo si menuItem tiene subItems */}
                {menuItem.subItems && (
                  <Menu.Items className='absolute mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {menuItem.subItems.map(subItem => (
                      <Menu.Item key={subItem.id}>
                        {({ active }) => (
                          <a
                            className={`${
                              active && 'bg-gray-100 text-gray-900'
                            } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                            href={subItem.link}
                          >
                            {subItem.icon && (
                              <img
                                src={subItem.icon}
                                className='inline w-4 mr-3'
                                alt={` ${subItem.title} Icon`}
                              />
                            )}
                            {subItem.title}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                )}
              </Transition>
            </Menu>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
