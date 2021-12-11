// eslint-disable-next-line
// @ts-nocheck
import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserCreation from "../pages/admin/user/userCreation";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../components/ressources/ressources";
import AuthRoute from "./authRoute";
import CampusCreation from "../pages/admin/campus/campusCreation";
import { AuthContext } from "../context/auth";

const Page = (): JSX.Element => {
  const context = useContext(AuthContext);
  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/mes-ressources" component={Ressources} />
        <AuthRoute exact path="/cours" component={ModuleList} />
        <Route exact path="/login" component={Login} />
        {context.user.role && context.user.role === "SUPERADMIN" ? (
          <>
            <AuthRoute exact path="/creation-user" component={UserCreation} />
            <AuthRoute
              exact
              path="/creation-campus"
              component={CampusCreation}
            />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </>
  );
};

export default Page;
