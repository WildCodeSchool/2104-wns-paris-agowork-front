import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { MenuItem } from "@mui/material";
import { AuthContext } from "../../../context/auth";
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
  const { data: allMoods } = useQuery<GetMoodsType>(GET_ALL_MOODS);
  const { data: loggedUser } = useQuery(GET_LOGGED_USER);
  console.log("current user", loggedUser);
  const [currentMood, setCurrentMood] = useState(
    loggedUser?.getLoggedUserByEmail.mood.icon
  );
  const [errorMessage, setErrorMessage] = useState("");
  const context = useContext(AuthContext);
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
    updateUserMood({
      variables: {
        id: input.id,
        email: context.user.email,
      },
    });
  };
  return (
    <Card>
      <ContentCard>
        <TitleMood>Mood du jour</TitleMood>
        <MoodIcon>{currentMood}</MoodIcon>
        <form data-testid="formMood" onSubmit={handleSubmit(handleMood)}>
          <FormSelect
            id="icon-select"
            name="id"
            label="Mood"
            control={control}
            required
          >
            {allMoods?.getMoods.map((list: any) => (
              <MenuItem key={list.id} value={list.id}>
                {list.icon} {list.name}
              </MenuItem>
            ))}
          </FormSelect>
          <SolidButton type="submit" textButton="Mettre à jour" />
        </form>
      </ContentCard>
    </Card>
  );
}
