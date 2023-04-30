import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../store/store';
import { Box, Button, IconButton, Typography } from '@mui/material';

/**
 * The AuthForm component can be used for Login or Sign Up.
 * Props for Login: name="login", displayName="Login"
 * Props for Sign up: name="signup", displayName="Sign Up"
 */
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isSignUp = name === 'signup';
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username ? evt.target.username.value : '';
    const password = evt.target.password ? evt.target.password.value : '';
    const firstName = evt.target.firstName ? evt.target.firstName.value : '';
    const lastName = evt.target.lastName ? evt.target.lastName.value : '';
    dispatch(authenticate({ username, password, firstName, lastName, method: formName }));
    navigate('/')
    if (name === 'signup') {
      window.alert('You have successfully signed up!');
    } else if (name === 'login') {
      window.alert('You have successfully logged in!');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {displayName}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} name={name} sx={{ width: '100%', maxWidth: 360 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </Box>
        {isSignUp && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <label htmlFor="firstName">
                <small>First Name</small>
              </label>
              <input name="firstName" type="text" required />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <label htmlFor="lastName">
                <small>Last Name</small>
              </label>
              <input name="lastName" type="text" required />
            </Box>
          </>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" type="submit">
            {displayName}
          </Button>
        </Box>
        {error && (
          <Box sx={{ color: 'red', textAlign: 'center', mb: 2 }}>{error}</Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthForm;