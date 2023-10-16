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
      image: '../Images/Image4.jpg',
    },
    {
      id: 2,
      title: 'Family Reunion',
      image: '../Images/Image1.jpg',
    },
    {
      id: 3,
      title: 'Hiking Adventure',
      image: '../Images/Image7.jpg',
    },
    {
      id: 4,
      title: 'Beach Sunset',
      image: '../Images/Image5.jpg',
    },
    {
      id: 5,
      title: 'City Explorations',
      image: '../Images/Image10.jpg',
    },
    {
      id: 6,
      title: 'Mountain Retreat',
      image: '../Images/Image9.jpg',
    },
    {
      id: 7,
      title: 'Foodie Delights',
      image: '../Images/Image13.jpg',
    },
    {
      id: 8,
      title: 'Artistic Creations',
      image: '../Images/Image14.jpg',
    },
];

const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll:8,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll:6,
  };

  const settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
  };
   
const Highlight = () => {
  return (
    <div className='highlight'>
    <Slider {...settings1} className='slider1'>
      {highlite.map(h => (
          <HighlightItem props={h} />
      ))}
    </Slider>

    <Slider {...settings2} className='slider2'>
      {highlite.map(h => (
          <HighlightItem props={h} />
      ))}
    </Slider>

    <Slider {...settings3} className='slider3'>
      {highlite.map(h => (
          <HighlightItem props={h} />
      ))}
    </Slider>
  </div>
  )
}

export default Highlight
