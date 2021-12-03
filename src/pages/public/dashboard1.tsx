import React from "react";
import News from "../../components/dashboard1/news1/news1";
import Mood from "../../components/dashboard1/mood1/mood1";
import Chill from "../../components/dashboard1/chill1/chill1";
import { Title, Hr, Space } from "../../assets/styles/dashboard1/dashboard";

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
