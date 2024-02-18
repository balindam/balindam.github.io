import { AppBar, Box, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

import ThemeSunIcon from 'assets/icons/ThemeSunIcon'
import 'components/Home/NavBar.scss'
import { DarkModeContext, useTheme } from 'context/ThemeContext'
import { themeOptions } from 'constants/constants'

const NavBar = ({navBarMenuOptions}) => {

    const { theme, toggleTheme } = useTheme();
    console.log(theme);

    const [currentMenuOption, setCurrentMenuOptions] = React.useState()

  return (
        <Box className="_navbar_menu_container">

            {/* TODO: add logo */}

                {navBarMenuOptions.map(option => (
                    <Typography key={`${option.id}_${option.title}`}>{option.title}</Typography>
                ))}


             <IconButton aria-label='theme-switch' onClick={toggleTheme}>
                <ThemeSunIcon theme={theme} />
             </IconButton>

        </Box>

  )
}

export default NavBar