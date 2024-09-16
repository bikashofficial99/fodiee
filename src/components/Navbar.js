import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText,
} from "@mui/icons-material/Home"
import Info from '@mui/icons-material/Info';
import CommentRounded from '@mui/icons-material/CommentRounded';
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';



const Navbar = () => {


const [openMenu,setOpenMenu] = useState(false);
const menuOptions = [
{
text: "Home",
icon : <HomeIcon/>,
},
{
text: "About",
icon : <InfoIcon/>,
},
{
text: "Testimonial",
icon : <CommentRoundedIcon/>,
},
{
text: "Contact",
icon : <PhoneRoundedIcon/>,
},
{
text: "Cart",
icon : <ShoppingCartRoundedIcon/>,
},
return <nav>
    <div className="nav-logo-container">
        <img src={Logo} alt='' />
    </div>
    <div></div>
</nav>









]




  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
