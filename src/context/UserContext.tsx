// @ts-nocheck
import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);
export function UserContext ({user, children}) {
    const [ currentUser, setcurrentUser ] = useState(user);

    return (
        <AuthContext.Provider value={{ currentUser, setcurrentUser}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);