import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import FormElement from "../../../components/form/formElement";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { CampusForm, Form, FormBox } from "../../../assets/styles/form";
import SolidButton from "../../../components/buttons/solidButton";
import CampusListing from "./campusListing";
import { CardTitle, FormTitle } from "../../../assets/styles/list/list";

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
      </FormBox>
      <CampusListing />
    </>
  );
}
