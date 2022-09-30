import React from 'react'
import logo2 from './logo2.png';
import { Outlet, Link } from "react-router-dom";
import './Hs.css';
export default function Projects() {
  return (
    <div>
      <div id="navbar">
      <div id="logo">        
        <img id="logo" src={logo2}  alt="logo" height={70}/>
</div>
      <div id="li"> 
       <ul> <Link id="Link1" to="/"> Home </Link> </ul>
       <ul><Link id="Link" to="/Contact"> Contact </Link> </ul>
       <ul><Link id="Link" to="/About" > About </Link> </ul>
       </div>
       <Outlet />
    </div>
      <div id="proj">
        <ul><y>☣ gohotel:</y> It is a website where you can find hotels near you. - Html, CSS, Javascript (through APIs)
        Link: <a href="https://aniket0332.github.io/go-hotel/" target="_blank">aniket0332.github.io/go-hotel</a>
</ul> <br />
        <ul><y>☣ Subject allotment system:</y> It has a Database management system which stores the information 
of professors, teaching assistants and allots them a subject according to their preferences and
designation - Mysql, NodeJs, ExpressJs.
</ul><br />
        <ul>
        <y>☣ Online Exam Platform:</y> It is an online platform which allows teachers to put questions and
options and set a test which can be attempted by any student – Java, Java Swing, eclipse.</ul>

      </div>
    </div>
  )
}
