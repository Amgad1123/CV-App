
import "../styles/preview.css"
export default function display ({name, email,number, studyName, schoolName}) {
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
      </div>
    )
}