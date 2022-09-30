import React from 'react'
import logo2 from './logo2.png';
import chessicon from './chessicon.png';
import music from './music.png';
import webdicon from './webdicon.png';
import code from './code.png';
import intic from './intic.jpg';

import { Outlet, Link } from "react-router-dom";
import './Hs.css';
export default function Interests() {
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
    <div>
      <div id="interest">
  <img id="intic" src={intic}  alt="profile" />
   <div id="uli">
    <ul><img id="logo" src={code}  alt="logo" height={40}/>Coding <p>Java, C, C++ <br />🌠3☆☆☆ Coder on Codechef, active on Codeforces, Leetcode, GFG</p></ul>
    <ul><img id="logo" src={webdicon}  alt="logo" height={40}/>Web Development <p>Html, CSS, NodeJs, ReactJs <br />🌠exploring and learning new skills</p></ul>
    <ul><img id="logo" src={chessicon}  alt="logo" height={40}/>Chess <p><a id="link"href="https://www.chess.com/member/anithegm" target="_blank">chess.com_profile</a> <br /> Highest rating: 1413 <br />✨2nd runner up in institute chess competition</p></ul>
    <ul><img id="logo" src={music}  alt="logo" height={40}/>Music <p>Classical flautist, learing piano, guitar <br /> ✨Winner in institute music competition</p></ul>  
    </div>
  </div> 
    </div>
    </div>
  )
}
