import React, { useState } from "react";
import { FormHelperText, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_CAMPUS } from "../../../graphql/mutations/infrastructures/campus";
import { GroupForm, Form } from "../../../assets/styles/login/login";
import SolidButton from "../../../components/buttons/solidButton";

export default function CampusCreation(): JSX.Element {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [campus, { loading }] = useMutation(CREATE_CAMPUS, {
    onCompleted: (data) => {
      console.log(data);
      setFormState({
        name: "",
        address: "",
        phone: "",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCampus = (e: any) => {
    e.preventDefault();
    campus({
      variables: {
        input: {
          ...formState,
        },
      },
    });
  };
  return (
    <>
      <h1>Ajouter un campus</h1>
      <Form onSubmit={handleCampus}>
        <GroupForm>
          <TextField
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            label="Nom"
            variant="outlined"
            id="name-campus-input"
          />
          <FormHelperText>Required</FormHelperText>
        </GroupForm>
        <GroupForm>
          <TextField
            value={formState.address}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: e.target.value,
              })
            }
            type="text"
            label="addresse"
            variant="outlined"
            id="address-campus-input"
          />
          <FormHelperText>Required</FormHelperText>
        </GroupForm>
        <GroupForm>
          <TextField
            value={formState.phone}
            onChange={(e) =>
              setFormState({
                ...formState,
                phone: e.target.value,
              })
            }
            type="text"
            label="Téléphone"
            variant="outlined"
            id="phone-campus-input"
          />
          <FormHelperText>Required</FormHelperText>
        </GroupForm>
        <SolidButton type="submit" textButton="Ajouter ce campus" />
      </Form>
    </>
  );
}
