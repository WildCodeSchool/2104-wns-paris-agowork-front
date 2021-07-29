// @ts-nocheck
import React, {useContext} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
    <Sidebar />
    <Container>
      <ModuleWrapper>
        <Switch>

          { currentUser != null ? (
            <>
          <Route exact path="/" exact component={Dashboard}/> 
          <Route exact path="/addUser" exact component={AddUser}/> 
          <Route path="/ressources" exact component={Ressources} />
          <Route path="/modules" exact component={ModuleList} /> 
          </> 
          )
         : 
            (
              // <Redirect 
              //   to={{ pathname: '/login'
              //   }}
              // />
              <Route path="/login" exact component={SignIn} />
              
            )
          }
        </Switch>
      </ModuleWrapper>
    </Container>
    </>
  );
  // }
};

export default Page;
