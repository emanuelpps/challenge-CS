import useFormProgress from "../../Store/FormProgress";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 7px;
  background-color: gray;
`;

const ProgressBarFill = styled.div<{ progressBar: number }>`
  background-color: black;
  width: ${({ progressBar }) => `${progressBar}%`};
  transition: width 0.3s ease;
`;

export const ProgressBar: React.FC = () => {
  const [progressBar, setProgressBar] = useState<number>(1);
  const { progress } = useFormProgress();

  useEffect(() => {
    console.log("Progress value:", progress);
      setProgressBar(Math.min((progress / 5) * 100, 100));
  }, [progress]);

  return (
    <ProgressBarContainer>
      <ProgressBarFill progressBar={progressBar} />
    </ProgressBarContainer>
  );
};
