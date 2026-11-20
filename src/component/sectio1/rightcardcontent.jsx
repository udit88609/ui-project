import React from 'react'
import { ArrowRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
   
     <div className='h-full w-70 shrink-0 bg-amber-200 relative  overflow-hidden rounded-3xl'>
      <img className='h-128 w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'> 
       <h2 className='rounded-full  m- bg-amber-50 h-12 w-12 font-bold text-2xl flex items-center justify-center'> {props.id+1}</h2>
       <div>
       <p  className='text-lg text-white text-shadow-2xs leading-loose mb-5'>Lorem ipsum dolor sit amet. ipsum dolor sit, amet consectetur adipisicing elit. Sequi, totam.</p>
      
       <div className='flex justify-between py-2 '>
        <button style={{backgroundColor:props.color}}className= 'rounded-full px-7  text-lg'>{props.tag}</button>
        <button className=' text-white  rounded-full px-4 py-2 text-lg'><ArrowRight /></button>
       </div>
       </div>
      </div>
    
    </div>
    
  )
}

export default Rightcardcontent
