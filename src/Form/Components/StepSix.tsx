import React from "react";
import {
  Container,
  TextContainer,
  Text,
  ItalicText,
  FinishTitle,
} from "../Styles/Styles";
import useFormProgress from "../../Store/FormProgress";

export const StepSix: React.FC = () => {
  const { progress } = useFormProgress();
  return (
    <Container>
      <TextContainer>
        <TextContainer progress={progress}>
          <Text>
            <FinishTitle>Muchas Gracias </FinishTitle>
          </Text>
          <Text>por querer ser parte</Text>
          <Text>de la familia Scoopers.</Text>
        </TextContainer>
        <ItalicText>Nos vemos pronto!</ItalicText>{" "}
      </TextContainer>
    </Container>
  );
};
