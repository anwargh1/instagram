import React from 'react'
import User from '../User/User'
import Suggestion from '../Suggestion/Suggestion'
import './rightSide.css'
import Footer from '../Footer/Footer'
const RightSide = () => {
  return (
    <div className='rigth-side'>
        <User/>
        <Suggestion/>
        <Footer/>
    </div>
  )
}

export default RightSide
