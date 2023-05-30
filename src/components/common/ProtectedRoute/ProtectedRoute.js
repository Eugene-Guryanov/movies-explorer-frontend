import { Navigate } from "react-router-dom";

const ProtectedRoute = ({loggedIn, children}) => {
    if (loggedIn === null) {
        return null
    }
    return loggedIn ? children : <Navigate to='/movies'/>
}

export default ProtectedRoute