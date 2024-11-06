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
import useFormValue from "../Store/FormValue";
import { ButtonBackward } from "../components/Buttons/ButtonBackward";
import backwardIcon from "/assets/icons/left-arrow.svg";
import useFormProgress from "../Store/FormProgress";

export const Form: React.FC = () => {
  const { progress, setProgress } = useFormProgress();
  const { name, setName } = useFormValue();

  const handleFormProgress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProgress(Math.min(progress + 1, 4));
  };

  const FormStep = () => {
    switch (progress) {
      case 0:
        return <StepOne name={name ? name : ""} setName={setName} />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFourth />;
      case 4:
        return <StepFive />;
      default:
        return <StepOne name={name ? name : ""} setName={setName} />;
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleFormProgress}>
        {FormStep()}
        <ButtonContainer>
          <ButtonBackward icon={backwardIcon} type="button" />
          <ButtonFoward
            text="Siguiente"
            type={progress === 4 ? "submit" : "button"}
          />
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};
