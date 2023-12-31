import React , {useState} from 'react';
import './menuItem.css';
import { PiHouse } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineExplore } from 'react-icons/md';
import { MdSlideshow } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import { LuPlusSquare } from 'react-icons/lu';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CreateNewPost from '../Models/CreateNewPost/CreateNewPost'
import SearchBar from '../Models/SearchBar/SearchBar'

const MenuItem = ({ setPostsData , onSearch , value , users}) => {
  const [openCreateModel, setOpenCreateModel] = useState(false);
  const handleOpenCreateModel = () =>{ 
    setOpenCreateModel(true)  
    if(openSearchModel){
    setOpenSearchModel(false)
  }};
  const handleCloseCreateModel = () => {
    setOpenCreateModel(false)
 };
  const [openSearchModel, setOpenSearchModel] = useState(false);
  const handleOpenSearchModel = () => setOpenSearchModel(true);
  const handleCloseSearchModel = () => setOpenSearchModel(false);

  return (
    <div className="mune-item-display" >
    <Link to="/home">
        {' '}
        <div className="menu-item" onClick={handleCloseSearchModel}>
          <span className="icon">
            <PiHouse />
          </span>
          <p className="icon-name">Home</p>
        </div>
      </Link>
      <div className="menu-item" onClick={handleOpenSearchModel} >
        <span className="icon">
          <FiSearch />
        </span>
        <p className="icon-name">Search</p>
      </div>

      <Link to="/explor">
        <div className="menu-item" onClick={handleCloseSearchModel}>
          <span className="icon">
            <MdOutlineExplore />
          </span>
          <p>Explor</p>
        </div>
      </Link>
      <Link to="/reels">
        {' '}
        <div className="menu-item" onClick={handleCloseSearchModel}>
          <span className="icon">
            <MdSlideshow />
          </span>
          <p>Reels</p>
        </div>
      </Link>
      <Link to="/direct">
        {' '}
        <div className="menu-item" onClick={handleCloseSearchModel}>
          <span className="icon">
            <RiMessengerLine />
          </span>
          <p>Messages</p>
        </div>
      </Link>
      <div className="menu-item " id="nontifications" >
        <span className="icon">
          <GoHeart />
        </span>
        <p>Nontifications</p>
      </div>

      <div className="menu-item" onClick={handleOpenCreateModel}>
        <span className="icon">
          <LuPlusSquare />
        </span>
        <p>Create</p>
      </div>

      <Link to="/profile">
        {' '}
        <div className="menu-item">
          <span className="icon">
            <IoPersonCircleOutline />
          </span>
          <p>Profile</p>
        </div>
      </Link>
      <CreateNewPost  isOpen={openCreateModel} close={setOpenCreateModel} setPostsData={setPostsData}/>
      <SearchBar isOpen={openSearchModel} close={setOpenSearchModel} onSearch={onSearch}  value={value}  users={users}/>
    </div>
  );
};

export default MenuItem;
