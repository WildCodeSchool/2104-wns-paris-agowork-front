import React, { createContext } from "react";
import jwt_decode from "jwt-decode";
import UserType from "../types/User";

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    town: "",
    picture: "",
    email: "",
    role: "",
  },
};

if (localStorage.getItem("token")) {
  const decodedToken: any = jwt_decode(localStorage.getItem("token") || "");
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  } else {
    initialState.user = {
      firstname: decodedToken.userFirstname,
      lastname: decodedToken.userLastname,
      email: decodedToken.userEmail,
      picture: decodedToken.userPicture || undefined,
      role: decodedToken.userRole,
      town: decodedToken.userTown,
    };
  }
}
const AuthContext = createContext({
  user: {
    firstname: "",
    lastname: "",
    town: "",
    picture: "",
    email: "",
    role: "",
  },
  login: (userData: UserType) => {},
  logout: () => {},
});

function AuthProvider(props: any) {
  function login(userData: UserType) {}

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
