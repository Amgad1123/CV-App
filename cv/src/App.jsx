//import { useState } from 'react'
import './App.css' 
import  {useState} from 'react';
import GeneralInfo from './components/general'
import Display from  './components/preview'
import SchoolInfo from './components/schooling'
import Experience from './components/Experience'
function App() {
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState();  
  return ( 
    <>
      <div class = "leftSection">
        <header class = "leftHeader">Resume Builder</header>
        <GeneralInfo
        name = {name}
        setName = {setName}
        email =  {email}
        setEmail = {setEmail}
        number= {number}
        setNumber= {setNumber}
         />
      </div>
      <Display 
      name = {name}
      />
    </>
    
  )
}

export default App
