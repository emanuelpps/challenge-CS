import React from "react";
import {
  Container,
  TextContainer,
  Text,
  ButtonSelectorContainer,
  ButtonContainer,
} from "../Styles/Styles";
import { ButtonSelectorLetter } from "../../components/Buttons/ButtonSelectorLetter";
import useFormProgress from "../../Store/FormProgress";
import { ButtonBackward } from "../../components/Buttons/ButtonBackward";
import { ButtonFoward } from "../../components/Buttons/ButtonFoward";
import backwardIcon from "/assets/icons/left-arrow.svg";
import { Link } from "react-router-dom";
import useFormValue from "../../Store/FormValue";
import {
  handleProgressFoward,
  handleProgressBackward,
} from "../../utils/handleProgressForm";

export const StepThree: React.FC = () => {
  const { setData, challenge } = useFormValue();
  const { progress, setProgress } = useFormProgress();
  const challenges = {
    A: "Aumentar converion de leads a clientes",
    B: "Reducir customer churn",
    C: "Implementar un programa VoC",
    D: "Reducir costos en gestion de reclamos",
    E: "Optimizar procesos comerciales",
    F: "Optimizar procesos operativos",
    G: "Otros",
  };

  const handleChallengeChange = (challenge: string) => {
    console.log("Selected challenge:", challenge);
    setData("challenge", challenge);
  };
  return (
    <Container>
      <TextContainer>
        <Text>¿Cuáles son tus principales desafíos para 2024?</Text>
      </TextContainer>
      <ButtonSelectorContainer progress={progress}>
        {Object.entries(challenges).map(([key, value]) => (
          <ButtonSelectorLetter
            key={key}
            keyValue={key}
            text={value}
            isSelected={challenge === value}
            onClick={() => handleChallengeChange(value)}
          />
        ))}
      </ButtonSelectorContainer>
      <ButtonContainer>
        <Link to="/step-2">
          <ButtonBackward
            icon={backwardIcon}
            onClick={() => handleProgressBackward(setProgress, progress)}
          />
        </Link>
        <Link to="/step-4">
          <ButtonFoward
            text="Siguiente"
            onClick={() => handleProgressFoward(setProgress, progress)}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
