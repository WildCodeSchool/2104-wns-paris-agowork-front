import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { MenuItem, Typography } from "@mui/material";
import FormElement from "../../../components/form/formElement";
import { CREATE_MOOD } from "../../../graphql/mutations/user/mood";
import { Form } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import { BoxIcon } from "../../../assets/styles/list/userList";
import FormSelect from "../../../components/form/formSelect";
import { moods } from "../../../components/mood/mood.enum";

type FormValues = {
  name: string;
  icon: string;
};

export default function MoodCreation(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [addMood, { loading }] = useMutation(CREATE_MOOD, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const watchIcon = watch("personnalIcon", false);
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);
  const handleMood: SubmitHandler<FormValues> = (input) => {
    console.log("input", input);
    console.log("icon", input.icon);
    addMood({
      variables: {
        input: {
          name: input.name,
          icon: input.icon,
        },
      },
    });
    reset();
  };
  return (
    <>
      <h1>Ajouter un campus</h1>
      <Form onSubmit={handleSubmit(handleMood)}>
        <BoxIcon>
          <FormElement label="name" type="text" register={register} required />
          {watchIcon === false ? (
            <FormSelect
              id="icon-select"
              name="icon"
              label="icon"
              control={control}
              required
            >
              {moods.map((list: any) => (
                <MenuItem key={list.mood} value={list.icon}>
                  {list.icon}
                </MenuItem>
              ))}
            </FormSelect>
          ) : (
            <></>
          )}
          {watchIcon && (
            <FormElement label="icon" type="text" register={register} />
          )}
        </BoxIcon>
        <Typography>
          Ajouter un icon personnalisé
          <input type="checkbox" {...register("personnalIcon")} />
        </Typography>
        <SolidButton type="submit" textButton="Ajouter ce mood" />
      </Form>
    </>
  );
}
