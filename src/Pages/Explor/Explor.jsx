import React from 'react'
import './explor.css'
import ExplorSide from '../../Components/ExplorSide/ExplorSide'
import LeftSide from '../../Components/LeftSide/LeftSide'

const Explor = () => {
  return (
    <div className='explor'>
          <LeftSide/>
          <ExplorSide/>
    </div>
  )
}

export default Explor
