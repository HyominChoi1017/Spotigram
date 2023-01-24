import React from 'react';
import './App.css'
import {useNavigate} from 'react-router-dom'

export default function Login()  {
    let navigate = useNavigate();
    return (
        <div className = 'lgin'>
            <button className='ogin' onClick={()=>{navigate('./main')}}>signin</button>
            <h3 className='heading'>Sportygram</h3>
            <button className='sig' onClick={()=>{navigate('./signup')}}>signup</button>
            <input type="email" placeholder='email'className='em' />
            <input type="password"placeholder='password'className='si' />
            
        </div>
        
        
    );
}


