//import { useState } from 'react'
import './App.css' 
import  {useState} from 'react';
import GeneralInfo from './components/general'
import Display from  './components/preview'
import SchoolInfo from './components/schooling'
import Experience from './components/Experience'
function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');  
    const [schoolName, setSchoolName] = useState('');
    const [studyName, setStudyName] = useState('');
    const [save, setSave] = useState(false);
    const [savedItems, setSavedItems] = useState([])
    //const [eduDate, set]
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
        save = {save}
        setSave = {setSave}
        savedItems = {savedItems}
        setSavedItems = {setSavedItems}
                />
      </div>
      <Display 
      name = {name}
      email = {email}
      number = {number}
      schoolName = {schoolName}
      studyName = {studyName}
      save = {save}
      savedItems = {savedItems}
      />

    </>
    
  )
}

export default App
