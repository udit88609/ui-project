import React from 'react'
import Section1 from './component/sectio1/section1'
import Section2 from './component/section2/section2'
const App = () => {
  const users= [
    {
      img:'https://imgs.search.brave.com/EpHsP2BWKRT3tIlSpgZ1cYBsd5C6WMwvVR1tpWdJG98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9wb3J0cmFp/dC1zbWlsaW5nLWNh/dWNhc2lhbi1idXNp/bmVzc3dvbWFuLWNv/cnBvcmF0ZS02MDBu/dy0yNzYwMDMyNzk3/LmpwZw ',
      intro:'',
      Tag:'satisfied',
      color:'lightblue'
    },
      {
      img:'https://imgs.search.brave.com/PXKSrxMuIc1VWEWapwAu6jiDvZgJb2YWI0DMFxsxrg0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvODEx/MTc5NC9wZXhlbHMt/cGhvdG8tODExMTc5/NC5qcGVnP2NzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw ',
      intro:'',
      Tag:' underserved',
      color:'lightgreen'
    },
      {
      img:'https://imgs.search.brave.com/ru7mhwYArLwbukjYzCErfThchcVA38lHSeM-2DwkBYM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTkx/MTUyMTY5NS9waG90/by9zdWNjZXNzZnVs/LWJ1c2luZXNzbWFu/LWluLW1vZGVybi1v/ZmZpY2Utd29ya2lu/Zy1vbi1sYXB0b3Au/anBnP3M9NjEyeDYx/MiZ3PWdpJms9MjAm/Yz1PYVpkelpkbUdf/RVlZbVBKOUlNX3Vl/a1ZmNERfOXhMX0NM/MmYxaEY1R3FJPQ ',
      intro:'',
      Tag:'underbanked',
      color:'babepink'
    },
  
   
  ]
  return (
    <div >
      <Section1 users={users}/>
      <Section2 />
      
    </div>
  )
}

export default App
