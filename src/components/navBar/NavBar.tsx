import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { FirebaseContext } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth'


const NavBar = () => {
    const { auth } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='secondary'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Group Chat
                        </Typography>
                        {user ? <Button onClick={() => auth.signOut()} color="inherit">Sign out</Button> : null}
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
}
export default NavBar

