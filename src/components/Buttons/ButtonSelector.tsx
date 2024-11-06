import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
}

const Button = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50px;
  padding: 10px 20px;
`;
const Text = styled.p`
  margin: 0;
  font-size: 11px;
`;

export const ButtonSelector: React.FC<Props> = (props) => {
  return (
    <Button isSelected={props.isSelected} onClick={props.onClick}>
      <Text>{props.text}</Text>
    </Button>
  );
};
