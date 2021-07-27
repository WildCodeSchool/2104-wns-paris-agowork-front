import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Login } from "../../graphql/mutations/user";
import { Form, StyledButton } from "../../assets/styles/studentCourse/Elements";

export default function SignIn(): JSX.Element {
  const [login, { data }] = useMutation(Login);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  if (data && data.login) {
    window.location.href = "/dashboard";
  } else {
    console.log("echec de connection");
  }
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        login({
          variables: {
            email,
            password,
          },
        });
      }}
    >
      <FormControl>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          label="email"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          label="password"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <StyledButton type="submit">Connexion</StyledButton>
    </Form>
  );
}
