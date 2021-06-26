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
      {/* <Route path="/addUser" exact>
        <AddUser />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/moduleList" exact>
        <ModuleList />
      </Route>
      <Route path="/ressources" exact>
        <Ressources />
      </Route> */}
    </Switch>
  );
};

export default Page;
