import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../Types/types";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
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
  padding: 10px 20px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

export const ButtonSelector: React.FC<ButtonProps> = ({
  text,
  handleClick,
  formEvent,
}) => {
  return (
    <ButtonContainer>
      <Button onClick={handleClick}>
        <Text>{text}</Text>
      </Button>
    </ButtonContainer>
  );
};
