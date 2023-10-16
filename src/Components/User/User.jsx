import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './user.css'
const User = () => {
  const user =JSON.parse(localStorage.getItem("user"))

  return (
    <div className='user-menu'>
    <div className='user-information'>
    <img className='user-image' src={user.avatar} alt='User Image' />
    <div >
        <h4 className='user'>{user.userName}</h4>
        <p className='user-name'>{user.email}</p>
    </div>
    </div>
    <button className='switch'>Switch</button>
</div>
  )
}

export default User
