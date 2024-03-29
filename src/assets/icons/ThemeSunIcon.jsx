import React from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import { themeOptions } from 'constants/constants'

const ThemeSunIcon = ({theme}) => {
    console.log('hfg',theme);
  return (
    <SvgIcon>
        {theme === themeOptions.Dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                <g clip-path="url(#clip0_478_10)">
                    <path d="M27.1063 40.0572C23.5885 40.0572 20.2149 38.6597 17.7275 36.1723C15.24 33.6849 13.8426 30.3112 13.8426 26.7935C13.8426 23.2757 15.24 19.9021 17.7275 17.4146C20.2149 14.9272 23.5885 13.5298 27.1063 13.5298C30.624 13.5298 33.9977 14.9272 36.4851 17.4146C38.9725 19.9021 40.37 23.2757 40.37 26.7935C40.37 30.3112 38.9725 33.6849 36.4851 36.1723C33.9977 38.6597 30.624 40.0572 27.1063 40.0572ZM24.8957 2.47675H29.3169V9.10858H24.8957V2.47675ZM24.8957 44.4784H29.3169V51.1102H24.8957V44.4784ZM8.34924 11.1622L11.475 8.03644L16.1638 12.7251L13.0379 15.851L8.34924 11.1645V11.1622ZM38.0488 40.8618L41.1746 37.736L45.8633 42.4247L42.7375 45.5505L38.0488 40.8618ZM42.7375 8.03422L45.8633 11.1622L41.1746 15.851L38.0488 12.7251L42.7375 8.03644V8.03422ZM13.0379 37.736L16.1638 40.8618L11.475 45.5505L8.34924 42.4247L13.0379 37.736V37.736ZM51.423 24.5829V29.0041H44.7912V24.5829H51.423ZM9.42139 24.5829V29.0041H2.78955V24.5829H9.42139Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_478_10">
                        <rect width="53.0547" height="53.0547" fill="white" transform="translate(0.578857 0.266113)"/>
                    </clipPath>
                </defs>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_480_91)">
                    <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="#1A1A1A"/>
                </g>
                <defs>
                    <clipPath id="clip0_480_91">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )}
        

        
    </SvgIcon>
  )
}

export default ThemeSunIcon