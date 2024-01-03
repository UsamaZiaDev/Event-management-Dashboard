
import { MdDashboard } from "react-icons/md";
import { SiSessionize } from "react-icons/si";
import { PiCalendarCheckFill } from "react-icons/pi";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";

const navData = [
    {
        name: "Dashboard",
        slug: "/dashboard",
        icon: <MdDashboard/>,
        active: false,
    },
    {
        name: "Events",
        slug: "/",
        icon: <SiSessionize/>,
        active: true,
    },
    {
        name: "Calendar",
        slug: "/calendar",
        icon: <PiCalendarCheckFill/>,
        active: false,
    },
    {
        name: "Setting",
        slug: "/setting",
        icon: <IoSettingsSharp/>,
        active: false,
    },
    {
        name: "Logout",
        slug: "/logout",
        icon: <IoLogOut/>,
        active: false,
    },
]

export default navData;