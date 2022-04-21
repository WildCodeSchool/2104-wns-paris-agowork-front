import React from "react";
import { Route, Redirect } from "react-router-dom";

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
        localStorage.getItem("jwt") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthRoute;
