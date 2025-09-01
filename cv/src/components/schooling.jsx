import {useState} from 'react'
import "../styles/schooling.css"
export default function SchoolInfo () {
    const [schoolName, setSchoolName] = useState('');
    const [studyName, setStudyName] = useState('');
    return ( 
        <>
            <h2 class = "heading">School Experience</h2>
            <form class ="schoolForm" onSubmit= {(e) => {
            e.preventDefault();

        }}>
            <div>
                <label htmlFor="school">School Name: </label>
                <input value = {schoolName} type="text" id = "school" onChange = {e => setSchoolName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="studyTitle">Study Title:</label>
                <input type="text" id= "studyTitle" value={studyName} onChange = {e => setStudyName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" id="startDate"/>
            </div>
            <div>
                <label htmlFor="endDate">End Date: </label>
                <input type="date" id="endDate"/>
            </div>
        </form>

        </>
    )
}