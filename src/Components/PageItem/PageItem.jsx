import React from 'react';
import { MdVerified } from 'react-icons/md';
import './pageItem.css';
const PageItem = ({props}) => {
  return (
    <div className="page-item-rightSide">
      <div className="page-item-details-rightSide">
        <img
          className="profile-image-rightSide"
          src={props.avatar}
          alt={props.userName}
        />
        <div className="pagesName-rightSide">
          <h5>
          {props.userName}
          </h5>
          <p>{props.email}</p>
        </div>
      </div>
      <button className="follow-button-rightSide">Follow</button>
    </div>
  )
}

export default PageItem
