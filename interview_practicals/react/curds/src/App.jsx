import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './Students'
import StudentEdit from './StudentEdit'
import Studentadd from './Studentadd'
import StudentView from "./Studentview";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Students />} />
<Route path="/studentview/:id" element={<StudentView />} />

      <Route path="/studentadd" element={<Studentadd />} />
      <Route path="/studentEdit/:id" element={<StudentEdit />} />


    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
