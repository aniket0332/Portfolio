import React from 'react';
import main from './main.png';
import icon from './icon.png';

import { Outlet, Link } from "react-router-dom";
import "./Homes.css";

export default function Home() {
  return (
    <>
    <div id="main">
        <img id="ic" src={icon}  alt="main" />
        <img id="im" src={main}  alt="main" />
        <p id="qq"><Link id="Link" to="/Qualifications">Qualifications</Link></p>
        <p id="p"><Link id="Link" to="/Profiles">Profiles</Link></p>
        <p id="i"><Link id="Link" to="/Interests">Interests</Link></p> 
        <p id="s"><Link id="Link" to="/Skills">Skills</Link></p>
        <p id="pr"><Link id="Link" to="/Projects">Projects</Link></p>
    </div>
    <Outlet/>
    </>
  )
}
