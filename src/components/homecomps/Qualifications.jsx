import React from 'react'
import logo2 from './logo2.png';
import { Outlet, Link } from "react-router-dom";
import './Hs.css';


export default function Qualifications() {
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
    <div id="edu">
      <br /><br />
      ☉ Computer Science Engineering | Indian Institute of Information Technology Vadodara (2020-24) <br /><br />
      CPI: 7.61 <br />
      <button id="cpi"><a id="Link" href="https://drive.google.com/file/d/1DeL7DbyjB-X8322AxhnfBQYImGN0yFmv/view?usp=sharing" target="_blank" rel="noreferrer">result</a></button> <br /><br />
      ☉ XII (CBSE) | Muljibhai Mehta International School, Virar (2019)  <br /><br />
      Percentage: 88.6% <br />
      <button id="cpi"><a id="Link" href="https://drive.google.com/file/d/1C54KEKl2qM9SV-4lcUeiDGgyhWR6R8Pg/view?usp=sharing" target="_blank" rel="noreferrer">result</a></button> <br /><br />
      ☉ X (CBSE) | John XXIII CBSE School (2017) <br /><br />
      CGPA: 9.4 <br />
      <button id="cpi"><a id="Link" href="https://drive.google.com/file/d/1spKIr04vv6HE15m5f4y2TijzwiZCbb3w/view?usp=sharing" target="_blank" rel="noreferrer">result</a></button> <br /><br />

</div>
    </div>
  )
}
