import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormHelperText, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user/User";
import {
  GroupForm,
  Title,
  Form,
  LoginCard,
  CardContent,
} from "../../assets/styles/login/Login";
import Loading from "../../components/loading/Loading";
import { AuthContext } from "../../context/Auth";
import SolidButton from "../../components/buttons/SolidButton";
import ErrorPopup from "../../components/error/ErrorPopup";

export default function Login(): JSX.Element {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
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
      error.graphQLErrors.map(({ message }) => setErrorMessage(message));
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

  if (errorMessage !== "") {
    return (
      <LoginCard>
        <CardContent>
          <ErrorPopup errorMessage={errorMessage} />
        </CardContent>
      </LoginCard>
    );
  }

  return (
    <LoginCard>
      <CardContent>
        <Title>Login</Title>
        {loading ? (
          <Loading />
        ) : (
          <Form onSubmit={handleLogin}>
            <GroupForm>
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
            </GroupForm>
            <GroupForm>
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
            </GroupForm>
            <SolidButton type="submit" textButton="Connexion" />
          </Form>
        )}
      </CardContent>
    </LoginCard>
  );
}
