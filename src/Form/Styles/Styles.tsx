import styled from "styled-components";

const slideInFromRight = `
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: 769px) {
    width: 80%;
  }

  animation: slideInFromRight 0.8s ease-out forwards;
  ${slideInFromRight}
`;

export const TextContainer = styled.div<{ progress?: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ progress }) => (progress === 5 ? "2px" : "30px")};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: light;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const FinishButton = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
  display: flex;
  gap: 10px;
`;

export const ButtonSelectorContainer = styled.div<{ progress?: number }>`
  display: ${({ progress }) => (progress === 2 ? "flex" : "grid")};
  flex-direction: ${({ progress }) => (progress === 2 ? "column" : "initial")};
  grid-template-columns: ${({ progress }) =>
    progress !== 2 ? "repeat(2, minmax(0, 1fr))" : "initial"};
  gap: 10px;
  grid-template-rows: ${({ progress }) =>
    progress !== 2 ? `repeat(${progress}, minmax(0, 1fr))` : "initial"};
  grid-auto-flow: dense;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    & > :nth-child(odd):last-child {
      grid-column: span 2;
    }
    columnas */ &:nth-child(even) {
      grid-column: span 1;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: flex-start;

    & > * {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

export const FinishTitle = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const ItalicText = styled.p`
  font-style: italic;
`;

export const BackgroundColor = styled.div<{ path?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  @media (min-width: 768px) {
    background-color: #00ccbc;
  }
  @media (max-width: 767px) {
    background-color: white;
  }
`;

export const CsLogoContainer = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    width: 80%;
    justify-content: start;
  }
`;

export const CsLogoImage = styled.img`
  width: 130px;
`;
