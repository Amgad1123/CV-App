
import "../styles/preview.css"
export default function display ({
  name, 
  email,
  number,
  savedItems,
  eduStartDate,
  eduEndDate
}) {
  const format = {month: 'short', day: '2-digit', year: "numeric"};
  const formttedStartDate = new Date(eduStartDate).toLocaleDateString('en-US', format)
  const formattedEndDate = new Date(eduEndDate).toLocaleDateString('en-US', format)
    return ( 
        <div class = "rightSection">
          <h1>{name}</h1>
          <div class = "subHeader">
            <p>{email}</p>
            <span>-</span>
            <p>{number}</p>
          </div>

        <div className="line"></div>
        <h2 className="educationPreview">Education</h2>
        <div className="headerLine"></div>
        {savedItems.map((item, index) => (
        <div key = {index} className="eduCard">
        <div className="schoolDiv">
          <div className="education-wrapper">
            <p><strong>{item.studyName}</strong></p>
            <p className="subSchool">{item.schoolName}</p>
          </div>
          
          <p className="dates">{formttedStartDate} - {formattedEndDate}</p>
        </div>
        
      </div>
      ))} 
      </div>
      ) 
    }