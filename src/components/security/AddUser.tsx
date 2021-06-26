import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import { CreateUser } from "../../graphql/mutations/user";
import {
  Form,
  Container,
  ModuleWrapper,
  StyledButton,
} from "../../assets/styles/studentCourse/Elements";

export default function AddUser(): JSX.Element {
  // const classes = useStyles();
  const [createUser, { data }] = useMutation(CreateUser);
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    picture: "",
    role: "STUDENT",
    password: "",
  });

  return (
    <Container>
      <ModuleWrapper>
        <Form
          onSubmit={(e) => {
            console.log(formState);
            e.preventDefault();
            createUser({
              variables: {
                input: {
                  ...formState,
                },
              },
            });
          }}
        >
          <TextField
            value={formState.firstname}
            onChange={(e) =>
              setFormState({
                ...formState,
                firstname: e.target.value,
              })
            }
            type="text"
            label="firstname"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            value={formState.lastname}
            onChange={(e) =>
              setFormState({
                ...formState,
                lastname: e.target.value,
              })
            }
            type="text"
            label="lastname"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
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
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            value={formState.town}
            onChange={(e) =>
              setFormState({
                ...formState,
                town: e.target.value,
              })
            }
            type="text"
            label="town"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            value={formState.picture}
            onChange={(e) =>
              setFormState({
                ...formState,
                picture: e.target.value,
              })
            }
            type="text"
            label="picture"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="text"
            label="password"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <StyledButton type="submit" data-testid="submit-btn">
            Ajouter cet élève
          </StyledButton>
        </Form>
      </ModuleWrapper>
    </Container>
  );
}
