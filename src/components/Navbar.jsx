import React from 'react'
import { Link } from "react-router-dom";
import logo2 from '../images/logo2.png';
import './Header.css';

function Navbar() {
  return (
    <div id="navbar">
      <div id="logo">
        <img id="logo" src={logo2} alt="logo" />
      </div>
      <div id="li">
        <p> <Link id="Link1" to="/portfolio"> Home </Link> </p>
        <p> <Link id="Link" to="/Contact"> Contact </Link> </p>
        <p> <Link id="Link" to="/About" > About </Link> </p>
      </div>
    </div>
  )
}

export default Navbar
