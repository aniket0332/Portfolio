import React from 'react'
import logo2 from './logo2.png';
import profile from './profile.jpg';
import LinkedIn from './LinkedIn.png';
import instagram from './instagram.png';
import cc from './cc.png';
import git from './git.png';


import { Outlet, Link } from "react-router-dom";
import './Hs.css';
export default function Profiles() {
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
  <div id="prof">
  <img id="profimg" src={profile}  alt="profile" />
   <div id="uli">
    <ul><img id="logo" src={LinkedIn}  alt="logo" height={40}/>LinkedIn: <a id="link"href="https://www.linkedin.com/in/aniket-yadav-559581201/" target="_blank"> aniket-yadav-559581201</a></ul>
    <ul><img id="logo" src={git}  alt="logo" height={40}/>github: <a id="link"href="https://github.com/aniket0332" target="_blank">aniket0332</a></ul>
    <ul><img id="logo" src={cc}  alt="logo" height={40}/>CodeChef: <a id="link"href="https://www.codechef.com/users/aniket_2k2" target="_blank">aniket_2k2</a></ul>
    <ul><img id="logo" src={instagram}  alt="logo" height={40}/>Instagram: <a id="link"href="https://www.instagram.com/ani2k2/" target="_blank">ani2k2</a></ul>
    </div>
  </div>
    </div>
  )
}
