import React from 'react';
import './storyItem.css';


const StoryItem = ({ props }) => {

  return (
      <div className="story-item">
        <div className="gradient">
          <img src={props.image} alt={props.userName + 'Image'} />
        </div>
        <p>{props.userName}</p>
      </div>
  );
};

export default StoryItem;
