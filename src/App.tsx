import styled from "styled-components";
import { AsideBackground } from "./components/AsideBackground/AsideBackground";
import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";
import { Form } from "./Form/Form";

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px
  }

  @media (max-width: 480px) {
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px
  }
  height: 100%;
  max-height: 100vh;
`;

function App() {
  return (
    <Container>
      <HeaderMobile />
      <Form />
    </Container>
  );
}

export default App;
