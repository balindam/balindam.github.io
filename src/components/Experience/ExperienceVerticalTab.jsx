import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const experiencesInfo = [
    {
        id: 0,
        companyLabel: 'Proximise',
        companyName: 'Proximise',
        designation: 'Software Developer',
        startDate: 'May 2023',
        endDate: 'Oct 2023',
        isCurrentlyWorking: false,
        jobLocation: 'Remote',
        experienceDetails: [
            'detail1',
            'detail2',
        ]
    }
]

const ExperienceTabPanel = ({experienceInfo}) => {
    return (
        <Box>
            <Grid>
                <Grid>
                    <Grid>
                        <Typography>{experienceInfo.designation}</Typography>
                    </Grid>
                    <Grid>
                        {`${experienceInfo.startDate} - ${experienceInfo.isCurrentlyWorking ? 'Present' : experienceInfo.endDate}`}
                    </Grid>
                </Grid>

                <Grid>
                    <Typography>{`${experienceInfo.companyName} / ${experienceInfo.jobLocation}`}</Typography>
                </Grid>

                <Grid>
                    {experienceInfo.experienceDetails.map(detail => (
                        <Typography>{`- ${detail}`}</Typography>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}

const ExperienceVerticalTab = () => {
    const [selectedExperienceTabValue, setSelectedExperienceTabValue] = React.useState(0);

    const handleExperienceTabOnChange = () => {

    }

  return (
    <Box>
        <Tabs value={selectedExperienceTabValue} onChange={handleExperienceTabOnChange} orientation='vertical'>
            {experiencesInfo.map(experience => (
                <Tab label={experience.companyLabel} />
            ))}
        </Tabs>
        
        {experiencesInfo.map(experience => (
            <ExperienceTabPanel experienceInfo={experience} />
        ))}

    </Box>
  )
}

export default ExperienceVerticalTab