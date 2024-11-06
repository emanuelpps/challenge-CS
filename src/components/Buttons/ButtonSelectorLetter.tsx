import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../Types/types";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: calc(100%);
  background-color: transparent;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: gray;
  }
  border-radius: 50px;
  gap: 5px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.6rem;
  width: 100%;

`;

const KeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00ccbc;
  border-radius: 50px;
  padding: 5px 20px;
  color: white;
`;

export const ButtonSelectorLetter: React.FC<ButtonProps> = ({
  text,
  keyValue,
}) => {
  return (
    <ButtonContainer>
      <Button>
        <KeyContainer>{keyValue}</KeyContainer>
        <Text>{text}</Text>
      </Button>
    </ButtonContainer>
  );
};
