import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Chat from "../pages/chat/Chat";
const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Chat />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
export default AuthRoutes