import React, { useRef } from 'react';
import './base.css';
import { useIntersection } from "react-use";
import gsap from "gsap";
import hero from "./assets/hero.mp4";
import ben from "./assets/ben.jpeg"
import ergo from "./assets/ergo.ico"
import rentsimple from "./assets/favicon.png"
import Nav from "./Nav"
import Contact from "./Contact"





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

  if (scrollTop >= (2*window.innerHeight -30) && scrollTop <= (4.85*window.innerHeight)){
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
  
   // Animation for fading in
   const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
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

  return (
    
    <div className="Home">
        <div className="nav" id="nav">
        <h2>Benjamin Guarasci</h2>
        <ul className = "navbar">
            <li className='nav-item'>About</li>
            <li className='nav-item'>Projects</li>
            <li className='nav-item'>Contact</li>
        </ul>

        </div>
        <div className="first">
            {/* <video autoPlay loop muted>
                <source src={hero} type='video/mp4'/>
            </video> */}

            {/* <header class= "viewport-header">
                <Nav/>
            </header> */}

            <div className="viewport-div scroll-container">
                <div className="element-container">
                    <h1 className='white-title'>I want to work for you.</h1>
                </div>
            </div>
        </div>
        <div className="second">
            <div  className="viewport-div scroll-container">
                <div className="scroll-element ">
                    <h1 className='element1 black-title'> My name is Ben. </h1>
                    <p className='element1 about-body'>  
                    I am a creative, fast learning and diligent worker with a genuine interest in project management,
                    and a drive to learn as much as possible from every experience. Because of my passion, 
                    personality, and skill set, I feel that I would be an excellent fit for this position.
                    </p>
                </div>
                <div ref = {sectionRef1} className="scroll-element">
                    <img src={ben} className='element1 about-image'></img>
                </div>
            </div>
        </div> 

        <div id='projects' class ="projects">

            <h1 className=' element2 black-title'> Projects </h1>
            <div className='card'>
              <div ref = {sectionRef2} className='title-card'>
                <img className='card-image' src={rentsimple}></img>
                <h1 className='card-title'>RentSimple</h1>
                {/* <a href={rentsimple_link}><span className='card-link'></span></a> */}
              </div>
              <p className='card-text'> RentSimple is a simple app created to help students find housing. </p>
            </div>
            <div className='card'>
              <div className=' title-card'>
                <img className='card-image' src={ergo}></img>
                <h1 className='card-title'>Ergonomyx</h1>
                {/* <a href={ergonomyx_link}><span className='card-link'></span></a> */}
              </div>
              <p className='card-text'> RentSimple is a simple app created to help students find housing. </p>
            </div>
        </div>

        <div className="third">
            <div className="viewport-div scroll-container">
      
            </div>
        </div>

        <div className="fourth">
            <div className="viewport-div scroll-container">
                <Contact/>
            </div>
        </div>

    </div>
    
  );
}

export default Home;
