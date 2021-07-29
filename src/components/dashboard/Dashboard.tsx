// @ts-nocheck
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Dashboard(): JSX.Element {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
  <p>Hey</p>
  );
}
