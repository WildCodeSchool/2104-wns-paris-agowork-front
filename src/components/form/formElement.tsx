import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FormHelperText, TextField } from "@mui/material";
import { CREATE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";
import { GroupForm } from "../../assets/styles/login/login";

export default function FormElement({
  label,
  required,
  register,
  type,
}: any): JSX.Element {
  return (
    <TextField
      {...register(label, { required })}
      type={type}
      required={required}
      label={label}
      variant="outlined"
      id={`${label}-input`}
    />
  );
}
