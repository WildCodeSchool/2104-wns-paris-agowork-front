// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ModuleList from "./course/students/ModuleList";
import Ressources from "./ressources/Ressources";
import AddUser from "./admin/AddUser";
import SignIn from "./security/Login";
import {
  Container,
  ModuleWrapper,
} from "../assets/styles/studentCourse/Elements";
import Sidebar from "./sidebar/Sidebar";
import AuthRoute from "./AuthRoute";
import { AuthProvider } from "../context/Auth";

const Router = (): JSX.Element => {
  return (
    <AuthProvider>
      <Sidebar />
      <Container>
        <ModuleWrapper>
          <Switch>
            <Route exact path="/" exact component={Dashboard} />
            <Route exact path="/addUser" exact component={AddUser} />
            <Route path="/ressources" exact component={Ressources} />
            <Route path="/modules" exact component={ModuleList} />
            <AuthRoute path="/login" exact component={SignIn} />
          </Switch>
        </ModuleWrapper>
      </Container>
    </AuthProvider>
  );
};

export default Router;
