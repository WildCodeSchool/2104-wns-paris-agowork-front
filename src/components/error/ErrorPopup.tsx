import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorPopup = ({ errorMessage }: any): JSX.Element => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Alert severity="error">{errorMessage}</Alert>
    </Stack>
  );
};

export default ErrorPopup;
