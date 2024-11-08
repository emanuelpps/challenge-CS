import React from "react";
import styled from "styled-components";

interface ButtonProps {
  icon: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: gray;
  }
`;

export const ButtonBackward: React.FC<ButtonProps> = ({ icon }) => {
  return (
    <ButtonContainer>
      <Button type="button">
        <img src={icon} alt="Backward icon" />
      </Button>
    </ButtonContainer>
  );
};

