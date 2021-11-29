import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const AuthRoute = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentClass;
}): JSX.Element => {
  // si on a un user, on redirige vers le composant, sinon on redirige vers login

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        // eslint-disable-next-line react/jsx-props-no-spreading
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthRoute;
