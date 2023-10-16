import React from 'react'
import Menu from '../Menu/Menu'
import './leftSide.css'
const LeftSide = ({setPostsData , onSearch , value , users}) => {
  return (
    <div className='left-side'>
        <Menu setPostsData={setPostsData} onSearch={onSearch}  value={value} users={users}/>
    </div>
  )
}

export default LeftSide
