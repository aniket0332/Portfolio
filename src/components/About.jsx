import React from 'react'
import { Link } from "react-router-dom";
import './homecomps/Hs.css';
import logo2 from '../images/logo2.png';
import abouticon from '../images/abouticon.png';
import { Container, Typography } from '@mui/material';


export default function About() {
  return (
    
    <body style={{ height: '84vh' }}>
         <div id="navbar">
      <div id="logo">
        <img id="logo" src={logo2} alt="logo" />
      </div>
      <div id="li">
        <p> <Link id="Link" to="/portfolio"> Home </Link> </p>
        <p> <Link id="Link" to="/Contact"> Contact </Link> </p>
        <p> <Link id="Link1" to="/About" > About </Link> </p>
      </div>
    </div>
    <Typography sx={{marginTop:{md: '10%',xs:'25%'},fontSize:{md:'20px',xs:'19px'}, color:'whitesmoke', textAlign:'center', width:{md:'50%', xs:'80%'},marginLeft:'auto',marginRight:'auto' }}>
    Hii, I name is Aniket Yadav and I am a 3rd year student at iiitv pursuing Btech CSE. I am a huge coding enthusiast, active on codechef, codeforces, leetcode, gfg. I am comfortable with Java, C, Javascript and C++ language, I also like exploring new technologies, currently working on web development and skills like NodeJs, ReactJs etc. Also
    looking forward to open source contributions, gaining more experiance and learning new skills.      
    </Typography>
    <Container sx={{ marginTop:'5%',textAlign:'center' }}>
    <img src={abouticon}  alt="logo" height={40}/>
    </Container>
    </body>
      
  
  )
}
