import React from 'react'
import './userPosts.css'
import UserPostsItem from '../UserPostsItem/UserPostsItem'
const userPosts = [
      {
        "id": 1,
        "username": "user1",
        "caption": "This is the first post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 1"
          }
        ],
        "likes": 100,
        "comment_count": 2
      },
      {
        "id": 2,
        "username": "user2",
        "caption": "Another post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 2"
          }
        ],
        "likes": 150,
        "comment_count": 1
      },
      {
        "id": 3,
        "username": "user3",
        "caption": "Yet another post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 3"
          }
        ],
        "likes": 200,
        "comment_count": 0
      },
      {
        "id": 4,
        "username": "user4",
        "caption": "More posts!",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 4"
          }
        ],
        "likes": 75,
        "comment_count": 0
      },
      {
        "id": 5,
        "username": "user5",
        "caption": "Fifth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 5"
          }
        ],
        "likes": 220,
        "comment_count": 1
      },
      {
        "id": 6,
        "username": "user6",
        "caption": "Sixth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 6"
          }
        ],
        "likes": 180,
        "comment_count": 0
      },
      {
        "id": 7,
        "username": "user7",
        "caption": "Seventh post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 7"
          }
        ],
        "likes": 210,
        "comment_count": 0
      },
      {
        "id": 8,
        "username": "user8",
        "caption": "Eighth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 8"
          }
        ],
        "likes": 130,
        "comment_count": 0
      },
      {
        "id": 9,
        "username": "user9",
        "caption": "Ninth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 9"
          }
        ],
        "likes": 280,
        "comment_count": 1
      },
      {
        "id": 10,
        "username": "user10",
        "caption": "Tenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 10"
          }
        ],
        "likes": 160,
        "comment_count": 0
      },
      {
        "id": 11,
        "username": "user11",
        "caption": "Eleventh post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 11"
          }
        ],
        "likes": 320,
        "comment_count": 1
      },
      {
        "id": 12,
        "username": "user12",
        "caption": "Twelfth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 12"
          }
        ],
        "likes": 190,
        "comment_count": 0
      },
      {
        "id": 13,
        "username": "user13",
        "caption": "Thirteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 13"
          }
        ],
        "likes": 260,
        "comment_count": 0
      },
      {
        "id": 14,
        "username": "user14",
        "caption": "Fourteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 14"
          }
        ],
        "likes": 110,
        "comment_count": 0
      },
      {
        "id": 15,
        "username": "user15",
        "caption": "Fifteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 15"
          }
        ],
        "likes": 240,
        "comment_count": 0
      },
      {
        "id": 16,
        "username": "user16",
        "caption": "Sixteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 16"
          }
        ],
        "likes": 175,
        "comment_count": 0
      },
      {
        "id": 17,
        "username": "user17",
        "caption": "Seventeenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 17"
          }
        ],
        "likes": 210,
        "comment_count": 0
      },
      {
        "id": 18,
        "username": "user18",
        "caption": "Eighteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 18"
          }
        ],
        "likes": 280,
        "comment_count": 0
      },
      {
        "id": 19,
        "username": "user19",
        "caption": "Nineteenth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 19"
          }
        ],
        "likes": 300,
        "comment_count": 0
      },
      {
        "id": 20,
        "username": "user20",
        "caption": "Twentieth post.",
        "type": "image",
        "images": [
          {
            "url": "../Images/profileImagePost.jpg",
            "alt": "Image 20"
          }
        ],
        "likes": 190,
        "comment_count": 0
      }
    ]
  
  
const UserPosts = () => {
  return (
    <div className='user-posts'>
        {userPosts.map(post => <UserPostsItem props={post} key={post.id}/>)}
    </div>
  )
}

export default UserPosts
