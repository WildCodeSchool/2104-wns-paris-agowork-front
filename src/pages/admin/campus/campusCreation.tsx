import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import { School } from "@mui/icons-material";
import FormElement from "../../../components/form/formElement";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { CampusForm, Form, FormBox } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import CampusListing from "./campusListing";
import {
  BoxIcon,
  FormTitle,
  LatestCreatedTitle,
} from "../../../assets/styles/list/list";
import { CampusType } from "../../../types/campus";
import CampusCard from "../../../components/cards/campusCard";

type FormValues = {
  name: string;
  address: string;
  phone: string;
};

export default function CampusCreation(): JSX.Element {
  const [latestCampus, setLatestCampus] = useState<CampusType>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createCampus, { loading }] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      setLatestCampus(data.createCampus);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCampus: SubmitHandler<FormValues> = (input) => {
    createCampus({ variables: { input } });
    reset();
  };
  return (
    <>
      <FormBox>
        <CampusForm>
          <FormTitle>Ajouter un campus</FormTitle>
          <Form onSubmit={handleSubmit(handleCampus)}>
            <FormElement
              label="name"
              type="text"
              register={register}
              required
            />
            <FormElement label="phone" type="text" register={register} false />
            <FormElement
              label="address"
              type="text"
              register={register}
              false
            />
            <SolidButton type="submit" textButton="Ajouter ce campus" />
          </Form>
        </CampusForm>
        {latestCampus ? (
          <Box>
            <LatestCreatedTitle>
              👉&nbsp;&nbsp;Nouveau campus
            </LatestCreatedTitle>
            <CampusCard {...latestCampus} key={latestCampus.id} />
          </Box>
        ) : (
          <></>
        )}
      </FormBox>
      <CampusListing />
    </>
  );
}
