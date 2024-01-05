import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import createTheme from '@mui/material/styles/createTheme';
import Navbar from './Navbar';
import Chart from './Chart';
import BloodPressureChart from './BloodPressureChart';
import FoodLog from './FoodLog';
import LogoAnimation from './LogoAnimation';

export default function Homepage() {
  const [showFoodLog, setShowFoodLog] = useState(false);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '200vh',
          overflow: 'auto',
          alignItems: 'center',
        }}
      >
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} alignItems={'center'}>
          <Grid alignContent={'center'} spacing={0} sx={{ marginLeft: '' }}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 400,
                  marginBottom: 4,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 400,
                  marginBottom: 5,
                }}
              >
                <BloodPressureChart />
              </Paper>
            </Grid>
          </Grid>
          <button
            onClick={() => setShowFoodLog(true)}
            style={{ width: '100%', alignItems: 'center', zIndex: 3 }}
          >
            Open Food Log
          </button>
          <FoodLog trigger={showFoodLog} setTrigger={setShowFoodLog}></FoodLog>
        </Container>
      </Box>
    </Box>
  );
}
