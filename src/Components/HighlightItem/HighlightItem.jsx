import React from 'react'
import './highlightItem.css'
const HighlightItem = ({ props }) => {
  return (
    <div className="highlight-item">
        <div className="gradient-highlight">
          <img src={props.image} alt={props.userName + 'Image'} />
        </div>
        <p className='highlight-title'>{props.title}</p>
      </div>
  )
}

export default HighlightItem
