import { useState } from 'react';
import '../styles/schooling.css';

export default function SchoolInfo({
  schoolName,
  setSchoolName,
  studyName,
  setStudyName,
  setSave,
  savedItems,
  setSavedItems,
  eduStartDate,
  eduEndDate,
  setEduStartDate,
  setEduEndDate,
  location,
  setLocation
}) {
  const [showBox, setShowBox] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    setSchoolName('');
    setStudyName('');
    setLocation('');
    setEduStartDate('');
    setEduEndDate('');
    setLocation('');
    setShowBox(!showBox);
  };

  const handleSaveClick = () => {
    setSave(true);
    if(editIndex === null) {
      setSavedItems((prevItems) => [...prevItems, { schoolName, studyName, eduStartDate, location, eduEndDate}]);
    }
    else {
      const updatedItems = [...savedItems];
      updatedItems[editIndex] = {schoolName, studyName, eduStartDate, eduEndDate, location};
      setSavedItems(updatedItems);
    }
    setShowBox(false);
    setEditIndex(null);
  };

  const format = {month: 'short', day: '2-digit', year: "numeric"};
  function parseLocalDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); 
  }

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
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" onChange={(e) => setEduStartDate(e.target.value !== '' ? parseLocalDate(e.target.value).toLocaleDateString('en-US', format) : '')}/>
            </div>
            <div className="input-col">
              <label htmlFor="endDate">End Date</label>
              <input type="date" id="endDate" onChange={(e) => setEduEndDate(e.target.value !== '' ? parseLocalDate(e.target.value).toLocaleDateString('en-US', format) : 'Present')}/>
            </div>
          </div>
          <div className='input-col'>

            <label htmlFor="location">Location</label>
            <input type="text" name = 'location' className='location' placeholder='Enter location' onChange = {(e) => setLocation(e.target.value)}/>
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
            <button
              className="edit"
              onClick={() => {
                const itemToEdit = savedItems[index];
                setSchoolName = (itemToEdit.schoolName);
                setStudyName = (itemToEdit.studyName);
                setEduStartDate = (itemToEdit.eduStartDate);
                setEduEndDate = (itemToEdit.eduEndDate);
                setLocation = (itemToEdit.location);
                setShowBox(true);
                setEditIndex(index);
              }}
            >
              Edit
            </button>
        </div>
      ))}
    </div>
  );
}
