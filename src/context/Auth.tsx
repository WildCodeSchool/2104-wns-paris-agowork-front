import React, { createContext } from "react";
import jwt_decode from "jwt-decode";

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    token: "",
    picture: "",
  },
};

if (localStorage.getItem("token")) {
  const decodedToken: any = jwt_decode(localStorage.getItem("token") || "");
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    // initialState.user = {...user};
  } else {
    initialState.user.token = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});

function AuthProvider(props: any) {
  function login(userData: any) {}

  function logout() {
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ user: initialState.user, login, logout }}
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
