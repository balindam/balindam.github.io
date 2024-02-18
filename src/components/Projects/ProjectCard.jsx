
import { Box, IconButton, Stack, Typography } from '@mui/material'
import IconOutlinedButton from 'components/IconOutlinedButton'
import GithubIcon from 'assets/icons/GithubIcon'
import React from 'react'

const ProjectCard = ({name, briefDescription, highlightSkills, demoLink, sourceCodeLink}) => {

  const handleOnClickLink = (link) => {

    console.log(link)
    window.open(`//${link}`, '_blank')
  }

  return (
    <Stack>
        <Box></Box>
        <Typography>{name}</Typography>
        <Typography>{briefDescription}</Typography>
        <Typography>{highlightSkills}</Typography>
        <IconOutlinedButton buttonText={'Live Demo'} startIcon={<></>} handleOnClick={() => handleOnClickLink(demoLink)} />
        <IconButton onClick={() => handleOnClickLink(sourceCodeLink)}>
          <GithubIcon />
        </IconButton>
    </Stack>
  ) 
}

export default ProjectCard