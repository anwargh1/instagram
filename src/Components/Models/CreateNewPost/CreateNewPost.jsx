import React ,{useState}from 'react';
import './createNewPost.css';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios'
const CreateNewPost = ({isOpen , close ,setPostsData}) => {
  const [description, setdescription] = useState("")
  const [image, setImage] = useState(null)
  const [imageCover, setImageCover] = useState(null);


  const token=localStorage.getItem('token')

  const handleClose =()=>{
    close(false)
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  let formData = new FormData();
  formData.append("description", description)
  formData.append("image", image)

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      console.log(response.data);
      setPostsData((prevPosts) => [response.data, ...prevPosts])
    }).catch((error) => {
      console.log("Error:", error)
    })

    handleClose()
  }

  if(isOpen){
    return (
      <div className="background">
        <AiOutlineClose className="background-close-icon"  onClick={handleClose}/>
        <div className="create-model">
          <h4>Create new post</h4>
          <div className="group-input">
            <div className="input-flex">
              <label>Description :</label>
              <textarea type="text" className="body-textarea" value={description} onChange={(e)=>{
                setdescription(e.target.value)
              }} />
            </div>
            {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: "40%" ,height: "80px" ,objectFit:'cover' }}
            />
          )}
            <div>
           
              <label for="avatar" class="custom-file-upload">
                <span class="upload-icon">Select from computer</span>
              </label>
              <input
                type="file"
                id="avatar"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />{' '}
            </div>
            <button className="post-action" onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </div>
    );
  } else <></>
 
};

export default CreateNewPost;
