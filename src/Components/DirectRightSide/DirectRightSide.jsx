import React from 'react'
import './directRightSide.css'
import {LiaFacebookMessenger} from 'react-icons/lia'
const DirectRightSide = () => {
  return (
    <div className='direct-right-side'>
      <div className='message-icon'><LiaFacebookMessenger className='icon'/></div>
      <p className='p-messages'>Your messages</p>
      <p className='p-send'>Send private photos and messages to a friend or group</p>
        <button className='send-action'>Send message</button>
    </div>
  )
}

export default DirectRightSide
