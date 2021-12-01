import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, FormHelperText, TextField, Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user/User";
import { Form } from "../../assets/styles/course/Elements";
import { AuthContext } from "../../context/Auth";
import SolidButton from "../../components/buttons/SolidButton";

export default function Login(): JSX.Element {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  });
  const [login, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      const userData = data;
      localStorage.setItem("token", userData.login.token);
      context.login(userData.login);
      history.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
  };

  if (loading) {
    console.log(loading);
  }
  return (
    <Form onSubmit={handleLogin}>
      <Box sx={{ justifyContent: "center", flexDirection: "row" }}>
        <FormControl>
          <TextField
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            type="text"
            label="email"
            variant="outlined"
            id="email-mui-theme-provider-outlined-input"
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl>
          <TextField
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="password"
            label="password"
            variant="outlined"
            id="password-mui-theme-provider-outlined-input"
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </Box>
      <SolidButton type="submit" textButton="Connexion" />
    </Form>
  );
}
