import React ,{useEffect ,useState}from 'react'
import './bottomSideProfile.css'
import axios from 'axios'
import {LiaTableSolid} from 'react-icons/lia'
import {MdOutlineSlideshow} from 'react-icons/md'
import {HiOutlineBookmark} from 'react-icons/hi2'
import {BsPersonVideo} from 'react-icons/bs'
import UserPosts from '../UserPosts/UserPosts'

const BottomSideProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
 

  const handelGetPosts =()=>{
    axios.post(`http://16.170.173.197/posts/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setUserPosts(response.data.posts)
    }).catch((error) => {
      console.log("Error", error)
    })
  }

  useEffect(()=>{
    handelGetPosts();
  },[])

  return (
    <div className='bottom-side-profile'>
            <div className='interactions-user'>
                <div><LiaTableSolid/><p>POSTS</p></div>
                <div><MdOutlineSlideshow/><p>REELS</p></div>
                <div><HiOutlineBookmark/><p>SAVED</p></div>
                <div><BsPersonVideo/><p>TAGGED</p></div>
            </div>
            <UserPosts userPosts={userPosts}/>
    </div>
  )
}

export default BottomSideProfile
