import React, { useState } from 'react'


function Input() {
const [name, setname] = useState()
  return (
    <div>
        <h1>my name is:{name}</h1>
        <input value={name} onChange={(e)=>{
            setname(e.target.value)
        }}></input>
    </div>
  )
}

export default Input