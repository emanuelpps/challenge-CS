import React, { useState } from "react";
import {
  FormContainer,
  StyledForm,
  FinishButton,
  CsLogoContainer,
  CsLogoImage,
} from "./Styles/Styles";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import useFormProgress from "../Store/FormProgress";
import CsLogo from "/assets/images/cs-logo.svg";

export const Form: React.FC = () => {
  const [response, setResponse] = useState(null);
  const { progress } = useFormProgress();
  const { pathname } = useLocation();

  console.log("progress", progress);

  const handleFinish = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/email", {
        method: "POST",
      });
      const data = await response.json();
      setResponse(data);
      return response
    } catch (error) {
      console.error(error);
      return response
    }
  };


  return (
    <FormContainer>
      <StyledForm>
        <CsLogoContainer>
          <CsLogoImage src={CsLogo} />
        </CsLogoContainer>
        <Outlet />
        {pathname === "/step-6" && (
          <FinishButton>
            <ButtonFoward
              text="Finalizar"
              type="button"
              onClick={handleFinish}
            />
          </FinishButton>
        )}
      </StyledForm>
    </FormContainer>
  );
};
