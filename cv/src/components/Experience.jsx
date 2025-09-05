import { useState } from 'react';
import '../styles/experience.css';

export default function Experience({
    companyName, 
    setCompanyName,
    positionName,
    setPositionName,
    setSaveExperience,
    savedExperienceItems,
    setSavedExperienceItems,
    setExpStartDate,
    setExpEndDate,
    setExpLocation,
    setDescription
}) {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleSaveClick = () => {
    setSaveExperience(true);
    setSavedExperienceItems((prevItems) => [...prevItems, { companyName, positionName }]);
    setShowBox(false);
  };

  
  return (
    <div className="experience">
      <h1 className="heading">Experience</h1>

      <button
        className="addExperience"
        onClick={handleClick}
        style={{ backgroundColor: showBox ? 'red' : '#4a646c' }}
      >
        {showBox ? 'Cancel' : 'Add Experience'}
      </button>

      <form
        className="experienceForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveClick();
        }}
      >
        <div
          className="experience-input"
          style={{ display: showBox ? 'block' : 'none' }}
        >
          <div className="input-col">
            <label htmlFor="experience">Company Name*</label>
            <input
              value={companyName}
              placeholder="Enter company name"
              required
              type="text"
              id="company"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="input-col">
            <label htmlFor="positionTitle">Position Title*</label>
            <input
              type="text"
              id="positionTitle"
              placeholder="Enter job title"
              required
              value={positionName}
              onChange={(e) => setPositionName(e.target.value)}
            />
          </div>

          <div className="input-row-dates">
            <div className="input-col">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate"  onChange={(e) => setExpStartDate(e.target.value)}/>
            </div>
            <div className="input-col">
              <label htmlFor="endDate">End Date</label>
              <input type="date" id="endDate" onChange={(e) => setExpEndDate(e.target.value)}/>
            </div>
          </div>
          <div className='input-col'>
            <label htmlFor="location">Location</label>
            <input type="text" name = 'location' className='location' placeholder='Enter location' onChange = {(e) => setExpLocation(e.target.value)}/>
        </div>
        <div className="input-col">
            <label htmlFor="description">Description</label>
            <textarea name="Description" id="description" onChange={(e) => setDescription (e.target.value)}></textarea>
        </div>
          <div className="button-row">
            <button className="save" type="submit">Save</button>
            <button className="cancel" type="button" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </div>
      </form>
        
      {savedExperienceItems.map((item, index) => (
        <div key={index} className="educationContainer">
          <div className="named-wrapper">
                <p className="companyName">{item.companyName}</p>
                <p className="positionName">{item.positionName}</p>
            </div>
            <button
              className="delete"
              onClick={() => {
                const updatedItems = [...savedExperienceItems];
                updatedItems.splice(index, 1);
                setSavedExperienceItems(updatedItems);
              }}
            >
              Delete
            </button>
        </div>
      ))}
    </div>
  );
}
