import React from 'react';
import main from '../images/main.jpg';
import icon from '../images/icon.png';

import { Link } from "react-router-dom";
import "./Homes.css";

export default function Home() {
  return (
    <>
      <div id="main">
        <img id="ic" src={icon} alt="main" />
        <div style={{ display: 'grid', justifyItems: 'center' }}>
          <div id='component'>
            <Link id="Link" to="/Qualifications"><p className='comps' id="qualifications">Qualifications</p></Link>
          </div>
          <div id="container">
              <img id="img" src={main}  alt="Avatar" />
              <div id="name">
                <div id="text">Aniket Yadav</div>
              </div>
          </div>
          <div id='component'>
            <Link id="Link" to="/Profiles"><p className='comps' id="profiles">Profiles</p></Link>
            <Link id="Link" to="/Skills"><p className='comps' id="skill">Skills</p></Link>
            <Link id="Link" to="/Projects"><p className='comps' id="projects">Projects</p></Link>
            <Link id="Link" to="/Interests"><p className='comps' id="interests">Interests</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}
