import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import AppFooter from './AppFooter';
import Landing from './Landing';
import Profile from './Profile';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const CustomNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;


const App = () => {
  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" to="/" sx={{ flexGrow: 1 }}>
              React Template
            </Typography>
            <Button color="inherit" component={CustomNavLink} to="/">Home</Button>
            <Button color="inherit" component={CustomNavLink} to="/profile">Profile</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <AppFooter />
      </Container>
    </Router>
  );
};

export default App;
