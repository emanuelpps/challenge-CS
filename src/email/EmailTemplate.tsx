import styled from "styled-components";
import templateHeader from "/assets/images/header-email.svg";

export const EmailTemplate: React.FC = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Bold = styled.p`
    font-weight: bold;
  `;

  const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
  `;

  const Button = styled.button`
    height: 100%;
    background-color: #231331;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: gray;
    }
    border-radius: 50px;
    padding: 10px 20px;
  `;
  return (
    <Container>
      <ImageContainer>
        <img src={templateHeader} alt="header" />
      </ImageContainer>
      <TextContainer>
        <Bold>Hola Anthony,</Bold>
        <p>
          En Customer Scoops nos importa mucho tu experiencia, y queremos
          asegurarnos de que nuestros servicios sigan cumpliendo tus
          expectativas. Por eso, hemos preparado unas breves preguntas para que
          puedas compartir tus comentarios y sugerencias.
        </p>
        <p>
          Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que
          realmente necesitas. Nos tomará solo unos minutos de tu tiempo.
        </p>
        <ButtonContainer>
          <Button onClick={() => {}}>Ingresa Aqui</Button>
        </ButtonContainer>
        <p>
          Agradecemos de antemano tu participación y confianza en Customer
          Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora
          continua!
        </p>
        <Column>
          <p>Saludos,</p>
          <p>Emanuel Pages,</p>
          <p>Equipo de Customer Scoops.</p>
        </Column>
      </TextContainer>
    </Container>
  );
};
