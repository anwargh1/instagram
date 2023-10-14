import React from 'react'
import './userPostsItem.css'
const UserPostsItem = ({props}) => {
    console.log(props.images);
  return (
    <div className='user-post-item'>
        {props.images.map(img => <img src={img.url}  alt={img.alt} className='img-user-post'/> )}
    </div>
  )
}

export default UserPostsItem
