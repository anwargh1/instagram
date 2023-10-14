import React from 'react'
import './explorItem.css'
const ExplorItem = ({props}) => {
  return (
    <div className='explor-item'>
      <img src={props.image_url} alt='explor Image' />
    </div>
  )
}

export default ExplorItem
