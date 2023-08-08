import React from "react";

const PublicRoute = ({ component: Component }) => {
  const token = localStorage.getItem("Token");
  if (!token) {
    return (
      <>
        <Component />
      </>
    );
  } else {
    return (window.location.href = "/dashboard");
  }
};

export default PublicRoute;
