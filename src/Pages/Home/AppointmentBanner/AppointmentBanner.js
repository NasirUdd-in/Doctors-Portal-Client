import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45, 58, 74, .9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (


        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{mb: 5}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{mb: 5}} style={{ color: 'white' }}>
                            Make and Appoinment today
                        </Typography>
                        <Typography variant="h6" sx={{mb: 5}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam eum necessitatibus. Eius debitis iste ad animi, alias numquam laudantium!
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
};

export default AppointmentBanner;