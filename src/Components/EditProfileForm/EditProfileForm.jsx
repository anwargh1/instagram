import React ,{useState}from 'react';
import './editProfileForm.css'


const EditProfileForm = ({ user, onUpadte, isOpen, setUserData }) => {
  const [image, setImage] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('handleChange called with:', name, value);
    setUserData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
  if (isOpen) {
    return (
      <form className="edit-profile-form">
        <div className="form-group-edit">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-edit">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-edit">
          <label htmlFor="avatar" className="custom-file-upload">
            <span className="upload-icon">Select from computer</span>
          </label>
          <input
            type="file"
            id="avatar"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />{' '}
        </div>
        <div className="form-group-edit">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-edit">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button onClick={onUpadte}>Update Profile</button>
      </form>
    );
  } else {
    return null;
  }
};

export default EditProfileForm;
