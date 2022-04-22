import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorHidden, setErrorHidden] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    login: true,
    email: "",
    password: "",
  });

  // to handle show/hide password input
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        email: loginForm.email,
        password: loginForm.password,
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
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({
                      ...loginForm,
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
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({
                        ...loginForm,
                        password: e.target.value,
                      })
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

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
