import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import News from "./News/News";

export default function Dashboard(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }
  return <News />;
}
