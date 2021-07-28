import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ModuleList from "./course/students/ModuleList";
import Ressources from "./ressources/Ressources";
import AddUser from "./security/AddUser";
import SignIn from "./security/SignIn";
import {
  Container,
  ModuleWrapper,
} from "../assets/styles/studentCourse/Elements";

const Page = (): JSX.Element => {
  return (
    <Container>
      <ModuleWrapper>
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/addUser" exact component={AddUser} />
          <Route path="/ressources" exact component={Ressources} />
          <Route path="/modules" exact component={ModuleList} />
        </Switch>
      </ModuleWrapper>
    </Container>
  );
};

export default Page;
