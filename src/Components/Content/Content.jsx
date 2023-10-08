import React from 'react'
import Stories from '../Stories/Stories'
import './content.css'
import Posts from '../Posts/Posts'
const Content = () => {
  return (
    <div className='content'>
       <Stories/>
       <Posts/>
    </div>
  )
}

export default Content
