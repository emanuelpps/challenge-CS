import React from "react";
import styled from "styled-components";
import headerImage from "/assets/images/mobile-header.svg";
import CsLogo from "/assets/images/cs-logo.svg";

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

export const HeaderMobile: React.FC = () => {
  return (
    <Container>
      <HeaderImage>
        <Logo />
      </HeaderImage>
    </Container>
  );
};
