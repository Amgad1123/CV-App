
import "../styles/preview.css"
export default function display ({name, email,number, studyName, schoolName, savedItems}) {
    return ( 
        <div class = "rightSection">
          <h1>{name}</h1>
          <div class = "subHeader">
            <p>{email}</p>
            <span>-</span>
            <p>{number}</p>
          </div>

        <div className="line"></div>
        <p>Add Education Experience and more!</p>
        <h2 className="educationPreview">Education</h2>
        {savedItems.map((item, index) => (
        <div key = {index} className="eduCard">
        <div className="schoolDiv">
          <div className="education-wrapper">
            <p><strong>{item.studyName}</strong></p>
            <p className="subSchool">{item.schoolName}</p>
          </div>
          
          <p className="dates">Sep 2025 - Sep 2025</p>
        </div>
        
      </div>
      ))} 
      </div>
      ) 
    }