import CustomMailIcon from 'assets/icons/CustomMailIcon'
import LinkedInIcon from 'assets/icons/LinkedInIcon'
import UpworkIcon from 'assets/icons/UpworkIcon'
import GithubIcon from 'assets/icons/GithubIcon'
import { Box } from '@mui/material'
import IconOutlinedButton from 'components/IconOutlinedButton'
import { useTheme } from 'context/ThemeContext'
import { themeOptions } from 'constants/constants'

const profileButtonsList = [
    {
        id: 1,
        lightThemeIcon: <CustomMailIcon theme={themeOptions.Light}/>,
        darkThemeIcon: <CustomMailIcon theme={themeOptions.Dark}/>,
        buttonText: 'Send an email'
    },
    {
        id: 2,
        lightThemeIcon: <LinkedInIcon theme={themeOptions.Light}/>,
        darkThemeIcon: <LinkedInIcon theme={themeOptions.Dark}/>,
        buttonText: 'LinkedIn'
    },
    {
        id: 3,
        lightThemeIcon: <UpworkIcon theme={themeOptions.Light}/>,
        darkThemeIcon: <UpworkIcon theme={themeOptions.Dark}/>,
        buttonText: 'Upwork'
    },
    {
        id: 4,
        lightThemeIcon: <GithubIcon theme={themeOptions.Light}/>,
        darkThemeIcon: <GithubIcon theme={themeOptions.Dark}/>,
        buttonText: 'Github'
    }
]

const ProfileButtonsContainer = () => {

    const {theme} = useTheme();

    const handleButtonClick = () => {

    }

  return (
    <Box>
        {profileButtonsList.map(profile => (
            <IconOutlinedButton startIcon={theme === themeOptions.Light ? profile.lightThemeIcon : profile.darkThemeIcon} buttonText={profile.buttonText}/>
        ))}
    </Box>
  )
}

export default ProfileButtonsContainer