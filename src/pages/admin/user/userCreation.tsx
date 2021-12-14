import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CREATE_USER } from "../../../graphql/mutations/user/user";
import { Form } from "../../../assets/styles/global";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../types/campus";
import SolidButton from "../../../components/buttons/solidButton";
import UserListing from "./userListing";

export default function UserCreation(): JSX.Element {
  const {
    loading,
    error: errorCampus,
    data: allCampus,
  } = useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const [role, setRole] = useState("");
  const [campus, setCampus] = useState("");

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  const handleCampusChange = (event: SelectChangeEvent) => {
    setCampus(event.target.value);
  };

  const [createUser, { data, error: errorCreation }] = useMutation(CREATE_USER);
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    town: "",
    role: "",
    password: "",
    campus: {} as any,
  });
  const handleCreation = (e: any) => {
    e.preventDefault();
    formState.role = role;
    formState.campus = campus;
    console.log(formState);
    createUser({
      variables: {
        input: {
          ...formState,
        },
      },
    });
  };
  return (
    <div>
      <h1>Ajouter un utilisateur</h1>
      <Form onSubmit={handleCreation}>
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
            id="mui-theme-provider-outlined-input-firstname"
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
            id="mui-theme-provider-outlined-input-lastname"
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
            id="mui-theme-provider-outlined-input-email"
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
          id="mui-theme-provider-outlined-input-town"
        />
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
            id="mui-theme-provider-outlined-input-password"
          />
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel id="select-label-role">Role</InputLabel>
          <Select
            labelId="select-label-role"
            id="select-helper-role"
            value={role}
            label="Role"
            onChange={handleRoleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="STUDENT">Student</MenuItem>
            <MenuItem value="TEACHER">Teacher</MenuItem>
          </Select>
          <FormHelperText>Obligatoire</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel id="select-label-campus">Campus</InputLabel>
          <Select
            labelId="select-label-campus"
            id="select-helper-campus"
            value={campus}
            label="Campus"
            onChange={handleCampusChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {allCampus?.getCampus.map((list: CampusType) => (
              <MenuItem key={list.id} value={list.id}>
                {list.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Obligatoire</FormHelperText>
        </FormControl>
        <SolidButton type="submit" textButton="Ajouter cet utilisateur" />
      </Form>
      <UserListing />
    </div>
  );
}
