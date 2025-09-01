import { useState } from 'react';
import "../styles/general.css"
/*function addName () {
    const [name, setName] = useState('');
}*/

/*export default function MyComponent(){
    return (
        <div>
        <h2>Hello from my component</h2>
        </div>
    );
}*/

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <>
        <form onSubmit= {(e) => {
            e.preventDefault();

        }}>
            <label htmlFor="name">Name: </label>
            <input 
            type = "text"
            value = {name}
            placeholder='Name' 
            onChange = {e => setName(e.target.value)} 
                />
            <label htmlFor="email">Email: </label>
            <input type="text" id = 'name' value = {email} onChange = {e => setEmail(e.target.value)} placeholder='Email'/>
            <label htmlFor="number">Phone-Number: </label>
            <input type="tel" id='number' placeholder = '000-000-0000' pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}'/>

            </form>
        </>
    )
}

