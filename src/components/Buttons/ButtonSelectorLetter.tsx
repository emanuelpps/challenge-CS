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
  justify-content: space-between;
  width: calc(100%);
  background-color: transparent;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: gray;
  }
  border-radius: 30px;
  padding: 5px 15px 5px 5px;
  gap: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.6rem;
  width: 100%;
  display: flex;
`;

const KeyContainer = styled.div`
  display: flex;
  background-color: #00ccbc;
  border-radius: 30px;
  padding: 7px 20px 7px 20px;
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
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
