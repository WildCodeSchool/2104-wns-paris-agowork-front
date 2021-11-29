import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import News from "./News/News";
import Mood from "./Mood/Mood";
import Chill from "./Chill/Chill";
import { Title, Hr, Space } from "../../assets/styles/dashboard/Dashboard";

export default function Dashboard(): JSX.Element {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Title>
        <h1>News du campus</h1>
        <p>Voir tous les articles</p>
      </Title>
      <Hr />
      <News />
      <Space />
      <Title>
        <h1>Mood du jour</h1>
        <p>Voir le mood de ta promo</p>
      </Title>
      <Hr />
      <Mood />
      <Space />
      <Title>
        <h1>Détente</h1>
        <p>Voir tous les jeux</p>
      </Title>
      <Hr />
      <Chill />
    </>
  );
}
