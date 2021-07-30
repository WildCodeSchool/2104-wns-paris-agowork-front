import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export default function Dashboard(): JSX.Element {
  const {user, login } = useContext(AuthContext);
  if (user) {
    console.log(user!);
  }
  return (
  <p>Hey</p>
  );
}
