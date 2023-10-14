import React from 'react';
import './searchBar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';
const SearchBar = () => {
  return (
    <div className="search-model">
      <div className='serach-bar'>
        <h2>Search</h2>
        <div className="search">
           <div className='icon-input'>
           <FiSearch className='search-icon'/>
            <input type="search" placeholder="Search" className="search-input" />
           </div>
          <AiFillCloseCircle className="close-icon" />
        </div>
      </div>

      <div className="search-result">
        <h4>Recent</h4>
        <p className="no-recent">No recent searches.</p>
      </div>

      <div></div>
    </div>
  );
};

export default SearchBar;
