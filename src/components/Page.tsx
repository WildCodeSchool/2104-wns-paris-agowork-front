import React from "react";
import { Dashboard } from "@material-ui/icons";
import { Route, Switch } from "react-router-dom";
import ModuleList from "./course/students/ModuleList";
import Ressources from "./ressources/Ressources";
import AddUser from "./security/AddUser";
import Login from "./security/Login";

const Page = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/addUser" exact component={AddUser} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/ressources" exact component={Ressources} />
      <Route path="/modules" exact component={ModuleList} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Page;
