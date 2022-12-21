import React, { useRef, useState } from 'react';
import './base.css';
import { useIntersection } from "react-use";
import gsap from "gsap";

import Resume from "./assets/resume.pdf"
import ben from "./assets/ben.jpeg"
import ergo from "./assets/ergo.ico"
import rentsimple from "./assets/favicon.png"
import Nav from "./Nav"
import Contact from "./Contact"
import Information from "./Information"
import Rentsimple from './rentsimple';





const html = document.documentElement;
const scrollElements = document.querySelectorAll(".hero-text");

const rentsimple_link = "https://rentsimple.herokuapp.com";
const ergonomyx_link = "https://www.ergonomyx.com";



const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  console.log(elementTop);
  console.log(document.documentElement.clientHeight);

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

function display_nav() {
  var element = document.getElementById("nav");
  element.classList.add("display");
}

function hide_nav() {
  var element = document.getElementById("nav");
  element.classList.remove("display");
}

function dark_nav() {
  var element = document.getElementById("nav");
  element.classList.add("black");

}

function light_nav() {
  var element = document.getElementById("nav");
  element.classList.remove("black");
}

function remove_stick(){
  var element = document.getElementById("projects");
  element.classList.add("no-stick")
}

function add_stick(){
  var element = document.getElementById("projects");
  element.classList.remove("no-stick")
}

document.querySelectorAll('.hero-text').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})

window.addEventListener("scroll", () => { 
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;

  if (scrollTop >= (2*window.innerHeight -30)){
    display_nav();
    console.log("display")
  }else{
    hide_nav();
    console.log("hide")
  }

  if (scrollTop >= (2*window.innerHeight -30) && scrollTop <= (4.90*window.innerHeight)){
    dark_nav();
    console.log("dark")
  }else{
    light_nav();
    console.log("light")
  }

});

function Home() {

    // Ref for our element
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const heroRef1 = useRef(null);
    const heroRef2 = useRef(null);
    const heroRef3 = useRef(null);
    const heroRef4 = useRef(null);
    const heroRef5 = useRef(null);
    const heroRef6 = useRef(null);
    const heroRef7 = useRef(null);


    const [openRent, setOpenRent] = useState(false)


    // All the ref to be observed
    const intersection1 = useIntersection(sectionRef1, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const intersection2 = useIntersection(sectionRef2, {
      root: null,
      rootMargin: "0px",
      threshold: 1
    });

    //Hero Intersections

    const hero1 = useIntersection(heroRef1, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero2 = useIntersection(heroRef2, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero3 = useIntersection(heroRef3, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero4 = useIntersection(heroRef4, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero5 = useIntersection(heroRef5, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero6 = useIntersection(heroRef6, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const hero7 = useIntersection(heroRef7, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });


  
   // Animation for fading in
   const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -20,
      ease: "power4.out",
      stagger: {
        amount: 0.5
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection1 && intersection1.intersectionRatio < 0.1
    ? fadeOut(".element1")
    : fadeIn(".element1");

  intersection2 && intersection2.intersectionRatio < 1
    ? fadeOut(".element2")
    : fadeIn(".element2");

  hero1 && hero1.intersectionRatio < 0.1
  ? fadeOut(".skill1")
  : fadeIn(".skill1");

  hero2 && hero2.intersectionRatio < 0.1
  ? fadeOut(".skill2")
  : fadeIn(".skill2");

  hero3 && hero3.intersectionRatio < 0.1
  ? fadeOut(".skill3")
  : fadeIn(".skill3");

  hero4 && hero4.intersectionRatio < 0.1
  ? fadeOut(".skill4")
  : fadeIn(".skill4");

  hero5 && hero5.intersectionRatio < 0.1
  ? fadeOut(".skill5")
  : fadeIn(".skill5");

  hero6 && hero6.intersectionRatio < 0.1
  ? fadeOut(".skill6")
  : fadeIn(".skill6");

  hero7 && hero7.intersectionRatio < 0.1
  ? fadeOut(".skill7")
  : fadeIn(".skill7");
    
  return (
    
    <div className="Home">
        <div className="nav" id="nav">
        <h2 className="desktop-header">Benjamin Guarasci</h2>
        <h2 className="mobile-header">BG</h2>
        <ul className = "navbar">
            <a className='nav-item' href="#about" id="nav">About</a>
            <a className='nav-item' href="#projects" id="nav">Projects</a>
            <a className='nav-item' href="#contact" id="nav">Contact</a>
            <a className='nav-item' href ={Resume} id="nav">Resume</a>
        </ul>
        </div>
        <div className="first">
            {/* <video autoPlay loop muted>
                <source src={hero} type='video/mp4'/>
            </video> */}

            {/* <header class= "viewport-header">
                <Nav/>
            </header> */}

            <div className='gradient-text font-40'> 
                    <h1>Not Your Average Software Engineer</h1>
            </div>
            <div className="gradient-text-2">
                    <h2 className='skills skill1'>Full-Stack</h2>
                    <h2 ref = {heroRef1} className='skills skill2'>Architecture and Design</h2>
                    <h2 ref = {heroRef2} className='skills skill3'>Project Management</h2>
                    <h2 ref = {heroRef3} className='skills skill4'>Agile Methodology</h2>
                    <h2 ref = {heroRef4} className='skills skill5'>Machine Learning</h2>
                    <h2 ref = {heroRef5} className='skills skill6'>Data Analysis</h2>
                    <h2 ref = {heroRef6} className='skills skill7'>Software Scaleability</h2>
                    <h2 ref = {heroRef7}></h2>
            </div>
        </div>
        <div className="second" id="about">
            <div  className="about-div scroll-container">
                <div className="scroll-element">
                    <h1 className='element1 black-title padding-top'> My name is Ben. </h1>
                    <p className='element1 about-body'>  
                    I am a creative, fast learning and diligent worker with a genuine interest in software development,
                    and a drive to learn as much as possible from every experience. I am passionate about building software that can be applied to the real world. I have significant full-stack development and leadership experience.
                    </p>
                </div>
                <div ref = {sectionRef1} className="scroll-element">
                    <img src={ben} className='element1 about-image'></img>
                </div>
            </div>
        </div> 

        <div id='projects' class ="projects">

            <h1 className='black-title element2'> Projects </h1>
            <Rentsimple open={openRent} onClose={() => setOpenRent(false)} />

            <div className='card'>
              <div className='title-card'>
                <img className='card-image' src={rentsimple}></img>
                <h1 className='card-title'>RentSimple</h1>
                {/* <a href={rentsimple_link}className='card-link'></a> */}
                <button onClick={() => setOpenRent(true)}>Toggle</button>
              </div>
              <p className='card-text'> RentSimple is a simple react app created to help students find housing. </p>
            </div>


            <div className='card'>
              <div className=' title-card'>
                <img className='card-image' src={ergo}></img>
                <h1 className='card-title'>Ergonomyx</h1>
                {/* <a href={ergonomyx_link} className='card-link'></a> */}
              </div>
              <p className='card-text'> Ergonomyx.com is an ecommerce website built using flask and node.js </p>
            </div>
        </div>

        <div className="third">
            
        </div>

        <div className="fourth" id="contact">
            <div className="viewport-div scroll-container">
              <div className="form-container">
                <h1 className='form-title'> Contact </h1>
                <p className="information">532B 1008 Pandora Avenue</p>
                <p className = "information">Victoria BC</p>
                <a className='information' href="mailto:benguarasci@icloud.com">benguarasci@icloud.com</a>
                <p className='information'>778-998-2335</p>
              </div>
            </div>
        </div>

    </div>
    
  );
}

export default Home;
