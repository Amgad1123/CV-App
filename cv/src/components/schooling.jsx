import {useState} from 'react'
import "../styles/schooling.css"

export default function SchoolInfo ({schoolName, setSchoolName, studyName, setStudyName, save, setSave}) {
    const [showBox, setShowBox] = useState(false)

    const handleClick = () => {
        setShowBox(!showBox);
    }

    const handleSaveClick = () => {
        setSave(!save);
        setShowBox(!showBox);
    }

    return ( 
        <div class = "education">
            <h1 class = "heading">Education</h1>
            <button class ="addEducation" onClick={handleClick} 
                style = {{backgroundColor: showBox ? "red" : "#4a646c"}}>{showBox ? "Cancel" : "Add Education"}</button>
            <form class ="schoolForm" onSubmit= {(e) => {
            e.preventDefault();

        }}>
                <div className="school-input" 
                style = {{display: showBox ? "block" : "none"}}
                >
                    <div class = "input-col"> 
                        <label htmlFor="school">School/University*</label>
                        <input value = {schoolName} placeholder='Enter School Name' required type="text" id = "school" onChange = {e => setSchoolName(e.target.value)}/>
                    </div>
                    <div class = "input-col"> 
                        <label htmlFor="studyTitle">Degree*</label>
                        <input type="text" id= "studyTitle" placeholder='Enter Degree' required value={studyName} onChange = {e => setStudyName(e.target.value)}/>
                    </div>
                    <div class = "input-row-dates">
                        <div className="input-col">
                            <label htmlFor="startDate">Start Date: </label>
                            <input type="date" id="startDate" required/>
                        </div>
                        <div className="input-col">
                            <label htmlFor="endDate">End Date: </label>
                            <input type="date" id="endDate" required/>
                        </div>
                    </div>
                    <div className="button-row">
                        <button className="save" onClick={handleSaveClick}>Save</button>
                        <button class="cancel" onClick = {handleClick}>Cancel</button>
                    </div>
                </div>
                
            </form>   
            <div class = "educationContainer" 
            style = {{display: save ? "flex" : "none"}}
            >  
                <div className="name-wrapper">
                    <p class = "schoolName">{schoolName}</p>
                    <p class = "studyName">{studyName}</p>
                </div>
               
                <button class="delete">Delete</button>
            </div>    
        </div>
    )
}