import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"
import Login from "../pages/login/Login"

const DefaultRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Login />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default DefaultRoutes