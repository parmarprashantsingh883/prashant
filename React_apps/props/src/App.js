import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "prashant",
    age: 21,
    address: {
      city: "ahm",
      area: "vastral",
    },
  });

  const update = () => {
    setUser({
      ...user, // copy outer object
      name: "aayushi",
      age: 20,
      email:"prashnat@gmail.com",
      phone:6854426625,
      address: {
        ...user.address, // copy inner object
        area: "maninagar", // update only area
      },
    });
  };
 
  const remove=()=>{
    const{age,address,...rest}=user
    setUser(rest)
  }
  // setUser(prev=>({
  //   ...prev, age:prev.age+2
  // }))
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user?.address?.city}</h3>
<h3>{user?.address?.area}</h3>

      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>

      <button onClick={update}>Update</button>
      <button onClick={remove}>remove the age</button>


    </>
  );
}

export default App;
