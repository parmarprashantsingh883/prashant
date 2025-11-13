import { useState } from "react";

function App() {

  const [num, setnum] = useState(0)

  const Update=()=>{
    setnum(num+1)
  }
   const update2=()=>{
    setnum(num-1)
  }
  

  return (
   <>
   <h1>{num}</h1>
   <button onClick={Update}>add</button>
    <button onClick={update2}>remove</button>
   </>
  );
}

export default App;
