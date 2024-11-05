import React from "react";
import styled from "styled-components";
import { IFormProgress } from "../../Types/types";
import { Input } from "../../components/Inputs/Input";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.p`
  margin: 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 100%;
`;
export const StepOne: React.FC<IFormProgress> = ({ setProgress }) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          Muchas gracias por tu interés en conocer <Bold>customerScoops</Bold>,
          que a través de Formularios Conversacionales Inteligente te ayudamos a
          aumentar el revenue y rentabilidad de tu negocio.
        </Text>
        <Text> Queremos conocerte, ¿cuál es tu nombre?</Text>
      </TextContainer>
      <InputContainer>
        <Input placeholder="Nombre" />
      </InputContainer>
    </Container>
  );
};
