import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  height: 100%;
  background-color: #231331;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: gray;
  }
 border-radius: 50px;
 padding: 10px 20px;
`;

export const ButtonFoward: React.FC = () => {
  return (
    <ButtonContainer>
      <Button>Comenzar</Button>
    </ButtonContainer>
  );
};
