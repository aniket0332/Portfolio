import React from 'react'
import chessicon from '../../images/chessicon.png';
import music from '../../images/music.png';
import webdicon from '../../images/webdicon.png';
import code from '../../images/code.png';
import intic from '../../images/intic.jpg';
import './Hs.css';
import Navbar from '../Navbar';
import { Box, Grid, Typography } from '@mui/material';

export default function Interests() {
  const style = {
    fontSize: '20px',
    width: '80%',
    backgroundColor: 'rgba(96, 165, 215, 0.385)',
    marginTop: '20px',
    marginLeft:'auto',
    marginRight:'auto',
    padding: '30px',
    alignItems: 'center',
    color: 'white'
  }
  return (
    <div>
      <Navbar />
      <Grid sx={{ height: 'auto', display: 'grid', gridTemplateColumns: { md: '50% 50%', xs: '100%' } }}>
        <Box sx={{ width: '100%', height: { md: 'auto', xs: '300px' }, '@media (max-width: 500px)': { marginTop: '-50px' } }}>
          <img style={{ marginTop: '20px', width: '100%', height: '97.5%', objectFit: 'cover', opacity: '0.8' }} src={intic} alt="profile" />
        </Box>
        <Box sx={{ marginTop:{ md:'0px',xs:'10px' } }}>
          <Box sx={style}>
            <img id="logo" style={{
              verticalAlign: 'middle',
              padding: '10px',
              paddingRight: '20px',
            }} src={code} alt="logo" height={40} />
            Coding <br />
            <Typography sx={{ textAlign: 'left' }}>
              Java, C, C++ <br />🌠3☆☆☆ Coder on Codechef, active on Codeforces, Leetcode, GFG
            </Typography>
          </Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={webdicon} alt="logo" height={40} />Web Development <br /> <Typography sx={{ textAlign:'left' }}>Html, CSS, NodeJs, ReactJs <br />🌠exploring and learning new skills</Typography></Box>
          <Box sx={style}>
            <img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={chessicon} alt="logo" height={40} /> Chess <br /> <Typography sx={{ textAlign:'left' }}> Highest rating: 1575 <br />✨2nd runner up in institute chess competition</Typography></Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={music} alt="logo" height={40} /> Music <br /> <Typography sx={{ textAlign:'left' }}> Classical flautist, learing piano, guitar <br /> ✨Winner in institute music competition</Typography></Box>
        </Box>
      </Grid>
    </div>
  )
}
