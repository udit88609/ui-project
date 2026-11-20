import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props.users);
  return (
    <div id='card' className='h-full flex gap-10 overflow-x-auto  w-2/3  p-6'> 
     {props.users.map(function(elem,idx){
      return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.Tag}
      color={elem.color}/>

     })}
    </div>
  )
}

export default Rightcontent
