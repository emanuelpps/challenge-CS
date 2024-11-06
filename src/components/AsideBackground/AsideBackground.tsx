import React from "react";
import styled from "styled-components";
import BackgroundDesktop from "/assets/images/background-desktop.svg";
import { pageFormIndex } from "../../utils/pageFormIndex";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const FormProgress = styled.div`
  position: absolute;
  top: 10%;
  left: 95%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const IndexNumber = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

const Number = styled.p`
  font-size: 0.8rem;
`;

export const AsideBackground: React.FC = () => {
  const location = useLocation();

  const currentStep = pageFormIndex(location.pathname);
  return (
    <Container>
      <Image src={BackgroundDesktop} />
      <FormProgress>
        <IndexNumber>{`0${currentStep} |`}</IndexNumber>
        <Number> &nbsp;08</Number>
      </FormProgress>
    </Container>
  );
};
