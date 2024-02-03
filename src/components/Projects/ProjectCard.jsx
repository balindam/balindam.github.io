import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const projectsList = [{
    name: '',
    briefDescription: '',
    highlightSkills: [''],
    demoLink: '',
    sourceCodeLink: ''
}]

const ProjectCard = () => {
  return (
    <Box>
        <Grid>
            <Grid>
                <Typography>Featured Projects</Typography>
            </Grid>
            <Grid>
                {projectsList.map(project => (
                    <Grid>
                        <ProjectCard></ProjectCard>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProjectCard