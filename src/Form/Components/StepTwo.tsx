import React from "react";
import {
  Container,
  TextContainer,
  Text,
  InputContainer,
  Bold,
} from "../Styles/Styles";
import useFormValue from "../../Store/FormValue";

export const StepTwo: React.FC = () => {
  const { name } = useFormValue();
  return (
    <Container>
      <TextContainer>
        <Text>
          Genial <Bold>{name}</Bold>, ahora nos gustaría tener cierta info para
          diseñar una gran propuesta de valor para ti: ¿Cuál es tu
          cargo/posición dentro de tu empresa?
        </Text>
      </TextContainer>
    </Container>
  );
};
