import React, { useState } from 'react'

function Arrays() {
  const [numbers, setNumbers] = useState([1, 2, 3, 5]);
  const [numbers2, setNumbers2] = useState([10, 20, 30, 2]);

  return (
    <div>
      <h2>{numbers}</h2>
      <h2>The new element is added: {numbers2}</h2>

      <button
        className='btn btn-danger'
        onClick={() => {
          setNumbers2(prev => [...prev, 40])
        }}
      >
        add num
      </button>

      <button
        className='btn btn-danger'
        onClick={() => {
          setNumbers(prev => prev.filter(n => n !== 2))
        }}
      >
        Remove by value
      </button>

      <button
        className='btn btn-danger'
        onClick={() => {
          setNumbers(prev => prev.filter((_, i) => i !== 1))
        }}
      >
        Remove by index
      </button>
    </div>
  )
}

export default Arrays
