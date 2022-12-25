import React from 'react';
import './modal.css';
import { AnimatePresence, motion } from "framer-motion"

import screenshot from "../assets/ergo-dash.png"


const Ergonomyx = ({ open,onClose }) => {
        if(!open) return null
    return (
    <AnimatePresence>
        <div onClick={onClose} className="overlay">
            <motion.div 
                initial={{
                    y: "-50%",
                    x: "-50%",
                    opacity: 0,
                    scale: 0.9,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        ease: "easeOut",
                        duration: 0.15,
                    },
                }}
                exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: {
                        ease: "easeIn",
                        duration: 0.05,
                    },
                }} 
                className='modalContainer'
                >
                {/* <div className="modalContainer"> */}
                    <img className='imageContainer' src={screenshot}/>
                    <div className="modalRight">
                    </div>
                    <div className="modalContent">
                        <h1>Ergonomyx Dashboard</h1>
                        <p>Ergonomyx Dashboard is a product I worked on for Ergonomyx Technologies Canada Inc.</p>
                        <p>It enables companies to track how their employees use their office space by curating and displaying relevent data. This allows managment to optimize the amount of office space they lease.</p>
                        <p>It collects data that is being transmitted from Ergonomyx hardware products.</p>
            
                    </div>    
                {/* </div> */}
            </motion.div>
        </div>
    </AnimatePresence>
    )
}

export default Ergonomyx