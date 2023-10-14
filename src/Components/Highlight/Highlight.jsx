import React from 'react'
import './highlight.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HighlightItem from '../HighlightItem/HighlightItem';
const highlite = [
    {
      id: 1,
      title: 'Summer Vacation',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 2,
      title: 'Family Reunion',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 3,
      title: 'Hiking Adventure',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 4,
      title: 'Beach Sunset',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 5,
      title: 'City Explorations',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 6,
      title: 'Mountain Retreat',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 7,
      title: 'Foodie Delights',
      image: '../Images/profileImagePost.jpg',
    },
    {
      id: 8,
      title: 'Artistic Creations',
      image: '../Images/profileImagePost.jpg',
    },
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
   
const Highlight = () => {
  return (
    <div className='highlight'>
    <Slider {...settings} className='slider'>
      {highlite.map(h => (
          <HighlightItem props={h} />
      ))}
    </Slider>
  </div>
  )
}

export default Highlight
