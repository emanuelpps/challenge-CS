import React from "react";
import {
  Container,
  TextContainer,
  Text,
  Bold,
  ButtonSelectorContainer,
} from "../Styles/Styles";
import useFormValue from "../../Store/FormValue";
import { ButtonSelector } from "../../components/Buttons/ButtonSelector";
import useFormProgress from "../../Store/FormProgress";

export const StepTwo: React.FC = () => {
    
  const { progress } = useFormProgress();
  const positions = [
    "Board Member",
    "C-level",
    "Gerente",
    "Subgerente",
    "Jefe area",
    "Lider de area",
    "Ejecutivo/analista",
    "otro",
  ];
  const { name } = useFormValue();
  return (
    <Container>
      <TextContainer>
        <Text>
          Genial <Bold>{name}</Bold>, ahora nos gustaría tener cierta info para
          diseñar una gran propuesta de valor para ti:
        </Text>
        <Text>¿Cuál es tu cargo/posición dentro de tu empresa?</Text>
      </TextContainer>
      <ButtonSelectorContainer  progress={progress}>
        {positions.map((position) => (
          <ButtonSelector key={position} text={position} />
        ))}
      </ButtonSelectorContainer>
    </Container>
  );
};
