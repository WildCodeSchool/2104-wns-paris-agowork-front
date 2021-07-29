import React, { useMemo, useState } from "react";
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
import Sidebar from "./sidebar/Sidebar";
import { UserContext } from "../context/UserContext";

const Page = (): JSX.Element => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <>
    <Sidebar />
    <Container>
      <ModuleWrapper>
        <Switch>
        <UserContext.Provider value={value!}>
          <Route path="/login" exact component={SignIn} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/addUser" exact component={AddUser} />
          <Route path="/ressources" exact component={Ressources} />
          <Route path="/modules" exact component={ModuleList} />
          </UserContext.Provider>
        </Switch>
      </ModuleWrapper>
    </Container>
    </>
  );
};

export default Page;
