import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import style from '../login.styles.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('=> login: ', username, password);

    if ('' === password) {
      setPasswordError('Please enter a password');
    }

    if (password.length < 4) {
      setPasswordError('The password must be 4 characters or longer');
    }

    try {
      const loginInfo = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      };

  
      console.log("=> Inside Login.jsx try")

      const reponse = await fetch('/api/signin', loginInfo);
      const data = await reponse.json();
      console.log('=> data af Login.handleSubmit', data);

      if (data.verified) {
        console.log('login success');
        navigate('/homepage');
      }
    } catch (error) {
      console.log('err sending post request', error);
    }
  };

  return (
    <div className="auth-form-container" style={{ transitionDelay: '100ms' }}>
      <a href="https://imgur.com/6CMrUbD"><img src="https://i.imgur.com/6CMrUbD.png" title="source: imgur.com" /></a>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={'inputBox'}
            />
        {userNameError ? (
          <div className="error"> {userNameError} </div>
        ) : (
          ''
        )}
        <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              className={'inputBox'}
            />
        {passwordError && password.length <= 4 ? (
          <div className="error"> {passwordError} </div>
        ) : (
          ''
        )}
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default Login;
