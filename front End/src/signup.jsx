import React from 'react';
import {useNavigate} from 'react-router-dom'
import './signup.css'
import '../spotigram/instaAPI/migrations/_pycacke_/0001_initial.py'
export default function Signup() {
    let navigate = useNavigate();
    return (
        <div className='lgin'>
            <input type="email" placeholder='email'className='ema' />
            <input type="passwode"placeholder='password'className='pass' />
            <input type="passwode"placeholder='Confirm Password'className='wode' />
            <button className='signu' onClick={()=>{'0001_initial.py'} }>signup</button>
        </div>
    );
}


