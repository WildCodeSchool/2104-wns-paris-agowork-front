// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import UserCreation from "../pages/admin/user/userCreation";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../components/ressources/ressources";
import CampusCreation from "../pages/admin/campus/campusCreation";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./adminRoute";
import GeneralForm from "../pages/admin/administrationGeneral";
import MoodCreation from "../pages/admin/mood/moodCreation";

const Page = (): JSX.Element => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/mes-ressources" component={Ressources} />
        <PrivateRoute exact path="/cours" component={ModuleList} />
        <Route exact path="/login" component={Login} />
        <AdminRoute exact path="/utilisateur" component={UserCreation} />
        <AdminRoute exact path="/campus" component={CampusCreation} />
        <AdminRoute exact path="/general" component={GeneralForm} />
        <AdminRoute exact path="/mood" component={MoodCreation} />
      </Switch>
    </>
  );
};

export default Page;
