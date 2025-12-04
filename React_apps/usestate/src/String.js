import React, { useState } from 'react'

function String() {
    const [name, setname] = useState("prashant")
  return (
    <div>
        <h3> The user name is:  {name}</h3>
        <button className='btn btn-danger' onClick={()=>setname("aayush")}>change the user</button>
    </div>
  )
}

export default String