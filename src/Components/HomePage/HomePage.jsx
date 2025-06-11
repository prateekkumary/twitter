import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

const HomePage = () => {
  return (
    <Grid container className="px-5 md:px-36" justifyContent="space-between">
      
      <Grid item xs={12} md={2} className="hidden md:block">
        <Navigation />
      </Grid>

      
      <Grid item xs={12} md={7} className="block">
<Routes>
  <Route path="/" element={<HomeSection />} > </Route>
  <Route path="/profile/:id" element={<Profile />} > </Route>
</Routes>

       
      </Grid>

      
      <Grid item xs={12} md={3} className="hidden md:block">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
