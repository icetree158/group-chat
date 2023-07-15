import { Avatar, Button, Container, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState, useContext } from 'react'
import { FirebaseContext } from '../..'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'
const Chat = () => {
    const { auth, firestore } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)
    const [inputValue, setInputValue] = useState<string>('')
    const [message, loading] = useCollectionData(query(collection(firestore, 'message'), orderBy("crearedAt")))


    const sendMessage = () => {
        addDoc(collection(firestore, 'message'), {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            message: inputValue,
            crearedAt: serverTimestamp()
        })
        setInputValue('')

    }
    const usersMessages = message?.map((data, index) => {

        return <div key={data.uid + index} style={{ padding: '6px', width: '100%', marginTop: '3px' }}>
            <Avatar alt={data.displayName} src={data.photoURL} style={{ marginLeft: auth.currentUser?.uid === data.uid ? 'auto' : '0' }} />
            <div style={{ maxWidth: '45%', flexWrap: 'wrap', wordBreak: 'break-all', marginLeft: auth.currentUser?.uid === data.uid ? 'auto' : '0', textAlign: auth.currentUser?.uid === data.uid ? "right" : 'left' }}>{data.message}</div>
        </div>
    })

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid container
                mt={"20px"}
                justifyContent={'center'}
                style={{ border: '1px solid #1976d2', width: '100%', height: '65vh', overflowY: 'auto' }}
            >
                {usersMessages}

            </Grid>
            <Grid container alignItems={'center'} justifyContent={'flex-end'} mt={'10px'}>
                <TextField value={inputValue} onChange={e => setInputValue(e.target.value)} fullWidth multiline label="Enter your message" rows="3" />
                <Button onClick={sendMessage}>Send</Button>
            </Grid>
        </Container>
    )
}

export default Chat