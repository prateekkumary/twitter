import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GruopIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import { AccountCircle } from '@mui/icons-material';
// import { Pending } from '@mui/icons-material';

export const navigationMenu=[
    {
        title: "Home",
        icon:<HomeIcon/>,
        path: "/home"
    },
    {
        title: "Explore",
        icon:<ExploreIcon/>,
        path: "/explore"
    },
    {
        title: "Notifications",
        icon:<NotificationIcon/>,
        path: "/notification"
    },
    {
        title: "Massage",
        icon:<MessageIcon/>,
        path: "/massage"
    },
    {
        title: "Settings",
        icon:<SettingsIcon/>,
        path: "/settings"
    },
    {
        title: "Lists",
        icon:<ListAltIcon/>,
        path: "/list"
    },
    {
        title: "Communities",
        icon:<GruopIcon/>,
        path: "/communities"
    },
    {
        title: "Verified",
        icon:<VerifiedIcon/>,
        path: "/verified"
    },
    {
        title: "Profile",
        icon:<AccountCircle/>,
        path: "/profile"
    },

]