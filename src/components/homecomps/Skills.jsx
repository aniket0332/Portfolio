import React from 'react'
import logo2 from './logo2.png';
import { Outlet, Link } from "react-router-dom";
import './Hs.css';
export default function Skills() {
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
    <div id="skills"> 
    <ul>JavaScript</ul>
<ul>Java</ul>
<ul>C</ul>
<ul>C++</ul>
<ul>NodeJs</ul><br />
<ul>MongoDB</ul>
<ul>HTML</ul>
<ul>CSS</ul>
<ul>Mysql</ul>
<ul>React</ul>

</div>
    </div>
  )
}
