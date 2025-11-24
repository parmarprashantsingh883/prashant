==========================================tasks===========================================================================================import React, { useEffect } from 'react'

function Side_work() {
    useEffect(() => {
    
    
    
        
        console.log('side work component mounted');
    }, [])
    
  return (
    <div>
        <h1 className='text-danger'>
            wellcome to side work component
        </h1>
    </div>
  )
}

export default Side_work