import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './curd/Students'
import StudentView from './curd/StudentView'
import StudentForm from './curd/StudentForm'
// import Task from './Task'
// import Students from './Students'
// import StudentEdit from './StudentEdit'
// import Studentadd from './Studentadd'
// import StudentView from "./Studentview"
// import SearchApi from './SearchApi'
import Search from './Search'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* * <Route path="/" element={<Students />} /> */}
      {/* <Route path="/studentview/:id" element={<StudentView />} />

      <Route path="/studentadd" element={<Studentadd />} />
      <Route path="/studentEdit/:id" element={<StudentEdit />} />
      <Route path="/SearchApi" element={<SearchApi />} />
      <Route path="/Search" element={<Search />} />  */}

      {/* ======================================= */}
       <Route path="/" element={<Students/>}/>
        <Route path="/Studentview" element={<StudentView/>}/>
         <Route path="/Studentform" element={<StudentForm/>}/>
         {/* <Route path="/task" element={<Task/>}/> */}
          <Route path="/Search" element={<Search />} /> 


    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
