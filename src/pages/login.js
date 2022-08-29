import React from "react"
import { useAuth } from "react-oidc-context";

const Login = () => {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => void auth.removeUser()}>Log out</button>
        </div>
        );
    }

    return (
        
        <div className="mainPage">
        <section className="menu" id="menu" >
        <div style={{ width: '25%', backgroundColor: 'lightgray', 
                      padding: '50px' }} >
          <h3> Login to Unified Portal </h3>
          Single Sign-On<br></br>
          <br></br>
          <button onClick={() => void auth.signinRedirect()}> Login </button>
        </div>
          
        </section>
        </div>
      )
    }


export default Login