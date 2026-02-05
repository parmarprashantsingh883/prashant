import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Students() {
 
  const [students, setstudents] = useState([])
 useEffect(() => {
   axios.get("http://localhost:3001/students")
   .then(res=>setstudents(res.data))
    .catch(err=>console.log(err))
   
 }, [])
 
  return (
    <div style={{ padding: 20 }}>
      <h2>Students List</h2>
 <Link to={"/Studentform"}>
      <button style={{ marginBottom: 10 }}>
        Add Student
      </button>
</Link>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
         {students.map((s,idx)=>{
            <tr key={s.idx}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>
                <Link to={`/Studentview${s.id}`}>
                <button>View</button>
                </Link>
               <Link to={`/Studentedit${s.id}`}>
                <button>edit</button>
                </Link>
                <button onClick={()=>handledelet(s.id)}>Delete</button>
              </td>
            </tr>
         })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
