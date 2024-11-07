import React from "react";
import { FormContainer, StyledForm, FinishButton, CsLogoContainer, CsLogoImage } from "./Styles/Styles";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import useFormProgress from "../Store/FormProgress";
import CsLogo from "/assets/images/cs-logo.svg";

export const Form: React.FC = () => {
  const { progress } = useFormProgress();
  const { pathname } = useLocation();

  console.log("progress", progress);

  const handleFinish = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await fetch("https://api.resend.com/api/email", {
      method: "POST",
    });
    const data = await response.json()
    console.log(data)
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
            <ButtonFoward text="Finalizar" type="button" onClick={handleFinish} />
          </FinishButton>
        )}
      </StyledForm>
    </FormContainer>
  );
};
