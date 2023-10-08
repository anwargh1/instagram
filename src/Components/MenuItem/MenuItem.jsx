import React from 'react'
import './menuItem.css'
import { PiHouse } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineExplore } from 'react-icons/md';
import { MdSlideshow } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { GoHeart } from 'react-icons/go';
import { LuPlusSquare } from 'react-icons/lu';
import { IoPersonCircleOutline } from 'react-icons/io5';


const MenuItem = ({props}) => {
  return (
    <div >
        {/* <span>{props.icon}</span>
        <h3>{props.name}</h3> */}

        <div className='menu-item'>
            <span className='icon'><PiHouse /></span>
            <p className='icon-name'>Home</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><FiSearch /></span>
            <p  className='icon-name'>Search</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><MdOutlineExplore /></span>
            <p>Explor</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><MdSlideshow /></span>
            <p>Reels</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><RiMessengerLine /></span>
            <p>Messages</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><GoHeart /></span>
            <p>Nontifications</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><LuPlusSquare /></span>
            <p>Create</p>
        </div>

        <div className='menu-item'>
            <span className='icon'><IoPersonCircleOutline /></span>
            <p>Profile</p>
        </div>

    </div>
  )
}

export default MenuItem
