import { Button } from '@mui/material'
import React from 'react'
import CustomMailIcon from '../assets/icons/CustomMailIcon'
import './IconOutlinedButton.scss'


function IconOutlinedButton({buttonText}) {
  return (
    <Button variant="outlined" className="_icon-outlined-btn" startIcon={<CustomMailIcon />}>{buttonText}</Button>
  )
}


export default IconOutlinedButton