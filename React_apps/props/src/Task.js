import React, { useState } from 'react'


function Task() {
  const [user, setuser] = useState({
  name: "Prashant",
  age: 21,
  address: {
    city: "Ahmedabad",
    area: "Vastral"
  }
}
);
const update=()=>{
  setuser({...user, name:"gattuu", age:user.age+1,address:{...user.address,city:"mumbai",area:"Ghatlodiya"}})
}
const increaseAge = () => {
  setuser({...user,age:user.age+5})
}
const moveToDelhi = () => {
 setuser({...user,address:{...user.address,city:"delhi",area:"Connaught Place"}})
}
  return (
    <>
    <h1>{user.name}</h1>
     <h1>{user.age}</h1>
      <h1>{user.address.area}</h1>
        <h1>{user.address.city}</h1>
        <button onClick={update}>change city</button>
        <button onClick={increaseAge}>change age</button>
         <button onClick={moveToDelhi}>click</button>
       
    </>
  )
}

export default Task