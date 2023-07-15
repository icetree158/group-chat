import { useAuthState } from "react-firebase-hooks/auth"
import { FirebaseContext } from ".."
import AuthRoutes from "./AuthRoutes"
import DefaultRoutes from "./DefaultRoutes"
import { useContext } from 'react'

const RouterNav = () => {
    const { auth } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)
    return user ? <AuthRoutes /> : <DefaultRoutes />
}

export default RouterNav