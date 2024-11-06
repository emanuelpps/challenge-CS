import React from "react";
import {
  Container,
  TextContainer,
  Text,
  ButtonSelectorContainer,
  ButtonContainer,
} from "../Styles/Styles";
import { ButtonSelector } from "../../components/Buttons/ButtonSelector";
import useFormProgress from "../../Store/FormProgress";
import { ButtonBackward } from "../../components/Buttons/ButtonBackward";
import { ButtonFoward } from "../../components/Buttons/ButtonFoward";
import { Link } from "react-router-dom";
import backwardIcon from "/assets/icons/left-arrow.svg";
import useFormValue from "../../Store/FormValue";
import {
  handleProgressFoward,
  handleProgressBackward,
} from "../../utils/handleProgressForm";

export const StepFourth: React.FC = () => {
  const { setData, CRM } = useFormValue();
  const { progress, setProgress } = useFormProgress();
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

  const handleCRMChange = (CRM: string) => {
    setData("CRM", CRM);
  };
  return (
    <Container>
      <TextContainer>
        <Text>¿Cuál CRM están utilizando en tu empresa? CRM:</Text>
      </TextContainer>
      <ButtonSelectorContainer progress={progress}>
        {crm.map((platform) => (
          <ButtonSelector
            key={platform}
            text={platform}
            onClick={() => handleCRMChange(platform)}
            isSelected={CRM === platform}
          />
        ))}
      </ButtonSelectorContainer>
      <ButtonContainer>
        <Link to="/step-3">
          <ButtonBackward
            icon={backwardIcon}
            onClick={() => handleProgressBackward(setProgress, progress)}
          />
        </Link>
        <Link to="/step-5">
          <ButtonFoward
            text="Siguiente"
            onClick={() => handleProgressFoward(setProgress, progress)}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
