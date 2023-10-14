import React ,{useState ,useEffect} from 'react'
import Content from '../../Components/Content/Content'
import RightSide from '../../Components/RightSide/RightSide'
import LeftSide from '../../Components/LeftSide/LeftSide'
import './home.css'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const Home = () => {
  const [postsData, setPostsData] = useState([]);
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handelGetData =()=>{
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setPostsData(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching memories", error)
    })
  }

  useEffect(()=>{
    handelGetData();
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

  return (
    <div className='home'>
        <LeftSide setPostsData={setPostsData}/>
        <Content postsData={postsData} onDelete={handleDeletePost} onChange={handleEditPost}/>
        <RightSide/> 
    </div>
  )
}

export default Home
