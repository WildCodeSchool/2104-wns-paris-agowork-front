// eslint-disable-next-line
// @ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";
import UserCreation from "../pages/admin/User_Creation";
import Dashboard from "../pages/public/Dashboard";
import Login from "../pages/public/Login";
import ModuleList from "../components/course/students/Module_List";
import Ressources from "../components/ressources/Ressources";
import Sidebar from "../components/sidebar/Sidebar";
import { Container, ModuleWrapper } from "../assets/styles/course/Elements";
import AuthRoute from "./AuthRoute";

const Router = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Container>
        <ModuleWrapper>
          <Switch>
      
            <AuthRoute exact path="/" component={Dashboard} />
            <AuthRoute exact path="/ressources" component={Ressources} />
            <AuthRoute exact path="/modules" component={ModuleList} />
            <AuthRoute exact path="/creation-user" component={UserCreation} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ModuleWrapper>
      </Container>
    </>
  );
};

export default Router;
