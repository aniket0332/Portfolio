import React from 'react'
import './Hs.css';
import Navbar from './../Navbar';
import { Box, Grid, Typography } from '@mui/material';


export default function Qualifications() {

  const infos = [
      ['☉ Computer Science Engineering | Indian Institute of Information Technology Vadodara (2020-24)',
      'CPI: 7.61',
      'https://drive.google.com/file/d/1DeL7DbyjB-X8322AxhnfBQYImGN0yFmv/view?usp=sharing'],
      ['☉ XII (CBSE) | Muljibhai Mehta International School, Virar (2019)',
      'Percentage: 88.6%',
      'https://drive.google.com/file/d/1C54KEKl2qM9SV-4lcUeiDGgyhWR6R8Pg/view?usp=sharing'],
      ['X (CBSE) | John XXIII CBSE School (2017)',
      'CGPA: 9.4',
      'https://drive.google.com/file/d/1spKIr04vv6HE15m5f4y2TijzwiZCbb3w/view?usp=sharing'],
  ];
  return (
    <div style={{ height:'85vh' }}>
      <Navbar />
      <Box sx={{ width: 'fit-content',paddingLeft:'10%',paddingRight:'10%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'  }}>
      {
        infos.map((info) => (
          <Box key={info} sx={{ marginBottom:{md:'7%',xs:'20%'} }}>
        <Typography sx={{ width: '100%', color: 'white', fontSize: {md:'1.5em',xs:'1.3em'}, textAlign: 'left' }}>
          {info[0]}
          <Grid sx={{ width: '100%',display: 'grid', gridTemplateColumns: '50% 50%', alignItems: 'center' }}>
            <Typography sx={{ fontSize: {md:'0.8em',xs:'0.7em'},marginTop:{md:'3%',xs:'15%'} }}>
              {info[1]}
            </Typography>
            <button id="cpi" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '0px' }}><a id="Link" href={`${info[2]}`} target="_blank" rel="noreferrer">result</a></button>
          </Grid>
        </Typography>
      </Box>
        ))
      }
      </Box>
    </div>
  )
}
