import styled from "styled-components";
import headerImage from "/assets/images/mobile-header.svg";
import CsLogo from "/assets/images/cs-logo.svg";
import useFormProgress from "../../Store/FormProgress";
import { IFormProgress } from "../../Types/types";
import { useEffect, useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url(${headerImage});
  background-size: contain;
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
  width: 100%;
  position: absolute;
  top: 0%;
  left: 85%;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const IndexNumber = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Number = styled.p`
  font-size: 0.6rem;
`;

export const HeaderMobile = () => {
  const { progress } = useFormProgress();

  return (
    <Container>
      <HeaderImage>
        <Logo />
        <FormProgress>
          <IndexNumber>{`0${progress + 1}| `}</IndexNumber>
          <Number>08</Number>
        </FormProgress>
      </HeaderImage>
    </Container>
  );
};
