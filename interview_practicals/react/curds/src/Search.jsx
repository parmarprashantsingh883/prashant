import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Search() {
    const [search, setsearch] = useState("")
    const [users, setusers] = useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>setusers(res.data))
      .catch(err=>console.log(err));
      
    

    }, [])
    const filtered=users.filter(user=> 
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    
  return (
    <div>
        <h2>seacrh bar</h2>
        <input type="search" 
        placeholder="Search..." 
        style={{width:250, height:50,borderRadius:"10px ", borderStyle:"none",marginBottom:"10px",backgroundColor:"lightgray"}} 
        value={search}
        onChange={(e=>{setsearch(e.target.value)})}


        
        />
        {filtered.map(user=>(
            
            <div 
            key={user.id}
            style={{
                border:"2px solid black",
                padding:"10px",
                marginBottom:"5px"
            }}
            >
                <strong>{user.name}</strong>
<button onClick={() => deleteUser(user.id)}>
  Delete
</button>

            </div>
            
        ))}
    </div>
  )
}

export default Search