// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import UserCreation from "../pages/admin/user/userCreation";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../components/ressources/ressources";
import AuthRoute from "./authRoute";
import CampusCreation from "../pages/admin/campus/campusCreation";

const Page = (): JSX.Element => {
  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/mes-ressources" component={Ressources} />
        <AuthRoute exact path="/cours" component={ModuleList} />
        <AuthRoute exact path="/creation-user" component={UserCreation} />
        <AuthRoute exact path="/creation-campus" component={CampusCreation} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Page;
