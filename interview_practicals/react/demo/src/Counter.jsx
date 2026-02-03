import React, { useState } from 'react'



function Counter() {
  const [number, setnumber] = useState(0)
   return (
    <div>
        <h1>Counter App</h1>
        <h2>{number}</h2>
        <button onClick={() => setnumber(prev => prev + 1)}>
  Add
</button>

<button onClick={() => setnumber(prev => prev - 1)}>
  Remove
</button>

    </div>
  )
}

export default Counter