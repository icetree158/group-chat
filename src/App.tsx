import RouterNav from "./routes/RouterNav";
import './app.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from 'react'
import { FirebaseContext } from ".";
import Loader from "./components/loader/Loader";
function App() {
  const { auth } = useContext(FirebaseContext)
  const [user, loading, error] = useAuthState(auth)
  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <RouterNav />
  );
}

export default App;
