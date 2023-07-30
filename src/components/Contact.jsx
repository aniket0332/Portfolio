import React from 'react'
import { Link } from "react-router-dom";
import './homecomps/Hs.css';
import logo2 from '../images/logo2.png';
import Contactus from './Contactus';

export default function Contact() {
  return (
    <body style={{ height: '84vh' }}>
     <div id="navbar">
      <div id="logo">
        <img id="logo" src={logo2} alt="logo" />
      </div>
      <div id="li">
        <p> <Link id="Link" to="/portfolio"> Home </Link> </p>
        <p> <Link id="Link1" to="/Contact"> Contact </Link> </p>
        <p> <Link id="Link" to="/About" > About </Link> </p>
      </div>
    </div>
    <div id="main1">
    <Contactus />
    </div>
    </body>
  )
}
