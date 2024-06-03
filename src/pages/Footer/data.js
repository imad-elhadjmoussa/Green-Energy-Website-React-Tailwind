import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import SignpostIcon from '@mui/icons-material/Signpost';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


export const services = [
    "Solar Panel Installation",
    "Hybird Back-up System",
    "30Kva Victron Solar Hybrid System",
    "Project development",
    "Engineering, Procueement & Construction",
    "Operation & Maintenance"
]

export const supports = [
    "Help Center",
    "Ticket Support",
    "FAQ",
    "Contact Us",
    "Community"
]

export const company = [
    "About Us",
    "Leadership",
    "Carees",
    "News & Articls",
    "Logal Notice"
]

export const getInTouch = [
    <div className=' flex gap-3  '>
        <SignpostIcon className=' text-primary' />
        <span>Sylhet 3100, Bangladesh</span>
    </div>
    ,
    <div className=' flex gap-3 '>
        <MailIcon  className=' text-primary'/>
        <span>email@example.com</span>
    </div>
    ,
    <div className=' flex gap-3 '>
        <LocalPhoneIcon  className=' text-primary'/>
        <span>+8801714457298</span>
    </div>
]

export const socialContacts=[
    {
        id:1,
        icon:<FacebookIcon  />,
        link:"https://www.facebook.com"
    },
    {
        id:2,
        icon:<InstagramIcon/>,
        link:"https://www.instagram.com"
    },
    {
        id:3,
        icon:<TwitterIcon/>,
        link:"https://x.com"
    },
    {
        id:4,
        icon:<YouTubeIcon />,
        link:"https://www.youtube.com"
    },
]