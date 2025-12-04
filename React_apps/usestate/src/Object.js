import React, { useState } from 'react'

function Object() {
    const [user, setUser] = useState({
    name: "Prashant",
    age: 22,
    email: "prashant@example.com",
    address:{
        city:"ahm",
        area:"vastral",
        pincode:382418
    }
  });
  return (
   
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
       <p>city: {user.address.city}</p>
        <p>area: {user.address.area}</p>
         <p>pincode: {user.address.pincode}</p>
      <button className='btn btn-danger' onClick={()=>setUser(prev=>({
        ...prev,name:"aayush"
      }))}> change name</button>
      <button className='btn btn-danger mx-4' onClick={()=>setUser(prev=>({
        ...prev,name:"maya",age:25
      }))}> change name,age</button>
      <button className='btn btn-danger mx-4' onClick={()=>setUser(prev=>({
        ...prev, "address":{...prev.address,city:"mumbai" ,pincode:520852}
      }))}> city & pincode</button>
      <button className='btn btn-danger mx-4' onClick={()=>setUser(prev=>({
        ...prev,name:"aayushii",email:"aayushii@123.com", age:20, address:{...prev.address,city:"ahmedabad" ,pincode:382418,area:"mahadevnagar"}
      }))}> all </button>
    </>
  )
}

export default Object