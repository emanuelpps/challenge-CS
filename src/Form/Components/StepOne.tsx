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
import { FormDataValues } from "../../Types/types";

export const StepOne: React.FC<FormDataValues> = () => {
  const { setName, name } = useFormValue();

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
          placeholder={name ? name : "nombre"}
        />
      </InputContainer>
    </Container>
  );
};
