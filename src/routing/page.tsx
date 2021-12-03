// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import UserCreation from "../pages/admin/userCreation";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../components/ressources/ressources";
import AuthRoute from "./authRoute";

const Page = (): JSX.Element => {
  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/ressources" component={Ressources} />
        <AuthRoute exact path="/modules" component={ModuleList} />
        <AuthRoute exact path="/creation-user" component={UserCreation} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Page;
