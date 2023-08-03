import React from "react";
import PublicRoute from "./publicRoute";
import Dashboard from "../page/dashboard";
import Team from "../page/Teams";
import SavePost from "../forms/savePost";
import RegisterUser from "../page/user/registerUser";
import Login from "../page/user/login";
import PrivateRoute from "./privateRoute";
import Products from "../page/products";

const CombineRoute = () => {
  return [
    {
      path: "/dashboard",
      element: <PrivateRoute component={Dashboard} />,
    },
    {
      path: "/team",
      element: <PrivateRoute component={Team} />,
    },
    {
      path: "/form",
      element: <PrivateRoute component={SavePost} />,
    },
    {
      path: "/products",
      element: <PrivateRoute component={Products} />,
    },
    {
      path: "/signup",
      element: <PublicRoute component={RegisterUser} />,
    },
    {
      path: "/",
      element: <PublicRoute component={Login} />,
    },
  ];
};

export default CombineRoute;
