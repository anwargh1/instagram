import React ,{useState ,useEffect} from 'react'
import TopSideProfile from '../../Components/TopSideProfile/TopSideProfile'
import './profile.css'
import Highlight from '../../Components/Highlight/Highlight'
import BottomSideProfile from '../../Components/BottomSideProfile/BottomSideProfile'
import LeftSide from '../../Components/LeftSide/LeftSide'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  // const handleDeleteUser = (postId) => {
  //   axios
  //     .request({
  //       method: "delete",
  //       url: `http://16.170.173.197/posts/${postId}`,
  //       data: {
  //         id: postId,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const updatedPosts= postsData.filter((post) => {
  //         return post.id !== postId;
  //       });
  //       setPostsData(updatedPosts);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Post Deleted',
  //         text: 'The post has been deleted successfully!',
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting post:", error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error',
  //         text: error.response.data.error,
  //       });
  //     });
  // };

  const handleEditUser = () => {

    const formData = new FormData();
    formData.append('id', userData.id);
    formData.append('bio', userData.bio);
    formData.append('userName', userData.userName);
    formData.append('status', userData.status);
    formData.append('password', userData.password);
    formData.append('avatar', userData.avatar);

    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/users`,
        formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully!',
        });
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.error,
        });
      });
  };
  return (
    <div className='profile' >
        <LeftSide/>
        <div className='profile-page'>
        <TopSideProfile setUserData={setUserData} onUpdate={handleEditUser}/>
        <Highlight/>
        <BottomSideProfile/>
        </div>
        
    </div>
  )
}

export default Profile
