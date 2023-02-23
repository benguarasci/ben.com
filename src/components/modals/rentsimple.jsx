import React from 'react';
import './modal.css';
import { AnimatePresence, motion } from "framer-motion"

import screenshot from "../assets/rentsimple_screenshot.png"


const Rentsimple = ({ open,onClose }) => {
        if(!open) return null
    return (
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
                    scale: 0.85,
                    transition: {
                        ease: "easeIn",
                        duration: 0.15,
                    },
                }} className="modalContainer">
                <img className='imageContainer' src={screenshot}/>
                <div className="modalRight">
                </div>
                <div className="modalContent">
                    <h1>RentSimple</h1>
                    <p>RentSimple is a tool that I built to help people with their search for rental housing.</p>
                    <p>It works by consolodating postings across several websites using python web scrapers and displaying them on a single page</p>
                    <p>It's backend is a Django-PostgreSQL docker container that is hosted on a AWS EC2 instance.</p>
                    <p>The front end is a React.js app hosted on vercel.</p>
                    <a href='https://www.rent-simple.com' target="_blank" rel="noopener noreferrer" className='modalLink'>Link</a>
                </div>

            </motion.div>
        </div>
    )
}

export default Rentsimple
