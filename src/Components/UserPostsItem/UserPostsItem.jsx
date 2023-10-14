import React from 'react'
import './userPostsItem.css'
const UserPostsItem = ({props}) => {
    console.log(props.images);
  return (
    <div className='user-post-item'>
        <img src={props.image} alt="post Image" />
    </div>
  )
}

export default UserPostsItem
