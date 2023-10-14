import React from 'react'
import TopSideProfile from '../../Components/TopSideProfile/TopSideProfile'
import './profile.css'
import Highlight from '../../Components/Highlight/Highlight'
import BottomSideProfile from '../../Components/BottomSideProfile/BottomSideProfile'
import LeftSide from '../../Components/LeftSide/LeftSide'

const Profile = () => {
  return (
    <div className='profile' >
        <LeftSide/>
        <div className='profile-page'>
        <TopSideProfile/>
        <Highlight/>
        <BottomSideProfile/>
        </div>
        
    </div>
  )
}

export default Profile
