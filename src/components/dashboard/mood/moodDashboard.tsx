import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { MenuItem } from "@mui/material";
import { AuthContext } from "../../../context/authContext";
import {
  Card,
  ContentCard,
  TitleMood,
} from "../../../assets/styles/dashboard/mood";
import { UPDATE_USER_MOOD } from "../../../graphql/mutations/social/mood";
import SolidButton from "../../buttons/solidButton";
import { GET_ALL_MOODS } from "../../../graphql/queries/social/mood";
import { GetMoodsType } from "../../../types/moods";
import FormSelect from "../../form/formSelect";
import { MoodIcon } from "../../../assets/styles/list/list";
import { GET_LOGGED_USER } from "../../../graphql/queries/user/user";

type FormValues = {
  id: string;
  email: string;
};

export default function MoodCard(): JSX.Element {
  const { user } = useContext(AuthContext);
  const { data: allMoods } = useQuery<GetMoodsType>(GET_ALL_MOODS);
  const { data: loggedUser } = useQuery(GET_LOGGED_USER);
  const [currentMood, setCurrentMood] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [updateUserMood] = useMutation(UPDATE_USER_MOOD, {
    onCompleted: (data) => {
      setErrorMessage("");
      const userMood = data.updateUserMood.mood;
      setCurrentMood(userMood.icon);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleMood: SubmitHandler<FormValues> = (input) => {
    console.log(user);
    updateUserMood({
      variables: {
        id: input.id,
        email: user?.email,
      },
    });
  };
  return (
    <Card>
      <ContentCard>
        <TitleMood>Mood du jour</TitleMood>
        <MoodIcon>
          {!currentMood
            ? loggedUser?.getLoggedUserByEmail.mood.icon
            : currentMood}
        </MoodIcon>
        <form data-testid="formMood" onSubmit={handleSubmit(handleMood)}>
          <FormSelect
            id="icon-select"
            name="id"
            label="Changer de mood"
            control={control}
          >
            {allMoods?.getMoods.map((list: any) => (
              <MenuItem key={list.id} value={list.id}>
                {list.icon} {list.name}
              </MenuItem>
            ))}
          </FormSelect>
          <SolidButton textButton="Mettre à jour" type="submit" />
        </form>
      </ContentCard>
    </Card>
  );
}
