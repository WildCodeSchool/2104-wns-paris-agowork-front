import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import { GroupForm } from "../../assets/styles/form";

export default function FormElement({
  label,
  required,
  register,
  type,
}: any): JSX.Element {
  return (
    <GroupForm>
      <TextField
        {...register(label, { required })}
        type={type}
        required={required}
        label={label}
        variant="outlined"
        id={`${label}-input`}
      />
      {required ? <FormHelperText>Obligatoire</FormHelperText> : ""}
    </GroupForm>
  );
}
