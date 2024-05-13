// Footer.js
import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)`
  background-color: #3498db; /* Замените цвет на желаемый */
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

const Navigation = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography
          variant="h6"
          component={CustomNavLink}
          to="/"
          sx={{ flexGrow: 1 }}
        >
          React Template
        </Typography>
        <Button color="inherit" component={CustomNavLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={CustomNavLink} to="/profile">
          Profile
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navigation;
