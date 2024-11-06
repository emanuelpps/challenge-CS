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

export const StepFourth: React.FC = () => {
  const { progress } = useFormProgress();
  const crm = [
    "SAP",
    "Microsoft Dynamics",
    "Salesforce",
    "HubSpot",
    "Zoho",
    "NetSuite(Oracle)",
    "Monday",
    "CRM Propio",
    "No tengo CRM",
  ];
  return (
    <Container>
      <TextContainer>
        <Text>¿Cuál CRM están utilizando en tu empresa? CRM:</Text>
      </TextContainer>
      <ButtonSelectorContainer progress={progress}>
        {crm.map((platform) => (
          <ButtonSelector key={platform} text={platform} />
        ))}
      </ButtonSelectorContainer>
    </Container>
  );
};
