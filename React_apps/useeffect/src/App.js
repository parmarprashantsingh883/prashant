import { useEffect, useState } from "react";
import Side_work from "./Side_work";

function App() {
  const [age, setage] = useState(0)
  const update = () => {
    setage(age + 1)
  }
  const [name, setname] = useState()
  const nameupdate=()=>{
    setname("prashant")
  }
// useEffect(() => {
//   console.log(
//     'heloo'
//   );
  

//   return () => {
    
//   }
// }, [age])

  return (
    <>
      {/* <h1 className="">{age}</h1>
       <h1 className="">{name}</h1>
      
      <button className="btn btn-danger m-5 "onClick={update}> click me</button>
      
      <button className="btn btn-danger "onClick={nameupdate}> click me</button> */}

<Side_work/>


    </>
  );
}

export default App;
