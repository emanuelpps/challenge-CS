import React from "react";
import {
  Container,
  TextContainer,
  Text,
  Bold,
  ButtonSelectorContainer,
  ButtonContainer,
} from "../Styles/Styles";
import { ButtonSelector } from "../../components/Buttons/ButtonSelector";
import useFormProgress from "../../Store/FormProgress";
import backwardIcon from "/assets/icons/left-arrow.svg";
import { ButtonBackward } from "../../components/Buttons/ButtonBackward";
import { ButtonFoward } from "../../components/Buttons/ButtonFoward";
import { Link } from "react-router-dom";
import useFormValue from "../../Store/FormValue";
import {
  handleProgressFoward,
  handleProgressBackward,
} from "../../utils/handleProgressForm";

export const StepFive: React.FC = () => {
  const { setData, industry } = useFormValue();
  const { progress, setProgress } = useFormProgress();
  const industrys = [
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

  const handleIndustryChange = (industry: string) => {
    setData("industry", industry);
  };
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
        {industrys.map((workType) => (
          <ButtonSelector
            key={workType}
            text={workType}
            onClick={() => handleIndustryChange(workType)}
            isSelected={industry === workType}
          />
        ))}
      </ButtonSelectorContainer>
      <ButtonContainer>
        <Link to="/step-4">
          <ButtonBackward
            text="Regresar"
            icon={backwardIcon}
            onClick={() => handleProgressBackward(setProgress, progress)}
          />
        </Link>
        <Link to="/step-6">
          <ButtonFoward
            text="Continuar"
            onClick={() => handleProgressFoward(setProgress, progress)}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
