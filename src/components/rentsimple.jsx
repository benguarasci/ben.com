import React from 'react';
import './base.css';
import screenshot from "./assets/rentsimple_screenshot.png"


const Rentsimple = ({ open,onClose }) => {
        if(!open) return null
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src={screenshot}/>
                <div className="modalRight">
                    <button onClick={onClose} className="closeBtn">Close</button>
                </div>
                <div className="modalContent">
                    <p> rentsimple is an app blablablablab</p>
                </div>

            </div>
        </div>
    )
}

export default Rentsimple
