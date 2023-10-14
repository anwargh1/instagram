import React ,{useState}from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {TbMessageCircle2} from 'react-icons/tb'
import {FiSend} from 'react-icons/fi'
import {VscBookmark} from 'react-icons/vsc'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {GoHeart} from 'react-icons/go'
import {BsDot} from 'react-icons/bs'
import './postItem.css'
import DeleteAndEditPost from '../Models/DeleteAndEditPost/DeleteAndEditPost'
const PostItem = ({ props ,onDelete ,onChange}) => {
  const [open ,setOpen] =useState(false)

  const handleOpen =()=>{
    setOpen(!open)
  }
  return (
    <div className='post-item'>
      <div className='flex'>
        <div className='flex'>
          <img className ='profile-img' src={props.user.avatar} alt={props.userName + " Profile Image"} />
          <h4 className='name'>{props.user.userName}</h4>
          
          <span className='time'><BsDot /> {props.createdAt}</span>
        </div>
        <BsThreeDots className='setting-icon' onClick={handleOpen}/>
        <DeleteAndEditPost close={setOpen}  isOpen={open} onDelete={onDelete} postId={props.id} onChange={onChange}/>
     </div>

      <div className='post-img'>
        <img src={props.image} alt= "Post Image" />
      </div>
      <div className='flex'>
        <div className='flex'>
          <GoHeart className='heart-icon'/>
          <TbMessageCircle2 className='comment-icon'/>
          <FiSend className='send-icon'/>
        </div>
        <VscBookmark className='mark-icon'/>
      </div>

        <div>
            <p className='likes'>{props.likes.length} likes</p>
        </div>
      <div className='flex-caption'>
        <h4>{props.userName}</h4>
        <p>{props.description}</p>
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
