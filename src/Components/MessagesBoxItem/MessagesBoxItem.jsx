import React from 'react'
import './messagesBoxItem.css'
import {BsDot} from 'react-icons/bs'
const MessagesBoxItem = ({props}) => {
    let number_day;
    const day = props.date_last_message
    if (day >= 7) {
        number_day = Math.floor(day / 7) +"w"; 
      } else {
        number_day = day +"d"; 
      }
  return (
    <div className='message-box-item'>
      <div className='user-information'>
    <img className='user-image' src='../Images/userImage.jpeg' alt='User Image' />
    <div >
        <p className='message-user'>{props.name}</p>
        <p className='last-message'>{props.last_message} <BsDot/> {number_day} </p>
    </div>
    </div>
    </div>
  )
}

export default MessagesBoxItem
