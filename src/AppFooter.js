// Footer.js
import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const FooterContainer = styled.footer`
  color: #333;
  text-align: right;
  flex-shrink: 0;
`;

const AppFooter = () => {
  return (
    <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <FooterContainer maxWidth="sm">
            <Typography>
              React Template
            </Typography>
          </FooterContainer>
        </Box>
  );
};

export default AppFooter;
