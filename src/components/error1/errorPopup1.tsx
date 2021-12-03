import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { Snackbar } from "../../assets/styles/global1";

const ErrorPopup = ({ errorMessage, errorHidden }: any): JSX.Element => {
  return (
    <Snackbar hidden={errorHidden}>
      <Alert severity="error" elevation={6} variant="filled">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
