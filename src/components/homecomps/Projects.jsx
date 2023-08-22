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
        <ul><y>☣ Socialize:</y> Developed a chatting website where we find multiple users to
chat and we can also create groups chats with many other features. It uses socket.io to establish real-time connection.
Tech-stack: ReactJs, ExpressJs, MongoDB, CSS
          Link: <a href="https://socialize-o3y3.onrender.com/">https://socialize-o3y3.onrender.com/</a>
        </ul> <br />
        <ul><y>☣ WebChat:</y> Developed a general chatting portal where we can add multiple
random members to our chat.
Tech-stack: NodeJs(Socket.io), HTML, CSS
          Link: <a href="https://aniket0332.github.io/webchat/">https://aniket0332.github.io/webchat/</a>
        </ul> <br />
        <ul><y>☣ NoiseDetector:</y> 
        It detects audi levels and displays audio waves, and also has speech recognition features.
        Tech-stack: reactJs, NodeJs, CSS.
          Link: <a href="https://aniket0332.github.io/noiseDetector/">https://aniket0332.github.io/noiseDetector/</a>
        </ul> <br />
        <ul><y>☣ gohotel:</y> It is a website where you can find hotels near you. Tech-stack: Html, CSS, Javascript (through APIs)
          Link: <a href="https://aniket0332.github.io/go-hotel/">https://aniket0332.github.io/go-hotel/</a>
        </ul> <br />
        <ul><y>☣ Subject allotment system:</y> It has a Database management system which stores the information
          of professors, teaching assistants and allots them a subject according to their preferences and
          designation Tech-stack: Mysql, NodeJs, ExpressJs.
          Link: <a href="https://github.com/aniket0332/Subject_management_dbms">https://github.com/aniket0332/Subject_management_dbms</a>
        </ul><br />

      </Box>
    </div>
  )
}
