import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ExperienceVerticalTab from './ExperienceVerticalTab'

const ExperienceContainer = () => {
  return (
    <Box>
        <Grid>
            <Grid>
                <Typography>{'Experience'}</Typography>
            </Grid>
            <Grid>
                <ExperienceVerticalTab />              
            </Grid>
            <Divider />
        </Grid>
    </Box>
  )
}

export default ExperienceContainer