import React from 'react';
import StoryItem from '../StoryItem/StoryItem';
import './stories.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings1 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 2,
};

const settings2 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
};

const settings3 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const Stories = ({users}) => {
  const latestUsers =users.slice(-20)

  return (
    <div className='stories'>
    <Slider {...settings1} className='slider1-story'>
      {latestUsers.map(s => (
          <StoryItem props={s} key={s.id}/>
      ))}
    </Slider>

    <Slider {...settings2} className='slider2-story'>
      {latestUsers.map(s => (
          <StoryItem props={s} key={s.id}/>
      ))}
    </Slider>

    <Slider {...settings3} className='slider3-story'>
      {latestUsers.map(s => (
          <StoryItem props={s} key={s.id}/>
      ))}
    </Slider>
  </div>
  );
};

export default Stories;
