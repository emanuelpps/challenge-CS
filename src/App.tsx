import styled from "styled-components";
import { AsideBackground } from "./components/AsideBackground/AsideBackground";
import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";
import { Form } from "./Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFourth,
  StepFive,
  StepSix,
} from "./Form/Components";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100vw;
  align-items: center;
  justify-content: space-around;
  gap: 150px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
    gap: 30px;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <ColumnContainer>
        <ProgressBar />
        <Container>
          <HeaderMobile />
          <Routes>
            <Route path="/" element={<Form />}>
              <Route index element={<StepOne />} />
              <Route path="step-2" element={<StepTwo />} />
              <Route path="step-3" element={<StepThree />} />
              <Route path="step-4" element={<StepFourth />} />
              <Route path="step-5" element={<StepFive />} />
              <Route path="step-6" element={<StepSix />} />
            </Route>
          </Routes>
          <div>
            <AsideBackground />
          </div>
        </Container>
      </ColumnContainer>
    </BrowserRouter>
  );
}

export default App;
