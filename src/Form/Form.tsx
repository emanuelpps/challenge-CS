import React, { useState } from "react";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFourth,
  StepFive,
} from "./Components";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import { FormContainer, StyledForm, ButtonContainer } from "./Styles/Styles";

export const Form: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleFormProgress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProgress((prevProgress) => Math.min(prevProgress + 1, 4));
  };

  const FormStep = () => {
    switch (progress) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFourth />;
      case 4:
        return <StepFive />;
      default:
        return <StepOne />;
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleFormProgress}>
        {FormStep()}
        <ButtonContainer>
          <ButtonFoward handleClick={() => {}} text="Siguiente" />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};
