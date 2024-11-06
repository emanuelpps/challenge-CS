import { ButtonContainer, FormContainer, StyledForm } from "./Styles/Styles";
import useFormProgress from "../Store/FormProgress";
import { Outlet } from "react-router-dom";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Form: React.FC = () => {
  const { pathname } = useLocation();
  const { progress, setProgress } = useFormProgress();

  const handleFormProgress = () => {
    setProgress(Math.min(progress + 1, 5));
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (progress < 5) {
      handleFormProgress();
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmitForm}>
        <Outlet />
        {pathname === "/step-6" && (
          <ButtonContainer>
            <ButtonFoward text="Finalizar" type="submit" />
          </ButtonContainer>
        )}
      </StyledForm>
    </FormContainer>
  );
};
