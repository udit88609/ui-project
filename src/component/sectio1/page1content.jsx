import React from 'react'

import Rightcontent from './rightcontent'
import Leftcontent from './Leftcontent'
const Page1content = (props) => {
  return (
    <div className=' px-10 py-5 h-150 flex justify-between gap-5'> 
        <Leftcontent />
        <Rightcontent users={props.users} />

      
    </div>
  )
}

export default Page1content