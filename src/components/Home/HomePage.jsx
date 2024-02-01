import { Box, Grid } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import { navBarMenuOptions } from '../../constants/constants'

import './HomePage.scss'
import ProfileButtonsContainer from './ProfileButtonsContainer'
import AboutContainer from './AboutContainer'
import DownArrowIcon from 'assets/icons/DownArrowIcon'
import ExperienceContainer from 'components/Experience/ExperienceContainer'

const HomePage = () => {
  return (
    <Box className="_home_page_container">
      <Grid>
        <Grid>
            <NavBar navBarMenuOptions={navBarMenuOptions}/>
        </Grid>
        <Grid>
          <AboutContainer />
        </Grid>
        <Grid>
          <Grid>
            <ProfileButtonsContainer />
          </Grid>
          <Grid>
            <DownArrowIcon />
          </Grid>
        </Grid>

        <Grid>
          <ExperienceContainer />
        </Grid>

      </Grid>
    </Box>
  )
}

export default HomePage