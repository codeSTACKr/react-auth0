import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="btn btn-outline-primary logout"
        onClick={() => logout()}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
