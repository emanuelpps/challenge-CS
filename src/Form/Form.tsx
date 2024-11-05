import React, { useState } from "react";
import styled from "styled-components";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFourth,
  StepFive,
} from "./Components";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";

const FormContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Form: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const FormStep = () => {
    switch (progress) {
      case 0:
        return <StepOne setProgress={setProgress} />;
      case 1:
        return <StepTwo setProgress={setProgress} />;
      case 2:
        return <StepThree setProgress={setProgress} />;
      case 3:
        return <StepFourth setProgress={setProgress} />;
      case 4:
        return <StepFive setProgress={setProgress} />;
      default:
        return <StepOne setProgress={setProgress} />;
    }
  };
  return (
    <FormContainer>
      <StyledForm>
        {FormStep()}
        <ButtonFoward />
      </StyledForm>
    </FormContainer>
  );
};
