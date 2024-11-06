import React from "react";
import {
  Container,
  TextContainer,
  Text,
  Bold,
  ButtonSelectorContainer,
  ButtonContainer,
} from "../Styles/Styles";
import useFormValue from "../../Store/FormValue";
import { ButtonSelector } from "../../components/Buttons/ButtonSelector";
import useFormProgress from "../../Store/FormProgress";
import { ButtonBackward } from "../../components/Buttons/ButtonBackward";
import { ButtonFoward } from "../../components/Buttons/ButtonFoward";
import backwardIcon from "/assets/icons/left-arrow.svg";
import { Link } from "react-router-dom";
import {
  handleProgressBackward,
  handleProgressFoward,
} from "../../utils/handleProgressForm";

export const StepTwo: React.FC = () => {
  const { jobPosition, name, setData } = useFormValue();
  const { progress, setProgress } = useFormProgress();

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
  const handlePositionChange = (position: string) => {
    setData("jobPosition", position);
  };

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
        {positions.map((position, index) => (
          <ButtonContainer>
            <ButtonSelector
              key={index}
              text={position}
              isSelected={jobPosition === position}
              onClick={() => handlePositionChange(position)}
            />
          </ButtonContainer>
        ))}
      </ButtonSelectorContainer>
      <ButtonContainer>
        <Link to="/">
          <ButtonBackward
            icon={backwardIcon}
            onClick={() => handleProgressBackward(setProgress, progress)}
          />
        </Link>
        <Link to="/step-3">
          <ButtonFoward
            text="Siguiente"
            onClick={() => handleProgressFoward(setProgress, progress)}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
