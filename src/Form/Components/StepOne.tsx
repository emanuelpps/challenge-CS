import React from "react";
import {
  Container,
  TextContainer,
  Text,
  InputContainer,
  Bold,
  ButtonContainer,
} from "../Styles/Styles";
import { Input } from "../../components/Inputs/Input";
import useFormValue from "../../Store/FormValue";
import { ButtonFoward } from "../../components/Buttons/ButtonFoward";
import { Link } from "react-router-dom";
import useFormProgress from "../../Store/FormProgress";
import { handleProgressFoward } from "../../utils/handleProgressForm";

export const StepOne: React.FC = () => {
  const { progress, setProgress } = useFormProgress();
  const { name, setData } = useFormValue();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData("name", e.target.value);
  };

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
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder={name ? name : "nombre"}
        />
      </InputContainer>
      <ButtonContainer>
        <Link to="/step-2">
          <ButtonFoward
            text="Continuar"
            onClick={() => handleProgressFoward(setProgress, progress)}
          />
        </Link>
      </ButtonContainer>
    </Container>
  );
};
