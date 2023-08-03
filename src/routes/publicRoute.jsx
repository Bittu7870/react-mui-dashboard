import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component }) => {
  const token = localStorage.getItem("Token");
  if (!token) {
    return (
      <>
        <Component />
      </>
    );
  } else {
    return <Navigate to="/dashboard" replace={true} />;
  }
};

export default PublicRoute;
