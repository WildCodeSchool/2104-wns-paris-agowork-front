import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Typography,
} from "@mui/material";
import { ArrowForwardIos, ExpandMore } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import FormElement from "../../../components/form/formElement";
import { CREATE_MOOD } from "../../../graphql/mutations/user/mood";
import { Form, FormBox } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import { BoxIcon } from "../../../assets/styles/list/userList";
import FormSelect from "../../../components/form/formSelect";
import { moods } from "../../../components/mood/mood.enum";
import MoodListing from "./moodListing";

type FormValues = {
  name: string;
  icon: string;
};

export default function MoodCreation(): JSX.Element {
  const [expanded, setExpanded] = useState<string | true>(true);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : true);
    };
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
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);
  const handleMood: SubmitHandler<FormValues> = (input) => {
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
    <Accordion
      expanded={expanded === "createMood"}
      onChange={handleChange("createMood")}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="createMood-content"
        id="createMood-header"
      >
        <Typography
          sx={{
            width: "35%",
            fontWeight: "bold",
            marginLeft: 2,
            flexShrink: 0,
          }}
        >
          Ajouter un mood
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormBox>
          <Form onSubmit={handleSubmit(handleMood)}>
            <BoxIcon>
              <FormElement
                label="name"
                type="text"
                register={register}
                required
              />
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
            <Typography sx={{ marginTop: 2 }}>
              {watchIcon === false
                ? "Ajouter un icon personnalisé"
                : "Revenir à la sélection"}
              <input type="checkbox" {...register("personnalIcon")} />
            </Typography>
            <SolidButton type="submit" textButton="Ajouter ce mood" />
          </Form>
          <MoodListing />
        </FormBox>
        <Typography>
          Voir tous les moods
          <ArrowForwardIos />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
