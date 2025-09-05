
import "../styles/preview.css"
export default function display ({
  name, 
  email,
  number,
  save,
  savedItems,
  eduStartDate,
  eduEndDate,
  location
}) {
  let formttedStartDate = '';
  let formattedEndDate = 'Present';
  if (eduStartDate !== '') {
    const format = {month: 'short', day: '2-digit', year: "numeric"};
   formttedStartDate = new Date(eduStartDate).toLocaleDateString('en-US', format)
   formattedEndDate = new Date(eduEndDate).toLocaleDateString('en-US', format)
  }
  
    return ( 
        <div class = "rightSection">
          <h1>{name}</h1>
          <div class = "subHeader">
            <p>{email}</p>
            <span>-</span>
            <p>{number}</p>
          </div>

        <div className="line"></div>
        {save && (
          <>
            <h2 className="educationPreview">Education</h2>
            <div className="headerLine"></div>
            </>)}
        
        {savedItems.map((item, index) => (
        <div key = {index} className="eduCard">
          <div className="education-wrapper">
            <p className="degree"><strong>{item.studyName}</strong></p>
            <p className="dates">{formttedStartDate} - {formattedEndDate}</p>
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