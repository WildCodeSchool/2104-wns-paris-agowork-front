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
import { AuthContext } from "../context/authContext";
import GeneralForm from "../pages/admin/administrationGeneral";
import MoodCreation from "../pages/admin/mood/moodCreation";

const Page = (): JSX.Element => {
  const user = useContext(AuthContext);
  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/mes-ressources" component={Ressources} />
        <AuthRoute exact path="/cours" component={ModuleList} />
        <Route exact path="/login" component={Login} />
        {user?.role === "ADMIN" || user?.role === "SUPERADMIN" ? (
          <>
            <AuthRoute exact path="/utilisateur" component={UserCreation} />
            <AuthRoute exact path="/campus" component={CampusCreation} />
            <AuthRoute exact path="/general" component={GeneralForm} />
            <AuthRoute exact path="/mood" component={MoodCreation} />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </>
  );
};

export default Page;
