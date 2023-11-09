import React, { useState } from 'react'
import './login.css';

function Login() {
    const[name, setName] = useState("");
    const handleChange = (e) =>{(
        e.preventDefault()
    )} 
return (
    <div className='login'>
        <fieldset>
            <h2> Login form</h2>
            <form action="">
                <label htmlFor="">Username
                    <input type="text" placeholder='Enter name..........'/>
                </label>
                <label htmlFor="">Password
                    <input type="text" placeholder='Enter password***********'/>
                </label>
                <button type='submit' className='log' onClick={handleChange}>Login</button>
                
            </form>
        </fieldset>
    </div>
)
}
export default Login