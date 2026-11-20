import React from 'react'
import { ArrowRight } from 'lucide-react';
import Rightcardcontent from './rightcardcontent';


const Rightcard = (props) => {
  return (
    <div className='flex gap-10 flex-nowrap '>
    <Rightcardcontent img ={props.img}
                       tag={props.tag}
                       id={props.id}
                       color={props.color}/>
   
    
    </div>
  )
}

export default Rightcard
