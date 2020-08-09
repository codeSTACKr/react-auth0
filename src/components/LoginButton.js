import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">ProductHub</h5>
          <a
            className="btn btn-outline-primary"
            onClick={() => loginWithRedirect()}
            href="#"
          >
            Login
          </a>
        </div>
      </div>
    )
  );
};

export default LoginButton;
