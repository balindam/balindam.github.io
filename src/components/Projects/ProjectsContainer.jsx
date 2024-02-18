import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ProjectCard from 'components/Projects/ProjectCard'

const projectsList = [{
    name: 'P1',
    briefDescription: 'project 1',
    highlightSkills: ['React', 'Node.js'],
    demoLink: 'www.google.com',
    sourceCodeLink: 'www.github.com',
},
{
    name: 'P12',
    briefDescription: 'project 12',
    highlightSkills: ['React', 'Node.js'],
    demoLink: 'https://www.google.com/',
    sourceCodeLink: 'https://www.github.com',
}]

const ProjectsContainer = () => {
  return (
    <Box>
        <Grid>
            <Grid>
                <Typography>Featured Projects</Typography>
            </Grid>
            <Grid>
                {projectsList.map(project => (
                    <Grid>
                        <ProjectCard name={project.name} briefDescription={project.briefDescription} 
                            highlightSkills={project.highlightSkills} demoLink={project.demoLink} sourceCodeLink={project.sourceCodeLink} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProjectsContainer