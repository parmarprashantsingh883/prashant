import React, { useState } from 'react'
function Boolean() {
     const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
<button className='btn btn-dark' onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>

      {isVisible && <p>Hello!</p>}
    </div>
  )
}

export default Boolean