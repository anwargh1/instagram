import React from 'react'
import './bottomSideProfile.css'
import {LiaTableSolid} from 'react-icons/lia'
import {MdOutlineSlideshow} from 'react-icons/md'
import {HiOutlineBookmark} from 'react-icons/hi2'
import {BsPersonVideo} from 'react-icons/bs'
import UserPosts from '../UserPosts/UserPosts'
const BottomSideProfile = () => {
  return (
    <div className='bottom-side-profile'>
            <div className='interactions-user'>
                <div><LiaTableSolid/><p>POSTS</p></div>
                <div><MdOutlineSlideshow/><p>REELS</p></div>
                <div><HiOutlineBookmark/><p>SAVED</p></div>
                <div><BsPersonVideo/><p>TAGGED</p></div>
            </div>
            <UserPosts/>
    </div>
  )
}

export default BottomSideProfile
