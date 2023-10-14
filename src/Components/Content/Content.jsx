import React from 'react'
import Stories from '../Stories/Stories'
import './content.css'
import Posts from '../Posts/Posts'
const Content = ({postsData , onDelete ,onChange}) => {
  return ( 
    <div className='content'>
       <Stories/>
       <Posts postsData={postsData} onDelete={onDelete} onChange={onChange}/>
    </div>
  )
}

export default Content
