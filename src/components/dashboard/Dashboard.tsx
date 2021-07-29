// @ts-nocheck
import React from "react";
import { UserContext } from "../../context/UserContext";

export default function Dashboard(): JSX.Element {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
  <p>Hey</p>
  );
}
