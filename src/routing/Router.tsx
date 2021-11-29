// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import ModuleList from "../components/course/students/ModuleList";
import Ressources from "../components/ressources/Ressources";
import AddUser from "../components/admin/AddUser";
import Login from "../components/security/Login";
import Sidebar from "../components/sidebar/Sidebar";
import AuthRoute from "./AuthRoute";
import {
  Container,
  ModuleWrapper,
} from "../assets/styles/studentCourse/Elements";

const Router = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Container>
        <ModuleWrapper>
          <Switch>
            <AuthRoute exact path="/" component={Dashboard} />
            <AuthRoute exact path="/addUser" component={AddUser} />
            <AuthRoute exact path="/ressources" component={Ressources} />
            <AuthRoute exact path="/modules" component={ModuleList} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default Router;
