import React from 'react';
import {useNavigate} from 'react-router-dom'
export default function Main () {
    let navigate = useNavigate();
    return (
        <div className='lgin'>
        <button className='writ' onClick={()=>{navigate('/writing')}}>글쓰기</button>
        <button className='writt' onClick={()=>{navigate('/eheqhrl')}}>검색</button>
        </div>
    );
}

