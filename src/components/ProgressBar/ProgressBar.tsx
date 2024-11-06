import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const ProgressBarStyled = styled.div<{ progressBar: number }>`
  background-color: black;
  width: ${({ progressBar }) => progressBar}%;
  height: 7px;
  ${({ theme }) => css`
    transition: width ${theme.transitionDuration || "0.3s"} ease;
  `}
`;

export const ProgressBar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  let progress = 0;
  if (path === "/") {
    progress = 0;
  } else {
    const stepNumber = parseInt(path.split("-")[1], 10);
    progress = Math.min(stepNumber, 6);
  }
  const progressBar = (progress / 6) * 100;

  return (
    <ProgressBarContainer>
      <ProgressBarStyled progressBar={progressBar} />
    </ProgressBarContainer>
  );
};
