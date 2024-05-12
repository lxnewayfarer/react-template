import React from 'react';
import { Grid, Paper, Typography, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)`
  padding: 20px;
  border-radius: 10px;
  box-shadow: none;
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: none; /* Удаление тени */
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 10px;
`;
const Landing = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ padding: '20px' }}>
      <Grid item xs={12} sm={10} md={8}>
        <StyledPaper>
          <StyledCard>
            <Typography variant="h5" gutterBottom align="center">
              Block 1
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ultrices ligula. Nullam a
              consectetur lacus. Fusce nec tortor non metus pretium ultricies. Quisque nec dolor at lacus gravida
              aliquet. Duis aliquet lorem et commodo tristique. Suspendisse potenti. Morbi nec eros orci.
            </Typography>
            <StyledCardMedia
              component="img"
              image="https://via.placeholder.com/1200x400" // Поменяйте на URL вашего изображения
              alt="Block 1 Image"
            />
          </StyledCard>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <StyledPaper>
          <StyledCard>
            <Typography variant="h5" gutterBottom align="center">
              Block 1
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ultrices ligula. Nullam a
              consectetur lacus. Fusce nec tortor non metus pretium ultricies. Quisque nec dolor at lacus gravida
              aliquet. Duis aliquet lorem et commodo tristique. Suspendisse potenti. Morbi nec eros orci.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ultrices ligula. Nullam a
              consectetur lacus. Fusce nec tortor non metus pretium ultricies. Quisque nec dolor at lacus gravida
              aliquet. Duis aliquet lorem et commodo tristique. Suspendisse potenti. Morbi nec eros orci.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ultrices ligula. Nullam a
              consectetur lacus. Fusce nec tortor non metus pretium ultricies. Quisque nec dolor at lacus gravida
              aliquet. Duis aliquet lorem et commodo tristique. Suspendisse potenti. Morbi nec eros orci.
            </Typography>
            <StyledCardMedia
              component="img"
              image="https://via.placeholder.com/1200x400" // Поменяйте на URL вашего изображения
              alt="Block 1 Image"
            />
          </StyledCard>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default Landing;
