import React, { Fragment } from "react";
import TopBar from "../page/global/TopBar";
import SideBar from "../page/global/SideBar";
import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("Token");
  console.log(token);
  if (token) {
    return (
      <Fragment>
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Component />
          </main>
        </div>
      </Fragment>
    );
  } else {
    <Navigate to="/" />;
  }
};

export default PrivateRoute;
