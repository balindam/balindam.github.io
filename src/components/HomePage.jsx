import { Box, Grid } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { navBarMenuOptions } from '../constants/constants'

import './HomePage.scss'

const HomePage = () => {
  return (
    <Box className="_home_page_container">
        <Grid>
            <NavBar navBarMenuOptions={navBarMenuOptions}/>
        </Grid>
    </Box>
  )
}

export default HomePage