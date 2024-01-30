import { AppBar, Box, IconButton, Tab, Tabs } from '@mui/material'
import React from 'react'

import ThemeSunIcon from 'assets/icons/ThemeSunIcon';
import './NavBar.scss'

const NavBar = ({navBarMenuOptions}) => {

    const [currentMenuOption, setCurrentMenuOptions] = React.useState()

    const handleMenuOptionOnClick = (_, newValue) => {
        console.log(newValue);
        setCurrentMenuOptions(newValue)
    }
  return (
    <AppBar position='static'>
        <Box className="_navbar_menu_container">

            {/* TODO: add logo */}

            <Tabs value={currentMenuOption} onChange={handleMenuOptionOnClick}>
                {navBarMenuOptions.map(option => (
                    <Tab label={option.title} key={`${option.id}_${option.title}`} />
                ))}
             </Tabs>

             <IconButton aria-label='theme-switch'>
                <ThemeSunIcon />
             </IconButton>

        </Box>
    </AppBar>
  )
}

export default NavBar