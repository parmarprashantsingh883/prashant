import React, { useState } from 'react'

function Number() {
    const [count, setcount] = useState(0)
  return (
    <div>
        <h3>the value is {count}</h3>
        
         <button className='btn btn-primary mx-4 my-5 my-5' onClick={()=>setcount(count+1)}> add</button>
          <button className='btn btn-primary mx-4 my-5 my-5' onClick={()=>setcount(count-1)}> remove</button>
           <button className='btn btn-primary mx-4 my-5 my-5' onClick={()=>setcount(count*5)}> multi by 5</button>
           <button className='btn btn-primary mx-4 my-5 my-5' onClick={()=>setcount(0)}> Reset</button>
    </div>
  )
}

export default Number