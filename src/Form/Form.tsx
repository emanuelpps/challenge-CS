import {
  FormContainer,
  StyledForm,
  FinishButton,
  CsLogoContainer,
  CsLogoImage,
} from "./Styles/Styles";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import CsLogo from "/assets/images/cs-logo.svg";
export const Form: React.FC = () => {
  const { pathname } = useLocation();
  const handleFinish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "https://www.customerscoops.com/";
  };

  return (
    <FormContainer>
      <StyledForm pathname={pathname}>
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
