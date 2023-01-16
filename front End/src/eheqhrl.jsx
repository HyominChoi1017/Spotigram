import React from 'react';
import {useNavigate} from 'react-router-dom'
export default function Eheqhrl()  {
    let navigate = useNavigate();
    return (
        <div>
            <input type="text" className='search' placeholder='검색'/>
            <div className='topp'>탑100차트</div>
            
            <div className='lately'>최근에 발매된 앨범</div>
            <div className='rec'>Spotigram 추천 아티스트</div>
            <button className='oginn' onClick={()=>{navigate('./main')}}>홈</button>
        </div>
    );
}
