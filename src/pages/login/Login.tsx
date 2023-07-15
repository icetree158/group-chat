import { Button, Grid, Icon } from '@mui/material'
import { useContext } from 'react'
import { FirebaseContext } from '../..'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import googleLogo from '../../access/Google__G__Logo.svg.png'

const Login = () => {
    const { auth } = useContext(FirebaseContext)

    const onLogin = async () => {
        const provider = new GoogleAuthProvider()
        const user = await signInWithPopup(auth, provider)

    }
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} style={{ height: window.innerHeight - 70 }}>
            <Button onClick={onLogin} color='secondary' variant='outlined' size='large'>
                Auth with <img src={googleLogo} style={{ height: '20px', width: '20px', marginLeft: '5px' }} /> </Button>
        </Grid>
    )
}

export default Login