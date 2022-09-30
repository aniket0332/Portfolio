import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './homecomps/Hs.css';
import logo2 from './logo2.png';
import emaillogo from './homecomps/emaillogo.png';
import phonelogo from './homecomps/phonelogo.png';


export default function Contact() {
  return (
    <body>
    <div id="navbar">
      <div id="logo">        
        <img id="logo" src={logo2}  alt="logo" height={70}/>
</div>
      <div id="li"> 
       <ul> <Link id="Link" to="/"> Home </Link> </ul>
       <ul><Link id="Link1" to="/Contact"> Contact </Link> </ul>
       <ul><Link id="Link" to="/About" > About </Link> </ul>
       </div>
       <Outlet />
    </div>
    <div id="ct">
      <p id="p1"> <x id="ea"><img id="emlogo" src={emaillogo}  alt="logo"/>aniketlyadav0303@gmail.com | </x><img id="emlogo" src={phonelogo}  alt="logo" /> (+91) 9049501522 <br /></p>
    <p>
    <label>Email <br />
    
    <input id="inpemail" placeholder='Enter your email'/></label><br />
    </p>
    <label>Message <br />
    <textarea name = "inmssg" placeholder='leave a message...'>

    </textarea><br/></label><br />
         
    <button>submit</button>
    </div>
    </body>
  )
}
