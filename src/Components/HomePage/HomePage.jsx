import React from 'react'
import { Grid } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

const HomePage = () => {
        return (
          <Grid container className="px-5 md:px-36" justifyContent="space-between">
  
  {/* First Part - Show only on md and up */}
  <Grid item xs={12} md={2} className="hidden md:block">
    <Navigation />
  </Grid>

  {/* Middle Part - Show always */}
  <Grid item xs={12} md={7} className="block">
    <HomeSection />
  </Grid>

  {/* Right Part - Show only on md and up */}
  <Grid item xs={12} md={3} className="hidden md:block">
   <RightPart />
  </Grid>

</Grid>

        
        )
}

export default HomePage