import { Box, Typography, Link, Button } from '@mui/material';
import React, { useState } from 'react';
import emaillogo from '../images/emaillogo.png';
import phonelogo from '../images/phonelogo.png';

function Contactus() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const whatsappUrl = `https://wa.me/9049501522?text=${name}%0A${message}`;

    const handleEnquireNowClick = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        if (message === '' || name === '')
            alert('Enter all details');
        else window.location.href = whatsappUrl;
    };

    const customTextField = ({
        backgroundColor: 'black',
        border: '2px solid grey',
        width: '100%',
        padding: '3%',
        color: 'white',
    });
    return (
        <Box sx={{ width: { md: '100%', xs: '90%' }, marginTop: {md:'25%', xs:'40%'}, marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography sx={{ display: 'flex', width: '100%', fontSize: '0.8em', textAlign: 'center', color: 'white', justifyContent: 'center' }}>
                <x id="ea"><img id="emlogo" src={emaillogo} alt="logo" />aniketlyadav0303@gmail.com | &nbsp;</x><div><img id="emlogo" src={phonelogo} alt="logo" /> (+91)9049501522 <br /></div>
            </Typography>
            <Typography sx={{ marginTop: '5%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Box
                    component="form"
                    sx={{
                        width: '93%',
                        paddingTop: '5%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <input
                        required
                        type="email"
                        key="Name"
                        id="outlined-required"
                        placeholder='Name*'
                        value={name}
                        onChange={handleNameChange}
                        style={{ ...customTextField }}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        width: '93%',
                        paddingTop: '5%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <textarea
                        required
                        key="message"
                        id="outlined-required"
                        placeholder='Message*'
                        value={message}
                        onChange={handleEmailChange}
                        style={{ ...customTextField, height: '5em' }}
                        rows={5}
                    />
                </Box>
            </Typography>
            <Link>
                <Button
                    variant='outlined'
                    onClick={handleEnquireNowClick}
                    sx={{
                        background: 'brown',
                        color: 'white',
                        fontSize: '90%',
                        width: '80px',
                        padding: '0.5%',
                        marginLeft: '42%',
                        marginRight: 'auto',
                        marginTop: '4%',
                        borderColor: 'brown',
                        '&:hover': {
                            borderColor: 'brown',
                        },
                        '&:focus': {
                            borderColor: 'brown',
                        },
                        '&:active': {
                            borderColor: 'brown',
                        },
                    }}
                >
                    Send
                </Button>
            </Link>
        </Box>
    );
}

export default Contactus;
