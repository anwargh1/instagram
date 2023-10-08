import React from 'react';
import StoryItem from '../StoryItem/StoryItem';
import './stories.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const storis = [
  {
    id: 1,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 2,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 3,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 4,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 5,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 6,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 7,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
  {
    id: 8,
    userName: 'anwar.gh',
    image: '../Images/profileImagePost.jpg',
  },
 
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

const Stories = () => {
  return (
    <div className='stories'>
    <Slider {...settings} className='slider'>
      {storis.map(s => (
          <StoryItem props={s} />
      ))}
    </Slider>
  </div>
  );
};

export default Stories;
