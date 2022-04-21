import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentClass;
}): JSX.Element => {
  const { user } = useContext(AuthContext);
  return (
    // si on a un user, on redirige vers le composant, sinon on redirige vers login
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
