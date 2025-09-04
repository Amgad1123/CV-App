import { useState } from 'react';
import '../styles/schooling.css';

export default function SchoolInfo({
  schoolName,
  setSchoolName,
  studyName,
  setStudyName,
  save,
  setSave,
  savedItems,
  setSavedItems,
  eduStartDate,
  setEduStartDate,
  eduEndDate, 
  setEduEndDate
}) {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleSaveClick = () => {
    setSave(!save);
    setSavedItems((prevItems) => [...prevItems, { schoolName, studyName }]);
    setShowBox(false);
  };

  
  return (
    <div className="education">
      <h1 className="heading">Education</h1>

      <button
        className="addEducation"
        onClick={handleClick}
        style={{ backgroundColor: showBox ? 'red' : '#4a646c' }}
      >
        {showBox ? 'Cancel' : 'Add Education'}
      </button>

      <form
        className="schoolForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveClick();
        }}
      >
        <div
          className="school-input"
          style={{ display: showBox ? 'block' : 'none' }}
        >
          <div className="input-col">
            <label htmlFor="school">School/University*</label>
            <input
              value={schoolName}
              placeholder="Enter School Name"
              required
              type="text"
              id="school"
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>

          <div className="input-col">
            <label htmlFor="studyTitle">Degree*</label>
            <input
              type="text"
              id="studyTitle"
              placeholder="Enter Degree"
              required
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
            />
          </div>

          <div className="input-row-dates">
            <div className="input-col">
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate"  onChange={(e) => setEduStartDate(e.target.value)}/>
            </div>
            <div className="input-col">
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" onChange={(e) => setEduEndDate(e.target.value)}/>
            </div>
          </div>

          <div className="button-row">
            <button className="save" type="submit">Save</button>
            <button className="cancel" type="button" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </div>
      </form>

      {savedItems.map((item, index) => (
        <div key={index} className="educationContainer">
          <div className="named-wrapper">
                <p className="schoolName">{item.schoolName}</p>
                <p className="studyName">{item.studyName}</p>
            </div>
            <button
              className="delete"
              onClick={() => {
                const updatedItems = [...savedItems];
                updatedItems.splice(index, 1);
                setSavedItems(updatedItems);
              }}
            >
              Delete
            </button>
        </div>
      ))}
    </div>
  );
}
