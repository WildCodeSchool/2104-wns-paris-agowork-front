import React from "react";
import { ColoredButton } from "../../assets/styles/Global";

const SolidButton = ({ textButton, type }: any): JSX.Element => {
  return (
    <>
      <ColoredButton type={type} variant="contained">
        {textButton}
      </ColoredButton>
    </>
  );
};

export default SolidButton;
