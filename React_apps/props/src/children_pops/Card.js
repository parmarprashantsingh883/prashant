import React from 'react'

function Card({children}) {
  return (
    <>
    <div className='card p-5  my-5'>
        {children}
    </div>
      
    </>
  )
}

export default Card