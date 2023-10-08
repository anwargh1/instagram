import React from 'react';
import './Posts.css';
import PostItem from '../PostItem/PostItem';
import './Posts.css';
const posts = [
  {
    id: 1,
    userName: 'anwar.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Beautiful sunset!',
    date: new Date(),
    likes: 12345,
    commentsCount: 567,
  },
  {
    id: 2,
    userName: 'batool.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Exploring nature!',
    date: new Date(),
    likes: 9876,
    commentsCount: 4321,
  },
  {
    id: 3,
    userName: 'qais.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'City lights!',
    date: new Date(),
    likes: 65432,
    commentsCount: 12345,
  },
  {
    id: 4,
    userName: 'murad.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Gourmet delight!',
    date: new Date(),
    likes: 4567,
    commentsCount: 678,
  },
  {
    id: 5,
    userName: 'mohammad.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Peaceful oasis!',
    date: new Date(),
    likes: 54321,
    commentsCount: 9876,
  },
  {
    id: 6,
    userName: 'anwar.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Morning vibes!',
    date: new Date(),
    likes: 87654,
    commentsCount: 34567,
  },
  {
    id: 7,
    userName: 'karam.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Adventures await!',
    date: new Date(),
    likes: 2345,
    commentsCount: 987,
  },
  {
    id: 8,
    userName: 'ahmad.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'Serene landscapes!',
    date: new Date(),
    likes: 6789,
    commentsCount: 2345,
  },
  {
    id: 9,
    userName: 'sara.gh',
    profileImage: '../Images/profileImagePost.jpg',
    postImage: '../Images/profileImagePost.jpg',
    caption: 'A day at the beach!',
    date: new Date(),
    likes: 7890,
    commentsCount: 5678,
  },
];

const Posts = () => {
  return (
    <div className="posts">
      <div className='posts-flex'>
        {posts.map(post => (
          <PostItem props={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
