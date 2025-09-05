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
    const [savedItems, setSavedItems] = useState([]);
    const [eduStartDate, setEduStartDate] = useState ('');
    const [eduEndDate, setEduEndDate] = useState ('');
    const [location, setLocation] = useState(''); 
    const [comanyName, setCompanyName] = useState('');
    const [positionName, setPositionName] = useState('');
    const [saveExperience, setSaveExperience] = useState(false);
    const [savedExperienceItems, setSavedExperienceItems] = useState([]);
    const [expStartDate, setExpStartDate] = useState ('');
    const [expEndDate, setExpEndDate] = useState ('');
    const [expLocation, setExpLocation] = useState(''); 
    return ( 
    <>
      <div className = "leftSection">
        <header className = "leftHeader">Resume Builder</header>
        <GeneralInfo
        save = {save}
        setSave = {setSave}
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
        setEduStartDate = {setEduStartDate}
        setEduEndDate = {setEduEndDate}
        setLocation = {setLocation}
                />
  
        <Experience 
        comanyName = {comanyName}
        setCompanyName={setCompanyName}
        positionName = {positionName} 
        setPositionName={setPositionName}
        saveExperience = {saveExperience}
        setSaveExperience = {setSaveExperience}
        savedExperienceItems = {savedExperienceItems}
        setSavedExperienceItems = {setSavedExperienceItems}
        setExpStartDate = {setExpStartDate}
        setExpEndDate = {setExpEndDate}
        setExpLocation={setExpLocation}
        />
      </div>
      <Display 
      name = {name}
      email = {email}
      number = {number}
      save = {save}
      savedItems = {savedItems}
      eduStartDate = {eduStartDate}
      eduEndDate = {eduEndDate}
      location = {location}
      />

    </>
    
  )
}

export default App
