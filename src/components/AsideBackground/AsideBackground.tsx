import React from "react";
import { Container, Image, FormProgress, IndexNumber, Number } from "./Styles";
import BackgroundDesktop from "/assets/images/background-desktop.svg";
import { pageFormIndex } from "../../utils/pageFormIndex";
import { useLocation } from "react-router-dom";

export const AsideBackground: React.FC = () => {
  const location = useLocation();

  const currentStep = pageFormIndex(location.pathname);
  return (
    <Container>
      <Image src={BackgroundDesktop} />
      <FormProgress>
        <IndexNumber>{`0${currentStep} |`}</IndexNumber>
        <Number> &nbsp;06</Number>
      </FormProgress>
    </Container>
  );
};
