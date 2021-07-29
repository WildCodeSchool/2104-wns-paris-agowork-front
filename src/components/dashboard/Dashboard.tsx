// @ts-nocheck
import React from "react";
import { useAuth } from "../../context/UserContext";

export default function Dashboard(): JSX.Element {
  const {currentUser} = useAuth();
  console.log(currentUser);
  return (
  <p>Hey</p>
  );
}
