// @ts-nocheck
import React from "react";
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
import { useAuth } from "../context/UserContext";

const Page = (): JSX.Element => {
  // const ProtectedRoute = ({children, ...rest}) => {
    const { currentUser } = useAuth();
  return (
    <>
    <Sidebar />
    <Container>
      <ModuleWrapper>
        <Switch>
          
    
          { currentUser ? 
          <>
          <Route exact path="/"> 
            <Dashboard/>
          </Route>
          <Route exact path="/addUser"> 
            <AddUser/>
          </Route>
          {/* <Route path="/ressources" exact component={Ressources} />
          <Route path="/modules" exact component={ModuleList} /> */}
          </>  : 
            (
              <Redirect 
                to={{ pathname: '/login'
                }}
              />
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
