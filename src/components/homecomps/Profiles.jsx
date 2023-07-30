import React from 'react'
import profile from '../../images/profile.jpg';
import LinkedIn from '../../images/LinkedIn.png';
import instagram from '../../images/instagram.png';
import cc from '../../images/cc.png';
import git from '../../images/git.png';
import leetcode from '../../images/leetcode.png';
import './Hs.css';
import Navbar from '../Navbar';
import { Box, Grid } from '@mui/material';

export default function Profiles() {
  const style = {
    fontSize: '20px',
    width: '100%',
    backgroundColor: 'rgba(96, 165, 215, 0.385)',
    marginTop:'20px',
    display:'flex',
    alignItems: 'center'
  }
  return (
    <div>
      <Navbar />
      <Grid sx={{ height:'auto', display: 'grid', gridTemplateColumns: { md: '50% 50%', xs: '100%' } }}>
        <Box sx={{ width: '100%', height: { md: 'auto', xs: '300px' },'@media (max-width: 500px)': { marginTop: '-50px'} }}>
          <img style={{ marginTop: '20px', width: '100%', height: '77%', objectFit: 'cover', opacity: '0.8' }} src={profile} alt="profile" />
        </Box>
        <div id="uli" style={{ marginLeft: '20px',marginRight: '20px' }}>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px',
          }} src={LinkedIn} alt="logo" height={40} /> <x>LinkedIn: <a id="link" href="https://www.linkedin.com/in/aniket-yadav-559581201/"> aniket-yadav-559581201</a></x></Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={git} alt="logo" height={40} />github: <a id="link" href="https://github.com/aniket0332">aniket0332</a></Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={leetcode} alt="logo" height={40} />Leetcode: <a id="link" href="https://leetcode.com/AniketYadav03/" >AniketYadav03</a></Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={cc} alt="logo" height={40} />CodeChef: <a id="link" href="https://www.codechef.com/users/aniketcc0302" >aniketcc0302</a></Box>
          <Box sx={style}><img id="logo" style={{
            verticalAlign: 'middle',
            padding: '10px',
            paddingRight: '20px'
          }} src={instagram} alt="logo" height={40} />Instagram: <a id="link" href="https://www.instagram.com/ani2k2/" >ani2k2</a></Box>
        </div>
      </Grid>
    </div>
  )
}
