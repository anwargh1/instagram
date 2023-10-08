import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { IoMdMenu } from 'react-icons/io';
import { RiThreadsFill } from 'react-icons/ri';

import MenuItem from '../MenuItem/MenuItem';
import './menu.css';
// const menuItem = [
//   {
//     id: 1,
//     name: 'Home',
//     icon: <PiHouse />,
//   },
//   {
//     id: 2,
//     name: 'Search',
//     icon: <FiSearch />,
//   },
//   {
//     id: 3,
//     name: 'Explor',
//     icon: <MdOutlineExplore />,
//   },
//   {
//     id: 4,
//     name: 'Reels',
//     icon: <MdSlideshow />,
//   },
//   {
//     id: 5,
//     name: 'Messages',
//     icon: <RiMessengerLine />,
//   },
//   {
//     id: 6,
//     name: 'Nontifications',
//     icon: <GoHeart />,
//   },
//   {
//     id: 7,
//     name: 'Create',
//     icon: <MdOutlineAddBox />,
//   },
//   {
//     id: 8,
//     name: 'Profile',
//     icon: <IoPersonCircleOutline />,
//   },
// ];

//   {/* <div className='menu'>
//   {menuItem.map(item => (
//     <MenuItem props={item} key={item.id} />
//   ))}
// </div> */}
const Menu = () => {
  return (
    <div className="menu ">
      <div className="top-side">
        <div className="logo">

            <img src='../Images/instagramLogo (2).png' alt='instagram logo'/>
        </div>
        <MenuItem />
      </div>

      <div className="bottom-side">
        <div className="threads">
          <span>
            <RiThreadsFill />
          </span>
          <p>Threads</p>
        </div>
        <div className="more">
          <span>
            <IoMdMenu />
          </span>
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
