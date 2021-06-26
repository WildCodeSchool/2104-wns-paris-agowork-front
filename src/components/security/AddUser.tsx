import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useMutation } from "@apollo/client";
import { CreateUser } from "../../graphql/mutations/user";
import {
  RadioButtons,
  FormElements,
  Achievment,
  InputAchievment,
} from "../../assets/styles/studentCourse/Elements";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function AddUser(): JSX.Element {
  const classes = useStyles();
  const [createUser, { data }] = useMutation(CreateUser);
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    picture: "",
    role: "",
    password: "",
  });

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        createUser({
          variables: {
            input: {
              ...formState,
              data,
            },
          },
        });
      }}
    >
      <TextField
        className={classes.margin}
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
        className={classes.margin}
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
        className={classes.margin}
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
        className={classes.margin}
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
        className={classes.margin}
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
        className={classes.margin}
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
      <FormElements>
        <RadioButtons>
          <Achievment>Student</Achievment>
          <InputAchievment
            name="role"
            value="STUDENT"
            onChange={(e) =>
              setFormState({
                ...formState,
                role: e.target.value,
              })
            }
          />
        </RadioButtons>
        <RadioButtons>
          <Achievment>Admin </Achievment>
          <InputAchievment
            name="role"
            value="ADMIN"
            onChange={(e) =>
              setFormState({
                ...formState,
                role: e.target.value,
              })
            }
          />
        </RadioButtons>
        <RadioButtons>
          <Achievment>Teacher</Achievment>
          <InputAchievment
            name="role"
            value="TEACHER"
            onChange={(e) =>
              setFormState({
                ...formState,
                role: e.target.value,
              })
            }
          />
        </RadioButtons>
      </FormElements>
    </form>
  );
}
