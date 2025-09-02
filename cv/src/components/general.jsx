import "../styles/general.css"

export default function GeneralInfo({name, email, number, setName,setEmail,setNumber}) {   
     return (
        <div className="personalInfo">
            <h1 class ="title">Personal Details</h1>
            <form onSubmit= {(e) => {
            e.preventDefault();}}>
            
            <div className="form-col">
                <label htmlFor="name">Name </label>
                <input 
                type = "text"
                value = {name}
                placeholder='Name' 
                onChange = {(e) => setName(e.target.value)} 
                    />
            </div>           
            <div className="form-col">
                <label htmlFor="email">Email: </label>
                <input type="text" id = 'email' 
                value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='Email'/>
            </div>       
            <div className="form-col">
                <label htmlFor="number">Phone-Number: </label>
                <input type="tel" id='number' placeholder = '000-000-0000' pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}' 
            value={number} onChange = {(e) => setNumber(e.target.value)}/>
            </div>       
            </form>
        </div>
    )
}

