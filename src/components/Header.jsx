import React from 'react'
import logo2 from './logo2.png'; 
import Home from './Home';
import { Outlet, Link } from "react-router-dom";
import './homecomps/Hs.css';
export default function Header() {
  return (
    <body>
    <div id="navbar">
      <div id="logo">        
        <img id="logo" src={logo2}  alt="logo"/>
</div>
      <div id="li"> 
       <ul> <Link id="Link1" to="/portfolio"> Home </Link> </ul>
       <ul><Link id="Link" to="/Contact"> Contact </Link> </ul>
       <ul><Link id="Link" to="/About" > About </Link> </ul>
       </div>
       <Outlet />
    </div>
    <>
    <Home/>
    </>
    </body>
  )
}
 

