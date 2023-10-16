import React from 'react'
import './explorSide.css'
import ExplorItem from '../ExplorItem/ExplorItem'

   const explore_posts = [
      {
        "id": 1,
        "image_url": "../Images/Image1.jpg",
        "likes": 1500,
        "comments": 500
      },
      {
        "id": 2,
        "image_url": "../Images/Image2.jpg",
        "likes": 1200,
        "comments": 300
      },
      {
        "id": 3,
        "image_url": "../Images/Image3.jpg",
        "likes": 2000,
        "comments": 700
      },
      {
        "id": 4,
        "image_url": "../Images/Image4.jpg",
        "likes": 1800,
        "comments": 600
      },
      {
        "id": 5,
        "image_url": "../Images/Image5.jpg",
        "likes": 2200,
        "comments": 900
      },
      {
        "id": 6,
        "image_url": "../Images/Image18.jpg",
        "likes": 2500,
        "comments": 1000
      },
      {
        "id": 7,
        "image_url": "../Images/Image7.jpg",
        "likes": 1700,
        "comments": 400
      },
      {
        "id": 8,
        "image_url": "../Images/Image17.jpg",
        "likes": 1900,
        "comments": 450
      },
      {
        "id": 9,
        "image_url": "../Images/Image10.jpg",
        "likes": 1600,
        "comments": 550
      },
      {
        "id": 10,
        "image_url": "../Images/Image3.jpg",
        "likes": 2100,
        "comments": 650
      },
      {
        "id": 11,
        "image_url": "../Images/Image2.jpg",
        "likes": 1200,
        "comments": 300
      },
      {
        "id":12,
        "image_url": "../Images/Image3.jpg",
        "likes": 2000,
        "comments": 700
      },
      {
        "id": 13,
        "image_url": "../Images/Image4.jpg",
        "likes": 1800,
        "comments": 600
      },
      {
        "id": 14,
        "image_url": "../Images/Image5.jpg",
        "likes": 2200,
        "comments": 900
      },
      {
        "id": 15,
        "image_url": "../Images/Image18.jpg",
        "likes": 2500,
        "comments": 1000
      },
      {
        "id": 16,
        "image_url": "../Images/Image7.jpg",
        "likes": 1700,
        "comments": 400
      },
      {
        "id": 17,
        "image_url": "../Images/Image17.jpg",
        "likes": 1900,
        "comments": 450
      },
      {
        "id": 18,
        "image_url": "../Images/Image10.jpg",
        "likes": 1600,
        "comments": 550
      },
      {
        "id": 19,
        "image_url": "../Images/Image3.jpg",
        "likes": 2100,
        "comments": 650
      }
    ]
  
   
const ExplorSide = () => {
  return (
    <div className='explor-side'>
      <div className="group-item-explor"> {explore_posts.map(post => <ExplorItem props={post} key={post.id} />)}</div> 
    </div>
  )
}

export default ExplorSide
