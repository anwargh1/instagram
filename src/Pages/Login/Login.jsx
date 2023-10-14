import React, { useState } from 'react';
import './login.css';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handelLogin = e => {
    e.preventDefault();

    axios
      .post('http://16.170.173.197/users/login', userData)
      .then(response => {
        console.log(response.data);
        const token = response.data.token;
        const user = response.data.user;
        console.log(user);

        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        navigate('/home');
      })
      .catch(error => {
        console.log(error);
        console.log(userData)

      });
  };

  return (
    <div className="container">
      <div className="login-page">
        <div className="top-part">
          <div className="login-image">
            <img src="../Images/androidScreen.png" alt="Android Screen" />
            <img src="../Images/iPhoneScreen.png" alt="IPhone Screen" />
          </div>

          <div className="login-side">
            <div className="login-box">
              <div className="login-top-side">
                <div className="inst-logo">
                  <img
                    src="../Images/instagramLogo (2).png"
                    alt="instagram logo"
                  />
                </div>
              </div>
              <form className="form-login">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={userData.email}
                  onChange={e => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={e => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                />
              </form>
              <button className="login-action" onClick={handelLogin}>
                Log in
              </button>
              <div className="test">
                <p className="or-login">OR</p>

                <button className="login-facebook">
                  <RiFacebookBoxFill className="icon-facebook" /> Log in with
                  Facebook
                </button>
              </div>
            </div>

            <div className="box-for-login">
              <p>
                Don't have an account?{' '}
                <Link to="/signup">
                  <span>Sign up</span>
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

export default Login;
