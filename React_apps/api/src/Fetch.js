import React from 'react'
import axios from "axios";


function Fetch() {
  

  const  getdata= async()=>{
    const resopnse=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await resopnse.json()
  console.log(data);
  
    
  // console.log(resopnse);
 };
 
  return (
   <>
  <button onClick={getdata}> get data</button>
   </>
  )
}

export default Fetch