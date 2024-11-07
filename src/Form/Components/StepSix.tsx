import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  TextContainer,
  Text,
  ItalicText,
  FinishTitle,
  BackgroundColor,
} from "../Styles/Styles";
import useFormProgress from "../../Store/FormProgress";

export const StepSix: React.FC = () => {
  const location = useLocation();
  const { progress } = useFormProgress();
  return (
    <>
      <BackgroundColor path={location.pathname} />
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
    </>
  );
};
