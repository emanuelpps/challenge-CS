import React from "react";
import styled from "styled-components";
import BackgroundDesktop from "/assets/images/background-desktop.svg";

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

export const AsideBackground: React.FC = () => {
  return (
    <Container>
      <Image src={BackgroundDesktop} />
    </Container>
  );
};
