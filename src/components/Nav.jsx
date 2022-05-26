import React from 'react';
import './base.css';

function Nav() {
  return (
    <nav>
        <h2>Benjamin Guarasci</h2>
        <ul className = "navbar">
            <a href="#about">About</a>
            <a>Projects</a>
            <a>Contact</a>
        </ul>
    </nav>
  );
}

export default Nav;
