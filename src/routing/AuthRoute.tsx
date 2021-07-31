// @ts-nocheck
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/Auth";

function AuthRoute({ component: Component, ...rest }): JSX.Element {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
