import React from "react";
import {
  Container,
  TextContainer,
  Text,
  Bold,
  ButtonSelectorContainer,
} from "../Styles/Styles";
import { ButtonSelector } from "../../components/Buttons/ButtonSelector";
import useFormProgress from "../../Store/FormProgress";

export const StepFive: React.FC = () => {
  const { progress } = useFormProgress();
  const crm = [
    "Tecnología",
    "Software",
    "Servicios",
    "Financiera",
    "Telecomunicaciones",
    "Producción / Fabricación",
    "Logística",
    "Consumo Masivo",
    "Mayorista",
    "Retail",
    "Otra",
  ];
  return (
    <Container>
      <TextContainer>
        <Text>
          <Text>
            <Bold>Ahora te vamos a sorprender... </Bold>
          </Text>
          ¿A cuál industria pertenece tu empresa?
        </Text>
      </TextContainer>
      <ButtonSelectorContainer progress={progress}>
        {crm.map((platform) => (
          <ButtonSelector key={platform} text={platform} />
        ))}
      </ButtonSelectorContainer>
    </Container>
  );
};
