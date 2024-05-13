import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from "@mui/system";
import AppFooter from "./AppFooter";
import Landing from "./Landing";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Pricing from "./Pricing";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <AppFooter />
      </Container>
    </Router>
  );
};

export default App;
