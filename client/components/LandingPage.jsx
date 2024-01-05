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

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <div
      id="landing"
      style={{
        position: 'relative',
        backgroundColor: '#e5e5e5',
        height: '100vh',
      }}
    >
      <NeonJobs />
      <a
        href="https://imgur.com/6CMrUbD"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <img
          src="https://i.imgur.com/6CMrUbD.png"
          alt="Neon Jobs"
          title="source: imgur.com"
          style={{
            maxWidth: '90%',
            maxHeight: '90%',
            zIndex: 2,
          }}
        />
      </a>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: '50px' }}
      >
        <Grid item>
          <Button
            variant="text"
            sx={{
              width: '200px',
              fontSize: '1.5rem',
              color: '#96f9d2',
              backgroundColor: '#ff5ea4',
              '&:hover': {
                color: '#ff5ea4',
              },
            }}
            style={{ zIndex: 3 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              width: '200px',
              fontSize: '1.5rem',
              color: '#96f9d2',
              backgroundColor: '#ff5ea4',
              '&:hover': {
                color: '#ff5ea4',
              },
            }}
            style={{ zIndex: 3 }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{
              width: '200px',
              fontSize: '1.5rem',
              color: '#96f9d2',
              backgroundColor: '#ff5ea4',
              '&:hover': {
                color: '#ff5ea4',
              },
            }}
            style={{ zIndex: 3 }}
            onClick={handleAbout}
          >
            About
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
