import React, { useContext,} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const Layout = () => {
  const {user} = useContext(UserContext);
  return (
    <header className="flex justify-between py-3 items-center">
        <Link className="text-[27px] font-black text-blue" 
        to={"/home"}>wooclap</Link>
        <div className="cursor-pointer flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#3d7dea"
            className="w-9 h-9"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className='relative'>{user?.name}</span>
        </div>
    </header>
  )
}

export default Layout;