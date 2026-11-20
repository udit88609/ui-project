import React from 'react'

import Arrow from './Arrow';
import Lefttext from './lefttext';

const Leftcontent = () => {
  return (
    <div className='h-full  w-1/3 px-5 py-5 flex flex-col justify-between' >  
   
     <Lefttext />
       <Arrow />
    </div>
  )
}

export default Leftcontent
