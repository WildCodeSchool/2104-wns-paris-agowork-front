import React, { useContext } from "react";
import { myContext } from "../../context/UserContext";
import { useQuery } from "@apollo/client";
import { GetAllUsers } from "../../graphql/queries/user";

export default function Dashboard(): JSX.Element {
  const userCtx = useContext(myContext);
  // const { loading, error, data } = useQuery(GetAllUsers);
  // if (loading) {
  //   return <p>Loading...</p>
  // } else if (error) {
  //   console.log("error", error);
  //   return <p>Error :</p>;
  // }
  // console.log(data);
  return (
  <p>Hey {userCtx.firstname}</p>
  );
}
