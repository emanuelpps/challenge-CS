import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  * {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
    font-family: "K2D", sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: "K2D", sans-serif;
  }
`;

export const Container = styled.div`
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

export const ColumnContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    overflow: hidden;
  }
`;

export const AsideContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
