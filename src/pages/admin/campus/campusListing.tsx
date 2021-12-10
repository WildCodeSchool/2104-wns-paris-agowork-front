import React, { useState } from "react";
import { FormHelperText, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { GroupForm, Form } from "../../../assets/styles/login/login";
import SolidButton from "../../../components/buttons/solidButton";

export default function CampusListing(): JSX.Element {
  const [{ loading, error, data }] = useMutation(CREATE_CAMPUS,);

  return (
    <>
    </>
  );
}
