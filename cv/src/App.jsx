//import { useState } from 'react'
import './App.css' 
import  {useState} from 'react';
import GeneralInfo from './components/general'
import Display from  './components/preview'
import SchoolInfo from './components/schooling'
import Experience from './components/Experience'
function App() {
    const [name, setName] = useState('Name');
    const [email, setEmail] = useState('Email');
    const [number, setNumber] = useState('Number');  
    const [schoolName, setSchoolName] = useState('');
    const [studyName, setStudyName] = useState('');
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
        <SchoolInfo 
        schoolName={schoolName}  
        setSchoolName={setSchoolName} 
        studyName={studyName}
        setStudyName={setStudyName}
                />
      </div>
      <Display 
      name = {name}
      email = {email}
      number = {number}
      />

    </>
    
  )
}

export default App
