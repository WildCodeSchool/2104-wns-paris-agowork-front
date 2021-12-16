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

type FormValues = {
  id: string;
  email: string;
};

export default function MoodCard(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const context = useContext(AuthContext);
  const [currentMood, setCurrentMood] = useState(context.user.mood);
  const [errorMessage, setErrorMessage] = useState("");
  const [updateUserMood] = useMutation(UPDATE_USER_MOOD, {
    onCompleted: (data) => {
      setErrorMessage("");
      console.log(data.updateUserMood);
      const userMood = data.updateUserMood.mood;
      setCurrentMood(userMood.icon);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { data: allMoods } = useQuery<GetMoodsType>(GET_ALL_MOODS);

  const handleMood: SubmitHandler<FormValues> = (input) => {
    console.log(input.id);
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
            label="id"
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
