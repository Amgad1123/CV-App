
import {useState} from 'react'
export default function Experience() {
    const [companyTitle, setCompanyTitle] = useState('')
    return (
        <>
            <h2>Experience</h2>
            <div class = "">
                <button class ="addExperience">+</button>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" id = "companyName" name = "companyName" value={companyTitle} onChange = {e => setCompanyTitle(e.target.value)}/>
                <label htmlFor="position">Position title: </label>
                <input type="text" name="position" id="position" />
            </div>
            <>
                <label htmlFor="responsibilities"></label>
                <textarea name="responsibilities" id="responsibilities"></textarea>
            </>
            <div class ="dates"> 
                <label htmlFor="startDate">Start Date: </label>
                <input type="date" id="startDate" name = "startDate"/>
                <label htmlFor="endDate">End Date: </label>
                <input type="date" id="endDate" name = "endDate"/>
            </div>
            <button id ='submit'>Submit</button>
            <button id = 'edit'>Edit</button>
        </>

    )
}