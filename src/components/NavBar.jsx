import { AppBar, Box, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'

const NavBar = ({navBarMenuOptions}) => {

    const handleMenuOptionOnClick = () => {

    }
  return (
    <AppBar position='static'>
        <Box>
            <Menu open={true}>
                {navBarMenuOptions.map(option => (
                    <MenuItem key={`${option.id}_${option.title}`} onClick={handleMenuOptionOnClick}>
                        <Typography>
                            {option.title}
                        </Typography>
                    </MenuItem>
                ))}
                <MenuItem>
                    
                </MenuItem>
            </Menu>
        </Box>
    </AppBar>
  )
}

export default NavBar