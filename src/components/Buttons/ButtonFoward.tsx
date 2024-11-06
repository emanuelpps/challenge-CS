import React from "react";
import styled from "styled-components";
import rightArrow from "/assets/icons/right-arrow.svg"; // Asegúrate de que la ruta del archivo sea correcta

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button";
}

const ButtonContainer = styled.div`
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
  display: flex;
  align-items: center;
`;

const ArrowImage = styled.img`
width: 13px;
margin-left: 8px;`

export const ButtonFoward: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>
        {text}
        {text === "Siguiente" && <ArrowImage src={rightArrow} alt="Right Arrow"/>}
      </Button>
    </ButtonContainer>
  );
};
