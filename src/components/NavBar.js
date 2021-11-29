import React from "react";
// import { Link } from "react-router-dom"
import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography } from "@mui/material";

const NavBar = ({ user, handleLogout }) => {

    return (
        <div>
            {
                Object.keys(user).length > 0 ?
                    <AppBar position="static" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                        {/* <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/" onClick={handleLogout}>Logout</Link> */}
                        <Toolbar sx={{ flexWrap: 'wrap' }}>
                            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                                Strangers Things
                            </Typography>
                            <nav>
                                <Link variant="button" color="text.primary" href="/" x={{ my: 1, mx: 1.5 }}> Home </Link>
                                <Link variant="button" color="text.primary" href="/posts" x={{ my: 1, mx: 1.5 }}> Posts </Link>
                                <Link variant="button" color="text.primary" href="/profile" x={{ my: 1, mx: 1.5 }}> Profile </Link>
                                <Link variant="button" color="text.primary" href="/logout" x={{ my: 1, mx: 1.5 }}> Logout </Link>
                            </nav>
                        </Toolbar>
                    </AppBar> :
                    <AppBar position="static" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                        {/* <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="account/login">Login</Link> */}
                        <Toolbar sx={{ flexWrap: 'wrap' }}>
                            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                                Strangers Things
                            </Typography>
                            <nav>
                                <Link variant="button" color="text.primary" href="/" x={{ my: 1, mx: 1.5 }}> Home </Link>
                                <Link variant="button" color="text.primary" href="/posts" x={{ my: 1, mx: 1.5 }}> Posts </Link>
                                <Link variant="button" color="text.primary" href="/account/login" x={{ my: 1, mx: 1.5 }}> Login </Link>
                            </nav>
                        </Toolbar>
                    </AppBar>
            }


        </div>)
}

export default NavBar