import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './homecomps/Hs.css';
import logo2 from './logo2.png';
import abouticon from './homecomps/abouticon.png';


export default function About() {
  return (
    
       <body>
    <div id="navbar">
      <div id="logo">        
        <img id="logo" src={logo2}  alt="logo" height={70}/>
</div>
      <div id="li"> 
       <ul> <Link id="Link" to="/"> Home </Link> </ul>
       <ul><Link id="Link" to="/Contact"> Contact </Link> </ul>
       <ul><Link id="Link1" to="/About" > About </Link> </ul>
       </div>
       <Outlet />
    </div>
    <p id="about">
    Hii, I am a 3rd year student at iiitv pursuing Btech CSE. I am a huge coding enthusiast, active on codechef, <br /> codeforces, leetcode, gfg. I am comfortable with Java, C, Javascript and C++ language, <br />I also like exploring new technologies, currently working on web development and skills like NodeJs, <br />ReactJs etc. Also
    looking forward to open source contributions, <br /> gaining more experiance and learning new skills.      
    </p>
    <img id="aboutlogo" src={abouticon}  alt="logo" height={50}/>

    </body>
      
  
  )
}
