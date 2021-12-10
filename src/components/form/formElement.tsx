import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CAMPUS } from "../../graphql/mutations/infrastructures/campus";
import { FormHelperText, TextField } from "@mui/material";
import { GroupForm } from "../../assets/styles/login/login";

export default function formElement({ formEl }: any): JSX.Element {
  return (
    <GroupForm>
      <TextField
        // value={formState.password}
        onChange={(e) => {}}
        type="password"
        label="password"
        variant="outlined"
        id="password-mui-theme-provider-outlined-input"
      />
      <FormHelperText>Required</FormHelperText>
    </GroupForm>
  );
}
