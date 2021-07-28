import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from "@material-ui/core";
import { CreateUser } from "../../graphql/mutations/user";
import { Form, StyledButton } from "../../assets/styles/studentCourse/Elements";

export default function AddUser(): JSX.Element {
  const [roleState, setRoleState] = React.useState<{
    selectRole: string;
    name: string;
  }>({
    selectRole: "",
    name: "string",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof roleState;
    setRoleState({
      ...roleState,
      [name]: event.target.value,
    });
  };

  const [createUser, { data }] = useMutation(CreateUser);
  console.log(data);
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    picture: "https://i.postimg.cc/RZX6Y3jH/avatar.png",
    role: "",
    password: "",
  });

  return (
    <>
      <h1>Ajouter un utilisateur</h1>
      <Form
        onSubmit={(e) => {
          formState.role = roleState.selectRole;
          e.preventDefault();
          createUser({
            variables: {
              input: {
                ...formState,
              },
            },
          });
          if (data) {
            window.location.href = "/dashboard";
          } else {
            console.log("echec de création");
          }
        }}
      >
        <FormControl>
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
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl>
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
          <FormHelperText>Required</FormHelperText>
        </FormControl>
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
            id="mui-theme-provider-outlined-input"
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
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
        <FormControl>
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
            type="text"
            label="password"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-selectRole-native-simple">
            Role
          </InputLabel>
          <Select
            native
            value={roleState.selectRole}
            onChange={handleChange}
            label="selectRole"
            inputProps={{
              name: "selectRole",
              id: "outlined-selectRole-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <StyledButton type="submit">Ajouter cet utilisateur</StyledButton>
      </Form>
    </>
  );
}
