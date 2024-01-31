import { Box, Grid } from '@mui/material'
import React from 'react'

const aboutMeText = `I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.`

const AboutContainer = () => {

    const [name, setName] = React.useState('Balindam Bajpai')
  return (
    <Box>
        <Grid>
            <Grid>
                {`Hey, I'm`}
            </Grid>
            <Grid>
                {name}
            </Grid>
            <Grid>
                {aboutMeText}
            </Grid>
        </Grid>
    </Box>
  )
}

export default AboutContainer