import "../styles/schooling.css"
export default function SchoolInfo ({schoolName, setSchoolName, studyName, setStudyName}) {
    return ( 
        <div class = "education">
            <h1 class = "heading">Education</h1>
            <form class ="schoolForm" onSubmit= {(e) => {
            e.preventDefault();

        }}>
                <button></button>
                <div className="school-input">
                    <div class = "input-col"> 
                        <label htmlFor="school">School/University*</label>
                        <input value = {schoolName} type="text" id = "school" onChange = {e => setSchoolName(e.target.value)}/>
                    </div>
                    <div class = "input-col"> 
                        <label htmlFor="studyTitle">Study Title:</label>
                        <input type="text" id= "studyTitle" value={studyName} onChange = {e => setStudyName(e.target.value)}/>
                    </div>
                    <div class = "input-row-dates">
                        <div className="input-col">
                            <label htmlFor="startDate">Start Date: </label>
                            <input type="date" id="startDate"/>
                        </div>
                        <div className="input-col">
                            <label htmlFor="endDate">End Date: </label>
                            <input type="date" id="endDate"/>
                        </div>
                    </div>

                </div>
                <div className="button-row">
                    <button className="save">Save</button>
                    <button class="cancel">Cancel</button>
                </div>
            </form>       
        </div>
    )
}