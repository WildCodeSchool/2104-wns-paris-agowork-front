import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import NewsCard from "./NewsCard";
import { Title, Hr } from "../../../assets/styles/dashboard/News";

export default function News(): JSX.Element {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user);
  }
  return (
    <>
      <Title>
        <h1>News du campus</h1>
        <p>Voir tous les articles</p>
      </Title>
      <Hr />
      <NewsCard />
    </>
  );
}
