import React from 'react';
import {useNavigate} from 'react-router-dom'
export default function Signup() {
    let navigate = useNavigate();
    return (
        <div>
            <input type="email" placeholder='이메일주소'className='ema' />
            <input type="email" placeholder='이메일주소 확인'className='emai' />
            <input type="passwode"placeholder='비밀번호'className='pass' />
            <input type="passwode"placeholder='비밀번호 확인'className='wode' />
            <button className='signu' onClick={()=>{navigate('/')} }>회원가입</button>
        </div>
    );
}


