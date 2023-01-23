import React from 'react';
import './App.css'
import {useNavigate} from 'react-router-dom'

export default function Login()  {
    let navigate = useNavigate();
    return (
        <div className = 'lgin'>
            <button className='ogin' onClick={()=>{navigate('./main')}}>로그인</button>
            <h3 className='heading'>Sportygram</h3>
            <button className='sig' onClick={()=>{navigate('./signup')}}>회원가입</button>
            <input type="email" placeholder='아이디'className='em' />
            <input type="passwode"placeholder='비밀번호'className='si' />
            
        </div>
        
        
    );
}


