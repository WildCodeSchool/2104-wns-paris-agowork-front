import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { useMutation } from "@apollo/client";
import FormElement from "../../../components/form/formElement";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { GroupForm, Form } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import CampusListing from "./campusListing";

type FormValues = {
  name: string;
  address: string;
  phone: string;
};

export default function CampusCreation(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addCampus, { loading }] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCampus: SubmitHandler<FormValues> = (input) => {
    addCampus({ variables: { input } });
    reset();
  };
  return (
    <>
      <h1>Ajouter un campus</h1>
      <Form onSubmit={handleSubmit(handleCampus)}>
        <FormElement label="name" type="text" register={register} required />
        <FormElement label="phone" type="text" register={register} false />
        <FormElement label="address" type="text" register={register} false />
        <SolidButton type="submit" textButton="Ajouter ce campus" />
      </Form>
      <CampusListing />
    </>
  );
}
