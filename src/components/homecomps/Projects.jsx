import React from 'react'
import './Hs.css';
import Navbar from '../Navbar';
import { Box } from '@mui/material';

export default function Projects() {
  return (
    <div>
      <Navbar />
      {/* <Typography sx={{ color:'white' }}>
      Work Experience
      </Typography> */}
      <Box id="proj" sx={{ width:'90%', padding: '0em' }}>
      <ul style={{ marginTop:'-30px' }}><y>☣ CryptoPedia:</y> Developed a website where you can find all the latest
Information about crypto currency (Using an external API).
Teck-stack: ReactJs, NodeJs, Html, CSS
          Link: <a href="https://aniket0332.github.io/CryptoPedia/">https://aniket0332.github.i <br /> o/CryptoPedia/</a>
        </ul> <br />
        <ul><y>☣ WebChat:</y> Developed a general chatting portal where we can add multiple
random members to our chat.
Tech-stack: NodeJs(Socket.io), HTML, CSS
          Link: <a href="https://aniket0332.github.io/webchat/">https://aniket0332.github.i<br />o/webchat/</a>
        </ul> <br />
        <ul><y>☣ gohotel:</y> It is a website where you can find hotels near you. - Html, CSS, Javascript (through APIs)
          Link: <a href="https://aniket0332.github.io/go-hotel/" target="_blank">aniket0332.github.io/go-hotel</a>
        </ul> <br />
        <ul><y>☣ Subject allotment system:</y> It has a Database management system which stores the information
          of professors, teaching assistants and allots them a subject according to their preferences and
          designation - Mysql, NodeJs, ExpressJs.
        </ul><br />

      </Box>
    </div>
  )
}
