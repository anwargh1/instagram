import React, { useEffect, useState } from "react";
import axios from "axios";
import './topSideProfile.css'
import {IoIosSettings} from 'react-icons/io'
import EditProfileForm  from '../EditProfileForm/EditProfileForm'

const TopSideProfile = ({setUserData , onUpdate}) => {
    const user =JSON.parse(localStorage.getItem("user"))
    const [openEditModel, setOpenEditModel] = useState(false);
    const handleOpenEditModel = () => setOpenEditModel(true);
    const handleCloseEditModel = () => setOpenEditModel(false);

  return (
    <div className='top-side-profile' >
        <div className='image-profile'>
            <img src={user.avatar} alt= {user.userName +" Image"}/>
        </div>

        <div className='user-profile-information'>
            <div className='one'>
                <p className='user-name-profile'>{user.userName }</p>

                <div className='profile-actions'>
                <button onClick={handleOpenEditModel}>Edit profile</button>
                <button>View Archive</button>
                <button>Ad tools</button>
                </div>
                <IoIosSettings/>
            </div>
            <div className='bio'>
            <div className='two'>
                <p><span>404</span> posts</p>
                <p><span>1200</span> followers</p>
                <p><span>400</span> following</p>
            </div>

            <div className='three'>
                <p>AnwarGhannam</p>
            </div>

            <div className='four'>
                    <p className='account-type'>Personal account</p>
                    <p>email : {user.email}</p>
                    <p>{user.bio}</p>
                    <p>AAUp || CS</p>
                    <p>status:{user.status}</p>

            </div>

            <div className='five' onClick={handleCloseEditModel}>
                <p>1.4K accounts reached in the last 30 days.<span>View insights</span> </p>
            </div>
            </div>
        </div>
        <EditProfileForm isOpen={openEditModel} user={user} setUserData={setUserData} onUpadte={onUpdate}/>
    </div>
  )
}

export default TopSideProfile
