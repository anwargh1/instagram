import './Posts.css';
import PostItem from '../PostItem/PostItem';

const Posts = ({postsData ,onDelete ,onChange}) => {
  return (
    <div className="posts">
      <div className='posts-flex'>
        {postsData.map(post => (
          <PostItem props={post} key={post.id} onDelete={onDelete} onChange={onChange}/>
        ))}
      </div>
    </div>
  );
};

export default Posts;
