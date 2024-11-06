import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const ButtonSelectorContainer = styled.div<{ progress: number }>`
  display: ${({ progress }) => (progress === 2 ? "flex" : "grid")};
  flex-direction: ${({ progress }) => (progress === 2 ? "column" : "initial")};
  grid-template-columns: ${({ progress }) => (progress !== 2 ? "repeat(2, minmax(0, 1fr))" : "initial")};
  gap: 10px;
  grid-template-rows: ${({ progress }) => (progress !== 2 ? `repeat(${progress}, minmax(0, 1fr))` : "initial")};
`;

