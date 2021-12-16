import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../../context/auth";
import { moods } from "../../mood/mood.enum";
import {
  Card,
  ContentCard,
  FormGroup,
  IconMood,
  TitleMood,
  MoodInput,
} from "../../../assets/styles/dashboard/mood";
import { UPDATE_MOOD } from "../../../graphql/mutations/social/mood";
import SolidButton from "../../buttons/solidButton";

export default function MoodCard(): JSX.Element {
  const context = useContext(AuthContext);
  const [currentMood, setCurrentMood] = useState(context.user.mood);
  const [errorMessage, setErrorMessage] = useState("");
  const [mood, { loading }] = useMutation(UPDATE_MOOD, {
    onCompleted: (data) => {
      setErrorMessage("");
      const userData = data;
      console.log(userData);
      context.login(userData.mood);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleMood = (e: any) => {
    e.preventDefault();
    mood({
      variables: {
        input: {
          email: context.user.email,
          mood: currentMood,
        },
      },
    });
  };
  return (
    <Card>
      <ContentCard>
        <TitleMood>Mood du jour</TitleMood>
        <form data-testid="formMood" onSubmit={handleMood}>
          {moods.map((el) => {
            return (
              <FormGroup key={el.mood}>
                <MoodInput
                  name="mood"
                  value={el.mood}
                  checked={currentMood === el.mood}
                  onChange={(e) => setCurrentMood(e.target.value)}
                />
                <IconMood src={el.icon} alt="icone" />
              </FormGroup>
            );
          })}
          <SolidButton type="submit" textButton="Mettre à jour" />
        </form>
      </ContentCard>
    </Card>
  );
}
