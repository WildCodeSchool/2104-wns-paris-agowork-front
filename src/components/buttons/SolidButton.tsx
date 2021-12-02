import React from "react";
import { ColoredButton, ContainerButton } from "../../assets/styles/Global";

const SolidButton = ({ textButton, type }: any): JSX.Element => {
  return (
    <ContainerButton>
      <ColoredButton type={type} variant="contained">
        {textButton}
      </ColoredButton>
    </ContainerButton>
  );
};

export default SolidButton;
