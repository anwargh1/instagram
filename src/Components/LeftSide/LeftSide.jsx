import React from 'react'
import Menu from '../Menu/Menu'
import './leftSide.css'
const LeftSide = ({setPostsData}) => {
  return (
    <div className='left-side'>
        <Menu setPostsData={setPostsData}/>
    </div>
  )
}

export default LeftSide
