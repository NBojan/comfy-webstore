import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0();
    if(isLoading){
        return (
            <div className="center-flex">
                <div className="loading"></div>
            </div>
        )
    }
    else if(error){
        return (
            <div className="center-flex">
                <h3>{error.message}</h3>
            </div>
        )
    }
    return (  
        <>{children}</>
    );
}
 
export default AuthWrapper;