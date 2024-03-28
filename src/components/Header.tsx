import { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className=''>
      <div className='flex py-5 px-3'>
        <div className='flex item-center pt-3'>
          <img src='images/logo.svg' alt='Logo' />
        </div>
        <div className='flex-grow flex items-center z-20'>
          <NavMenu />
        </div>
        <div className='flex items-center'>
          <a href='#' onClick={() => setOpen(true)}>
            <img
              src='images/icon-menu.svg'
              alt='Menu Icon'
              className='block lg:hidden'
            />
          </a>
          <div className='hidden lg:flex lg:space-x-10 lg:items-center'>
            <div className='hover:text-almost-black cursor-pointer'>Login</div>
            <div>
              <button className='border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
