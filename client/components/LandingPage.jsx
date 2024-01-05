import React from 'react';
import NeonJobs from './AnimeSVGComponent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../AnimeSVG.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };
  return (
    <div id="landing" style={{ position: 'relative', backgroundColor:'#e5e5e5', height: '55vw'}}>
      <NeonJobs />
      <a
        href="https://imgur.com/6CMrUbD"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'absolute', top: 30, left: 450, zIndex: 1 }}
      >
        <img
          src="https://i.imgur.com/6CMrUbD.png"
          alt="Neon Jobs"
          title="source: imgur.com"
          style={{ width: '100%', height: '100%', top: 30, marginLeft: 100 }}
        />
      </a>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '50px' }}>
        <Grid item>
          <Button
            variant="text"
            sx={{ width: '200px', fontSize: '1.5rem', color: '#96f9d2', backgroundColor: '#ff5ea4', '&:hover': {
              color: '#ff5ea4', 
            },}}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ width: '200px', fontSize: '1.5rem', color: '#96f9d2', backgroundColor: '#ff5ea4', '&:hover': {
              color: '#ff5ea4', 
            },}}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ width: '200px', fontSize: '1.5rem', color: '#96f9d2', backgroundColor: '#ff5ea4', '&:hover': {
              color: '#ff5ea4', 
            },}}
          >
            About
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
