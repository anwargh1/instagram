import React from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {TbMessageCircle2} from 'react-icons/tb'
import {FiSend} from 'react-icons/fi'
import {VscBookmark} from 'react-icons/vsc'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {GoHeart} from 'react-icons/go'
import './postItem.css'
const PostItem = ({ props }) => {
  return (
    <div className='post-item'>
      <div className='flex'>
        <div className='flex'>
          <img className ='profile-img' src={props.profileImage} alt={props.userName + " Profile Image"} />
          <h3 className='user-name'>{props.userName}</h3>
          <p className='dot'>.</p>
          <span> {props.time}</span>
        </div>
        <BsThreeDots className='setting-icon'/>
     </div>

      <div className='post-img'>
        <img src={props.postImage} alt= "Post Image" />
      </div>
      <div className='flex'>
        <div className='flex'>
          <GoHeart className='heart-icon'/>
          <TbMessageCircle2 className='message-icon'/>
          <FiSend className='send-icon'/>
        </div>
        <VscBookmark className='mark-icon'/>
      </div>

        <div>
            <p className='likes'>{props.likes} likes</p>
        </div>
      <div className='flex-caption'>
        <h4>{props.userName}</h4>
        <p>{props.caption}</p>
      </div>
      <p className='comments'>
      View all {props.commentsCount} comments
      </p>
      <div className='flex'>
        <div className='add-comment'>
          <input type='text' placeholder="Add a comment..." />
        </div>
        <p><HiOutlineEmojiHappy className='emoji-icon'/></p>
      </div>
    </div>
  );
};

export default PostItem;
