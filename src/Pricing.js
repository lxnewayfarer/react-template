import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 20px;
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
`;

const Pricing = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ paddingBottom: "40px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non
        ultrices ligula. Nullam a consectetur lacus. Fusce nec tortor non metus
        pretium ultricies. Quisque nec dolor at lacus gravida aliquet. Duis
        aliquet lorem et commodo tristique. Suspendisse potenti. Morbi nec eros
        orci.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography variant="h5" gutterBottom align="center">
                Basic
              </StyledTypography>
              <List>
                <ListItem>
                  <ListItemText primary="Feature 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 3" />
                </ListItem>
              </List>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                $9.99/mo
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography variant="h5" gutterBottom align="center">
                Premium
              </StyledTypography>
              <List>
                <ListItem>
                  <ListItemText primary="Feature 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 3" />
                </ListItem>
              </List>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                $19.99/mo
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography variant="h5" gutterBottom align="center">
                Pro
              </StyledTypography>
              <List>
                <ListItem>
                  <ListItemText primary="Feature 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 2" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Feature 3" />
                </ListItem>
              </List>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                $29.99/mo
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ paddingTop: "40px" }}
      >
        Go to Profile to choose tariff
      </Typography>
      <Grid container justifyContent="center" sx={{ paddingTop: "20px" }}>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button variant="h6" color="primary">
            Profile
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default Pricing;
