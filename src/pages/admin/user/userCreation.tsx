import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { BrokenImage, ExpandMore, ImageSearch } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from "@mui/material";
import { CREATE_USER } from "../../../graphql/mutations/user/user";
import { Form, FormBox } from "../../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../types/campus";
import SolidButton from "../../../components/buttons/solidButton";
import UserListing from "./userListing";
import FormElement from "../../../components/form/formElement";
import FormSelect from "../../../components/form/formSelect";
import { roles } from "../../../types/user";
import { CardList } from "../../../assets/styles/list/userList";
import UserCard from "../../../components/cards/userCard";

export type FormValues = {
  firstname: string;
  lastname: string;
  town: string;
  picture: string;
  email: string;
  role: string;
  mood: string;
  campus: string;
};

export default function UserCreation(): JSX.Element {
  const [latestUser, setLatestUser] = useState<FormValues>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [expanded, setExpanded] = useState<string | true>(true);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : true);
    };
  const {
    loading,
    error: errorCampus,
    data: allCampus,
  } = useQuery<GetCampusType>(GET_ALL_CAMPUS);
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      setLatestUser(data);
      console.log(latestUser);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUser: SubmitHandler<FormValues> = (input) => {
    console.log(input);
    createUser({ variables: { input } });
    reset();
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "createUser"}
        onChange={handleChange("createUser")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="createUser-content"
          id="createUser-header"
        >
          <Typography
            sx={{
              width: "35%",
              fontWeight: "bold",
              marginLeft: 2,
              flexShrink: 0,
            }}
          >
            Ajouter des utilisateurs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormBox>
            <Form onSubmit={handleSubmit(handleUser)}>
              <FormElement
                label="firstname"
                type="text"
                register={register}
                required
              />
              <FormElement
                label="lastname"
                type="text"
                register={register}
                required
              />
              <FormElement
                label="email"
                type="text"
                register={register}
                required
              />
              <FormElement
                label="town"
                type="text"
                register={register}
                required
              />
              <FormElement
                label="password"
                type="text"
                register={register}
                required
              />
              <FormSelect
                id="role-select"
                name="role"
                label="Role"
                control={control}
                required
              >
                {roles.map((list: any) => (
                  <MenuItem key={list.name} value={list.name}>
                    {list.name}
                  </MenuItem>
                ))}
              </FormSelect>
              <FormSelect
                id="campus-select"
                name="campus"
                label="Campus"
                control={control}
              >
                {allCampus?.getCampus.map((list: CampusType) => (
                  <MenuItem key={list.id} value={list.id}>
                    {list.name}
                  </MenuItem>
                ))}
              </FormSelect>
              <SolidButton type="submit" textButton="Ajouter cet utilisateur" />
            </Form>
            {latestUser ? <UserCard {...latestUser} /> : <></>}
          </FormBox>
        </AccordionDetails>
      </Accordion>
      <UserListing />
    </div>
  );
}
