import React from 'react';
import './suggestion.css';
import PageItem from '../PageItem/PageItem';

const pagesData = [
  {
    name: 'Tailwind CSS',
    userName: 'tailwindCSS',
    profileImg: '../Images/typeScript.png',
    verified: true,
  },
  {
    name: 'TypeScript',
    userName: 'typeScript',
    profileImg: '../Images/typeScript.png',
    verified: false,
  },
  {
    name: 'freeCodeCamp.org',
    userName: 'freeCodeCamp',
    profileImg: '../Images/typeScript.png',
    verified: true,
  },
];
const Suggestion = () => {
  return (

      <div className="pages-you-might-like">
        <div className='display-flex'>
          <p className="suggested-for-you">Suggested for you</p>
          <p className='see-all'>See All</p>
        </div>
       <div className='pages'>
       {pagesData.map(data => (
          <PageItem props={data} />
        ))}
       </div>
      </div>
   
  );
};

export default Suggestion;
