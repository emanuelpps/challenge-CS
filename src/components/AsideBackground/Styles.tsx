import styled from "styled-components";
export const Container = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const FormProgress = styled.div`
  position: absolute;
  top: 10%;
  left: 95%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IndexNumber = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Number = styled.p`
  font-size: 0.8rem;
`;
