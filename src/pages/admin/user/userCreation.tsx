import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { ExpandMore } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { CREATE_USER } from "../../../graphql/mutations/user/user";
import { Form, FormBox, UserForm } from "../../../assets/styles/form";
import { GET_ALL_CAMPUS } from "../../../graphql/queries/infrastructures/campus";
import { CampusType, GetCampusType } from "../../../types/campus";
import SolidButton from "../../../components/buttons/solidButton";
import UserListing from "./userListing";
import FormElement from "../../../components/form/formElement";
import FormSelect from "../../../components/form/formSelect";
import { roles, UserType } from "../../../types/user";
import UserCard from "../../../components/cards/userCard";
import { FormTitle } from "../../../assets/styles/list/list";

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
  const [latestUser, setLatestUser] = useState<UserType>();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const {
    loading,
    error: errorCampus,
    data: allCampus,
  } = useQuery<GetCampusType>(GET_ALL_CAMPUS);

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      setLatestUser(data.createUser);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleUser: SubmitHandler<FormValues> = (input) => {
    createUser({ variables: { input } });
    reset();
  };
  return (
    <>
      <FormBox>
        <UserForm>
          <FormTitle>Ajouter un utilisateur</FormTitle>
          <Form onSubmit={handleSubmit(handleUser)}>
            <FormBox>
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
            </FormBox>
            <FormBox>
              <FormElement
                label="email"
                type="text"
                register={register}
                required
              />
              <FormElement
                label="password"
                type="password"
                register={register}
                required
              />
            </FormBox>
            <FormBox>
              <FormElement
                label="town"
                type="text"
                register={register}
                required
              />
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
            </FormBox>
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
            <SolidButton type="submit" textButton="Ajouter cet utilisateur" />
          </Form>
          {latestUser ? (
            <UserCard {...latestUser} key={latestUser.email} />
          ) : (
            <></>
          )}
        </UserForm>
      </FormBox>
      <UserListing />
    </>
  );
}
