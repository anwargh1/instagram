import React from 'react'
import './more.css' 
import { Navigate, useNavigate } from "react-router-dom";

const More = ({isOpen ,close}) => {
  const navigate = useNavigate();

  const handleClose =()=>{
    close(false)
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");

  };

  if(isOpen){
    return (
      <div className="more-container" onClick={handleClose}>
        <button className="more-button" onClick={handleLogout}>Logout</button>
      </div>
    )
  }else <></>
 
}

export default More
