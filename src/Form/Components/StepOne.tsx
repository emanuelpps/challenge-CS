import React from "react";
import {
  Container,
  TextContainer,
  Text,
  InputContainer,
  Bold,
} from "../Styles/Styles";
import { Input } from "../../components/Inputs/Input";
import useFormValue from "../../Store/FormValue";

export const StepOne: React.FC = () => {
  const { setName, name } = useFormValue() as {
    setName: (name: string) => void;
    name: string;
  };

  console.log(name);

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
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
      </InputContainer>
    </Container>
  );
};
