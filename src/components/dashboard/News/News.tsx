import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import NewsCard from "./NewsCard";

export default function News(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }
  return <NewsCard />;
}
