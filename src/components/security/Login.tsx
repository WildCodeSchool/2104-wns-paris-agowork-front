import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user";
import { Form, StyledButton } from "../../assets/styles/studentCourse/Elements";
import { AuthContext } from "../../context/Auth";

export default function Login(): JSX.Element {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [loginUser, { data }] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userData = data;
  useEffect(() => {
    if (userData) {
      localStorage.setItem("token", userData.login.token);
      context.login(userData);
      history.push("/");
    }
  }, [userData, history, context]);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        loginUser({
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
