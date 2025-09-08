
import "../styles/preview.css"
export default function display ({
  name, 
  email,
  number,
  save,
  savedItems,
  savedExperienceItems,
  saveExperience,

}) {
  
    return ( 
        <div class = "rightSection">
          <h1>{name}</h1>
          <div class = "subHeader">
            <p>{email}</p>
            <span>-</span>
            <p>{number}</p>
          </div>

        <div className="line"></div>
        {saveExperience && (
          <>
            <h2 className="experiencePreview">Experience</h2>
            <div className="headerLine"></div>
            </>)}
        
        {savedExperienceItems.map((item, index) => (
        <div key = {index} className="expCard">
          <div className="experience-wrapper">
            <p className="company"><strong>{item.companyName}</strong></p>
            <p className="dates">{item.expStartDate} - {item.expEndDate}</p>
          </div>
            <div className="experience-wrapper2">
              <p className="subCompany">{item.positionName}</p>
              <p className="location"><i>{item.expLocation}</i></p>
            </div>
            <p className = "description">{item.description}</p>
                       
      </div>
      ))} 
     
        {save && (
          <>
            <h2 className="educationPreview">Education</h2>
            <div className="headerLine"></div>
            </>)}
        
        {savedItems.map((item, index) => (
        <div key = {index} className="eduCard">
          <div className="education-wrapper">
            <p className="degree"><strong>{item.studyName}</strong></p>
            <p className="dates">{item.eduStartDate} - {item.eduEndDate}</p>
          </div>
            <div className="education-wrapper2">
              <p className="subSchool">{item.schoolName}</p>
              <p className="location"><i>{item.location}</i></p>
            </div>
        
      </div>
      ))}
      </div>
    )
  }
    