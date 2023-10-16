import React ,{useState ,useEffect ,useMemo} from 'react'
import Content from '../../Components/Content/Content'
import RightSide from '../../Components/RightSide/RightSide'
import LeftSide from '../../Components/LeftSide/LeftSide'
import './home.css'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const Home = () => {
  const [postsData, setPostsData] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate()
  const token = localStorage.getItem("token")


  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      [user.userName, user.email].some(data =>
        data.toLocaleLowerCase().includes(searchValue)
      )
    );
  }, [users, searchValue]);

  const handelSearchUsers = searchValue => {
    setSearchValue(searchValue);
  };

  const handelGetData =()=>{
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPostsData(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching posts", error)
    })
  }

  const handelGetUsers =()=>{
    axios.get("http://16.170.173.197/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUsers(response.data.users)
    }).catch((error) => {
      console.log("Error Fedching users", error)
    })
  }

  useEffect(()=>{
    handelGetData();
    handelGetUsers();
  },[])

  const handleDeletePost = (postId) => {
    axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedPosts= postsData.filter((post) => {
          return post.id !== postId;
        });
        setPostsData(updatedPosts);
        Swal.fire({
          icon: 'success',
          title: 'Post Deleted',
          text: 'The post has been deleted successfully!',
        });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
      });
  };

  const handleEditPost = (postId) => {
    const newDiscraption = prompt("please add the new description");
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${postId}`,
        data: {
          description: newDiscraption,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if(newDiscraption.trim() !== ""){
          Swal.fire({
            icon: 'success',
            title: 'Post Updated',
            text: 'The post has been updated successfully!',
          });
          handelGetData()
        }else          console.log(response.data);

        
      })
      .catch((error) => {
        console.error("Error editing post:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
      });
  };

  const  formatTimestamp =(timestamp)=> {
    const now = new Date();
    const postTime = new Date(timestamp);
  
    const timeDiff = now - postTime; 
  
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
  
    if (timeDiff < minute) {
      return 'just now';
    } else if (timeDiff < hour) {
      const minutesAgo = Math.floor(timeDiff / minute);
      return minutesAgo + (minutesAgo === 1 ? ' minute ago' : ' minutes ago');
    } else if (timeDiff < day) {
      const hoursAgo = Math.floor(timeDiff / hour);
      return hoursAgo + (hoursAgo === 1 ? ' hour ago' : ' hours ago');
    } else if (timeDiff < week) {
      const daysAgo = Math.floor(timeDiff / day);
      return daysAgo + (daysAgo === 1 ? ' day ago' : ' days ago');
    } else if (timeDiff < month) {
      const weeksAgo = Math.floor(timeDiff / week);
      return weeksAgo + (weeksAgo === 1 ? ' week ago' : ' weeks ago');
    } else if (timeDiff < year) {
      const monthsAgo = Math.floor(timeDiff / month);
      return monthsAgo + (monthsAgo === 1 ? ' month ago' : ' months ago');
    } else {
      const yearsAgo = Math.floor(timeDiff / year);
      return yearsAgo + (yearsAgo === 1 ? ' year ago' : ' years ago');
    }
  }

  return (
    <div className='home'>
        <LeftSide setPostsData={setPostsData} onSearch={handelSearchUsers} value={searchValue} users={filteredUsers}/>
        <Content formatTimestamp={formatTimestamp} postsData={postsData} onDelete={handleDeletePost} onChange={handleEditPost} users={users}/>
        <RightSide users={users}/> 
    </div>
  )
}

export default Home
