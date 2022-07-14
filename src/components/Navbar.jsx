import { AppBar, Box, Badge, styled, Typography, Toolbar, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from "@mui/icons-material/Mail";
import Notifications from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"

}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
}))




const Navbar = () => {

    const [open, setOpen]= useState(false);
    



    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6"> FriendsConnect</Typography>
                <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search  ><InputBase  placeholder='search...' /></Search>
                <Icons >
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                    sx={{ width: 30, height: 30,cursor:"pointer" }} 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" 
                    onClick={(e)=>setOpen(true)}    
                    />
                </Icons>
                <UserBox>
                    <Avatar onClick={(e)=>setOpen(true)} sx={{ width: 30, height: 30,cursor:"pointer" }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" />
                    <Typography variant="span" >Henry</Typography>

                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar