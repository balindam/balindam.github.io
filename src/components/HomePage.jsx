import { Box, Grid } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { navBarMenuOptions } from '../constants/constants'

const HomePage = () => {
  return (
    <Box>
        <Grid>
            <NavBar navBarMenuOptions={navBarMenuOptions}/>
            <Footer />
        </Grid>
    </Box>
  )
}

export default HomePage