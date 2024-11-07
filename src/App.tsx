import styled, { createGlobalStyle } from "styled-components";
import { AsideBackground } from "./components/AsideBackground/AsideBackground";
import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";
import { Form } from "./Form/Form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFourth,
  StepFive,
  StepSix,
} from "./Form/Components";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import useFormValue from "./Store/FormValue";

const GlobalStyle = createGlobalStyle`
  * {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
  font-family: "K2D", sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  gap: 150px;
  overflow-x: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    overflow: hidden;
  }
`;

const AsideContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { name } = useFormValue();
  if (!name) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ColumnContainer>
          <ProgressBar />
          <Container>
            <HeaderMobile />
            <Routes>
              <Route path="/" element={<Form />}>
                <Route index element={<StepOne />} />
                <Route
                  path="step-2"
                  element={
                    <ProtectedRoute>
                      <StepTwo />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="step-3"
                  element={
                    <ProtectedRoute>
                      <StepThree />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="step-4"
                  element={
                    <ProtectedRoute>
                      <StepFourth />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="step-5"
                  element={
                    <ProtectedRoute>
                      <StepFive />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="step-6"
                  element={
                    <ProtectedRoute>
                      <StepSix />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
            <AsideContainer>
              <AsideBackground />
            </AsideContainer>
          </Container>
        </ColumnContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
