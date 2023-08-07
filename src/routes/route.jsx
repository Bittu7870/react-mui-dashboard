import React from "react";
import PublicRoute from "./publicRoute";
import Dashboard from "../page/dashboard";
import Team from "../page/Teams";
import SavePost from "../page/forms/savePost";
import RegisterUser from "../page/user/registerUser";
import Login from "../page/user/login";
import PrivateRoute from "./privateRoute";
import Products from "../page/products";
import Calendar from "../page/calendar";
import FAQ from "../page/faq";
import Invoices from "../page/invoices";
import Line from "../page/line";
import Pie from "../page/pie";
import Geography from "../page/geography";
import Bar from "../page/bar";

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
      path: "/calendar",
      element: <PrivateRoute component={Calendar} />,
    },
    {
      path: "/faq",
      element: <PrivateRoute component={FAQ} />,
    },
    {
      path: "/line",
      element: <PrivateRoute component={Line} />,
    },
    {
      path: "/pie",
      element: <PrivateRoute component={Pie} />,
    },
    {
      path: "/geography",
      element: <PrivateRoute component={Geography} />,
    },
    {
      path: "/invoices",
      element: <PrivateRoute component={Invoices} />,
    },
    {
      path: "/bar",
      element: <PrivateRoute component={Bar} />,
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
