import CustomMailIcon from 'assets/icons/CustomMailIcon'
import LinkedInIcon from 'assets/icons/LinkedInIcon'
import UpworkIcon from 'assets/icons/UpworkIcon'
import GithubIcon from 'assets/icons/GithubIcon'
import { Box } from '@mui/material'
import IconOutlinedButton from '../IconOutlinedButton'

const profileButtonsList = [
    {
        id: 1,
        icon: <CustomMailIcon />,
        buttonText: 'Send an email'
    },
    {
        id: 2,
        icon: <LinkedInIcon />,
        buttonText: 'LinkedIn'
    },
    {
        id: 3,
        icon: <UpworkIcon />,
        buttonText: 'Upwork'
    },
    {
        id: 4,
        icon: <GithubIcon />,
        buttonText: 'Github'
    }
]

const ProfileButtonsContainer = () => {

    const handleButtonClick = () => {

    }

  return (
    <Box>
        {profileButtonsList.map(profile => (
            <IconOutlinedButton startIcon={profile.icon} buttonText={profile.buttonText}/>
        ))}
    </Box>
  )
}

export default ProfileButtonsContainer