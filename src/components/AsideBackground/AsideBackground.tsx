import React from "react";
import styled from "styled-components";
import BackgroundDesktop from "/assets/images/background-desktop.svg";

const Constainer = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    align-items: center;
  }
`;

export const AsideBackground: React.FC = () => {
  return (
    <Constainer>
      <img src={BackgroundDesktop} />
    </Constainer>
  );
};
