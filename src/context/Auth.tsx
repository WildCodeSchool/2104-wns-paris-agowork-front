import React, { createContext } from "react";
import jwt_decode from "jwt-decode";

const initialState = {
  user: null
};

if (localStorage.getItem("token")) {
  const decodedToken: any = jwt_decode(localStorage.getItem("token") || "");
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    initialState.user = null;
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});


function AuthProvider(props: any) {

  function login(userData: any) {
  }

  function logout() {
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ user: initialState.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
