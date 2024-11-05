import useFormProgress from "../../Store/FormProgress";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  background-color: black;
  width: ${({ progress }) => (progress / 5) * 100}%;
  transition: width 0.3s ease;
`;

export const ProgressBar: React.FC = () => {
  const { progress } = useFormProgress();

  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progress} />
    </ProgressBarContainer>
  );
};
