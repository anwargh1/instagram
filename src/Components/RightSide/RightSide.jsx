import React from 'react'
import User from '../User/User'
import Suggestion from '../Suggestion/Suggestion'
import './rightSide.css'
import Footer from '../Footer/Footer'
const RightSide = ({users}) => {
  return (
    <div className='rigth-side'>
        <User/>
        <Suggestion users={users}/>
        <Footer/>
    </div>
  )
}

export default RightSide
