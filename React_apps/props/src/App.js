

import Childapp from './children_pops/Childapp';


function App() {
  localStorage.setItem("name","prashnat" ,"age","21")
  
    // const [name, setName] = useState("");
    // const [name, setName] = useState("");
  return (
    <>
    {/* <Task/> */}
{/* <Input/> */}
{/* <Todo/> */}
{/* <input value={name} onChange={e => setName(e.target.value)} />
    <p>Hello, {name}</p> */}

<Childapp/>

    </>
  )
}

export default App