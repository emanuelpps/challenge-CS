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
import {
  GlobalStyle,
  Container,
  ColumnContainer,
  AsideContainer,
} from "./Styles";

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
