// @ts-nocheck
import React, { useState } from "react";
import { createContext } from "react";


export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          {children}
        </UserContext.Provider>
      );
}