import { useQuery } from "@apollo/client";
import React, { createContext, PropsWithChildren,useEffect, useState } from "react";
import { GetLoggedUserByEmail } from "../graphql/queries/user";
import { UserInterface } from "../interfaces/UserInterface";

export const myContext = createContext<Partial<UserInterface>>({});
export default function Context({data}: any) {
    const [user, setUser] = useState<UserInterface>();
    console.log(data);
    setUser(data);
    return (
        <myContext.Provider value={user!}>{data}</myContext.Provider>
    )
}