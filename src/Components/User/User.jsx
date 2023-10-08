import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './user.css'
const User = () => {
  return (
    <div className='user-menu'>
    <div className='user-information'>
    <img className='user-image' src='../Images/userImage.jpeg' alt='User Image' />
    <div >
        <h4 className='user'>anwar.gh</h4>
        <p className='user-name'>AnwarGhannam</p>
    </div>
    </div>
    <button className='switch'>Switch</button>
</div>
  )
}

export default User
