import './Posts.css';
import PostItem from '../PostItem/PostItem';

const Posts = ({postsData ,onDelete ,onChange ,formatTimestamp}) => {
  const latestPost =postsData.slice(-10)

  return (
    <div className="posts">
      <div className='posts-flex'>
        {latestPost.map(post => (
          <PostItem formatTimestamp={formatTimestamp} props={post} key={post.id} onDelete={onDelete} onChange={onChange} formatTimestamp={formatTimestamp}/>
        ))}
      </div>
    </div>
  );
};

export default Posts;
