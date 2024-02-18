import { Box, Grid } from '@mui/material'
import React from 'react'
import NavBar from 'components/Home/NavBar'
import { navBarMenuOptions, themeOptions } from '../../constants/constants'

import './HomePage.scss'
import ProfileButtonsContainer from './ProfileButtonsContainer'
import AboutContainer from './AboutContainer'
import DownArrowIcon from 'assets/icons/DownArrowIcon'
import ExperienceContainer from 'components/Experience/ExperienceContainer'
import ProjectsContainer from 'components/Projects/ProjectsContainer'
import { useTheme } from 'context/ThemeContext'

const HomePage = () => {
  const {theme} = useTheme();
  return (
    <Box className={`_home_page_container_${theme === themeOptions.Light? 'light_theme' : 'dark_theme'} _home_page_container`}>
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

        <Grid>
          <ProjectsContainer />
        </Grid>

      </Grid>
    </Box>
  )
}

export default HomePage