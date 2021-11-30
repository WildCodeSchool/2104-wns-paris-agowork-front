import React from "react";
import News from "../../components/dashboard/news/News";
import Mood from "../../components/dashboard/mood/Mood";
import Chill from "../../components/dashboard/chill/Chill";
import { Title, Hr, Space } from "../../assets/styles/dashboard/Dashboard";

export default function Dashboard(): JSX.Element {
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
