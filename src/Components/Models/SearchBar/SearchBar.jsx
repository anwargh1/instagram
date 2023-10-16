import React from 'react';
import './searchBar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from 'react-router-dom';
const SearchBar = ({isOpen ,close ,onSearch, value ,users}) => {
  const handleClose =()=>{
    close(false)
  }

  function handelOnChange(e) {
    const searchValue = e.target.value.toLowerCase();
    onSearch(searchValue);
  }

  if(isOpen){
    return (
      <div className="search-model" >
        <div className='serach-bar'>
        <AiOutlineClose className="background-close-icon"  onClick={handleClose}/>

          <h2>Search</h2>

          <div className="search">
             <div className='icon-input'>
             <FiSearch className='search-icon'/>
              <input type="search" 
              placeholder="Search"
              className="search-input"
              value={value}
              onChange={handelOnChange} />
             </div>
            <AiFillCloseCircle className="close-icon" />
          </div>
        </div>
  

        <div className="search-result">
        <h4>Recent</h4>

          {value === "" ? (
              <p className="no-recent">No recent searches.</p>
          ) : ( 
            users.map(user => (
              <div className='search-user'>
              <div className='user-information' key={user.id}>
                <img className='user-image' src={user.avatar} alt='User Image' />
                <div>
                  <p className='message-user'>{user.userName}</p>
                  <p className='last-message'>{user.email}</p>
                </div>
              </div>
              </div>
            ))
          )}
        </div>

  
      </div>
    );
  }
  
};

export default SearchBar;
