import styled from "styled-components";
import headerImage from "/assets/images/mobile-header.svg";
import CsLogo from "/assets/images/cs-logo.svg";
import { useLocation } from "react-router-dom";
import { pageFormIndex } from "../../utils/pageFormIndex";

const Container = styled.div`
  width: 100vw;
  padding-left: 10px;
  height: 100%;
  min-height: 200px;
  max-height: 200px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 20%;
  height: 20%;
  background-image: url(${CsLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FormProgress = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const IndexNumber = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Number = styled.p`
  font-size: 0.6rem;
`;

export const HeaderMobile = () => {
  const location = useLocation();

  const currentStep = pageFormIndex(location.pathname);

  return (
    <Container>
      <HeaderImage>
        <Logo />
        <FormProgress>
          <IndexNumber>{`0${currentStep} |`}</IndexNumber>
          <Number> &nbsp;08</Number>
        </FormProgress>
      </HeaderImage>
    </Container>
  );
};
