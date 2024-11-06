import React from "react";
import {
  Container,
  TextContainer,
  Text,
  Bold,
  ButtonSelectorContainer,
} from "../Styles/Styles";
import useFormValue from "../../Store/FormValue";
import { ButtonSelectorLetter } from "../../components/Buttons/ButtonSelectorLetter";
import useFormProgress from "../../Store/FormProgress";

export const StepThree: React.FC = () => {
  const { progress } = useFormProgress();
  const challenges = {
    A: "Aumentar converion de leads a clientes",
    B: "Reducir customer churn",
    C: "Implementar un programa VoC",
    D: "Reducir costos en gestion de reclamos",
    E: "Optimizar procesos comerciales",
    F: "Optimizar procesos operativos",
    G: "Otros",
  };
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
      <ButtonSelectorContainer progress={progress}>
        {Object.entries(challenges).map(([key, value]) => (
          <ButtonSelectorLetter key={key} keyValue={key} text={value} />
        ))}
      </ButtonSelectorContainer>
    </Container>
  );
};

