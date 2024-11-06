import React from "react";
import {
  Container,
  TextContainer,
  Text,
  ButtonSelectorContainer,
} from "../Styles/Styles";
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
  return (
    <Container>
      <TextContainer>
        <Text>¿Cuáles son tus principales desafíos para 2024?</Text>
      </TextContainer>
      <ButtonSelectorContainer progress={progress}>
        {Object.entries(challenges).map(([key, value]) => (
          <ButtonSelectorLetter key={key} keyValue={key} text={value} />
        ))}
      </ButtonSelectorContainer>
    </Container>
  );
};
