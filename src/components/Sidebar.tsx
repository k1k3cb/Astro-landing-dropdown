import { Disclosure, Transition } from '@headlessui/react';
import { MENU_ITEMS } from '../constants/menu';

const Sidebar = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={open}>
      {/* Background overlay */}
      <Transition.Child
        enter='transition-opacity ease-linear duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-linear duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='w-full h-full fixed bg-black opacity-80 z-10 inset-0'></div>
        {/* ... */}
      </Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        className='fixed right-0 top-0 w-[250px] z-30 h-screen'
        enter='transition ease-in-out duration-300 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
      >
        {/* ... */}
        <div className='fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50'>
          <a
            href='#'
            onClick={() => setOpen(false)}
            aria-expanded={open}
            aria-controls='sidebar'
          >
            <img
              className='absolute top-5 right-5'
              src='images/icon-close-menu.svg'
              alt='Close Menu'
            />
          </a>
          <ul className='flex flex-col space-y-3'>
            {MENU_ITEMS.map(menuItem => (
              <li key={menuItem.id}>
                <Disclosure>
                  {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <>
                      <Disclosure.Button className='flex items-center text-left '>
                        <span className='mr-4'>{menuItem.title}</span>
                        {menuItem.subItems && (
                          <img
                            src={`images/icon-arrow-${
                              open ? 'up' : 'down'
                            }.svg`}
                            alt='Arrow '
                          />
                        )}
                      </Disclosure.Button>
                      {menuItem.subItems && (
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                          <ul className='flex flex-col space-y-3'>
                            {menuItem.subItems.map(subItem => (
                              <li className='cursor-pointer' key={subItem.id}>
                                {subItem.icon && (
                                  <img
                                    src={subItem.icon}
                                    className='inline w-4 mr-3'
                                    alt={` ${subItem.title} Icon`}
                                  />
                                )}
                                {subItem.title}
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      )}
                    </>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
          <div className='flex flex-col space-y-5 items-center justify-items-center pt-8'>
            <div className='hover:text-almost-black cursor-pointer'>Login</div>
            <div className='w-full'>
              <button className='w-full border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2'>
                Register
              </button>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Sidebar;
