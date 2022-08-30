import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated } = useAuth0();
    const isUser = isAuthenticated && user;

    if(!isUser){
        return <Navigate to="/" />
    }
    return (  
        <>{children}</>
    );
}
 
export default PrivateRoute;