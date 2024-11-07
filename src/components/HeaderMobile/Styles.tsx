import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  padding-left: 10px;
  height: 100%;
  min-height: 200px;
  max-height: 200px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderImage = styled.div<{ headerImage?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Logo = styled.div<{ CsLogo?: string }>`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 20%;
  height: 20%;
  background-image: url(${(props) => props.CsLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FormProgress = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const IndexNumber = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Number = styled.p`
  font-size: 0.6rem;
`;
