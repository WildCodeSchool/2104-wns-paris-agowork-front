// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import ModuleList from "../components/course/students/ModuleList";
import Ressources from "../components/ressources/Ressources";
import AddUser from "../components/admin/AddUser";
import SignIn from "../components/security/Login";
import {
  Container,
  ModuleWrapper,
} from "../assets/styles/studentCourse/Elements";
import Sidebar from "../components/sidebar/Sidebar";
import AuthRoute from "./AuthRoute";

const Router = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Container>
        <ModuleWrapper>
          <Switch>
            <Route exact path="/" exact component={Dashboard} />
            <Route exact path="/addUser" exact component={AddUser} />
            <Route exact path="/ressources" exact component={Ressources} />
            <Route exact path="/modules" exact component={ModuleList} />
            <AuthRoute exact path="/login" exact component={SignIn} />
          </Switch>
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default Router;
