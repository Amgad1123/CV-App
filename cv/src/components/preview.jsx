
import "../styles/preview.css"
export default function display ({
  name, 
  email,
  number,
  save,
  savedItems,
  eduStartDate,
  eduEndDate,
  location,
  saveExperience,
  savedExperienceItems,
  expStartDate,
  expEndDate,
  expLocation,
  description

}) {
  const format = {month: 'short', day: '2-digit', year: "numeric"};
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
            <p className="dates">{expStartDate !== '' ? new Date(expStartDate).toLocaleDateString('en-US', format) : ''} - { expEndDate ==! '' ? new Date(expEndDate).toLocaleDateString('en-US', format) : 'Present'}</p>
          </div>
            <div className="experience-wrapper2">
              <p className="subCompany">{item.positionName}</p>
              <p className="location"><i>{expLocation}</i></p>
            </div>
            <p className = "description">{description}</p>
                       
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
            <p className="dates">{eduStartDate !== '' ? new Date(eduStartDate).toLocaleDateString('en-US', format) : ''} - { eduEndDate ==! '' ? new Date(eduEndDate).toLocaleDateString('en-US', format) : 'Present'}</p>
          </div>
            <div className="education-wrapper2">
              <p className="subSchool">{item.schoolName}</p>
              <p className="location"><i>{location}</i></p>
            </div>
        
      </div>
      ))}
      </div>
    )
  }
    