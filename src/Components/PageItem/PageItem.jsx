import React from 'react';
import { MdVerified } from 'react-icons/md';
import './pageItem.css';
const PageItem = ({props}) => {
  return (
    <div className="page-item-rightSide">
      <div className="page-item-details-rightSide">
        <img
          className="profile-image-rightSide"
          src={props.profileImg}
          alt={props.name}
        />
        <div className="pagesName-rightSide">
          <h5>
            {props.name}{' '}
            {props.verified && <MdVerified className="verified-icon" />}
          </h5>
          <p>{props.userName}</p>
        </div>
      </div>
      <button className="follow-button-rightSide">Follow</button>
    </div>
  )
}

export default PageItem
