import React from 'react';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faForwardStep} from "@fortawesome/free-solid-svg-icons";
import {faBackwardStep} from "@fortawesome/free-solid-svg-icons";
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";
export default function Player () { 
    let navigate = useNavigate();
    return (
        
        <div className='lgin'>
            <p className='Lyrics'>가사</p>
            <FontAwesomeIcon icon={faHouse} size="4x" color="blue" className="hous"/>
            <FontAwesomeIcon icon={faMagnifyingGlass}  size="4x"color="Gray"className="ehe"/>
            <FontAwesomeIcon icon={faPlay } size="4x" color="Gray" className="pl"/>
            <FontAwesomeIcon icon={faPlay } size="6x" color="Gray" className="ay"/>
            <FontAwesomeIcon icon={faForwardStep} size="6x" color="Gray"className="for"/>
            <FontAwesomeIcon icon={faBackwardStep} size="6x" color="Gray" className="bac"/>
            <FontAwesomeIcon icon={faArrowRightToBracket} size="4x" color="red" className ="Arr"/>
            <p className ="chl">최근들은곡</p>
        </div>
    );
}


