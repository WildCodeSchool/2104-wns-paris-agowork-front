import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CreateUser } from "../../graphql/mutations/user/User";
import { Form, StyledButton } from "../../assets/styles/course/Elements";

export default function UserCreation(): JSX.Element {
  const [roleState, setRoleState] = React.useState<{
    selectRole: string;
    name: string;
  }>({
    selectRole: "",
    name: "string",
  });

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const name = event.target.name as keyof typeof roleState;
    setRoleState({
      ...roleState,
      [name]: event.target.value,
    });
  };
  const [createUser, { data }] = useMutation(CreateUser);

  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    picture:
      "https://images.unsplash.com/photo-1627434880836-e94b1bdc2098?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    role: {} as any,
    password: "",
  });

  // if (data) {
  //   localStorage.setItem("token", data.createUser.token);
  // }

  return (
    <>
      <h1>Ajouter un utilisateur</h1>
      <Form>
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
        <StyledButton
          onClick={async () => {
            try {
              formState.role = roleState.selectRole;
              await createUser({
                variables: {
                  input: {
                    ...formState,
                  },
                },
              });
            } catch (err) {
              console.log("Registration error :", err);
            }
          }}
        >
          Ajouter cet utilisateur
        </StyledButton>
      </Form>
    </>
  );
}
