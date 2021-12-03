import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FormHelperText, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user/user1";
import {
  GroupForm,
  Title,
  Form,
  LoginCard,
  CardContent,
} from "../../assets/styles/login/login";
import Loading from "../../components/loading/loading";
import { AuthContext } from "../../context/auth";
import SolidButton from "../../components/buttons/solidButton";
import ErrorPopup from "../../components/error/errorPopup";

export default function Login(): JSX.Element {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorHidden, setErrorHidden] = useState(true);
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  });
  const [login, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      setErrorMessage("");
      const userData = data;
      localStorage.setItem("token", userData.login.token);
      context.login(userData.login);
      history.push("/");
    },
    onError: (error) => {
      error.graphQLErrors.map(
        ({ message }) => setErrorMessage(message),
        setErrorHidden(false)
      );
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

  return (
    <LoginCard>
      <CardContent>
        <Title>Login</Title>
        {loading && errorHidden ? (
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
        {errorMessage !== "" && !errorHidden ? (
          <ErrorPopup errorMessage={errorMessage} errorHidden={errorHidden} />
        ) : (
          <> </>
        )}
      </CardContent>
    </LoginCard>
  );
}
