import React from 'react'
import DirectLeftSide from '../../Components/DirectLeftSide/DirectLeftSide'
import DirectRightSide from '../../Components/DirectRightSide/DirectRightSide'
import LeftSide from '../../Components/LeftSide/LeftSide'

import './direct.css'
const Direct = () => {
  return (
    <div className='direct'>
          <LeftSide/>
        <DirectLeftSide/>
        <DirectRightSide/>
    </div>
  )
}

export default Direct
