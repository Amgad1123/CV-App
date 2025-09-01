//import { useState } from 'react'
import './App.css' 
import GeneralInfo from './components/general'
import SchoolInfo from './components/schooling'
import Experience from './components/Experience'
function App() {


  return (
    <>
    <h1>Resume</h1>
      <GeneralInfo />
      <SchoolInfo />
      <Experience />
    </>
    
  )
}

export default App
