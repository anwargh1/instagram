import React , {useState}from 'react';
import { FiInstagram } from 'react-icons/fi';
import { IoMdMenu } from 'react-icons/io';
import { RiThreadsFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import More from '../Models/More/More'

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
const Menu = ({setPostsData , onSearch , value , users}) => {
  const [openMoreModel, setOpenMoreModel] = useState(false);
  const handleOpenMoreModel = () => setOpenMoreModel(!openMoreModel);

  return (
    <div className="menu ">
      <div className="top-side">
      <Link to='/home'> <div className="logo">

            <img src='../Images/instagramLogo (2).png' alt='instagram logo'/>
            <BsInstagram className='instagram-icon-logo'/>
        </div></Link>
        <MenuItem setPostsData={setPostsData}  onSearch={onSearch}  value={value}  users={users}/>

      </div>

      <div className="bottom-side">
        <div className="threads">
          <span>
            <RiThreadsFill />
          </span>
          <p>Threads</p>
        </div>
        <div className="more" onClick={handleOpenMoreModel}>
          <span>
            <IoMdMenu />
          </span>
          <p>More</p>
          <More isOpen={openMoreModel} close={setOpenMoreModel} />

        </div>
      </div>

    </div>
  );
};

export default Menu;
