import React, { useState } from 'react';
import './signup.css';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handelSignUp = e => {
    e.preventDefault();

    axios
      .post('http://16.170.173.197/users/signup', userData)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token)
        navigate('/home');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="signup-page">
        <div className="top-part">
          <div className="signup-image">
            <img src="../Images/androidScreen.png" alt="Android Screen" />
            <img src="../Images/iPhoneScreen.png" alt="IPhone Screen" />
          </div>

          <div className="signup-side">
            <div className="signup-box">
              <div className="signup-top-side">
                <div className="inst-logo">
                  <img
                    src="../Images/instagramLogo (2).png"
                    alt="instagram logo"
                  />
                </div>
                <p className="p-signup">
                  Sign up to see photos and videos from your friends.
                </p>
                <button className="signup-fac">
                  <RiFacebookBoxFill className="icon-facebook" /> Log in with
                  Facebook
                </button>
                <p className="or">OR</p>
              </div>
              <form className="form-signup">
                <input
                  type="email"
                  placeholder="Mobile Number or Email"
                  name="email"
                  value={userData.email}
                  onChange={e => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  required
                />
                <input type="text" placeholder="Full Name" />

                <input
                  type="text"
                  placeholder="UserName"
                  name="userName"
                  value={userData.userName}
                  onChange={e => {
                    setUserData({ ...userData, userName: e.target.value });
                  }}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={e => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                  required
                />
              </form>

              <p className="p-service-signup">
                People who use our service may have uploaded your contact
                information to Instagram.<span>Learn More</span>
              </p>

              <p className="p-policy">
                By signing up, you agree to our <span>Terms</span> ,{' '}
                <span>Privacy</span> <span>Policy</span> and{' '}
                <span>Cookies Policy </span>.
              </p>
              <button className="signup-action" onClick={handelSignUp}>
                Sign Up
              </button>
            </div>

            <div className="box-for-signup">
              <p>
                Have an account?{' '}
                <Link to="/">
                  <span>Log in</span>
                </Link>
              </p>
            </div>
            <div className="for-download">
              <p>Get the app.</p>
              <div>
                <img src="../Images/googleStore.png" alt="Google Store" />
                <img src="../Images/appStore.png" alt="App Store" />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="first">
            <p>Meta</p>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Help</p>
            <p>API</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p>
            <p>Instagram Lite</p>
            <p>Threads</p>
            <p>Contact Uploading & Non-Users</p>
            <p>Meta Verified</p>
          </div>
          <div className="secend">
            <p>
              English <BsChevronDown />{' '}
            </p>
            <p>© 2023 Instagram from Meta</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
