import React, { createContext, useState } from "react";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import { useLazyQuery } from "@apollo/client";
import { Login } from "../../graphql/queries/user";
import { Form, StyledButton } from "../../assets/styles/studentCourse/Elements";
import Context from "../../context/UserContext";

export default function SignIn(): JSX.Element {
  const [login, { data }] = useLazyQuery(Login);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  if (data) {
    localStorage.setItem("token", data.login.token);
    <Context {...data}/>
  } 
  return (
    <Form>
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
      <StyledButton 
        onClick={async () => {
          try {
            await login({
              variables: {
                email,
                password,
              },
            });
          } catch (err){
            console.log("Login error :", err);
          }
        }}
      >Connexion</StyledButton>
    </Form>
  );
}
