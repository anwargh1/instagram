import React from 'react'
import Stories from '../Stories/Stories'
import './content.css'
import Posts from '../Posts/Posts'
const Content = ({postsData , onDelete ,onChange ,users ,formatTimestamp}) => {
  return ( 
    <div className='content'>
       <Stories users={users}/>
       <Posts postsData={postsData} onDelete={onDelete} onChange={onChange} formatTimestamp={formatTimestamp}/>
    </div>
  )
}

export default Content
