import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, To } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FormHelperText, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/mutations/user/user";
import {
  Title,
  LoginCard,
  CardContent,
  LoginForm,
  LoginContainer,
  ColoredContainer,
} from "../../assets/styles/login/login";
import { GroupForm } from "../../assets/styles/form";
import Loading from "../../components/loading/loading";
import { AuthContext } from "../../context/authContext";
import SolidButton from "../../components/buttons/solidButton";
import ErrorPopup from "../../components/error/errorPopup";

interface State {
  to: To;
}

export default function Login(): JSX.Element {
  const state = useLocation().state as State;
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
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
      setUser(jwt_decode(data.login.token));
      localStorage.setItem("jwt", data.login.token);
      navigate("/");
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
    <LoginContainer component="main">
      <ColoredContainer />
      <LoginCard>
        <CardContent>
          <Title>Login</Title>
          {loading && errorHidden ? (
            <Loading />
          ) : (
            <LoginForm onSubmit={handleLogin}>
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
                  label="Mot de passe"
                  variant="outlined"
                  id="password-mui-theme-provider-outlined-input"
                />
                <FormHelperText>Required</FormHelperText>
              </GroupForm>
              <SolidButton type="submit" textButton="Connexion" />
            </LoginForm>
          )}
          {errorMessage !== "" && !errorHidden ? (
            <ErrorPopup errorMessage={errorMessage} errorHidden={errorHidden} />
          ) : (
            <> </>
          )}
        </CardContent>
      </LoginCard>
    </LoginContainer>
  );
}
